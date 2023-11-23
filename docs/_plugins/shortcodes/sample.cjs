// @ts-check

const { attrMap } = require('./helpers.cjs');
const { tokens } = require('@rhds/tokens');

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
     * @param {string}    [options.code]              vertical layout
     * @this {EleventyContext}
     */
    function example(content, {
      style = '',
      colorPalette = 'lightest',
      stacked = false,
      code = 'show',
    } = {}) {
      const classes = [];
      if (stacked) { classes.push('stacked'); }
      return dedent(/* html */`\
<uxdot-code-sample>
  <template shadowrootmode="open">
    <style>
      rh-surface {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: var(--rh-space-4xl);
        border-radius: var(--rh-border-radius-default);
        border: var(--rh-border-width-sm) solid var(--rh-color-border-subtle-on-light);
        gap: var(--rh-space-md);
        &.stacked {
          grid-template: repeat(auto-fill, minmax(1px, 1fr)) / 1fr;
        }
        @media ${tokens.get('--rh-media-md')} {
          padding: var(--rh-space-7xl);
          gap: var(--rh-space-lg);
        }
      }
    </style>
    <rh-surface color-palette="${colorPalette}" ${attrMap({ style, class: classes.join(' ') })}>
      <slot></slot>
    </rh-surface>
  </template>
${content}${code === 'hidden' ? '' : /* html */`

  <rh-code-block compact full-height>

~~~html
${dedent(content).trim()}
~~~

  </rh-code-block>`}\
</uxdot-code-sample>`);
    });
};
