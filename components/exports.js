const cheerio = require('cheerio');
const fs = require('fs');
const marked = require('marked');
const path = require('path');
const axios = require('axios');
const process = require('process')
const yargs = require('yargs')
const chalk = require('yargs')

module.exports = { cheerio, fs, marked, path, axios, process, yargs, chalk };