import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import { type CSSResult, LitElement, html, isServer, render } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import { colorContextConsumer } from '../../lib/context/color/consumer.js';

import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-alert.css';
import toastStyles from './rh-alert-toast-styles.css';

interface ToastOptions {
  id?: string;
  message: string;
  heading?: string;
  state?: RhAlert['state'];
}

const ICONS = new Map(Object.entries({
  neutral: 'minus-circle-fill',
  info: 'information-fill',
  success: 'check-circle-fill',
  caution: 'error-fill',
  warning: 'warning-fill',
  danger: 'ban-fill',
}));

export class AlertCloseEvent extends Event {
  constructor() {
    super('close', { bubbles: true, cancelable: true });
  }
}

/**
 * An alert is a banner used to notify a user about a change in status
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
@colorContextConsumer
export class RhAlert extends LitElement {
  static readonly styles = [styles];

  private static toaster: HTMLElement;

  private static toasts = new Set<ToastOptions>();

  /**
   * @see https://aerotwist.com/blog/flip-your-animations/
   * @param toast
   */
  private static flip() {
    const first = this.toaster.offsetHeight;
    const last = this.toaster.offsetHeight;
    const invert = last - first;
    const animation = this.toaster.animate([
      { transform: `translateY(${invert}px)` },
      { transform: 'translateY(0)' },
    ], {
      duration: 150,
      easing: 'ease-out',
    });
    animation.startTime = document.timeline.currentTime;
  };

  private static renderToasts() {
    render(repeat(this.toasts, x => x.id, toast => html`
      <rh-alert id="${toast.id}"
                state="${toast.state}"
                variant="toast"
                role="status"
                aria-live="polite">
        <h3 slot="header">${toast.heading}</h3>
        <p class="text" ?hidden="${!toast.message}">${toast.message}</p>
      </rh-alert>
    `), this.toaster);
  }

  /**
   * Toast a message with an rh-alert
   * @param options
   * @param options.message alert text
   * @param [options.heading] alert heading
   * @param [options.state] `<rh-alert state="...">`
   */
  public static async toast({ message, heading = 'Success', state = 'info' }: ToastOptions) {
    this.toaster ??= this.init();
    const id = getRandomId();
    const toast = { heading, message, state, id };
    this.toasts.add(toast);
    const { matches: motionOK } = window.matchMedia('(prefers-reduced-motion: no-preference)');
    this.renderToasts();
    const alert = this.toaster.querySelector(`#${id}`);
    if (this.toaster.children.length && motionOK) {
      this.flip();
    }
    await Promise.all([
      ...this.toaster.getAnimations().map(x => x.finished),
      ...(alert?.getAnimations().map(x=>x.finished) ?? []),
    ]);
    this.toasts.delete(toast);
    this.renderToasts();
  };

  static init() {
    const node = document.createElement('section');
    node.classList.add('rh-alert-toast-group');
    // TODO: possibly allow other roots
    document.adoptedStyleSheets = [
      ...document.adoptedStyleSheets ?? [],
      (toastStyles as unknown as CSSResult).styleSheet!,
    ];
    document.body.append(node);
    return node;
  }

  private get icon() {
    const state = this.state.toLowerCase() as this['state'];
    switch (state) {
      case 'note': return ICONS.get('info');
      case 'default': return ICONS.get('neutral');
      case 'error': return ICONS.get('danger');
      default: return ICONS.get(state);
    }
  }

  /**
   * Communicates the urgency of a message and is denoted by various styling configurations.
   *
   *  - `neutral` - Indicates generic information or a message with no severity.
   *  - `danger` - Indicates a danger state, like an error that is blocking a user from completing a task.
   *  - `warning` - Indicates a warning state, like a non-blocking error that might need to be fixed.
   *  - `caution` - Indicates an action or notice which should immediately draw the attention
   *  - `info` - Indicates helpful information or a message with very little to no severity.
   *  - `success` - Indicates a success state, like if a process was completed without errors.
   */
  @property({ reflect: true })
  state:
    | 'danger'
    | 'warning'
    | 'caution'
    | 'neutral'
    | 'info'
    | 'success'
    | 'note' // deprecated
    | 'default' // deprecated
    | 'error' = // deprecated
      'neutral';

  /**
   * The alternate Inline alert style includes a border instead of a line which
   * can be used to express more urgency or better grab the attention of a user.
   *
   * A Toast alert is used to present a global message about an event,
   * update, or confirmation, like the result of a user action that cannot
   * be presented within a specific layout or component.
   */
  @property({ reflect: true }) variant?: 'alternate' | 'toast' | 'inline';

  /**
   * Alert variants have different rules regarding their ability to be dismissed by a user.
   * Default, Info, and Success Inline alerts can be dismissed by a user selecting the close button.
   * Warning and Danger Inline alerts can be dismissed by a user resolving the issues caused by the alert.
   * All Toast alerts can be dismissed by a user selecting the close button or waiting for them to time out.
   */
  @property({ reflect: true, type: Boolean }) dismissable = false;

  #slots = new SlotController(this, 'header', null, 'actions');

  #onClose() {
    const event = new AlertCloseEvent();
    if (this.dispatchEvent(event)) {
      this.remove();
    }
  }

  #aliasState(state: string) {
    switch (state.toLowerCase()) {
      // the first three are deprecated pre-DPO status names
      case 'note': return 'info';
      case 'default': return 'neutral';
      case 'error': return 'danger';
      // the following are DPO-approved status names
      case 'danger':
      case 'warning':
      case 'caution':
      case 'neutral':
      case 'info':
      case 'success':
        return state as this['state'];
      default:
        return 'neutral';
    }
  }

  override connectedCallback() {
    super.connectedCallback();
    if (!isServer) {
      this.requestUpdate();
    }
  }

  render() {
    const _isServer = isServer && !this.hasUpdated;
    const hasActions = _isServer || this.#slots.hasSlotted('actions');
    const hasBody =
      _isServer || this.#slots.hasSlotted(SlotController.default as unknown as string);
    const { variant = 'inline' } = this;
    const state = this.#aliasState(this.state);
    return html`
      <rh-surface id="container"
                  class="${classMap({
                    hasBody,
                    light: true,
                    [state]: true,
                    [variant]: !!variant,
                  })}"
                  role="alert"
                  aria-hidden="false"
                  color-palette="lightest">
        <div id="left-column">
          <rh-icon id="icon" set="ui" icon="${this.icon}"></rh-icon>
        </div>
        <div id="middle-column">
          <header ?hidden="${!_isServer && this.#slots.isEmpty('header')}">
            <div id="header">
              <slot name="header"></slot>
            </div>${!this.dismissable && this.variant !== 'toast' ? '' : html`
            <div id="header-actions">
              <rh-button id="close-button"
                         variant="close"
                         accessible-label="Close"
                         confirm
                         @click=${this.#onClose}></rh-button>
            </div>`}
          </header>
          <div id="description">
            <slot></slot>
          </div>
          <footer class="${classMap({ hasActions })}">
            <slot name="actions"></slot>
          </footer>
        </div>
      </rh-surface>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-alert': RhAlert;
  }
}
