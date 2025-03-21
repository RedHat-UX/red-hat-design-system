import type { IconNameFor, IconSetName } from '@rhds/icons';

import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { consume } from '@lit/context';
import { context, type RhNavigationPrimaryItemContext } from './context.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import './rh-navigation-primary-item-menu.js';

import styles from './rh-navigation-primary-item.css';

export class RhNavigationPrimaryItemToggleEvent extends Event {
  declare target: RhNavigationPrimaryItem;
  constructor(
    public open: boolean,
    public toggle: RhNavigationPrimaryItem,
  ) {
    super('item-toggle', { bubbles: true, cancelable: true });
  }
}

@customElement('rh-navigation-primary-item')
@colorPalettes
@themable
export class RhNavigationPrimaryItem extends LitElement {
  static readonly styles = [styles];

  #highlight = false;

  #internals = InternalsController.of(this, { role: 'listitem' });

  @query('details')
  private _details!: HTMLDetailsElement;

  @query('summary')
  private _summary!: HTMLElement;

  @state()
  private _open = false;

  @property() summary?: string;

  @property() variant?: 'link' | 'dropdown' = 'link';

  @property({ reflect: true }) hide?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = undefined;

  @property({ reflect: true, type: Boolean }) standalone = false;

  /** Shorthand for the `icon` slot, the value is icon name */
  @property() icon?: IconNameFor<IconSetName>;

  /** Icon set for the `icon` property - 'ui' by default */
  @property({ attribute: 'icon-set' }) iconSet?: IconSetName;

  @consume({ context, subscribe: true })
  @property({ attribute: false })
  private ctx?: RhNavigationPrimaryItemContext;

  /**
   * Color palette
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  render() {
    const { hide = '', variant = '', standalone } = this;
    const { compact = true } = this.ctx ?? {};
    const classes = {
      'highlight': !!this.#highlight,
      'hide': !!hide,
      [variant]: true,
      'standalone': standalone,
      compact,
    };
    return html`
      <div id="container" class="${classMap(classes)}" part="container">
        ${this.variant === 'dropdown' ? html`
          <details @toggle="${this.#detailsToggle}">
            <summary>            
              ${this.standalone ? html`
                <slot name="icon">
                  ${this.icon ? html`<rh-icon icon="${this.icon}" set="${ifDefined(this.iconSet)}"></rh-icon>` : html``}
                </slot>
                ` : html``}
              <slot name="summary">${this.summary}</slot>
              <rh-icon icon="caret-down" set="microns"></rh-icon>
            </summary>
            <rh-navigation-primary-item-menu id="details-content">
              <slot></slot>
            </rh-navigation-primary-item-menu>
          </details>
        ` : html`
          <slot></slot>
        `}
        </div>
    `;
  }

  #detailsToggle() {
    this._open = this._details.open;
    this.dispatchEvent(new RhNavigationPrimaryItemToggleEvent(this._open, this));
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
    'rh-navigation-primary-item': RhNavigationPrimaryItem;
  }
}
