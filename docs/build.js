const { runGenerator } = require('@discordjs/ts-docgen');

runGenerator({
  existingOutput: './main.json',
  output: './main.json',
});
