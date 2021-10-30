import { runGenerator } from '@discordjs/ts-docgen';

runGenerator({
	existingOutput: 'docs/dev.json',
	output: 'docs/docs.json'
});
