const { join } = require('node:path');
// For editor highlighting
const html = String.raw;


function playground(eleventyConfig) {
  /**
   * @param {string} _
   * @param {{ tagName?: string | null }} opts
   */
  return async function playground(_, { tagName = null } = {}) {
    /**
     * NB: since the data for this shortcode is no a POJO,
     * but a DocsPage instance, 11ty assigns it to this.ctx._
     * @see https://github.com/11ty/eleventy/blob/bf7c0c0cce1b2cb01561f57fdd33db001df4cb7e/src/Plugins/RenderPlugin.js#L89-L93
     * @type {import('@patternfly/pfe-tools/11ty/DocsPage.js').DocsPage}
     */
    const docsPage = this.ctx._
      ?? (await eleventyConfig?.globalData?.elements?.() ?? []).find(x => x.tagName === tagName);
    tagName ??= docsPage?.tagName;
    return html`
<script type="module" src="/assets/javascript/elements/uxdot-playground.js"></script>
<uxdot-playground tag-name="${tagName}"></uxdot-playground>`;
  };
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode('playground', playground(eleventyConfig));
  eleventyConfig.on('eleventy.before', async function() {
    const { rollup } = await import('rollup');
    const { importMetaAssets } = await import('@web/rollup-plugin-import-meta-assets');
    const { nodeResolve } = await import('@rollup/plugin-node-resolve');
    const outdir = join(__dirname, `../../assets/javascript/elements/`);
    const bundle = await rollup({
      input: join(__dirname, 'playground-elements.js'),
      external: [/^@rhds/],
      plugins: [
        nodeResolve(),
        importMetaAssets(),
      ],
    });
    await bundle.write({ dir: outdir });
  });
};
