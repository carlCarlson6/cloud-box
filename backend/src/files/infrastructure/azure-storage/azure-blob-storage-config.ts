export type AzureBlobStorageConfig = {
    connectionString: string;
};

export const azureBlobStorageConfig: AzureBlobStorageConfig = {
    connectionString: process.env.AZURE_STORAGE_CONNSTR!
}