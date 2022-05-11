#!/usr/bin/env node
const { yargs, chalk } = require('../components/exports')
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


//Stats Functions:
const total = (res) =>{
  return res.length
}
const unique= (res) => {
  let uniqueLinks = new Set (res.map((element) => element.href)).size
  return uniqueLinks
}
const broken = (res) => {
  let brokenLinks = 0
  for (element of res){
    if (element.ok !== 'ok'){
      brokenLinks++
    }
  }
  return brokenLinks
}
//Chalk setup
/* const error = chalk.red;
const warning = chalk.orange;
const statsA = chalk.blue;
const statsB = chalk.purple;
const statsC = chalk.yellow */

const main = () =>{
  const givenPath = (yargs.argv._).toString()
  let option = '';
    if (yargs.argv._[0] === null) {
      console.log(error.('Please insert a path and an option, type --help if needed'))
    } else if (yargs.argv.validate) {
      option = 'validate'
      mdLinks(givenPath, option).then(res => {
        console.log(res)
        if(yargs.argv.stats){
          console.log(('\nTotal: ') + total(res) + ('\nUnique: ') + unique(res) + ('\nBroken: ') + broken(res))
        }
      })
    }else {
      option = undefined
      mdLinks(givenPath, option).then(res =>{ 
        console.log(res)
        if(yargs.argv.stats){
          console.log(('\nTotal: ') + total(res) + ('\nUnique: ') + unique(res))
        }
      })
  }
}
main()