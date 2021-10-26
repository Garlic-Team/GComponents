import { Client, Collection } from 'discord.js';
import { Component } from '../structures/Component';
export declare class GComponentsLoader {
    private client;
    private dir;
    private components;
    constructor(client: Client, components: Collection<string, Component>, dir: string);
    __loadFiles(dir: string): Promise<void>;
}
