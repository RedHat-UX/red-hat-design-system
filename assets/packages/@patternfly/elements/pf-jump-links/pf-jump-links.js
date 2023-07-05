import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ScrollSpyController } from '@patternfly/pfe-core/controllers/scroll-spy-controller.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
import './pf-jump-links-item.js';
import { css } from "lit";
const style = css `[hidden]{display:none!important}:host{display:block}#container{display:flex;flex-wrap:wrap;font-family:var(--pf-global--FontFamily--sans-serif, "RedHatTextUpdated", "Overpass", overpass, helvetica, arial, sans-serif);font-size:var(--pf-global--FontSize--md, 16px);font-weight:var(--pf-global--FontWeight--normal,400)}slot{position:relative;display:var(--pf-c-jump-links__list--Display,flex);flex-direction:var(--pf-c-jump-links__list--FlexDirection,row);padding-block-start:var(--pf-c-jump-links__list--PaddingTop,0);padding-inline-end:var(--pf-c-jump-links__list--PaddingRight,var(--pf-global--spacer--md,1rem));padding-block-end:var(--pf-c-jump-links__list--PaddingBottom,0);padding-inline-start:var(--pf-c-jump-links__list--PaddingLeft,var(--pf-global--spacer--md,1rem));visibility:var(--pf-c-jump-links__list--Visibility,visible)}slot::before{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;content:"";border:solid var(--pf-c-jump-links__list--before--BorderColor,var(--pf-global--BorderColor--100,#d2d2d2));border-width:var(--pf-c-jump-links__list--before--BorderTopWidth,var(--pf-global--BorderWidth--sm,1px)) var(--pf-c-jump-links__list--before--BorderRightWidth,0) var(--pf-c-jump-links__list--before--BorderBottomWidth,0) var(--pf-c-jump-links__list--before--BorderLeftWidth,0)}:host([vertical]) #container{--pf-c-jump-links__list--PaddingTop:var(--pf-c-jump-links--m-vertical__list--PaddingTop,\n    var(--pf-global--spacer--md, 1rem));--pf-c-jump-links__list--PaddingRight:var(--pf-c-jump-links--m-vertical__list--PaddingRight, 0);--pf-c-jump-links__list--PaddingBottom:var(--pf-c-jump-links--m-vertical__list--PaddingBottom\n    var(--pf-global--spacer--md, 1rem));--pf-c-jump-links__list--PaddingLeft:var(--pf-c-jump-links--m-vertical__list--PaddingLeft, 0);--pf-c-jump-links__list--before--BorderTopWidth:var(--pf-c-jump-links--m-vertical__list--before--BorderTopWidth, 0);--pf-c-jump-links__list--before--BorderLeftWidth:var(--pf-c-jump-links--m-vertical__list--before--BorderLeftWidth, \n    var(--pf-global--BorderWidth--sm, 1px));--pf-c-jump-links__item--m-current__link--before--BorderTopWidth:var(--pf-c-jump-links--m-vertical__item--m-current__link--before--BorderTopWidth, 0);--pf-c-jump-links__item--m-current__link--before--BorderLeftWidth:var(--pf-c-jump-links--m-vertical__item--m-current__link--before--BorderLeftWidth,\n    var(--pf-global--BorderWidth--lg, 3px));--pf-c-jump-links__list--FlexDirection:var(--pf-c-jump-links--m-vertical__list--FlexDirection, column)}:host([centered]) #container{justify-content:center}:host([centered]) #label{text-align:center}:host(:not([expandable])) #label{display:block;width:100%;margin-block-end:var(--pf-c-jump-links__label--MarginBottom,var(--pf-global--spacer--md,1rem))}:host([expandable]){--pf-c-jump-links--m-expanded__toggle--MarginBottom:calc(var(--pf-c-jump-links__toggle--MarginBottom--base,\n      calc(-1 * var(--pf-global--spacer--form-element, 0.375rem))\n    ) + var(--pf-global--spacer--md, 1rem))}summary{display:block;margin-block-start:var(--pf-c-jump-links__toggle--MarginTop,calc(-1 * var(--pf-global--spacer--form-element,0.375rem)));margin-block-end:var(--pf-c-jump-links__toggle--MarginBottom,var(--pf-c-jump-links__toggle--MarginBottom--base,calc(-1 * var(--pf-global--spacer--form-element,0.375rem))));margin-inline-start:var(--pf-c-jump-links__toggle--MarginLeft);color:var(--pf-c-jump-links__toggle-text--Color,var(--pf-global--Color--100,#151515));padding:var(--pf-c-button--PaddingTop,var(--pf-global--spacer--form-element,.375rem)) var(--pf-c-button--PaddingRight,var(--pf-global--spacer--md,1rem)) var(--pf-c-button--PaddingBottom,var(--pf-global--spacer--form-element,.375rem)) var(--pf-c-button--PaddingLeft,var(--pf-global--spacer--md,1rem))}summary pf-icon{rotate:var(--pf-c-jump-links__toggle-icon--Rotate,0);transition:var(--pf-c-jump-links__toggle-icon--Transition,\n    var(--pf-global--Transition, all 250ms cubic-bezier(.42, 0, .58, 1)))}summary span{margin-inline-start:var(--pf-c-jump-links__toggle-text--MarginLeft,var(--pf-global--spacer--md,1rem))}:host([expanded]) #container{--pf-c-jump-links__toggle--MarginBottom:var(--pf-c-jump-links--m-expanded__toggle--MarginBottom,\n    calc(var(--pf-c-jump-links__toggle--MarginBottom--base,\n      calc(-1 * var(--pf-global--spacer--form-element, 0.375rem))) +\n      var(--pf-global--spacer--md, 1rem)));--pf-c-jump-links__toggle-icon--Rotate:var(--pf-c-jump-links--m-expanded__toggle-icon--Rotate,\n    90deg);--pf-c-jump-links__toggle-icon--Color:var(--pf-c-jump-links--m-expanded__toggle-icon--Color,\n    var(--pf-global--Color--100, #151515));--pf-c-jump-links__toggle-icon--Rotate:90deg}`;
/**
 * **Jump links** allow users to navigate to sections within a page.
 *
 * @fires toggle - when the `expanded` disclosure widget is toggled
 * @slot - Place pf-jump-links-items here
 *
 * @cssprop --pf-c-jump-links__list--Display
 * @cssprop --pf-c-jump-links__list--FlexDirection
 * @cssprop --pf-c-jump-links__list--PaddingTop -- padding around the list of links
 * @cssprop --pf-c-jump-links__list--PaddingRight
 * @cssprop --pf-c-jump-links__list--PaddingBottom
 * @cssprop --pf-c-jump-links__list--PaddingLeft
 * @cssprop --pf-c-jump-links__list--Visibility
 * @cssprop --pf-c-jump-links__list--before--BorderColor
 * @cssprop --pf-c-jump-links__list--before--BorderTopWidth
 * @cssprop --pf-c-jump-links__list--before--BorderRightWidth
 * @cssprop --pf-c-jump-links__list--before--BorderBottomWidth
 * @cssprop --pf-c-jump-links__list--before--BorderLeftWidth
 * @cssprop --pf-c-jump-links__toggle--MarginBottom--base
 *
 * @cssprop --pf-c-jump-links__toggle--MarginTop -- padding around the expandable jump links disclosure widget.
 * @cssprop --pf-c-jump-links__toggle--MarginBottom
 * @cssprop --pf-c-jump-links__toggle--MarginBottom--base
 * @cssprop --pf-c-jump-links__toggle--MarginLeft
 * @cssprop --pf-c-jump-links__toggle-text--Color
 * @cssprop --pf-c-button--PaddingTop -- padding around the expandable jump links disclosure widget.
 * @cssprop --pf-c-button--PaddingRight
 * @cssprop --pf-c-button--PaddingBottom
 * @cssprop --pf-c-button--PaddingLeft
 *
 * @cssprop --pf-c-jump-links__toggle-icon--Rotate
 * @cssprop --pf-c-jump-links__toggle-icon--Transition
 * @cssprop --pf-c-jump-links__toggle-text--MarginLeft
 *
 * @cssprop --pf-c-jump-links--m-expanded__toggle--MarginBottom
 * @cssprop --pf-c-jump-links--m-expanded__toggle-icon--Rotate
 * @cssprop --pf-c-jump-links--m-expanded__toggle-icon--Color
 *
 * @cssprop --pf-c-jump-links--m-vertical__list--PaddingTop
 * @cssprop --pf-c-jump-links--m-vertical__list--PaddingRight
 * @cssprop --pf-c-jump-links--m-vertical__list--PaddingBottom
 * @cssprop --pf-c-jump-links--m-vertical__list--PaddingLeft
 * @cssprop --pf-c-jump-links--m-vertical__list--before--BorderTopWidth
 * @cssprop --pf-c-jump-links--m-vertical__list--before--BorderLeftWidth
 * @cssprop --pf-c-jump-links--m-vertical__item--m-current__link--before--BorderTopWidth
 * @cssprop --pf-c-jump-links--m-vertical__item--m-current__link--before--BorderLeftWidth
 * @cssprop --pf-c-jump-links--m-vertical__list--FlexDirection
 */
let PfJumpLinks = class PfJumpLinks extends LitElement {
    constructor() {
        super(...arguments);
        /** Whether the element features a disclosure widget around the nav items */
        this.expandable = false;
        /** Whether the expandable element's disclosure widget is expanded */
        this.expanded = false;
        /** Whether the layout of children is vertical or horizontal. */
        this.vertical = false;
        /** Whether to center children. */
        this.centered = false;
        /** Offset to add to the scroll position, potentially for a masthead which content scrolls under. */
        this.offset = 0;
        this.#initialized = false;
        this.#rovingTabindexController = new RovingTabindexController(this);
        this.#spy = new ScrollSpyController(this, {
            rootMargin: `${this.offset}px 0px 0px 0px`,
            tagNames: ['pf-jump-links-item'],
        });
    }
    static { this.styles = [style]; }
    #initialized;
    #rovingTabindexController;
    #spy;
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('select', this.#onSelect);
    }
    updated(changed) {
        if (changed.has('offset')) {
            this.#spy.rootMargin = `${this.offset ?? 0}px 0px 0px 0px`;
        }
    }
    render() {
        return html `
      <nav id="container">${this.expandable ? html `
        <details ?open="${this.expanded}" @toggle="${this.#onToggle}">
          <summary>
            <pf-icon icon="chevron-right"></pf-icon>
            <span id="label">${this.label}</span>
          </summary>
          <slot role="listbox" @slotchange="${this.#updateItems}"></slot>
        </details>` : html `
        <span id="label">${this.label}</span>
        <slot role="listbox" @slotchange="${this.#updateItems}"></slot>`}
      </nav>
    `;
    }
    #updateItems() {
        const items = Array.from(this.querySelectorAll(':is(pf-jump-links-item, pf-jump-links-list)'))
            .flatMap(i => [
            ...i.shadowRoot?.querySelectorAll('a') ?? [],
            ...i.querySelectorAll('a') ?? [],
        ]);
        if (this.#initialized) {
            this.#rovingTabindexController.updateItems(items);
        }
        else {
            this.#rovingTabindexController.initItems(items);
            this.#initialized = true;
        }
    }
    async #onSelect(event) {
        this.#spy.setActive(event.target);
    }
    #onToggle(event) {
        if (event.target instanceof HTMLDetailsElement) {
            this.expanded = event.target.open;
        }
        this.dispatchEvent(new Event('toggle'));
    }
};
__decorate([
    property({ reflect: true, type: Boolean })
], PfJumpLinks.prototype, "expandable", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfJumpLinks.prototype, "expanded", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfJumpLinks.prototype, "vertical", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfJumpLinks.prototype, "centered", void 0);
__decorate([
    property({ type: Number })
], PfJumpLinks.prototype, "offset", void 0);
__decorate([
    property()
], PfJumpLinks.prototype, "label", void 0);
PfJumpLinks = __decorate([
    customElement('pf-jump-links')
], PfJumpLinks);
export { PfJumpLinks };
//# sourceMappingURL=pf-jump-links.js.map