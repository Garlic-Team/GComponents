const { runGenerator } = require('@discordjs/ts-docgen');

runGenerator({
  existingOutput: './dev.json',
  output: './dev.json',
});
