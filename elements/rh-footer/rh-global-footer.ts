import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import type { ColorPalette } from '../../lib/context/types.js';

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { colorContextProvider } from '../../lib/context/decorators.js';

import style from './rh-footer.css';
import { responsiveStyles } from './rh-footer-responsive.css.js';

import './rh-footer-copyright.js';

/**
 * @csspart base
 * @csspart base
 * @slot    logo
 * @csspart logo
 * @slot    logo-image
 * @csspart logo-image
 * @slot    primary
 * @csspart primary
 * @slot    primary-start
 * @csspart primary-start
 * @slot    primary-end
 * @csspart primary-end
 * @slot    secondary
 * @csspart secondary
 * @slot    secondary-start
 * @csspart secondary-start
 * @slot    secondary-end
 * @csspart secondary-end
 * @slot    links-primary
 * @csspart links-primary
 * @slot    links-secondary
 * @csspart links-secondary
 * @slot    tertiary
 * @csspart tertiary
 */
@customElement('rh-global-footer')
export class RhGlobalFooter extends LitElement {
  static readonly styles = [style, responsiveStyles];

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette: ColorPalette = 'darker';

  #slots = new SlotController(this, {
    slots: ['primary-start', 'primary-end', 'secondary-start', 'secondary-end', 'links-primary', 'links-secondary', 'tertiary']
  });

  override render() {
    const hasTertiary = this.#slots.hasSlotted('tertiary');
    return html`
      <div class="section global-base ${classMap({ hasTertiary })}" part="section base">
        <slot name="base">
          <div class="global-logo" part="logo">
            <slot name="logo">
              <a class="global-logo-anchor"
                  part="logo-anchor"
                  href="https://redhat.com"
                  alt="Visit Red Hat">
                <svg title="Red Hat logo"
                    class="global-logo-image"
                    part="logo-image"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192 145">
                  <defs>
                    <style>
                      .band {
                        fill: transparent;
                      }
                    </style>
                  </defs>
                  <path class="band" d="M157.77,62.61a14,14,0,0,1,.31,3.42c0,14.88-18.1,17.46-30.61,17.46C78.83,83.49,42.53,53.26,42.53,44a6.43,6.43,0,0,1,.22-1.94l-3.66,9.06a18.45,18.45,0,0,0-1.51,7.33c0,18.11,41,45.48,87.74,45.48,20.69,0,36.43-7.76,36.43-21.77,0-1.08,0-1.94-1.73-10.13Z" />
                  <path class="cls-1" d="M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78" />
                </svg>
              </a>
            </slot>
          </div>
          <div class="global-primary" part="primary">
            <slot name="primary">
              <div class="global-primary-start" part="primary-start" ?hidden=${!this.#slots.hasSlotted('primary-start')}>
                <slot name="primary-start"></slot>
              </div>
              <div class="global-links-primary" part="links-primary" ?hidden=${!this.#slots.hasSlotted('links-primary')}>
                <slot name="links-primary"></slot>
              </div>
              <div class="global-primary-end" part="primary-end" ?hidden=${!this.#slots.hasSlotted('primary-end')}>
                <slot name="primary-end"></slot>
              </div>
            </slot>
          </div>
          <div class="spacer" part="spacer"></div>
          <div class="global-secondary" part="secondary">
            <slot name="secondary">
              <div class="global-secondary-start" part="secondary-start" ?hidden=${!this.#slots.hasSlotted('secondary-start')}>
                <slot name="secondary-start"></slot>
              </div>
              <div class="global-links-secondary" part="links-secondary" ?hidden=${!this.#slots.hasSlotted('links-secondary')}>
                <slot name="links-secondary"></slot>
              </div>
              <div class="global-secondary-end" part="secondary-end" ?hidden=${!this.#slots.hasSlotted('secondary-end')}>
                <slot name="secondary-end"></slot>
              </div>
            </slot>
          </div>
          <div class="global-tertiary" part="tertiary" ?hidden=${!this.#slots.hasSlotted('tertiary')}>
            <slot name="tertiary"></slot>
          </div>
        </slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-global-footer': RhGlobalFooter;
  }
}
