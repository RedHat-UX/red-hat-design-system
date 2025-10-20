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
import LargeDemoWorkaroundPlugin from '#11ty-plugins/large-demo-workaround.js';

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
  eleventyConfig.addPassthroughCopy('docs/**/*.{svg,jpg,jpeg,png,webp,avif}');
  eleventyConfig.addPassthroughCopy('elements/*/demo/**/*.{svg,jpg,jpeg,png,webp,avif}');
  eleventyConfig.addPassthroughCopy('docs/CNAME');
  eleventyConfig.addPassthroughCopy('docs/.nojekyll');
  eleventyConfig.addPassthroughCopy('docs/robots.txt');
  eleventyConfig.addPassthroughCopy('docs/assets/**/*');
  eleventyConfig.addPassthroughCopy('docs/styles/**/*');
  eleventyConfig.addPassthroughCopy('docs/**/*.{css,js}');

  eleventyConfig.addWatchTarget('docs/styles/');
  eleventyConfig.addWatchTarget('docs/**/*.md');

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
        '@rhds/icons': '/assets/packages/@rhds/icons/icons.js',
        '@rhds/icons/': '/assets/packages/@rhds/icons/',
        '@rhds/icons/icons.js': '/assets/packages/@rhds/icons/icons.js',
        '@patternfly/elements/': '/assets/packages/@patternfly/elements/',
        '@patternfly/icons/': '/assets/packages/@patternfly/icons/',
        '@patternfly/pfe-core/': '/assets/packages/@patternfly/pfe-core/',
        '@uxdot/elements/': '/assets/packages/@uxdot/elements/',
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
      '@rhds/tokens/css/default-theme.css.js',
      '@rhds/tokens/css/color-palette.css.js',
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

  if (!isWatch && !process.env.QUIET) {
    eleventyConfig.addPlugin(DirectoryOutputPlugin);
  }

  await eleventyConfig.addPlugin(RHDSPlugin, {
    tsconfig: './tsconfig.settings.json',
    componentModules: [
      'elements/rh-accordion/rh-accordion.ts',
      'elements/rh-alert/rh-alert.ts',
      'elements/rh-announcement/rh-announcement.ts',
      'elements/rh-avatar/rh-avatar.ts',
      'elements/rh-back-to-top/rh-back-to-top.ts',
      'elements/rh-badge/rh-badge.ts',
      'elements/rh-blockquote/rh-blockquote.ts',
      'elements/rh-breadcrumb/rh-breadcrumb.ts',
      'elements/rh-button/rh-button.ts',
      'elements/rh-card/rh-card.ts',
      'elements/rh-chip/rh-chip.ts',
      'elements/rh-code-block/rh-code-block.ts',
      'elements/rh-cta/rh-cta.ts',
      'elements/rh-dialog/rh-dialog.ts',
      'elements/rh-disclosure/rh-disclosure.ts',
      'elements/rh-footer/rh-footer-copyright.ts',
      'elements/rh-footer/rh-footer-universal.ts',
      'elements/rh-health-index/rh-health-index.ts',
      'elements/rh-icon/rh-icon.ts',
      'elements/rh-jump-links/rh-jump-link.ts',
      'elements/rh-jump-links/rh-jump-links-list.ts',
      'elements/rh-jump-links/rh-jump-links.ts',
      'elements/rh-navigation-link/rh-navigation-link.ts',
      'elements/rh-navigation-primary/rh-navigation-primary-item-menu.ts',
      'elements/rh-navigation-primary/rh-navigation-primary-item.ts',
      'elements/rh-navigation-primary/rh-navigation-primary-overlay.ts',
      'elements/rh-navigation-primary/rh-navigation-primary.ts',
      'elements/rh-navigation-secondary/rh-navigation-secondary.ts',
      'elements/rh-navigation-vertical/rh-navigation-vertical.ts',
      'elements/rh-navigation-vertical/rh-navigation-vertical-list.ts',
      'elements/rh-pagination/rh-pagination.ts',
      'elements/rh-scheme-toggle/rh-scheme-toggle.ts',
      'elements/rh-site-status/rh-site-status.ts',
      'elements/rh-skip-link/rh-skip-link.ts',
      'elements/rh-spinner/rh-spinner.ts',
      'elements/rh-stat/rh-stat.ts',
      'elements/rh-subnav/rh-subnav.ts',
      'elements/rh-surface/rh-surface.ts',
      'elements/rh-switch/rh-switch.ts',
      'elements/rh-table/rh-sort-button.ts',
      'elements/rh-table/rh-table.ts',
      'elements/rh-tabs/rh-tab-panel.ts',
      'elements/rh-tabs/rh-tab.ts',
      'elements/rh-tabs/rh-tabs.ts',
      'elements/rh-tag/rh-tag.ts',
      'elements/rh-tile/rh-tile.ts',
      'elements/rh-tooltip/rh-tooltip.ts',
      'elements/rh-video-embed/rh-video-embed.ts',
      'lib/elements/rh-context-picker/rh-context-picker.ts',
      'uxdot/uxdot-best-practice.ts',
      'uxdot/uxdot-copy-button.ts',
      'uxdot/uxdot-copy-permalink.ts',
      'uxdot/uxdot-demo.ts',
      'uxdot/uxdot-example.ts',
      'uxdot/uxdot-feedback.ts',
      'uxdot/uxdot-header.ts',
      'uxdot/uxdot-masthead.ts',
      'uxdot/uxdot-pattern.ts',
      'uxdot/uxdot-repo-status-checklist.ts',
      'uxdot/uxdot-repo-status-list.ts',
      'uxdot/uxdot-sidenav.ts',
      'uxdot/uxdot-spacer-tokens-table.ts',
      'uxdot/uxdot-toc.ts',

      // still not working nicely with ssr
      // 'elements/rh-audio-player/rh-audio-player.ts',
      // 'elements/rh-footer/rh-footer.ts',
    ],
    slotControllerElements: [
      'rh-alert',
      'rh-announcement',
      'rh-audio-player',
      'rh-audio-player-subscribe',
      'rh-transcript',
      'rh-card',
      'rh-code-block',
      'rh-dialog',
      'rh-footer',
      'rh-footer-universal',
      'rh-stat',
      'rh-switch',
      'rh-tab',
      'rh-tag',
      'rh-tile',
      'rh-video-embed',
      'uxdot-pattern',
    ],
    tagsToAlphabetize: [
      'component',
      'foundations',
      'getstarted',
    ],
  });

  // Workaround for large demo files that break Nunjucks includes
  // Can be removed once the underlying issue is resolved
  eleventyConfig.addPlugin(LargeDemoWorkaroundPlugin);

  return {
    templateFormats: ['html', 'md', 'njk', '11ty.js', '11ty.cjs'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: './docs',
    },
  };
};
