import { Size } from "./size";

export type File = {
    createdOn: Date,
    lastModifiedOn: Date,
    contentType: string,
    size: Size,
    name: string,
    extension: string
    fullname: string
}