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
      const classes = `section section--palette-${palette} ${className ?? ''} container`;
      return /* html*/`
<section ${attrMap({ style, class: classes })}>${!headline ? '' : `

  ${Array.from({ length: headingLevel }, () => '#').join('')} ${headline} {.section-title .pfe-jump-links-panel__section} `}

${content}

</section>

`;
    });
};
