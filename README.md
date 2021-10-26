<div align="center">
    <h1>GComponents</h1>
  <p>
    <a href="https://www.npmjs.com/package/gcommands"><img src="https://img.shields.io/npm/v/gcommands?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/gcommands"><img src="https://img.shields.io/npm/dt/gcommands?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://www.codefactor.io/repository/github/garlic-team/gcommands/overview/dev"><img src="https://www.codefactor.io/repository/github/garlic-team/gcommands/badge/dev" alt="Code Raiting" /></a>
  <p>
    <a href="https://www.npmjs.com/package/gcommands"><img src="https://nodei.co/npm/gcommands.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
</div>

---

# OFFICIAL ADDON FOR [GCOMMANDS](https://www.npmjs.com/package/gcommands)

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

new GComponents(client, {
  dir: join(__dirname, "components")
})

client.login("token")
```
