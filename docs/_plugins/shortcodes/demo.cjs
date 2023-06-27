module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode('demo',
    /**
     * Demo
     * A live component demo
     * @param {string} content
     * @param {object} options
     * @param {string} options.headline       (Optional) Text to go in the heading
     * @param {string} options.palette        Palette to apply, e.g. lightest, light see components/_section.scss
     * @param {string} options.headingLevel   The heading level, defaults to 3
     */
    function demoShortcode(content, {
      headline = null,
      palette = 'light',
      headingLevel = '3',
    } = {}) {
      const slugify = eleventyConfig.getFilter('slugify');
      return /* html*/`

<div class="demo demo--palette-${palette}">${!headline ? '' : `
  <h${headingLevel} id="${slugify(headline)}" class="demo-title">${headline}</h${headingLevel}>`}

${content}

  <details>
    <summary>View Code</summary>

~~~html
${content.trim()}
~~~

  </details>
</div>

`;
    });
};
