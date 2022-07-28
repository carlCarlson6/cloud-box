import { File } from "./file";

export type FileUploadInfo = {
    sourcePath: string;
    destinationPath: string;
    size: number;
}

export interface FileStorageManager {
    listAllUserFiles(userIdentifier: string): Promise<File[]>
    upload(userIdentifier: string, uploadInfo: FileUploadInfo): Promise<void>
}
