var _RhTooltip_instances, _RhTooltip_float, _RhTooltip_initialized, _RhTooltip_style, _RhTooltip_content_get, _RhTooltip_onKeydown;
var RhTooltip_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { html, LitElement, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { FloatingDOMController, } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:inline}#container{display:inline-flex;position:relative;max-width:100%;--_floating-arrow-size:var(--rh-tooltip-arrow-size,var(--rh-tooltip__arrow--Width,11px))}#tooltip,#tooltip:after{position:absolute}#tooltip{display:none;opacity:0;pointer-events:none;z-index:10000;transition:opacity .3s cubic-bezier(.54,1.5,.38,1.11) 0s;text-align:var(--_text-alignment,center);word-break:break-word;translate:var(--_floating-content-translate);width:max-content;inset-block-start:0;inset-inline-start:0;will-change:opacity;line-height:var(--rh-line-height-body-text,1.5);box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 #15151533);max-width:var(--rh-tooltip-max-width,var(--rh-tooltip--MaxWidth,18.75rem));border-radius:var(--rh-border-radius-default,3px);padding:var(--rh-tooltip-content-padding-block-start,var(--rh-tooltip__content--PaddingTop,var(--rh-space-lg,16px))) var(--rh-tooltip-content-padding-inline-end,var(--rh-tooltip__content--PaddingRight,var(--rh-space-lg,16px))) var(--rh-tooltip-content-padding-block-end,var(--rh-tooltip__content--PaddingBottom,var(--rh-space-lg,16px))) var(--rh-tooltip-content-padding-inline-start,var(--rh-tooltip__content--PaddingLeft,var(--rh-space-lg,16px)));font-size:var(--rh-tooltip-content-font-size,var(--rh-tooltip__content--FontSize,var(--rh-font-size-body-text-sm,.875rem)));color:light-dark(var(--rh-tooltip-content-color,var(--rh-tooltip__content--Color,var(--rh-color-text-primary-on-light,#151515))),var(--rh-tooltip-content-color,var(--rh-color-text-primary-on-dark,#fff)));background-color:light-dark(var(--rh-tooltip-content-background-color,var(--rh-tooltip__content--BackgroundColor,var(--rh-color-surface-lightest,#fff))),var(--rh-tooltip-content-background-color,var(--rh-color-surface-darkest,#151515)))}#tooltip.dark{color-scheme:dark}#tooltip.light{color-scheme:light}.initialized #tooltip{display:block}#tooltip:after{display:block;content:"";rotate:45deg;width:var(--_floating-arrow-size);height:var(--_floating-arrow-size);will-change:left top right bottom;background-color:light-dark(var(--rh-tooltip-content-background-color,var(--rh-tooltip__content--BackgroundColor,var(--rh-color-surface-lightest,#fff))),var(--rh-tooltip-content-background-color,var(--rh-tooltip__content--BackgroundColor,var(--rh-color-surface-darkest,#151515))))}.open #tooltip{opacity:1}.left #tooltip:after{inset-inline-start:calc(var(--_floating-arrow-size)*-.5)}.top #tooltip:after{inset-block-start:calc(100% - var(--_floating-arrow-size)*.5)}.right #tooltip:after{inset-inline-end:calc(100% - var(--_floating-arrow-size)*.5)}.bottom #tooltip:after{inset-block-end:calc(100% - var(--_floating-arrow-size)*.5)}.left.center #tooltip:after{inset-block-start:calc(50% - var(--_floating-arrow-size)*.5)}.top.center #tooltip:after{inset-inline-end:calc(50% - var(--_floating-arrow-size)*.5)}.right.center #tooltip:after{inset-block-start:calc(50% - var(--_floating-arrow-size)*.5)}.bottom.center #tooltip:after{inset-inline-end:calc(50% - var(--_floating-arrow-size)*.5)}.left.start #tooltip:after{inset-block-start:var(--_floating-arrow-size)}.top.start #tooltip:after{inset-inline-start:var(--_floating-arrow-size)}.right.start #tooltip:after{inset-block-start:var(--_floating-arrow-size)}.bottom.start #tooltip:after{inset-inline-start:var(--_floating-arrow-size)}.left.end #tooltip:after{inset-block-end:var(--_floating-arrow-size)}.top.end #tooltip:after{inset-inline-end:var(--_floating-arrow-size)}.right.end #tooltip:after{inset-block-end:var(--_floating-arrow-size)}.bottom.end #tooltip:after{inset-inline-end:var(--_floating-arrow-size)}:host([position=left]),:host([position=right]){--_text-alignment:"start"}`;
const ENTER_EVENTS = ['focusin', 'tap', 'click', 'mouseenter'];
const EXIT_EVENTS = ['focusout', 'blur', 'mouseleave'];
/**
 * A tooltip is a floating text area that provides helpful
 * or contextual information on hover, focus, or tap.
 *
 * @summary Reveals a small area of information on hover
 *
 * @slot - Place invoking element here,
 *         i.e. the element which when hovered the tooltip will display.
 *         Must be inline content.
 * @slot content - Place tooltip content here. Overrides the `content` attribute.
 *
 * @cssprop {<length>} [--rh-tooltip-arrow-size=11px]
 * @cssprop {<color>} [--rh-tooltip-content-background-color=#ffffff]
 * @cssprop {<color>} [--rh-tooltip-content-color=#151515]
 * @cssprop {<length>} [--rh-tooltip-max-width=18.75rem]
 * @cssprop {<length>} [--rh-tooltip-content-padding-block-start=16px]
 * @cssprop {<length>} [--rh-tooltip-content-padding-inline-end=16px]
 * @cssprop {<length>} [--rh-tooltip-content-padding-block-end=16px]
 * @cssprop {<length>} [--rh-tooltip-content-padding-inline-start=16px]
 * @cssprop {<absolute-size> | <relative-size> | <length> | <percentage>} [--rh-tooltip-content-font-size=0.875rem]
 */
let RhTooltip = RhTooltip_1 = class RhTooltip extends LitElement {
    constructor() {
        super(...arguments);
        _RhTooltip_instances.add(this);
        /** The position of the tooltip, relative to the invoking content */
        this.position = 'top';
        _RhTooltip_float.set(this, new FloatingDOMController(this, {
            content: () => this.shadowRoot?.querySelector('#tooltip'),
        }));
        _RhTooltip_initialized.set(this, false);
        _RhTooltip_style.set(this, void 0);
        _RhTooltip_onKeydown.set(this, (event) => {
            if (event.key === 'Escape') {
                this.hide();
            }
        });
    }
    static announce(message) {
        this.announcer.innerText = message;
    }
    static initAnnouncer() {
        document.body.append((this.announcer = Object.assign(document.createElement('div'), {
            role: 'status',
            // apply `.visually-hidden` styles
            style: /* css */ `
        position: fixed;
        inset-block-start: 0;
        inset-inline-start: 0;
        overflow: hidden;
        clip: rect(0,0,0,0);
        white-space: nowrap;
        border: 0;`,
        })));
    }
    connectedCallback() {
        super.connectedCallback();
        ENTER_EVENTS.forEach(evt => this.addEventListener(evt, this.show));
        EXIT_EVENTS.forEach(evt => this.addEventListener(evt, this.hide));
        RhTooltip_1.instances.add(this);
    }
    render() {
        const { alignment, anchor, open, styles } = __classPrivateFieldGet(this, _RhTooltip_float, "f");
        const scheme = __classPrivateFieldGet(this, _RhTooltip_style, "f")?.colorScheme ?? 'light';
        const dark = !!scheme.match(/^light( (dark|only))?/);
        const light = !!scheme.match(/^dark( only)?/);
        return html `
      <div id="container"
           style="${styleMap(styles)}"
           class="${classMap({ open,
            initialized: !!__classPrivateFieldGet(this, _RhTooltip_initialized, "f"),
            [anchor]: !!anchor,
            [alignment]: !!alignment })}">
        <div id="invoker">
          <slot id="invoker-slot"></slot>
        </div>
        <div id="tooltip" role="status" class="${classMap({ dark, light })}">
          <slot id="content" name="content">${this.content}</slot>
        </div>
      </div>
    `;
    }
    /** Show the tooltip */
    async show() {
        __classPrivateFieldSet(this, _RhTooltip_style, __classPrivateFieldGet(this, _RhTooltip_style, "f") ?? getComputedStyle(this), "f");
        await this.updateComplete;
        const placement = this.position;
        const offset = !placement?.match(/top|bottom/) ? 15
            : { mainAxis: 15, alignmentAxis: -4 };
        await __classPrivateFieldGet(this, _RhTooltip_float, "f").show({ offset, placement });
        __classPrivateFieldSet(this, _RhTooltip_initialized, __classPrivateFieldGet(this, _RhTooltip_initialized, "f") || true, "f");
        RhTooltip_1.announce(__classPrivateFieldGet(this, _RhTooltip_instances, "a", _RhTooltip_content_get));
    }
    /** Hide the tooltip */
    async hide() {
        await __classPrivateFieldGet(this, _RhTooltip_float, "f").hide();
        RhTooltip_1.announcer.innerText = '';
    }
};
_RhTooltip_float = new WeakMap();
_RhTooltip_initialized = new WeakMap();
_RhTooltip_style = new WeakMap();
_RhTooltip_onKeydown = new WeakMap();
_RhTooltip_instances = new WeakSet();
_RhTooltip_content_get = function _RhTooltip_content_get() {
    if (!__classPrivateFieldGet(this, _RhTooltip_float, "f").open || isServer) {
        return '';
    }
    else {
        return this.content || this.shadowRoot
            ?.getElementById('content')
            ?.assignedNodes().map(x => x.textContent ?? '')
            ?.join(' ');
    }
};
RhTooltip.version = '{{version}}';
RhTooltip.styles = [styles];
RhTooltip.instances = new Set();
(() => {
    if (!isServer) {
        globalThis.addEventListener('keydown', (event) => {
            const { instances } = RhTooltip_1;
            for (const instance of instances) {
                __classPrivateFieldGet(instance, _RhTooltip_onKeydown, "f").call(instance, event);
            }
        });
        RhTooltip_1.initAnnouncer();
    }
})();
__decorate([
    property()
], RhTooltip.prototype, "position", void 0);
__decorate([
    property()
], RhTooltip.prototype, "content", void 0);
RhTooltip = RhTooltip_1 = __decorate([
    customElement('rh-tooltip'),
    themable
], RhTooltip);
export { RhTooltip };
//# sourceMappingURL=rh-tooltip.js.map