export type FileAction<T> = {
    type: FileActions;
    payload: T; 
}

export type FileActions = 
    "Uploading" | 
    "UploadSuccessful" | 
    "UploadError" |
    "FetchingFiles" |
    "FetchedFiles";