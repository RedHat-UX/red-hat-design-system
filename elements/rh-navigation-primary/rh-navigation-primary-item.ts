import type { IconNameFor, IconSetName } from '@rhds/icons';

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { consume } from '@lit/context';
import {
  context,
  hamburgerContext,
  type RhNavigationPrimaryItemContext,
  type RhNavigationPrimaryHamburgerContext,
} from './context.js';

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

  // eslint-disable-next-line no-unused-private-class-members
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


  /** Shorthand for the `icon` slot, the value is icon name */
  @property() icon?: IconNameFor<IconSetName>;

  /** Icon set for the `icon` property - 'ui' by default */
  @property({ attribute: 'icon-set' }) iconSet?: IconSetName;

  @consume({ context, subscribe: true })
  @property({ attribute: false })
  private ctx?: RhNavigationPrimaryItemContext;

  @consume({ context: hamburgerContext, subscribe: true })
  @property({ attribute: false })
  private hamburgerCtx?: RhNavigationPrimaryHamburgerContext;

  /**
   * Color palette
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  render() {
    const { hide = '', variant = '' } = this;
    const { compact = true } = this.ctx ?? {};
    const { hamburger = false } = this.hamburgerCtx ?? {};
    return html`
      <div id="container" class="${classMap({
        [variant]: true,
        highlight: !!this.#highlight,
        hide: !!hide,
        compact,
        hamburger,
      })}">${this.variant === 'dropdown' ? html`
        <details @toggle="${this.#detailsToggle}">
          <summary>${hamburger ? '' : html`
            <slot name="icon">${this.icon ? '' : html`
              <rh-icon icon="${this.icon}" set="${ifDefined(this.iconSet)}"></rh-icon>`}
            </slot>`}
            <slot name="summary">${this.summary}</slot>
            <rh-icon icon="caret-down" set="microns"></rh-icon>
          </summary>
          <rh-navigation-primary-item-menu id="details-content">
            <slot></slot>
          </rh-navigation-primary-item-menu>
        </details>` : html`
        <slot></slot>`}
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
