const { fs, path } = require('./exports');


function correctPath(file, workingPath){
  const pathCorrected = path.resolve(path.join(workingPath, file))
  return pathCorrected
}

function resolvePathsInFolder (files, givenPath) {
  let filesArray = [];
  files.forEach(file => filesArray.push(correctPath(file, givenPath)));
  return filesArray
} 

module.exports = { resolvePathsInFolder, correctPath };