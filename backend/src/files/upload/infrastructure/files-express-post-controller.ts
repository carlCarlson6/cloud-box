import { Request, Response } from "express";
import formidable, { File } from "formidable";
import { ExpressRouteController } from "../../../infrastructure/express/express-route-controller";
import { readUserContext } from "../../../infrastructure/express/read-user-context";
import { UploadFileCommand } from "../upload-file-command";
import { FilesUploader } from "../upload-files";

type ProcessedFiles = Array<[string, File]>;

export class FilesExpressPostController implements ExpressRouteController {
    constructor(
        private readonly uploadFiles: FilesUploader
    ) {}
    
    // TODO - handle failure
    async handle(request: Request, response: Response): Promise<void> {
        const user = readUserContext(request);
        
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
            size: f[1].size,
            user
        }));

        await this.uploadFiles.execute(commands);

        response.status(200).json({});
    }
}
