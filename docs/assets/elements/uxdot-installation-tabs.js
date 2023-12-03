import { css } from 'lit';

import { RhTabs } from '@rhds/elements/rh-tabs/rh-tabs.js';
import { RhTab } from '@rhds/elements/rh-tabs/rh-tab.js';

import '@rhds/elements/rh-alert/rh-alert.js';

const TABS_KEY = 'rhds-installation-tabs-selected-index';

export class InstallationTabs extends RhTabs {
  static stored = localStorage.getItem(TABS_KEY);

  static is = 'uxdot-installation-tabs';

  static { customElements.define(this.is, this); }

  #onExpand(event) {
    // TODO: when tabs is decoupled from PFE, update the event type here
    if (event.constructor.name === 'TabExpandEvent') {
      localStorage.setItem(TABS_KEY, this.activeIndex.toString());
    }
  }

  constructor() {
    super();
    this.box = true;
    this.vertical = true;
  }

  async firstUpdated() {
    super.firstUpdated?.();
    await Promise.all(Array.from(
      this.querySelectorAll('rh-tab'),
      x => x.updateComplete,
    ));
    if (InstallationTabs.stored !== null) {
      const index = parseInt(InstallationTabs.stored);
      if (!Number.isNaN(index) &&
          index !== this.activeIndex &&
          this.panels[index]) {
        this.activeIndex = index;
      }
    }
    this.addEventListener('expand', this.#onExpand);
  }
}

export class InstallationTab extends RhTab {
  static is = 'uxdot-installation-tab';

  static styles = [...RhTabs.styles, css`
    ::slotted(pre) {
      max-width: 800px !important;
      overflow-x: scroll;
    }
  `];

  static { customElements.define(this.is, this); }
}
