async function generateImportMap(packageName, tagName) {
  const { Generator } = await import('@jspm/generator');
  const generator = new Generator({
    providers: {
      [packageName]: 'jspm.io',
    },
  });
  await generator.install(`${packageName}/${tagName}/${tagName}.js`);
  return JSON.stringify(generator.getMap(), null, 2);
}

const html = String.raw;

/**
 * @param {string} content
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
  const docsPage = this.ctx.doc;

  const packageVersion = require('../../../package.json').version;

  const pfeVersion =
    require('../../../package-lock.json')
        .dependencies['@patternfly/elements']
        .version;

  const cdnContent = /* markdown */`

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
      "@patternfly/elements/": "https://www.redhatstatic.com/dx/${cdnVersion}/@patternfly/elements@${pfeVersion}/"
    }
  }
</script>
~~~

</details>

`;

  const npmContent = /* markdown*/`

~~~shell
npm install ${docsPage.manifest.packageJson.name}
~~~

~~~html
<script type="module">
  import '@rhds/elements/${docsPage.tagName}/${docsPage.tagName}.js';
</script>
~~~

`;

  const jspmContent = /* markdown */`

~~~html
<script type="module">
  import '@rhds/elements/${docsPage.tagName}/${docsPage.tagName}.js';
</script>
~~~

<details><summary>Import Map Example</summary>

~~~html
<script type="importmap">
${await generateImportMap(docsPage.manifest.packageJson.name, docsPage.tagName)}
</script>
~~~

</details>
`;

  return html`
<script type="module" src="/assets/javascript/elements/uxdot-installation-tabs.js"></script>

<section class="band">
  <h2>Installation</h2>
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
