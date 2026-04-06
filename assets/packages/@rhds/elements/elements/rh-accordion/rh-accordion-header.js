var _RhAccordionHeader_instances, _RhAccordionHeader_internals, _RhAccordionHeader_heading, _RhAccordionHeader_belongsTo, _RhAccordionHeader_onClick, _RhAccordionHeader_dispatchChange;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { html, LitElement, isServer } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { HeadingLevelContextConsumer } from '../../lib/context/headings/consumer.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { consume } from '@lit/context';
import { context } from './context.js';
import { css } from "lit";
const styles = css `:host{--_padding-block-start:var(--rh-space-lg,16px);--_padding-inline-end:var(--rh-space-xl,24px);--_padding-block-end:var(--rh-space-lg,16px);--_padding-inline-start:var(--rh-space-xl,24px);--_after-background-color:#0000;--_expanded-background-color:var(--rh-color-accent-brand)}a,button{cursor:pointer}.large{--_padding-block-start:var(--rh-space-lg,16px);--_padding-inline-end:var(--rh-space-xl,24px);--_padding-block-end:var(--rh-space-lg,16px);--_padding-inline-start:var(--rh-space-xl,24px)}:host([expanded]){border-inline-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}:host(.animating) #button,:host([expanded]) #button{border-inline-end-color:var(--rh-color-border-subtle);border-inline-start-color:var(--rh-color-border-subtle)}#icon{width:16px;height:16px;will-change:rotate;transition:rotate .2s ease-in 0s}span{overflow:hidden;text-align:start}#button{color:var(--rh-color-text-primary);background-color:var(--_accordion-background);font-weight:var(--rh-font-weight-body-text-medium,500);width:100%;padding:var(--_padding-block-start) var(--_padding-inline-end) var(--_padding-block-end) var(--_padding-inline-start);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-size:var(--_header-font-size)}#button #icon{fill:currentcolor}#button:is(:hover,:active,:focus){background-color:light-dark(var(--rh-color-surface-lighter),oklch(from var(--rh-color-surface-dark,#383838) calc(l * .82) c h))}#button:is(:hover,:active,:focus) span{color:var(--rh-color-text-primary)}#button:focus{outline:2px solid var(--rh-color-interactive-primary-default)}#button:after{inset-block-start:-1px;width:var(--rh-border-width-lg,3px);background-color:var(--_after-background-color)}#button.expanded{--_after-background-color:var(--rh-color-accent-brand)}#button.expanded #icon{rotate:-180deg}:is(#button.expanded #icon):dir(rtl){rotate:180deg}#header-container{display:flex;gap:var(--rh-space-md,8px)}#header-container.bottom{flex-direction:column}#header-text{font-weight:var(--rh-font-weight-body-text-medium,500)}[part=accents]{display:flex;flex-wrap:wrap;gap:var(--rh-space-md,8px)}.toggle{position:relative;display:flex;align-items:center;justify-content:space-between;border:0}.toggle,.toggle:after,.toggle:before{padding:0;margin:0}.toggle:after{content:"";position:absolute;inset-block:0;inset-inline-start:0}@container (min-width: 576px){#header-container:not(.bottom){flex-direction:row}}`;
export class AccordionHeaderChangeEvent extends Event {
    constructor(expanded, toggle) {
        super('change', { bubbles: true, cancelable: true });
        this.expanded = expanded;
        this.toggle = toggle;
    }
}
/**
 * Clickable toggle for an accordion panel. Each header controls the visibility
 * of its adjacent `rh-accordion-panel` sibling. Renders as an accessible button
 * with `role="heading"` at the appropriate aria-level.
 *
 * Must be a direct child of `rh-accordion`. Should contain concise title text
 * (max 65 characters). Avoid writing titles that sound like calls to action.
 *
 * Supports keyboard activation with `Enter` or `Space`. Automatically manages
 * `aria-expanded` and `aria-controls` for its associated panel.
 *
 * @fires {AccordionHeaderChangeEvent} change - Fires when the header's expanded
 *   state changes, either by user click or programmatic toggle. The event
 *   `expanded` property indicates the new state.
 */
let RhAccordionHeader = class RhAccordionHeader extends LitElement {
    constructor() {
        super(...arguments);
        _RhAccordionHeader_instances.add(this);
        /**
         * Whether this header's associated panel is expanded. When true, the caret
         * icon rotates upward and the panel content is visible. Managed automatically
         * by the parent `rh-accordion` — set `expanded-index` on the accordion to
         * control initial state declaratively.
         */
        this.expanded = false;
        _RhAccordionHeader_internals.set(this, InternalsController.of(this, {
            role: 'heading',
            ariaLevel: '2',
        }));
        _RhAccordionHeader_heading.set(this, new HeadingLevelContextConsumer(this));
        _RhAccordionHeader_belongsTo.set(this, void 0);
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId(this.localName));
        if (!isServer) {
            __classPrivateFieldSet(this, _RhAccordionHeader_belongsTo, this.closest('rh-accordion'), "f");
            const heading = this.closest('h1,h2,h3,h4,h5,h6');
            if (heading && __classPrivateFieldGet(this, _RhAccordionHeader_belongsTo, "f")?.contains(heading)) {
                __classPrivateFieldGet(this, _RhAccordionHeader_internals, "f").ariaLevel = heading.localName.replace('h', '');
                heading.replaceWith(this);
            }
            else {
                if (!__classPrivateFieldGet(this, _RhAccordionHeader_internals, "f").ariaLevel) {
                    __classPrivateFieldGet(this, _RhAccordionHeader_internals, "f").ariaLevel = Math.max(2, __classPrivateFieldGet(this, _RhAccordionHeader_heading, "f").level).toString();
                }
            }
            this.removeAttribute('role');
        }
    }
    render() {
        const { expanded } = this;
        const { accents, large = false } = this.ctx ?? {};
        return html `
      <button id="button"
              class="${classMap({ toggle: true, large, expanded })}"
              @click="${__classPrivateFieldGet(this, _RhAccordionHeader_instances, "m", _RhAccordionHeader_onClick)}">
        <span id="header-container" class="${classMap({ [accents ?? '']: !!accents })}">
          <!-- inline element containing the heading text or slotted heading content -->
          <span id="header-text" part="text">
            <!-- summary: panel's title text or heading content
                 description: |
                   Contains the primary label that describes what content will be revealed when the panel expands.
                   Title text should be written concisely (max 65 characters) so users know what to expect.
                   Avoid writing titles that sound like calls to action - make it easy for users to understand
                   the content within. Title text that is too long should be broken into separate sections, and
                   text that is too vague may not help users understand the panel content.

                   @see [Title text](https://ux.redhat.com/elements/accordion/guidelines/#title-text) in Guidelines documentation -->
            <slot></slot>
          </span>
          <!-- container for accents within the header -->
          <span part="accents">
           <!-- summary: decorations like icons or tags
                description: |
                 These elements will appear inline by default with the header title, between the header and the chevron
                 (or after the chevron and header in disclosure mode). There is an option to set the accents placement to bottom -->
            <slot name="accents"></slot>
          </span>
        </span>
        <svg id="icon"
             role="presentation"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 448 512">
          <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
        </svg>
      </button>
    `;
    }
    expandedChanged() {
        __classPrivateFieldGet(this, _RhAccordionHeader_internals, "f").ariaExpanded = String(!!this.expanded);
        __classPrivateFieldGet(this, _RhAccordionHeader_instances, "m", _RhAccordionHeader_dispatchChange).call(this);
    }
};
_RhAccordionHeader_internals = new WeakMap();
_RhAccordionHeader_heading = new WeakMap();
_RhAccordionHeader_belongsTo = new WeakMap();
_RhAccordionHeader_instances = new WeakSet();
_RhAccordionHeader_onClick = function _RhAccordionHeader_onClick() {
    this.expanded = !this.expanded;
};
_RhAccordionHeader_dispatchChange = function _RhAccordionHeader_dispatchChange() {
    this.dispatchEvent(new AccordionHeaderChangeEvent(this.expanded, this));
};
RhAccordionHeader.styles = [styles];
// Allow focus to apply to shadow button
RhAccordionHeader.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
__decorate([
    property({ type: Boolean, reflect: true })
], RhAccordionHeader.prototype, "expanded", void 0);
__decorate([
    consume({ context, subscribe: true }),
    property({ attribute: false })
], RhAccordionHeader.prototype, "ctx", void 0);
__decorate([
    observes('expanded')
], RhAccordionHeader.prototype, "expandedChanged", null);
RhAccordionHeader = __decorate([
    customElement('rh-accordion-header'),
    themable
], RhAccordionHeader);
export { RhAccordionHeader };
//# sourceMappingURL=rh-accordion-header.js.map