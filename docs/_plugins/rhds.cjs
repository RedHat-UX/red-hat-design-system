// @ts-check
const fs = require('node:fs');
const path = require('node:path');
const _slugify = require('slugify');
const slugify = typeof _slugify === 'function' ? _slugify : _slugify.default;
const glob = require('node:util').promisify(require('glob'));
const exec = require('node:util').promisify(require('node:child_process').exec);
const cheerio = require('cheerio');
const RHDSAlphabetizeTagsPlugin = require('./alphabetize-tags.cjs');
const RHDSShortcodesPlugin = require('./shortcodes.cjs');

/** @typedef {object} EleventyTransformContext */

/**
 * Replace paths in demo files from the dev SPA's format to 11ty's format
 * @this {EleventyTransformContext}
 * @param {string} content
 */
function demoPaths(content) {
  const { outputPath, inputPath } = this;
  const isNested = outputPath.match(/demo\/.+\/index\.html$/);
  if (inputPath === './docs/elements/demos.html' ) {
    const $ = cheerio.load(content);
    $('[href], [src]').each(function() {
      const el = $(this);
      const attr = el.attr('href') ? 'href' : 'src';
      const val = el.attr(attr);
      if (!val) { return; }
      if (!val.startsWith('http') && !val.startsWith('/') && !val.startsWith('#')) {
        el.attr(attr, `${isNested ? '../' : ''}${val}`);
      } else if (val.startsWith('/elements/rh-')) {
        el.attr(attr, val.replace('/elements/rh-', '/'));
      }
    });
    return $.html();
  }
  return content;
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
  if (inputPath === './docs/components/demos.html' || inputPath === './docs/elements/demos.html' ) {
    const matches = content.match(LIGHTDOM_HREF_RE);
    if (matches) {
      for (const match of matches) {
        const [, path] = match.match(LIGHTDOM_PATH_RE) ?? [];
        const { pathname } = new URL(path, `file:///${outputPath}`);
        content = content.replace(`.${path}`, pathname
          .replace('/_site/components/', '/assets/packages/@rhds/elements/elements/rh-')
          .replace('/_site/elements/', '/assets/packages/@rhds/elements/elements/rh-')
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
    slugify(aliases[tagName] ?? tagName
      .replace(`${options?.prefix ?? 'rh'}-`, ''))
      .toLowerCase();

  // TODO after docs IA migration, remove the /components files
  const MIGRATED_ELEMENTS = [
    'rh-footer',
  ];

  // Copy all component and core files to _site
  const files = Object.fromEntries(elements.flatMap(element => {
    const slug = getSlug(element);
    const dest = MIGRATED_ELEMENTS.includes(element) ? 'elements' : 'components';
    return [
      [
        `elements/${element}/demo/`,
        `${dest}/${slug}/demo`,
      ],
    ];
  }));

  return files;
}


/** @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig */
module.exports = function(eleventyConfig, { tagsToAlphabetize }) {
  eleventyConfig.addPlugin(RHDSAlphabetizeTagsPlugin, { tagsToAlphabetize });

  /** add `section`, `example`, `demo`, etc. shortcodes */
  eleventyConfig.addPlugin(RHDSShortcodesPlugin);

  eleventyConfig.addPassthroughCopy('docs/demo.{js,map,ts}');

  eleventyConfig.addPassthroughCopy({
    'node_modules/element-internals-polyfill': '/assets/packages/element-internals-polyfill',
  });

  eleventyConfig.addPassthroughCopy(getFilesToCopy(), { filter: path => !path.endsWith('.html') });

  eleventyConfig.addTransform('demo-subresources', demoPaths);

  eleventyConfig.addTransform('demo-lightdom-css', lightdomCss);

  /** format date strings */
  eleventyConfig.addFilter('prettyDate', prettyDate);

  eleventyConfig.addFilter('getDemos', function(tagName, demos) {
    return demos.filter(x => x.tagName === tagName);
  });

  eleventyConfig.addFilter('assign', function(target, obj) {
    return Object.assign(target, obj);
  });

  eleventyConfig.addCollection('elementDocs', async function(collectionApi) {
    const config = await import('@patternfly/pfe-tools/config.js').then(m => m.getPfeConfig());

    function getProps(filePath, config) {
      const [, tagName] = filePath.split(path.sep);
      const absPath = path.join(process.cwd(), filePath);
      const pageTitle = filePath.split(path.sep).pop()?.split('.').shift()?.replace(/^\d+-/, '') ?? '';
      const tagSlug = tagName.replace(`${config.tagPrefix}-`, '');
      const pageSlug = slugify(pageTitle);
      const permalink = pageSlug === 'overview' ? `/elements/${tagSlug}/index.html`
          : `/elements/${tagSlug}/${pageSlug}/index.html`;
      const href = permalink.replace('index.html', '');
      return {
        absPath,
        filePath,
        pageTitle,
        pageSlug,
        tagName,
        tagSlug,
        permalink,
        href,
      };
    }

    const elements = await eleventyConfig.globalData?.elements();
    const filePaths = (await glob(`elements/*/docs/*.md`, { cwd: process.cwd() }))
      .filter(x => x.match(/\d{1,3}-[\w-]+\.md$/)); // only include new style docs
    return filePaths
      .map(filePath => {
        const { absPath, tagName, tagSlug, pageTitle, pageSlug, permalink } = getProps(filePath, config);
        const tabs = filePaths
          .filter(x => x.startsWith(`elements/${tagName}`))
          .map(x => getProps(x, config));
        const docsPage = elements.find(x => x.tagName === tagName);
        return {
          absPath,
          docsPage,
          filePath,
          pageSlug,
          pageTitle,
          permalink,
          tabs,
          tagName,
          tagSlug,
        };
      });
  });

  // generate a bundle that packs all of rhds with all dependencies
  // into a single large javascript file
  eleventyConfig.on('eleventy.before', async function() {
    const { bundle } = await import('../../scripts/bundle.js');
    await bundle({ outfile: '_site/assets/rhds.min.js' });
  });

  eleventyConfig.on('eleventy.before', async function({ runMode }) {
    if (runMode === 'watch') {
      await exec('npx cem analyze');
    }
  });
};
