import * as storageBlob from "@azure/storage-blob";
import { FileStorageManager, FileUploadInfo } from "../file-storage-manager";
import { azureStorageConfig, AzureStorageConfig } from "../../infrastructure/azure-storage/azure-storage-config";
import { File } from "../file";
import mapBlobToFile from "../list/infrastructure/map-blob-to-file";
import fs from 'fs';

export class AzureBlobStorage implements FileStorageManager {
    private readonly blobClient: storageBlob.BlobServiceClient;

    constructor(config: AzureStorageConfig) {
        this.blobClient = storageBlob.BlobServiceClient.fromConnectionString(config.connectionString);
    }

    async upload(userIdentifier: string, uploadInfo: FileUploadInfo): Promise<void> {
        const container = this.blobClient.getContainerClient(userIdentifier);
        await container.createIfNotExists();

        var stream = fs.readFileSync(uploadInfo.sourcePath);
        container.uploadBlockBlob(uploadInfo.destinationPath, stream, uploadInfo.size);
    }

    async listAllUserFiles(userIdentifier: string): Promise<File[]> {
        const container = this.blobClient.getContainerClient(userIdentifier);

        const files = [];
        for await (const blob of container.listBlobsFlat()) {
            files.push(mapBlobToFile(blob));
        }

        return files;
    }
}

export const azureBlobStorage = new AzureBlobStorage(azureStorageConfig);