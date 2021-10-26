import { Client, Collection } from 'discord.js';
import { Component } from '../structures/Component';
import { GComponentsOptions } from '../util/Constants';
export declare class GComponents {
    client: Client;
    dir: string;
    components: Collection<string, Component>;
    constructor(client: Client, options: GComponentsOptions);
}
