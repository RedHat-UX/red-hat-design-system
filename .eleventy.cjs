// @ts-check
Error.stackTraceLimit = 50;
const compress = require('compression');
const anchorsPlugin = require('@orchidjs/eleventy-plugin-ids');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const directoryOutputPlugin = require('@11ty/eleventy-plugin-directory-output');

const customElementsManifestPlugin = require('@patternfly/pfe-tools/11ty/plugins/custom-elements-manifest.cjs');
const orderTagsPlugin = require('@patternfly/pfe-tools/11ty/plugins/order-tags.cjs');
const todosPlugin = require('@patternfly/pfe-tools/11ty/plugins/todos.cjs');

const rhdsShortcodesPlugin = require('./docs/_plugins/shortcodes.cjs');
const rhdsAlphabetizeTagsPlugin = require('./docs/_plugins/alphabetize-tags.cjs');

const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

const pluginToc = require('@patternfly/pfe-tools/11ty/plugins/table-of-contents.cjs');
const sassPlugin = require('eleventy-plugin-dart-sass');

const fs = require('node:fs');
const path = require('node:path');
const slugify = require('slugify');
const glob = require('node:util').promisify(require('glob'));
const csv = require('async-csv');

// TODO: https://www.11ty.dev/docs/languages/markdown/#optional-amend-the-library-instance
const markdownLib = markdownIt({ html: true, linkify: true })
  .use(markdownItAnchor);

/** @param {import('@11ty/eleventy/src/TemplateConfig').TemplateConfig} eleventyConfig */
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(sassPlugin, {
    sassLocation: `${path.join(__dirname, 'docs', 'scss')}/`,
    sassIndexFile: 'styles.scss',
    includePaths: ['node_modules', '**/*.{scss,sass}'],
    domainName: '',
    outDir: path.join(__dirname, '_site'),
  });
  eleventyConfig.setQuietMode(process.env.npm_config_quiet);

  eleventyConfig.setWatchThrottleWaitTime(500);

  eleventyConfig.setBrowserSyncConfig({
    open: 'local',
    server: {
      baseDir: '_site',
      middleware: [compress()],
    },
  });

  eleventyConfig.addDataExtension('csv', contents => csv.parse(contents));

  /** Table of Contents Shortcode */
  eleventyConfig.addPlugin(pluginToc, {
    tags: ['h2', 'h3', 'h4', 'h5', 'h6'],
    wrapperClass: 'table-of-contents',
    headingText: 'Table of Contents'
  });

  /** Generate and consume custom elements manifests */
  eleventyConfig.addPlugin(customElementsManifestPlugin);

  /** Collections to organize by order instead of date */
  eleventyConfig.addPlugin(orderTagsPlugin, { tags: ['develop'] });

  /** list todos */
  eleventyConfig.addPlugin(todosPlugin);

  /** format date strings */
  eleventyConfig.addFilter('prettyDate', function(dateStr, options = {}) {
    const { dateStyle = 'medium' } = options;
    return new Intl.DateTimeFormat('en-US', { dateStyle })
      .format(new Date(dateStr));
  });

  eleventyConfig.addFilter('split', (str, d) => str.split(d));

  /** fancy syntax highlighting with diff support */
  eleventyConfig.addPlugin(syntaxHighlight);

  /** add `section`, `example`, `demo`, etc. shortcodes */
  eleventyConfig.addPlugin(rhdsShortcodesPlugin);

  /** Add IDs to heading elements */
  eleventyConfig.addPlugin(anchorsPlugin, {
    formatter(element, existingids) {
      if (
        !existingids.includes(element.getAttribute('id')) &&
        element.hasAttribute('slot') &&
        element.closest('pfe-card')
      ) {
        return null;
      } else {
        return eleventyConfig.javascriptFunctions
          .slug(element.textContent)
          .replace(/[&,+()$~%.'":*?!<>{}]/g, '');
      }
    },
  });

  eleventyConfig.addPlugin(directoryOutputPlugin, {
    // Customize columns
    columns: {
      filesize: true, // Use `false` to disable
      benchmark: true, // Use `false` to disable
    },

    // Will show in yellow if greater than this number of bytes
    warningFileSize: 400 * 1000,
  });

  /**
   * Collections to organize by 'order' value in front matter, then alphabetical by title;
   * instead of by date
   */
  eleventyConfig.addPlugin(rhdsAlphabetizeTagsPlugin, {
    tagsToAlphabetize: [
      'component',
      'foundations',
      'getstarted',
    ]
  });

  eleventyConfig.setLibrary('md', markdownLib);
  eleventyConfig.setQuietMode(true);

  eleventyConfig.addPassthroughCopy('docs/public/red-hat-outfit.css');
  eleventyConfig.addPassthroughCopy('docs/CNAME');
  eleventyConfig.addPassthroughCopy('docs/.nojekyll');
  eleventyConfig.addPassthroughCopy('docs/robots.txt');
  eleventyConfig.addPassthroughCopy('docs/assets/**/*');
  eleventyConfig.addPassthroughCopy('docs/js/**/*');
  eleventyConfig.addPassthroughCopy({ 'elements': 'assets/elements/' });
  eleventyConfig.addPassthroughCopy({ 'lib': 'assets/lib/' });
  eleventyConfig.addPassthroughCopy({
    [`${path.dirname(require.resolve('@patternfly/pfe-styles'))}/*.{css,css.map}`]: 'assets'
  });

  // Copy element demo files
  const repoRoot = process.cwd();
  const elements = fs.readdirSync(path.join(repoRoot, 'elements'));

  const config = require('./.pfe.config.json');
  const aliases = config.aliases ?? {};
  const getSlug = tagName => slugify(aliases[tagName] ?? tagName.replace('rh-', '')).toLowerCase();

  eleventyConfig.addPassthroughCopy(Object.fromEntries(elements.flatMap(element => {
    const slug = getSlug(element);
    return [
      [
        `elements/${element}/demo/**/*.{css,js,png,svg,jpg,webp}`,
        `components/${slug}/demo`,
      ],
    ];
  })));

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

  // Rewrite DEMO lightdom css relative URLs
  const LIGHTDOM_HREF_RE = /href="\.(?<pathname>.*-lightdom\.css)"/g;
  const LIGHTDOM_PATH_RE = /href="\.(.*)"/;
  eleventyConfig.addTransform('demo-lightdom-css',
    /**
     * @param {string} content
     * @this {{outputPath: string, inputPath: string}}
     */
    function(content) {
      const { outputPath, inputPath } = this;
      if (inputPath === './docs/components/demos.html') {
        const matches = content.match(LIGHTDOM_HREF_RE);
        if (matches) {
          for (const match of matches) {
            const [, path] = match.match(LIGHTDOM_PATH_RE);
            const { pathname } = new URL(path, `file:///${outputPath}`);
            content = content.replace(`.${path}`, pathname
              .replace('/_site/components/', '/assets/elements/rh-')
              .replace('/demo/', '/'));
          }
        }
      }
      return content;
    });

  // generate a bundle that packs all of rhds with all dependencies
  // into a single large javascript file
  eleventyConfig.on('eleventy.before', async () =>
    import('./scripts/bundle.js')
      .then(m => m.build({
        outfile: '_site/assets/rhds.min.js',
        external: [],
        additionalPackages: [
          'lit',
          ...Object.entries(require(path.join(__dirname, 'package.json')).dependencies)
            .map(([k, v]) => k.startsWith('@patternfly') && v === 'next' ? k : false)
            .filter(x => x && x !== '@patternfly/pfe-styles'),
        ],
      })));

  return {
    templateFormats: ['html', 'md', 'njk', '11ty.cjs'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: './docs',
    },
  };
};
