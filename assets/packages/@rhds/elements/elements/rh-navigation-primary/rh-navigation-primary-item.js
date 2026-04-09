var _RhNavigationPrimaryItem_instances, _RhNavigationPrimaryItem_highlight, _RhNavigationPrimaryItem_internals, _RhNavigationPrimaryItem_hydrated, _RhNavigationPrimaryItem_detailsToggle;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { consume } from '@lit/context';
import { context } from './context.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import './rh-navigation-primary-item-menu.js';
import { css } from "lit";
const styles = css `*,:after,:before{box-sizing:border-box}[hidden]{display:none!important}:host{display:block;block-size:100%;justify-items:center;align-content:center}:host([hide-at]){display:none}@container (min-width: 320px){:host([hide-at=xs]){display:block}}@container (min-width: 567px){:host([hide-at=sm]){display:block}}@container (min-width: 768px){:host([hide-at=md]){display:block}}@container (min-width: 992px){:host([hide-at=lg]){display:block}}@container (min-width: 1200px){:host([hide-at=xl]){display:block}}:host(:is(:focus,:focus-visible)){outline:none;outline-style:none}#container{--_box-shadow-color:light-dark(#15151533,#0009);display:block}#container,#container details{block-size:100%;inline-size:100%;justify-items:center;align-content:center}:is(#container details) summary{--rh-icon-size:18px;--rh-avatar-size:var(--rh-icon-size);display:flex;list-style:none;gap:var(--rh-space-md,8px)}:is(:is(#container details) summary)::-webkit-details-marker,:is(:is(#container details) summary)::marker{display:none}:is(:is(#container details) summary) rh-icon{aspect-ratio:unset}[icon=caret-down]:is(:is(:is(#container details) summary) rh-icon){--rh-icon-size:10px;color:light-dark(var(--rh-color-gray-40,#a3a3a3),var(--rh-color-icon-subtle));transition:rotate .2s}:is(#container details) #details-content{inline-size:100%}[open]:is(#container details)::details-content{display:contents}:is([open]:is(#container details)::details-content)>*{box-sizing:border-box}@container (min-width: 1200px){[open]:is(#container details){border-block-start-color:var(--rh-color-accent-brand)}}[open]:is(#container details) summary rh-icon[icon=caret-down]{rotate:180deg}:is(#container details):not([open]) #details-content{visibility:hidden}@container (min-width: 1200px){#container.hamburger:not(.compact){border-block-end:4px solid #0000}#container.hamburger:not(.compact):hover{border-block-end-color:var(--rh-color-border-subtle)}#container.hamburger:not(.compact):is(:active,:focus-within,:has(details[open])){border-block-end-color:var(--rh-color-accent-brand)}}#container.dropdown.hamburger details{border-inline-start:var(--rh-border-width-lg,3px) solid #0000;border-inline-end:var(--rh-border-width-sm,1px) solid #0000}:is(#container.dropdown.hamburger details) summary{list-style:none;color:var(--rh-color-text-primary)!important;text-decoration:none!important;text-align:center;text-wrap:nowrap;place-items:center;inline-size:100%;block-size:100%;padding:var(--rh-space-lg,16px) var(--rh-space-xl,24px);cursor:pointer}:is(:is(#container.dropdown.hamburger details) summary):focus-visible,:is(:is(#container.dropdown.hamburger details) summary):hover:focus-visible{outline-offset:-2px;outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default);border-radius:var(--rh-border-radius-default,3px)}[open]:is(#container.dropdown.hamburger details){border-inline-start-color:var(--rh-color-accent-brand);border-inline-end-color:var(--rh-color-border-subtle)}:is([open]:is(#container.dropdown.hamburger details) summary) rh-icon[icon=caret-down]{rotate:180deg}@container (min-width: 1200px){#container.dropdown.hamburger:where(:not(.compact)) details{border-inline:unset}}@container (min-width: 1200px){:is(#container.dropdown.hamburger:where(:not(.compact)) details) summary{block-size:calc(100% + 4px);padding:0 var(--rh-space-lg,16px)}}@container (min-width: 1200px){:is(#container.dropdown.hamburger:where(:not(.compact)) details) #details-content{position:absolute;z-index:-1;background-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));box-shadow:0 2px 4px 0 var(--_box-shadow-color);inset-block-start:100%;inset-inline-start:0;inline-size:100%}}#container.dropdown.standalone details{block-size:100%}:is(#container.dropdown.standalone details) summary{position:relative;z-index:1;block-size:100%;inline-size:max-content;align-items:center;padding:var(--rh-space-md,8px);border-radius:var(--rh-border-radius-default,3px);font-size:var(--rh-font-size-body-text-sm,.875rem);cursor:pointer}@container navigation-primary (min-width: 480px){:is(#container.dropdown.standalone details) summary{padding:var(--rh-space-lg,16px)}}:is(:is(#container.dropdown.standalone details) summary):after{content:"";position:absolute;inset:0;border-block-end:4px solid #0000}:is(:is(#container.dropdown.standalone details) summary):is(:hover,:focus-visible):after{border-block-end-color:var(--rh-color-border-subtle)}:is(:is(#container.dropdown.standalone details) summary):is(:active,:focus-within):after{border-block-end-color:var(--rh-color-accent-brand)}:is(:is(#container.dropdown.standalone details) summary):is(:focus-visible,:hover:focus-visible){outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default);outline-offset:2px}:is(:is(#container.dropdown.standalone details) summary) #summary-text{clip-path:inset(50%);overflow:hidden;position:absolute;block-size:1px;inline-size:1px;white-space:nowrap}:is(#container.dropdown.standalone details) #details-content{position:absolute;z-index:-1;background-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));box-shadow:0 2px 4px 0 var(--_box-shadow-color);inset-block-start:100%;inset-inline-end:0;inline-size:100%;max-block-size:calc(100dvh - var(--_navbar-height));overflow-y:auto}@container (min-width: 1200px){:is(#container.dropdown.standalone details) #details-content{inline-size:fit-content;border-end-end-radius:calc(var(--rh-border-radius-default, 3px)*2);border-end-start-radius:calc(var(--rh-border-radius-default, 3px)*2)}}:is([open]:is(#container.dropdown.standalone details) summary):after{border-block-end-color:var(--rh-color-accent-brand)}#container.link{display:inline-block;block-size:fit-content;border-block-start:none}#container.link ::slotted(a){color:var(--_navigation-link-color,var(--rh-color-text-primary))!important}#container.link ::slotted(:is(a:hover,a:focus-visible,:active)){text-underline-offset:var(--_navigation-link-text-underline-offset,4px)!important;text-decoration-color:var(--_navigation-link-text-decoration-color,light-dark(var(--rh-color-gray-50,#707070),var(--rh-color-gray-40,#a3a3a3)))!important;text-decoration-line:var(--_navigation-link-text-decoration-line,underline)!important;text-decoration-style:var(--_navigation-link-text-decoration-style,dashed)!important;text-decoration-skip-ink:auto!important;color:var(--rh-color-interactive-primary-hover)!important}#container.link.hamburger{block-size:100%}#container.link.hamburger:is(:hover,:focus-visible,:hover:focus-visible,:active){border-block-end-color:#0000}#container.link.hamburger ::slotted(a){display:flex;align-items:center;block-size:calc(100% + 4px);font-size:var(--rh-font-size-body-text-md,1rem);padding:var(--rh-space-lg,16px) var(--rh-space-xl,24px)}#container.link.hamburger ::slotted(a:is(:focus-visible,:hover:focus-visible,:active)){outline-offset:0;outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default);border-radius:var(--rh-border-radius-default,3px)}@container (min-width: 1200px){#container.link.hamburger ::slotted(a){padding:0 var(--rh-space-lg,16px)}#container.link.hamburger:is(:active,:focus-within,:has(details[open])){border-image:unset;border-block-end-color:#0000}}#container.link.standalone ::slotted(a){text-decoration:none;font-size:var(--_navigation-link-font-size,var(--rh-font-size-body-text-sm,.875rem))!important;display:inline-flex;block-size:auto;align-items:center}#container.link.standalone ::slotted(a:is(:focus-visible,:hover:focus-visible,:active)){outline-offset:4px;outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default);border-radius:var(--rh-border-radius-default,3px)}.compact:is(:host([slot=links]) #container){min-inline-size:188px;padding-inline-end:var(--rh-space-xl,24px)}@container navigation-primary (min-width: 1200px){:host([slot=links]) #container{min-inline-size:unset;padding-inline-end:0}}`;
/**
 * A navigation item provides an interactive link or dropdown for the
 * primary navigation bar. It must be placed inside
 * `rh-navigation-primary`. Keyboard users press Enter
 * or Space to open or follow the link. Escape closes and returns focus to the toggle.
 * Link items should contain one `<a>` for an accessible name.
 *
 * @summary Interactive link or dropdown for the primary navigation
 *
 * @fires {Event} toggle - Fires when the dropdown opens or closes. The event
 *   has no custom detail; read the element's `open` property for the new state.
 *
 */
let RhNavigationPrimaryItem = class RhNavigationPrimaryItem extends LitElement {
    constructor() {
        super(...arguments);
        _RhNavigationPrimaryItem_instances.add(this);
        _RhNavigationPrimaryItem_highlight.set(this, false);
        // eslint-disable-next-line no-unused-private-class-members
        _RhNavigationPrimaryItem_internals.set(this, InternalsController.of(this, { role: 'listitem' }));
        _RhNavigationPrimaryItem_hydrated.set(this, false);
        /** Whether the dropdown is currently expanded. Only applies when `variant` is `dropdown`. */
        this.open = false;
        /**
         * Controls the presentation style of the navigation item. must be set to
         * `dropdown` when the item provides an expandable menu, otherwise it
         * should remain `link` for simple anchor-style items. Defaults to `link`.
         */
        this.variant = 'link';
        /**
         * Hides the element below a given container-query breakpoint and reveals it
         * when the navigation is at or above that width. Allows progressive
         * disclosure of navigation items at wider viewports. Avoid hiding critical
         * navigation items, as they will be inaccessible below the breakpoint.
         * Defaults to `undefined`.
         */
        this.hideAt = undefined;
    }
    firstUpdated() {
        // ensure we update initially on client hydration
        const _isHydrated = isServer && !this.hasUpdated;
        if (!_isHydrated) {
            __classPrivateFieldSet(this, _RhNavigationPrimaryItem_hydrated, true, "f");
            const nav = this.closest('rh-navigation-primary');
            if (!nav) {
                this.compact = true; /* default to true if nav returns false */
            }
            else {
                this.compact = nav.offsetWidth < 1200;
            }
            /**
             * SSR Adds the role, but then removes when ElementInternals is hydrated
             * However, axe-dev tools then complains as it doesn't handle Internals correctly
             * So.... lets readd it for brevity, then when axe decides to fix their stuff,
             * we can remove at a later date.
             */
            this.role = 'listitem';
        }
    }
    render() {
        const { variant = '' } = this;
        const compact = this.compact ?? true;
        const hamburger = (!this.getAttribute('slot'));
        return html `
      <div id="container" class="${classMap({
            [variant]: true,
            highlight: !!__classPrivateFieldGet(this, _RhNavigationPrimaryItem_highlight, "f"),
            compact,
            standalone: !hamburger,
            hamburger: hamburger,
            dehydrated: !__classPrivateFieldGet(this, _RhNavigationPrimaryItem_hydrated, "f"),
        })}">${this.variant === 'dropdown' ? html `
        <details @toggle="${__classPrivateFieldGet(this, _RhNavigationPrimaryItem_instances, "m", _RhNavigationPrimaryItem_detailsToggle)}" ?open="${this.open}">
          <summary>${hamburger ? '' : html `
            <!--
              Use this slot to provide a custom icon before the summary text,
              typically an \`<rh-icon>\` or \`<rh-avatar>\` element. For
              accessibility, the icon is treated as decorative; the summary
              slot provides the accessible name for the toggle.
            -->
            <slot name="icon">${!this.icon ? '' : html `
              <rh-icon icon="${ifDefined(this.icon)}" set="${ifDefined(this.iconSet)}"></rh-icon>`}
            </slot>`}
            <div id="summary-text">
              <!--
                Use this slot to provide custom label content for the dropdown
                toggle, typically a \`<span>\` with visible text. For
                accessibility, this content provides the accessible name read
                by screen readers; it must not be empty.
              -->
              <slot name="summary">${this.summary}</slot>
            </div>
            <rh-icon icon="caret-down" set="microns" ?hidden="${!hamburger}"></rh-icon>
          </summary>
          <rh-navigation-primary-item-menu id="details-content">
            <!--
              Use this slot for dropdown menu content such as headings,
              link lists, and structured columns. For accessibility, content
              is hidden from assistive technology until the dropdown is
              opened via the disclosure widget.
            -->
            <slot></slot>
          </rh-navigation-primary-item-menu>
        </details>` : html `
        <!--
          Use this slot for link variant content, typically a single \`<a>\`
          or \`<rh-navigation-link>\` element. For accessibility, the link
          text provides the accessible name for this navigation item.
        -->
        <slot></slot>`}
      </div>
    `;
    }
    /** Sets `open` to `false`; only affects `dropdown` items. */
    async hide() {
        this.open = false;
        this.requestUpdate();
        await this.updateComplete;
    }
    /** Sets `open` to `true`; only affects `dropdown` items. */
    async show() {
        this.open = true;
        this.requestUpdate();
        await this.updateComplete;
    }
};
_RhNavigationPrimaryItem_highlight = new WeakMap();
_RhNavigationPrimaryItem_internals = new WeakMap();
_RhNavigationPrimaryItem_hydrated = new WeakMap();
_RhNavigationPrimaryItem_instances = new WeakSet();
_RhNavigationPrimaryItem_detailsToggle = function _RhNavigationPrimaryItem_detailsToggle() {
    this.open = this._details.open;
    this.dispatchEvent(new Event('toggle', { bubbles: true }));
};
RhNavigationPrimaryItem.styles = [styles];
__decorate([
    query('details')
], RhNavigationPrimaryItem.prototype, "_details", void 0);
__decorate([
    query('summary')
], RhNavigationPrimaryItem.prototype, "_summary", void 0);
__decorate([
    consume({ context, subscribe: true }),
    state()
], RhNavigationPrimaryItem.prototype, "compact", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhNavigationPrimaryItem.prototype, "open", void 0);
__decorate([
    property()
], RhNavigationPrimaryItem.prototype, "summary", void 0);
__decorate([
    property()
], RhNavigationPrimaryItem.prototype, "variant", void 0);
__decorate([
    property({ reflect: true, attribute: 'hide-at' })
], RhNavigationPrimaryItem.prototype, "hideAt", void 0);
__decorate([
    property()
], RhNavigationPrimaryItem.prototype, "icon", void 0);
__decorate([
    property({ attribute: 'icon-set' })
], RhNavigationPrimaryItem.prototype, "iconSet", void 0);
RhNavigationPrimaryItem = __decorate([
    themable,
    customElement('rh-navigation-primary-item')
], RhNavigationPrimaryItem);
export { RhNavigationPrimaryItem };
//# sourceMappingURL=rh-navigation-primary-item.js.map