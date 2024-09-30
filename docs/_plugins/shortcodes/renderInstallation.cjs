// for editor highlighting
const html = String.raw;

const { AssetCache } = require('@11ty/eleventy-fetch');

const assetCache = new AssetCache('rhds-ux-dot-import-map-jspmio');

async function generateImportMap(tagName) {
  if (!assetCache.isCacheValid('1d')) {
    const { Generator } = await import('@jspm/generator');
    const generator = new Generator({
      cache: false,
      ignore: '.',
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

module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode('renderInstall', async function(content, opts = {}) {
    const { cdnVersion = 'v1-alpha' } = opts;
    /**
     * NB: since the data for this shortcode is no a POJO,
     * but a DocsPage instance, 11ty assigns it to this.ctx._
     * @see https://github.com/11ty/eleventy/blob/bf7c0c0cce1b2cb01561f57fdd33db001df4cb7e/src/Plugins/RenderPlugin.js#L89-L93
     */
    const { docsPage } = this.ctx.doc;

    const packageVersion = require('../../../package.json').version;

    const jspmMap = await generateImportMap(docsPage.tagName)
        .catch(error => {
          console.warn(error); // eslint-disable-line no-console
          return `Could not generate import map using JSPM: ${error.message}`;
        });

    const cdnContent = eleventyConfig.javascriptFunctions.highlight('html', `
<script type="importmap">
{
  "imports": {
    "@rhds/elements/": "https://www.redhatstatic.com/dx/${cdnVersion}/@rhds/elements@${packageVersion}/elements/",
  }
}
</script>
`);

    const jspmContent = eleventyConfig.javascriptFunctions.highlight('html', `
<script type="importmap">
${jspmMap}
</script>
`);

    const npmContent = eleventyConfig.javascriptFunctions.highlight('shell', `npm install @rhds/elements`, 'shell');

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
            <rh-code-block actions="copy" highlighting="prerendered">${cdnContent}</rh-code-block>
          </rh-tab-panel>
          <rh-tab slot="tab">NPM</rh-tab>
          <rh-tab-panel>
            <rh-code-block actions="copy" highlighting="prerendered">${npmContent}</rh-code-block>
          </rh-tab-panel>
          <rh-tab slot="tab">JSPM</rh-tab>
          <rh-tab-panel>
            <rh-code-block actions="copy" highlighting="prerendered">${jspmContent}</rh-code-block>
          </rh-tab-panel>
        </uxdot-installation-tabs>

        <p>Add it to your page with this import statement</p>

~~~html rh-code-block
<script type="module">
  import '@rhds/elements/${docsPage.tagName}/${docsPage.tagName}.js';
</script>
~~~

        ${content ?? ''}

      </section>
    `;
  });
};
