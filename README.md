<div align="center">
    <h1>GComponents</h1>
  <p>
    <a href="https://www.npmjs.com/package/@gcommands/components"><img src="https://img.shields.io/npm/v/@gcommands/components?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/@gcommands/components"><img src="https://img.shields.io/npm/dt/@gcommands/components?maxAge=3600" alt="NPM downloads" /></a>
  <p>
    <a href="https://www.npmjs.com/package/@gcommands/components"><img src="https://nodei.co/npm/@gcommands/components.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
</div>

# Deprecated, use [GCommands](https://github.com/Garlic-Team/GCommands)

## Installation

Install with [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.js.org/):

```sh
npm install @gcommands/components
yarn add @gcommands/components
pnpm add @gcommands/components
```

```js
const { GComponents } = require("@gcommands/components");
const { Client } = require("discord.js");
const { join } = require("path");
const client = new Client();

new GComponents(client, { dir: join(__dirname, "components") });

client.login("token");
```
