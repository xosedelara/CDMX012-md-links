const process = require('process');
const { gettingLinks } = require('./components/getLinks');
const {validateLinks}= require('./components/validate')
const { pathExists, pathIsAbsolute, typeOfFile } = require('./components/index');
const yargs = require('yargs');

const givenPath = (process.argv[2]);
const options = (process.argv[3]);


const markedDownFiles = (givenPath, options) => {
    return new Promise ((resolve, reject) => {
        if (pathExists(givenPath) === true){
        const absolutePath = pathIsAbsolute(givenPath)
        const mdFiles = typeOfFile(absolutePath)
        if()
        validateLinks(gettingLinks(mdFiles)).then(algo=>console.log(algo))
        }else{
            console.log('this path does not exist')
        }
    })
}
markedDownFiles(givenPath)