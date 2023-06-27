const { readFile } = require('node:fs/promises');

/** @typedef {import('@patternfly/pfe-tools/11ty/DocsPage').DocsPage} DocsPage */

/**
 * @this {EleventyContext}
 * @param {string} _
 * @param {{ tagName?: string | null }} opts
 */
async function playground(_, {
  tagName = null,
} = {}) {
  /**
   * NB: since the data for this shortcode is no a POJO,
   * but a DocsPage instance, 11ty assigns it to this.ctx._
   * @see https://github.com/11ty/eleventy/blob/bf7c0c0cce1b2cb01561f57fdd33db001df4cb7e/src/Plugins/RenderPlugin.js#L89-L93
   * @type {DocsPage}
   */
  const docsPage = this.ctx._;
  tagName ??= docsPage?.tagName;
  const { getPfeConfig } = await import('@patternfly/pfe-tools/config.js');
  const options = getPfeConfig();
  const { filePath } =
        docsPage.manifest
          .getDemoMetadata(tagName, options)
          ?.find(x => x.url === `https://ux.redhat.com/elements/${x.slug}/demo/`) ?? {};
  const content = filePath && await readFile(filePath, 'utf8');
  return /* html*/`

<script type="module" src="/assets/playgrounds/rh-playground.js"></script>

<rh-playground tag-name="${tagName}">${!content ? '' : `

~~~html
${content}
~~~`}

</rh-playground>`;
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode('playground', playground);
};
