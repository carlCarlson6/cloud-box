import { NextApiRequest, NextApiResponse } from "next";
import { UseCase } from "../../../common/use-case";
import { NextApiHandler } from "../../../infrastructure/next-api/next-api-handler";
import { ListAllUserFilesQuery } from "../../get/list/list-all-user-files-query";
import { TreeView } from "../../tree-view";

export class FilesNextApiGetHandler implements NextApiHandler {
    constructor(
        private readonly useCase: UseCase<ListAllUserFilesQuery, Promise<TreeView>>
    ) {}

    async handle(_: NextApiRequest, response: NextApiResponse<any>): Promise<void> {
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