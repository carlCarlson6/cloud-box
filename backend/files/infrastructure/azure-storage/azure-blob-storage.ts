import * as storageBlob from "@azure/storage-blob";
import { FileStorageManager } from "../../file-storage-manager";
import { azureBlobStorageConfig, AzureBlobStorageConfig } from "./azure-blob-storage-config";
import { File } from "../../file";
import mapBlobToFile from "./map-blob-to-file";

class AzureBlobStorage implements FileStorageManager {
    private readonly blobClient: storageBlob.BlobServiceClient;

    constructor(config: AzureBlobStorageConfig) {
        this.blobClient = storageBlob.BlobServiceClient.fromConnectionString(config.azureStorageConnectionString);
    }

    listAllUserFiles(userIdentifier: string): Promise<File[]> {
        return this.listBlobsOnContainer(userIdentifier);
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