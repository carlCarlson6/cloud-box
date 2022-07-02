import { FileAction } from "./FileAction";
import { FilesState } from "./FilesState";

export const filesReducer = (state: FilesState, { payload, type}: FileAction): FilesState => {
    switch (type) {
        case "FetchingFiles": 
            return state;
        case "FetchedFiles":
            return { ...state, files: payload }
        default:
            return state;
    }
}