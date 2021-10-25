import { Client, Collection } from 'discord.js';
import { Component } from '../structures/Component';
export declare class GComponents {
    client: Client;
    dir: string;
    components: Collection<string, Component>;
    constructor(client: Client, dir: string);
}
