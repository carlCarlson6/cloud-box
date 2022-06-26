import { ListAllUserFiles } from "../get/list/list-all-user-files"
import { azureBlobStorage } from "./azure-storage/azure-blob-storage";

const filesUseCases = {
    listAllUserFiles: new ListAllUserFiles(
        azureBlobStorage
    ),
};

export default filesUseCases;