'use strict';

// As soon as the page loads toggle JS class
var $html = document.querySelector('html');
$html.classList.remove('no-js');
$html.classList.add('js');

window.addEventListener('load', () => {
  // Add a link to the cheat sheet in the nav if we're local
  if (window.location.hostname === 'localhost') {
    const $cheatSheetItem = document.createElement('li');
    $cheatSheetItem.classList.add('site-navigation__item');
    $cheatSheetItem.innerHTML = '<a href="/cheatsheet" class="site-navigation__link">Cheat sheet!</a>';
    document.querySelector('.site-navigation__wrapper').append($cheatSheetItem);
  }

  /**
   * Create Table of Contents
   */
  const $tableOfContents = document.querySelector('.js-table-of-contents');
  if ($tableOfContents) {
    const $headingsInMain = document.querySelectorAll('.l-main h2, .l-main h3, .l-main h4, .l-main h5, .l-main h6');
    const $tableOfContentsList = document.createElement('ol');
    $tableOfContentsList.classList.add('js-table-of-contents__list');

    // Behavior when a ToC link is clicked
    const tableOfContentsLinkNavigation = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      const logoBarHeight = document.querySelector('.l-header__logo-bar').offsetHeight;
      const $scrollTarget = document.getElementById(targetId.substr(1));
      window.scrollTo(window.scrollX, $scrollTarget.offsetTop - logoBarHeight - 30);
    };

    for (let index = 0; index < $headingsInMain.length; index++) {
      const $tableOfContentsItem = document.createElement('li');
      const $tableOfContentsLink = document.createElement('a');
      const $heading = $headingsInMain[index];

      $tableOfContentsItem.classList.add('js-table-of-contents__item');
      $tableOfContentsItem.classList.add(`js-table-of-contents__item--level-${$heading.tagName.substr(1)}`);

      $tableOfContentsLink.addEventListener('click', tableOfContentsLinkNavigation);

      // Add a heading based on heading text if there isn't one
      if (!$heading.hasAttribute('id')) {
        let headingId =
        $heading.innerText.replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '')
        .trim()
        .replace(/[\s\-]+/g, '-');

        // If this id doesn't exist, use it
        if (!document.getElementById(headingId)) {
          $heading.setAttribute(
            'id',
            headingId
            );
        }
        // Otherwise append an index
        else {
          $heading.setAttribute(
            'id',
            `${headingId}__${index}`
            );
        }
      }

      $tableOfContentsLink.setAttribute('href', `#${$heading.getAttribute('id')}`);
      $tableOfContentsLink.innerText = $heading.innerText;
      $tableOfContentsItem.append($tableOfContentsLink);
      $tableOfContentsList.append($tableOfContentsItem);
    }
    $tableOfContents.innerHTML ='<h2 class="js-table-of-contents__headline">Table of Contents</h2>';
    $tableOfContents.append($tableOfContentsList);
    $tableOfContents.classList.add('js-table-of-contents--processed');
  }
});

class RhdsComponentStatus extends HTMLElement {
  static get observedAttributes() {
    return ['component']; // eslint-disable-line
  }

  constructor() {
    super();

    this.spreadSheetUrl = 'https://spreadsheets.google.com/feeds/cells/1OfyP6KZcijXMAX7DvN7KYxlUmp8pqH2WQqQ-ndSc4uc/1/public/full?alt=json';
    this.loading = false;
    this.error = false;
    this._componentData = {
      'columns': [],
      'components': [],
    };

    this._filteredComponentData = {
      'columns': [],
      'components': [],
    };

    this._render = this._render.bind(this);

    this.attachShadow({'mode': 'open',});
    this._fetchData()
      .then(this._render);
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    switch (attr) {
      case 'component':
        if (!this._componentData.columns.length) {
          return;
        }

        this._render();
        break;
    }
  }

  _render() {
    if (!this._componentData) {
      return;
    }

    this._filteredComponentData = Object.assign({}, this._componentData);

    if (this.getAttribute('component')) {
      this._filteredComponentData.components = this._filteredComponentData.components.filter(component => {
        return component[0].value.startsWith(this.getAttribute('component'));
      });
    }

    this.shadowRoot.innerHTML = `
      ${this.loading ?
      `<pfe-progress-indicator>Loading</pfe-progress-indicator>` // eslint-disable-line
      : `
        <style>
        table {
          width: 100%;
          border: 0;
          border-collapse: collapse;
          font-size: 0.9em;
          line-height: 1.4;
          text-align: center;
        }

        td,
        th {
          padding: 12px 16px;
        }

        th:first-child,
        td:first-child {
          text-align: left;
        }

        th:nth-child(n + 7),
        td:nth-child(n + 7) {
          display: none;
        }

        th {

          thead & {
            border-bottom: 1px solid #d2d2d2;
          }

          tfoot & {
            border-top: 1px solid #eee;
          }
        }

        td {
          border: 1px solid #d2d2d2;
          border-left: 0;
          border-right: 0;

          &:last-child {
            border-right: 0;
          }
        }

        @media (max-width: 1000px) {
          /* @todo Mobile styles need a lot of love */
          th {
            display: none;
          }

          td {
            display: block;
          }
        }
        </style>
        <table>
          <thead>
            <tr>
              ${this._filteredComponentData.columns.length ? this._filteredComponentData.columns.map(column => `
                <th>${column.label}</th>
              `).join('') : ''}
            </tr>
          </thead>
          <tbody>
          ${this._filteredComponentData.components.length ? this._filteredComponentData.components.map(component => `
            <tr>
              ${component.map(cell => `
                <td>${cell.value}</td>
              `).join('')}
            </tr>
          `).join('') : ''}
          </tbody>
        </table>
      `}
    `;
  }

  _fetchData() {
    this.loading = true;
    this.error = false;

    return fetch(this.spreadSheetUrl)
      .then(res => res.json())
      .then(data => {
        const cells = data.feed.entry;
        const columns = cells.filter(cell => cell.gs$cell.row === '1').map(cell => {
          return {
            'row': cell.gs$cell.row,
            'column': cell.gs$cell.col,
            'label': cell.gs$cell.$t,
          };
        });
        const allComponentCells = cells.filter(cell => cell.gs$cell.row !== '1').map(cell => cell.gs$cell);
        const totalColumns = columns.length;
        const totalRows = cells[cells.length - 1].gs$cell.row;
        const totalCells = columns.length * totalRows;

        let i = 0;
        let row = 0;
        let component = [];
        const components = [];

        while (i < totalCells) {
          if (i !== 0 && i % totalColumns === 0) {
            components.push(component);
            component = [];
            row++;
          }

          let cell = {};
          cell.column = ((i % totalColumns) + 1).toString();
          cell.row = row + 2;
          cell.label = columns[i % totalColumns].label;
          cell.value = '';
          component.push(cell);
          i++;
        }

        components.forEach((component, componentIndex) => {
          const row = componentIndex + 2;
          const componentCells = allComponentCells.filter(cell => cell.row == row); // eslint-disable-line

          component.forEach((cell, columnIndex) => {
            componentCells.forEach(componentCell => {
              if (cell.column === componentCell.col) {
                cell.value = componentCell.$t;
              }
            });
          });
        });

        this.loading = false;
        this._componentData = {
          columns,
          components,
        };
      })
      .catch(err => {
        console.error(err);
        this.loading = false;
        this.error = true;
      });
  }
}

window.customElements.define('rhds-component-status', RhdsComponentStatus);
