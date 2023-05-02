// @ts-check
const fs = require('node:fs');
const path = require('node:path');
const _slugify = require('slugify');
const slugify = typeof _slugify === 'function' ? _slugify : _slugify.default;
const capitalize = require('capitalize');
const { glob } = require('glob');
const exec = require('node:util').promisify(require('node:child_process').exec);
const csv = require('async-csv');
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
  if (inputPath === './docs/elements/demos.html' ) {
    const matches = content.match(LIGHTDOM_HREF_RE);
    if (matches) {
      for (const match of matches) {
        const [, path] = match.match(LIGHTDOM_PATH_RE) ?? [];
        const { pathname } = new URL(path, `file:///${outputPath}`);
        content = content.replace(`.${path}`, pathname
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
 * @param {string} tagName
 * @param {import('@patternfly/pfe-tools/config.js').PfeConfig} config
 */
function getTagNameSlug(tagName, config) {
  const name = config?.aliases?.[tagName] ?? tagName.replace(`${config?.tagPrefix ?? 'rh'}-`, '');
  return slugify(name, {
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
function getFilesToCopy() {
  // Copy element demo files
  const repoRoot = process.cwd();
  const tagNames = fs.readdirSync(path.join(repoRoot, 'elements'));

  /** @type{import('@patternfly/pfe-tools/config.js').PfeConfig}*/
  const config = require('../../.pfe.config.json');

  // Copy all component and core files to _site
  return Object.fromEntries(tagNames.flatMap(tagName => {
    const slug = getTagNameSlug(tagName, config);
    return Object.entries({
      [`elements/${tagName}/demo/`]: `elements/${slug}/demo`,
      [`elements/${tagName}/docs/**/*.{${COPY_CONTENT_EXTENSIONS.join(',')}}`]: `elements/${slug}`,
    });
  }));
}

function alphabeticallyBySlug(a, b) {
  return (
      a.slug < b.slug ? -1
    : a.slug > b.slug ? 1
    : 0
  );
}

async function getLinkInfoForItems(items = []){
  items = items.filter(item=>item?.trim()?.length > 1);
  if(items.length < 1){
    return [];
  } else {
    const config = await import('@patternfly/pfe-tools/config.js').then(m => m.getPfeConfig());
    const links = items.map(item=>{
        const slug = getTagNameSlug(item, config);
        const url = slug === item ? `/patterns/${slug}` : `/elements/${slug}`;
        const text = config?.aliases?.[item] ?? capitalize(slug.replace(/-/g, ' '));
        return {
          url: url,
          text: text
        }
      });
    return links;
  }
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

  eleventyConfig.addPassthroughCopy(getFilesToCopy(), {
    filter: /** @param {string} path */path => !path.endsWith('.html'),
  });

  eleventyConfig.addTransform('demo-subresources', demoPaths);

  eleventyConfig.addTransform('demo-lightdom-css', lightdomCss);

  eleventyConfig.addFilter('getTitleFromDocs', function(docs) {
    return docs.find(x => x.docsPage?.title)?.docsPage?.title ??
      docs[0]?.docsPage?.title ??
      eleventyConfig.getFilter('deslugify')(docs[0]?.slug);
  });

  /** get the element overview from the manifest */
  eleventyConfig.addFilter('getElementDescription', function getElementDescription(tagName) {
    /**
     * NB: since the data for this shortcode is no a POJO,
     * but a DocsPage instance, 11ty assigns it to this.ctx._
     * @see https://github.com/11ty/eleventy/blob/bf7c0c0cce1b2cb01561f57fdd33db001df4cb7e/src/Plugins/RenderPlugin.js#L89-L93
     * @type {import('@patternfly/pfe-tools/11ty/DocsPage').DocsPage}
     */
    const docsPage = this.ctx._;
    return docsPage.description;
  });

  /** format date strings */
  eleventyConfig.addFilter('prettyDate', prettyDate);

  eleventyConfig.addFilter('deslugify', /** @param {string} slug */ function(slug) {
    return capitalize(slug.replace(/-/g, ' '));
  });

  eleventyConfig.addFilter('relatedItems', /** @param {string} itemsList */ async function(itemsList="") {
    const items = itemsList.split(/[,\s]+/);
    const links = await getLinkInfoForItems(items);
    const list = links?.slice(0,3)?.sort((a,b) => a.text < b.text ? -1 : a.text > b.text ? 1 : 0);
    return list;
  });

  eleventyConfig.addCollection('elementDocs', async function() {
    const config = await import('@patternfly/pfe-tools/config.js').then(m => m.getPfeConfig());

    /**
     * @param {string} filePath
     * @param {Required<import("@patternfly/pfe-tools/config.js").PfeConfig>} config
     */
    function getProps(filePath, config) {
      const [, tagName] = filePath.split(path.sep);
      const absPath = path.join(process.cwd(), filePath);
      /** configured alias for this element e.g. `Call to Action` for `rh-cta` */
      const alias = config.aliases[tagName];
      /** e.g. `footer` for `rh-footer` or `call-to-action` for `rh-cta` */
      const slug = getTagNameSlug(tagName, config);
      /** e.g. `Code` or `Guidelines` */
      const pageTitle =
        capitalize(filePath.split(path.sep).pop()?.split('.').shift()?.replace(/^\d+-/, '') ?? '');
      const pageSlug = slugify(pageTitle, { strict: true, lower: true });
      /** e.g. `/elements/call-to-action/code/index.html` */
      const permalink =
          pageSlug === 'overview' ? `/elements/${slug}/index.html`
        : `/elements/${slug}/${pageSlug}/index.html`;
      const href = permalink.replace('index.html', '');
      const screenshotPath = `/elements/${slug}/screenshot.svg`;
      return {
        tagName,
        filePath,
        absPath,
        alias,
        slug,
        pageTitle,
        pageSlug,
        screenshotPath,
        permalink,
        href,
      };
    }

    try {
      /** @type {(import('@patternfly/pfe-tools/11ty/DocsPage').DocsPage & { componentStatus?: any[] })[]} */
      const elements = await eleventyConfig.globalData?.elements();
      const filePaths = (await glob(`elements/*/docs/*.md`, { cwd: process.cwd() }))
        .filter(x => x.match(/\d{1,3}-[\w-]+\.md$/)); // only include new style docs
      const componentStatus = await csv.parse(await fs.promises.readFile(path.join(__dirname, '../_data/componentStatus.csv'), 'utf8'));
      return filePaths
        .map(filePath => {
          const props = getProps(filePath, config);
          const docsPage = elements.find(x => x.tagName === props.tagName);
          if (docsPage) { docsPage.componentStatus = componentStatus; }
          const tabs = filePaths
            .filter(x => x.split('/docs/').at(0) === (`elements/${props.tagName}`))
            .sort()
            .map(x => getProps(x, config));
          return { docsPage, tabs, ...props };
        })
        .sort(alphabeticallyBySlug);
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
