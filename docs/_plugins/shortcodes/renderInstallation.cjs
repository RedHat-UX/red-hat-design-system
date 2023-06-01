/** @typedef {import('@patternfly/pfe-tools/11ty/DocsPage').DocsPage} DocsPage */

/**
 * @param {string} content
 */
function renderInstallation(content) {
  /**
   * NB: since the data for this shortcode is no a POJO,
   * but a DocsPage instance, 11ty assigns it to this.ctx._
   * @see https://github.com/11ty/eleventy/blob/bf7c0c0cce1b2cb01561f57fdd33db001df4cb7e/src/Plugins/RenderPlugin.js#L89-L93
   * @type {DocsPage}
   */
  const docsPage = this.ctx._;
  return /* html */`

<section class="band">
  <h2>Installation</h2>${!docsPage.manifest?.packageJson ? '' : `

~~~shell
npm install ${docsPage.manifest.packageJson.name}
~~~`}

~~~js
import '@rhds/elements/${docsPage.tagName}/${docsPage.tagName}.js';
~~~

${content ?? ''}

</section>

      `;
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode('renderInstallation', renderInstallation);
};
