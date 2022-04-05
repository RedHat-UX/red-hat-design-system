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

    this.spreadSheetUrl = 'https://sheets.googleapis.com/v4/spreadsheets/1OfyP6KZcijXMAX7DvN7KYxlUmp8pqH2WQqQ-ndSc4uc/values/Status?key=AIzaSyB2awA3GspCB7QGF751H06A9BZP6f8FhWM';
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
          overflow: scroll;
        }

        td,
        th {
          padding: 12px 16px;
        }

        th {
          font-size: 14px;
        }

        th:first-child,
        td:first-child {
          text-align: left;
        }

        th:nth-child(n + 6),
        td:nth-child(n + 6) {
          display: none;
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
          // th {
          //   display: none;
          // }

          // td {
          //   display: block;
          // }
          td,
          th {
            padding: 12px 8px;
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
        const columns = data.values[0].map(value => {
          return {
            'label': value,
          };
        });

        const components = [];
        for (let i = 1; i < data.values.length; i++) {
          let row = data.values[i];

          if (!row.length) {
            continue;
          }

          row = row.map(entry => {
            return {
              'value': entry,
            };
          });

          components.push(row);
        }

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

// Dismissable alert

// eslint-disable-next-line no-unused-vars
// function closeBanner(target) {
//     document.getElementById(target).style.display = 'none';
// }

// Key under which name the cookie is saved
const alertName = 'alertconsent';
// The value could be used to store different levels of consent
const alertValue = 'dismissed';

function dismiss() {
    const date = new Date();
    // Alert is valid 1 year: now + (days x hours x minutes x seconds x milliseconds)
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    // Set cookie
    document.cookie = `${alertName}=${alertValue};expires=${date.toUTCString()};path=/`;

    // You probably want to remove the banner
    document.querySelector('.js-alert-banner').remove();
}

// Get button element
const buttonElement = document.querySelector('.js-alert-dismiss');
// Maybe alert consent is not present
if (buttonElement) {
    // Listen on button click
    buttonElement.addEventListener('click', dismiss);
}
