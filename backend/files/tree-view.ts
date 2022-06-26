import { File } from "./file";
import { Size } from "./size";

export interface TreeView {
    elements: Record<string, File[] | TreeView>
    count: number
    size: Size
}

export const buildTreeView = (files: File[]): TreeView => {
    const elements: Record<string, File[] | TreeView> = {};

    const splittedNames = files.map(file => ({
        file: file,
        fullName: file.fullname,
        splittedName: file.fullname.split("/")
    }));
    
    const topLevelFiles = splittedNames.filter(x => x.splittedName.length == 1);
    elements["."] = topLevelFiles.map(x => x.file);

    const grouped = groupFiles(splittedNames);
    let groupsCount = 0;
    for (const group in grouped) {
        elements[group] = buildTreeView(grouped[group]);
        ++groupsCount;
    }

    return {
        elements,
        count: topLevelFiles.length + groupsCount,
        size: files.map(f => f.size).reduce((sizeA, sizeB) => Size.sum(sizeA, sizeB)),
    };
}

const groupFiles = (
    splittedNames: {
        file: File;
        fullName: string;
        splittedName: string[];
        }[]
    ) => splittedNames
        .filter(x => x.splittedName.length > 1)
        .reduce((
            group: Record<string, File[]>, 
            notTopLevelFile: {
                file: File,
                fullName: string,
                splittedName: string[],
            }) => 
            {
                group[notTopLevelFile.splittedName[0]] = group[notTopLevelFile.splittedName[0]] || [];
                group[notTopLevelFile.splittedName[0]].push({
                    ...notTopLevelFile.file,
                    fullname: notTopLevelFile.file.fullname.replace(`${notTopLevelFile.splittedName[0]}/`, ""),
                });
                return group;
            }, {});