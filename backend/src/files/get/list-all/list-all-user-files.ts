import { Encryptator } from "../../services/encryptator";
import { FileStorageManager } from "../../services/file-storage-manager";
import { UseCase } from "../../use-case";

export type ListAllUserFilesQuery = {
    userIdentifier: string
}

export class ListAllUserFiles implements UseCase<ListAllUserFilesQuery, Promise<void>> {
    constructor(
        private readonly encryptator: Encryptator,
        private readonly fileManager: FileStorageManager,
    ) { }
    
    execute(input: ListAllUserFilesQuery): Promise<void> {
        const hashedIdentifier = this.encryptator.encode(input.userIdentifier);
        this.fileManager.listAllUserFiles(hashedIdentifier);
        throw new Error("Method not implemented.");
    }
}