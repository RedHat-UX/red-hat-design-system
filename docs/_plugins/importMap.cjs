// @ts-check
const { join } = require('node:path');
const { pathToFileURL } = require('node:url');
const { AssetCache } = require('@11ty/eleventy-fetch');

function logPerf() {
  // We should log performance regressions
  /* eslint-disable no-console */
  const chalk = require('chalk');
  const TOTAL = performance.measure('importMap-total', 'importMap-start', 'importMap-end');
  const RESOLVE = performance.measure(
    'importMap-resolve',
    'importMap-start',
    'importMap-afterLocalPackages'
  );
  if (TOTAL.duration > 2000) {
    console.log(
      `🦥 Import map generator done in ${chalk.red(TOTAL.duration)}ms\n`,
      `  Resolving local packages took ${chalk.red(RESOLVE.duration)}ms\n`,
    );
  } else if (TOTAL.duration > 1000) {
    console.log(
      `🐢 Import map generator done in ${chalk.yellow(TOTAL.duration)}ms\n`,
      `  Resolving local packages took ${chalk.yellow(RESOLVE.duration)}ms\n`,
    );
  } else {
    console.log(
      `⚡ Import map generator done in ${chalk.blue(TOTAL.duration)}ms\n`,
    );
  }
  /* eslint-enable no-console */
}

/**
 * @typedef {object} Options
 * @property {string} [defaultProvider] jspm.io generator provider
 * @property {import('@jspm/generator').Generator['importMap']} [inputMap]
 * @property {import('@jspm/generator').Generator['importMap']} [manualImportMap]
 * @property {string[]} [localPackages=[]]
 * @property {string} nodemodulesPublicPath
 * @property {string} cwd
 * @property {AssetCache} assetCache
 */

/** @param {Options} opts */
async function getCachedImportMap({
  defaultProvider,
  inputMap,
  localPackages = [],
  manualImportMap,
  cwd,
  assetCache,
  nodemodulesPublicPath,
}) {
  if (assetCache.isCacheValid('1d')) {
    return assetCache.getCachedValue();
  } else {
    try {
      performance.mark('importMap-start');

      const { Generator } = await import('@jspm/generator');

      const nothing = Symbol();
      const providers = {
        '@patternfly/elements': 'nodemodules',
        '@patternfly/icons': 'nodemodules',
        ...Object.fromEntries(localPackages?.map(packageName =>
          packageName.match(/@(rhds|patternfly)/) ?
            [nothing]
            : [packageName, 'nodemodules']) ?? []),
      };

      delete providers[nothing];

      const generator = new Generator({
        env: ['production', 'browser', 'module'],
        defaultProvider,
        inputMap,
        providers,
      });

      await generator.install(localPackages.filter(x => !x.endsWith('/')));

      performance.mark('importMap-afterLocalPackages');

      // Node modules
      generator.importMap.replace(pathToFileURL(join(cwd, 'node_modules/')).href, `${nodemodulesPublicPath}/`);

      for (const [k, v] of Object.entries(manualImportMap?.imports ?? {})) {
        generator.importMap.set(k, v);
      }

      const json = generator.importMap.flatten().combineSubpaths().toJSON();

      performance.mark('importMap-end');

      logPerf();

      assetCache.save(json, 'json');

      return json;
    } catch (e) {
      // it's important to surface this, even if it means double-logging
      // eslint-disable-next-line no-console
      console.error(e);
      throw e;
    }
  }
}

/**
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 * @param {Options} options
 */
module.exports = function(eleventyConfig, {
  inputMap,
  manualImportMap,
  defaultProvider,
  nodemodulesPublicPath,
  localPackages = [],
}) {
  const cwd = process.cwd();

  // copy over local packages
  //
  for (const spec of localPackages) {
    const packageName = spec.replace(/^@/, '$').replace(/@.*$/, '').replace(/^\$/, '@');
    eleventyConfig.addPassthroughCopy({ [`node_modules/${packageName}`]: `${nodemodulesPublicPath}/${packageName}` });
  }

  const assetCache = new AssetCache('rhds-ux-dot-import-map');

  eleventyConfig.addGlobalData('importMap', async function cacheImportMap() {
    return getCachedImportMap({
      defaultProvider,
      manualImportMap,
      nodemodulesPublicPath,
      inputMap,
      localPackages,
      cwd,
      assetCache,
    });
  });

  eleventyConfig.on('eleventy.beforeWatch', async function(/** @type {string[]} */ changedFiles) {
    const files =
      changedFiles.filter(x => x.match(/eleventy\.config\.c?js$|importMap\.c?js$/));
    if (files.length) {
      // eslint-disable-next-line no-console
      console.log(`${files.join(', ')} changed, invalidating importmap cache`);
      assetCache.cache.destroy();
    }
  });
};
