import { UseCase } from "../../common/use-case";
import { FileStorageManager } from "../file-storage-manager";
import { UploadFilesCommand } from "./upload-file-command";

export class UploadFiles implements UseCase<UploadFilesCommand, Promise<void>> {
    constructor(
        private readonly storage: FileStorageManager,
    ) {}
    
    async execute(input: UploadFilesCommand): Promise<void> {
        for (const command of input) {
            await this.storage.upload(
                "706068d4-d033-4737-91c9-4e85a940f086",
                {
                    sourcePath: command.sourcePath,
                    destinationPath: command.destinationPath,
                    size: command.size
                }
            )
        }
    }
}