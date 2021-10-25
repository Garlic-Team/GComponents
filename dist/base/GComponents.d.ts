import { Client, Collection } from 'discord.js';
export declare class GComponents {
    client: Client;
    dir: string;
    components: Collection<string, object>;
    constructor(client: Client, dir: string);
}
