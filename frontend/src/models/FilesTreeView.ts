export type FileSize = {
    fileSizeInBytes: number,
}

export type File = {
    createdOn: Date,
    lastModifiedOn: Date,
    contentType: string,
    size: FileSize,
    name: string,
    extension: string
    path: string
}

export interface TreeView {
    elements: Record<string, File[] | TreeView>
    count: number
    size: FileSize
}