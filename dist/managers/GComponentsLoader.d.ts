import { Client, Collection } from 'discord.js';
export declare class GComponentsLoader {
    private client;
    private dir;
    private components;
    constructor(client: Client, components: Collection<string, object>, dir: string);
    __loadFiles(dir: string): Promise<void>;
}
