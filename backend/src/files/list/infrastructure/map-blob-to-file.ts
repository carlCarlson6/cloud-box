import { BlobItem } from "@azure/storage-blob";
import { File } from "../../file";
import { Size } from "../../size";

export default (blob: BlobItem): File => ({
    createdOn: blob.properties.createdOn!,
    lastModifiedOn: blob.properties.lastModified,
    contentType: blob.properties.contentType!,
    size: new Size(blob.properties.contentLength!),
    path: blob.name,
    extension: blob.name.split(".").at(-1) || "",
    name: blob.name,
});