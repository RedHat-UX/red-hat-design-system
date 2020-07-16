'use strict';

// As soon as the page loads toggle JS class
var $html = document.querySelector('html');
$html.classList.remove('no-js');
$html.classList.add('js');

class RhdsComponentStatus extends HTMLElement {
  static get observedAttributes() {
    return ['component',];
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
      '<pfe-progress-indicator>Loading</pfe-progress-indicator>'
      : `
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
          const componentCells = allComponentCells.filter(cell => cell.row === row);

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
