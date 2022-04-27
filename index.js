const fs = require('fs');
const process = require('process');
const path = require('path');

const  { resolvePath, resolvePathsInFolder/* , normalizePath */ } = require('./md-links.js')

const givenPath = (process.argv[2]);
console.log(givenPath, 'is now givenPath');

function lookForLinks(workingPath, data) {
    console.log('looking for links in ', workingPath, data)
}

function isDir (workingPath) {
    console.log('reading directory');
    fs.readdir(workingPath, 'utf8', (err, files) => {
      if (err) return console.error
      console.log(files, 'these are the files');
      resolvePathsInFolder(files, workingPath).forEach(path => isAFile(path));
      // normalizePath(resolvePathsInFolder(files));
    });
};

function isAFile (workingPath) {
    console.log(workingPath, 'isAFile');
    fs.readFile(workingPath, 'utf8', (err, data) => {
        if (err === null && path.extname(workingPath) === '.md') {
            console.log(data, 'data');
            lookForLinks(workingPath, data);
        } else if (err === null && path.extname(workingPath) !== '.md') {
            console.log('file is not md');
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
 // System.out.println(ANSI_COLORNAME + "This text is colored" + ANSI_RESET);
