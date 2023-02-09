// @ts-check

const { pathToFileURL, fileURLToPath } = require('node:url');
const glob = require('node:util').promisify(require('glob'));

const { href: parentUrl } = new URL('../../elements/', pathToFileURL(__filename));
const cwd = fileURLToPath(parentUrl);

module.exports = async function(configData) {
  const entryPoints = await glob('./*/*.ts', { cwd, ignore: './*/*.d.ts', });
  const { Generator } = await import('@jspm/generator');

  const generator = new Generator({
    env: ['production', 'browser', 'module'],
  });

  await generator.install([
    '@lrnwebcomponents/code-sample',
    '@patternfly/elements@rc',
    '@patternfly/elements@rc/pf-icon/icons/fab/facebook.js',
    '@patternfly/elements@rc/pf-icon/icons/fab/linkedin.js',
    '@patternfly/elements@rc/pf-icon/icons/fab/twitter.js',
    '@patternfly/elements@rc/pf-icon/icons/fab/youtube.js',
    '@patternfly/elements@rc/pf-panel/pf-panel.js',
  ]);

  for (const x of entryPoints) {
    await generator.traceInstall(x.replace('./', parentUrl).replace('.ts', '.js'));
    await generator.traceInstall(x.replace('./', '@rhds/elements/').replace('.ts', '.js'));
  }

  generator.importMap.replace(parentUrl, '/assets/elements/');

  return generator.importMap.flatten().combineSubpaths().toJSON();
};

