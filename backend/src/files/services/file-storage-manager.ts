export interface FileStorageManager {
    listAllUserFiles(userIdentifier: string): Promise<void>
}