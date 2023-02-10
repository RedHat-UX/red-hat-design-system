// @ts-check
const glob = require('node:util').promisify(require('glob'));
const { join, dirname } = require('node:path');
const { pathToFileURL } = require('node:url');

module.exports = function(eleventyConfig, {
  inputMap = undefined,
  localPackages = [],
} = {}) {
  const cwd = process.cwd();
  const elementsDir = join(cwd, 'elements/');

  const specs = localPackages.map(spec => ({
    spec,
    packageName: spec.replace(/^@/, '$').replace(/@.*$/, '').replace(/^\$/, '@')
  }));

  // copy over local packages
  for (const { packageName } of specs) {
    eleventyConfig.addPassthroughCopy({ [`node_modules/${packageName}`]: `/assets/packages/${packageName}` });
  }

  eleventyConfig.addGlobalData('importMap', async function importMap() {
    const start = performance.now();
    const { Generator } = await import('@jspm/generator');

    const generator = new Generator({
      env: ['production', 'browser', 'module'],
      inputMap,
      providers: {
        ...Object.fromEntries(specs.map(x => [x.packageName, 'nodemodules'])),
      },
    });

    await generator.install(localPackages);

    // RHDS imports
    for (const x of await glob('./*/*.ts', { cwd: elementsDir, ignore: './*/*.d.ts' })) {
      await generator.traceInstall(x.replace('./', elementsDir).replace('.ts', '.js'));
      await generator.traceInstall(x.replace('./', '@rhds/elements/').replace('.ts', '.js'));
    }
    generator.importMap.replace(pathToFileURL(elementsDir).href, '/assets/elements/');

    // Node modules
    generator.importMap.replace(pathToFileURL(join(cwd, 'node_modules/')).href, '/assets/packages/');

    const json = generator.importMap.flatten().combineSubpaths().toJSON();

    // HACK: for some reason, having '@patternfly' in scope here really screws things up
    if (json.scopes?.['../../../../../']) {
      // json.scopes['../../../../../']['@patternfly/'] = '/assets/packages/@patternfly/';
      json.scopes['../../../../../']['@lit/reactive-element'] = '/assets/packages/@lit/reactive-element/reactive-element.js';
      json.scopes['../../../../../']['@lit/reactive-element/decorators/'] = '/assets/packages/@lit/reactive-element/decorators/';
    }

    const end = performance.now();

    console.log(`🐢 Import map generator done in ${Math.ceil(end - start)}ms`);

    console.log(json);

    return json;
  });
};

