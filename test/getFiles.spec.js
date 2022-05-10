const { pathExists, pathIsAbsolute, typeOfFile } = require('../components/getFiles.js');

const givenPath = 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\filemd.md'
const falseRelativePath = 'file'

describe('', () => {
  it('returns array of md Files', () =>{
    expect(pathExists(givenPath)).toBe(true);
  })
  it('returns ENOENT error when given a false path', () =>{
  expect(pathExists(falseRelativePath)).toBe('ENOENT')
  })
});

describe('pathIsAbsolute', () => {
  it('returns givenPath when its absolute', () =>{
    expect(pathIsAbsolute(givenPath)).toBe(givenPath);
  })
  it('returns givenPath when its absolute', () =>{
    const relativePath = 'files\\filemd.md'
    const resolvedPath = 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\filemd.md'
    expect(pathIsAbsolute(relativePath)).toBe(resolvedPath);
  })
});

describe('typeOfFile', () => {
  it('returns array of mdFiles', () =>{
    expect(typeOfFile(givenPath)).toBe(givenPath);
  })
});