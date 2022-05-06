const { pathExists, pathIsAbsolute/* , isAFile, isDir, determineTypeOfFile, lookForLinks */ } = require('../components/index');

const givenPath = 'files\\first_level\\second_level\\filemd-level2.md'

describe('md-links', () => {
  it('', () =>{
    const pathIsAbsolute = (givenPath) => {}
    expect(pathExists(givenPath)).toHaveBeenCalled(pathIsAbsolute(givenPath));
  })
});
  