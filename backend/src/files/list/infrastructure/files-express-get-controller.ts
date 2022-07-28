import { Request, Response } from "express";
import { ExpressRouteController } from "../../../infrastructure/express/express-route-controller";
import { readUserContext } from "../../../infrastructure/express/read-user-context";
import { azureBlobStorage } from "../../infrastructure/azure-blob-storage";
import { ListAllUserFiles, ListAllUserFilesUseCase } from "../list-all-user-files";

export class FilesExpressGetController implements ExpressRouteController {
    constructor(
        private readonly useCase: ListAllUserFilesUseCase,
    ) {}

    async handle(request: Request, response: Response): Promise<void> {
        try {
            const treeView = await this.useCase.execute({
                user: readUserContext(request)
            });
            response.status(200).json(treeView);
        }
        catch(error) {
            response.status(500).json({message: (error as Error).message});
        }
    }
}
