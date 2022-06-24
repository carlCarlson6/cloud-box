import { BlobServiceClient } from "@azure/storage-blob";
import { FileStorageManager } from "../../file-storage-manager";

class AzureBlobStorage implements FileStorageManager {
    private readonly blobClient: BlobServiceClient = {} as BlobServiceClient;

    constructor() {
        this.blobClient = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNSTR!); // TODO - move to some kind of config
    }

    listAllUserFiles(userIdentifier: string): Promise<void> {
        return this.listBlobsOnContainer(userIdentifier);
    }

    private async listBlobsOnContainer(containerName: string): Promise<void> {
        var container = this.blobClient.getContainerClient(containerName);
        var blobs = container.listBlobsFlat();

        for await (const blob of blobs) {
            console.log(blob);
        }
    }
}

export const azureBlobStorage = new AzureBlobStorage();