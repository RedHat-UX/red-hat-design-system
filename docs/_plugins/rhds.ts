/// <reference lib="ESNext.Array"/>

import type { UserConfig } from '@11ty/eleventy';
import * as ChildProcess from 'node:child_process';
import { join, dirname } from 'node:path';
import { promisify } from 'node:util';
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { makeDemoEnv } from '#scripts/environment.js';

import yaml from 'js-yaml';
import slugify from 'slugify';

import RHDSAlphabetizeTagsPlugin from '#11ty-plugins/alphabetize-tags.js';
import RHDSElementDocsPlugin from '#11ty-plugins/element-docs.js';
import RHDSElementDemosPlugin from '#11ty-plugins/element-demos.js';

import { getPfeConfig } from '@patternfly/pfe-tools/config.js';
import { capitalize } from '#11ty-plugins/tokensHelpers.js';

const repoStatus = yaml.load(await readFile(
  new URL('../_data/repoStatus.yaml', import.meta.url),
  'utf8',
));

const exec = promisify(ChildProcess.exec);
const cwd = process.cwd();

/**
 * EleventyTransformContext the `this` binding for transform functions
 * outputPath the path the page will be written to
 * inputPath the path to the page's input file (e.g. template or paginator)
 */

const pfeconfig = getPfeConfig();

/**
 * @param  tagName e.g. pf-jazz-hands
 */
function getTagNameSlug(tagName: string) {
  const name = pfeconfig?.aliases?.[tagName] ?? tagName.replace(`${pfeconfig?.tagPrefix ?? 'rh'}-`, '');
  return slugify.default(name, {
    strict: true,
    lower: true,
  });
}

/** Files with these extensions will copy from /elements/foo/docs/ to _site/elements/foo */
const COPY_CONTENT_EXTENSIONS = [
  'svg',
  'png',
  'jpg',
  'jpeg',
  'bmp',
  'webp',
  'webm',
  'mp3',
  'ogg',
  'json',
  'css',
  'js',
  'map',
  'd.ts',
];

/**
 * Generate a map of files per package which should be copied to the site dir
 */
async function getFilesToCopy() {
  // Copy element demo files
  const repoRoot = cwd;
  const tagNames = (await readdir(join(repoRoot, 'elements'), { withFileTypes: true }))
      .filter(ent => ent.isDirectory())
      .map(ent => ent.name);

  // Copy all component and core files to _site
  return Object.fromEntries(tagNames.flatMap(tagName => {
    const slug = getTagNameSlug(tagName);
    return Object.entries({
      [`elements/${tagName}/demo/`]: `elements/${slug}/demo`,
      [`elements/${tagName}/docs/**/*.{${COPY_CONTENT_EXTENSIONS.join(',')}}`]: `elements/${slug}`,
    });
  }));
}

interface Options {
  tagsToAlphabetize: string[];
}

export default async function(eleventyConfig: UserConfig, options?: Options) {
  eleventyConfig.on('eleventy.before', async ({ directories }) => {
    const outPath = join(directories.output, 'assets/javascript/repoStatus.json');
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, JSON.stringify(repoStatus), 'utf8');
  });

  /** add the normalized pfe-tools config to global data */
  eleventyConfig.on('eleventy.before', async function() {
    eleventyConfig.addGlobalData('pfeconfig', getPfeConfig());
  });

  /** custom-elements.json */
  eleventyConfig.on('eleventy.before', async function({ runMode }) {
    if (runMode === 'watch') {
      await exec('npx cem analyze');
    }
  });

  /** /assets/javascript/environment.js */
  eleventyConfig.on('eleventy.before', async function({ dir }) {
    const outPath = join(dir.input, '..', 'lib', 'environment.js');
    await writeFile(outPath, await makeDemoEnv(), 'utf8');
  });

  eleventyConfig.addDataExtension('yml, yaml', (contents: string) => yaml.load(contents));

  eleventyConfig.addPlugin(RHDSAlphabetizeTagsPlugin, options);

  eleventyConfig.addPlugin(RHDSElementDocsPlugin);
  eleventyConfig.addPlugin(RHDSElementDemosPlugin);

  eleventyConfig.addPassthroughCopy('docs/demo.{js,map,ts}');

  eleventyConfig.addPassthroughCopy({
    'node_modules/element-internals-polyfill': '/assets/packages/element-internals-polyfill',
  });

  // ensure icons are copied to the assets dir.
  eleventyConfig.addPassthroughCopy({
    'node_modules/@patternfly/icons/': '/assets/packages/@patternfly/icons/',
  });

  eleventyConfig.addPassthroughCopy(await getFilesToCopy(), {
    filter: (path: string) => !path.endsWith('.html'),
  });

  eleventyConfig.addJavaScriptFunction('getTagNameSlug', getTagNameSlug);

  eleventyConfig.addFilter('getPrettyElementName', function(tagName: string) {
    const slug = getTagNameSlug(tagName);
    const deslugify = eleventyConfig.getFilter('deslugify');
    return pfeconfig.aliases[tagName] || deslugify(slug);
  });

  eleventyConfig.addFilter('deslugify', function(slug: string) {
    return capitalize(slug.replace(/-/g, ' '));
  });

  eleventyConfig.addFilter('makeSentenceCase', function(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  });

  eleventyConfig.addCollection('sortedColor', async function(collectionApi) {
    const colorCollection = collectionApi.getFilteredByTags('color');
    return colorCollection.sort((a, b) => {
      if (a.data.order > b.data.order) {
        return 1;
      } else if (a.data.order < b.data.order) {
        return -1;
      } else {
        return 0;
      }
    });
  });

  eleventyConfig.addCollection('sortedTypography', async function(collectionApi) {
    const typographyCollection = collectionApi.getFilteredByTags('typography');
    return typographyCollection.sort((a, b) => {
      if (a.data.order > b.data.order) {
        return 1;
      } else if (a.data.order < b.data.order) {
        return -1;
      } else {
        return 0;
      }
    });
  });

  eleventyConfig.addCollection('sortedDevelopers', async function(collectionApi) {
    const developersCollection = collectionApi.getFilteredByTags('developers');
    return developersCollection.sort((a, b) => {
      if (a.data.order > b.data.order) {
        return 1;
      } else if (a.data.order < b.data.order) {
        return -1;
      } else {
        return 0;
      }
    });
  });

  eleventyConfig.addWatchTarget('docs/patterns/**/patterns/*.html');
  eleventyConfig.addWatchTarget('docs/theming/**/patterns/*.html');

  for (const tagName of await readdir(join(cwd, './elements/'))) {
    const dir = join(cwd, './elements/', tagName, 'docs/');
    eleventyConfig.addWatchTarget(dir);
  }
};
