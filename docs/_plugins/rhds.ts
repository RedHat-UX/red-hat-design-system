import type { UserConfig } from '@11ty/eleventy';
import { join, dirname, relative } from 'node:path';
import { cp, glob, readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { makeDemoEnv } from '#scripts/environment.js';

import { $ } from 'execa';

import yaml from 'js-yaml';
import slugify from 'slugify';

import RHDSAlphabetizeTagsPlugin from '#11ty-plugins/alphabetize-tags.js';
import RHDSElementDocsPlugin from '#11ty-plugins/element-docs.js';
import RHDSElementDemosPlugin from '#11ty-plugins/element-demos.js';
import LitSSRPlugin from '#11ty-plugins/lit-ssr/lit.js';

import { getPfeConfig } from '@patternfly/pfe-tools/config.js';
import { capitalize } from '#11ty-plugins/tokensHelpers.js';

const repoStatus = yaml.load(await readFile(
  new URL('../_data/repoStatus.yaml', import.meta.url),
  'utf8',
));

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

const cwd = process.cwd();

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
  componentModules: string[];
  tsconfig: string;
}


async function clean() {
  await $`npx tspc -b elements --clean`;
  await $`npx tspc -b lib --clean`;
}

export default async function(eleventyConfig: UserConfig, options?: Options) {
  /** add the normalized pfe-tools config to global data */
  eleventyConfig.addGlobalData('pfeconfig', getPfeConfig());

  eleventyConfig.addGlobalData('sideNavDropdowns', [
    { title: 'About', url: '/about', collection: 'about' },
    { title: 'Get started', url: '/get-started', collection: 'getstarted' },
    { title: 'Foundations', url: '/foundations', collection: 'foundations' },
    { title: 'Tokens', url: '/tokens', collection: 'tokenCategory' },
    { title: 'Elements', url: '/elements', collection: 'elementDocs' },
    { title: 'Theming', url: '/theming', collection: 'theming' },
    { title: 'Patterns', url: '/patterns', collection: 'pattern' },
    { title: 'Accessibility', url: '/accessibility', collection: 'accessibility' },
  ]);

  eleventyConfig.addDataExtension('yml, yaml', (contents: string) => yaml.load(contents));

  eleventyConfig.addPassthroughCopy('docs/demo.{js,map,ts}');
  eleventyConfig.addPassthroughCopy('docs/theming/**/*.css');

  eleventyConfig.addPassthroughCopy({
    'node_modules/element-internals-polyfill': '/assets/packages/element-internals-polyfill',
    // ensure icons are copied to the assets dir.
    'node_modules/@patternfly/icons/': '/assets/packages/@patternfly/icons/',
  });

  eleventyConfig.addPassthroughCopy(await getFilesToCopy(), {
    filter: (path: string) => !path.endsWith('.html'),
  });

  eleventyConfig.on('eleventy.before', async ({ directories }) => {
    const outPath = join(directories.output, 'assets/javascript/repoStatus.json');
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, JSON.stringify(repoStatus), 'utf8');
  });

  let hasCleanedSinceWatchStarted = false;
  eleventyConfig.on('eleventy.before', async function({ runMode }) {
    switch (runMode) {
      case 'build':
        return clean();
      default:
        if (!hasCleanedSinceWatchStarted) {
          hasCleanedSinceWatchStarted = true;
          return await clean();
        }
    }
  });

  /** custom-elements.json */
  eleventyConfig.on('eleventy.before', async function({ runMode }) {
    if (runMode === 'watch') {
      await $`npx cem analyze`;
    }
  });

  /** /assets/javascript/environment.js */
  eleventyConfig.on('eleventy.before', async function({ directories }) {
    const outPath = join(directories.input, '..', 'lib', 'environment.js');
    await writeFile(outPath, await makeDemoEnv(), 'utf8');
  });

  eleventyConfig.on('eleventy.after', async function({ runMode }) {
    const cwd = process.cwd();
    const pkgsDir = join(cwd, '_site/assets/packages');
    switch (runMode) {
      case 'build':
        await $`npx tspc -b elements`;
        await mkdir(join(pkgsDir, '@rhds/elements/elements'), { recursive: true });
        await mkdir(join(pkgsDir, '@rhds/elements/lib'), { recursive: true });
        for await (const file of glob('./{elements,lib}/**/*.{js,d.ts,map,css}')) {
          const rel = relative(cwd, file);
          const outDir = join(pkgsDir, '@rhds/elements');
          const out = join(outDir, dirname(rel));
          const from = join(cwd, rel);
          const to = join(outDir, rel);
          await mkdir(out, { recursive: true });
          await cp(from, to);
        }
    }
  });

  eleventyConfig.on('eleventy.after', async function({ runMode }) {
    const cwd = process.cwd();
    const pkgsDir = join(cwd, '_site/assets/packages');
    switch (runMode) {
      case 'build':
        await $`npx tspc -b uxdot`;
        await mkdir(join(pkgsDir, '@uxdot/elements'), { recursive: true });
        for await (const file of glob('./uxdot/*.{js,d.ts,map,css}')) {
          const rel = relative(join(cwd, 'uxdot'), file);
          const outDir = join(pkgsDir, '@uxdot/elements');
          const from = join(cwd, 'uxdot', rel);
          const to = join(outDir, rel);
          await cp(from, to);
        }
    }
  });

  eleventyConfig.addJavaScriptFunction('getTagNameSlug', getTagNameSlug);

  eleventyConfig.addFilter('getPrettyElementName', function(this, tagName) {
    const slug = getTagNameSlug(tagName);
    const deslugify = eleventyConfig.getFilter('deslugify');
    return pfeconfig.aliases[tagName] || deslugify.call(this, slug);
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
    if (!tagName.includes('.')) {
      const dir = join(cwd, './elements/', tagName, 'docs/');
      eleventyConfig.addWatchTarget(dir);
    }
  }

  eleventyConfig.addPlugin(RHDSAlphabetizeTagsPlugin, options);
  eleventyConfig.addPlugin(RHDSElementDocsPlugin);
  eleventyConfig.addPlugin(RHDSElementDemosPlugin);
  eleventyConfig.addPlugin(LitSSRPlugin, options);
};
