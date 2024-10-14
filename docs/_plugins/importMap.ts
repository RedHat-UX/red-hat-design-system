import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { AssetCache } from '@11ty/eleventy-fetch';
import { Generator } from '@jspm/generator';
import chalk from 'chalk';

import type { UserConfig } from '@11ty/eleventy';

interface ImportMap {
  imports: Record<string, string>;
  scopes?: Record<string, Record<string, string>>;
}

interface Options {
  defaultProvider?: string;
  inputMap?: ImportMap;
  localPackages?: string[];
  manualImportMap?: ImportMap;
  cwd?: string;
  assetCache?: AssetCache;
  nodemodulesPublicPath?: string;
}

async function logPerf() {
  // We should log performance regressions
  /* eslint-disable no-console */
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
 * [defaultProvider] jspm.io generator provider
 */

async function getCachedImportMap({
  defaultProvider,
  inputMap,
  localPackages = [],
  manualImportMap,
  cwd,
  assetCache,
  nodemodulesPublicPath,
}: Options) {
  if (assetCache.isCacheValid('1d')) {
    return assetCache.getCachedValue();
  } else {
    try {
      performance.mark('importMap-start');

      const nothing = Symbol();
      const providers = {
        '@patternfly/elements': 'nodemodules',
        ...Object.fromEntries(localPackages?.map(packageName =>
          packageName.match(/@patternfly/) ?
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

export default function(eleventyConfig: UserConfig, opts?: Options) {
  const {
    inputMap,
    manualImportMap,
    defaultProvider,
    nodemodulesPublicPath,
    localPackages = [],
  } = opts ?? {};
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

  eleventyConfig.on('eleventy.beforeWatch', async function(changedFiles: string[]) {
    const files =
      changedFiles.filter(x => x.match(/eleventy\.config\.c?js$|importMap\.c?js$/));
    if (files.length) {
      // eslint-disable-next-line no-console
      console.log(`${files.join(', ')} changed, invalidating importmap cache`);
      assetCache.cache.destroy();
    }
  });
};
