// for editor highlighting
const html = String.raw;
const markdown = String.raw;

/**
 * @param {string} content
 * @param {object} [options]
 * @param {boolean} [options.shimcss]
 */
async function renderLightDom(content, {
  shimcss = false,
} = {}) {
  const docsPage = this.ctx.doc;
  let lightdomContent = '';

  if (shimcss === true) {
    lightdomContent = markdown`

### Lightdom CSS shim

This element has an optional "Lightdom CSS" <em>shim</em> to help reduce <a href="https://web.dev/cls/">Cumulative Layout Shift (CLS)</a> experience before the element has fully initialized.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Lightdom CSS shims are an optional, temporary solution for reducing CLS. Delcarative Shadow DOM is the better solution, and once it is more widely available, Lightdom CSS shims will no longer be needed and will become deprecated.</p>
</rh-alert>

~~~html
<link rel="stylesheet" href="/path/to/${docsPage.tagName}/${docsPage.tagName}-lightdom-shim.css">
~~~

<rh-alert state="info">
  <h4 slot="header">Note</h4>
  <p>Replace <code>/path/to/</code> with path to the CSS file, whether local or CDN.</p>
</rh-alert>
`;
  } else {
    lightdomContent = markdown`

### Lightdom CSS

This element requires you to load "Lightdom CSS" stylesheets for styling deeply slotted elements.

~~~html
<link rel="stylesheet" href="/path/to/${docsPage.tagName}/${docsPage.tagName}-lightdom.css">
~~~

<rh-alert state="info">
  <h4 slot="header">Note</h4>
  <p>Replace <code>/path/to/</code> with path to the CSS file, whether local or CDN.</p>
</rh-alert>
`;
  }

  return lightdomContent.trim();
}

/**
 * Renders Light DOM CSS installation info
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig  computed config
 */
module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode('renderLightDom', renderLightDom);
};
