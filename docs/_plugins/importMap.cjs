// @ts-check
const glob = require('node:util').promisify(require('glob'));
const { join } = require('node:path');
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
    performance.mark('importMap-start');

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
    performance.mark('importMap-afterLocalPackages');

    // RHDS imports
    // TODO: make rhds a 'package' like the other localPackages
    const traces = [];
    for (const x of await glob('./*/*.ts', { cwd: elementsDir, ignore: './*/*.d.ts' })) {
      traces.push(
        generator.traceInstall(x.replace('./', elementsDir).replace('.ts', '.js')),
        generator.traceInstall(x.replace('./', '@rhds/elements/').replace('.ts', '.js')),
      );
    }
    await Promise.all(traces);

    generator.importMap.replace(pathToFileURL(elementsDir).href, '/assets/packages/@rhds/elements/elements/');
    generator.importMap.replace(pathToFileURL(elementsDir).href.replace('elements', 'lib'), '/assets/packages/@rhds/elements/lib/');
    performance.mark('importMap-afterRHDSTraces');

    generator.importMap.set('@rhds/elements/lib/', '/assets/packages/@rhds/elements/lib/');

    // Node modules
    generator.importMap.replace(pathToFileURL(join(cwd, 'node_modules/')).href, '/assets/packages/');

    // for some reason, `@lrnwebcomponents/code-sample` shows up in the import map under cwd scope
    generator.importMap.replace(`${pathToFileURL(cwd).href}/`, '/assets/packages/');

    const json = generator.importMap.flatten().combineSubpaths().toJSON();

    // HACK: extract the scoped imports to the main map, since they're all local
    // this might not be necessary if we flatten to a single lit version
    Object.assign(json.imports ?? {}, Object.values(json.scopes ?? {}).find(x => 'lit-html' in x));
    // ENDHACK

    // TODO: automate this
    Object.assign(json.imports ?? {}, {
      '@rhds/elements/lib/': '/assets/packages/@rhds/elements/lib/',
      '@rhds/elements/lib/context/': '/assets/packages/@rhds/elements/lib/context/',
      '@rhds/elements/lib/context/color/': '/assets/packages/@rhds/elements/lib/context/color/',
    });

    performance.mark('importMap-end');

    logPerf();

    return json;
  });
};

function logPerf() {
  // We should log performance regressions
  /* eslint-disable no-console */
  const chalk = require('chalk');
  const TOTAL = performance.measure('importMap-total', 'importMap-start', 'importMap-end');
  const RESOLVE = performance.measure('importMap-resolve', 'importMap-start', 'importMap-afterLocalPackages');
  const TRACE = performance.measure('importMap-trace', 'importMap-afterLocalPackages', 'importMap-afterRHDSTraces');
  if (TOTAL.duration > 2000) {
    console.log(
      `🦥 Import map generator done in ${chalk.red(TOTAL.duration)}ms\n`,
      `  Resolving local packages took ${chalk.red(RESOLVE.duration)}ms\n`,
      `  Tracing RHDS sources took ${chalk.red(TRACE.duration)}ms`,
    );
  } else if (TOTAL.duration > 1000) {
    console.log(
      `🐢 Import map generator done in ${chalk.yellow(TOTAL.duration)}ms\n`,
      `  Resolving local packages took ${chalk.yellow(RESOLVE.duration)}ms\n`,
      `  Tracing RHDS sources took ${chalk.yellow(TRACE.duration)}ms`,
    );
  } else {
    console.log(
      `⚡ Import map generator done in ${chalk.blue(TOTAL.duration)}ms\n`,
    );
  }
  /* eslint-enable no-console */
}
