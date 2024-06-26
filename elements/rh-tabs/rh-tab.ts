import type { PropertyValues } from 'lit';
import type { RhTabsContext } from './context.js';

import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';
import { consume } from '@lit/context';

import { observed } from '@patternfly/pfe-core/decorators.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import { context } from './context.js';

import styles from './rh-tab.css';

export class TabExpandEvent extends Event {
  constructor(
    public active: boolean,
    public tab: RhTab,
  ) {
    super('expand', { bubbles: true, cancelable: true });
  }
}

/**
 * The tab button for use within a rh-tabs element, must be paired with a rh-tab-panel.
 *
 * @slot icon - Can contain an `<svg>` or `<pf-icon>`
 * @slot - Tab title text
 *
 * @csspart button - element that contains the interactive part of a tab
 * @csspart icon - icon `<span>` element
 * @csspart text - tile text `<span>` element
 *
 * @cssprop {<color>} --rh-tabs-link-color - Tab link text color {@default `#4d4d4d`}
 * @cssprop {<color>} --rh-tabs-active-border-color - Tab active border color {@default `#ff442b`}
 * @cssprop {<length>} --rh-tabs-link-padding-inline-start - Tab padding inline start {@default `32px`}
 * @cssprop {<length>} --rh-tabs-link-padding-block-start - Tab padding block start {@default `16px`}
 * @cssprop {<length>} --rh-tabs-link-padding-inline-end - Tab padding inline end {@default 32px`}
 * @cssprop {<length>} --rh-tabs-link-padding-block-end - Tab padding block end {@default `16px`}
 *
 * @fires { TabExpandEvent } expand - when a tab expands
 */
@customElement('rh-tab')
export class RhTab extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  /** `active` should be observed, and true when the tab is selected */
  @observed
  @property({ reflect: true, type: Boolean }) active = false;

  /** `disabled` should be observed, and true when the tab is disabled */
  @observed
  @property({ reflect: true, type: Boolean }) disabled = false;

  @consume({ context, subscribe: true })
  @property({ attribute: false })
  private ctx?: RhTabsContext;

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  @queryAssignedElements({ slot: 'icon', flatten: true }) private icons!: HTMLElement[];

  @query('#button') private button!: HTMLButtonElement;

  #internals = InternalsController.of(this, { role: 'tab' });

  override connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId(this.localName);
    this.addEventListener('click', this.#onClick);
  }

  render() {
    const { active, on = '' } = this;
    const { box = false, vertical = false, firstTab, lastTab } = this.ctx ?? {};
    const first = firstTab === this;
    const last = lastTab === this;
    return html`
      <div id="button" 
          part="button"
          ?disabled="${this.disabled}"
          class="${classMap({ active, box, vertical, first, last, [on]: !!on })}">
        <slot name="icon"
              part="icon"
              ?hidden="${!this.icons.length}"
              @slotchange="${() => this.requestUpdate()}"></slot>
        <slot part="text"></slot>
      </div>
    `;
  }

  updated(changed: PropertyValues<this>) {
    if (changed.has('active')) {
      this.#internals.ariaSelected = String(!!this.active);
      if (this.active && !changed.get('active')) {
        this.#activate();
      }
    }

    if (changed.has('disabled')) {
      this.#disabledChanged();
    }
  }

  #onClick() {
    if (!this.disabled && this.#internals.ariaDisabled !== 'true' && this.ariaDisabled !== 'true') {
      this.#activate();
      this.focus(); // safari fix
    }
  }

  #activate() {
    this.dispatchEvent(new TabExpandEvent(this.active, this));
  }

  /**
   * if a tab is disabled, then it is also aria-disabled
   * if a tab is removed from disabled its not necessarily
   * not still aria-disabled so we don't remove the aria-disabled
   */
  #disabledChanged() {
    this.#internals.ariaDisabled = String(!!this.disabled);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tab': RhTab;
  }
}
