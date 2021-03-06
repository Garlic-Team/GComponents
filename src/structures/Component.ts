/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Client, MessageComponentInteraction, PermissionResolvable } from 'discord.js';

import { GError } from './GError';

import { ComponentOptions, ComponentType } from '../util/Constants';

type Name = string | RegExp;

export class Component {
    readonly client: Client;
    readonly name: Name | Array<Name>;
    readonly type: ComponentType;
    readonly run: (interaction: MessageComponentInteraction, args: Array<string>) => unknown;

    readonly userRequiredPermissions?: Array<PermissionResolvable>;

    constructor(client: Client, options: ComponentOptions) {
        this.client = client;

        this.validate(options);

        this.name = options.name;
        this.type = ComponentType[options.type];
        this.userRequiredPermissions = options.userRequiredPermissions !== undefined ? Array.isArray(options.userRequiredPermissions) ? options.userRequiredPermissions : [options.userRequiredPermissions] : [];
        if (options.run) this.run = options.run;
    }

    private validate(options: ComponentOptions) {
        if (typeof options.name !== 'string' && !(options.name instanceof RegExp) && !Array.isArray(options.name)) throw new GError(`[COMPONENT]`, `Name must be a string, RegExp or array`);
        if (!ComponentType[options.type]) throw new GError(`[COMPONENT ${options.name}]`, `Type must be a valid ComponentType`);
        if (!options.run && !this.run) throw new GError(`[COMPONENT ${options.name}]`, `The run function must be provided`);
    }
}
