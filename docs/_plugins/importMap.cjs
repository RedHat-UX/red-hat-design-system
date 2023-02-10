// @ts-check
const glob = require('node:util').promisify(require('glob'));
const { join, dirname } = require('node:path');
const { pathToFileURL } = require('node:url');

module.exports = function(eleventyConfig, {
  inputMap = undefined,
  defaultProvider = undefined,
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

  // HACK: copy lit transitive deps
  // this might not be necessary if we flatten to a single lit version
  for (const packageName of ['lit-html', 'lit-element']) {
    eleventyConfig.addPassthroughCopy({ [`node_modules/${packageName}`]: `/assets/packages/${packageName}` });
  }
  // ENDHACk

  eleventyConfig.addGlobalData('importMap', async function importMap() {
    const start = performance.now();
    const { Generator } = await import('@jspm/generator');

    const generator = new Generator({
      env: ['production', 'browser', 'module'],
      defaultProvider,
      inputMap,
      providers: {
        ...Object.fromEntries(specs.map(x => [x.packageName, 'nodemodules'])),
      },
    });

    await generator.install(localPackages);

    // RHDS imports
    // TODO: make rhds a 'package' like the other localPackages
    for (const x of await glob('./*/*.ts', { cwd: elementsDir, ignore: './*/*.d.ts' })) {
      await generator.traceInstall(x.replace('./', elementsDir).replace('.ts', '.js'));
      await generator.traceInstall(x.replace('./', '@rhds/elements/').replace('.ts', '.js'));
    }
    generator.importMap.replace(pathToFileURL(elementsDir).href, '/assets/elements/');
    generator.importMap.replace(pathToFileURL(elementsDir).href.replace('elements', 'lib'), '/assets/lib/');

    // Node modules
    generator.importMap.replace(pathToFileURL(join(cwd, 'node_modules/')).href, '/assets/packages/');

    generator.importMap.set('@rhds/elements/lib/', '/assets/packages/@rhds/elements/lib/');

    const json = generator.importMap.flatten().combineSubpaths().toJSON();

    // HACK: extract the scoped imports to the main map, since they're all local
    // this might not be necessary if we flatten to a single lit version
    Object.assign(json.imports ?? {}, Object.values(json.scopes ?? {}).find(x => 'lit-html' in x))
    // ENDHACk

    // HACK: no clue why we need to do this
    Object.assign(json.imports ?? {}, {
      '@rhds/elements/lib/': '/assets/packages/@rhds/elements/lib/',
      '@rhds/elements/lib/context/': '/assets/packages/@rhds/elements/lib/context/',
      '@rhds/elements/lib/context/color/': '/assets/packages/@rhds/elements/lib/context/color/',
      '@rhds/elements/lib/context/color/consumer.js': '/assets/packages/@rhds/elements/lib/context/color/consumer.js',
    });
    // ENDHACk

    const end = performance.now();

    console.log(`🐢 Import map generator done in ${Math.ceil(end - start)}ms`, json);

    return json;
  });
};

