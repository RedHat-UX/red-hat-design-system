// @ts-check
const { pathToFileURL, fileURLToPath } = require('node:url');
const glob = require('node:util').promisify(require('glob'));
const { dirname } = require('node:path');

const { href: parentUrl } = new URL('../../elements/', pathToFileURL(__filename));
const elementsDir = fileURLToPath(parentUrl);

module.exports = function(eleventyConfig, { localPackages = [] } = {}) {
  const specs = localPackages.map(spec => ({
    spec,
    packageName: spec.replace(/^@/, '$').replace(/@.*$/, '').replace(/^\$/, '@')
  }));

  for (const { packageName } of specs) {
    eleventyConfig.addPassthroughCopy({ [`node_modules/${packageName}`]: `/assets/packages/${packageName}` });
  }

  eleventyConfig.addGlobalData('importMap', async function importMap() {
    const entryPoints = await glob('./*/*.ts', { cwd: elementsDir, ignore: './*/*.d.ts', });
    const { Generator } = await import('@jspm/generator');

    const generator = new Generator({
      env: ['production', 'browser', 'module'],
    });

    await generator.install([
      '@lrnwebcomponents/code-sample',
      ...localPackages
    ]);

    for (const x of entryPoints) {
      await generator.traceInstall(x.replace('./', parentUrl).replace('.ts', '.js'));
      await generator.traceInstall(x.replace('./', '@rhds/elements/').replace('.ts', '.js'));
    }

    generator.importMap.replace(parentUrl, '/assets/elements/');

    for (const { packageName } of specs) {
      // NB: only works if there's a './' export for the package
      const resolvedVersionURL = dirname(generator.resolve(packageName));
      generator.importMap.replace(`${resolvedVersionURL}/`, `/assets/packages/${packageName}/`);
    }

    return generator.importMap.flatten().combineSubpaths().toJSON();
  });
};

