import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import styles from './rh-breadcrumb.css';

/**
 * A breadcrumb navigation is a secondary navigation element consisting of a list
 * of links to the parent pages of the current page in hierarchical order. It
 * helps users find their place within a website or web application.
 * @summary Links displaying a hierarchical location
 *
 * @slot - Place an ordered list (`<ol>`) of your breadcrumbs into the slot
 *
 * @csspart container - container element for slotted breadcrumb
 *
 * @cssprop --rh-breadcrumb-li-padding-inline-end
 *          Sets the spacing between each breadcrumb item.
 *          {@default `var(--rh-breadcrumb-li-padding-inline-end, 42px)`}
 * @cssprop --rh-breadcrumb-caret-image
 *          Defines the background image separating each breadcrumb item
 *          {@default `var(--rh-breadcrumb-caret-image, url("data:image/svg+xml,%3Csvg width='10' height='15' viewBox='0 0 10 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_232_19612)'%3E%3Cpath d='M2.5 14.5L0.5 12.5L5.5 7.5L0.5 2.5L2.5 0.5L9.5 7.5L2.5 14.5Z' fill='%23C7C7C7'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_232_19612'%3E%3Crect width='10' height='14' fill='white' transform='matrix(-1 0 0 1 10 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"))`}
 */
@customElement('rh-breadcrumb')
export class RhBreadcrumb extends LitElement {
  @property({ type: Array }) items: string[] = [];

  @property({ reflect: true }) variant?: 'subtle';

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  static readonly styles = [styles];

  render() {
    const { on = '' } = this;
    return html`
      <nav aria-label="Breadcrumb" part="container" id="container" class="${classMap({ [on]: !!on })}">
        <slot></slot>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-breadcrumb': RhBreadcrumb;
  }
}
