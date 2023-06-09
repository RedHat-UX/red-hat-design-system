const { tokens: metaTokens } = require('@rhds/tokens/meta.js');

/**
 * Reads token data from @rhds/tokens and outputs a table for specified tokens
 * @this {EleventyContext}
 */

module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode('tokenValue',
    /**
     * Example
     * An example image or component
     *
     * @param {string}    [token]    Token name
     * @this {EleventyContext}
     */
    function({ token } = {}) {
      if (!token || token.length === 0) {
        return '';
      }
      const { value } = metaTokens.get(token) || { value: '' };
      return value;
    });
};
