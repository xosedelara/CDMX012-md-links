const path = require('path')
const axios = require('axios')

const linksArray = [
    {
        href: 'https://github.com/cheeriojs/cheerio/actions?query=workflow%3ACI+branch%3Amain',
        text: '\n    \n  ',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://coveralls.io/github/cheeriojs/cheerio',
        text: '\n    \n  ',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: '#backers',
        text: '\n    \n  ',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: '#sponsors',
        text: '\n    \n  ',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://github.com/cheeriojs/cheerio/wiki/Chinese-README',
        text: '中文文档 (Chinese Readme)',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://github.com/cheeriojs/cheerio/tree/aa90399c9c02f12432bfff97b8f1c7d8ece7c307',
        text: 'here',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://github.com/inikulin/parse5',
        text: 'parse5',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://github.com/fb55/htmlparser2/',
        text: 'htmlparser2',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://github.com/puppeteer/puppeteer',
        text: 'Puppeteer',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://github.com/microsoft/playwright',
        text: 'Playwright',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://github.com/jsdom/jsdom',
        text: 'JSDom',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://github.com/fb55/htmlparser2/wiki/Parser-options',
        text: 'htmlparser2',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://github.com/fb55/DomHandler',
        text: 'domhandler',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://github.com/fb55/htmlparser2/wiki/Parser-options',
        text: "htmlparser2's options",
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#attribute-selectors',
        text: 'due to the CSS specification',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML',
        text: 'outerHTML',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://developer.mozilla.org/en-US/docs/Web/API/Node',
        text: 'browser-based DOM nodes',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://vimeo.com/31950192',
        text: 'https://vimeo.com/31950192',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://github.com/cheeriojs/cheerio/wiki/Cheerio-in-Production',
        text: 'wiki',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://github.com/cheeriojs/cheerio?sponsor=1',
        text: 'sponsoring this project',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://substack.com/',
        text: '\n            \n          ',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://cryptocasinos.com/',
        text: '\n            \n          ',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://www.casinoonlineaams.com',
        text: '\n            \n          ',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://casinofiables.com/',
        text: '\n            \n          ',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://casinoenlineahex.com/',
        text: '\n            \n          ',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://apify.com/',
        text: '\n            \n          ',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://freebets.ltd.uk',
        text: '\n            \n          ',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://casinoutansvensklicens.co/',
        text: '\n            \n          ',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://github.com/cheeriojs/cheerio?sponsor=1',
        text: 'Become a backer',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'https://www.airbnb.com/',
        text: '\n            \n          ',
        href: 'https://github.com/gauthamchandra', text: '\n            \n          ',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    },
    {
        href: 'http://www.dr-chuck.com/', 
        text: '\n            \n          ',
        file: 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\third_level\\filemd-level3.md'
    }
]

function validateLinks(linksArray) {
    console.log(linksArray, 'in validate')

}

// module.exports = { validateLinks }