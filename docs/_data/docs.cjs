const glob = require('node:util').promisify(require('glob'));
const slugify = require('slugify');

module.exports = async function getDocs() {
  const { getPfeConfig } = await import('@patternfly/pfe-tools/config.js');
  const { aliases, tagPrefix } = getPfeConfig();
  const files = await Promise.all((await glob('elements/*'))
    .filter(x => x.match(/footer/))
    .map(async dirName => {
      const tagName = dirName.split('/').find(x => x.startsWith(tagPrefix));
      const title = aliases[tagName] ?? tagName.replace(`${tagPrefix}-`, '');
      const slug = slugify(title);
      const docsFilePaths = await glob(`${dirName}/docs/*.md`);
      const tabs = docsFilePaths.map(path => ({ path, title: path.split('/').pop().split('.').shift() }));
      return { dirName, slug, tabs, tagName, title };
    }));
  return files;
};

