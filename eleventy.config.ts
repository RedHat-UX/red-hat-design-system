Error.stackTraceLimit = 50;

import SyntaxHighlightPlugin from '@11ty/eleventy-plugin-syntaxhighlight';
import DirectoryOutputPlugin from '@11ty/eleventy-plugin-directory-output';
import AnchorsPlugin from '@patternfly/pfe-tools/11ty/plugins/anchors.cjs';
import CustomElementsManifestPlugin from '@patternfly/pfe-tools/11ty/plugins/custom-elements-manifest.cjs';
import HelmetPlugin from 'eleventy-plugin-helmet';

import { EleventyRenderPlugin, type UserConfig } from '@11ty/eleventy';

import TOCPlugin from './docs/_plugins/table-of-contents.js';
import RHDSPlugin from './docs/_plugins/rhds.ts';
import DesignTokensPlugin from './docs/_plugins/tokens.js';
import RHDSMarkdownItPlugin from './docs/_plugins/markdown-it.js';
import ImportMapPlugin from './docs/_plugins/importMap.js';
import LitPlugin from './docs/_plugins/lit-ssr/lit.js';

import { promisify } from 'node:util';
import * as ChildProcess from 'node:child_process';

const exec = promisify(ChildProcess.exec);

const isWatch =
  process.argv.includes('--serve') || process.argv.includes('--watch');

const isLocal = !(process.env.CI || process.env.DEPLOY_URL);

/** @param  eleventyConfig */
export default function(eleventyConfig: UserConfig) {
  eleventyConfig.setQuietMode(true);

  eleventyConfig.on('eleventy.before', function({ runMode }) {
    eleventyConfig.addGlobalData('runMode', runMode);
  });

  eleventyConfig.on('eleventy.before', async function() {
    const { stderr } = await exec('npx tspc');
    if (stderr) {
      // eslint-disable-next-line no-console
      console.error(stderr);
    }
  });

  eleventyConfig.watchIgnores?.add('docs/assets/redhat/');
  eleventyConfig.watchIgnores?.add('**/*.spec.ts');
  eleventyConfig.watchIgnores?.add('**/*.d.ts');
  eleventyConfig.watchIgnores?.add('**/*.js.map');
  eleventyConfig.watchIgnores?.add('elements/*/test/');
  eleventyConfig.watchIgnores?.add('lib/elements/*/test/');
  eleventyConfig.addPassthroughCopy('docs/patterns/**/*.{svg,jpg,jpeg,png}');
  eleventyConfig.addPassthroughCopy('elements/*/demo/**/*.{svg,jpg,jpeg,png}');
  eleventyConfig.addPassthroughCopy('docs/CNAME');
  eleventyConfig.addPassthroughCopy('docs/.nojekyll');
  eleventyConfig.addPassthroughCopy('docs/robots.txt');
  eleventyConfig.addPassthroughCopy('docs/assets/**/*');
  eleventyConfig.addPassthroughCopy('docs/styles/**/*');
  eleventyConfig.addPassthroughCopy('docs/**/*.{css,js}');

  if (isLocal) {
    eleventyConfig.addPassthroughCopy({
      'node_modules/playground-elements/playground-*worker*': '.',
    });
  }

  eleventyConfig.addWatchTarget('docs/styles/');
  eleventyConfig.addWatchTarget('docs/patterns/**/*.md');

  eleventyConfig.addGlobalData('isLocal', isLocal);

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

  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(HelmetPlugin);
  eleventyConfig.addPlugin(RHDSMarkdownItPlugin);

  /** Table of Contents Shortcode */
  eleventyConfig.addPlugin(TOCPlugin, {
    wrapper: '',
    wrapperClass: '',
    tags: ['h2'],
    headingText: 'On this page',
  });

  /** Bespoke import map for ux-dot pages and demos */
  eleventyConfig.addPassthroughCopy({
    'node_modules/@lit/reactive-element': '/assets/packages/@lit/reactive-element',
  });
  eleventyConfig.addPassthroughCopy({ 'elements': '/assets/packages/@rhds/elements/elements/' });
  eleventyConfig.addPassthroughCopy({ 'lib': '/assets/packages/@rhds/elements/lib/' });
  eleventyConfig.addPlugin(ImportMapPlugin, {
    nodemodulesPublicPath: '/assets/packages',
    manualImportMap: {
      imports: {
        'tinycolor2': '/assets/packages/tinycolor2/esm/tinycolor.js',
        'lit/': '/assets/packages/lit/',
        'lit-html': '/assets/packages/lit-html/lit-html.js',
        'lit-html/': '/assets/packages/lit-html/',
        'prism-esm/': '/assets/packages/prism-esm/',
        '@lit-labs/ssr-client/lit-element-hydrate-support.js':
          '/assets/packages/@lit-labs/ssr-client/lit-element-hydrate-support.js',
        '@rhds/tokens': '/assets/packages/@rhds/tokens/js/tokens.js',
        '@rhds/tokens/css/': '/assets/packages/@rhds/tokens/css/',
        '@rhds/tokens/': '/assets/packages/@rhds/tokens/js/',
        '@rhds/elements/lib/': '/assets/packages/@rhds/elements/lib/',
        '@rhds/elements/': '/assets/packages/@rhds/elements/elements/',
        '@rhds/icons/': '/assets/packages/@rhds/icons/',
        '@rhds/icons/icons.js': '/assets/packages/@rhds/icons/icons.js',
        '@patternfly/elements/': '/assets/packages/@patternfly/elements/',
        '@patternfly/icons/': '/assets/packages/@patternfly/icons/',
        '@patternfly/pfe-core/': '/assets/packages/@patternfly/pfe-core/',
        'playground-elements': 'https://cdn.jsdelivr.net/npm/playground-elements@0.18.1/+esm',
      },
    },
    localPackages: [
      // ux-dot dependencies
      'fuse.js',
      'tinycolor2',
      'element-internals-polyfill',

      // RHDS dependencies
      // `manualImportMap` is not traced, so we need to manually specify these
      //
      // 1st party
      '@rhds/tokens',
      '@rhds/tokens/media.js',
      '@rhds/tokens/meta.js',
      '@rhds/tokens/css/color-context-provider.css.js',
      '@rhds/tokens/css/color-context-consumer.css.js',
      '@rhds/icons/',
      '@rhds/icons/microns/',
      '@rhds/icons/social/',
      '@rhds/icons/standard/',
      '@rhds/icons/ui/',
      '@patternfly/elements',
      '@patternfly/pfe-core',
      // Vendor
      '@floating-ui/core',
      '@floating-ui/dom',
      '@lit-labs/ssr-client/',
      '@lit/context',
      '@lit/reactive-element',
      '@webcomponents/template-shadowroot/template-shadowroot.js',
      'prism-esm',
      'prism-esm/',
      'lit',
      'lit-element',
      'lit-html',
      'lit/decorators/custom-element.js',
      'lit/decorators/property.js',
      'lit/directives/class-map.js',
      'lit/directives/if-defined.js',
      'lit/directives/repeat.js',
      'lit/static-html.js',
      'tslib',
    ],
  });

  // RHDS Tokens docs
  eleventyConfig.addPlugin(DesignTokensPlugin);

  /** Generate and consume custom elements manifests */
  eleventyConfig.addPlugin(CustomElementsManifestPlugin, {
    renderTitleInOverview: false,
  });

  /** fancy syntax highlighting with diff support */
  eleventyConfig.addPlugin(SyntaxHighlightPlugin);

  /** Add IDs to heading elements */
  eleventyConfig.addPlugin(AnchorsPlugin, {
    exclude: /\/elements\/.*\/demo\//,
    formatter($: import('cheerio').Cheerio<any>, existingids: string[]) {
      if (
        !existingids.includes($.attr('id')!)
          && $.attr('slot')
          && $.closest('pf-card')
      ) {
        return null;
      } else {
        return eleventyConfig.getFilter('slug')($.text())
            .replace(/[&,+()$~%.'":*?!<>{}]/g, '');
      }
    },
  });

  eleventyConfig.addPlugin(LitPlugin, {
    componentModules: [
      'elements/rh-button/rh-button.js',
      'elements/rh-tag/rh-tag.js',
      'elements/rh-code-block/rh-code-block.js',
      'elements/rh-icon/rh-icon.js',
      'elements/rh-surface/rh-surface.js',
      'elements/rh-skip-link/rh-skip-link.js',
      'elements/rh-footer/rh-footer-universal.js',
      'docs/assets/javascript/elements/uxdot-masthead.js',
      'docs/assets/javascript/elements/uxdot-header.js',
      'docs/assets/javascript/elements/uxdot-sidenav.js',
      'docs/assets/javascript/elements/uxdot-hero.js',
      'docs/assets/javascript/elements/uxdot-feedback.js',
      'docs/assets/javascript/elements/uxdot-copy-permalink.js',
      'docs/assets/javascript/elements/uxdot-copy-button.js',
      'docs/assets/javascript/elements/uxdot-repo-status-list.js',
      'docs/assets/javascript/elements/uxdot-best-practice.js',
      'docs/assets/javascript/elements/uxdot-search.js',
      'docs/assets/javascript/elements/uxdot-toc.js',
      'docs/assets/javascript/elements/uxdot-pattern.js',
      'docs/assets/javascript/elements/uxdot-example.js',
      'docs/assets/javascript/elements/uxdot-installation-tabs.js',
    ],
  });

  if (!isWatch && !process.env.QUIET) {
    eleventyConfig.addPlugin(DirectoryOutputPlugin, {
    // Customize columns
      columns: {
        filesize: true, // Use `false` to disable
        benchmark: true, // Use `false` to disable
      },

      // Will show in yellow if greater than this number of bytes
      warningFileSize: 400 * 1000,
    });
  }

  /**
   * Collections to organize by 'order' value in front matter, then alphabetical by title;
   * instead of by date
   */
  eleventyConfig.addPlugin(RHDSPlugin, {
    tagsToAlphabetize: [
      'component',
      'foundations',
      'getstarted',
    ],
  });

  eleventyConfig.addExtension('11ty.ts', {
    key: '11ty.js',
    compile() {
      return async function(
        this: { defaultRenderer(data: unknown): Promise<string> },
        data: unknown,
      ) {
        return this.defaultRenderer(data);
      };
    },
  });

  return {
    templateFormats: ['html', 'md', 'njk', '11ty.js', '11ty.cjs'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: './docs',
    },
  };
};

export class Renderer {
  declare renderTemplate: (path: string, type: string) => Promise<string>;
  declare renderFile: (path: string, data?: object) => Promise<string>;
  declare highlight: (lang: string, content: string) => string;
  declare dedent: (str: string) => string;
  declare slugify: (str: string) => string;
}
