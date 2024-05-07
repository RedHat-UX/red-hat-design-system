module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode('tokensTable',
    /**
     * Tokens Table
     * Display a table rows with token usage
     */
                                    function(content) {
                                      const show = process.env.SHOW_TOKENS_TABLE;
                                      return show !== 'false' ? `${content}` : ``;
                                    });
};
