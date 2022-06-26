import filesUseCases from "../../files/infrastructure/bootstrap-files-use-cases";
import { FilesNextApiRouteHandler } from "../../files/infrastructure/files-next-api-route-handler";

export const filesNextApiRouteHandler = new FilesNextApiRouteHandler(filesUseCases);