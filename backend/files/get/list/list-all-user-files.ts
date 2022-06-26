import { UseCase } from "../../../common/use-case";
import { FileStorageManager } from "../../file-storage-manager";
import { buildTreeView, TreeView } from "../../tree-view";
import { ListAllUserFilesQuery } from "./list-all-user-files-query";

export class ListAllUserFiles implements UseCase<ListAllUserFilesQuery, Promise<TreeView>> {
    constructor(
        private readonly fileManager: FileStorageManager,
    ) { }
    
    async execute(input: ListAllUserFilesQuery): Promise<TreeView> {
        console.log("executing use case");
        const files = await this.fileManager.listAllUserFiles(input.user.userIdentifier);
        const treeView = buildTreeView(files);
        return buildTreeView(files);
    }
}