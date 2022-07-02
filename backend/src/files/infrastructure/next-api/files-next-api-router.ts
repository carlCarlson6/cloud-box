import { NextApiRequest, NextApiResponse } from "next";
import { NextApiHandler } from "../../../infrastructure/next-api/next-api-handler";
import { FilesUseCases } from "../../files-use-cases";
import { HTTP_METHODS } from "../../../infrastructure/http-methods";
import { FilesNextApiGetHandler } from "./files-next-api-get-handler";
import { FilesNextApiPostHandler } from "./files-next-api-post-handler";


export class FilesNextApiRouter implements NextApiHandler {
    private readonly filesUri = "/api/files";
    private readonly getHandler: NextApiHandler;
    private readonly postHandler: NextApiHandler;

    constructor({listAllUserFiles, uploadFiles}: FilesUseCases) {
        this.getHandler = new FilesNextApiGetHandler(listAllUserFiles);
        this.postHandler = new FilesNextApiPostHandler(uploadFiles);
    }

    async handle(request: NextApiRequest, response: NextApiResponse): Promise<void> {
        switch (`${request.method?.toLocaleUpperCase()} ${request.url}`) {
            case `${HTTP_METHODS.GET} ${this.filesUri}`:
                await this.getHandler.handle(request, response);
                break;
            case `${HTTP_METHODS.POST} ${this.filesUri}`:
                await this.postHandler.handle(request, response);
                break;
            default:
                this.handleUnkownCase(response);
                break;
        }
        return;
    }
    private handleUnkownCase(response: NextApiResponse) {
        response.status(404).json({ error: "unkown" });
    }
}