module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode('swatch', ({ color = '#000000', light = false } = {}) =>
    /* html */`<div class="swatch" style="--color:${color};${!light ? '' : 'border:1px #c7c7c7 solid;'}"></div>`);
};
