/* const { describe } = require('yargs'); */

const { resolvePath, resolvePathsInFolder } = require('../md-links');
const { correctPath } = require('../md-links')


describe('md-links', () => {
  it('should transform a relative path into an absolute one', () => {
    const givenPath= 'files\\first_level\\second_level';
    expect(resolvePath(givenPath)).toBe("C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level");
  });
  it('should return an array of absolute paths from a folders content', () => {
    const givenPath = 'files\first_level\second_level';
    const array = [ 'filejs-level2.js', 'filemd-level2.md', 'third_level' ]
    expect(resolvePathsInFolder(array, givenPath)).toBe(
      [
      'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\filejs-level2.js',
      'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\filemd-level2.md',
      ]
    );
  });
  it('correctPath should join two paths to correct those inside folders', () => {
    const file = 'filejs-level2.js'
    const workingPath = 'C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level'
    expect(correctPath(file, workingPath)).toBe('C:\\Users\\majod\\OneDrive\\Documentos\\Laboratoria\\Bootcamp\\mdLinks\\CDMX012-md-links\\files\\first_level\\second_level\\filejs-level2.js');
  });
});
