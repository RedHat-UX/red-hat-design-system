// @ts-check

const { attrMap } = require('./helpers.cjs');

/** @typedef {import('../shortcodes.cjs').EleventyContext} EleventyContext */

/** @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig */
module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode('sample',
    /**
     * Example
     * An example image or component
     *
     * @param {string}    content
     * @param {object}    options
     * @param {string}    [options.colorPalette]      color palette for surface
     * @param {string}    [options.style]             styles for the surface
     * @this {EleventyContext}
     */
    function example(content, { style = '', colorPalette = 'lightest', stacked = false } = {}) {
      return /* html */`<rh-surface color-palette="${colorPalette}" class="sample-element ${stacked ? 'stacked' : ''}" ${attrMap({ style })}>

${content}

<rh-code-block compact>
  <script type="text/html">

~~~html
${content.trim()}
~~~

  </script>
</rh-code-block>
</rh-surface>`;
    });
};
