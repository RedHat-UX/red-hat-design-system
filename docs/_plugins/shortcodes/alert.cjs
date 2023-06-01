const { attrMap } = require('./helpers.cjs');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode('alert',
    /**
     * Render a Red Hat Alert
     * @param {string} content
     * @param {Record<string, unknown>} attrs
     */
    function alert(content, {
      state = 'info',
      title = 'Note:',
      style = null,
      level = 3,
    } = {}) {
      return /* html */`

<rh-alert ${attrMap({ state, style })}>
  <h${level} slot="header">${title}</h${level}>

  ${content}

</rh-alert>

`;
    });
};
