var _TabsAriaController_instances, _TabsAriaController_logger, _TabsAriaController_host, _TabsAriaController_element, _TabsAriaController_tabPanelMap, _TabsAriaController_options, _TabsAriaController_mo, _TabsAriaController_onSlotchange;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { isServer } from 'lit';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
export class TabsAriaController {
    get tabs() {
        return [...__classPrivateFieldGet(this, _TabsAriaController_tabPanelMap, "f").keys()];
    }
    get activeTab() {
        return this.tabs.find(x => __classPrivateFieldGet(this, _TabsAriaController_options, "f").isActiveTab(x));
    }
    /**
     * @param host controller host
     * @param options controller options
     * @example Usage in PfTab
     *          ```ts
     *          new TabsController(this, {
     *             isTab: (x): x is PfTab => x instanceof PfTab,
     *             isPanel: (x): x is PfTabPanel => x instanceof PfTabPanel
     *          });
     *          ```
     */
    constructor(host, options) {
        _TabsAriaController_instances.add(this);
        _TabsAriaController_logger.set(this, void 0);
        _TabsAriaController_host.set(this, void 0);
        _TabsAriaController_element.set(this, void 0);
        _TabsAriaController_tabPanelMap.set(this, new Map());
        _TabsAriaController_options.set(this, void 0);
        _TabsAriaController_mo.set(this, new MutationObserver(__classPrivateFieldGet(this, _TabsAriaController_instances, "m", _TabsAriaController_onSlotchange).bind(this)));
        __classPrivateFieldSet(this, _TabsAriaController_options, options, "f");
        __classPrivateFieldSet(this, _TabsAriaController_logger, new Logger(host), "f");
        (__classPrivateFieldSet(this, _TabsAriaController_host, host, "f")).addController(this);
        if (isServer) {
            return;
        }
        if (host instanceof HTMLElement) {
            __classPrivateFieldSet(this, _TabsAriaController_element, host, "f");
        }
        else {
            const element = options.getHTMLElement?.();
            if (!element) {
                throw new Error('TabsController must be instantiated with an HTMLElement or a `getHTMLElement()` option');
            }
            __classPrivateFieldSet(this, _TabsAriaController_element, element, "f");
        }
        __classPrivateFieldGet(this, _TabsAriaController_element, "f").addEventListener('slotchange', __classPrivateFieldGet(this, _TabsAriaController_instances, "m", _TabsAriaController_onSlotchange));
        if (__classPrivateFieldGet(this, _TabsAriaController_element, "f").isConnected) {
            this.hostConnected();
        }
    }
    hostConnected() {
        __classPrivateFieldGet(this, _TabsAriaController_mo, "f").observe(__classPrivateFieldGet(this, _TabsAriaController_element, "f"), { attributes: false, childList: true, subtree: false });
        __classPrivateFieldGet(this, _TabsAriaController_instances, "m", _TabsAriaController_onSlotchange).call(this);
    }
    hostUpdated() {
        for (const [tab, panel] of __classPrivateFieldGet(this, _TabsAriaController_tabPanelMap, "f")) {
            panel.setAttribute('aria-labelledby', tab.id);
            tab.setAttribute('aria-controls', panel.id);
        }
    }
    hostDisconnected() {
        __classPrivateFieldGet(this, _TabsAriaController_mo, "f").disconnect();
    }
    panelFor(tab) {
        return __classPrivateFieldGet(this, _TabsAriaController_tabPanelMap, "f").get(tab);
    }
    tabFor(panel) {
        for (const [tab, panelToCheck] of __classPrivateFieldGet(this, _TabsAriaController_tabPanelMap, "f")) {
            if (panel === panelToCheck) {
                return tab;
            }
        }
    }
}
_TabsAriaController_logger = new WeakMap(), _TabsAriaController_host = new WeakMap(), _TabsAriaController_element = new WeakMap(), _TabsAriaController_tabPanelMap = new WeakMap(), _TabsAriaController_options = new WeakMap(), _TabsAriaController_mo = new WeakMap(), _TabsAriaController_instances = new WeakSet(), _TabsAriaController_onSlotchange = function _TabsAriaController_onSlotchange() {
    __classPrivateFieldGet(this, _TabsAriaController_tabPanelMap, "f").clear();
    const tabs = [];
    const panels = [];
    for (const child of __classPrivateFieldGet(this, _TabsAriaController_element, "f")?.children ?? []) {
        if (__classPrivateFieldGet(this, _TabsAriaController_options, "f").isTab(child)) {
            tabs.push(child);
            child.role ?? (child.role = 'tab');
        }
        else if (__classPrivateFieldGet(this, _TabsAriaController_options, "f").isPanel(child)) {
            panels.push(child);
            child.role ?? (child.role = 'tabpanel');
        }
    }
    if (tabs.length > panels.length) {
        __classPrivateFieldGet(this, _TabsAriaController_logger, "f").warn('Too many tabs!');
    }
    else if (panels.length > tabs.length) {
        __classPrivateFieldGet(this, _TabsAriaController_logger, "f").warn('Too many panels!');
    }
    while (tabs.length) {
        __classPrivateFieldGet(this, _TabsAriaController_tabPanelMap, "f").set(tabs.shift(), panels.shift());
    }
    __classPrivateFieldGet(this, _TabsAriaController_host, "f").requestUpdate();
};
//# sourceMappingURL=tabs-aria-controller.js.map