import { LitElement, html, css } from 'lit';

class UxdotSkipNavigation extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    ::slotted(a) {
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      padding: var(--rh-space-sm, 6px);
      color: var(--rh-color-text-primary-on-light, #151515);
      border-inline:
        var(--rh-border-width-sm, 1px)
        solid
        var(--rh-color-border-strong-on-light, #151515);
      border-block-end:
        var(--rh-border-width-sm, 1px)
        solid
        var(--rh-color-border-strong-on-light, #151515);
      border-radius: var(--rh-border-radius-default, 3px);
      background: var(--rh-color-surface-light, #e0e0e0);
      transition: top 0.5s ease-out;
      z-index: var(--uxdot-skip-navigation-z-index, 5);
    }

    ::slotted(a:focus) {
      top: 0;
      outline-color: transparent;
      transition: top 0.05s ease-in;
    }

    @media (prefers-reduced-motion: reduce) {
      ::slotted(a) {
        transition-duration: 0.001ms !important;
      }
    }
  `;

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('uxdot-skip-navigation', UxdotSkipNavigation);
