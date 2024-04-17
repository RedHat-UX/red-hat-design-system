const { attrMap } = require('./helpers.cjs');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode('cta', async function cta(
    content, {
      href = '#',
      target = null,
    } = {}) {
    const innerHTML = await eleventyConfig.javascriptFunctions?.renderTemplate(content, 'md');
    const linkText = innerHTML.replace(/^<p>(.*)<\/p>$/m, '$1').trim();
    return /* html */`<rh-cta><a ${attrMap({ href, target })}>${linkText}</a></rh-cta>`;
  });
};
