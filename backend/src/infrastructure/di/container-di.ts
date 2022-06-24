import { Container } from "inversify";
import { ListAllUserFiles } from "../../files/get/list-all/list-all-user-files";
import { azureBlobStorage } from "../../files/services/infrastructure/azure-storage/AzureBlobStorage";
import { encriptator } from "../../files/services/infrastructure/encryptation/aes-encryptator";

export const bootstrapContainerDI = () => {
    const listAllUserFilesUseCase = new ListAllUserFiles(
        encriptator,
        azureBlobStorage
    );

    return new Container();;
};