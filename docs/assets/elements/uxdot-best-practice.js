import { LitElement, html, css } from 'lit';

class UxdotBestPractice extends LitElement {
  static styles = css`
    :host {
      display: block;
      container-type: inline-size;
      container-name: host;
    }

    #container {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: var(--rh-space-3xl, 48px);
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

    @container container (min-width: 567px) {
      #container {
        grid-template-columns: 1fr 1fr;
      }
    }
  `;

  render() {
    return html`
      <div id="container" part="container">
        <div part="do">
          <span><pf-icon set="far" icon="check-circle" size="lg"></pf-icon> Do</span>
          <slot name="do"></slot>
        </div>
        <div part="dont">
          <span><pf-icon set="far" icon="times-circle" size="lg"></pf-icon> Don't</span>
          <slot name="dont"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('uxdot-best-practice', UxdotBestPractice);
