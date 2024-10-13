import { tokens as metaTokens } from '@rhds/tokens/meta.js';

/**
 * Reads token data from @rhds/tokens and outputs a table for specified tokens
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig  computed config
 */
export default function(eleventyConfig) {
  eleventyConfig.addPairedShortcode(
    'spacerTokensTable',
    function(content = '', {
      tokens = '',
      style = '',
      caption = '',
      wrapperClass = '',
      palette = 'light',
    } = {}) {
      return /*html*/`
        <script type="module" data-helmet>
          import '@uxdot/elements/uxdot-spacer-tokens-table.js';
        </script>
        <uxdot-spacer-tokens-table tokens="${tokens}"
                                   style="${style}"
                                   caption="${caption}"
                                   class="${wrapperClass}"
                                   color-palette="${palette}"
        >${content}</uxdot-spacer-tokens-table>`
    });
};
