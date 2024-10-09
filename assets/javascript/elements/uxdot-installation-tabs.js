var _InstallationTabs_instances, _InstallationTabs_onExpand;
var InstallationTabs_1;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { customElement } from 'lit/decorators/custom-element.js';
import { RhTabs } from '@rhds/elements/rh-tabs/rh-tabs.js';
import { TabExpandEvent } from '@rhds/elements/rh-tabs/rh-tab.js';
import '@rhds/elements/rh-alert/rh-alert.js';
const TABS_KEY = 'rhds-installation-tabs-selected-index';
let InstallationTabs = InstallationTabs_1 = class InstallationTabs extends RhTabs {
    constructor() {
        super(...arguments);
        _InstallationTabs_instances.add(this);
    }
    async firstUpdated() {
        super.firstUpdated?.();
        await Promise.all(Array.from(this.querySelectorAll('rh-tab'), x => x.updateComplete));
        if (InstallationTabs_1.stored !== null) {
            const index = parseInt(InstallationTabs_1.stored);
            if (!Number.isNaN(index)
                && index !== this.activeIndex
                && this.panels[index]) {
                this.activeIndex = index;
            }
        }
        this.addEventListener('expand', __classPrivateFieldGet(this, _InstallationTabs_instances, "m", _InstallationTabs_onExpand));
    }
};
_InstallationTabs_instances = new WeakSet();
_InstallationTabs_onExpand = function _InstallationTabs_onExpand(event) {
    if (event instanceof TabExpandEvent) {
        localStorage.setItem(TABS_KEY, this.activeIndex.toString());
    }
};
InstallationTabs.stored = localStorage.getItem(TABS_KEY);
InstallationTabs = InstallationTabs_1 = __decorate([
    customElement('uxdot-installation-tabs')
], InstallationTabs);
export { InstallationTabs };
//# sourceMappingURL=uxdot-installation-tabs.js.map