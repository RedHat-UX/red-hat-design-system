import { LitElement, html, css } from 'lit';

class UxdotBestPractice extends LitElement {
  static styles = css`
    :host {
      display: block;
      container-type: inline-size;
      container-name: host;
      margin-block: var(--rh-space-2xl, 32px);
    }

    #container {
      display: flex;
      flex-direction: column;
      gap: var(--rh-space-2xl, 32px);
      margin-block: var(--rh-space-2xl, 32px);
    }

    [part="do"] {
      --_color: var(--rh-color-status-success-on-light, #3d7317);
    }

    [part="dont"] {
      --_color: var(--rh-color-status-danger-on-light, #f0561d);
    }

    span {
      font-family: var(--rh-font-family-heading, RedHatDisplay, 'Red Hat Display', 'Noto Sans Arabic', 'Noto Sans Hebrew', 'Noto Sans JP', 'Noto Sans KR', 'Noto Sans Malayalam', 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans Thai', Helvetica, Arial, sans-serif);
      font-size: var(--rh-font-size-heading-md, 1.75rem);
      font-weight: var(--rh-font-weight-heading-medium, 500);
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: var(--rh-space-sm, 4px);
    }

    pf-icon,
    span {
      color: var(--_color);
    }

    ::slotted(uxdot-example) {
      margin: 0 !important;
    }

    figure {
      margin: 0 !important;
    }

    @container container (min-width: 567px) {
      #container {
        grid-template-columns: 1fr 1fr;
      }
    }
  `;


  static properties = {
    do: { type: Boolean },
    dont: { type: Boolean },
  };

  render() {
    return html`
      <figure id="container" part="container">
        <slot name="image"></slot>
        ${this.do ? html`
          <figcaption part="do">
            <span><pf-icon set="far" icon="check-circle" size="lg"></pf-icon> Do</span>
            <slot></slot>
          </figcaption>
        ` : html``}
        ${this.dont && !this.do ? html`
          <figcaption part="dont">
            <span><pf-icon set="far" icon="times-circle" size="lg"></pf-icon> Don't</span>
            <slot></slot>
          </figcaption>
        ` : html``}
      </figure>
    `;
  }
}

customElements.define('uxdot-best-practice', UxdotBestPractice);
