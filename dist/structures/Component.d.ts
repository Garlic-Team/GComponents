import { Client, MessageComponentType } from 'discord.js';
export declare class Component {
    client: Client;
    name: string;
    type: MessageComponentType;
    userRequiredPermissions?: string | Array<string>;
    private _path;
    constructor(client: Client, options: {
        name: string;
        type: MessageComponentType;
        userRequiredPermissions?: string | Array<string>;
    });
}
