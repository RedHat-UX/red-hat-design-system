var _BaseTooltip_float;
import { __classPrivateFieldGet } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { FloatingDOMController } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import { css } from "lit";
const style = css `:host {\n  display: inline;\n}\n\n\n#container {\n  display: inline-flex;\n  position: relative;\n  max-width: 100%;\n  --_floating-arrow-size: 0.5rem;\n}\n\n#tooltip,\n#tooltip::after {\n  position: absolute;\n}\n\n#tooltip {\n  display: block;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 10000;\n  transition: opacity 300ms cubic-bezier(0.54, 1.5, 0.38, 1.11) 0s;\n  text-align: center;\n  word-break: break-word;\n  translate: var(--_floating-content-translate);\n  max-width: calc(100vw - 10px);\n  width: max-content;\n  top: 0;\n  left: 0;\n  will-change: opacity;\n}\n\n#tooltip::after {\n  display: block;\n  content: '';\n  rotate: 45deg;\n  width: var(--_floating-arrow-size);\n  height: var(--_floating-arrow-size);\n  will-change: left top right bottom;\n}\n\n.open #tooltip {\n  opacity: 1;\n}\n\n/* LEFT */\n.left #tooltip::after          { right: calc(-0.5 * var(--_floating-arrow-size)); }\n.left.center #tooltip::after   { top: calc(50% - 0.5 * var(--_floating-arrow-size)); }\n.left.start #tooltip::after    { top: var(--_floating-arrow-size); }\n.left.end #tooltip::after      { bottom: var(--_floating-arrow-size); }\n\n/* TOP */\n.top #tooltip::after           { top: calc(100% - 0.5 * var(--_floating-arrow-size)); }\n.top.center #tooltip::after    { right: calc(50% - 0.5 * var(--_floating-arrow-size)); }\n.top.start #tooltip::after     { left: var(--_floating-arrow-size); }\n.top.end #tooltip::after       { right: var(--_floating-arrow-size); }\n\n/* RIGHT */\n.right #tooltip::after         { right: calc(100% - 0.5 * var(--_floating-arrow-size)); }\n.right.center #tooltip::after  { top: calc(50% - 0.5 * var(--_floating-arrow-size)); }\n.right.start #tooltip::after   { top: var(--_floating-arrow-size); }\n.right.end #tooltip::after     { bottom: var(--_floating-arrow-size); }\n\n/* BOTTOM */\n.bottom #tooltip::after        { bottom: calc(100% - 0.5 * var(--_floating-arrow-size)); }\n.bottom.center #tooltip::after { right: calc(50% - 0.5 * var(--_floating-arrow-size)); }\n.bottom.start #tooltip::after  { left: var(--_floating-arrow-size); }\n.bottom.end #tooltip::after    { right: var(--_floating-arrow-size); }\n\n`;
const enterEvents = ['focusin', 'tap', 'click', 'mouseenter'];
const exitEvents = ['focusout', 'blur', 'mouseleave'];
/**
 * @deprecated - Will be removed in the next major version. Use FloatingDOMController
 */
export class BaseTooltip extends LitElement {
    constructor() {
        super(...arguments);
        _BaseTooltip_float.set(this, new FloatingDOMController(this, {
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