export type UploadFileCommand = {
    sourcePath: string;
    destinationPath: string;
    size: number;
};
export type UploadFilesCommand = UploadFileCommand[];