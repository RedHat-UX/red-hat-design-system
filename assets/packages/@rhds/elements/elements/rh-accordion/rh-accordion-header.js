var _RhAccordionHeader_instances, _RhAccordionHeader_dir, _RhAccordionHeader_internals, _RhAccordionHeader_heading, _RhAccordionHeader_onClick;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { DirController } from '../../lib/DirController.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { consume } from '@lit/context';
import { context } from './context.js';
import { css } from "lit";
const styles = css `:host{--_padding-block-start:var(--rh-space-lg,16px);--_padding-inline-end:var(--rh-space-xl,24px);--_padding-block-end:var(--rh-space-lg,16px);--_padding-inline-start:var(--rh-space-xl,24px);--_active-text-color:var(--rh-color-text-primary);--_font-size:var(--rh-font-size-body-text-lg,1.125rem);--_after-background-color:#0000;--_expanded-background-color:var(--rh-color-accent-brand);--_isRTL:-1}#heading{font-size:100%;padding:0;margin:0;color:var(--rh-color-text-primary);background-color:var(--rh-color-surface);font-weight:var(--rh-font-weight-heading-medium,500)}a,button{cursor:pointer}.rtl{--_isRTL:1}.large{--_padding-block-start:var(--rh-space-lg,16px);--_padding-inline-end:var(--rh-space-xl,24px);--_padding-block-end:var(--rh-space-lg,16px);--_padding-inline-start:var(--rh-space-xl,24px)}:host([expanded]){border-inline-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}:host(.animating) #button,:host([expanded]) #button{border-inline-end-color:var(--rh-color-border-subtle);border-inline-start-color:var(--rh-color-border-subtle)}#button,#button:after,#button:before{background-color:var(--rh-color-surface)}#icon{width:16px;height:16px;will-change:rotate;transition:rotate .2s ease-in 0s}#button{width:100%;padding:var(--_padding-block-start) var(--_padding-inline-end) var(--_padding-block-end) var(--_padding-inline-start);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text","Noto Sans Arabic","Noto Sans Hebrew","Noto Sans JP","Noto Sans KR","Noto Sans Malayalam","Noto Sans SC","Noto Sans TC","Noto Sans Thai",Helvetica,Arial,sans-serif);font-size:var(--_font-size);color:var(--rh-color-text-primary)}#button #icon{fill:currentcolor}#button:after{inset-block-start:-1px;width:var(--rh-border-width-lg,3px);background-color:var(--_after-background-color)}span{overflow:hidden;text-align:start}[part=container]{display:flex;gap:var(--rh-space-xl,24px);container-type:inline-size}#header-container{display:flex;gap:var(--rh-space-md,8px)}#header-container.bottom{flex-direction:column}#header-text{font-weight:var(--rh-font-weight-heading-bold,700)}[part=accents]{display:flex;flex-wrap:wrap;gap:var(--rh-space-md,8px)}.expanded #button{--_after-background-color:var(--rh-color-accent-brand)}.expanded #button #icon{rotate:calc(var(--_isRTL, -1)*180deg)}#button:active,#button:focus,#button:hover{background-color:var(--rh-color-surface)}#button:active span,#button:focus span,#button:hover span{color:var(--_active-text-color)}.toggle,.toggle:after,.toggle:before{padding:0;margin:0}.toggle{position:relative;display:flex;align-items:center;justify-content:space-between;border:0}.toggle:after{content:"";position:absolute;inset-block:0;inset-inline-start:0}.expanded.on.light{--rh-color-surface:var(--rh-color-surface-lightest,#fff)}.expanded.on.dark{--rh-color-surface:var(--rh-color-surface-darkest,#151515)}@container (min-width: 576px){#header-container:not(.bottom){flex-direction:row}}`;
import { HeadingLevelController } from '@rhds/elements/lib/context/headings/controller.js';
export class AccordionHeaderChangeEvent extends Event {
    constructor(expanded, toggle, accordion) {
        super('change', { bubbles: true, cancelable: true });
        this.expanded = expanded;
        this.toggle = toggle;
        this.accordion = accordion;
    }
}
const isAccordion = (x) => x instanceof HTMLElement && x.localName === 'rh-accordion';
/**
 * Accordion Header
 * We expect the light DOM of the rh-accordion-header to be a heading level tag (h1, h2, h3, h4, h5, h6)
 * @csspart text - inline element containing the heading text or slotted heading content
 * @csspart accents - container for accents within the header
 * @slot - accordion toggle content
 * @slot accents -
 *       These elements will appear inline by default with the header title, between the header and the chevron
 *       (or after the chevron and header in disclosure mode). There is an option to set the accents placement to bottom
 * @fires {AccordionHeaderChangeEvent} change - when the open panels change
 */
let RhAccordionHeader = class RhAccordionHeader extends LitElement {
    constructor() {
        super(...arguments);
        _RhAccordionHeader_instances.add(this);
        this.expanded = false;
        _RhAccordionHeader_dir.set(this, new DirController(this));
        _RhAccordionHeader_internals.set(this, InternalsController.of(this, {
            role: 'heading',
            ariaLevel: '2',
        }));
        _RhAccordionHeader_heading.set(this, new HeadingLevelController(this));
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId(this.localName));
        const accordion = this.closest('rh-accordion');
        const heading = this.closest('h1,h2,h3,h4,h5,h6');
        if (heading && accordion?.contains(heading)) {
            __classPrivateFieldGet(this, _RhAccordionHeader_internals, "f").ariaLevel = heading.localName.replace('h', '');
            heading.replaceWith(this);
        }
        else {
            __classPrivateFieldGet(this, _RhAccordionHeader_internals, "f").ariaLevel = Math.max(2, __classPrivateFieldGet(this, _RhAccordionHeader_heading, "f").level).toString();
        }
    }
    render() {
        const { expanded, on = '' } = this;
        const { accents, large = false } = this.ctx ?? {};
        const rtl = __classPrivateFieldGet(this, _RhAccordionHeader_dir, "f").dir === 'rtl';
        return html `
      <div id="container" class="${classMap({ on: true, [on]: !!on, rtl, large, expanded })}">
        <button id="button"
                class="toggle"
                @click="${__classPrivateFieldGet(this, _RhAccordionHeader_instances, "m", _RhAccordionHeader_onClick)}">
          <span id="header-container" class="${classMap({ [accents ?? '']: !!accents })}">
            <span id="header-text" part="text"><slot></slot></span>
            <span part="accents"><slot name="accents"></slot></span>
          </span>
          <svg id="icon"
               role="presentation"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 448 512">
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
          </svg>
        </button>
      </div>
    `;
    }
    expandedChanged() {
        __classPrivateFieldGet(this, _RhAccordionHeader_internals, "f").ariaExpanded = String(!!this.expanded);
    }
};
_RhAccordionHeader_dir = new WeakMap();
_RhAccordionHeader_internals = new WeakMap();
_RhAccordionHeader_heading = new WeakMap();
_RhAccordionHeader_instances = new WeakSet();
_RhAccordionHeader_onClick = function _RhAccordionHeader_onClick(event) {
    const accordion = event.composedPath().find(isAccordion);
    if (accordion) {
        this.dispatchEvent(new AccordionHeaderChangeEvent(!this.expanded, this, accordion));
    }
};
RhAccordionHeader.styles = [styles];
__decorate([
    property({ type: Boolean, reflect: true })
], RhAccordionHeader.prototype, "expanded", void 0);
__decorate([
    consume({ context, subscribe: true }),
    property({ attribute: false })
], RhAccordionHeader.prototype, "ctx", void 0);
__decorate([
    colorContextConsumer()
], RhAccordionHeader.prototype, "on", void 0);
__decorate([
    observes('expanded')
], RhAccordionHeader.prototype, "expandedChanged", null);
RhAccordionHeader = __decorate([
    customElement('rh-accordion-header')
], RhAccordionHeader);
export { RhAccordionHeader };
//# sourceMappingURL=rh-accordion-header.js.map