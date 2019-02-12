const argv = require('yargs').options({
    direction: {
        alias: 'd',
        demand: true 
    }
}).argv;

module.exports = {
    argv
}