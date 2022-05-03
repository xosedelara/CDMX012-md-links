const fs = require('fs');
const process = require('process');
const path = require('path');

const { gettingLinks } = require('./getLinks');
const  { resolvePath, resolvePathsInFolder } = require('./md-links.js')

const givenPath = (process.argv[2]);
console.log(givenPath, 'is now givenPath');


function lookForLinks(mdFiles) {
    console.log('looking for links in ', mdFiles)
    if (mdFiles.length>1){
        for (const file in mdFiles) {
        gettingLinks(file)
        }
    }else gettingLinks(mdFiles)
}

function isDir (workingPath) {
    console.log('reading directory');
    fs.readdir(workingPath, 'utf8', (err, files) => {
      if (err){
        return console.error
      }else {console.log(files, 'these are the files');
      resolvePathsInFolder(files, workingPath).forEach(path => isAFile(path));
    }// normalizePath(resolvePathsInFolder(files));
    });
};

function determineTypeOfFile(workingPath) {
    const arrayOfMdFiles = [];
    if (path.extname(workingPath)=== '.md'){
        console.log(workingPath, 'path is .md')
        arrayOfMdFiles.push(workingPath)
        console.log(arrayOfMdFiles)
        lookForLinks(arrayOfMdFiles)
    } else console.log(workingPath, 'path is not .md')
}

function isAFile (workingPath) {
    console.log(workingPath, 'checking if its a file');
    fs.readFile(workingPath, 'utf8', (err) => {
        if (err === null){
            determineTypeOfFile(workingPath)
        } else if (err.code === 'EISDIR') {
            console.log('is a directory');
            isDir(workingPath);
        } else { 
            console.log('error reading file');
            console.error(err);
        }
    });
  };

function pathIsAbsolute (givenPath) {
    if (path.isAbsolute(givenPath)) {
        console.log(givenPath, 'path was absolute');
        isAFile(givenPath)
    } else {
        isAFile(resolvePath(givenPath));
    }
  };

function pathExists () {
    fs.access(givenPath, (err) => {
        if (err) {
            console.error('error');
        } else {
            pathIsAbsolute(givenPath);
        }
    });
};
pathExists(givenPath);

