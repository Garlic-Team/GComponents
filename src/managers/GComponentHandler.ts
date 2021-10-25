import { Client, Collection } from 'discord.js';

import { Events, ComponentType } from '../util/Constants';

import { Component } from '../structures/Component';

export class GComponentHandler {
    private client: Client;
    private components: Collection<string, Component>;

    constructor(client: Client, components: Collection<string, Component>) {
        this.client = client;
        this.components = components;

        this.interactionEvent();
    }

    interactionEvent() {
        this.client.on('interactionCreate', async interaction => {
            if (!interaction || !interaction.isMessageComponent()) return;

            try {
                const args = interaction.customId.split('-');
                const name = args.shift();

                const component = this.components.get(name);
                if (!component) return;

                if (component.type === ComponentType.BUTTON && !interaction.isButton()) return;
                if (component.type === ComponentType.SELECT_MENU && !interaction.isSelectMenu()) return;

                if (component.userRequiredPermissions[0] && !interaction.memberPermissions.has(component.userRequiredPermissions)) return interaction.deferReply();

                await component.run(interaction, args);
            } catch (e) { this.client.emit(Events.DEBUG, e); }
     });
    }
}
