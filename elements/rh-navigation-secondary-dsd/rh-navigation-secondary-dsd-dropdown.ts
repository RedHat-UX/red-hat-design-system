import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';

import { observes } from '@patternfly/pfe-core/decorators.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { ComposedEvent } from '@patternfly/pfe-core/core.js';

import '@rhds/elements/rh-surface/rh-surface.js';

import styles from './rh-navigation-secondary-dsd-dropdown.css';


export class NavigationSecondaryDsdDropdownEvent extends ComposedEvent {
  constructor(
    public open: boolean,
    public toggle: RhNavigationSecondaryDsdDropdown,
  ) {
    super('expand-request');
  }
}

/* Note breaking changes
  - Removal of part[container] as the element has switched to a details > summary
  - Changing the slot names to reflect this change to details > summary (removal of menu opting for default slot)
  - Changing API of expanded to reflect the details summary open attribute
  - Changing the exported Event property to reflect the open attribute instead of reflected
  - Addition of a public close method
  - Addition of a public open method
*/

@customElement('rh-navigation-secondary-dsd-dropdown')
export class RhNavigationSecondaryDsdDropdown extends LitElement {
  static readonly styles = [styles];

  private _slots = new SlotController(this, { slots: ['link', 'menu'] });

  private _highlight = false;

  private _mo = new MutationObserver(this._mutationsCallback.bind(this));

  @query('details') _details!: HTMLDetailsElement;

  @state() _open = false;

  connectedCallback(): void {
    super.connectedCallback();
    if (!isServer) {
      this._mo.observe(this, { attributeFilter: ['aria-current'], childList: true, subtree: true });
    }
  }

  render() {
    const classes = { 'highlight': this._highlight };
    return html`
      <details @toggle="${this._detailsToggle}" class="${classMap(classes)}">
        <summary>
          <slot name="summary"></slot>
          <rh-icon icon="caret-down" set="ui"></rh-icon>
        </summary>
        <div id="details-content"><slot></slot></div>
      </details>
    `;
  }


  private _detailsToggle() {
    this._open = this._details.open;
    this.dispatchEvent(new NavigationSecondaryDsdDropdownEvent(this._open, this));
  }

  private _mutationsCallback() {
    // if the [aria-current-page] link is a child of the default slot ensure the state of the highlight
    const [dropdownMenu] = this._slots.getSlotted<HTMLElement>('');
    this._highlight = dropdownMenu.querySelector('[aria-current="page"]') ? true : false;
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
    'rh-navigation-secondary-dsd-dropdown': RhNavigationSecondaryDsdDropdown;
  }
}
