// for editor highlighting
const html = String.raw;

const STATUS_LEGEND = {
  'Planned': {
    description: 'Ready to be worked on or ready to be released',
    color: 'purple',
    variant: 'filled',
    icon: html`<rh-icon set="ui" icon="notification-fill">Planned</rh-icon>`,
    iconName: 'notification-fill',
  },
  'In Progress': {
    description: 'In the design or development process',
    color: 'green',
    variant: 'outline',
    icon: html`<rh-icon set="ui" icon="harvey-ball-50">WIP</rh-icon>`,
    iconName: 'harvey-ball-50',
  },
  'Ready': {
    description: 'Ready to use and approved by all team members',
    color: 'green',
    variant: 'filled',
    icon: html`<rh-icon set="ui" icon="check-circle-fill">✔️</rh-icon>`,
    iconName: 'check-circle-fill',
  },
  'Deprecated': {
    description: 'No longer supported by RHDS',
    color: 'orange',
    variant: 'filled',
    icon: html`<rh-icon set="ui" icon="close-circle-fill">Deprecated</rh-icon>`,
    iconName: 'close-circle-fill',
  },
  'N/A': {
    description: 'Not planned, not available, or does not apply',
    color: 'gray',
    variant: 'outline',
    icon: html`<rh-icon set="ui" icon="ban">N/A</rh-icon>`,
    iconName: 'ban',
  },
  'Beta': {
    color: 'purple',
    variant: 'outline',
    icon: html`<rh-icon set="ui" icon="build-fill">Beta</rh-icon>`,
    iconName: 'build-fill',
  },
  'Experimental': {
    color: 'orange',
    variant: 'outline',
    icon: html`<rh-icon set="ui" icon="experimental">Beta</rh-icon>`,
    iconName: 'experimental',
  },
  'New': {
    color: 'cyan',
    variant: 'outline',
    icon: html`<rh-icon set="ui" icon="new-fill">New</rh-icon>`,
    iconName: 'new-fill',
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
  'RH Shared Libs': {
    'Ready': 'Component is available in the RH Shared Libs repo',
    'In progress': 'Component will be added to the RH Shared Libs repo when finished',
    'Planned': 'Component should be added to the RH Shared Libs repo at a later date',
    'Deprecated': 'Component is no longer available in the RH Shared Libs repo',
    'N/A': 'Not planned, not available, or does not apply',
  },
};

/**
 * Calls getRepoData function and outputs a definition list for each component
 * @param {object} [options] list heading render options
 * @param {string} [options.heading] heading text
 * @param {number} [options.level] heading level
 */
function repoStatusList({ repoStatus, heading = 'Status', level = 2 } = {}) {
  // Removing Documentation status from the repoStatusList
  const librariesList = this.ctx.doc ?
    repoStatus.find(x => x.tagName === this.ctx.doc.tagName)
        ?.libraries?.filter(repo =>
          repo.name !== 'Documentation')
      : repoStatus.flatMap(x => x.libraries) ?? [];


  if (!Array.isArray(librariesList) || !librariesList.length) {
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
  <dl>${librariesList.map(listItem => html`
    <div>
      <dt>${listItem.name}:</dt>
      <dd>
        <rh-tag color="${STATUS_LEGEND[listItem.status].color}" variant="${STATUS_LEGEND[listItem.status].variant}" icon="${STATUS_LEGEND[listItem.status]['iconName']}">
          ${listItem.status}
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
function repoStatusTable({ repoStatus }) {
  const elementsList = repoStatus;

  if (!Array.isArray(elementsList) || !elementsList.length) {
    return '';
  } else {
    // This table renders the current state of all the components on the Design/Code status page
    return html`
<rh-table class="component-status-table">
  <table>
    <colgroup>
      <col>
      <col>
      <col>
      <col>
      <col>
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Figma library</th>
        <th scope="col">RH Elements</th>
        <th scope="col">RH Shared Libs</th>
        <th scope="col">Documentation</th>
      </tr>
    </thead>
    <tbody>${elementsList.map(listItem => html`<tr>
        <td><a href="/elements/${listItem.name.toLowerCase().trim().split(' ').join('-')}">${listItem.name}</a> ${listItem.overallStatus !== 'Available' ?
          `<rh-tag color="${STATUS_LEGEND[listItem.overallStatus].color}"
                   variant="${STATUS_LEGEND[listItem.overallStatus].variant}"
                   icon="${STATUS_LEGEND[listItem.overallStatus]['iconName']}">${listItem.overallStatus}</rh-tag>` : ''}
        </td>${listItem.libraries.map(lib => html`
        <td><rh-tag color="${STATUS_LEGEND[lib.status].color}"
                    variant="${STATUS_LEGEND[lib.status].variant}"
                    icon="${STATUS_LEGEND[lib.status]['iconName']}">${lib.status}</rh-tag></td>`).join('').trim()}
      </tr>`).join('').trim()}
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
function repoStatusChecklist({ repoStatus, heading = 'Status checklist', level = 2 } = {}) {
  // is repoStatus returning undefined ?
  const statusList = this.ctx.doc ?
    repoStatus.find(x => x.tagName === this.ctx.doc.tagName)
        ?.libraries?.filter(repo =>
          repo.name !== 'Documentation')
    : repoStatus.flatMap(x => x.libraries) ?? [];

  if (!Array.isArray(statusList) || !statusList.length) {
    return '';
  } else {
    // This is the checklist table to be used on all the "Overview" tab in docs and is different from the table used in Design/Code Status page
    return html`
<h${level} class="section-title pfe-jump-links-panel__section">${heading}</h${level}>
<rh-table class="component-status-table">
  <table>
    <colgroup>
      <col>
      <col>
      <col>
    </colgroup>
    <thead>
      <tr>
        <th scope="col" width="20%">Property</th>
        <th scope="col" width="20%">Status</th>
        <th scope="col" width="60%">Meaning</th>
      </tr>
    </thead>
    <tbody>${statusList.map(listItem => html`
      <tr>
        <td data-label="Property">${listItem.name}</td>
        <td data-label="Status">
          <span>
            <rh-tag color="${STATUS_LEGEND[listItem.status].color}" variant="${STATUS_LEGEND[listItem.status].variant}" icon="${STATUS_LEGEND[listItem.status]['iconName']}">
              ${listItem.status}
            </rh-tag>
          </span>
        </td>
        <td>${STATUS_CHECKLIST[listItem.name][listItem.status]}</td>
      </tr>`).join('').trim()}
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
export function RepoStatusList(eleventyConfig) {
  eleventyConfig.addShortcode('repoStatusList', repoStatusList);
}

/**
 * Add the repoStatusChecklist shortcode
 * @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig config
 */
export function RepoStatusChecklist(eleventyConfig) {
  eleventyConfig.addShortcode('repoStatusChecklist', repoStatusChecklist);
}

/**
 * Add the repoStatusTable shortcode
 * @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig config
 */
export function RepoStatusTable(eleventyConfig) {
  eleventyConfig.addShortcode('repoStatusTable', repoStatusTable);
}
