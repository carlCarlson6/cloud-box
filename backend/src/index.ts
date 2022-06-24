import { ListAllUserFiles } from "./files/get/list-all/list-all-user-files";
import { azureBlobStorage } from "./files/services/infrastructure/azure-storage/azure-blob-storage";
import { encriptator } from "./files/services/infrastructure/encryptation/aes-encryptator";

const listAllUserFilesUseCase = new ListAllUserFiles(
    encriptator,
    azureBlobStorage
);