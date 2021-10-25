const { execSync } = require('child_process');

let build = (execSync('npx babel --extensions .ts ./src -d ./dist --minified')).toString();
if (build.includes('Successfully')) {
    console.log('Done!')
}