import { LitElement, html, css } from 'lit';

class UxdotMasthead extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: var(--rh-color-surface-darkest, #151515);
      color: var(--rh-color-text-primary-on-dark, #ffffff);
      position: fixed;
      inset: 0;
      height: max-content;
      z-index: var(--uxdot-masthead-z-index, 2);
      container-type: inline-size;
      container-name: host;
    }

    #container {
      display: grid;
      gap: var(--rh-space-lg, 16px);
      grid-template-columns: max-content 1fr max-content;
      max-height: var(--uxdot-masthead-max-height, 72px);
      margin-inline: var(--rh-space-md, 8px);
      margin-block: var(--rh-space-lg, 16px);
    }

    slot[name="hamburger"] {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--rh-space-md, 8px);
      justify-content: center;
    }

    slot[name="hamburger"]::slotted(button) {
      color: var(--rh-color-text-on-dark, #ffffff);
      background-color: transparent;
      border: none;
      margin: 0;
      padding: var(--rh-space-md, 8px);
      line-height: 0 !important;
    }

    slot[name="hamburger"]:hover::slotted(button),
    slot[name="hamburger"]::slotted(button:hover),
    slot[name="hamburger"]::slotted(button:active),
    slot[name="hamburger"]::slotted(button:focus) {
      color: var(--rh-color-icon-subtle-hover, #a3a3a3);
    }

    slot[name="hamburger"]::slotted(button:focus) {
      outline: var(--rh-border-width-md, 2px) solid var(--rh-color-border-interactive-on-dark, #92c5f9);
      border-radius: var(--rh-border-radius-default, 3px);
    }

    slot[name="logo"]::slotted(a) {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: var(--rh-space-md, 8px);
    }

    slot[name="links"]::slotted(a) {
      --pf-icon--size: 28px;

      display: flex;
      flex-direction: row;
      gap: var(--rh-space-lg, 16px);
      align-items: center;
      color: var(--rh-color-text-on-dark, #ffffff) !important;
    }

    slot[name="links"]:hover::slotted(a),
    slot[name="links"]::slotted(a:hover) {
      color: var(--rh-color-icon-subtle-hover, #a3a3a3) !important;
    }

    @container (min-width: 576px) {
      #container {
        gap: var(--rh-space-lg, 16px);
        margin: var(--rh-space-lg, 16px);
      }

      slot[name="links"]::slotted(span) {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      }
    }

    @container (min-width: 992px) {
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
