export declare class CustomId {
    name: string;
    ids: Array<string>;
    constructor(options: {
        name: string;
        ids: Array<string>;
    });
    get(): string;
    setName(name: string): this;
    addId(id: string): this;
    addIds(ids: Array<string>): this;
}
