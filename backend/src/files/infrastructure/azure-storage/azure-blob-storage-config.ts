export type AzureBlobStorageConfig = {
    azureStorageConnectionString: string;
};

export const azureBlobStorageConfig: AzureBlobStorageConfig = {
    azureStorageConnectionString: process.env.AZURE_STORAGE_CONNSTR!
}