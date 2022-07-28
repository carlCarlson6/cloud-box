import { Request, Response, Router } from "express";
import { getAzureStoreConfig } from "../../infrastructure/azure-storage/azure-storage-config";
import { BootstrapRouter } from "../../infrastructure/express/bootstrap-router";
import { FilesExpressGetController } from "../list/infrastructure/files-express-get-controller";
import { ListAllUserFiles } from "../list/list-all-user-files";
import { FilesExpressPostController } from "../upload/infrastructure/files-express-post-controller";
import { UploadFiles } from "../upload/upload-files";
import { AzureBlobStorage } from "./azure-blob-storage";

export const bootstrapFilesRouter: BootstrapRouter = () => {
    const fileStorage = new AzureBlobStorage(getAzureStoreConfig());

    const get = new FilesExpressGetController(new ListAllUserFiles(fileStorage));
    const post = new FilesExpressPostController(new UploadFiles(fileStorage));

    const router = Router()
        .get("/", (request: Request, response: Response) => get.handle(request, response))
        .post("/", (request: Request, response: Response) => post.handle(request, response));

    return { uri: "/api/files", router }
}