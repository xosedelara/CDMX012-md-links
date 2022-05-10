const { gettingLinks } = require('./components/getLinks');
const {validateLinks}= require('./components/validate')
const { pathExists, pathIsAbsolute, typeOfFile } = require('./components/getFiles');

const mdLinks = (givenPath, option) => {
    return new Promise ((resolve, reject) => {
        if (pathExists(givenPath) === true){
            const absolutePath = pathIsAbsolute(givenPath)
            const mdFiles = typeOfFile(absolutePath)
            const mdLinks = gettingLinks(mdFiles)
            if (option === undefined){
                resolve (mdLinks)
            }else if(option === 'validate'){
                resolve (validateLinks(mdLinks))
            }else reject
        }
    })
}

module.exports = { mdLinks }