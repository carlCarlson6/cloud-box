export type FileAction = {
    type: FileActions;
    payload: any; 
}

export type FileActions = 
    "Uploading" | 
    "UploadSuccessful" | 
    "UploadError" |
    "FetchingFiles" |
    "FetchedFiles";