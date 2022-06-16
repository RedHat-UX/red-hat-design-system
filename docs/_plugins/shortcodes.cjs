module.exports = function(eleventyConfig) {
  /**
   * Section macro
   * Creates a section of the page with a heading
   *
   * @param {object} options
   * @param options.headline       Text to go in the heading
   * @param options.palette        Palette to apply, e.g. lightest, light see components/_section.scss
   * @param options.headingLevel   The heading level, defaults to 2
   */
  eleventyConfig.addPairedShortcode('section', function(content, { headline, palette = 'default', headingLevel = '2' } = {}) {
    const slugify = eleventyConfig.getFilter('slugify');
    return /* html*/`
<section class="section section--palette-${palette} container">
  <a id="${encodeURIComponent(headline)}"></a>
  <h${headingLevel} id="${slugify(headline)}" class="section-title pfe-jump-links-panel__section">${headline}</h${headingLevel}>


${content}


</section>

`;
  });

  /**
   * Example
   * An example image or component
   *
   * @param headline       (Optional) Text to go in the heading
   * @param palette        Palette to apply, e.g. lightest, light see components/_section.scss
   * @param headingLevel   The heading level, defaults to 3
   */
  eleventyConfig.addPairedShortcode('example', function(content, { class: className, headline, palette = 'light', headingLevel = '3' } = {}) {
    const slugify = eleventyConfig.getFilter('slugify');
    return /* html*/`
<div class="example example--palette-${palette}${className ? ` ${className}` : ''}">${!headline ? '' : `
  <a id="${encodeURIComponent(headline)}"></a>
  <h${headingLevel} id="${slugify(headline)}" class="example-title">${headline}</h${headingLevel}>`}


${content}


</div>

`;
  });

  /**
   * Demo
   * A live component demo
   *
   * @param headline       (Optional) Text to go in the heading
   * @param palette        Palette to apply, e.g. lightest, light see components/_section.scss
   * @param headingLevel   The heading level, defaults to 3
   */
  eleventyConfig.addPairedShortcode('demo', function demoShortcode(content, { headline, palette = 'light', headingLevel = '3' } = {}) {
    const slugify = eleventyConfig.getFilter('slugify');
    return /* html*/`

<div class="demo demo--palette-${palette}">${!headline ? '' : `
  <h${headingLevel} id="${slugify(headline)}" class="demo-title">${headline}</h${headingLevel}>`}


${content}


  <details>
    <summary>View Code</summary>


\`\`\`html
${content.trim()}
\`\`\`


  </details>
</div>

`;
  });

  /**
   * Demo
   * A live component demo
   *
   * @this {EleventyContext}
   */
  eleventyConfig.addPairedShortcode('componentStatus', function demoShortcode(content, { heading = 'Component status' } = {}) {
    const { status, page, title } = this.ctx;
    if (!Array.isArray(status)) {
      return '';
    }
    const lastUpdated = new Date(page.date).toLocaleDateString();
    return /* html*/`
<section class="section section--palette-default container">
  <a id="Component status"></a>
  <h2 id="component-status" class="section-title pfe-jump-links-panel__section">${heading}</h2>
  <table class="component-status-table">
    <thead>
      <tr>
        <th>Variant</th>
        <th>Not coded yet</th>
        <th>Studio repo</th>
        <th>PFE repo</th>
        <th>Drupal/FTS repo</th>
        <th>Adobe Target repo</th>
        <th>Other repo</th>
      </tr>
    </thead>
    <tbody>${status.map(variant => `
      <tr>
        <td>${`${title} - ${variant.title ?? ''}`.replace(/ - $/, '')}</td>
        <td>${variant.coded ? '' : 'x'}</td>
        <td>${variant.repos.studio ? 'x' : ''}</td>
        <td>${variant.repos.pfe ? 'x' : ''}</td>
        <td>${variant.repos.drupal ? 'x' : ''}</td>
        <td>${variant.repos.target ? 'x' : ''}</td>
        <td>${variant.repos.other ? 'x' : ''}</td>
      </tr>`).join('\n')}
    </tbody>
  </table>
  <small>Last updated: ${lastUpdated}</small>
</section>
`;
  });
};

