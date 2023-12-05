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
     * @param {string}    [options.colorPalette] color palette for surface
     * @param {string}    [options.style]        styles for the surface
     * @param {string}    [options.class]        class name to use
     * @param {boolean}   [options.picker]       show the color palette picker
     * @param {boolean}   [options.stacked]      use the vertical layout
     * @param {number}    [options.columns]      how many columns to show
     * @param {'hidden'|'show'|'disclosure'}    [options.code]              vertical layout
     * @this {EleventyContext}
     */
    function example(content, {
      style = '',
      colorPalette = 'lightest',
      picker = false,
      columns = 1,
      code = 'show',
      class: classNames = '',
    } = {}) {
      style = `--columns:${columns};${style}`;
      const classes = new Set(classNames.split(' ').map(x => x.trim()));
      /* eslint-disable indent */
      return dedent(/* html */`\
<script type="module" src="/assets/elements/uxdot-code-sample.js"></script>
<uxdot-code-sample ${attrMap({ style, 'class': [...classes].join(' '), 'color-palette': colorPalette })}>
  <template shadowrootmode="open">
    <style>
    :host {
      position: relative;
    }
    rh-surface {
      display: grid;
      padding: var(--rh-space-4xl);
      :host(.compact) & {
        padding: var(--rh-space-2xl);
      }
      border-radius: var(--rh-border-radius-default);
      border: var(--rh-border-width-sm) solid var(--rh-color-border-subtle-on-light);
      gap: var(--rh-space-md);
      grid-template-columns: repeat(var(--columns), 1fr);
      grid-template-rows: repeat(auto-fill, minmax(1px, 1fr));
      :host(.dont) & {
        border-color: var(--rh-color-red-500);
      }
      @media (min-width: 992px) { /* --rh-media-md */
        padding: var(--rh-space-7xl);
        gap: var(--rh-space-lg);
      }
    }
    label {
      position: absolute;
      inset-block-start: 2em;
      inset-inline-start: 1em;
    }
    pf-icon.dont {
      color: var(--rh-color-red-500);
      position: absolute;
      inset-block-start: var(--rh-space-xl);
      inset-inline-start: var(--rh-space-sm);
    }
    slot[name="code"] {
      display: block;
      margin-block: var(--rh-space-lg);
    }
    ::slotted(:not(:defined)) {
      opacity: 0;
    }
    </style>${!classes.has('dont') ? '' : /* html */`
    <pf-icon class="dont"
             icon="circle-exclamation"
             size="lg"></pf-icon>`}${!picker ? '' : /* html */`
    <label>Color Palette
      <rh-context-picker id="picker"
                         target="surface"
                         color-palette="${colorPalette}"></rh-context-picker>
    </label>`}
    <rh-surface id="surface"
                color-palette="${colorPalette}"
                ${attrMap({ style })}
    ><slot></slot></rh-surface>${code === 'hidden' ? '' : /* html*/ `
    <slot name="code"></slot>`}
  </template>
  ${content}

  <rh-code-block slot="code" compact full-height>

~~~html
${dedent(content).trim()}
~~~

  </rh-code-block>
</uxdot-code-sample>`);
    /* eslint-enable indent */
    });
};
