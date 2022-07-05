export type AzureStorageConfig = {
    connectionString: string;
};

export const azureStorageConfig: AzureStorageConfig = {
    connectionString: process.env.AZURE_STORAGE_CONNSTR!
}