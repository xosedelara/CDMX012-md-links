const process = require('process')
const { pathExists } = require('./components/index')
// const {makeArrayOfLinks} = require('./getLinks')

const givenPath = (process.argv[2]);
console.log(givenPath, 'is now givenPath');

pathExists(givenPath);
