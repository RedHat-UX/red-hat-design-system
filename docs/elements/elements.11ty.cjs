const html = String.raw;

const { AssetCache } = require('@11ty/eleventy-fetch');

const assetCache = new AssetCache('rhds-ux-dot-import-map-jspmio');

const { version: packageVersion } = require('../../package.json');

async function generateImportMap(tagName) {
  if (!assetCache.isCacheValid('1d')) {
    const { Generator } = await import('@jspm/generator');
    const generator = new Generator({
      cache: false,
      providers: {
        '@rhds/elements': 'jspm.io',
        '@rhds': 'jspm.io',
        'npm:': 'jspm.io',
      },
    });
    await generator.install('@rhds/elements');
    await assetCache.save(generator.getMap(), 'json');
  }
  const map = structuredClone(await assetCache.getCachedValue());
  map.imports[`@rhds/elements/${tagName}/${tagName}.js`] = map.imports['@rhds/elements'].replace('elements.js', `${tagName}/${tagName}.js`);
  delete map.imports['@rhds/elements'];
  return JSON.stringify(map, null, 2);
}

/**
 * Returns a string with common indent stripped from each line. Useful for templating HTML
 * @param {string} str
 */
function dedent(str) {
  const stripped = str.replace(/^\n/, '');
  const match = stripped.match(/^\s+/);
  return match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
}

module.exports = class ElementsPage {
  data() {
    return {
      hasToc: true,
      layout: 'layouts/base.njk',
      permalink: ({ doc }) => doc.permalink,
      eleventyComputed: {
        title: ({ doc }) => doc.pageTitle || doc.slug,
        context: x => x,
      },
      pagination: {
        data: 'collections.elementDocs',
        alias: 'doc',
        size: 1,
      },
    };
  }

  async render(ctx) {
    const { doc, element, page, repoStatus } = ctx;
    const slug = doc.slug || element.slug;
    const { manifest } = doc.docsPage;
    // const content = await this.renderFile(doc.filePath, { context: { doc, element } });
    const content = await this.renderFile(doc.filePath, ctx);
    const prettyName = this.deslugify(doc.alias || doc.slug || element.slug);
    const planned = this.isPlanned(repoStatus, prettyName);
    const tagName = doc.tagName || element.tagName;
    const demos = manifest?.getDemos(doc.docsPage.tagName);
    const demosUrl = `/elements/${slug}/demos/`;
    const isCodePage = doc.pageTitle === 'Code';
    const hasLightdom = [
      'rh-pagination',
      'rh-table',
      'rh-tile',
      'rh-audio-player',
    ].includes(tagName);

    const stylesheets = [
      '/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css',
      '/styles/pages/backpage.css',
      '/styles/samp.css',
    ];

    if (isCodePage) {
      stylesheets.push('/styles/pages/code.css');
    }

    if (hasLightdom) {
      stylesheets.push(
        `/assets/packages/@rhds/elements/elements/${tagName}/${tagName}-lightdom.css`,
      );
    }

    return html`${stylesheets.map(x => html`
      <link rel="stylesheet" data-helmet href="${x}">`).join('')}

      <noscript data-helmet>
        <style>
        rh-audio-player:not([expanded]) rh-transcript:not(:defined) {
          display: block;
        }
        </style>
      </noscript>

      <script type="module" data-helmet>
        import '/assets/javascript/elements/uxdot-feedback.js';
        import '/assets/javascript/elements/uxdot-copy-button.js';
        import '/assets/javascript/elements/uxdot-header.js';
        import '@rhds/elements/rh-alert/rh-alert.js';
        import '@rhds/elements/rh-cta/rh-cta.js';
        import '@rhds/elements/rh-footer/rh-footer.js';
        import '@rhds/elements/rh-subnav/rh-subnav.js';
        import '@rhds/elements/rh-surface/rh-surface.js';
        import '@rhds/elements/rh-code-block/rh-code-block.js';
        import '@rhds/elements/rh-table/rh-table.js';
        import '@rhds/elements/rh-accordion/rh-accordion.js';
        import '@rhds/elements/rh-badge/rh-badge.js';
        import '@rhds/elements/rh-tag/rh-tag.js';
      </script>

      ${planned ? '' : html`
      <script type="module" data-helmet>
        import '@rhds/elements/${tagName}/${tagName}.js';
      </script>`}

      ${await this.renderFile('./docs/_includes/partials/component/masthead.njk', ctx)}
      ${await this.renderFile('./docs/_includes/partials/component/sidenav.njk', ctx)}

      <rh-surface id="main"
                  role="main"
                  color-palette="lightest">
        <article class="has-toc">
          <uxdot-header has-subnav>
            <h1 id="${slug}" class="page-title">
              ${prettyName}${!planned ? '' : html`
              <rh-tag icon="notification-fill" color="gray">Planned</rh-tag>`}
            </h1>
            <rh-subnav slot="subnav">${doc.tabs.map((tab, i, a) => html`
              ${!(demos.length && i === a.length - 1) ? '' : html`
              <a ${page.url !== demosUrl ? '' : 'active'} href="${demosUrl}">Demos</a>`}
              <a ${tab.href !== page.url ? '' : 'active'} href="${tab.href}">${tab.pageTitle}</a>`).join('')}
            </rh-subnav>
          </uxdot-header>

          <div class="aside">
            <uxdot-toc summary="On this page">
              ${this.toc(content)}
            </uxdot-toc>
          </div>

          <div class="container">
            ${isCodePage ? await this.renderInstallation.call(this, { doc }) : ''}
            ${content}
            ${await this.renderFile('./docs/_includes/partials/component/feedback.html', ctx)}
            ${await this.renderFile('./docs/_includes/partials/component/edit-this-page.njk', ctx)}
          </div>

        </article>
        ${await this.renderFile('./docs/_includes/partials/component/back-to-top.njk', ctx)}
      </rh-surface>
      ${await this.renderFile('./docs/_includes/partials/component/footer.njk', ctx)}
    `;
  }

  async renderInstallation({ doc, cdnVersion = 'v1-alpha' }) {
    const jspmMap = await generateImportMap(doc.docsPage.tagName)
        .catch(error => {
          console.warn(error); // eslint-disable-line no-console
          return `Could not generate import map using JSPM: ${error.message}`;
        });

    return html`
      <script data-helmet type="module" src="/assets/javascript/elements/uxdot-installation-tabs.js"></script>
      <style data-helmet>${''/* NOTE: adapted from theming/developers.css - better to wrap the localhost behaviour? */}
      uxdot-installation-tabs {
        border: var(--rh-border-width-sm) solid var(--rh-color-border-subtle);
        border-radius: var(--rh-border-radius-default);
        max-width: 56rem; /* warning: magic number */
        overflow: hidden;
        & rh-tab-panel {
          padding: 0;
          border-radius: 0;
        }
        & rh-code-block {
          --rh-border-radius-default: 0;
          --rh-border-width-sm: 0px;
          border-width: 0;
        }
      }
      </style>
      <section class="band">
        <h2>Installation</h2>
        <p>We recommend import maps when building pages with RHDS. Learn more about how to install on our <a href="/get-started/developers/installation/">getting started docs</a>.</p>
        <uxdot-installation-tabs>
          <rh-tab slot="tab">Red Hat CDN</rh-tab>
          <rh-tab-panel>
            <rh-code-block actions="copy" highlighting="prerendered">${this.highlight('html', dedent(html`
              <script type="importmap">
              {
                "imports": {
                  "@rhds/elements/": "https://www.redhatstatic.com/dx/${cdnVersion}/@rhds/elements@${packageVersion}/elements/",
                }
              }
              </script>`))}
            </rh-code-block>
          </rh-tab-panel>
          <rh-tab slot="tab">NPM</rh-tab>
          <rh-tab-panel>
            <rh-code-block actions="copy" highlighting="prerendered">${this.highlight('shell', `npm install @rhds/elements`, 'shell')}</rh-code-block>
          </rh-tab-panel>
          <rh-tab slot="tab">JSPM</rh-tab>
          <rh-tab-panel>
            <rh-code-block actions="copy" highlighting="prerendered">${this.highlight('html', dedent(html`
              <script type="importmap">
              ${jspmMap}
              </script>`))}
            </rh-code-block>
          </rh-tab-panel>
        </uxdot-installation-tabs>

        <p>Add it to your page with this import statement</p>

        <rh-code-block actions="copy" highlighting="prerendered">${this.highlight('html', dedent(html`
          <script type="module">
            import '@rhds/elements/${doc.docsPage.tagName}/${doc.docsPage.tagName}.js';
          </script>`))}
        </rh-code-block>
      </section>
    `;
  }
};
