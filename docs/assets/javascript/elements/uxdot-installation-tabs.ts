import { customElement } from 'lit/decorators/custom-element.js';

import { RhTabs } from '@rhds/elements/rh-tabs/rh-tabs.js';
import { TabExpandEvent } from '@rhds/elements/rh-tabs/rh-tab.js';

import '@rhds/elements/rh-alert/rh-alert.js';
const TABS_KEY = 'rhds-installation-tabs-selected-index';

@customElement('uxdot-installation-tabs')
export class InstallationTabs extends RhTabs {
  static stored = localStorage.getItem(TABS_KEY);

  constructor() {
    super();
    this.box = 'box';
    this.vertical = true;
  }

  async firstUpdated() {
    super.firstUpdated?.();
    await Promise.all(Array.from(
      this.querySelectorAll('rh-tab'),
      x => x.updateComplete,
    ));
    for (const pre of this.querySelectorAll<HTMLElement>('rh-tab-panel > pre')) {
      pre.style.maxWidth = '100cqw';
    }
    if (InstallationTabs.stored !== null) {
      const index = parseInt(InstallationTabs.stored);
      if (!Number.isNaN(index)
          && index !== this.activeIndex
          && this.panels[index]) {
        this.activeIndex = index;
      }
    }
    this.addEventListener('expand', this.#onExpand);
  }

  #onExpand(event: Event) {
    if (event instanceof TabExpandEvent) {
      localStorage.setItem(TABS_KEY, this.activeIndex.toString());
    }
  }
}
