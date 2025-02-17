import { type CSSResult, LitElement, type TemplateResult, html, isServer, render } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-alert.css';
import toastStyles from './rh-alert-toast-styles.css';
import consumerStyles from '@rhds/tokens/css/color-context-consumer.css.js';

interface AlertAction {
  action: 'dismiss' | 'confirm' | string;
  text: string;
}

interface ToastOptions {
  id?: string;
  /** Alert body content. Can be any value which lit-html can render. Simple strings are preferable */
  message: string | Node | TemplateResult | (string | Node | TemplateResult)[];
  /** Alert heading content. Must be a simple string. */
  heading?: string;
  /** Alert `state` attribute */
  state?: RhAlert['state'];
  /** Whether the alert should remain on screen until the user explicitly dismisses it */
  persistent?: boolean;
  /** One or more optional body actions */
  actions?: [] | [AlertAction] | [AlertAction, AlertAction];
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
  constructor(public action: 'close' | 'confirm' | 'dismiss' | string) {
    super('close', { bubbles: true, cancelable: true });
  }
}

let toaster: HTMLElement;

const toasts = new Set<Required<ToastOptions>>();

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
export class RhAlert extends LitElement {
  static readonly styles = [styles, consumerStyles];

  /**
   * Toast a message with an rh-alert
   * @param options
   * @param options.message alert text
   * @param [options.actions] optional array of actions
   * @param [options.heading="Success"] alert heading
   * @param [options.state="info"] `<rh-alert state="...">`
   * @param [options.persistent=false] when true, toast remains on screen until dismissed
   */
  public static async toast({
    message,
    persistent = false,
    heading = 'Success',
    state = 'info',
    actions: _actions,
  }: Omit<ToastOptions, 'id'>) {
    const actions = _actions ?? [];
    toaster ??= initToaster();
    const id = getRandomId();
    const toast = { actions, heading, message, state, id, persistent };
    toasts.add(toast);
    const { matches: motionOK } = window.matchMedia('(prefers-reduced-motion: no-preference)');
    renderToasts();
    const alert = toaster.querySelector(`#${id}`);
    if (toaster.children.length && motionOK) {
      flip(toaster);
    }
    await Promise.all(toaster.getAnimations().map(x => x.finished));
    if (!persistent) {
      await Promise.all(alert?.getAnimations().map(x => x.finished) ?? []);
      toasts.delete(toast);
    }
    renderToasts();
  };

  get #icon() {
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
    if (this.dispatchEvent(new AlertCloseEvent('close'))) {
      this.#close();
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
    // this click listener delegates events from the footer slot
    // as such it doest not require a key listener.
    // eslint-disable-next-line lit-a11y/click-events-have-key-events
    const footer = html`<footer class="${classMap({ hasActions })}"
                  @click="${this.#onActionsClick}">
            <slot name="actions"></slot>
          </footer>`;
    return html`
      <rh-surface id="container"
                  class="${classMap({
                    hasBody,
                    on: true,
                    light: true,
                    [state]: true,
                    [variant]: !!variant,
                  })}"
                  role="alert"
                  aria-hidden="false"
                  color-palette="lightest">
        <div id="left-column">
          <rh-icon id="icon" set="ui" icon="${this.#icon}"></rh-icon>
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
                         @click="${this.#onClose}"></rh-button>
            </div>`}
          </header>
          <div id="description">
            <slot></slot>
          </div>
          ${footer}
        </div>
      </rh-surface>
    `;
  }

  async #close() {
    await this.updateComplete;
    await Promise.all(this.getAnimations().map(x => {
      x.finish();
      return x.finished;
    }));
    this.remove();
  }

  async #onActionsClick(event: MouseEvent) {
    if (event.target instanceof HTMLElement
      && event.target?.slot === 'actions'
      && typeof event.target.dataset.action === 'string'
      && this.dispatchEvent(
        new AlertCloseEvent(event.target?.dataset.action.toLowerCase()),
      )) {
      this.#close();
    }
  }
}

function initToaster() {
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

function renderToasts() {
  render(repeat(toasts, x => x.id, ({
    actions,
    id,
    state,
    heading,
    message,
    persistent,
  }) => {
    const [firstAction, secondAction] = actions ?? [];
    return html`
    <rh-alert id="${id}"
              state="${state}"
              class="${classMap({ persistent })}"
              variant="toast"
              role="status"
              aria-live="polite">
      <h3 slot="header">${heading}</h3>
      ${!message ? '' : typeof message !== 'string' ? message : html`
      <p class="text" ?hidden="${!message}">${message}</p>`}
      ${[firstAction, secondAction].filter(x => !!x).map(action => html`
      <rh-button slot="actions"
                 variant=${action === firstAction ? 'secondary' : 'link'}
                 data-action="${action.action}">${action.text}</rh-button>
      `) ?? []}
    </rh-alert>
  `;
  }), toaster);
}

/**
 * @see https://aerotwist.com/blog/flip-your-animations/
 * @param toaster container for toasted alerts
 */
function flip(toaster: HTMLElement) {
  const first = toaster.offsetHeight;
  const last = toaster.offsetHeight;
  const invert = last - first;
  const animation = toaster.animate([
    { transform: `translateY(${invert}px)` },
    { transform: 'translateY(0)' },
  ], {
    duration: 150,
    easing: 'ease-out',
  });
  animation.startTime = document.timeline.currentTime;
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-alert': RhAlert;
  }
}
