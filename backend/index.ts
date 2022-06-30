import filesUseCases from "./files/infrastructure/bootstrap-files-use-cases";
import { FilesNextApiRouter } from "./files/infrastructure/next-api/files-next-api-router";

export const filesNextApiRouteHandler = new FilesNextApiRouter(filesUseCases);