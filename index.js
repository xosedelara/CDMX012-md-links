const fs = require('fs');
const process = require('process');
const path = require('path');
const { pathIsAbsolute } = require('./md-links.js');

const givenPath = (process.argv[2]);
console.log(givenPath, 'is now givenPath');

fs.access(givenPath, (err) => {
    if (err) {
        console.error('error')
    } else {
        pathIsAbsolute(givenPath)
    }
});
// fs.existsSync(givenPath)
//pathIsAbsolute(givenPath)
/* fs.readdir(givenPath, (err, files)=>{
    console.log(givenPath, 'readdir');
    if (err) return console.error(err);
    else console.log(files);
    (pathIsAbsolute(givenPath));
}); */

/*
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
*/
