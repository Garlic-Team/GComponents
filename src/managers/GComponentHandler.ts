import { Client, Collection } from 'discord.js';

import { ComponentType, Events } from '../util/Constants';

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
                const regex = new RegExp('[A-Za-z0-9]+', 'gd');
                const args = interaction.customId.match(regex);
                const name = args.shift();

                const component = this.components.find(cmp => {
                    if (typeof cmp.name === 'string') return cmp.name === interaction.customId;
                    else if (cmp.name instanceof RegExp) return cmp.name.test(interaction.customId);
                    else return false;
                }) ?? this.components.get(name);
                if (!component) return;

                if (component.type === ComponentType.BUTTON && !interaction.isButton()) return;
                if (component.type === ComponentType.SELECT_MENU && !interaction.isSelectMenu()) return;

                if (component.userRequiredPermissions[0] && !interaction.memberPermissions.has(component.userRequiredPermissions)) return interaction.deferReply();

                await component.run(interaction, args);
            } catch (e) {
                this.client.emit(Events.DEBUG, e);
            }
        });
    }
}
