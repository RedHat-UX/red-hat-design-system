const { readFileSync } = require('node:fs');
const { join } = require('node:path');

// for editor highlighting
const html = String.raw;

// TODO(bennypowers): remove when rh-icon arrives, make it ssr-able
const getIcon = name => readFileSync(join(__dirname, 'repoStatus', `${name}.svg`), 'utf8');

const STATUS_LEGEND = {
  'Planned': {
    description: 'Ready to be worked on or ready to be released',
    color: 'gray',
    variant: 'filled',
    icon: getIcon('bell'),
  },
  'In Progress': {
    description: 'In the design or development process',
    color: 'green',
    variant: 'outline',
    icon: getIcon('harvey-ball-50'),
  },
  'Ready': {
    description: 'Ready to use and approved by all team members',
    color: 'green',
    variant: 'filled',
    icon: getIcon('check'),
  },
  'Deprecated': {
    description: 'No longer supported by RHDS',
    color: 'orange',
    variant: 'filled',
    icon: getIcon('circle-x'),
  },
  'N/A': {
    description: 'Not planned, not available, or does not apply',
    color: 'gray',
    variant: 'outline',
    icon: getIcon('ban'),
  },
  'Beta': {
    color: 'purple',
    variant: 'outline',
    icon: getIcon('wrench'),
  },
  'Experimental': {
    color: 'orange',
    variant: 'outline',
    icon: getIcon('atom'),
  },
  'New': {
    color: 'cyan',
    variant: 'outline',
    icon: getIcon('sparkles'),
  },
};

const STATUS_CHECKLIST = {
  'Figma library': {
    'Ready': 'Component is available in the Figma library',
    'In progress': 'Component will be added to the Figma library when finished',
    'Planned': 'Component should be added to the Figma library at a later date',
    'Deprecated': 'Component was removed from the Figma library',
    'N/A': 'Not planned, not available, or does not apply',
  },
  'RH Elements': {
    'Ready': 'Component is available in the RH Elements repo',
    'In progress': 'Component will be added to the RH Elements repo when finished',
    'Planned': 'Component should be added to the RH Elements repo at a later date',
    'Deprecated': 'Component is no longer available in the RH Elements repo',
    'N/A': 'Not planned, not available, or does not apply',
  },
  'WebRH': {
    'Ready': 'Component is available in the WebRH repo',
    'In progress': 'Component will be added to the WebRH repo when finished',
    'Planned': 'Component should be added to the WebRH repo at a later date',
    'Deprecated': 'Component is no longer available in the WebRH repo',
    'N/A': 'Not planned, not available, or does not apply',
  },
};

/**
 * Reads repo status data from global data and outputs an array with component keys
 */
function getRepoData() {
  const docsPage = this.ctx._;
  const allStatuses = this.ctx.repoStatus ?? docsPage?.repoStatus ?? [];
  const title = this.ctx.title ?? docsPage?.title;
  return allStatuses.find(
    component => component.name === title && component.type === 'Element'
  )?.libraries;
}

/**
 * Calls getRepoData function and outputs a definition list for each component
 * @param {object} [options] list heading render options
 * @param {string} [options.heading] heading text
 * @param {number} [options.level] heading level
 */
function repoStatusList({ heading = 'Status', level = 2 } = {}) {
  // Removing Documentation status from the repoStatusList
  const statusList = getRepoData.call(this)?.filter(repo => repo.name !== 'Documentation');

  if (!Array.isArray(statusList) || !statusList.length) {
    return '';
  } else {
    return html`
<uxdot-repo-status-list>
  <uxdot-copy-permalink slot="header">
    <h${level} id=${heading.toLowerCase()} tabindex="-1" >
      <a href="#${heading.toLowerCase()}">${heading}</a>
    </h${level}>
  </uxdot-copy-permalink>
  <a href="#status-checklist" slot="checklist">What do these mean?</a>
  <dl>${statusList.map(listItem => html`
    <div>
      <dt>${listItem.name}:</dt>
      <dd>
        <rh-tag color="${STATUS_LEGEND[listItem.status].color}" variant="${STATUS_LEGEND[listItem.status].variant}">
        ${listItem.status}${STATUS_LEGEND[listItem.status].icon.trim()}
        </rh-tag>
      </dd>
    </div>`.trim()).join('\n').trim()}
  </dl>
</uxdot-repo-status-list>`.trim();
  }
}

/**
 * Reads component status data from global data (see above) and outputs a table for Design/Code status page
 */
function repoStatusTable() {
  const docsPage = this.ctx._;
  const allStatuses = this.ctx.repoStatus ?? docsPage?.repoStatus ?? [];
  // Filtering out 'Responsive' status from all the libraries
  const elementsList = allStatuses.map(item => ({
    ...item,
    libraries: item.libraries.filter(lib => lib.name !== 'Responsive'),
  }));

  if (!Array.isArray(elementsList) || !elementsList.length) {
    return '';
  } else {
    // This table renders the current state of all the components on the Design/Code status page
    return html`
<rh-table class="component-status-table">
  <table>
    <colgroup>
      <col />
      <col />
      <col />
      <col />
      <col />
    </colgroup>
    <thead>
      <tr>
        <th scope="col" data-label="Name">Name</th>
        <th scope="col" data-label="Figma library">Figma library</th>
        <th scope="col" data-label="RH Elements">RH Elements</th>
        <th scope="col" data-label="webRH">WebRH</th>
        <th scope="col" data-label="Documentation">Documentation</th>
      </tr>
    </thead>
    <tbody>${elementsList.map(listItem => html`
      <tr>
        <td data-label="Name">
          <span>
            <a href="/elements/${listItem.name.toLowerCase().trim().split(' ').join('-')}">${listItem.name}</a>
            ${listItem.overallStatus !== 'Available' ?
            `<rh-tag color="${STATUS_LEGEND[listItem.overallStatus].color}" variant="${STATUS_LEGEND[listItem.overallStatus].variant}">
              ${listItem.overallStatus}${STATUS_LEGEND[listItem.overallStatus].icon}
            </rh-tag>` : ''}
          </span>
        </td>${listItem.libraries.map(lib => html`
        <td data-label="${lib.name}">
          <span>
            <rh-tag color=${STATUS_LEGEND[lib.status].color} variant=${STATUS_LEGEND[lib.status].variant}>
              ${lib.status}${STATUS_LEGEND[lib.status].icon.trim()}
            </rh-tag>
          </span>
        </td>`).join('\n').trim()}
      </tr>`).join('\n').trim()}
    </tbody>
  </table>
</rh-table>`;
  }
}

/**
 * Calls getRepoData function and outputs a status checklist table for each component
 * @param {object} [options] list heading render options
 * @param {string} [options.heading] heading text
 * @param {number} [options.level] heading level
 */
function repoStatusChecklist({ heading = 'Status checklist', level = 2 } = {}) {
  const statusList = getRepoData.call(this)?.filter(repo => repo.name !== 'Documentation');
  if (!Array.isArray(statusList) || !statusList.length) {
    return '';
  } else {
    // This is the checklist table to be used on all the "Overview" tab in docs and is different from the table used in Design/Code Status page
    return html`
<h${level} class="section-title pfe-jump-links-panel__section">${heading}</h${level}>
<rh-table class="component-status-table">
  <table>
    <colgroup>
      <col />
      <col />
      <col />
    </colgroup>
    <thead>
      <tr>
        <th scope="col" data-label="Property" width="20%">Property</th>
        <th scope="col" data-label="Status" width="20%">Status</th>
        <th scope="col" data-label="Meaning" width="60%">Meaning</th>
      </tr>
    </thead>
    <tbody>${statusList.map(listItem => html`
      <tr>
        <td data-label="Property">${listItem.name}</td>
        <td data-label="Status">
          <span>
            <rh-tag color=${STATUS_LEGEND[listItem.status].color} variant=${STATUS_LEGEND[listItem.status].variant}>
              ${listItem.status}${STATUS_LEGEND[listItem.status].icon.trim()}
            </rh-tag>
          </span>
        </td>
        <td data-label="Meaning">${STATUS_CHECKLIST[listItem.name][listItem.status]}</td>
      </tr>`).join('\n').trim()}
    </tbody>
  </table>
</rh-table>
`;
  }
}

/**
 * Add the repoStatusList shortcode
 * @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig config
 */
function RepoStatusList(eleventyConfig) {
  eleventyConfig.addShortcode('repoStatusList', repoStatusList);
}

/**
 * Add the repoStatusChecklist shortcode
 * @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig config
 */
function RepoStatusChecklist(eleventyConfig) {
  eleventyConfig.addShortcode('repoStatusChecklist', repoStatusChecklist);
}

/**
 * Add the repoStatusTable shortcode
 * @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig config
 */
function RepoStatusTable(eleventyConfig) {
  eleventyConfig.addShortcode('repoStatusTable', repoStatusTable);
}

module.exports = { RepoStatusList, RepoStatusChecklist, RepoStatusTable };
