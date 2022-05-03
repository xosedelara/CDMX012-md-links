const cheerio = require('cheerio');
const fs = require('fs');
const marked = require('marked');

function makeArrayOfLinks(data, file){
    const dataHTML = marked.parse(data)
    const $ = cheerio.load(dataHTML);
    const linksArray = []
    $('http').each((i, link) => {
        const linkHref = link.attribs.href;
        const text = link.attribs.text;
        const linkObject = {
            href: linkHref,
            text: text,
            file: file
        }
        linksArray.push(linkObject);
        console.log(linksArray)
    });
    return linksArray
};

function gettingLinks(searchPath){
    const file = searchPath.toString();
    fs.readFile(file, 'utf8', (err, data)=>{
        if (err){
            console.log(err.code)
        } else{
            return makeArrayOfLinks(data, file)
        }
    });
};

module.exports = { gettingLinks };