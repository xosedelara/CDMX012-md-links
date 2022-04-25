const fs = require('fs');
const process = require('process');
const path = require('path');

const verifyContent = (workingPath, data) => {
  console.log (workingPath, 'looking for links')
    
}

const isDir = (workingPath) => {
  console.log('reading directory')
  /* fs.readdir(workingPath, (err) => {

  } */
}

const isAFile = (workingPath) => {
  fs.readFile(workingPath, 'utf8', (err, data) => {
    if (err === null && path.extname(workingPath) === '.md') {
      console.log(data, 'data')
      verifyContent(workingPath, data)
    }else if (err === null && path.extname(workingPath) !== '.md') {
      console.log('file is not md')
    }else if (err.code === 'EISDIR'){
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