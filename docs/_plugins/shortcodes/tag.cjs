const { attrMap } = require('./helpers.cjs');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode('tag', (content, { color } = {}) =>
    /* html */`<rh-tag ${attrMap({ color })}>${content}</rh-tag>`);
};
