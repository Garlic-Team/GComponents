import { Client, Collection } from 'discord.js';
import { Component } from '../structures/Component';
export declare class GComponentHandler {
    private client;
    private components;
    constructor(client: Client, components: Collection<string, Component>);
    interactionEvent(): void;
}
