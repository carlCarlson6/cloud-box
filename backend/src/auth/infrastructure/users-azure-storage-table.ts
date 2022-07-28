import { TableClient } from "@azure/data-tables";
import { RestError } from "@azure/storage-blob";
import { azureStorageConfig, AzureStorageConfig } from "../../infrastructure/azure-storage/azure-storage-config";
import { User } from "../user";
import { UsersRepository } from "../users-repository";

export class UsersAzureStorageTable implements UsersRepository {
    private readonly usersTable: TableClient;

    constructor(config: AzureStorageConfig) {
        this.usersTable = TableClient.fromConnectionString(config.connectionString, "USERS", {
            allowInsecureConnection: true
        });
    }
    
    async save(user: User): Promise<void> {
        try {
            await this.usersTable.createEntity( {
                ...user,
                partitionKey: "APP_USERS",
                rowKey: user.email,
            });
        } catch(e) {
            const errorDetails = (e as RestError).details as any;
            throw new Error(errorDetails.odataError.code);
        }
    }

    async get(email: string): Promise<User|null> {
        const user = await this.usersTable.getEntity<Record<string, string>>("APP_USERS", email);
        return {
            id: user["id"],
            email: user.rowKey!,
            hashedPassword: user["hashedPassword"],
        };
    }
}

export const bootstrapUsersTable = async (): Promise<void> => {
    const table = TableClient.fromConnectionString(azureStorageConfig.connectionString, "USERS", {
        allowInsecureConnection: true
    });

    table.createTable();
}