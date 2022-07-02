import { UseCase } from "../common/use-case"
import { ListAllUserFilesQuery } from "./get/list/list-all-user-files-query"
import { TreeView } from "./tree-view"
import { UploadFilesCommand } from "./upload/upload-file-command"

export interface FilesUseCases {
    listAllUserFiles: UseCase<ListAllUserFilesQuery, Promise<TreeView>>
    uploadFiles: UseCase<UploadFilesCommand, Promise<void>>
}