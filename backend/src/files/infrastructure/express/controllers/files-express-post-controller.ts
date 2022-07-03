import { Request, Response } from "express";
import formidable, { File } from "formidable";
import { UseCase } from "../../../../common/use-case";
import { ExpressRouteController } from "../../../../infrastructure/express/express-route-controller";
import { UploadFileCommand, UploadFilesCommand } from "../../../upload/upload-file-command";
import filesUseCases from "../../bootstrap-files-use-cases";

type ProcessedFiles = Array<[string, File]>;

class FilesExpressPostController implements ExpressRouteController {
    constructor(
        private readonly uploadFiles: UseCase<UploadFilesCommand, Promise<void>>
    ) {}
    
    // TODO - handle failure
    async handle(request: Request, response: Response): Promise<void> {
        const files = await new Promise<ProcessedFiles | undefined>((resolve, reject) => {
            const files: ProcessedFiles = [];
            new formidable.IncomingForm()
                .on('file', (field, file) => files.push([field, file]))
                .on('end', () => resolve(files))
                .on('error', err => reject(err))
                .parse(request);
        });

        if (!files) throw new Error(); // TODO - create proper error

        const commands: UploadFileCommand[] = files.map(f => ({
            destinationPath: `${f[0]}`,
            sourcePath: `${f[1].filepath}`,
            size: f[1].size
        }));

        await this.uploadFiles.execute(commands);

        response.status(200).json({});
    }
}

export const filesExpressPostController = new FilesExpressPostController(filesUseCases.uploadFiles);