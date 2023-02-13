var _BaseTooltip_float;
import { __classPrivateFieldGet } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { FloatingDOMController } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import { css } from "lit";
const style = css `:host{display:inline}#container{display:inline-flex;position:relative;--_floating-arrow-size:0.5rem}#invoker{display:inline-block;position:relative}#tooltip,#tooltip::after{position:absolute}#tooltip{display:block;opacity:0;pointer-events:none;z-index:10000;transition:opacity .3s cubic-bezier(.54, 1.5, .38, 1.11) 0s;text-align:center;word-break:break-word;translate:var(--_floating-content-translate);max-width:calc(100vw - 10px);width:max-content;top:0;left:0;will-change:opacity}#tooltip::after{display:block;content:'';rotate:45deg;width:var(--_floating-arrow-size);height:var(--_floating-arrow-size);will-change:left top right bottom}.open #tooltip{opacity:1}.left #tooltip::after{right:calc(-.5 * var(--_floating-arrow-size))}.left.center #tooltip::after{top:calc(50% - .5 * var(--_floating-arrow-size))}.left.start #tooltip::after{top:var(--_floating-arrow-size)}.left.end #tooltip::after{bottom:var(--_floating-arrow-size)}.top #tooltip::after{top:calc(100% - .5 * var(--_floating-arrow-size))}.top.center #tooltip::after{right:calc(50% - .5 * var(--_floating-arrow-size))}.top.start #tooltip::after{left:var(--_floating-arrow-size)}.top.end #tooltip::after{right:var(--_floating-arrow-size)}.right #tooltip::after{right:calc(100% - .5 * var(--_floating-arrow-size))}.right.center #tooltip::after{top:calc(50% - .5 * var(--_floating-arrow-size))}.right.start #tooltip::after{top:var(--_floating-arrow-size)}.right.end #tooltip::after{bottom:var(--_floating-arrow-size)}.bottom #tooltip::after{bottom:calc(100% - .5 * var(--_floating-arrow-size))}.bottom.center #tooltip::after{right:calc(50% - .5 * var(--_floating-arrow-size))}.bottom.start #tooltip::after{left:var(--_floating-arrow-size)}.bottom.end #tooltip::after{right:var(--_floating-arrow-size)}`;
const enterEvents = ['focusin', 'tap', 'click', 'mouseenter'];
const exitEvents = ['focusout', 'blur', 'mouseleave'];
export class BaseTooltip extends LitElement {
    constructor() {
        super(...arguments);
        _BaseTooltip_float.set(this, new FloatingDOMController(this, {
            arrow: true,
            content: () => this.shadowRoot?.querySelector('#tooltip'),
        }));
    }
    connectedCallback() {
        super.connectedCallback();
        enterEvents.forEach(evt => this.addEventListener(evt, this.show));
        exitEvents.forEach(evt => this.addEventListener(evt, this.hide));
    }
    async show() {
        await this.updateComplete;
        const placement = this.position;
        const offset = !placement?.match(/top|bottom/) ? 15
            : { mainAxis: 15, alignmentAxis: -4 };
        await __classPrivateFieldGet(this, _BaseTooltip_float, "f").show({ offset, placement });
    }
    async hide() {
        await __classPrivateFieldGet(this, _BaseTooltip_float, "f").hide();
    }
    render() {
        const { alignment, anchor, open, styles } = __classPrivateFieldGet(this, _BaseTooltip_float, "f");
        return html `
      <div id="container"
           style="${styleMap(styles)}"
        class="${classMap({ open,
            [anchor]: !!anchor,
            [alignment]: !!alignment })}">
        <slot id="invoker" role="tooltip" aria-labelledby="tooltip"></slot>
        <slot id="tooltip"
              name="content"
              aria-hidden="${String(!open)}">${this.content}</slot>
      </div>
    `;
    }
}
_BaseTooltip_float = new WeakMap();
BaseTooltip.styles = [style];
//# sourceMappingURL=BaseTooltip.js.map