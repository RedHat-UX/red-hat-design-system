Error.stackTraceLimit = 50;

import type { PfeConfig } from '@patternfly/pfe-tools/config.js';

import SyntaxHighlightPlugin from '@11ty/eleventy-plugin-syntaxhighlight';
import DirectoryOutputPlugin from '@11ty/eleventy-plugin-directory-output';
import AnchorsPlugin from '@patternfly/pfe-tools/11ty/plugins/anchors.cjs';
import CustomElementsManifestPlugin from '@patternfly/pfe-tools/11ty/plugins/custom-elements-manifest.cjs';
import HelmetPlugin from 'eleventy-plugin-helmet';

import { EleventyRenderPlugin, type UserConfig } from '@11ty/eleventy';

import TypescriptAssetsPlugin from '#11ty-plugins/typescript-assets.js';
import TOCPlugin from '#11ty-plugins/table-of-contents.js';
import RHDSPlugin from '#11ty-plugins/rhds.js';
import DesignTokensPlugin from '#11ty-plugins/tokens.js';
import RHDSMarkdownItPlugin from '#11ty-plugins/markdown-it.js';
import ImportMapPlugin from '#11ty-plugins/importMap.js';
import LitPlugin from '#11ty-plugins/lit-ssr/lit.js';

export interface GlobalData {
  runMode: 'build' | 'watch' | 'serve';
  isLocal: boolean;
  pfeconfig: PfeConfig;
  sideNavDropdowns: {
    title: string;
    url: string;
    collection: string;
  }[];
}

export class Renderer<T> {
  declare renderTemplate: (path: string, type: string) => Promise<string>;
  declare renderFile: (path: string, data?: object) => Promise<string>;
  declare highlight: (lang: string, content: string) => string;
  declare dedent: (str: string) => string;
  declare slugify: (str: string) => string;
  declare deslugify: (str: string) => string;
  declare getTagNameSlug: (str: string) => string;
  declare getElementDocs: (str: string) => string;
  render?(data: T & GlobalData): string | Promise<string>;
}

const isWatch =
  process.argv.includes('--serve') || process.argv.includes('--watch');

const isLocal = !(process.env.CI || process.env.DEPLOY_URL);

export default async function(eleventyConfig: UserConfig) {
  eleventyConfig.setQuietMode(true);

  eleventyConfig.on('eleventy.before', function({ runMode }) {
    eleventyConfig.addGlobalData('runMode', runMode);
  });

  eleventyConfig.watchIgnores?.add('docs/assets/redhat/');
  eleventyConfig.watchIgnores?.add('**/*.spec.ts');
  eleventyConfig.watchIgnores?.add('**/*.d.ts');
  eleventyConfig.watchIgnores?.add('**/*.js.map');
  eleventyConfig.watchIgnores?.add('elements/*/test/');
  eleventyConfig.watchIgnores?.add('lib/elements/*/test/');
  eleventyConfig.watchIgnores?.add('**/*.tsbuildinfo');
  eleventyConfig.addPassthroughCopy('docs/patterns/**/*.{svg,jpg,jpeg,png}');
  eleventyConfig.addPassthroughCopy('elements/*/demo/**/*.{svg,jpg,jpeg,png}');
  eleventyConfig.addPassthroughCopy('docs/CNAME');
  eleventyConfig.addPassthroughCopy('docs/.nojekyll');
  eleventyConfig.addPassthroughCopy('docs/robots.txt');
  eleventyConfig.addPassthroughCopy('docs/assets/**/*');
  eleventyConfig.addPassthroughCopy('docs/styles/**/*');
  eleventyConfig.addPassthroughCopy('docs/foundations/**/*.{css,js}');

  if (isLocal) {
    eleventyConfig.addPassthroughCopy({
      'node_modules/playground-elements/playground-*worker*': '.',
    });
  }

  eleventyConfig.addWatchTarget('docs/styles/');
  eleventyConfig.addWatchTarget('docs/patterns/**/*.md');

  eleventyConfig.addGlobalData('isLocal', isLocal);

  await eleventyConfig.addPlugin(TypescriptAssetsPlugin);
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

  eleventyConfig.addPlugin(ImportMapPlugin, {
    nodemodulesPublicPath: '/assets/packages',
    manualImportMap: {
      imports: {
        'tinycolor2': '/assets/packages/tinycolor2/esm/tinycolor.js',
        'lit/': '/assets/packages/lit/',
        'lit-html': '/assets/packages/lit-html/lit-html.js',
        'lit-html/': '/assets/packages/lit-html/',
        'prism-esm/': '/assets/packages/prism-esm/',
        '@lit-labs/ssr-client/lit-element-hydrate-support.js': `/assets/packages/@lit-labs/ssr-client/lit-element-hydrate-support.js`,
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
        '@uxdot/elements/': '/assets/packages/@uxdot/elements/',
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
    formatter($, existingids) {
      if (
        !existingids.includes($.attr('id')!)
          && $.attr('slot')
          && $.closest('pf-card')
      ) {
        return null;
      } else {
        const slug = eleventyConfig.getFilter('slug') as (str: string) => string;
        const text = $.text();
        return slug(text)
            .replace(/[&,+()$~%.'":*?!<>{}]/g, '');
      }
    },
  });

  eleventyConfig.addPlugin(LitPlugin, {
    tsconfig: './tsconfig.docsssr.json',
    componentModules: [
      'elements/rh-button/rh-button.ts',
      'elements/rh-icon/rh-icon.ts',
      'elements/rh-surface/rh-surface.ts',
      'elements/rh-code-block/rh-code-block.ts',
      'elements/rh-table/rh-table.ts',
      'elements/rh-accordion/rh-accordion.ts',
      'elements/rh-cta/rh-cta.ts',
      'elements/rh-footer/rh-footer-universal.ts',
      'elements/rh-skip-link/rh-skip-link.ts',
      'elements/rh-subnav/rh-subnav.ts',
      'elements/rh-tag/rh-tag.ts',
      'uxdot/uxdot-best-practice.ts',
      'uxdot/uxdot-copy-button.ts',
      'uxdot/uxdot-copy-permalink.ts',
      'uxdot/uxdot-example.ts',
      'uxdot/uxdot-feedback.ts',
      'uxdot/uxdot-header.ts',
      'uxdot/uxdot-hero.ts',
      'uxdot/uxdot-installation-tabs.ts',
      'uxdot/uxdot-masthead.ts',
      'uxdot/uxdot-pattern.ts',
      'uxdot/uxdot-repo-status-checklist.ts',
      'uxdot/uxdot-repo-status-list.ts',
      'uxdot/uxdot-search.ts',
      'uxdot/uxdot-sidenav.ts',
      'uxdot/uxdot-spacer-tokens-table.ts',
      'uxdot/uxdot-toc.ts',
    ],
  });

  if (!isWatch && !process.env.QUIET) {
    eleventyConfig.addPlugin(DirectoryOutputPlugin);
  }

  /**
   * Collections to organize by 'order' value in front matter, then alphabetical by title;
   * instead of by date
   */
  await eleventyConfig.addPlugin(RHDSPlugin, {
    tagsToAlphabetize: [
      'component',
      'foundations',
      'getstarted',
    ],
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

