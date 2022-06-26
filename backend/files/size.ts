
export class Size {

    public get inBs(): number {
        return this.fileSizeInBytes;
    }

    public get inKBs(): number {
        return this.fileSizeInBytes / 1024;
    }

    public get inMBs(): number {
        return this.inKBs / 1024;
    }

    constructor(
        private readonly fileSizeInBytes: number
    ) { }

    static sum(sizeA: Size, sizeB: Size) {
        return new Size(sizeA.inBs+sizeB.inBs);
    }
}
