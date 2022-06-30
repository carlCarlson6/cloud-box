import { UseCase } from "../../common/use-case";
import { FileStorageManager } from "../file-storage-manager";
import { UploadFileCommand, UploadFilesCommand } from "./UploadFileCommand";

export class UploadFilesUseCase implements UseCase<UploadFilesCommand, Promise<void>> {
    constructor(
        private readonly storage: FileStorageManager,
    ) {}
    
    execute(input: UploadFilesCommand): Promise<void> {
        throw new Error("Method not implemented.");
    }
}