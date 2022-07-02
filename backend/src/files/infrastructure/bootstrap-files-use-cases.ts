import { FilesUseCases } from "../files-use-cases";
import { ListAllUserFiles } from "../get/list/list-all-user-files"
import { UploadFiles } from "../upload/upload-files";
import { azureBlobStorage } from "./azure-storage/azure-blob-storage";

const filesUseCases: FilesUseCases = {
    listAllUserFiles: new ListAllUserFiles(azureBlobStorage),
    uploadFiles: new UploadFiles(azureBlobStorage),
};

export default filesUseCases;