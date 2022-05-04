import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class RhFooterSocialLink extends LitElement {
  static get tag() {
    return 'rh-footer-social-link';
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --pfe-icon--color: var(--_icon-color);
        --pfe-icon--size: var(--rh-footer--social-icon--size, 32px);
      }
      :host(:is(:hover, :focus-within)) {
        --pfe-icon--color: var(--_icon-color-hover);
      }
    `;
  }

  @property() icon: string | null = null;

  constructor() {
    super();
    this.setAttribute('role', 'listitem');
  }

  updated() {
    this.updateLightdom();
  }

  updateLightdom() {
    const oldDiv = this.querySelector('a');
    if (oldDiv) {
      const newDiv = <Element>oldDiv.cloneNode(true);
      // remove the _rendered content
      newDiv.querySelectorAll('[_rendered]').forEach(i => {
        i.remove();
      });
      newDiv.innerHTML = `<pfe-icon icon="${this.icon}">${newDiv.innerHTML}</pfe-icon>`;
      // add a11y settings
      /** @todo add logging that warns the user there is an empty label */
      newDiv.setAttribute('aria-label', newDiv.textContent || '');
      if (oldDiv.parentNode) {
        oldDiv.parentNode.replaceChild(newDiv, oldDiv);
      }
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

window.customElements.define(RhFooterSocialLink.tag, RhFooterSocialLink);
