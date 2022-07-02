import { TreeView } from "../../models/FilesTreeView"

export type FilesState = {
    treeView: TreeView
}

export const initialFilesState: FilesState = {
    treeView: {
        elements: {},
        count: 0,
        size: {
            fileSizeInBytes: 0
        }
    }
}

