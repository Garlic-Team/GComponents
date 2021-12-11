import { runGenerator } from '@discordjs/ts-docgen';

runGenerator({
    existingOutput: 'docs/out-master.json',
	output: 'docs/master.json',
    custom: 'docs.yml'
});
