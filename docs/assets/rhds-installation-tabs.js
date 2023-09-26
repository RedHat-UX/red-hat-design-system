import '@rhds/elements/rh-alert/rh-alert.js';
import { RhTabs } from '@rhds/elements/rh-tabs/rh-tabs.js';

import { TabExpandEvent } from '@patternfly/elements/pf-tabs/BaseTab.js';

const TABS_KEY = 'rhds-installation-tabs-selected-index';

export class InstallationTabs extends RhTabs {
  static stored = localStorage.getItem(TABS_KEY);

  #onExpand(event) {
    if (event instanceof TabExpandEvent) {
      localStorage.setItem(TABS_KEY, this.activeIndex.toString());
    }
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

customElements.define('rhds-installation-tabs', InstallationTabs);
