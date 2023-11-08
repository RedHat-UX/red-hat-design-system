const fs = require('fs');

/**
 * Reads component status data from global data (see above) and outputs a table for each component
 * @this {EleventyContext}
 */
function repoStatus({ heading = 'Repo status', type = 'Pattern', level = 2 } = {}) {
  return '';
  // https://github.com/RedHat-UX/red-hat-design-system/issues/1174
  // eslint-disable-next-line no-unreachable
  const headingLevel = Array.from({ length: level }, () => '#').join('');
  const checkSVG = fs.readFileSync('node_modules/@patternfly/icons/fas/check.svg', 'utf8');
  /** @type {string[][]} */
  const docsPage = this.ctx._;
  const allStatuses = this.ctx.repoStatus ?? docsPage?.repoStatus ?? [];
  const title = this.ctx.title ?? docsPage?.title;
  const [header, ...repoStatus] = allStatuses;
  if (Array.isArray(header)) {
    header[1] = type;
  }
  const bodyRows = repoStatus.filter(([id]) => id === title);
  if (!Array.isArray(bodyRows) || !bodyRows.length) {
    return '';
  } else {
    return /* html*/`

<section class="section section--palette-default container">

  ${`${headingLevel} ${heading} {.section-title .pfe-jump-links-panel__section}`}
    
  <p>Learn more about our various code repos by visiting <a href="https://ux.redhat.com/about/how-we-build/" target="_blank">this page</a>.</p>
  <div class="component-status-table-container">
    <table class="component-status-table">
      <thead>
        <tr>${header.slice(1).map(x => `
          <th>${x}</th>`.trim()).join('\n').trim()}
        </tr>
      </thead>
      <tbody>${bodyRows.map(([, rowHeader, ...columns]) => `
        <tr>
          <th>${rowHeader}</th>
          ${columns.map(x => `<td>${x === 'x' ? `${checkSVG}` : ''}</td>`.trim()).join('\n').trim()}
        </tr>`.trim()).join('\n').trim()}
      </tbody>
    </table>
  </div>
</section>

  `;
  }
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode('repoStatus', repoStatus);
};
