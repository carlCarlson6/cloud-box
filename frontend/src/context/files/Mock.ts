import { Dispatch } from "react";
import { FileAction } from "./FileAction";
import { FilesState } from "./FilesState";

export const mockFetchFiles = (dispatcher: Dispatch<FileAction>) => () => {
    dispatcher({ type: "FetchingFiles", payload: {} })
    dispatcher({ type: "FetchedFiles", payload: mockFilesState.treeView})
    return Promise.resolve(mockFilesState.treeView);
};

export const mockFilesState: FilesState = {
    treeView: {
        "elements": {
            ".": [
                {
                    "createdOn":  new Date("2022-06-26T00:53:53.000Z"),
                    "lastModifiedOn": new Date("2022-06-26T00:53:53.000Z"),
                    "contentType": "image/jpeg",
                    "size": {
                        "fileSizeInBytes": 828067
                    },
                    "path": "1619610590776.jpeg",
                    "extension": "jpeg",
                    "name": "1619610590776.jpeg"
                },
                {
                    "createdOn": new Date("2022-07-01T10:24:28.000Z"),
                    "lastModifiedOn": new Date("2022-07-01T10:24:28.000Z"),
                    "contentType": "application/octet-stream",
                    "size": {
                        "fileSizeInBytes": 1979
                    },
                    "path": "slides888.md",
                    "extension": "md",
                    "name": "slides888.md"
                }
            ],
            "images": {
                "elements": {
                    "something": {
                        "elements": {
                            ".": [
                                {
                                    "createdOn": new Date("2022-06-26T00:53:53.000Z"),
                                    "lastModifiedOn": new Date("2022-06-26T00:53:53.000Z"),
                                    "contentType": "image/png",
                                    "size": {
                                        "fileSizeInBytes": 4132694
                                    },
                                    "path": "images/something/4v90g7kt7jf61.png",
                                    "extension": "png",
                                    "name": "4v90g7kt7jf61.png"
                                }
                            ]
                        },
                        "count": 1,
                        "size": {
                            "fileSizeInBytes": 4132694
                        }
                    }
                },
                "count": 1,
                "size": {
                    "fileSizeInBytes": 4132694
                }
            },
            "test": {
                "elements": {
                    ".": [
                        {
                            "createdOn": new Date("2022-06-30T15:07:11.000Z"),
                            "lastModifiedOn": new Date("2022-06-30T15:07:11.000Z"),
                            "contentType": "application/octet-stream",
                            "size": {
                                "fileSizeInBytes": 1979
                            },
                            "path": "test/slides.md",
                            "extension": "md",
                            "name": "slides.md"
                        },
                        {
                            "createdOn": new Date("2022-07-01T10:09:20.000Z"),
                            "lastModifiedOn": new Date("2022-07-01T10:09:20.000Z"),
                            "contentType": "application/octet-stream",
                            "size": {
                                "fileSizeInBytes": 1979
                            },
                            "path": "test/slides2.md",
                            "extension": "md",
                            "name": "slides2.md"
                        },
                        {
                            "createdOn": new Date("2022-07-01T10:09:28.000Z"),
                            "lastModifiedOn": new Date("2022-07-01T10:09:28.000Z"),
                            "contentType": "application/octet-stream",
                            "size": {
                                "fileSizeInBytes": 1979
                            },
                            "path": "test/slides3.md",
                            "extension": "md",
                            "name": "slides3.md"
                        }
                    ]
                },
                "count": 3,
                "size": {
                    "fileSizeInBytes": 5937
                }
            }
        },
        "count": 4,
        "size": {
            "fileSizeInBytes": 4968677
        }
    }
}