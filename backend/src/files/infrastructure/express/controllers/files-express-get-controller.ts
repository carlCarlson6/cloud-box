import { Request, Response } from "express";
import { UseCase } from "../../../../common/use-case";
import { ExpressRouteController } from "../../../../infrastructure/express/express-route-controller";
import { ListAllUserFilesQuery } from "../../../get/list/list-all-user-files-query";
import { TreeView } from "../../../tree-view";
import filesUseCases from "../../bootstrap-files-use-cases";

class FilesExpressGetController implements ExpressRouteController {
    constructor(
        private readonly useCase: UseCase<ListAllUserFilesQuery, Promise<TreeView>>,
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

export const filesExpressGetController = new FilesExpressGetController(filesUseCases.listAllUserFiles);