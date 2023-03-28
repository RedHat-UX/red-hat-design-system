// @ts-check
const fs = require('node:fs');
const path = require('node:path');
const _slugify = require('slugify');
const slugify = typeof _slugify === 'function' ? _slugify : _slugify.default;
const capitalize = require('capitalize');
const { glob } = require('glob');
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
  const tagNames = fs.readdirSync(path.join(repoRoot, 'elements'));

  const config = require('../../.pfe.config.json');
  const aliases = config.aliases ?? {};

  /** @param {string} tagName */
  const getSlug = tagName =>
    slugify(aliases[tagName] ?? tagName
      .replace(`${options?.prefix ?? 'rh'}-`, ''))
      .toLowerCase();

  // TODO after docs IA migration, remove the /components files
  const MIGRATED_ELEMENTS = require('../_data/migratedElements.cjs');

  // Copy all component and core files to _site
  const files = Object.fromEntries(tagNames.flatMap(tagName => {
    const slug = getSlug(tagName);
    const dest = MIGRATED_ELEMENTS.has(tagName) ? 'elements' : 'components';
    return [
      [
        `elements/${tagName}/demo/`,
        `${dest}/${slug}/demo`,
      ],
      ...!MIGRATED_ELEMENTS.has(tagName) ? [] : [
        [
          `elements/${tagName}/docs/**/*.{svg,png,jpg,jpeg,bmp,webp,webm,mp3,ogg,json,css,js,map,d.ts}`,
          `${dest}/${slug}`,
        ],
      ]
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

  eleventyConfig.addFilter('deslugify', function(slug) {
    return capitalize(slug.replaceAll('-', ' '));
  });

  eleventyConfig.addCollection('elementDocs', async function(collectionApi) {
    const config = await import('@patternfly/pfe-tools/config.js').then(m => m.getPfeConfig());

    function getProps(filePath, config) {
      const [, tagName] = filePath.split(path.sep);
      const absPath = path.join(process.cwd(), filePath);
      /** configured alias for this element e.g. `Call to Action` for `rh-cta` */
      const alias = config.aliases[tagName];
      /** e.g. `footer` for `rh-footer` or `call-to-action` for `rh-cta` */
      const slug = slugify(alias ?? tagName.replace(`${config.tagPrefix}-`, '')).toLowerCase();
      /** e.g. `Code` or `Guidelines` */
      const pageTitle = capitalize(filePath.split(path.sep).pop()?.split('.').shift()?.replace(/^\d+-/, '') ?? '');
      const pageSlug = slugify(pageTitle).toLowerCase();
      /** e.g. `/elements/call-to-action/code/index.html` */
      const permalink =
          pageSlug === 'overview' ? `/elements/${slug}/index.html`
        : `/elements/${slug}/${pageSlug}/index.html`;
      const href = permalink.replace('index.html', '');
      return {
        tagName,
        filePath,
        absPath,
        alias,
        slug,
        pageTitle,
        pageSlug,
        permalink,
        href,
      };
    }

    try {
      const elements = await eleventyConfig.globalData?.elements();
      const filePaths = (await glob(`elements/*/docs/*.md`, { cwd: process.cwd() }))
        .filter(x => x.match(/\d{1,3}-[\w-]+\.md$/)); // only include new style docs
      return filePaths
        .map(filePath => {
          const props = getProps(filePath, config);
          const docsPage = elements.find(x => x.tagName === props.tagName);
          const tabs = filePaths
            .filter(x => x.startsWith(`elements/${props.tagName}`))
            .sort()
            .map(x => getProps(x, config));
          return { docsPage, tabs, ...props };
        });
    } catch (e) {
      // it's important to surface this
      // eslint-disable-next-line no-console
      console.error(e);
      throw e;
    }
  });

  // generate a bundle that packs all of rhds with all dependencies
  // into a single large javascript file
  eleventyConfig.on('eleventy.before', async function() {
    const { bundle } = await import('../../scripts/bundle.js');
    await bundle({ outfile: '_site/assets/rhds.min.js' });
  });

  // custom-elements.json
  eleventyConfig.on('eleventy.before', async function({ runMode }) {
    if (runMode === 'watch') {
      await exec('npx cem analyze');
    }
  });

  // /assets/rhds.min.css
  eleventyConfig.on('eleventy.before', async function({ dir }) {
    const { readFile, writeFile } = fs.promises;
    const CleanCSS = await import('clean-css').then(x => x.default);
    const cleanCSS = new CleanCSS({ sourceMap: true, returnPromise: true });
    const sourcePath = path.join(process.cwd(), 'node_modules/@rhds/tokens/css/global.css');
    const outPath = path.join(dir.output, 'assets', 'rhds.min.css');
    const source = await readFile(sourcePath, 'utf8');
    const { styles } = await cleanCSS.minify(source);
    await writeFile(outPath, styles, 'utf8');
  });
};
