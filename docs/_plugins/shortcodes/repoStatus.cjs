const STATUS_LEGEND = {
  'Planned': {
    description: 'Ready to be worked on or ready to be released',
    color: 'gray',
    variant: 'filled',
    icon: /* html*/`
<svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 15" fill="none" role="img">
  <path d="M6 11.5C6.6 11.5 7 11.9 7 12.5C7 13.1 6.6 13.5 6 13.5C5.4 13.5 5 13.1 5 12.5C5 11.9 5.4 11.5 6 11.5ZM6 10.5C4.9 10.5 4 11.4 4 12.5C4 13.6 4.9 14.5 6 14.5C7.1 14.5 8 13.6 8 12.5C8 11.4 7.1 10.5 6 10.5Z" fill="#707070"/>
  <path d="M10.5 8.5V7C10.5 4.5 8.5 2.5 6 2.5C3.5 2.5 1.5 4.5 1.5 7V8.5C1.5 9.1 1.1 9.5 0.5 9.5C0.2 9.5 0 9.7 0 10V12C0 12.3 0.2 12.5 0.5 12.5H11.5C11.8 12.5 12 12.3 12 12V10C12 9.7 11.8 9.5 11.5 9.5C10.9 9.5 10.5 9.1 10.5 8.5Z" fill="#707070"/>
  <path d="M6 1.5C6.3 1.5 6.5 1.7 6.5 2C6.5 2.3 6.3 2.5 6 2.5C5.7 2.5 5.5 2.3 5.5 2C5.5 1.7 5.7 1.5 6 1.5ZM6 0.5C5.2 0.5 4.5 1.2 4.5 2C4.5 2.8 5.2 3.5 6 3.5C6.8 3.5 7.5 2.8 7.5 2C7.5 1.2 6.8 0.5 6 0.5Z" fill="#707070"/>
</svg>`
  },
  'In progress': {
    description: 'In the design or development process',
    color: 'green',
    variant: 'outline',
    icon: /* html*/`
<svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 15" fill="none" role="img">
  <style type="text/css">
    .inprogress{fill:#63993D;}
  </style>
  <path class="inprogress" d="M15,8c0,3.9-3.1,7-7,7s-7-3.1-7-7H15z"/>
  <path class="inprogress" d="M8,2c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S4.7,2,8,2z M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z"/>
</svg>`
  },
  'Ready': {
    description: 'Ready to use and approved by all team members',
    color: 'green',
    variant: 'filled',
    icon: /* html*/`
<svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 15" fill="none" role="img">
  <path d="M7 14.5C10.866 14.5 14 11.366 14 7.5C14 3.63401 10.866 0.5 7 0.5C3.13401 0.5 0 3.63401 0 7.5C0 11.366 3.13401 14.5 7 14.5Z" fill="#63993D"/>
  <path d="M4 7.5L6 9.5L10 5.5" stroke="#E9F7DF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  'Deprecated': {
    description: 'No longer supported by RHDS',
    color: 'orange',
    variant: 'filled',
    icon: /* html*/`
<svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 15" fill="none" role="img">
  <path d="M7 14.5C10.866 14.5 14 11.366 14 7.5C14 3.63401 10.866 0.5 7 0.5C3.13401 0.5 0 3.63401 0 7.5C0 11.366 3.13401 14.5 7 14.5Z" fill="#F0561D"/>
  <path d="M5 9.5L9 5.5" stroke="#FFE3D9" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 9.5L5 5.5" stroke="#FFE3D9" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  'N/A': {
    description: 'Not planned, not available, or does not apply',
    color: 'gray',
    variant: 'outline',
    icon: /* html*/`
<svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 15" fill="none" role="img">
  <path d="M13.5 7.5C13.5 11.0899 10.5899 14 7 14C3.41015 14 0.5 11.0899 0.5 7.5C0.5 3.91015 3.41015 1 7 1C10.5899 1 13.5 3.91015 13.5 7.5Z" stroke="#707070"/>
  <path d="M2.5 3L11.5 12" stroke="#707070" stroke-miterlimit="10"/>
</svg>`
  },
  'Beta': {
    color: 'purple',
    variant: 'outline',
    icon: /* html*/`
<svg slot="icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve" width="1em" height="1em">
  <style type="text/css">
    .beta{fill:#5E40BE;}
  </style>
  <path class="beta" d="M14.8,3.2l-2.3,2.3l-2-2l2.3-2.3C12.4,1.1,11.9,1,11.5,1C9.6,1,8,2.6,8,4.5c0,0.4,0.1,0.9,0.2,1.3L1,13l2,2
    l7.2-7.2C10.6,7.9,11.1,8,11.5,8C13.4,8,15,6.4,15,4.5C15,4.1,14.9,3.6,14.8,3.2z"/>
 </svg>
 `
  },
  'Experimental': {
    color: 'orange',
    variant: 'outline',
    icon: /* html*/`
<svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 15" role="img">
  <style type="text/css">
    .experimental{fill:#CA6C0F;}
  </style>
  <path class="experimental" d="M14.36395,1.63605c-0.40863-0.40863-0.99158-0.60205-1.69318-0.60199
    c-1.27802,0.00018-2.94904,0.64996-4.67072,1.80273C6.27832,1.68384,4.6073,1.03406,3.32922,1.03406
    c-0.70142,0-1.28467,0.19342-1.69318,0.60199C0.48309,2.78894,1.04749,5.33331,2.83319,8
    c-1.78571,2.66669-2.3501,5.21106-1.19714,6.36395c0.40863,0.40863,0.99158,0.60199,1.69318,0.60199
    c1.27802,0,2.9491-0.64984,4.67072-1.80267c1.72168,1.15289,3.39276,1.80267,4.67084,1.80267
    c0.70142,0,1.28467-0.19342,1.69318-0.60199C15.51691,13.21106,14.95251,10.66669,13.16681,8
    C14.95251,5.33331,15.51691,2.78894,14.36395,1.63605z M12.67133,2.03406c0.44885,0,0.78046,0.104,0.98553,0.30908
    c0.60907,0.60907,0.31421,2.50684-1.11633,4.78113c-0.50311-0.65808-1.07471-1.31531-1.7121-1.9527
    c-0.63818-0.63818-1.29633-1.211-1.95526-1.71454C10.4054,2.48956,11.76721,2.03418,12.67133,2.03406z M11.94421,8
    c-0.50629,0.6925-1.10791,1.40637-1.82288,2.12134C9.40662,10.83606,8.69299,11.4361,8,11.94379
    c-0.69299-0.50769-1.40662-1.10773-2.12134-1.82245C5.1637,9.40637,4.56207,8.6925,4.05579,8
    C4.56207,7.3075,5.1637,6.59363,5.87866,5.87866c0.71472-0.71472,1.42834-1.31476,2.1214-1.82245
    c0.69299,0.50763,1.40656,1.10773,2.12128,1.82245C10.8363,6.59363,11.43793,7.3075,11.94421,8z M2.34314,2.34314
    C2.54822,2.13806,2.88,2.03406,3.32928,2.03406c0.90387,0,2.26556,0.45538,3.79767,1.42291
    c-0.659,0.50354-1.31714,1.07635-1.95538,1.7146c-0.63739,0.63739-1.20898,1.29462-1.7121,1.9527
    C2.02893,4.84998,1.73407,2.95221,2.34314,2.34314z M3.32922,13.96594c-0.44922,0-0.78101-0.104-0.98608-0.30908
    c-0.60907-0.60907-0.31421-2.50684,1.11633-4.78113c0.50311,0.65808,1.07471,1.31531,1.7121,1.9527
    c0.63824,0.63824,1.29633,1.21106,1.95532,1.7146C5.59473,13.51056,4.23309,13.96594,3.32922,13.96594z M13.65686,13.65686
    c-0.20508,0.20508-0.53687,0.30908-0.98608,0.30908c-0.90387,0-2.2655-0.45544-3.79767-1.42291
    c0.659-0.5036,1.31714-1.07642,1.95532-1.7146c0.63739-0.63739,1.20898-1.29462,1.7121-1.9527
    C13.97107,11.15002,14.26593,13.04779,13.65686,13.65686z"/>
  <circle class="experimental" cx="8" cy="8" r="1.5"/>
</svg>`
  },
  'New': {
    color: 'cyan',
    variant: 'outline',
    icon: /* html*/`
<svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 15" role="img">
  <style type="text/css">
    .new{fill:#37A3A3;}
  </style>
  <g>
    <path class="new" d="M13.2,11.8L12.5,10l-0.7,1.8L10,12.5l1.8,0.7l0.7,1.8l0.7-1.8l1.8-0.7L13.2,11.8z"/>
    <path class="new" d="M13.2,2.8L12.5,1l-0.7,1.8L10,3.5l1.8,0.7L12.5,6l0.7-1.8L15,3.5L13.2,2.8z"/>
    <path class="new" d="M8,6.5l-1.5-4L5,6.5L1,8l4,1.5l1.5,4l1.5-4L12,8L8,6.5z"/>
  </g>
 </svg>`
  },

};

const STATUS_CHECKLIST = {
  'Figma library': {
    'Ready': 'Component is available in the Figma library',
    'In progress': 'Component will be added to the Figma library when ready',
    'Planned': 'Component is scheduled to be worked on',
    'Deprecated': 'Component has been removed from the current Figma library ',
    'N/A': 'Component not available in the Figma library'
  },
  'Responsive': {
    'Ready': 'Component responds to changing viewport sizes in Figma and the browser',
    'N/A': 'Responsiveness does not apply to this component'
  },
  'RH Elements': {
    'Ready': 'Component is available as a web component',
    'In progress': 'Component will be added to the RH Elements repo when ready',
    'Planned': 'Component is scheduled to become a web component',
    'Deprecated': 'Component is no longer a web component',
    'N/A': 'Component not available as a web component'
  },
  'webRH': {
    'Ready': 'Component is available as a web component',
    'In progress': 'Component will be added to the webRH repo when ready',
    'Planned': 'Component is scheduled to become a web component',
    'Deprecated': 'Component is no longer a web component',
    'N/A': 'Component not available as a web component'
  }
};

/**
 * Reads repo status data from global data and outputs an array with component keys
 * @this {EleventyContext}
 */
function getRepoData() {
  const docsPage = this.ctx._;
  const allStatuses = this.ctx.repoStatus ?? docsPage?.repoStatus ?? [];
  const title = this.ctx.title ?? docsPage?.title;
  return allStatuses.find(component => component.name === title && component.type === 'Element').libraries;
}

/**
 * Calls getRepoData function and outputs a definition list for each component
 * @this {EleventyContext}
 */
function repoStatusList({ heading = 'Status', level = 2 } = {}) {
  // Removing Documentation status from the repoStatusList
  const statusList = getRepoData.call(this).filter(repo => repo.name !== 'Documentation');

  if (!Array.isArray(statusList) || !statusList.length) {
    return '';
  } else {
    return /* html */`
<section class="section section--palette-default container">
  <div class="component-status-list-heading">
    <copy-permalink class="h${level}">
      <h${level} id=${heading.toLowerCase()} tabindex="-1">
        <a class="heading-anchor" href="#${heading.toLowerCase()}">${heading}</a>
      </h${level}>
    </copy-permalink>
    <p><a href="#status-checklist">What do these mean?</a></p>
  </div>

  <div class="component-status-list-container">
    <dl>
        ${statusList.map(listItem => {
    return /* html */`
  <div>
<dt>${listItem.name}</dt>
<dd>
<rh-tag color=${STATUS_LEGEND[listItem.status].color} variant=${STATUS_LEGEND[listItem.status].variant}>
${listItem.status}${STATUS_LEGEND[listItem.status].icon}
</rh-tag>
</dd>
</div>`;
  }).join('\n').trim()}
    </dl>
  </div>
</section>`;
  }
}

/**
 * Reads component status data from global data (see above) and outputs a table for Design/Code status page
 * @this {EleventyContext}
 */
function repoStatusTable() {
  const docsPage = this.ctx._;
  const allStatuses = this.ctx.repoStatus ?? docsPage?.repoStatus ?? [];
  // Filtering out 'Responsive' status from all the libraries
  const elementsList = allStatuses.map(item => ({ ...item, libraries: item.libraries.filter(lib => lib.name !== 'Responsive') }));

  if (!Array.isArray(elementsList) || !elementsList.length) {
    return '';
  } else {
    return /* html */`
<div class="component-status-table">
<rh-table>
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
<tbody>
  ${elementsList.map(listItem => {
    return /* html */`
<tr>
<td data-label="Name">
  <a href="/elements/${listItem.name}">${listItem.name}</a>
  ${listItem.overallStatus !== 'Released' ? `<rh-tag color="${STATUS_LEGEND[listItem.overallStatus].color}" variant="${STATUS_LEGEND[listItem.overallStatus].variant}">
    ${listItem.overallStatus}${STATUS_LEGEND[listItem.overallStatus].icon}
  </rh-tag>` : ''}
</td>
${listItem.libraries.map(lib => {
    return /* html */`
    <td data-label="${lib.name}">
    <span>
    <rh-tag color=${STATUS_LEGEND[lib.status].color} variant=${STATUS_LEGEND[lib.status].variant}>
    ${lib.status}${STATUS_LEGEND[lib.status].icon}
    </rh-tag>
    </span>
    </td>
  `;
  }).join('\n').trim()}
</tr>`;
  }).join('\n').trim()}
</tbody>
</table>
</rh-table>
  </div>
  </section>`;
  }
}

/**
 * Calls getRepoData function and outputs a status checklist table for each component
 * @this {EleventyContext}
 */
function repoStatusChecklist({ heading = 'Status checklist', level = 2 } = {}) {
  const headingLevel = Array.from({ length: level }, () => '#').join('');
  const statusList = getRepoData.call(this).filter(repo => repo.name !== 'Documentation');
  if (!Array.isArray(statusList) || !statusList.length) {
    return '';
  } else {
    return /* html */`
<section class="section section--palette-default container">

  ${`${headingLevel} ${heading} {.section-title .pfe-jump-links-panel__section}`}

  <div class="component-status-table">
<rh-table>
<table>
<colgroup>
<col />
<col />
<col />
</colgroup>
<thead>
<tr>
<th scope="col" data-label="Property">Property</th>
<th scope="col" data-label="Status">Status</th>
<th scope="col" data-label="Meaning">Meaning</th>
</tr>
</thead>
<tbody>
  ${statusList.map(listItem => {
    return /* html */`
<tr>
<td data-label="Property">${listItem.name}</td>
<td data-label="Status">
<span>
<rh-tag color=${STATUS_LEGEND[listItem.status].color} variant=${STATUS_LEGEND[listItem.status].variant}>
${listItem.status}${STATUS_LEGEND[listItem.status].icon}
</rh-tag>
</span>
</td>
<td data-label="Meaning">${STATUS_CHECKLIST[listItem.name][listItem.status]}</td>
</tr>`;
  }).join('\n').trim()}
</tbody>
</table>
</rh-table>
  </div>
</section>`;
  }
}

function RepoStatusList(eleventyConfig) {
  eleventyConfig.addShortcode('repoStatusList', repoStatusList);
}

function RepoStatusChecklist(eleventyConfig) {
  eleventyConfig.addShortcode('repoStatusChecklist', repoStatusChecklist);
}

function RepoStatusTable(eleventyConfig) {
  eleventyConfig.addShortcode('repoStatusTable', repoStatusTable);
}

module.exports = { RepoStatusList, RepoStatusChecklist, RepoStatusTable };
