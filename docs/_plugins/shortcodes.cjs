/** @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig */
module.exports = function(eleventyConfig) {
  /** Render a Call to Action */
  eleventyConfig.addPairedShortcode('cta', function(content, {
    href = '#',
  } = {}) {
    return /* html */`<rh-cta><a href="${href}">${content}</a></rh-cta>`;
  });

  /** Render a Red Hat Alert */
  eleventyConfig.addPairedShortcode('alert', function(content, {
    state = 'info',
    title = 'Note:',
    style,
    level = 3,
  } = {}) {
    return /* html */`

<rh-alert state="${state}"${!style ? '' : `
          style="${style}"`}>
  <h${level} slot="header">${title}</h${level}>

${content}

</rh-alert>

`;
  });

  /**
   * Section macro
   * Creates a section of the page with a heading
   *
   * @param {object} options
   * @param options.headline       Text to go in the heading
   * @param options.palette        Palette to apply, e.g. lightest, light see components/_section.scss
   * @param options.headingLevel   The heading level, defaults to 2
   */
  eleventyConfig.addPairedShortcode('section', function(content, {
    headline,
    palette = 'default',
    headingLevel = '2',
    style,
    class: className,
  } = {}) {
    const slugify = eleventyConfig.getFilter('slugify');
    return /* html*/`
<section class="section section--palette-${palette} ${className ?? ''} container"${!style ? '' : `
         style="${style.replace('"', '\\"')}"`}>${!headline ? '' : `
  <a id="${encodeURIComponent(headline)}"></a>
  <h${headingLevel} id="${slugify(headline)}" class="section-title pfe-jump-links-panel__section">${headline}</h${headingLevel}>`}

${content}

</section>

`;
  });

  /**
   * Example
   * An example image or component
   *
   * @param {object}    options
   * @param {string}    options.alt               Image alt text
   * @param {string}    options.src               Image url
   * @param {string}    [options.wrapperClass]    class names for container element
   * @param {string}    [options.headline]        Text to go in the heading
   * @param {string}    [options.palette='light'] Palette to apply, e.g. lightest, light see components/_section.scss
   * @param {2|3|4|5|6} [headingLevel=3]          The heading level
   */
  eleventyConfig.addShortcode('example', function({
    alt = '',
    src = '',
    style,
    headline,
    wrapperClass,
    palette = 'light',
    headingLevel = '3'
  } = {}) {
    const slugify = eleventyConfig.getFilter('slugify');
    const url = eleventyConfig.getFilter('url');
    return /* html */`
<div class="example example--palette-${palette} ${wrapperClass ?? ''}">${!headline ? '' : `
  <a id="${encodeURIComponent(headline)}"></a>
  <h${headingLevel} id="${slugify(headline)}" class="example-title">${headline}</h${headingLevel}>`}
  <img alt="${alt}"
       src="${url(src)}"${!style ? '' : /* html */`
       style="${style}"`}>
</div>`;
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
   * Reads component status data from global data (see above) and outputs a table for each component
   */
  eleventyConfig.addPairedShortcode('componentStatus', /** @this {EleventyContext} */ function componentStatus(_content, { heading = 'Component status' } = {}) {
    const allStatuses = this.ctx.componentStatus ?? this.ctx._?.componentStatus ?? [];
    const title = this.ctx.title ?? this.ctx._?.title;
    const [header, ...componentStatus] = allStatuses;
    const bodyRows = componentStatus.filter(([rowHeader]) =>
      rowHeader.replace(/^([\w\s]+) - (.*)$/, '$1') === title);
    if (!Array.isArray(bodyRows) || !bodyRows.length) {
      return '';
    } else {
      const [[,,,,,,,, lastUpdatedStr]] = bodyRows;
      return /* html*/`


<section class="section section--palette-default container">
  <a id="Component status"></a>
  <h2 id="component-status" class="section-title pfe-jump-links-panel__section">${heading}</h2>
  <div class="component-status-table-container">
    <table class="component-status-table">
      <thead>
        <tr>${header.map(x => `
          <th>${x}</th>`.trim()).join('\n').trim()}
        </tr>
      </thead>
      <tbody>${bodyRows.map(([title, ...columns]) => `
        <tr>
          <th>${title}</th>${columns.map(x => `
          <td>${x}</td>`.trim()).join('\n').trim()}
        </tr>`.trim()).join('\n').trim()}
      </tbody>
    </table>${!lastUpdatedStr ? '' : `
    <small>Last updated: ${new Date(lastUpdatedStr).toLocaleDateString()}</small>`}
  </div>
</section>


`;
    }
  });

  eleventyConfig.addPairedNunjucksAsyncShortcode('playground', /** @this{EleventyContext}*/async function playground(_, { tagName } = {}) {
    tagName ??= this.ctx.tagName ?? this.ctx._?.tagName ?? `rh-${this.ctx.page.fileSlug}`;
    return `

<playground-project>
  <playground-tab-bar></playground-tab-bar>
  <playground-file-editor></playground-file-editor>
  <playground-preview></playground-preview>
  <script src="/assets/playgrounds/${tagName}-playground.js"></script>
  <script src="/assets/playgrounds/playgrounds.js"></script>
</playground-project>


`;
  });
};
