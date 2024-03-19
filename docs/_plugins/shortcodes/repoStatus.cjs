const STATUS_LEGEND = {
  "Planned": {
    description: "Ready to be worked on or ready to be released",
    color: "gray",
    variant: "filled",
    icon: /* html*/`
<svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 15" fill="none" role="img">
  <path d="M6 11.5C6.6 11.5 7 11.9 7 12.5C7 13.1 6.6 13.5 6 13.5C5.4 13.5 5 13.1 5 12.5C5 11.9 5.4 11.5 6 11.5ZM6 10.5C4.9 10.5 4 11.4 4 12.5C4 13.6 4.9 14.5 6 14.5C7.1 14.5 8 13.6 8 12.5C8 11.4 7.1 10.5 6 10.5Z" fill="#707070"/>
  <path d="M10.5 8.5V7C10.5 4.5 8.5 2.5 6 2.5C3.5 2.5 1.5 4.5 1.5 7V8.5C1.5 9.1 1.1 9.5 0.5 9.5C0.2 9.5 0 9.7 0 10V12C0 12.3 0.2 12.5 0.5 12.5H11.5C11.8 12.5 12 12.3 12 12V10C12 9.7 11.8 9.5 11.5 9.5C10.9 9.5 10.5 9.1 10.5 8.5Z" fill="#707070"/>
  <path d="M6 1.5C6.3 1.5 6.5 1.7 6.5 2C6.5 2.3 6.3 2.5 6 2.5C5.7 2.5 5.5 2.3 5.5 2C5.5 1.7 5.7 1.5 6 1.5ZM6 0.5C5.2 0.5 4.5 1.2 4.5 2C4.5 2.8 5.2 3.5 6 3.5C6.8 3.5 7.5 2.8 7.5 2C7.5 1.2 6.8 0.5 6 0.5Z" fill="#707070"/>
</svg>`
  },
  "In progress": {
    description: "In the design or development process",
    color: "green",
    variant: "outline",
    icon: /* html*/`
<svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 15" fill="none" role="img">
  <path d="M13.5 7.5C13.5 11.0899 10.5899 14 7 14C3.41015 14 0.5 11.0899 0.5 7.5C0.5 3.91015 3.41015 1 7 1C10.5899 1 13.5 3.91015 13.5 7.5Z" stroke="#63993D"/>
  <rect y="0.5" width="7" height="14" fill="white"/>
  <path d="M7 14C6.71181 14 6.42825 13.9813 6.15041 13.945L6.08574 14.4408C5.46842 14.3603 4.87638 14.1994 4.32049 13.9688L4.51201 13.507C3.98385 13.288 3.49061 13.0012 3.04317 12.6573L2.73851 13.0538C2.25358 12.6811 1.81885 12.2464 1.4462 11.7615L1.84266 11.4568C1.49883 11.0094 1.21205 10.5161 0.993026 9.98799L0.531163 10.1795C0.300642 9.62362 0.139689 9.03158 0.0591659 8.41426L0.554966 8.34959C0.518724 8.07175 0.5 7.78819 0.5 7.5C0.5 7.21181 0.518724 6.92825 0.554966 6.65041L0.059166 6.58574C0.13969 5.96842 0.300642 5.37638 0.531164 4.82049L0.993027 5.01201C1.21205 4.48385 1.49883 3.99061 1.84266 3.54317L1.4462 3.23851C1.81885 2.75358 2.25358 2.31885 2.73851 1.9462L3.04317 2.34266C3.49061 1.99883 3.98385 1.71205 4.51201 1.49303L4.32049 1.03116C4.87638 0.800642 5.46842 0.639689 6.08574 0.559166L6.15041 1.05497C6.42825 1.01872 6.71181 1 7 1C7.28819 1 7.57175 1.01872 7.84959 1.05497L7.91427 0.559166C8.53158 0.63969 9.12362 0.800642 9.67951 1.03116L9.48799 1.49303C10.0162 1.71205 10.5094 1.99883 10.9568 2.34266L11.2615 1.9462C11.7464 2.31885 12.1811 2.75358 12.5538 3.23851L12.1573 3.54317C12.5012 3.99061 12.788 4.48385 13.007 5.01201L13.4688 4.82049C13.6994 5.37638 13.8603 5.96842 13.9408 6.58574L13.445 6.65041C13.4813 6.92825 13.5 7.21181 13.5 7.5C13.5 7.78819 13.4813 8.07175 13.445 8.34959L13.9408 8.41426C13.8603 9.03158 13.6994 9.62362 13.4688 10.1795L13.007 9.98799C12.788 10.5162 12.5012 11.0094 12.1573 11.4568L12.5538 11.7615C12.1811 12.2464 11.7464 12.6811 11.2615 13.0538L10.9568 12.6573C10.5094 13.0012 10.0161 13.288 9.48799 13.507L9.67951 13.9688C9.12362 14.1994 8.53158 14.3603 7.91426 14.4408L7.84959 13.945C7.57175 13.9813 7.28819 14 7 14Z" stroke="#63993D" stroke-dasharray="2 2"/>
  <path d="M4 7.5L6 9.5L10 5.5" stroke="#63993D" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  "Ready": {
    description: "Ready to use and approved by all team members",
    color: "green",
    variant: "filled",
    icon: /* html*/`
<svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 15" fill="none" role="img">
  <path d="M7 14.5C10.866 14.5 14 11.366 14 7.5C14 3.63401 10.866 0.5 7 0.5C3.13401 0.5 0 3.63401 0 7.5C0 11.366 3.13401 14.5 7 14.5Z" fill="#63993D"/>
  <path d="M4 7.5L6 9.5L10 5.5" stroke="#E9F7DF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  "Deprecated": {
    description: "No longer supported by RHDS",
    color: "orange",
    variant: "filled",
    icon: /* html*/`
<svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 15" fill="none" role="img">
  <path d="M7 14.5C10.866 14.5 14 11.366 14 7.5C14 3.63401 10.866 0.5 7 0.5C3.13401 0.5 0 3.63401 0 7.5C0 11.366 3.13401 14.5 7 14.5Z" fill="#F0561D"/>
  <path d="M5 9.5L9 5.5" stroke="#FFE3D9" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 9.5L5 5.5" stroke="#FFE3D9" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  "N/A": {
    description: "Not planned, not available, or does not apply",
    color: "gray",
    variant: "outline",
    icon: /* html*/`
<svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 15" fill="none" role="img">
  <path d="M13.5 7.5C13.5 11.0899 10.5899 14 7 14C3.41015 14 0.5 11.0899 0.5 7.5C0.5 3.91015 3.41015 1 7 1C10.5899 1 13.5 3.91015 13.5 7.5Z" stroke="#707070"/>
  <path d="M2.5 3L11.5 12" stroke="#707070" stroke-miterlimit="10"/>
</svg>`
  }
}

const STATUS_CHECKLIST = {
  "Figma library": {
    "Ready": "Component is available in the Figma library",
    "In progress" : "Component will be added to the Figma library when ready",
    "Planned": "Component is scheduled to be worked on",
    "Deprecated": "Component has been removed from the current Figma library ",
    "N/A": "Component not available in the Figma library"
  },
  "Responsive": {
    "Ready": "Component responds to changing viewport sizes in Figma and the browser",
    "N/A": "Responsiveness does not apply to this component"
  },
  "RH Elements": {
    "Ready": "Component is available as a web component",
    "In progress" : "Component will be added to the RH Elements repo when ready",
    "Planned" : "Component is scheduled to become a web component",
    "Deprecated" : "Component is no longer a web component",
    "N/A" : "Component not available as a web component"
  },
  "webRH": {
    "Ready": "Component is available as a web component",
    "In progress" : "Component will be added to the webRH repo when ready",
    "Planned" : "Component is scheduled to become a web component",
    "Deprecated" : "Component is no longer a web component",
    "N/A" : "Component not available as a web component"
  }
}

function getRepoData () {
  const docsPage = this.ctx._;
  const allStatuses = this.ctx.repoStatus ?? docsPage?.repoStatus ?? {};
  const title = this.ctx.title ?? docsPage?.title;
  return allStatuses[title];
}

/**
 * Reads component status data from global data (see above) and outputs a definition list for each component
 * @this {EleventyContext}
 */
 function repoStatusList({ heading = 'Status', level = 2 } = {}) {
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
</div>`
        }).join('\n').trim()}
    </dl>
  </div>
</section>`;}
}

/**
 * Reads component status data from global data (see above) and outputs a table for Design/Code status page
 * @this {EleventyContext}
 */
 function repoStatusTable() {
  const docsPage = this.ctx._;
  const allStatuses = this.ctx.repoStatus ?? docsPage?.repoStatus ?? {};

  const elementsList = Object.keys(allStatuses).reduce((obj, key) => Object.assign(obj, {[key]: allStatuses[key].filter(item => item.name !== 'Responsive')}), {});
  
  if (!Object.keys(elementsList).length) {
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
  ${Object.keys(elementsList).map(listKey => {
    return /* html */`
<tr>
<td data-label="Name">
  <a href="/elements/${listKey}">${listKey}</a>
</td>
${elementsList[listKey].map(listItem => {
  return /* html */`
    <td data-label="${listItem.name}">
    <span>
    <rh-tag color=${STATUS_LEGEND[listItem.status].color} variant=${STATUS_LEGEND[listItem.status].variant}>
    ${listItem.status}${STATUS_LEGEND[listItem.status].icon}
    </rh-tag>
    </span>
    </td>
  `
}).join('\n').trim()}
</tr>`}).join('\n').trim()}
</tbody>
</table>
</rh-table>
  </div>
  </section>`;}
}

/**
 * Reads component status data from global data (see above) and outputs a status checklist table for each component
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
</tr>`}).join('\n').trim()}
</tbody>
</table>
</rh-table>
  </div>
</section>`;}
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