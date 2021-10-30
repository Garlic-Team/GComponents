import { runGenerator } from '@discordjs/ts-docgen';

runGenerator({
	existingOutput: 'docs/main.json',
	output: 'docs/docs.json'
});
