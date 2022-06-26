import { File } from "./file";

export interface FileStorageManager {
    listAllUserFiles(userIdentifier: string): Promise<File[]>
}