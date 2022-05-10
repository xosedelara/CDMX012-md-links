const { cheerio, fs, marked } = require('./exports');

function gettingLinks(arrayOfFiles){
    let result = []
    arrayOfFiles.forEach(file=>{
        data = fs.readFileSync(file, 'utf-8')
        const dataHTML = marked.parse(data)
        const $ = cheerio.load(dataHTML);
        
        $('a').each((i, link) => {
            result.push({            
                href: link.attribs.href,
                text: $(link).text(),
                file: file
            })
        });
    });
    return result
};

module.exports = { gettingLinks };