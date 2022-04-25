const fs = require('fs');
const process = require('process');
const path = require('path');

const isMd = (workingPath) => {
  console.log (workingPath, 'checking if its md')
  
}

const isDir = (workingPath) => {
  console.log('reading directory')
  /* fs.readdir(workingPath, (err) => {

  } */
}

const isAFile = (workingPath) => {
  fs.readFile(workingPath, (err) => {
    if (err === null) {
      isMd(workingPath)
    }
    else if (err.code === 'EISDIR'){
      console.log('is a directory')
      isDir(workingPath)
    }else {
      console.log('error reading a file')
      console.error(err)
    }
  });
};

const resolvePath = (givenPath) => {
  let newPath = path.resolve(givenPath);
  console.log(newPath, 'is now absolute');
  isAFile(newPath);
};

const pathIsAbsolute = (givenPath) => {
  if (path.isAbsolute(givenPath)){
    console.log(givenPath, 'path was absolute');
    isAFile(givenPath)
  } else {
    resolvePath(givenPath);
}};

module.exports = { pathIsAbsolute }