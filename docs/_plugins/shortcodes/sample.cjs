// @ts-check

const { attrMap } = require('./helpers.cjs');

/** @typedef {import('../shortcodes.cjs').EleventyContext} EleventyContext */

/** Returns a string with common indent stripped from each line. Useful for templating HTML */
function dedent(str) {
  const stripped = str.replace(/^\n/, '');
  const match = stripped.match(/^\s+/);
  return match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
}

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
     * @param {string}    [options.stacked]           vertical layout
     * @this {EleventyContext}
     */
    function example(content, { style = '', colorPalette = 'lightest', stacked = false } = {}) {
      let className = 'sample-element';
      if (stacked) { className += ' stacked'; }
      return dedent(/* html */`\
<rh-surface color-palette="${colorPalette}" ${attrMap({ style, class: className })}>

${content}

<rh-code-block compact full-height>

~~~html
${dedent(content).trim()}
~~~

</rh-code-block>
</rh-surface>`);
    });
};
