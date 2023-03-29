// @ts-check
Error.stackTraceLimit = 50;

const SyntaxHighlightPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');
const DirectoryOutputPlugin = require('@11ty/eleventy-plugin-directory-output');
const AnchorsPlugin = require('@patternfly/pfe-tools/11ty/plugins/anchors.cjs');
const CustomElementsManifestPlugin = require('@patternfly/pfe-tools/11ty/plugins/custom-elements-manifest.cjs');
const OrderTagsPlugin = require('@patternfly/pfe-tools/11ty/plugins/order-tags.cjs');
const TodosPlugin = require('@patternfly/pfe-tools/11ty/plugins/todos.cjs');
const TOCPlugin = require('@patternfly/pfe-tools/11ty/plugins/table-of-contents.cjs');
const SassPlugin = require('eleventy-plugin-dart-sass');
const RHDSPlugin = require('./docs/_plugins/rhds.cjs');
const ImportMapPlugin = require('./docs/_plugins/importMap.cjs');

const path = require('node:path');

const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');

/** @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig */
module.exports = function(eleventyConfig) {
  eleventyConfig.setQuietMode(true);
  eleventyConfig.amendLibrary('md', md => md
    .use(markdownItAnchor)
    .use(markdownItAttrs));

  eleventyConfig.addPassthroughCopy('docs/public/red-hat-outfit.css');
  eleventyConfig.addPassthroughCopy('docs/CNAME');
  eleventyConfig.addPassthroughCopy('docs/.nojekyll');
  eleventyConfig.addPassthroughCopy('docs/robots.txt');
  eleventyConfig.addPassthroughCopy('docs/assets/**/*');
  eleventyConfig.addPassthroughCopy('docs/js/**/*');
  eleventyConfig.addPassthroughCopy({ 'elements': 'assets/packages/@rhds/elements/elements/' });
  eleventyConfig.addPassthroughCopy({ 'lib': 'assets/packages/@rhds/elements/lib/' });

  eleventyConfig.addPlugin(SassPlugin, {
    sassLocation: `${path.join(__dirname, 'docs', 'scss')}/`,
    sassIndexFile: 'styles.scss',
    includePaths: ['node_modules', '**/*.{scss,sass}'],
    domainName: '',
    outDir: path.join(__dirname, '_site'),
  });

  /** Table of Contents Shortcode */
  eleventyConfig.addPlugin(TOCPlugin, {
    tags: ['h2', 'h3', 'h4', 'h5', 'h6'],
    wrapperClass: 'table-of-contents',
    headingText: 'Table of Contents'
  });

  /** Bespoke import map for ux-dot pages and demos */
  eleventyConfig.addPlugin(ImportMapPlugin, {
    defaultProvider: 'nodemodules',
    localPackages: [
      'lit',
      '@lit/reactive-element',
      'tslib',
      '@floating-ui/dom',
      '@floating-ui/core',
      //
      '@patternfly/pfe-core',
      '@patternfly/elements',
      // extra modules used in demo that didn't get picked up in the sources trace
      // future solution could be to inject maps into each page in a transform
      // but that could be prohibitively expensive if it has to call out to network for each page
      // SEE: https://github.com/jspm/generator#generating-html
      '@patternfly/elements/pf-panel/pf-panel.js',
      '@patternfly/elements/pf-button/pf-button.js',
      '@patternfly/elements/pf-card/pf-card.js',
      '@patternfly/elements/pf-icon/pf-icon.js',
      '@patternfly/elements/pf-spinner/pf-spinner.js',
      '@patternfly/elements/pf-tabs/pf-tabs.js',
    ],
  });

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

  eleventyConfig.addPlugin(DirectoryOutputPlugin, {
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
