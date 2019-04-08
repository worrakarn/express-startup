const program = require('commander');
const package = require('./package.json')

program
    .version(package.version, '-v, --version')
    .parse(process.argv);