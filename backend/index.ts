import filesUseCases from "./src/files/infrastructure/bootstrap-files-use-cases";
import { FilesNextApiRouter } from "./src/files/infrastructure/next-api/files-next-api-router";

export const filesNextApiRouteHandler = new FilesNextApiRouter(filesUseCases);