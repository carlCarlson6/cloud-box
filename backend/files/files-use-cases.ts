import { UseCase } from "../common/use-case"
import { ListAllUserFilesQuery } from "./get/list/list-all-user-files-query"
import { TreeView } from "./tree-view"

export interface FilesUseCases {
    listAllUserFiles: UseCase<ListAllUserFilesQuery, Promise<TreeView>>
}