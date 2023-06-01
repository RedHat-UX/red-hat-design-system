const { attrMap } = require('./helpers.cjs');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode('section',
    /**
     * Section macro
     * Creates a section of the page with a heading
     *
     * @param {string} content
     * @param {object} options
     * @param {string} options.headline       Text to go in the heading
     * @param {string} options.palette        Palette to apply, e.g. lightest, light see components/_section.scss
     * @param {string} options.headingLevel   The heading level, defaults to 2
     */
    function(content, {
      headline = null,
      palette = 'default',
      headingLevel = '2',
      style = null,
      class: className = null,
    } = {}) {
      const slugify = eleventyConfig.getFilter('slugify');
      const classes = `section section--palette-${palette} ${className ?? ''} container`;
      return /* html*/`
<section ${attrMap({ style, class: classes })}>${!headline ? '' : `
  <a id="${encodeURIComponent(headline)}"></a>
  <h${headingLevel} id="${slugify(headline)}" class="section-title pfe-jump-links-panel__section">${headline}</h${headingLevel}>`}

${content}

</section>

`;
    });
};
