import { createContext } from "react";
import { FilesContextProviderValue } from "./files-context-provider-value";

const FilesContext = createContext<FilesContextProviderValue>({
    state: {
        files: []
    }
});

export default FilesContext;