import { useReducer } from "react";
import { filesReducer } from "./FilesReducer";
import FilesContext from "./FilesContext";
import { initialFilesState } from "./FilesState";
import { mockFetchFiles, mockFilesState } from "./Mock";

const FilesContextState = (props: any) => {
    const [state, dispatcher] = useReducer(filesReducer, initialFilesState);

    return (
        <FilesContext.Provider
            value={{ 
                state,
                fetchAllUserFiles: mockFetchFiles(dispatcher),
            }}
        >
            {props.children}
        </FilesContext.Provider>
    );
}

export default FilesContextState;