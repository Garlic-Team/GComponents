import { Client, Collection } from 'discord.js';
import { GComponentsLoader } from '../managers/GComponentsLoader';

export class GComponents {
    public client: Client;
    public dir: string;
    public components: Collection<string, object>;

    constructor(client: Client, dir: string) {
        this.client = client;
        this.dir = dir;
        this.components = new Collection();

        new GComponentsLoader(this.client, this.components, this.dir);
    }
}
