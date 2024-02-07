import { LitElement, html, css } from 'lit';

class UxdotMasthead extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: var(--rh-color-surface-darkest, #0a0a0a);
      position: sticky;
      top: 0;
      z-index: 2;
    }

    #container {
      display: grid;
      gap: var(--rh-space-lg, 16px);
      grid-template-columns: max-content 1fr max-content;
      height: var(--uxdot-masthead-height, 56px);
      margin: var(--rh-space-md, 8px);
    }

    slot[name="hamburger"] {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: var(--rh-space-md, 8px);
    }

    slot[name="hamburger"]::slotted(pf-button) {
      --pf-c-button--m-plain--Color: var(--rh-color-text-on-dark, #ffffff);
      --pf-c-button--LineHeight: 10px !important; /* hack to get rid of extra spacing due to line-height */
      color: var(--rh-color-text-on-dark, #ffffff);
    }

    slot[name="hamburger"]:hover::slotted(pf-button),
    slot[name="hamburger"]::slotted(pf-button:hover),
    slot[name="hamburger"]::slotted(pf-button:active),
    slot[name="hamburger"]::slotted(pf-button:focus) {
      --pf-c-button--m-plain--hover--Color: var(--rh-color-icon-subtle-hover, #a3a3a3) !important;
      --pf-c-button--m-plain--Color: var(--rh-color-icon-subtle-hover, #a3a3a3);
      color: var(--rh-color-icon-subtle-hover, #a3a3a3);
    }

    slot[name="hamburger"]::slotted(pf-button:focus) {
      outline: var(--rh-border-width-md, 2px) solid var(--rh-color-border-interactive-on-dark, #92c5f9);
      border-radius: var(--rh-border-radius-default, 3px);
    }

    slot[name="logo"]::slotted(a) {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: var(--rh-space-md, 8px);
      max-width: 188px;
    }

    slot[name="links"]::slotted(a) {
      --pf-icon--size: 28px;

      display: flex;
      flex-direction: row;
      gap: var(--rh-space-md, 8px);
      align-items: center;
      color: var(--rh-color-text-on-dark, #ffffff) !important;
    }

    slot[name="links"]:hover::slotted(a),
    slot[name="links"]::slotted(a:hover) {
      color: var(--rh-color-icon-subtle-hover, #a3a3a3) !important;
    }

    @media (min-width: 992px) {
      #container {
        grid-template-columns: 1fr max-content max-content;
      }

      slot[name="hamburger"] {
        display: none;
      }

      slot[name="logo"]::slotted(a) {
        margin-inline-start: var(--rh-space-lg, 16px);
      }

      slot[name="links"]::slotted(a) {

        gap: var(--rh-space-md, 8px);
      }
    }

  `;

  render() {
    return html`
      <div id="container" part="container">
        <slot name="hamburger"></slot>
        <slot name="logo"></slot>
        <slot name="links"></slot>
      </div>
    `;
  }
}

customElements.define('uxdot-masthead', UxdotMasthead);
