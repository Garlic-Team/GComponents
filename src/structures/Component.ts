import { Client, MessageComponentType } from 'discord.js';

export class Component {
    public client: Client;
    public name: string;
    public type: MessageComponentType;
    public userRequiredPermissions?: string | Array<string>;
    private _path: string;

    constructor(client: Client, options: { name: string, type: MessageComponentType, userRequiredPermissions?: string | Array<string> }) {
        this.client = client;
        this.name = options.name;
        this.type = options.type;
        this.userRequiredPermissions = options.userRequiredPermissions;
    }
}
