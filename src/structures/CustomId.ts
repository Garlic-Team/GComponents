export class CustomId {
    public name: string;
    public ids: Array<string>;

    constructor(options: { name: string, ids: Array<string>}) {
        this.name = options.name;
        this.ids = options.ids !== undefined ? options.ids : [];
    }
    get() {
        return `${this.name}${this.ids[0] ? `-${this.ids.join('-')}` : ''}`;
    }
    setName(name: string) {
        this.name = name;
        return this;
    }
    addId(id: string) {
        this.ids.push(id);
        return this;
    }
    addIds(ids: Array<string>) {
        for (const id in ids) {
            this.addId(id);
        }
        return this;
    }
}
