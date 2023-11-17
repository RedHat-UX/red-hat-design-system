var _RhTooltip_float, _RhTooltip_initialized;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { FloatingDOMController, } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import { css } from "lit";
const styles = css `:host{display:inline}#container{display:inline-flex;position:relative;max-width:100%;--_floating-arrow-size:var(\n        --rh-tooltip-arrow-size,\n        var(--rh-tooltip__arrow--Width, 11px)\n      )}#tooltip,#tooltip:after{position:absolute}#tooltip{display:block;opacity:0;pointer-events:none;z-index:10000;transition:opacity .3s cubic-bezier(.54, 1.5, .38, 1.11) 0s;text-align:var(--_text-alignment,center);word-break:break-word;translate:var(--_floating-content-translate);width:max-content;top:0;left:0;will-change:opacity;line-height:var(--rh-line-height-body-text, 1.5);box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 rgba(21,21,21,.2));max-width:var(--rh-tooltip-max-width,var(--rh-tooltip--MaxWidth,18.75rem));padding:var(--rh-tooltip-content-padding-block-start,var(--rh-tooltip__content--PaddingTop,var(--rh-space-lg,16px))) var(--rh-tooltip-content-padding-inline-end,var(--rh-tooltip__content--PaddingRight,var(--rh-space-lg,16px))) var(--rh-tooltip-content-padding-block-end,var(--rh-tooltip__content--PaddingBottom,var(--rh-space-lg,16px))) var(--rh-tooltip-content-padding-inline-start,var(--rh-tooltip__content--PaddingLeft,var(--rh-space-lg,16px)));font-size:var(\n        --rh-tooltip-content-font-size,\n        var(--rh-tooltip__content--FontSize, var(--rh-font-size-body-text-sm, .875rem))\n      );color:var(--rh-tooltip-content-color,var(--rh-tooltip__content--Color,var(--rh-color-text-primary-on-dark,#fff)));background-color:var(--rh-tooltip-content-background-color,var(--rh-tooltip__content--BackgroundColor,var(--rh-color-surface-darkest,#151515)))}:not(.initialized) #tooltip{display:none}#tooltip:after{display:block;content:"";rotate:45deg;width:var(--_floating-arrow-size);height:var(--_floating-arrow-size);will-change:left top right bottom;background-color:var(--rh-tooltip-content-background-color,var(--rh-tooltip__content--BackgroundColor,var(--rh-color-surface-darkest,#151515)))}.open #tooltip{opacity:1}.left #tooltip:after{right:calc(-.5 * var(--_floating-arrow-size))}.top #tooltip:after{top:calc(100% - .5 * var(--_floating-arrow-size))}.right #tooltip:after{right:calc(100% - .5 * var(--_floating-arrow-size))}.bottom #tooltip:after{bottom:calc(100% - .5 * var(--_floating-arrow-size))}.left.center #tooltip:after{top:calc(50% - .5 * var(--_floating-arrow-size))}.top.center #tooltip:after{right:calc(50% - .5 * var(--_floating-arrow-size))}.right.center #tooltip:after{top:calc(50% - .5 * var(--_floating-arrow-size))}.bottom.center #tooltip:after{right:calc(50% - .5 * var(--_floating-arrow-size))}.left.start #tooltip:after{top:var(--_floating-arrow-size)}.top.start #tooltip:after{left:var(--_floating-arrow-size)}.right.start #tooltip:after{top:var(--_floating-arrow-size)}.bottom.start #tooltip:after{left:var(--_floating-arrow-size)}.left.end #tooltip:after{bottom:var(--_floating-arrow-size)}.top.end #tooltip:after{right:var(--_floating-arrow-size)}.right.end #tooltip:after{bottom:var(--_floating-arrow-size)}.bottom.end #tooltip:after{right:var(--_floating-arrow-size)}:host([position=left]),:host([position=right]){--_text-alignment:"start"}.dark{--rh-tooltip-content-background-color:var(--rh-color-surface-lightest, #ffffff);--rh-tooltip-content-color:var(--rh-color-text-primary-on-light, #151515)}`;
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
let RhTooltip = class RhTooltip extends LitElement {
    constructor() {
        super(...arguments);
        /** The position of the tooltip, relative to the invoking content */
        this.position = 'top';
        _RhTooltip_float.set(this, new FloatingDOMController(this, {
            content: () => this.shadowRoot?.querySelector('#tooltip'),
        }));
        _RhTooltip_initialized.set(this, false);
    }
    connectedCallback() {
        super.connectedCallback();
        ENTER_EVENTS.forEach(evt => this.addEventListener(evt, this.show));
        EXIT_EVENTS.forEach(evt => this.addEventListener(evt, this.hide));
    }
    render() {
        const { on = '' } = this;
        const { alignment, anchor, open, styles } = __classPrivateFieldGet(this, _RhTooltip_float, "f");
        const ariaHidden = String(!open);
        return html `
      <div id="container"
           style="${styleMap(styles)}"
           class="${classMap({ open,
            'initialized': !!__classPrivateFieldGet(this, _RhTooltip_initialized, "f"),
            [on]: !!on,
            [anchor]: !!anchor,
            [alignment]: !!alignment })}">
        <slot id="invoker" role="tooltip" aria-labelledby="tooltip"></slot>
        <slot id="tooltip"
              name="content"
              aria-hidden="${ariaHidden}">${this.content}</slot>
      </div>
    `;
    }
    /** Show the tooltip */
    async show() {
        await this.updateComplete;
        const placement = this.position;
        const offset = !placement?.match(/top|bottom/) ? 15
            : { mainAxis: 15, alignmentAxis: -4 };
        await __classPrivateFieldGet(this, _RhTooltip_float, "f").show({ offset, placement });
        __classPrivateFieldSet(this, _RhTooltip_initialized, true, "f");
    }
    /** Hide the tooltip */
    async hide() {
        await __classPrivateFieldGet(this, _RhTooltip_float, "f").hide();
    }
};
_RhTooltip_float = new WeakMap(), _RhTooltip_initialized = new WeakMap();
RhTooltip.version = '{{version}}';
RhTooltip.styles = [styles];
__decorate([
    property()
], RhTooltip.prototype, "position", void 0);
__decorate([
    property()
], RhTooltip.prototype, "content", void 0);
__decorate([
    colorContextConsumer()
], RhTooltip.prototype, "on", void 0);
RhTooltip = __decorate([
    customElement('rh-tooltip')
], RhTooltip);
export { RhTooltip };
//# sourceMappingURL=rh-tooltip.js.map