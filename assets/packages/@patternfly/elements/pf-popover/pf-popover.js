var _PfPopover_instances, _PfPopover_referenceTrigger, _PfPopover_float, _PfPopover_slots, _PfPopover_outsideClick;
var PfPopover_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, nothing, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FloatingDOMController } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { bound } from '@patternfly/pfe-core/decorators/bound.js';
import { ComposedEvent, StringListConverter } from '@patternfly/pfe-core/core.js';
import { observed } from '@patternfly/pfe-core/decorators/observed.js';
import '@patternfly/elements/pf-button/pf-button.js';
import { css } from "lit";
const styles = css `:host{display:inline;--_floating-arrow-size:var(--pf-c-popover__arrow--Width, var(--pf-global--arrow--width-lg, 1.5625rem));--_header-text-color:var(--pf-c-popover__title-text--Color, inherit);--_header-icon-color:var(--pf-c-popover__title-icon--Color, var(--pf-global--Color--100, #151515));--_animation-speed:var(--pf-popover--animation-speed, 300ms);--_z-index:var(--pf-popover--z-index, 9999)}.visually-hidden{position:fixed;top:0;left:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}[hidden]{display:none!important}#container{display:inline-flex;position:relative}#trigger{display:inline-block;position:relative}#arrow{display:block;position:absolute;background-color:var(--pf-c-popover__arrow--BackgroundColor,var(--pf-global--BackgroundColor--100,#fff));box-shadow:var(--pf-c-popover__arrow--BoxShadow,var(--pf-global--BoxShadow--lg,0 .5rem 1rem 0 rgba(3,3,3,.16),0 0 .375rem 0 rgba(3,3,3,.08)));content:'';height:var(--pf-c-popover__arrow--Height,var(--pf-global--arrow--width-lg,1.5625rem));width:var(--pf-c-popover__arrow--Width,var(--pf-global--arrow--width-lg,1.5625rem));rotate:45deg;z-index:-1;pointer-events:none}#popover{display:block;position:absolute;opacity:0;z-index:-1;transition:visibility 0s,opacity var(--_animation-speed) cubic-bezier(.54, 1.5, .38, 1.11) 0s;left:0;top:0;translate:var(--_floating-content-translate);box-shadow:var(--pf-c-popover--BoxShadow,var(--pf-global--BoxShadow--lg,0 .5rem 1rem 0 rgba(3,3,3,.16),0 0 .375rem 0 rgba(3,3,3,.08)));border:0;padding:0;visibility:hidden}#popover[open]{opacity:1;z-index:var(--_z-index);visibility:visible}[part=content]{position:relative;padding:var(--pf-c-popover__content--PaddingTop,var(--pf-global--spacer--md,1rem)) var(--pf-c-popover__content--PaddingRight,var(--pf-global--spacer--md,1rem)) var(--pf-c-popover__content--PaddingBottom,var(--pf-global--spacer--md,1rem)) var(--pf-c-popover__content--PaddingLeft,var(--pf-global--spacer--md,1rem));word-break:break-word;line-height:var(--pf-c-popover--line-height, 1.5);font-size:var(--pf-c-popover__content--FontSize, var(--pf-global--FontSize--sm, .875rem));color:var(--pf-c-popover__content--Color,var(--pf-global--Color--100,#151515));background-color:var(--pf-c-popover__content--BackgroundColor,var(--pf-global--BackgroundColor--100,#fff));max-width:var(--pf-c-popover--MaxWidth,calc(var(--pf-c-popover__content--PaddingLeft,1rem) + var(--pf-c-popover__content--PaddingRight,1rem) + 18.75rem));min-width:var(--pf-c-popover--MinWidth,calc(var(--pf-c-popover__content--PaddingLeft,1rem) + var(--pf-c-popover__content--PaddingRight,1rem) + 18.75rem));width:max-content}[part=close-button]{cursor:pointer;position:absolute;right:var(--pf-c-popover--c-button--Right,calc(var(--pf-c-popover__content--PaddingRight,1rem) - var(--pf-global--spacer--md,1rem)));top:var(--pf-c-popover--c-button--Top,calc(var(--pf-c-popover__content--PaddingTop,1rem) - var(--pf-global--spacer--form-element,.375rem)))}[part=content]>[part=close-button]:not([hidden])~:not([hidden]){padding-right:var(--pf-c-popover--c-button--sibling--PaddingRight,var(--pf-global--spacer--2xl,3rem))}[part=header]{display:flex;align-items:baseline}[part=icon]{color:var(--_header-icon-color);margin-right:var(--pf-c-popover__title-icon--MarginRight,var(--pf-global--spacer--sm,.5rem))}[part=icon] *,[part=icon] ::slotted(*){vertical-align:-.125em}[part=heading] :is(h2,h3,h4,h5,h6),[part=heading]::slotted(:is(h2,h3,h4,h5,h6)),[part=icon]{font-size:var(--pf-c-popover__title--FontSize, var(--pf-global--FontSize--md, 1rem));font-weight:var(--pf-global--FontWeight--normal,400);--pf-icon--size:var(\n    --pf-c-popover__title--FontSize,\n    var(--pf-global--FontSize--md, var(--pf-global--icon--FontSize--md, 1em))\n  )}[part=heading] :is(h2,h3,h4,h5,h6),[part=heading]::slotted(:is(h2,h3,h4,h5,h6)){color:var(--_header-text-color);margin-top:0;margin-bottom:var(--pf-c-popover__title--MarginBottom,var(--pf-global--spacer--sm,.5rem));line-height:var(--pf-c-popover__title--LineHeight, var(--pf-global--LineHeight--md, 1.5));font-family:var(\n    --pf-c-popover__title--FontFamily,\n    var(\n      --pf-global--FontFamily--heading--sans-serif,\n      'RedHatDisplay',\n      'Overpass',\n      overpass,\n      helvetica,\n      arial,\n      sans-serif\n    )\n  )}[part=body]{display:block;word-wrap:break-word}[part=footer]{margin-top:var(--pf-c-popover__footer--MarginTop,var(--pf-global--spacer--md,1rem))}:host([alert-severity=default]){--_header-text-color:var(--pf-c-popover--m-default__title-text--Color, var(--pf-global--default-color--300, #003737));--_header-icon-color:var(--pf-c-popover--m-default__title-icon--Color, var(--pf-global--default-color--200, #009596))}:host([alert-severity=info]){--_header-text-color:var(--pf-c-popover--m-info__title-text--Color, var(--pf-global--info-color--200, #002952));--_header-icon-color:var(--pf-c-popover--m-info__title-icon--Color, var(--pf-global--info-color--100, #2b9af3))}:host([alert-severity=warning]){--_header-icon-color:var(--pf-c-popover--m-warning__title-icon--Color, var(--pf-global--warning-color--100, #f0ab00));--_header-text-color:var(--pf-c-popover--m-warning__title-text--Color, var(--pf-global--warning-color--200, #795600))}:host([alert-severity=success]){--_header-icon-color:var(--pf-c-popover--m-success__title-icon--Color, var(--pf-global--success-color--100, #3e8635));--_header-text-color:var(--pf-c-popover--m-success__title-text--Color, var(--pf-global--success-color--200, #1e4f18))}:host([alert-severity=danger]){--_header-icon-color:var(--pf-c-popover--m-danger__title-icon--Color, var(--pf-global--danger-color--100, #c9190b));--_header-text-color:var(--pf-c-popover--m-danger__title-text--Color, var(--pf-global--danger-color--200, #a30000))}`;
const headingLevels = [2, 3, 4, 5, 6];
export class PopoverHideEvent extends ComposedEvent {
    constructor() {
        super('hide');
    }
}
export class PopoverHiddenEvent extends ComposedEvent {
    constructor() {
        super('hidden');
    }
}
export class PopoverShowEvent extends ComposedEvent {
    constructor() {
        super('show');
    }
}
export class PopoverShownEvent extends ComposedEvent {
    constructor() {
        super('shown');
    }
}
/**
 * A **Popover** displays content in a non-modal dialog and adds contextual information or provides resources via text and links.
 *
 * @summary Toggle the visibility of helpful or contextual information.
 *
 * @slot -
 *         The default slot holds invoking element.
 *         Typically this would be an icon, button, or other small sized element.
 * @slot heading
 *       This slot renders the content that will be displayed inside of the header of the popover.
 *       Typically this would be a heading element.
 * @slot icon
 *       This slot renders the icon that will be displayed inside the header of the popover,
 *       before the heading.
 * @slot body
 *       This slot renders the content that will be displayed inside of the body of the popover.
 * @slot footer
 *       This slot renders the content that will be displayed inside of the footer of the popover.
 *
 * @csspart container - The component wrapper
 * @csspart content - The content wrapper
 * @csspart header - The header element; only visible if both an icon annd heading are provided.
 * @csspart heading - The heading element
 * @csspart icon - The header icon
 * @csspart close-button - The close button
 * @csspart body - The container for the body content
 * @csspart footer - The container for the footer content
 *
 * @cssprop {<length>} --pf-c-popover__arrow--Height
 *          Height of the arrow
 *          {@default `1.5625rem`}
 * @cssprop {<length>} --pf-c-popover__arrow--Width
 *          Width of the arrow
 *          {@default `1.5625rem`}
 * @cssprop {<color>} --pf-c-popover__title-text--Color
 *          Heading font color
 *          {@default `inherit`}
 * @cssprop {<color>} --pf-c-popover__title-icon--Color
 *          Heading icon font color
 *          {@default `#151515`}
 * @cssprop {<color>} --pf-c-popover__arrow--BackgroundColor
 *          Arrow background color
 *          {@default `#fff`}
 * @cssprop --pf-c-popover__arrow--BoxShadow
 *          Arrow box shadow
 *          {@default `0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08)`}
 * @cssprop --pf-c-popover--BoxShadow
 *          Popover box shadow
 *          {@default `0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08)`}
 * @cssprop {<length>} --pf-c-tooltip__content--PaddingTop
 *          Popover top padding
 *          {@default `1rem`}
 * @cssprop {<length>} --pf-c-tooltip__content--PaddingRight
 *          Popover right padding
 *          {@default `1rem`}
 * @cssprop {<length>} --pf-c-tooltip__content--PaddingBottom
 *          Popover bottom padding
 *          {@default `1rem`}
 * @cssprop {<length>} --pf-c-tooltip__content--PaddingLeft
 *          Popover left padding
 *          {@default `1rem`}
 * @cssprop {<number>} --pf-c-popover--line-height
 *          Popover line height
 *          {@default `1.5`}
 * @cssprop {<length>} --pf-c-popover__content--FontSize
 *          Popover font-size
 *          {@default `0.875rem`}
 * @cssprop {<color>} --pf-c-popover__content--BackgroundColor
 *          Popover background color
 *          {@default `#fff`}
 * @cssprop {<length>} --pf-c-popover--MaxWidth
 *          Popover max-width
 *          {@default `20.75rem`}
 * @cssprop {<length>} --pf-c-popover--MinWidth
 *          Popover min-width
 *          {@default `20.75rem`}
 * @cssprop {<number>} --pf-c-popover--c-button--Right
 *          Close button right position
 *          {@default `0}
 * @cssprop {<number>} --pf-c-popover--c-button--Top
 *          Close button top position
 *          {@default `0`}
 * @cssprop {<length>} --pf-c-popover--c-button--sibling--PaddingRight
 *          Padding between close button and its immediate sibling
 *          {@default `3rem`}
 * @cssprop {<length>} --pf-c-popover__title-icon--MarginRight
 *          Heading icon right margin
 *          {@default `0.5rem`}
 * @cssprop {<length>} --pf-c-popover__title--FontSize
 *          Header font-size
 *          {@default `1rem`}
 * @cssprop {<length>} --pf-c-popover__title--MarginBottom
 *          Header bottom margin
 *          {@default `0.5rem`}
 * @cssprop {<number>} --pf-c-popover__title--LineHeight
 *          Header line height
 *          {@default `1.5`}
 * @cssprop {<string>} --pf-c-popover__title--FontFamily
 *          Header font-family
 *          {@default `'RedHatDisplay', 'Overpass', overpass, helvetica, arial, sans-serif`}
 * @cssprop {<length>} --pf-c-popover__footer--MarginTop
 *          Footer top margin
 *          {@default `1rem`}
 * @cssprop {<color>} --pf-c-popover--m-default__title-text--Color
 *          Default alert heading color
 *          {@default `#003737`}
 * @cssprop {<color>} --pf-c-popover--m-default__title-icon--Color
 *          Default alert icon color
 *          {@default `#009596`}
 * @cssprop {<color>} --pf-c-popover--m-info__title-text--Color
 *          Default alert heading color
 *          {@default `#002952`}
 * @cssprop {<color>} --pf-c-popover--m-info__title-icon--Color
 *          Default alert icon color
 *          {@default `#2b9af3`}
 * @cssprop {<color>} --pf-c-popover--m-warning__title-text--Color
 *          Default alert heading color
 *          {@default `#795600`}
 * @cssprop {<color>} --pf-c-popover--m-warning__title-icon--Color
 *          Default alert icon color
 *          {@default `#f0ab00`}
 * @cssprop {<color>} --pf-c-popover--m-success__title-text--Color
 *          Default alert heading color
 *          {@default `#1e4f18`}
 * @cssprop {<color>} --pf-c-popover--m-success__title-icon--Color
 *          Default alert icon color
 *          {@default `#3e8635`}
 * @cssprop {<color>} --pf-c-popover--m-danger__title-text--Color
 *          Default alert heading color
 *          {@default `#a30000`}
 * @cssprop {<color>} --pf-c-popover--m-danger__title-icon--Color
 *          Default alert icon color
 *          {@default `#c9190b`}
 */
let PfPopover = PfPopover_1 = class PfPopover extends LitElement {
    constructor() {
        super(...arguments);
        _PfPopover_instances.add(this);
        /**
         * Indicates the initial popover position.
         * There are 12 options: `top`, `bottom`, `left`, `right`, `top-start`, `top-end`,
         * `bottom-start`, `bottom-end`, `left-start`, `left-end`,`right-start`, `right-end`.
         * The default is `top`.
         */
        this.position = 'top';
        /**
         * Disable the flip behavior. The default is `false`.
         */
        this.noFlip = false;
        _PfPopover_referenceTrigger.set(this, null);
        _PfPopover_float.set(this, new FloatingDOMController(this, {
            content: () => this._popover,
            arrow: () => this._arrow,
            invoker: () => __classPrivateFieldGet(this, _PfPopover_referenceTrigger, "f") || this._slottedTrigger,
        }));
        _PfPopover_slots.set(this, new SlotController(this, null, 'icon', 'heading', 'body', 'footer'));
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('keydown', this.onKeydown);
        PfPopover_1.instances.add(this);
    }
    render() {
        const { alignment, anchor, styles } = __classPrivateFieldGet(this, _PfPopover_float, "f");
        const hasFooter = __classPrivateFieldGet(this, _PfPopover_slots, "f").hasSlotted('footer') || !!this.footer;
        const hasHeading = __classPrivateFieldGet(this, _PfPopover_slots, "f").hasSlotted('heading') || !!this.heading;
        const hasIcon = __classPrivateFieldGet(this, _PfPopover_slots, "f").hasSlotted('icon') || !!this.icon || !!this.alertSeverity;
        // https://github.com/asyncLiz/minify-html-literals/issues/37
        let headingContent = html `<h6>${this.heading ?? ''}</h6>`;
        switch (this.headingLevel) {
            case 2:
                headingContent = html `<h2>${this.heading ?? ''}</h2>`;
                break;
            case 3:
                headingContent = html `<h3>${this.heading ?? ''}</h3>`;
                break;
            case 4:
                headingContent = html `<h4>${this.heading ?? ''}</h4>`;
                break;
            case 5:
                headingContent = html `<h5>${this.heading ?? ''}</h5>`;
                break;
        }
        const headingSlotWithFallback = html `
      <slot id="heading" name="heading" part="heading" ?hidden=${!hasHeading}>${headingContent}</slot>
    `;
        const header = !(hasHeading && hasIcon) ? headingSlotWithFallback : html `
      <header part="header">
        <span part="icon">
          <slot name="icon">
            <pf-icon icon="${this.icon ?? PfPopover_1.alertIcons.get(this.alertSeverity) ?? ''}"
                     set="${ifDefined(this.iconSet)}"
                     size="md"></pf-icon>
          </slot>
        </span>${!this.alertSeverity ? nothing : html `
        <span class="visually-hidden">${this.alertSeverityText ?? `${this.alertSeverity} alert:`}</span>`}
        ${headingSlotWithFallback}
      </header>
    `;
        return html `
      <div id="container"
           style="${styleMap(styles)}"
           class="${classMap({ [anchor]: !!anchor, [alignment]: !!alignment })}">
        <slot id="trigger" @keydown=${this.onKeydown} @click=${this.toggle}></slot>
        <dialog id="popover" aria-labelledby="heading" aria-describedby="body" aria-label=${ifDefined(this.label)}>
          <div id="arrow"></div>
          <div id="content" part="content">
            <pf-button id="close-button"
                       part="close-button"
                       plain
                       label="${this.closeButtonLabel ?? 'Close popover'}"
                       @click="${this.hide}"
                       @keydown="${this.onKeydown}"
                       ?hidden="${this.hideClose}">
              <svg fill="currentColor" height="1em" width="1em" viewBox="0 0 352 512">
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
              </svg>
            </pf-button>
            ${header}
            <slot id="body" part="body" name="body">${this.body ?? ''}</slot>
            <footer part="footer" ?hidden=${!hasFooter}>
              <slot name="footer">${this.footer}</slot>
            </footer>
          </div>
        </dialog>
      </div>
    `;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        PfPopover_1.instances.delete(this);
        __classPrivateFieldGet(this, _PfPopover_referenceTrigger, "f")?.removeEventListener('click', this.show);
        __classPrivateFieldGet(this, _PfPopover_referenceTrigger, "f")?.removeEventListener('keydown', this.onKeydown);
    }
    onKeydown(event) {
        switch (event.key) {
            case 'Escape':
            case 'Esc':
                event.preventDefault();
                this.hide();
                return;
            case 'Enter':
                if (event.target === __classPrivateFieldGet(this, _PfPopover_referenceTrigger, "f") || event.target === this._slottedTrigger) {
                    event.preventDefault();
                    this.show();
                }
                return;
        }
    }
    /**
     * Removes event listeners from the old trigger element and attaches
     * them to the new trigger element.
     */
    triggerChanged(oldValue, newValue) {
        if (oldValue) {
            __classPrivateFieldGet(this, _PfPopover_referenceTrigger, "f")?.removeEventListener('click', this.show);
            __classPrivateFieldGet(this, _PfPopover_referenceTrigger, "f")?.removeEventListener('keydown', this.onKeydown);
        }
        if (newValue) {
            __classPrivateFieldSet(this, _PfPopover_referenceTrigger, this.getRootNode().getElementById(newValue), "f");
            __classPrivateFieldGet(this, _PfPopover_referenceTrigger, "f")?.addEventListener('click', this.show);
            __classPrivateFieldGet(this, _PfPopover_referenceTrigger, "f")?.addEventListener('keydown', this.onKeydown);
        }
    }
    /**
     * Toggle the popover
     */
    async toggle() {
        __classPrivateFieldGet(this, _PfPopover_float, "f").open ? this.hide() : this.show();
    }
    /**
     * Opens the popover
     */
    async show() {
        this.dispatchEvent(new PopoverShowEvent());
        await this.updateComplete;
        await __classPrivateFieldGet(this, _PfPopover_float, "f").show({
            offset: this.distance ?? 25,
            placement: this.position,
            flip: !this.noFlip,
            fallbackPlacements: this.flipBehavior,
        });
        this._popover?.show();
        this.dispatchEvent(new PopoverShownEvent());
    }
    /**
     * Closes the popover
     */
    async hide() {
        this.dispatchEvent(new PopoverHideEvent());
        await __classPrivateFieldGet(this, _PfPopover_float, "f").hide();
        this._popover?.close();
        this.dispatchEvent(new PopoverHiddenEvent());
    }
};
_PfPopover_referenceTrigger = new WeakMap();
_PfPopover_float = new WeakMap();
_PfPopover_slots = new WeakMap();
_PfPopover_instances = new WeakSet();
_PfPopover_outsideClick = function _PfPopover_outsideClick(event) {
    const path = event.composedPath();
    if (!path.includes(this) && !path.includes(__classPrivateFieldGet(this, _PfPopover_referenceTrigger, "f"))) {
        this.hide();
    }
};
PfPopover.styles = [styles];
PfPopover.instances = new Set();
PfPopover.alertIcons = new Map(Object.entries({
    default: 'bell',
    info: 'circle-info',
    success: 'circle-check',
    warning: 'triangle-exclamation',
    danger: 'circle-exclamation',
}));
(() => {
    document.addEventListener('click', function (event) {
        for (const instance of PfPopover_1.instances) {
            if (!instance.noOutsideClick) {
                __classPrivateFieldGet(instance, _PfPopover_instances, "m", _PfPopover_outsideClick).call(instance, event);
            }
        }
    });
})();
__decorate([
    property({ reflect: true })
], PfPopover.prototype, "position", void 0);
__decorate([
    property({ reflect: true })
], PfPopover.prototype, "heading", void 0);
__decorate([
    property({ reflect: true })
], PfPopover.prototype, "body", void 0);
__decorate([
    property({ reflect: true })
], PfPopover.prototype, "footer", void 0);
__decorate([
    property({ reflect: true })
], PfPopover.prototype, "icon", void 0);
__decorate([
    property({ reflect: true })
], PfPopover.prototype, "label", void 0);
__decorate([
    property({ type: Number, reflect: true })
], PfPopover.prototype, "distance", void 0);
__decorate([
    property({
        attribute: 'flip-behavior',
        converter: StringListConverter,
    })
], PfPopover.prototype, "flipBehavior", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'no-flip' })
], PfPopover.prototype, "noFlip", void 0);
__decorate([
    property({ type: Number, reflect: true, attribute: 'heading-level' })
], PfPopover.prototype, "headingLevel", void 0);
__decorate([
    property({ reflect: true, attribute: 'icon-set' })
], PfPopover.prototype, "iconSet", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'hide-close' })
], PfPopover.prototype, "hideClose", void 0);
__decorate([
    property({ reflect: true, attribute: 'alert-severity' })
], PfPopover.prototype, "alertSeverity", void 0);
__decorate([
    property({ reflect: true, attribute: 'close-label' })
], PfPopover.prototype, "closeButtonLabel", void 0);
__decorate([
    property({ reflect: true, attribute: 'alert-severity-text' })
], PfPopover.prototype, "alertSeverityText", void 0);
__decorate([
    property({
        type: Boolean,
        reflect: true,
        attribute: 'no-outside-click',
    })
], PfPopover.prototype, "noOutsideClick", void 0);
__decorate([
    observed('triggerChanged'),
    property({ reflect: true })
], PfPopover.prototype, "trigger", void 0);
__decorate([
    query('#popover')
], PfPopover.prototype, "_popover", void 0);
__decorate([
    query('#trigger')
], PfPopover.prototype, "_slottedTrigger", void 0);
__decorate([
    query('#arrow')
], PfPopover.prototype, "_arrow", void 0);
__decorate([
    bound
], PfPopover.prototype, "onKeydown", null);
__decorate([
    bound
], PfPopover.prototype, "toggle", null);
__decorate([
    bound
], PfPopover.prototype, "show", null);
__decorate([
    bound
], PfPopover.prototype, "hide", null);
PfPopover = PfPopover_1 = __decorate([
    customElement('pf-popover')
], PfPopover);
export { PfPopover };
//# sourceMappingURL=pf-popover.js.map