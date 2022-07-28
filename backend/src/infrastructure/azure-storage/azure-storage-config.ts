import { config as readEnv} from "dotenv";

readEnv()

export type AzureStorageConfig = {
    connectionString: string;
};

export const azureStorageConfig: AzureStorageConfig = {
    connectionString: process.env.AZURE_STORAGE_CONNSTR!
}

export const getAzureStoreConfig = (): AzureStorageConfig => ({
    connectionString: process.env.AZURE_STORAGE_CONNSTR!
});