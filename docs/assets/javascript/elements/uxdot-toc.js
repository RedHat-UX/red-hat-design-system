import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import { ScreenSizeController } from '@rhds/elements/lib/ScreenSizeController.js';

class UxdotToc extends LitElement {
  static styles = css`
    :host {
      display: block;
      container-type: inline-size;
      container-name: host;
      margin-block-end: var(--rh-space-4xl, 64px);
    }

    details {
      display: flex;
      padding-inline: var(--rh-space-xl, 24px);
      border-inline-start: var(--rh-border-width-lg, 3px) solid transparent;
      border: var(--rh-border-width-sm, 1px) solid var(--rh-color-border-subtle-on-light, #c7c7c7);
    }

    details[open]::after {
      content: "";
      position: absolute;
      inset-block: 0px;
      inset-inline-start: 0px;
      inset-block-start: -1px;
      width: var(--rh-border-width-lg, 3px);
      background-color: var(--rh-color-brand-red-on-light, #ee0000);
    }

    summary {
      list-style: none;
      display: inline-flex;
      gap: var(--rh-space-sm, 8px);
      align-items: center;
      padding-block: var(--rh-space-lg, 16px);
    }

    summary,
    #summary {
      font-family: var(--rh-font-family-body-text, RedHatText, 'Red Hat Text', 'Noto Sans Arabic', 'Noto Sans Hebrew', 'Noto Sans JP', 'Noto Sans KR', 'Noto Sans Malayalam', 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans Thai', Helvetica, Arial, sans-serif);
      font-size: var(--rh-font-size-body-text-xl, 1.25rem) !important;
      font-weight: var(--rh-font-weight-body-text-medium, 500);
    }

    summary::before {
      content: '';
      width: 1rem;
      height: 1rem;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 10 15' fill='none'%3E%3Cg clip-path='url(%23clip0_232_19576)'%3E%3Cpath d='M2.5 14.5L0.5 12.5L5.5 7.5L0.5 2.5L2.5 0.5L9.5 7.5L2.5 14.5Z' fill='%23707070'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_232_19576'%3E%3Crect width='10' height='14' fill='white' transform='matrix(-1 0 0 1 10 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: contain;
      transition: 0.2s;
    }

    summary::marker {
      display: none;
    }

    details[open] > summary::before {
      transform: rotate(90deg);
    }

    nav {
      margin-block-end: var(--rh-space-lg, 16px);
    }
  `;

  static properties = {
    summary: { type: String, attribute: 'summary' },
  };

  #screen = new ScreenSizeController(this);

  render() {
    const classes = classMap({ });
    const { matches } = this.#screen;
    const sm = matches.has('sm');
    return html`
      <div id="container" class=${classes} part="container">
        ${!sm ? html`
        <details>
          <summary id="summary">${this.summary}</summary>
          <nav aria-describedby="summary">
            <slot></slot>
          </nav>
        </details>
        ` : html`
          <div id="summary">${this.summary}</div>
          <nav>
            <slot></slot>
          </nav>
        `}
      </div>
    `;
  }

  _handleToggle() {
    this.dispatchEvent(new CustomEvent('toggle', {
      bubbles: true,
      composed: true,
    }));
  }
}

customElements.define('uxdot-toc', UxdotToc);
