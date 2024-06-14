import { LitElement, html, css } from 'lit';

class UxdotRepoStatusList extends LitElement {
  static styles = css`
    :host {
      display: block;
      container-type: inline-size;
      container-name: host;
    }

    #inner-container {
      border: var(--rh-border-width-sm, 1px) solid var(--rh-color-border-subtle-on-light, #c7c7c7);
      border-radius: var(--rh-border-radius-default, 3px);
    }

    #header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    [name="checklist"]::slotted(a) {
      font-size: var(--rh-font-size-body-text-sm, 0.875rem);
    }

    ::slotted(dl) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      column-gap: var(--rh-space-2xl, 32px);
      row-gap: var(--rh-space-lg, 16px);
      margin-block: var(--rh-space-lg, 16px) !important;
      margin-inline: var(--rh-space-xl, 24px) !important;
    }

    @container host (min-width: 768px) {
      ::slotted(dl) {
        flex-direction: row;
        column-gap: var(--rh-space-lg, 16px);
      }
    }

    @container host (min-width: 992px) {
      ::slotted(dl) {
        column-gap: var(--rh-space-2xl, 32px);
      }
    }
  `;

  render() {
    return html`
      <div id="container">
        <div id="header-container">
          <slot name="header"></slot>
          <slot name="checklist"></slot>
        </div>
        <div id="inner-container">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('uxdot-repo-status-list', UxdotRepoStatusList);
