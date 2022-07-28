import { UserContext } from "../../common/user-context";

export type UploadFileCommand = {
    sourcePath: string;
    destinationPath: string;
    size: number;
    user: UserContext
};

export type UploadFilesCommand = UploadFileCommand[];
