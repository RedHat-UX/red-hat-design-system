const { readFileSync } = require('node:fs');

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

  const csv = require('async-csv');
  const fs = require('node:fs/promises');
  const path = require('node:path');

  eleventyConfig.addGlobalData('componentStatus', async function getComponentStatus() {
    const contents = await fs.readFile(path.join(__dirname, '..', 'component-status.csv'), 'utf-8');
    const rows = await csv.parse(contents);
    return rows;
  });

  /**
   * Reads component status data from global data (see above) and outputs a table for each component
   */
  eleventyConfig.addPairedShortcode('componentStatus', /** @this {EleventyContext} */ function componentStatus(content, { heading = 'Component status' } = {}) {
    const [header, ...componentStatus] = this.ctx.componentStatus;
    const bodyRows = componentStatus.filter(([rowHeader]) =>
      rowHeader.replace(/^([\w\s]+) - (.*)$/, '$1') === this.ctx.title);
    if (!Array.isArray(bodyRows) || !bodyRows.length) {
      return '';
    } else {
      const [[,,,,,,, lastUpdatedStr]] = bodyRows;
      return /* html*/`


<section class="section section--palette-default container component-status-table-container">
  <a id="Component status"></a>
  <h2 id="component-status" class="section-title pfe-jump-links-panel__section">${heading}</h2>
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
</section>


`;
    }
  });

  eleventyConfig.addPairedShortcode('playground', /** @this{EleventyContext}*/function playground(_, { tagName } = {}) {
    const { imports } = this.ctx.importMap;
    const importMap = { imports: Object.fromEntries(Object.entries(imports).map(([k, v]) => [k, v.startsWith('/') ? new URL(v, 'http://localhost:8080').href : v])) };
    tagName ??= this.ctx.tagName ?? `rh-${this.ctx.page.fileSlug}`;
    this.ctx.demoProjectIDs ??= [];
    this.ctx.demoProjectIDs.push(`demo-project-${this.ctx.demoProjectIDs.length + 1}`);
    const demos = this.ctx.demos.filter(x => x.primaryElementName === tagName);
    return `

<script type="module">
  import 'https://unpkg.com/playground-elements?module';
</script>

<playground-project>${demos.map(x => `
  <script type="sample/html" filename="${`${x.filePath.split('/demo/').pop()}`}">
    ${readFileSync(x.filePath, 'utf8').replace('</script>', '&lt;/script>')}
  </script>`).join('\n')}
  <playground-tab-bar></playground-tab-bar>
  <playground-file-editor></playground-file-editor>
  <playground-preview></playground-preview>
  <script>
  {
    const project = document.currentScript.closest('playground-project');
    const tabBar = project.querySelector('playground-tab-bar');
    const fileEditor = project.querySelector('playground-file-editor');
    const preview = project.querySelector('playground-preview');
    tabBar.project = project;
    fileEditor.project = project;
    preview.project = project;
    tabBar.addEventListener('click', e => onChange(e.target._activeFileName));
    fileEditor.addEventListener('click', e => onChange(e.target.fileName));
    fileEditor.addEventListener('keydown', e => onChange(e.target.fileName));
    function onChange(filename) {
      preview.htmlFile = filename;
      fileEditor.filename = filename;
    }
    onChange('${demos[0].filePath.split('/demo/').pop()}');
  }
  </script>
</playground-project>


`;
  });
};

