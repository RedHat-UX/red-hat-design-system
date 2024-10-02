/// <reference lib="ESNext.Array"/>

// @ts-check
const fs = require('node:fs');
const path = require('node:path');
const exec = require('node:util').promisify(require('node:child_process').exec);
const { glob, writeFile } = require('node:fs/promises');
const yaml = require('js-yaml');
const _slugify = require('slugify');
const slugify = typeof _slugify === 'function' ? _slugify : _slugify.default;
const capitalize = require('capitalize');
const RHDSAlphabetizeTagsPlugin = require('./alphabetize-tags.cjs');
const RHDSShortcodesPlugin = require('./shortcodes.cjs');
const { parse } = require('async-csv');

const exists = async path => {
  const { stat } = await import('node:fs/promises');
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
};

const cwd = process.cwd();

/**
 * EleventyTransformContext the `this` binding for transform functions
 * outputPath the path the page will be written to
 * inputPath the path to the page's input file (e.g. template or paginator)
 */

/**
 * Replace paths in demo files from the dev SPA's format to 11ty's format
 * @param {string} content the HTML content to replace
 */
async function demoPaths(content) {
  const { outputPath, inputPath } = this;
  if (!outputPath) {
    return '';
  }
  const isNested = outputPath.match(/demo\/.+\/index\.html$/);
  if (inputPath === './docs/elements/demos.html') {
    const { parse, serialize } = await import('parse5');
    const {
      queryAll,
      isElementNode,
      getAttribute,
      setAttribute,
      hasAttribute,
    } = await import('@parse5/tools');
    const document = parse(content);
    for (const node of queryAll(document, node =>
      isElementNode(node)
        && (hasAttribute(node, 'href')
         || hasAttribute(node, 'src')))) {
      if (isElementNode(node)) {
        const attr = hasAttribute(node, 'href') ? 'href' : 'src';
        const val = getAttribute(node, attr);
        if (!val) {
          return;
        } else if (!val.startsWith('http') && !val.startsWith('/') && !val.startsWith('#')) {
          setAttribute(node, attr, `${isNested ? '../' : ''}${val}`);
        } else if (val.startsWith('/elements/rh-')) {
          setAttribute(node, attr, val.replace('/elements/rh-', '/'));
        }
      }
    }
    return serialize(document);
  }
  return content;
}

// Rewrite DEMO lightdom css relative URLs
const LIGHTDOM_HREF_RE = /href="\.(?<pathname>.*-lightdom.*\.css)"/g;
const LIGHTDOM_PATH_RE = /href="\.(.*)"/;

/**
 * @param {string | number | Date} dateStr iso date string
 * @param {Intl.DateTimeFormatOptions} options date format options
 */
function prettyDate(dateStr, options = {}) {
  const { dateStyle = 'medium' } = options;
  return new Intl.DateTimeFormat('en-US', { dateStyle })
      .format(new Date(dateStr));
}

/**
 * @param {string} tagName e.g. pf-jazz-hands
 * @param {import("@patternfly/pfe-tools/config.js").PfeConfig} config pfe tools repo config
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
  const repoRoot = cwd;
  const tagNames = fs.readdirSync(path.join(repoRoot, 'elements'), { withFileTypes: true })
      .filter(ent => ent.isDirectory())
      .map(ent => ent.name);

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

/**
 * @param {{ slug: string; }} a first
 * @param {{ slug: string; }} b next
 */
function alphabeticallyBySlug(a, b) {
  return (
      a.slug < b.slug ? -1
    : a.slug > b.slug ? 1
    : 0
  );
}

/**
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig user config
 * @param {{tagsToAlphabetize: string[]}} opts
 */
module.exports = function(eleventyConfig, { tagsToAlphabetize }) {
  eleventyConfig.addDataExtension('yml, yaml', contents => yaml.load(contents));

  eleventyConfig.addDataExtension('csv', contents => parse(contents));

  eleventyConfig.addPlugin(RHDSAlphabetizeTagsPlugin, { tagsToAlphabetize });

  /** add `section`, `example`, `demo`, etc. shortcodes */
  eleventyConfig.addPlugin(RHDSShortcodesPlugin);

  eleventyConfig.addPassthroughCopy('docs/demo.{js,map,ts}');

  eleventyConfig.addPassthroughCopy({
    'node_modules/element-internals-polyfill': '/assets/packages/element-internals-polyfill',
  });

  // ensure icons are copied to the assets dir.
  eleventyConfig.addPassthroughCopy({
    'node_modules/@patternfly/icons/': '/assets/packages/@patternfly/icons/',
  });

  const filesToCopy = getFilesToCopy();
  eleventyConfig.addPassthroughCopy(filesToCopy, {
    filter: /** @param {string} path pathname */path => !path.endsWith('.html'),
  });

  eleventyConfig.addTransform('demo-subresources', demoPaths);

  eleventyConfig.addTransform('demo-lightdom-css', async function(content) {
    const { outputPath, inputPath } = this;
    const { pfeconfig } = eleventyConfig?.globalData ?? {};
    const { aliases } = pfeconfig;

    if (inputPath === './docs/elements/demo.html' ) {
      const tagNameMatch = outputPath.match(/\/elements\/(?<tagName>[-\w]+)\/demo\//);
      if (tagNameMatch) {
        const { tagName } = tagNameMatch.groups;

        // slugify the value of each key in aliases creating a new cloned copy
        const modifiedAliases = Object.fromEntries(Object.entries(aliases).map(([key, value]) => [
          slugify(key, { strict: true, lower: true }),
          value,
        ]));

        // does the tagName exist in the aliases object?
        const key = Object.keys(modifiedAliases).find(key => modifiedAliases[key] === tagName);
        const { deslugify } = await import('@patternfly/pfe-tools/config.js');
        const prefixedTagName = deslugify(tagName, path.join(__dirname, '../..'));
        const redirect = { new: key ?? prefixedTagName, old: tagName };
        const matches = content.match(LIGHTDOM_HREF_RE);
        if (matches) {
          for (const match of matches) {
            const [, path] = match.match(LIGHTDOM_PATH_RE) ?? [];
            const { pathname } = new URL(path, `file:///${outputPath}`);
            const filename = pathname.split('/').pop();
            const replacement = `/assets/packages/@rhds/elements/elements/${prefixedTagName}/${filename}`;
            content = content.replace(`.${path}`, replacement);
          }
        }
      }
    }
    return content;
  });

  eleventyConfig.addFilter('getPrettyElementName', function(tagName) {
    const { pfeconfig } = eleventyConfig?.globalData ?? {};
    const slug = getTagNameSlug(tagName, pfeconfig);
    const deslugify = eleventyConfig.getFilter('deslugify');
    return pfeconfig.aliases[tagName] || deslugify(slug);
  });

  eleventyConfig.addFilter('isPlanned', function isPlanned(repoStatus, name) {
    const element = repoStatus.find(element => element.name === name);
    return element?.libraries.find(library => library.name === 'RH Elements')?.status === 'Planned';
  });

  eleventyConfig.addFilter('getTitleFromDocs', function(docs) {
    return docs.find(x => x.docsPage?.title)?.alias
      ?? docs[0]?.alias
      ?? docs[0]?.docsPage?.title
      ?? eleventyConfig.getFilter('deslugify')(docs[0]?.slug);
  });

  /** get the element overview from the manifest */
  eleventyConfig.addFilter('getElementDescription', function getElementDescription() {
    /**
     * NB: since the data for this shortcode is no a POJO,
     * but a DocsPage instance, 11ty assigns it to this.ctx._
     * @see https://github.com/11ty/eleventy/blob/bf7c0c0cce1b2cb01561f57fdd33db001df4cb7e/src/Plugins/RenderPlugin.js#L89-L93
     */
    const { docsPage } = this.ctx.doc;
    return docsPage.description;
  });

  /** format date strings */
  eleventyConfig.addFilter('prettyDate', prettyDate);

  eleventyConfig.addFilter('deslugify', /** @param {string} slug */ function(slug) {
    return capitalize(slug.replace(/-/g, ' '));
  });

  eleventyConfig.addFilter('relatedItems', /** @param {string} item */ function(item) {
    const { relatedItems } = this.ctx;
    const { pfeconfig } = eleventyConfig?.globalData ?? {};
    const rels = relatedItems?.[item] ?? [];
    const unique = [...new Set(rels)];
    const related = unique.map(x => {
      const slug = getTagNameSlug(x, pfeconfig);
      const deslugify = eleventyConfig.getFilter('deslugify');
      return {
        name: x,
        url: slug === x ? `/patterns/${slug}` : `/elements/${slug}`,
        text: pfeconfig.aliases[x] || deslugify(slug),
      };
    }).sort((a, b) => a.text < b.text ? -1 : a.text > b.text ? 1 : 0);
    return related;
  });

  eleventyConfig.addFilter('makeSentenceCase', function(value) {
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

  eleventyConfig.addCollection('elementDocs', async function(collectionApi) {
    const { pfeconfig } = eleventyConfig?.globalData ?? {};
    /**
     * @param {string} filePath
     */
    async function getProps(filePath) {
      const [, tagName] = filePath.split(path.sep);
      const absPath = path.join(cwd, filePath);
      /** configured alias for this element e.g. `Call to Action` for `rh-cta` */
      const alias = pfeconfig.aliases[tagName];
      /** e.g. `footer` for `rh-footer` or `call-to-action` for `rh-cta` */
      const slug = getTagNameSlug(tagName, pfeconfig);
      /** e.g. `Code` or `Guidelines` */
      const pageTitle =
        capitalize(filePath.split(path.sep).pop()?.split('.').shift()?.replace(/^\d+-/, '') ?? '');
      const pageSlug = slugify(pageTitle, { strict: true, lower: true });
      /** e.g. `/elements/call-to-action/code/index.html` */
      const overviewHref = `/elements/${slug}/`;
      const permalink =
          pageSlug === 'overview' ? `/elements/${slug}/index.html`
        : `/elements/${slug}/${pageSlug}/index.html`;
      const href = permalink.replace('index.html', '');
      const fileExists = await exists(absPath);
      const elDir = path.join(cwd, 'elements', tagName);
      const hasLightdom = await exists(path.join(elDir, `${tagName}-lightdom.css`));
      const hasLightdomShim = await exists(path.join(elDir, `${tagName}-lightdom-shim.css`));
      const siblingElements = (await Array.fromAsync(glob(`elements/${tagName}/*.ts`, { cwd })))
          .map(x => x.split('/').pop())
          .filter(x => x && x.startsWith('rh-') && !x.endsWith('.d.ts'))
          .map(x => x?.split('.').shift())
          .filter(x => x !== tagName );
      const isCodePage = pageSlug === 'code';
      const screenshotPath = `/elements/${slug}/screenshot.png`;
      /** urls for related links */
      return {
        tagName,
        filePath,
        fileExists,
        hasLightdom,
        hasLightdomShim,
        isCodePage,
        siblingElements,
        absPath,
        alias,
        slug,
        pageTitle,
        pageSlug,
        screenshotPath,
        permalink,
        href,
        overviewHref,
      };
    }

    try {
      const { DocsPage } = await import('@patternfly/pfe-tools/11ty/DocsPage.js');
      const {
        getAllManifests,
      } = await import(
        '@patternfly/pfe-tools/custom-elements-manifest/custom-elements-manifest.js'
      );

      const customElementsManifestDocsPages = await eleventyConfig.globalData?.elements();
      const filePaths = (await Array.fromAsync(glob(`elements/*/docs/*.md`, { cwd })))
          .filter(x => x.match(/\d{1,3}-[\w-]+\.md$/)); // only include new style docs
      const elementDocFilePaths =
        Array.from(new Set([
          ...filePaths,
          // TODO: adding the code file in the next line is a temporary hack to add in a virtual
          // `XX-code.md` if one doesn't already exist. At a later date, this entire function
          // (elementDocs) should be refactored, and the elements/*/docs/*.md files should be used
          // only for markdown content, but the code and demos tabs should be fully generated, with
          // the XX-code.md content interjected, if any.
          ...await Array.fromAsync(glob('elements/*', { cwd }), x =>
                x === 'elements/rh-code-block' ? `${x}/docs/40-code.md`
            : `${x}/docs/30-code.md`
          ),
        ]));

      const elementDocs = await Promise.all(elementDocFilePaths.map(async filePath => {
        const props = await getProps(filePath);
        const [manifest] = getAllManifests();
        const docsPage =
          customElementsManifestDocsPages.find(x => x.tagName === props.tagName)
            ?? new DocsPage(manifest);

        const tabs = await Promise.all(elementDocFilePaths
            .filter(x => x.split('/docs/').at(0) === (`elements/${props.tagName}`))
            .sort()
        // todo: avoid calling getProps twice, it's expensive
            .map(x => getProps(x)));
        return { docsPage, tabs, ...props };
      }));
      elementDocs.sort(alphabeticallyBySlug);
      return elementDocs; ;
    } catch (e) {
      // it's important to surface this
      // eslint-disable-next-line no-console
      console.error(e);
      throw e;
    }
  });

  eleventyConfig.addWatchTarget('docs/patterns/**/patterns/*.html');
  eleventyConfig.addWatchTarget('docs/theming/**/patterns/*.html');

  for (const tagName of fs.readdirSync(path.join(cwd, './elements/'))) {
    const dir = path.join(cwd, './elements/', tagName, 'docs/');
    eleventyConfig.addWatchTarget(dir);
  }

  /** add the normalized pfe-tools config to global data */
  eleventyConfig.on('eleventy.before', async function() {
    const config = await import('@patternfly/pfe-tools/config.js').then(m => m.getPfeConfig());
    eleventyConfig.addGlobalData('pfeconfig', config);
  });

  /** custom-elements.json */
  eleventyConfig.on('eleventy.before', async function({ runMode }) {
    if (runMode === 'watch') {
      await exec('npx cem analyze');
    }
  });

  /** /assets/javascript/environment.js */
  eleventyConfig.on('eleventy.before', async function({ dir }) {
    const outPath = path.join(dir.input, '..', 'lib', 'environment.js');
    const { makeDemoEnv } = await import('../../scripts/environment.js');
    await writeFile(outPath, await makeDemoEnv(), 'utf8');
  });
};
