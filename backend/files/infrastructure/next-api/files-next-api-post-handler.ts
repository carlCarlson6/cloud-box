import { NextApiRequest, NextApiResponse } from "next";
import { NextApiHandler } from "../../../infrastructure/next-api/next-api-handler";
import formidable, { File } from "formidable";
import { UseCase } from "../../../common/use-case";
import { UploadFileCommand, UploadFilesCommand } from "../../upload/UploadFileCommand";

export class FilesNextApiPostHandler implements NextApiHandler {
    constructor(
        private readonly uploadFiles: UseCase<UploadFilesCommand, Promise<void>>
    ) {}

    async handle(request: NextApiRequest, response: NextApiResponse<any>): Promise<void> {
        const files = await new Promise<ProcessedFiles | undefined>((resolve, reject) => {
            const files: ProcessedFiles = [];
            new formidable.IncomingForm()
                .on('file', (field, file) => files.push([field, file]))
                .on('end', () => resolve(files))
                .on('error', err => reject(err))
                .parse(request);
        });

        if (!files)
            throw new Error();

        const commands: UploadFileCommand[] = files.map(f => ({
            destinationPath: `${f[0]}/${f[1].originalFilename}`,
            sourcePath: `${f[1].filepath}/${f[1].newFilename}`
        }));

        console.log(commands);

        await this.uploadFiles.execute(commands);
    }
}

type ProcessedFiles = Array<[string, File]>;