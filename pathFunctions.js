const fs = require('fs');
const path = require('path');

function correctPath(file, workingPath){
  console.log(file, 'file');
  console.log(workingPath, 'workingPath')
  const pathCorrected = path.resolve(path.join(workingPath, file))
  console.log(pathCorrected, 'path corrected');
  return pathCorrected
}

function resolvePathsInFolder (files, givenPath) {
  let filesArray = [];
  console.log('resolving each path from files in folder');
  files.forEach(file => filesArray.push(correctPath(file, givenPath)));
  console.log(filesArray);
  return filesArray
} 

function resolvePath (givenPath) {
  console.log(givenPath, 'is turning absolute');
  return path.resolve(givenPath);
};

module.exports = { resolvePath, resolvePathsInFolder, correctPath };