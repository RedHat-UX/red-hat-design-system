import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

class UxdotExample extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    #container {
      padding: var(--rh-space-4xl, 64px);
      margin-block-end: var(--rh-space-2xl, 32px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .light {
      background-color: var(--rh-color-surface-lightest, #ffffff);
      border: var(--rh-border-width-sm, 1px) solid var(--rh-color-border-subtle-on-light, #c7c7c7);
      border-radius: var(--rh-border-radius-default, 3px);
    }

    ::slotted(*) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 100%;
      width: var(--_width, 100%);
    }

    :host([variant="full"]) #container {
      padding: 0;
    }
  `;

  static properties = {
    headline: { type: String },
    headingLevel: { type: Number, attribute: 'heading-level' },
    colorPalette: { type: String, reflect: true, attribute: 'color-palette' },
    variant: { type: String, reflect: true },
    width: { type: String, attribute: 'width-adjustment' },
  };

  constructor() {
    super();
    this.headline = '';
    this.headingLevel = 3;
    this.colorPalette = 'light';
    this.width = '100%';
  }

  render() {
    const classes = {
      [this.colorPalette]: true,
    };
    return html`
      <div id="container" part="container" class="${classMap(classes)}" style="--_width: ${this.width}">
        ${this.headline ? html``
          : html`
            <h${this.headingLevel} id="${this.#slugify(this.headline)}" class="example-title">
              ${this.headline}
            </h${this.headingLevel}>
          `}
        <slot></slot>
      </div>
    `;
  }

  #slugify(text) {
    return text.toLowerCase().replace(/\s/g, '-');
  }
}

customElements.define('uxdot-example', UxdotExample);
