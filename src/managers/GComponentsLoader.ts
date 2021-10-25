import * as fs from 'fs';
import * as path from 'path';
import { Client, Collection } from 'discord.js';

import { Color } from '../structures/Color';
import { GError } from '../structures/GError';
import { Component } from '../structures/Component';

import { Events } from '../util/Constants';
import { isClass } from '../util/util';

export class GComponentsLoader {
    private client: Client;
    private dir: string;
    private components: Collection<string, object>;

    constructor(client: Client, components: Collection<string, object>, dir: string) {
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
            } else if (!['.js', '.ts'].includes(fileType)) { continue; }

            let file = await import(path.join(dir, rawFileName));

            if (isClass(file)) {
                file = new file(this.client);
                if (!(file instanceof Component)) throw new GError('[COMPONENT]', `Component ${fileName} doesnt belong in components.`);
            }

            file._path = `${dir}/${fileName}${fileType}`;

            this.components.set(file.name, file);
            this.client.emit(Events.LOG, new Color(`&d[GComponents] &aLoaded (File): &e➜   &3${fileName}`).getText());
        }
    }
}
