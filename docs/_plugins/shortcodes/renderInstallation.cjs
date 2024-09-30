// for editor highlighting
const html = String.raw;
const markdown = String.raw;

async function generateImportMap(packageName, tagName) {
  const { Generator } = await import('@jspm/generator');
  const generator = new Generator({
    providers: {
      '@rhds/elements': 'jspm.io',
      [packageName]: 'jspm.io',
    },
  });
  await generator.install(`${packageName}/${tagName}/${tagName}.js`);
  return JSON.stringify(generator.getMap(), null, 2);
}

/**
 * @param {string} content
 * @param {object} [options]
 * @param {boolean} [options.lightdomcss]
 * @param {string} [options.cdnVersion]
 */
async function renderInstall(content, {
  lightdomcss = false,
  cdnVersion = 'v1-alpha',
} = {}) {
  /**
   * NB: since the data for this shortcode is no a POJO,
   * but a DocsPage instance, 11ty assigns it to this.ctx._
   * @see https://github.com/11ty/eleventy/blob/bf7c0c0cce1b2cb01561f57fdd33db001df4cb7e/src/Plugins/RenderPlugin.js#L89-L93
   */
  const { docsPage } = this.ctx.doc;

  const packageVersion = require('../../../package.json').version;

  const cdnContent = markdown`

~~~html
<script type="module">
  import '@rhds/elements/${docsPage.tagName}/${docsPage.tagName}.js';
</script>
~~~

<details><summary>Import Map Example</summary>

~~~html
<script type="importmap">
  {
    "imports": {
      "@rhds/elements/": "https://www.redhatstatic.com/dx/${cdnVersion}/@rhds/elements@${packageVersion}/elements/",
    }
  }
</script>
~~~

</details>

`;

  const npmContent = markdown`

~~~shell
npm install @rhds/elements
~~~

~~~html
<script type="module">
  import '@rhds/elements/${docsPage.tagName}/${docsPage.tagName}.js';
</script>
~~~

`;

  let jspmContent = '';
  try {
    jspmContent = markdown`

~~~html
<script type="module">
  import '@rhds/elements/${docsPage.tagName}/${docsPage.tagName}.js';
</script>
~~~

<details><summary>Import Map Example</summary>

~~~html
<script type="importmap">
${await generateImportMap('@rhds/elements', docsPage.tagName)}
</script>
~~~

</details>
`;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    jspmContent = `Could not generate import map using JSPM: ${error.message}`;
  }

  return html`
<script data-helmet type="module" src="/assets/javascript/elements/uxdot-installation-tabs.js"></script>

<style data-helmet>
uxdot-installation-tabs pre[class^="language-"] {
  max-width: 80cqw;
}
</style>

<section class="band">
  <h2>Installation</h2>
  <p>Learn more about how to install on our <a href="/get-started/developers/installation/">getting started docs</a>.</p>
  <uxdot-installation-tabs>
    <rh-tab slot="tab">Red Hat CDN</rh-tab>
    <rh-tab-panel>${cdnContent}</rh-tab-panel>
    <rh-tab slot="tab">NPM</rh-tab>
    <rh-tab-panel>${npmContent}</rh-tab-panel>
    <rh-tab slot="tab">JSPM</rh-tab>
    <rh-tab-panel>${jspmContent}</rh-tab-panel>
  </uxdot-installation-tabs>

${content ?? ''}

</section>
`;
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode('renderInstall', renderInstall);
};
