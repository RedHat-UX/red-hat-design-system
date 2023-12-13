var _RhMenu_instances, _RhMenu_tabindex, _RhMenu_initItems;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { css } from "lit";
const styles = css `:host{display:contents}slot{display:inline-flex;align-items:stretch;flex-direction:column;width:max-content}.dark::slotted(a){color:var(--rh-color-interactive-blue-lightest,#b9dafc)!important;padding:5px!important}.dark::slotted(a:hover){color:var(--rh-color-interactive-blue-lighter,#92c5f9)}.dark::slotted(a:visited){color:var(--rh-color-interactive-purple-lighter,#b6a6e9)!important}.dark::slotted(a:visited:hover){color:var(--rh-color-interactive-purple-lighter,#b6a6e9)!important}`;
export class MenuToggleEvent extends Event {
    constructor(open, menu) {
        super('toggle', { bubbles: true });
        this.open = open;
        this.menu = menu;
    }
}
/**
 * Menu
 * @slot - menu items
 */
let RhMenu = class RhMenu extends LitElement {
    constructor() {
        super(...arguments);
        _RhMenu_instances.add(this);
        _RhMenu_tabindex.set(this, new RovingTabindexController(this));
    }
    get activeItem() {
        return __classPrivateFieldGet(this, _RhMenu_tabindex, "f").activeItem;
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId('menu'));
        this.setAttribute('role', 'menu'); // TODO: use InternalsController.role when support/polyfill is better
        __classPrivateFieldGet(this, _RhMenu_instances, "m", _RhMenu_initItems).call(this);
    }
    render() {
        const { on = '' } = this;
        return html `
      <slot part="menu" class="${classMap({ [on]: !!on })}"></slot>
    `;
    }
    activateItem(item) {
        __classPrivateFieldGet(this, _RhMenu_tabindex, "f").updateActiveItem(item);
        __classPrivateFieldGet(this, _RhMenu_tabindex, "f").focusOnItem(item);
    }
};
_RhMenu_tabindex = new WeakMap(), _RhMenu_instances = new WeakSet(), _RhMenu_initItems = function _RhMenu_initItems() {
    const items = Array.from(this.children)
        .map(getItemElement)
        .filter((x) => x instanceof HTMLElement);
    items.forEach(item => item?.setAttribute('role', 'menuitem'));
    __classPrivateFieldGet(this, _RhMenu_tabindex, "f").initItems(items);
    this.requestUpdate();
};
RhMenu.styles = [styles];
__decorate([
    colorContextConsumer()
], RhMenu.prototype, "on", void 0);
RhMenu = __decorate([
    customElement('rh-menu')
], RhMenu);
export { RhMenu };
/**
 * Given an element, returns self, or child that is not an rh-tooltip
 */
function getItemElement(element) {
    return (element.localName !== 'rh-tooltip' ? element
        : element.querySelector(':not([slot=content])'));
}
//# sourceMappingURL=rh-menu.js.map