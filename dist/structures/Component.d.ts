import { Client, MessageComponentInteraction, PermissionResolvable } from 'discord.js';
import { ComponentType, ComponentOptions } from '../util/Constants';
export declare class Component {
    client: Client;
    name: string | RegExp;
    type: ComponentType;
    userRequiredPermissions?: Array<PermissionResolvable>;
    private _path;
    constructor(client: Client, options: ComponentOptions);
    run(interaction: MessageComponentInteraction, args: Array<string>): void;
    private validate;
}
