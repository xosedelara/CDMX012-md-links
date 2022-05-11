const { fs, path } = require('./exports');

const { resolvePathsInFolder } = require('./pathFunctions.js')

const arrayOfMdFiles = [];

function typeOfFile(workingPath) {
    let result = []
    if (fs.lstatSync(workingPath).isDirectory()) {
        files = fs.readdirSync(workingPath, 'utf-8')
        const insideDir = resolvePathsInFolder(files, workingPath)
        result = insideDir.forEach(file => typeOfFile(file))
    }else if (path.extname(workingPath) === '.md') {
        result.push(workingPath)
    }
    arrayOfMdFiles.push.apply(arrayOfMdFiles, result)
    return arrayOfMdFiles
};

function pathIsAbsolute(givenPath) {
    if (path.isAbsolute(givenPath)=== true) {
        return givenPath                                                                                   
        // isAFile(givenPath)
    } else {
        return path.resolve(givenPath) 
    }
};

function pathExists(givenPath) {
    if (fs.accessSync(givenPath) === undefined){
        return true
    } else {
        return console.error('the path does not exist') 
    }
};

module.exports =  { pathExists, pathIsAbsolute, typeOfFile }