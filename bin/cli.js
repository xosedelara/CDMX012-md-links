#!/usr/bin/env node
const { process, yargs, colors } = require('../components/exports')
const { mdLinks } = require('../md-links');

const argv = yargs
  .scriptName('md-links')
  .usage('\nUsage: md-links <path> --validate --stats')
  .example(
    '$0 ./docs --validate --stats',
    'Shows the following links data: total, unique and broken.',
  )
  .option('validate', {
    alias: 'v',
    describe: 'Validates links through a HTTP request',
    type: 'boolean',
    demandOption: false,
  })
  .option('stats', {
    alias: 's',
    describe: 'Shows stats of urls and validations',
    type: 'boolean',
    demandOption: false,
  })
.help(true)
.argv;



const main = () =>{
const givenPath = process.argv[2];
let option = '';
if (yargs.argv._[0] == null) {
  console.log('Please insert a path and an option, type --help if needed')
} else if (yargs.argv.validate) {
  option = 'validate'
  mdLinks(givenPath, option).then(res => console.log(res))
} else if (yargs.argv.stats) {
  option = 'stats'
  mdLinks(givenPath, option).then(res => console.log(res))
} else if (yargs.argv.stats && yargs.argv.validate) {
  option = 'validate, stats'
  mdLinks(givenPath, option).then(res => console.log(res))
} else {
  option = undefined
  mdLinks(givenPath, option).then(res => console.log(res))
}
}
main()