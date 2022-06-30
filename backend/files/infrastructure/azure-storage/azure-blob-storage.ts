import * as storageBlob from "@azure/storage-blob";
import { FileStorageManager, FileUploadInfo } from "../../file-storage-manager";
import { azureBlobStorageConfig, AzureBlobStorageConfig } from "./azure-blob-storage-config";
import { File } from "../../file";
import mapBlobToFile from "./map-blob-to-file";
import fs from 'fs';

class AzureBlobStorage implements FileStorageManager {
    private readonly blobClient: storageBlob.BlobServiceClient;

    constructor(config: AzureBlobStorageConfig) {
        this.blobClient = storageBlob.BlobServiceClient.fromConnectionString(config.azureStorageConnectionString);
    }

    upload(userIdentifier: string, uploadInfo: FileUploadInfo): Promise<void> {
        return this.uploadFileToContainer(userIdentifier, uploadInfo);
    }

    listAllUserFiles(userIdentifier: string): Promise<File[]> {
        return this.listBlobsOnContainer(userIdentifier);
    }

    private async uploadFileToContainer(containerName: string, uploadInfo: FileUploadInfo): Promise<void> {
        const container = this.blobClient.getContainerClient(containerName);
        await container.createIfNotExists();

        container.uploadBlockBlob(uploadInfo.destinationPath, fs.readFileSync(uploadInfo.sourcePath), uploadInfo.size)

        throw new Error("");
    }

    private async listBlobsOnContainer(containerName: string): Promise<File[]> {
        const container = this.blobClient.getContainerClient(containerName);

        const files = [];
        for await (const blob of container.listBlobsFlat()) {
            files.push(mapBlobToFile(blob));
        }

        return files;
    }
}

export const azureBlobStorage = new AzureBlobStorage(azureBlobStorageConfig);