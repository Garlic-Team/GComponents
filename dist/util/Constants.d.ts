import { PermissionResolvable } from 'discord.js';
export declare const Events: {
    DEBUG: string;
    LOG: string;
    COMMAND_EXECUTE: string;
    COMMAND_ERROR: string;
    COMMANDS_LOADED: string;
    COMMAND_NOT_FOUND: string;
};
export interface ComponentOptions {
    name: string;
    type: 'BUTTON' | 'SELECT_MENU';
    userRequiredPermissions?: PermissionResolvable | Array<PermissionResolvable>;
}
export declare enum ComponentType {
    BUTTON = "BUTTON",
    SELECT_MENU = "SELECT_MENU"
}
