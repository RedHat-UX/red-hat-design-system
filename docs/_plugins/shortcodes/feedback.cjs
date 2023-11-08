const { section } = require('./section.cjs');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode('feedback',
    /**
     * Demo
     * A live component demo
     * @param {string} content
     * @param {object} options
     * @param {string} options.headline       (Optional) Text to go in the heading
     * @param {string} options.palette        Palette to apply, e.g. lightest, light see components/_section.scss
     * @param {string} options.headingLevel   The heading level, defaults to 3
     */
    function demoShortcode(content) {
      return /* html*/`

<div class="multi-column--min-300-wide section section--palette-default container feedback">
  ${section.call(this, content)?.trim() || /* html */`
    <h2>Other libraries</h2>
    <p>To learn more about our other libraries, visit <a href="/get-started/">this page</a>.</p>
  `}
  ${section.call(this, /* html */`
    <h2>Feedback</h2>
    <p>
      To give feedback about anything on this page,
      <a href="https://github.com/RedHat-UX/red-hat-design-system/discussions" class="feedback-contact-link">contact us</a>.
    </p>
  `)}
</div>

`;
    });
};
