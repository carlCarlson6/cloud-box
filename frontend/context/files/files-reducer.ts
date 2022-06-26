import { FileAction } from "./file-action";
import { FilesState } from "./files-state";

export const filesReducer = (state: FilesState, action: FileAction<any>): FilesState => {
    switch (action.type) {
        case "FetchingFiles": 
            return state;
        default:
            return state;
    }
}