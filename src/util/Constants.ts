/* eslint-disable no-unused-vars */
import { PermissionResolvable } from 'discord.js';

export const Events = {
    DEBUG: 'debug',
    LOG: 'log',
    COMMAND_EXECUTE: 'commandExecute',
    COMMAND_ERROR: 'commandError',
    COMMANDS_LOADED: 'commandsLoaded',
    COMMAND_NOT_FOUND: 'commandNotFound',
};

export interface ComponentOptions {
    name: string | RegExp;
    type: 'BUTTON' | 'SELECT_MENU';
    userRequiredPermissions?: PermissionResolvable | Array<PermissionResolvable> ;
}

export interface GComponentsOptions {
    dir: string;
}

// eslint-disable-next-line no-shadow
export enum ComponentType {
    BUTTON = 'BUTTON',
    SELECT_MENU = 'SELECT_MENU'
}
