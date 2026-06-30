import type { IconNameFor, IconSetName } from '@rhds/icons';

import { html, isServer, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { consume } from '@lit/context';

import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';


import {
  rhTabsActiveTabContext,
  rhTabsBoxContext,
  rhTabsManualContext,
  rhTabsFirstTabContext,
  rhTabsLastTabContext,
  rhTabsVerticalContext,
} from './context.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-tab.css' with { type: 'css' };

/**
 * Fired when a tab is selected. Contains the `active` state and
 * a reference to the `tab` element. This event bubbles and is
 * cancelable; calling `preventDefault()` prevents the tab from
 * activating.
 *
 * Event properties:
 * - `active` {boolean} - whether the tab was already active
 * - `tab` {RhTab} - the tab element being expanded
 */
export class TabExpandEvent extends Event {
  constructor(
    /** Whether the tab was already active before this event */
    public active: boolean,
    /** The tab element being expanded */
    public tab: RhTab,
  ) {
    super('expand', { bubbles: true, cancelable: true });
  }
}

/**
 * A tab button for use in an `rh-tabs` element. Each `rh-tab`
 * must be paired with an `rh-tab-panel`. The ARIA `tab` role
 * and `aria-selected` state allow screen reader users to
 * identify the active tab. Authors should keep labels short
 * and should avoid interactive content inside the tab.
 *
 * @summary A single tab within an `rh-tabs` set
 *
 * @fires {TabExpandEvent} expand - when a tab expands.
 *        The event detail shape includes `active` (boolean)
 *        indicating prior state and `tab` (RhTab) referencing
 *        the expanded element. Cancelable with
 *        `preventDefault()`.
 *
 * @csspart button - the interactive tab button container
 * @csspart icon - container for the icon slot
 * @csspart text - container for the default (text) slot
 *
 */
@customElement('rh-tab')
@themable
export class RhTab extends LitElement {
  static readonly styles = [styles];

  /**
   * When true, this tab is the currently selected tab. Only one
   * tab in a set should be active at a time. Screen readers
   * announce the active state via `aria-selected`.
   */
  @property({ reflect: true, type: Boolean }) active = false;

  /**
   * When true, the tab cannot be activated by click, Enter, or
   * focus. The tab receives `aria-disabled="true"` to communicate
   * the disabled state to assistive technologies.
   */
  @property({ reflect: true, type: Boolean }) disabled = false;

  /**
   * Icon name from the specified icon set to display before the tab label.
   * When set, an `rh-icon` element renders in the icon slot as a
   * decorative visual. Icons complement the text label but should not
   * replace it.
   */
  @property({ reflect: true }) icon?: IconNameFor<IconSetName>;

  /**
   * The icon set from which to select the icon. Defaults to `ui`.
   */
  @property({ attribute: 'icon-set' }) iconSet: IconSetName = 'ui';

  @consume({ context: rhTabsBoxContext, subscribe: true })
  @state() private box = false;

  @consume({ context: rhTabsVerticalContext, subscribe: true })
  @state() private vertical = false;

  @consume({ context: rhTabsManualContext, subscribe: true })
  @state() private manual = false;

  @consume({ context: rhTabsActiveTabContext, subscribe: true })
  @state() private activeTab: RhTab | null = null;

  @consume({ context: rhTabsFirstTabContext, subscribe: true })
  @state() private firstTab: RhTab | null = null;

  @consume({ context: rhTabsLastTabContext, subscribe: true })
  @state() private lastTab: RhTab | null = null;

  #internals = InternalsController.of(this, { role: 'tab' });

  override connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId(this.localName);
    this.addEventListener('click', this.#onClick);
    this.addEventListener('keydown', this.#onKeydown);
    this.addEventListener('focus', this.#onFocus);
  }

  render() {
    const { box = false, vertical = false, activeTab, firstTab, lastTab } = this;
    const active = isServer ? this.active : activeTab === this;
    const first = firstTab === this;
    const last = lastTab === this;
    return html`
      <!-- element that contains the interactive part of a tab -->
      <div id="button"
           part="button"
           ?disabled="${this.disabled}"
           class="${classMap({ active, box, vertical, first, last })}">
        <!-- summary: Icon
             description: |
               Can contain an \`<svg>\` or \`<rh-icon>\` element
               displayed before the tab label text. -->
        <slot name="icon"
              part="icon">
          <rh-icon ?hidden="${!this.icon}" icon="${ifDefined(this.icon)}" set="${ifDefined(this.iconSet)}"></rh-icon>
        </slot>
        <!-- summary: Tab label
             description: |
               Tab label text. Authors should keep labels short
               and descriptive. -->
        <slot part="text"></slot>
      </div>
    `;
  }

  #onClick() {
    if (!this.disabled && this.#internals.ariaDisabled !== 'true' && this.ariaDisabled !== 'true') {
      this.#activate();
      if (InternalsController.isSafari) {
        this.focus();
      }
    }
  }

  #onFocus() {
    if (!this.manual && !this.disabled) {
      this.#activate();
    }
  }

  #onKeydown(event: KeyboardEvent) {
    if (!this.disabled) {
      switch (event.key) {
        case 'Enter':
          this.#activate();
      }
    }
  }

  #activate() {
    this.dispatchEvent(new TabExpandEvent(this.active, this));
  }

  @observes('icon')
  protected iconChanged() {
    if (this.icon) {
      import('@rhds/elements/rh-icon/rh-icon.js');
    }
  }

  @observes('active')
  private activeChanged(old: boolean) {
    this.#internals.ariaSelected = String(!!this.active);
    if (this.active && !old) {
      this.#activate();
    }
  }

  /**
   * if a tab is disabled, then it is also aria-disabled
   * if a tab is removed from disabled its not necessarily
   * not still aria-disabled so we don't remove the aria-disabled
   */
  @observes('disabled')
  private disabledChanged() {
    this.#internals.ariaDisabled = String(!!this.disabled);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tab': RhTab;
  }
}
