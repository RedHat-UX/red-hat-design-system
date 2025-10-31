var _RhMenuDropdown_instances, _RhMenuDropdown_items_get, _RhMenuDropdown_outsideClick, _RhMenuDropdown_validateSlotContent, _RhMenuDropdown_tabindex, _RhMenuDropdown_float, _RhMenuDropdown_toggleMenu, _RhMenuDropdown_focusFirstItem, _RhMenuDropdown_onToggleKeydown, _RhMenuDropdown_handleSelection, _RhMenuDropdown_onSelect, _RhMenuDropdown_onKeyDown, _RhMenuDropdown_onFocusOut, _RhMenuDropdown_positionMenu;
var RhMenuDropdown_1;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { queryAll } from 'lit/decorators/query-all.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { FloatingDOMController } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-menu/rh-menu.js';
import { RhMenuItem } from '../rh-menu/rh-menu-item.js';
import { css } from "lit";
const styles = css `:host{--_border:var(--rh-border-width-sm,1px) solid light-dark(var(--rh-color-gray-30,#c7c7c7),var(--rh-color-gray-50,#707070));--_color:var(--rh-color-text-primary);position:relative;display:inline-block}#menu-list{position:absolute;padding:var(--rh-space-md,8px) 0;left:0;top:0;z-index:1000;min-inline-size:18.5rem;max-inline-size:100%;border-radius:var(--rh-border-radius-default,3px);border:var(--_border);background:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));box-shadow:var(--rh-box-shadow-md,0 4px 6px 1px #15151540);transition:opacity .3s cubic-bezier(.54,1.5,.38,1.11) 0s;translate:var(--_floating-content-translate)}.visible{display:block}::slotted([slot=toggle-label]){color:var(--_color);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-body-text-md,1rem)!important;font-style:normal;font-weight:var(--rh-font-weight-body-text-regular,400);line-height:var(--rh-line-height-code,1.5)}#menu-toggle{--_interactive-border-color:light-dark(var(--rh-color-accent-base-on-light,#06c),var(--rh-color-accent-base-on-dark,#92c5f9));color:var(--_color);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-body-text-md,1rem);font-style:normal;font-weight:var(--rh-font-weight-body-text-regular,400);line-height:var(--rh-line-height-code,1.5);inline-size:100%;padding:var(--rh-space-sm,6px) var(--rh-space-lg,16px);display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;border-radius:var(--rh-border-radius-default,3px);background:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));border:none}#menu-toggle .action-icon rh-icon{--rh-icon-size:12px;padding-inline-start:var(--rh-space-md,8px)}#menu-toggle .info-section{display:flex;align-items:center;justify-content:flex-start}#menu-toggle.boxed{box-shadow:inset 0 0 0 1px light-dark(var(--rh-color-gray-30,#c7c7c7),var(--rh-color-gray-50,#707070))}#menu-toggle.boxed:not(.open):hover{box-shadow:inset 0 0 0 1px var(--_interactive-border-color)}#menu-toggle.boxed:not(.open):active{box-shadow:inset 0 0 0 var(--rh-length-3xs,2px) var(--_interactive-border-color)}#menu-toggle.boxed:not(.open):focus{outline:var(--rh-length-3xs,2px) solid var(--_interactive-border-color);outline-offset:var(--rh-length-3xs,2px)}#menu-toggle.boxed.open{box-shadow:inset 0 0 0 var(--rh-length-3xs,2px) var(--_interactive-border-color)}#menu-toggle.boxed.open:focus{outline:var(--rh-length-3xs,2px) solid var(--_interactive-border-color);outline-offset:var(--rh-length-3xs,2px)}#menu-toggle.compact{padding:var(--rh-space-md,8px)}#menu-toggle.compact.open:not(.boxed),#menu-toggle.compact:not(.boxed):active,#menu-toggle.compact:not(.boxed):focus,#menu-toggle.compact:not(.boxed):hover{background-color:light-dark(var(--rh-color-surface-lighter,#f2f2f2),var(--rh-color-surface-darker,#1f1f1f))}#menu-toggle.compact:not(.boxed):active,#menu-toggle.compact:not(.boxed):focus{box-shadow:inset 0 0 0 var(--rh-length-3xs,2px) var(--_interactive-border-color)}#menu-toggle.disabled{pointer-events:none;cursor:not-allowed;background:light-dark(var(--rh-color-gray-30,#c7c7c7),var(--rh-color-gray-40,#a3a3a3))}#menu-toggle.disabled:active,#menu-toggle.disabled:focus,#menu-toggle.disabled:hover{box-shadow:none}#menu-dropdown-container{inline-size:100%;position:relative}::slotted(hr){border:0;border-top:var(--_border);inline-size:100%}::slotted(rh-icon){margin-inline-end:var(--rh-space-md,8px)}rh-menu::part(menu){inline-size:100%}:host([aria-disabled=true]){pointer-events:none;cursor:not-allowed}:host([disabled]) .action-icon rh-icon,:host([disabled]) ::slotted([slot=toggle-label]){color:light-dark(var(--rh-color-gray-50,#707070),var(--rh-color-gray-60,#4d4d4d))}`;
/** Fired when a user selects an action or link from the menu */
export class MenuDropdownSelectEvent extends Event {
    constructor(selectedItem, text) {
        super('select', { bubbles: true, composed: true });
        this.selectedItem = selectedItem;
        this.text = text;
    }
}
/**
 * A menu dropdown presents a list of actions or links in a vertically stacked menu,
 * appearing when a user interacts with a toggle button.
 *
 * @summary A collapsible menu for presenting a list of options or actions
 *
 * @alias menu-dropdown
 */
let RhMenuDropdown = RhMenuDropdown_1 = class RhMenuDropdown extends LitElement {
    constructor() {
        super(...arguments);
        _RhMenuDropdown_instances.add(this);
        /**
         * whether the dropdown is currently open.
         */
        this.open = false;
        /**
         * Disables user interaction with the dropdown. When true, the dropdown cannot
         * be opened or interacted with, and appears visually disabled.
         */
        this.disabled = false;
        /**
         * Provides an accessible name for the dropdown's trigger, improving screen reader support.
         * This label is announced to assistive technologies to describe the purpose of
         * the compact menu dropdown.
        */
        this.accessibleLabel = 'Toggle menu';
        _RhMenuDropdown_tabindex.set(this, RovingTabindexController.of(this, {
            getItems: () => __classPrivateFieldGet(this, _RhMenuDropdown_instances, "a", _RhMenuDropdown_items_get),
        }));
        _RhMenuDropdown_float.set(this, new FloatingDOMController(this, {
            content: () => this.menuList,
            invoker: () => this.menuToggleButton,
        }));
    }
    connectedCallback() {
        super.connectedCallback();
        RhMenuDropdown_1.instances.add(this);
    }
    disconnectedCallback() {
        RhMenuDropdown_1.instances.delete(this);
    }
    firstUpdated() {
        this.updateComplete.then(() => {
            __classPrivateFieldGet(this, _RhMenuDropdown_instances, "m", _RhMenuDropdown_validateSlotContent).call(this);
        });
    }
    /**
    * Moves focus to the currently active (focused) item.
    */
    focus() {
        __classPrivateFieldGet(this, _RhMenuDropdown_tabindex, "f").items[__classPrivateFieldGet(this, _RhMenuDropdown_tabindex, "f").atFocusedItemIndex]?.focus();
    }
    render() {
        const { alignment, anchor, styles, open } = __classPrivateFieldGet(this, _RhMenuDropdown_float, "f");
        return html `
      <div @focusout=${__classPrivateFieldGet(this, _RhMenuDropdown_instances, "m", _RhMenuDropdown_onFocusOut)} id="menu-dropdown-container">
        <button id="menu-toggle"
                type="button"
                aria-haspopup="menu"
                aria-expanded="${this.open}"
                @click="${__classPrivateFieldGet(this, _RhMenuDropdown_instances, "m", _RhMenuDropdown_toggleMenu)}"
                aria-controls="menu-list"
                aria-disabled="${this.disabled}"
                @keydown="${__classPrivateFieldGet(this, _RhMenuDropdown_instances, "m", _RhMenuDropdown_onToggleKeydown)}"
                class="${classMap({
            boxed: this.variant !== 'borderless',
            compact: this.layout === 'compact',
            disabled: this.disabled,
            open: this.open,
        })}">
            ${this.layout === 'compact' ?
            html `<rh-icon set="ui" accessible-label=${this.accessibleLabel} icon="ellipsis-vertical-fill"></rh-icon>`
            : html ` 
              <span class="info-section"> 
                <!-- Use this slot for the toggle label. Keep toggle labels short and succinct. -->
                <slot name="toggle-label"></slot>
              </span>
              <span class="action-icon">
                <rh-icon set="microns" icon="${this.open ? 'caret-up' : 'caret-down'}"></rh-icon>
              </span>
              `}
        </button>
        <div id="menu-list"
             ?hidden=${!this.open}
             @click=${__classPrivateFieldGet(this, _RhMenuDropdown_instances, "m", _RhMenuDropdown_onSelect)}
             style="${styleMap(styles)}"
             class="${classMap({ [anchor]: !!anchor, [alignment]: !!alignment, open })}"
             @keydown=${__classPrivateFieldGet(this, _RhMenuDropdown_instances, "m", _RhMenuDropdown_onKeyDown)}>
          <rh-menu role="menu" aria-labelledby="menu-toggle">
            <!-- 
              Use this slot to provide the menu content. Use the "rh-menu" component 
              for the menu panel, and use "rh-menu-items" to define the individual menu items.
              To organize menu items into groups, use the "rh-menu-item-group" component.
            -->
            <slot></slot>
          </rh-menu>
        </div>
      </div>
    
    `;
    }
    get items() {
        if (!isServer) {
            return Array.from(this.querySelectorAll('rh-menu-item'));
        }
        else {
            return [];
        }
    }
};
_RhMenuDropdown_tabindex = new WeakMap();
_RhMenuDropdown_float = new WeakMap();
_RhMenuDropdown_instances = new WeakSet();
_RhMenuDropdown_items_get = function _RhMenuDropdown_items_get() {
    return this.items;
};
_RhMenuDropdown_outsideClick = function _RhMenuDropdown_outsideClick(event) {
    const path = event.composedPath();
    if (!path.includes(this)) {
        if (this.open) {
            this.open = false;
        }
    }
};
_RhMenuDropdown_validateSlotContent = function _RhMenuDropdown_validateSlotContent() {
    this.slotElement?.forEach((slot) => {
        const assignedElements = slot.assignedElements({ flatten: true });
        assignedElements.forEach(el => {
            if (el instanceof HTMLHRElement) {
                el.inert = true;
            }
        });
    });
};
_RhMenuDropdown_toggleMenu = function _RhMenuDropdown_toggleMenu() {
    if (!this.disabled) {
        this.open = !this.open;
        if (this.open) {
            this.updateComplete.then(async () => {
                await __classPrivateFieldGet(this, _RhMenuDropdown_instances, "m", _RhMenuDropdown_positionMenu).call(this);
                __classPrivateFieldGet(this, _RhMenuDropdown_instances, "m", _RhMenuDropdown_focusFirstItem).call(this);
            });
        }
        else {
            __classPrivateFieldGet(this, _RhMenuDropdown_float, "f").hide();
        }
    }
};
_RhMenuDropdown_focusFirstItem = function _RhMenuDropdown_focusFirstItem() {
    this.items[0]?.focus();
};
_RhMenuDropdown_onToggleKeydown = function _RhMenuDropdown_onToggleKeydown(e) {
    if (!this.disabled) {
        if (['Enter', ' ', 'ArrowDown'].includes(e.key)) {
            e.preventDefault();
            this.open = true;
            this.updateComplete.then(async () => {
                await __classPrivateFieldGet(this, _RhMenuDropdown_instances, "m", _RhMenuDropdown_positionMenu).call(this);
                __classPrivateFieldGet(this, _RhMenuDropdown_instances, "m", _RhMenuDropdown_focusFirstItem).call(this);
            });
        }
    }
};
_RhMenuDropdown_handleSelection = function _RhMenuDropdown_handleSelection(target) {
    this.open = false;
    this.menuToggleButton.focus();
    this.dispatchEvent(new MenuDropdownSelectEvent(target, target.textContent ? target.textContent : ''));
    if (target.href) {
        if (target.external) {
            window.open(target.href, '_blank', 'noopener,noreferrer');
        }
        else {
            window.location.href = target.href;
        }
    }
};
_RhMenuDropdown_onSelect = function _RhMenuDropdown_onSelect(event) {
    if (event.target instanceof RhMenuItem) {
        __classPrivateFieldGet(this, _RhMenuDropdown_instances, "m", _RhMenuDropdown_handleSelection).call(this, event.target);
    }
};
_RhMenuDropdown_onKeyDown = function _RhMenuDropdown_onKeyDown(event) {
    if (event.key === 'Escape') {
        if (this.open) {
            this.open = false;
            this.menuToggleButton.focus();
        }
    }
    else if (event.target instanceof RhMenuItem
        && (event.key === 'Enter' || event.key === ' ')
        && !event.target.disabled) {
        event.preventDefault();
        __classPrivateFieldGet(this, _RhMenuDropdown_instances, "m", _RhMenuDropdown_handleSelection).call(this, event.target);
    }
};
_RhMenuDropdown_onFocusOut = function _RhMenuDropdown_onFocusOut(event) {
    const relatedTarget = event.relatedTarget;
    // If the next focused element is outside this component, close the dropdown
    if (relatedTarget !== this.menuToggleButton
        && relatedTarget !== this.menuList
        && relatedTarget && !this.contains(relatedTarget)) {
        if (this.open) {
            this.open = false;
        }
    }
    // Also close if nothing is focused (focus left the document)
    if (!relatedTarget) {
        this.open = false;
    }
};
_RhMenuDropdown_positionMenu = async function _RhMenuDropdown_positionMenu() {
    await this.updateComplete;
    const placement = 'bottom-start';
    const mainAxis = 4;
    const offset = { mainAxis: mainAxis, alignmentAxis: 0 };
    await __classPrivateFieldGet(this, _RhMenuDropdown_float, "f").show({ offset: offset, placement: placement });
};
RhMenuDropdown.styles = [styles];
RhMenuDropdown.instances = new Set();
RhMenuDropdown.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
(() => {
    if (!isServer) {
        document.addEventListener('click', function (event) {
            for (const instance of RhMenuDropdown_1.instances) {
                __classPrivateFieldGet(instance, _RhMenuDropdown_instances, "m", _RhMenuDropdown_outsideClick).call(instance, event);
            }
        });
    }
})();
__decorate([
    property({ type: Boolean, reflect: true })
], RhMenuDropdown.prototype, "open", void 0);
__decorate([
    property({ reflect: true })
], RhMenuDropdown.prototype, "variant", void 0);
__decorate([
    property({ attribute: 'layout', reflect: true })
], RhMenuDropdown.prototype, "layout", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhMenuDropdown.prototype, "disabled", void 0);
__decorate([
    property({ attribute: 'accessible-label', reflect: true })
], RhMenuDropdown.prototype, "accessibleLabel", void 0);
__decorate([
    query('#menu-toggle')
], RhMenuDropdown.prototype, "menuToggleButton", void 0);
__decorate([
    query('#menu-list')
], RhMenuDropdown.prototype, "menuList", void 0);
__decorate([
    queryAll('slot')
], RhMenuDropdown.prototype, "slotElement", void 0);
RhMenuDropdown = RhMenuDropdown_1 = __decorate([
    customElement('rh-menu-dropdown')
], RhMenuDropdown);
export { RhMenuDropdown };
//# sourceMappingURL=rh-menu-dropdown.js.map