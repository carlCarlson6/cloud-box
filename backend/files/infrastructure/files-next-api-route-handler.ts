import { NextApiRequest, NextApiResponse } from "next";
import { NextApiRouteHandler } from "../../infrastructure/next-api/next-api-route-handler";
import {FilesUseCases} from "../files-use-cases";
import { ListAllUserFilesQuery } from "../get/list/list-all-user-files-query";
import { TreeView } from "../tree-view";
import { UseCase } from "../../common/use-case";

export class FilesNextApiRouteHandler implements NextApiRouteHandler {
    private readonly listAllUserFiles: UseCase<ListAllUserFilesQuery, Promise<TreeView>>;

    constructor(filesUseCases: FilesUseCases) {
        this.listAllUserFiles = filesUseCases.listAllUserFiles;
    }

    async handle(request: NextApiRequest, response: NextApiResponse): Promise<void> {
        console.log("handling request");

        const treeView = await this.listAllUserFiles.execute({
            user: {
                userIdentifier: "706068d4-d033-4737-91c9-4e85a940f086"
            }
        });

        response.status(200).json(treeView);
    }
}