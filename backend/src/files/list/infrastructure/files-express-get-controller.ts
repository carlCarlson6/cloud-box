import { Request, Response } from "express";
import { ExpressRouteController } from "../../../infrastructure/express/express-route-controller";
import { azureBlobStorage } from "../../infrastructure/azure-blob-storage";
import { ListAllUserFiles, ListAllUserFilesUseCase } from "../list-all-user-files";

class FilesExpressGetController implements ExpressRouteController {
    constructor(
        private readonly useCase: ListAllUserFilesUseCase,
    ) {}

    async handle(request: Request, response: Response): Promise<void> {
        try {
            const treeView = await this.useCase.execute({
                // TODO - get user context from jwt token
                user: {
                    userIdentifier: "706068d4-d033-4737-91c9-4e85a940f086"
                }
            });
            response.status(200).json(treeView);
        }
        catch(error) {
            response.status(500).json({message: (error as Error).message});
        }
    }
}

export const filesExpressGetController = new FilesExpressGetController(new ListAllUserFiles(azureBlobStorage));