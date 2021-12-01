import * as fs from 'fs';
import * as path from 'path';
import { Client, Collection } from 'discord.js';

import { Color } from '../structures/Color';
import { GError } from '../structures/GError';
import { Component } from '../structures/Component';

import { Events } from '../util/Constants';
import { isClass } from '../util/util';

export class GComponentsLoader {
    private readonly client: Client;
    private readonly dir: string;
    private components: Collection<string, Component>;

    constructor(client: Client, components: Collection<string, Component>, dir: string) {
        this.client = client;
        this.dir = dir;
        this.components = components;

        this.__loadFiles(this.dir);
    }

    async __loadFiles(dir: string) {
        for await (const fsDirent of fs.readdirSync(dir, { withFileTypes: true })) {
            const rawFileName = fsDirent.name;
            const fileType = path.extname(rawFileName);
            const fileName = path.basename(rawFileName, fileType);

            if (fsDirent.isDirectory()) {
                await this.__loadFiles(path.join(dir, rawFileName));
                continue;
            } else if (!['.js', '.ts'].includes(fileType)) {
                continue;
            }

            let file = await import(path.join(dir, rawFileName));
            if (file.default) file = file.default;
            else if (!file.name) file = Object.values(file)[0];

            if (isClass(file)) {
                file = new file(this.client);
                if (!(file instanceof Component)) throw new GError('[COMPONENT]', `Component ${fileName} doesnt belong in components.`);
            } else if (typeof file === 'object') {
                try {
                    file = new Component(this.client, file);
                } catch {
                    throw new GError('[COMPONENT]', `Component ${fileName} doesnt belong in components.`);
                }
            }

            if (Array.isArray(file.name)) {
                for (const name of file.name) {
                    if (this.components.has(name)) throw new GError('[COMPONENT]', `Duplicate component found: ${name}`);
                    this.components.set(name, file);
                }
            } else {
                if (this.components.has(file.name)) throw new GError('[COMPONENT]', `Duplicate component found: ${file.name}`);
                this.components.set(file.name, file);
            }
            this.client.emit(Events.LOG, new Color(`&d[GComponents] &aLoaded (File): &e➜   &3${fileName}`).getText());
        }
    }
}
