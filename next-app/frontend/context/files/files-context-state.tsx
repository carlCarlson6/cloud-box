import { useReducer } from "react";
import { filesReducer } from "./files-reducer";
import FilesContext from "./files-context";

const FilesContextState = (props: any) => {
    const [state, dispatcher] = useReducer(filesReducer, {
        files: []
    });

    return (
        <FilesContext.Provider
            value={{ state }}
        >
            {props.children}
        </FilesContext.Provider>
    );
}

export default FilesContextState;