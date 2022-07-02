import { createContext } from "react";
import { TreeView } from "../../models/FilesTreeView";
import { FilesState, initialFilesState } from "./FilesState";

export interface FilesContextProviderValue {
    state: FilesState,
    fetchAllUserFiles: () => Promise<TreeView>
}

const FilesContext = createContext<FilesContextProviderValue>({
    state: initialFilesState,
    fetchAllUserFiles: () => { throw new Error("method not provided") },
});

export default FilesContext;