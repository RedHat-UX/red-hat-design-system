import type { IconNameFor, IconSetName } from '@rhds/icons';

import { LitElement, html, isServer, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { consume } from '@lit/context';
import { context, type RhNavigationItemContext } from './context.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { ComposedEvent } from '@patternfly/pfe-core/core.js';

import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import '@rhds/elements/rh-icon/rh-icon.js';
import './rh-navigation-item-menu.js';

import styles from './rh-navigation-item.css';

export class RhNavigationItemExpandEvent extends ComposedEvent {
  constructor(
    public open: boolean,
    public toggle: RhNavigationItem,
  ) {
    super('expand');
  }
}

@customElement('rh-navigation-item')
export class RhNavigationItem extends LitElement {
  static readonly styles = [styles];

  #slots = new SlotController(this, { slots: ['link', 'menu'] });

  #highlight = false;

  #mo = new MutationObserver(this.#mutationsCallback.bind(this));

  #internals = InternalsController.of(this, { role: 'listitem' });

  @query('details')
  private _details!: HTMLDetailsElement;

  @query('summary')
  private _summary!: HTMLElement;

  @state()
  private _open = false;

  @property() summary?: string;

  @property() variant?: 'link' | 'dropdown' = 'link';

  @property({ reflect: true }) layout?: 'column' | 'row' | 'icon-only' = undefined;

  @property({ reflect: true }) hide?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = undefined;

  @property({ reflect: true, type: Boolean }) standalone = false;

  /** Shorthand for the `icon` slot, the value is icon name */
  @property() icon?: IconNameFor<IconSetName>;

  /** Icon set for the `icon` property - 'ui' by default */
  @property({ attribute: 'icon-set' }) iconSet?: IconSetName;

  @consume({ context, subscribe: true })
  @property({ attribute: false })
  private ctx?: RhNavigationItemContext;

  /**
   * Color palette
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  connectedCallback(): void {
    super.connectedCallback();
    if (!isServer) {
      this.#mo.observe(this, { attributeFilter: ['aria-current'], childList: true, subtree: true });
    }
  }

  render() {
    const { hide = '', layout = '', variant = '', standalone } = this;
    const { compact = true } = this.ctx ?? {};
    const classes = {
      'highlight': !!this.#highlight,
      'hide': !!this.hide,
      [hide]: true,
      [variant]: true,
      [layout]: true,
      'standalone': standalone,
      compact,
    };
    return html`
      ${this.variant === 'dropdown' ? html`
        <details @toggle="${this.#detailsToggle}" class="${classMap(classes)}">
          <summary>
            ${this.layout !== undefined || this.standalone ? html`
              ${this.icon ?
                html`<rh-icon icon="${this.icon}" set="${ifDefined(this.iconSet)}"></rh-icon>`
                : html`<slot name="icon"></slot>`}
            ` : ``}
            ${this.layout !== 'icon-only' ? html`<slot name="summary">${this.summary}</slot>` : html``}
            ${this.layout !== undefined || this.standalone ? html`` : html`
              <rh-icon icon="caret-down" set="microns"></rh-icon>
            `}
          </summary>
          <rh-navigation-item-menu id="details-content" color-palette="lightest">
            <slot></slot>
          </rh-navigation-item-menu>
        </details>
      ` : html`
        <div id="container" class="${classMap(classes)}">
          <slot></slot>
        </div>
      `}
    `;
  }

  #detailsToggle() {
    this._open = this._details.open;
    this.dispatchEvent(new RhNavigationItemEvent(this._open, this));
  }

  #mutationsCallback() {
    // if the [aria-current-page] link is a child of the default slot ensure the state of the highlight
    const [dropdownMenu] = this.#slots.getSlotted<HTMLElement>('');
    this.#highlight = dropdownMenu.querySelector('[aria-current="page"]') ? true : false;
    this.requestUpdate();
  }

  public close() {
    this._details.open = false;
  }

  public open() {
    this._details.open = true;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-item': RhNavigationItem;
  }
}
