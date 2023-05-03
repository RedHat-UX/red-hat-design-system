import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import { LitElement, html, svg } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { ComposedEvent } from '@patternfly/pfe-core';

import styles from './rh-alert.css';

// TODO: replace with rh-icon
const ICONS = {
  default: { viewBox: '0 0 896 1024', path: 'M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z' },
  error: { viewBox: '0 0 512 512', path: 'M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z' },
  success: { viewBox: '0 0 512 512', path: 'M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z' },
  warning: { viewBox: '0 0 576 512', path: 'M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z' },
  danger: { viewBox: '0 0 512 512', path: 'M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z' },
  info: { viewBox: '0 0 512 512', path: 'M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z' },
  close: { viewBox: '0 0 352 512', path: 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z' },
  get(name: 'close' | 'default' | 'error' | 'success' | 'warning' | 'danger' | 'info') {
    const { viewBox, path } = ICONS[name];
    return svg`
      <svg
          aria-hidden="true"
          fill="currentColor"
          height="1em" width="1em"
          style="vertical-align:-0.125em"
          viewBox="${viewBox}">
        <path d="${path}"/>
      </svg>`;
  }
};

export class AlertCloseEvent extends ComposedEvent {
  constructor() {
    super('close', {
      cancelable: true
    });
  }
}

/**
 * An Alert is a banner used to notify a user about a change in status
 * or communicate other information. It can be generated with or without
 * a user triggering an action first.
 *
 * @summary Notifies a user without blocking their workflow
 *
 * @fires {AlertCloseEvent} close - when the dismissable alert closes
 *
 * @slot         - Provide a description for the alert message
 * @slot header  - Provide a header for the alert message.
 * @slot actions - Provide actions that the user can take for the alert
 *
 */
@customElement('rh-alert')
export class RhAlert extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = styles;

  private get icon() {
    return ICONS.get(this.state) ?? ``;
  }

  /**
   * Communicates the urgency of a message and is denoted by various styling configurations.
   *
   *  - `default` - Indicates generic information or a message with no severity.
   *  - `info` - Indicates helpful information or a message with very little to no severity.
   *  - `success` - Indicates a success state, like if a process was completed without errors.
   *  - `warning` - Indicates a caution state, like a non-blocking error that might need to be fixed.
   *  - `danger` - Indicates a danger state, like an error that is blocking a user from completing a task.
   */
  @property({ reflect: true })
    state: 'default' | 'error' | 'success' | 'warning' | 'danger' | 'info' = 'default';

  @property({ reflect: true, type: Boolean }) variant = false;

  /**
   * A Toast alert is used to present a global message about an event,
   * update, or confirmation, like the result of a user action that cannot
   * be presented within a specific layout or component.
   */
  @property({ reflect: true, type: Boolean }) toast = false;

  /**
   * Alert variants have different rules regarding their ability to be dismissed by a user.
   * Default, Info, and Success Inline alerts can be dismissed by a user selecting the close button.
   * Warning and Danger Inline alerts can be dismissed by a user resolving the issues caused by the alert.
   * All Toast alerts can be dismissed by a user selecting the close button or waiting for them to time out.
   */
  @property({ reflect: true, type: Boolean }) dismissable = false;

  #slots = new SlotController(this, 'header', null, 'actions');

  #closeHandler() {
    const event = new AlertCloseEvent();
    if (this.dispatchEvent(event)) {
      this.remove();
    }
  }

  render() {
    const hasActions = this.#slots.hasSlotted('actions');
    return html`
      <div id="container" role="alert" aria-hidden="false">
        <div id="left-column">
          <div id="icon">${this.icon}</div>
        </div>
        <div id="middle-column">
          <header>
            <div id="header">
              <slot name="header"></slot>
            </div>${!this.dismissable ? '' : html`
            <div id="header-actions">
              <button id="close-button"
                  aria-label="Close"
                  confirm
                  @click=${this.#closeHandler}>${ICONS.get('close')}</button>
            </div>`}
          </header>
          <div id="description">
            <slot></slot>
          </div>
          <footer class="${classMap({ hasActions })}">
            <slot name="actions"></slot>
          </footer>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-alert': RhAlert;
  }
}
