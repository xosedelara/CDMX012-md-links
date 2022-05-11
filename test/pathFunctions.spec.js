const { fs, path } = require('../components/exports');
const { correctPath, resolvePathsInFolder } = require('../components/pathFunctions')

describe('correctPath', () => {
    it('returns the complete path of a file', () =>{
        const workingPath = 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files'
        const path = 'filejs.js'
      expect(correctPath(workingPath, path)).toBe('C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\filejs.js');
    })
  });

  describe('resolvePathsInFolder', () => {
    it('returns the complete path of a file', () =>{
        const files = [
            'filejs.js', 'filemd.md', 'first_level'
        ]
        const arrayOfFiles = [
            'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\filejs.js',
            'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\filemd.md',
            'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level'          
        ]
        const givenPath = 'C:\Users\majod\OneDrive\Documentos\Laboratoria\Bootcamp\mdLinks\CDMX012-md-links\files'
      expect(resolvePathsInFolder(files, givenPath)).toStrictEqual(arrayOfFiles);
    })
  });