// @ts-check
Error.stackTraceLimit = 50;

const SyntaxHighlightPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');
const DirectoryOutputPlugin = require('@11ty/eleventy-plugin-directory-output');
const AnchorsPlugin = require('@patternfly/pfe-tools/11ty/plugins/anchors.cjs');
const CustomElementsManifestPlugin = require('@patternfly/pfe-tools/11ty/plugins/custom-elements-manifest.cjs');
const OrderTagsPlugin = require('@patternfly/pfe-tools/11ty/plugins/order-tags.cjs');
const TodosPlugin = require('@patternfly/pfe-tools/11ty/plugins/todos.cjs');
const TOCPlugin = require('@patternfly/pfe-tools/11ty/plugins/table-of-contents.cjs');
const RHDSPlugin = require('./docs/_plugins/rhds.cjs');
const DesignTokensPlugin = require('./docs/_plugins/tokens.cjs');
const RHDSMarkdownItPlugin = require('./docs/_plugins/markdown-it.cjs');
const ImportMapPlugin = require('./docs/_plugins/importMap.cjs');

const isWatch =
  process.argv.includes('--serve') || process.argv.includes('--watch');

/** @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig */
module.exports = function(eleventyConfig) {
  eleventyConfig.setQuietMode(true);

  eleventyConfig.watchIgnores?.add('docs/assets/redhat/');
  eleventyConfig.watchIgnores?.add('**/*.spec.ts');
  eleventyConfig.watchIgnores?.add('**/*.d.ts');
  eleventyConfig.watchIgnores?.add('**/*.js.map');
  eleventyConfig.watchIgnores?.add('elements/*/test/');
  eleventyConfig.watchIgnores?.add('lib/elements/*/test/');
  eleventyConfig.addPassthroughCopy('docs/patterns/**/*.{svg,jpg,jpeg,png}');
  eleventyConfig.addPassthroughCopy('docs/CNAME');
  eleventyConfig.addPassthroughCopy('docs/.nojekyll');
  eleventyConfig.addPassthroughCopy('docs/robots.txt');
  eleventyConfig.addPassthroughCopy('docs/assets/**/*');
  eleventyConfig.addPassthroughCopy('docs/styles/**/*');

  eleventyConfig.addWatchTarget('docs/styles/');

  eleventyConfig.on('eleventy.before', function({ runMode }) {
    eleventyConfig.addGlobalData('runMode', runMode);
  });

  eleventyConfig.addGlobalData('sideNavDropdowns', [
    { 'title': 'About', 'url': '/about', 'collection': 'about' },
    { 'title': 'Get started', 'url': '/get-started', 'collection': 'getstarted' },
    { 'title': 'Foundations', 'url': '/foundations', 'collection': 'foundations' },
    { 'title': 'Tokens', 'url': '/tokens', 'collection': 'token' },
    { 'title': 'Elements', 'url': '/elements', 'collection': 'elementDocs' },
    { 'title': 'Patterns', 'url': '/patterns', 'collection': 'pattern' }
  ]);

  eleventyConfig.addPlugin(RHDSMarkdownItPlugin);

  /** Table of Contents Shortcode */
  /** Table of Contents Shortcode */
  eleventyConfig.addPlugin(TOCPlugin, {
    tags: ['h2'],
    headingText: 'On this page'
  });

  /** Bespoke import map for ux-dot pages and demos */
  eleventyConfig.addPassthroughCopy({ 'node_modules/@lit/reactive-element': '/assets/packages/@lit/reactive-element' });
  eleventyConfig.addPassthroughCopy({ 'elements': 'assets/packages/@rhds/elements/elements/' });
  eleventyConfig.addPassthroughCopy({ 'lib': 'assets/packages/@rhds/elements/lib/' });
  eleventyConfig.addPlugin(ImportMapPlugin, {
    nodemodulesPublicPath: '/assets/packages',
    manualImportMap: {
      imports: {
        '@rhds/tokens/': '/assets/packages/@rhds/tokens/js/',
        '@rhds/elements/': '/assets/packages/@rhds/elements/elements/',
        '@rhds/elements/lib/': '/assets/packages/@rhds/elements/lib/',
        '@patternfly/elements/': '/assets/packages/@patternfly/elements/',
        '@patternfly/icons/': '/assets/packages/@patternfly/icons/',
        '@patternfly/pfe-core/': '/assets/packages/@patternfly/pfe-core/',
      }
    },
    localPackages: [
      // ux-dot dependencies
      'fuse.js',
      'element-internals-polyfill',

      // RHDS dependencies
      // `manualImportMap` is not traced, so we need to manually specify these
      //
      // 1st party
      '@rhds/tokens',
      '@rhds/tokens/media.js',
      '@rhds/tokens/meta.js',
      '@patternfly/elements',
      '@patternfly/pfe-core',
      // Vendor
      'lit',
      'lit/directives/if-defined.js',
      'lit/directives/class-map.js',
      'lit/static-html.js',
      'lit-html',
      'lit-element',
      '@lit/reactive-element',
      'tslib',
      '@floating-ui/dom',
      '@floating-ui/core',
    ],
  });

  // RHDS Tokens docs
  eleventyConfig.addPlugin(DesignTokensPlugin);

  eleventyConfig.addPassthroughCopy({ 'node_modules/@rhds/tokens/css/global.css': '/assets/rhds.css' });

  eleventyConfig.addPassthroughCopy({ 'node_modules/@lit/reactive-element': '/assets/packages/@lit/reactive-element' });

  /** Generate and consume custom elements manifests */
  eleventyConfig.addPlugin(CustomElementsManifestPlugin, {
    renderTitleInOverview: false,
  });

  /** Collections to organize by order instead of date */
  eleventyConfig.addPlugin(OrderTagsPlugin, { tags: ['develop'] });

  /** list todos */
  eleventyConfig.addPlugin(TodosPlugin);

  /** fancy syntax highlighting with diff support */
  eleventyConfig.addPlugin(SyntaxHighlightPlugin);

  /** Add IDs to heading elements */
  eleventyConfig.addPlugin(AnchorsPlugin, {
    exclude: /\/elements\/.*\/demo\//,
    formatter($, existingids) {
      if (
        !existingids.includes($.attr('id')) &&
        $.attr('slot') &&
        $.closest('pf-card')
      ) {
        return null;
      } else {
        return eleventyConfig.getFilter('slug')($.text())
          .replace(/[&,+()$~%.'":*?!<>{}]/g, '');
      }
    },
  });

  !isWatch && eleventyConfig.addPlugin(DirectoryOutputPlugin, {
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
  eleventyConfig.addPlugin(RHDSPlugin, {
    tagsToAlphabetize: [
      'component',
      'foundations',
      'getstarted',
    ]
  });

  return {
    templateFormats: ['html', 'md', 'njk', '11ty.cjs'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: './docs',
    },
  };
};
