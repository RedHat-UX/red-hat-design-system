import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import { LitElement, html, svg, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import '@rhds/elements/rh-surface/rh-surface.js';

import styles from './rh-announcement.css';




const CLOSE_ICON_SVG = svg`
  <svg
    aria-hidden="true"
    fill="currentColor"
    height="1em" width="1em"
    style="vertical-align:-0.125em"
    viewBox="0 0 352 512">
    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
  </svg>`;


/**
 * Announcement
 * @slot - Place element content here
 */
@customElement('rh-announcement')
export class RhAnnouncement extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];


  #slots = new SlotController(this, 'header', null, 'actions');


// TODO: update to be specific to announcement
  #closeHandler() {
    const event = new AlertCloseEvent();
    if (this.dispatchEvent(event)) {
      this.remove();
    }
  }





  render() {
    const hasActions = this.#slots.hasSlotted('actions');
    const hasBody = this.#slots.hasSlotted(SlotController.anonymous as unknown as string);
    return html`
    // TODO: change from rh-surface
    <rh-surface id="container"
      class="${classMap({ hasBody })}"
      role="alert"
      aria-hidden="false"
      color-palette="lightest">
      <div id="content">
        <slot name="image"></slot>
        <div id="description">
          <slot></slot>
        </div>
        <slot name="cta"></slot>
      </div>
    </rh-surface> 
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-announcement': RhAnnouncement;
  }
}
