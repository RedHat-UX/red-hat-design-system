import { LitElement, html, css } from 'lit';

class UxdotHero extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    :host([compact]) {
      margin-block-end: var(--rh-space-3xl, 48px);
    }

    #container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    slot[name="header"]::slotted(h1) {
      color: var(--rh-color-text-brand-on-light, #ee0000);
      margin-block-end: 0;
      text-transform: uppercase;
      font-family: var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);
      line-height: var(--rh-line-height-heading, 1.3);
      font-size: var(--rh-font-size-code-lg, 1.125rem);
      font-weight: var(--rh-font-weight-code-medium, 500);
    }

    slot[name="tagline"]::slotted(p) {
      font-size: var(--rh-font-size-heading-2xl, 3rem);
      margin-block: var(--rh-space-lg, 16px) !important;
      text-align: center;
    }

    slot[name="image"]::slotted(img) {
      width: 100%;
      margin-block-start: var(--rh-space-4xl, 64px);
    }

    :host([compact]) slot[name="header"]::slotted(h2) {
      color: var(--rh-color-text-brand-on-light, #ee0000);
      padding-block-end: var(--rh-space-2xl, 32px);
      font-family: var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);
      font-size: var(--rh-font-size-heading-xl, 2.5rem);
      font-weight: var(--rh-font-weight-heading-regular, 300);
      text-align: center;
    }

    :host([compact]) ::slotted(p) {
      font-size: var(--rh-font-size-body-text-lg, 1.125rem);
      text-align: center;
      max-width: 62rem;
    }
  `;

  render() {
    return html`
      <div id="container" part="container">
        <slot name="header"></slot>
        <slot name="tagline"></slot>
        <slot></slot>
        <slot name="image"></slot>
      </div>
    `;
  }
}

customElements.define('uxdot-hero', UxdotHero);
