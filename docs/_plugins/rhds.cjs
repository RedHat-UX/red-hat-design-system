// @ts-check
const fs = require('node:fs');
const path = require('node:path');
const slugify = require('slugify');
const { exec: _exec } = require('node:child_process');
const { promisify } = require('node:util');
const exec = promisify(_exec);
const RHDSAlphabetizeTagsPlugin = require('./alphabetize-tags.cjs');
const RHDSShortcodesPlugin = require('./shortcodes.cjs');

/** @typedef {object} EleventyTransformContext */

/**
 * Replace paths in demo files from the dev SPA's format to 11ty's format
 * @this {EleventyTransformContext}
 * @param {string} content
 */
function demoPaths(content) {
  if (this.outputPath.match(/components\/.*\/demo\/index\.html$/)) {
    return content.replace(/(?<attr>href|src)="\/elements\/rh-(?<unprefixed>.*)\/(?<filename>.*)\.(?<extension>[.\w]+)"/g, (...args) => {
      const [{ attr, unprefixed, filename, extension }] = args.reverse();
      return `${attr}="/components/${unprefixed}/${filename}.${extension}"`;
    });
  } else {
    return content;
  }
}

// Rewrite DEMO lightdom css relative URLs
const LIGHTDOM_HREF_RE = /href="\.(?<pathname>.*-lightdom\.css)"/g;
const LIGHTDOM_PATH_RE = /href="\.(.*)"/;

/**
 * @this {{outputPath: string, inputPath: string}}
 * @param {string} content
 */
function lightdomCss(content) {
  const { outputPath, inputPath } = this;
  if (inputPath === './docs/components/demos.html') {
    const matches = content.match(LIGHTDOM_HREF_RE);
    if (matches) {
      for (const match of matches) {
        const [, path] = match.match(LIGHTDOM_PATH_RE) ?? [];
        const { pathname } = new URL(path, `file:///${outputPath}`);
        content = content.replace(`.${path}`, pathname
          .replace('/_site/components/', '/assets/elements/rh-')
          .replace('/demo/', '/'));
      }
    }
  }
  return content;
}

/**
 * @param {string | number | Date} dateStr
 */
function prettyDate(dateStr, options = {}) {
  const { dateStyle = 'medium' } = options;
  return new Intl.DateTimeFormat('en-US', { dateStyle })
    .format(new Date(dateStr));
}

/**
 * Generate a map of files per package which should be copied to the site dir
 * @param {object} [options]
 * @param {string} [options.prefix='rh'] element prefix e.g. 'rh' for 'rh-button'
 */
function getFilesToCopy(options) {
  // Copy element demo files
  const repoRoot = process.cwd();
  const elements = fs.readdirSync(path.join(repoRoot, 'elements'));

  const config = require('../../.pfe.config.json');
  const aliases = config.aliases ?? {};
  /** @param {string} tagName */
  const getSlug = tagName =>
    (typeof slugify === 'function' ? slugify : slugify.default)(aliases[tagName] ?? tagName
      .replace(`${options?.prefix ?? 'rh'}-`, ''))
      .toLowerCase();

  const files = {
    [path.join(repoRoot, 'node_modules/element-internals-polyfill')]: 'element-internals-polyfill',
  };

  // Copy all component and core files to _site
  Object.assign(files, Object.fromEntries(elements.flatMap(element => {
    const slug = getSlug(element);
    return [
      [
        `elements/${element}/demo/**/*.{css,js,png,svg,jpg,webp}`,
        `components/${slug}/demo`,
      ],
    ];
  })));

  return files;
}


/** @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig */
module.exports = function(eleventyConfig, { tagsToAlphabetize }) {
  eleventyConfig.addPlugin(RHDSAlphabetizeTagsPlugin, { tagsToAlphabetize });

  /** add `section`, `example`, `demo`, etc. shortcodes */
  eleventyConfig.addPlugin(RHDSShortcodesPlugin);

  /** format date strings */
  eleventyConfig.addFilter('prettyDate', prettyDate);

  eleventyConfig.addPassthroughCopy('docs/demo.{js,map,ts}');

  eleventyConfig.addPassthroughCopy(getFilesToCopy());

  eleventyConfig.addTransform('demo-subresources', demoPaths);

  eleventyConfig.addTransform('demo-lightdom-css', lightdomCss);

  // TODO: https://www.11ty.dev/docs/filters/#asynchronous-universal-filters in eleventy 2.0
  eleventyConfig.addNunjucksAsyncFilter('tabs', function(_docsPage, callback) {
    (async function(docsPage) {
      if (!docsPage) {
        callback(null, []);
      } else {
        const { tagName } = docsPage;
        const docsDir = path.join(__dirname, 'elements', tagName, 'docs');
        const docsFilePaths = await glob(`${docsDir}/*.md`);
        const tabs = docsFilePaths.map(path => ({
          path,
          title: path.split('/').pop()?.split('.').shift()?.replace(/^\d+-/, ''),
        }));
        callback(null, tabs);
        // return tabs;
      }
    })(_docsPage);
  });

  eleventyConfig.addFilter('getDemos', function(tagName, demos) {
    return demos.filter(x => x.tagName === tagName);
  });

  eleventyConfig.addFilter('assign', function(target, obj) {
    return Object.assign(target, obj);
  });

  // generate a bundle that packs all of rhds with all dependencies
  // into a single large javascript file
  eleventyConfig.on('eleventy.before', async () => {
    const { bundle } = await import('../../scripts/bundle.js');
    await bundle({ outfile: '_site/assets/rhds.min.js' });
  });

  eleventyConfig.on('eleventy.before', async ({ runMode }) => {
    if (runMode === 'watch') {
      await exec('npx cem analyze');
    }
  });
};
