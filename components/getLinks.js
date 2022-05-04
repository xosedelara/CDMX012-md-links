const cheerio = require('cheerio');
const fs = require('fs');
const marked = require('marked');

let linksArray = []
let totalLinks = 0

function makeArrayOfLinks(data, file){
    const dataHTML = marked.parse(data)
    const $ = cheerio.load(dataHTML);
    $('a').each((i, link) => {
        totalLinks ++
        linksArray.push({            
            href: link.attribs.href,
            text: $(link).text(),
            file: file
        })
    });
    console.log(linksArray, totalLinks)
    return linksArray
};


function gettingLinks(searchPath){
    const file = searchPath.toString();
    fs.readFile(file, 'utf8', (err, data)=>{
        if (err){
            console.log(err.code)
        } else{
            makeArrayOfLinks(data, file)
        }
    });
};

module.exports = { gettingLinks, makeArrayOfLinks };