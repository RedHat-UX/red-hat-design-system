import { LitElement, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { html, unsafeStatic } from 'lit/static-html.js';

class UxdotExample extends LitElement {
  static styles = css`
    :host {
      display: block;
      container-type: inline-size;
      container-name: host;
    }

    #container {
      padding: var(--rh-space-2xl, 32px);
      margin-block-end: var(--rh-space-2xl, 32px);
      display: flex;
      flex-direction: column;
      align-items: var(--_alignment, center);
      justify-content: center;
      border-width: var(--rh-border-width-sm, 1px);
      border-style: solid;
      border-color: transparent;
      border-radius: var(--rh-border-radius-default, 3px);
    }

    #container:is(.light, .lighter, .lightest) {
      background-color: var(--rh-color-surface-lightest, #ffffff);
      border-color: var(--rh-color-border-subtle-on-light, #c7c7c7);
    }

    #container:is(.dark, .darker, .darkest) {
      background-color: var(--rh-color-surface-dark, #383838);
      border-color: var(--rh-color-border-subtle-on-dark, #707070);
    }

    ::slotted(*) {
      display: flex;
      flex-direction: column;
      align-items: var(--_alignment, center);
      justify-content: center;
      max-width: 100%;
      width: var(--_width, 100%);
    }

    :host([variant="full"]) #container {
      padding: 0;
    }

    :host([danger]) #container {
      border-color: var(--rh-color-border-status-danger-on-light, #f0561d);
      background-image: url('/assets/best-practices-danger-icon.svg');
      background-position-x: 8px;
      background-position-y: 8px;
      background-repeat: no-repeat;
    }

    :host([no-border]) #container {
      border: none;
    }

    @container host (min-width: 567px) {
      #container {
        padding: var(--rh-space-3xl, 48px);
      }
    }

    @container host (min-width: 768px) {
      #container {
        padding: var(--rh-space-4xl, 64px);
      }
    }
  `;

  static properties = {
    headline: { type: String },
    headingLevel: { type: Number, attribute: 'heading-level' },
    colorPalette: { type: String, reflect: true, attribute: 'color-palette' },
    variant: { type: String, reflect: true },
    width: { type: String, attribute: 'width-adjustment' },
    noBorder: { type: Boolean, attribute: 'no-border' },
    danger: { type: Boolean },
    alignment: { type: String },
  };

  constructor() {
    super();
    this.headingLevel = 3;
    this.colorPalette = 'light';
    this.width = '100%';
    this.alignment = 'center';
  }

  render() {
    const classes = {
      [this.colorPalette]: true,
    };
    return html`
      <div id="container" part="container" class="${classMap(classes)}" style="--_width: ${this.width}; --_alignment: ${this.alignment}">
        ${!this.headline ? html``
          : html`
            <${unsafeStatic(this.#setHeading())} id="${this.#slugify(this.headline)}">
              ${this.headline}
            </${unsafeStatic(this.#setHeading())}>
          `}
        <slot></slot>
      </div>
    `;
  }

  #setHeading() {
    return `h${this.headingLevel}`;
  }

  #slugify(text) {
    return text.toLowerCase().replace(/\s/g, '-');
  }
}

customElements.define('uxdot-example', UxdotExample);
