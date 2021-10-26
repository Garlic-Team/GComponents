import { Client, Collection } from 'discord.js';

import { GComponentsLoader } from '../managers/GComponentsLoader';
import { GComponentHandler } from '../managers/GComponentHandler';

import { Component } from '../structures/Component';

import { GComponentsOptions } from '../util/Constants';

export class GComponents {
    public client: Client;
    public dir: string;
    public components: Collection<string, Component>;

    constructor(client: Client, options: GComponentsOptions) {
        this.client = client;
        this.dir = options.dir;
        this.components = new Collection();

        new GComponentsLoader(this.client, this.components, this.dir);
        new GComponentHandler(this.client, this.components);
    }
}
