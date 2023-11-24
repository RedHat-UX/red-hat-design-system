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
      class: classNames = '',
    } = {}) {
      const classes = new Set(classNames.split(' ').map(x => x.trim()));
      if (stacked) { classes.add('stacked'); }
      if (code === 'show') { classes.add('column-2'); }
      /* eslint-disable indent */
      return dedent(/* html */`\
<uxdot-code-sample ${attrMap({ class: [...classes].join(' ') })}>
  <template shadowrootmode="open">
    <style>
      :host {
        position: relative;
      }
      rh-surface {
        display: grid;
        padding: var(--rh-space-4xl);
        border-radius: var(--rh-border-radius-default);
        border: var(--rh-border-width-sm) solid var(--rh-color-border-subtle-on-light);
        gap: var(--rh-space-md);
        :host(.dont) & {
          border-color: var(--rh-color-red-500);
        }
        :host(.column-2) &,
        :host(.show-code) & {
          grid-template-columns: 1fr 1fr;
        }
        :host(.stacked) & {
          grid-template: repeat(auto-fill, minmax(1px, 1fr)) / 1fr;
        }
        @media ${tokens.get('--rh-media-md')} {
          padding: var(--rh-space-7xl);
          gap: var(--rh-space-lg);
        }
      }
      pf-icon.dont {
        color: var(--rh-color-red-500);
        position: absolute;
        inset-block-start: var(--rh-space-xl);
        inset-inline-start: var(--rh-space-sm);
      }
    </style>${!classes.has('dont') ? '' : /* html */`
    <pf-icon class="dont" icon="circle-exclamation" size="lg"></pf-icon>`}
    <rh-surface color-palette="${colorPalette}"
                ${attrMap({ style })}
    ><slot></slot></rh-surface>
  </template>
  ${content}${code === 'hidden' ? '' : /* html */`

  <rh-code-block compact full-height>

~~~html
${dedent(content).trim()}
~~~

  </rh-code-block>`}
</uxdot-code-sample>`);
    /* eslint-enable indent */
    });
};
