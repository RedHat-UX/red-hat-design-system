import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { css } from "lit";
const styles = css `:host {\n  position: relative;\n  white-space: nowrap;\n  border: 0;\n}\n\npf-icon, ::slotted(pf-icon) {\n  color: currentColor;\n}\n\n:host,\n#container {\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n}\n\n#container {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  border-width: 0;\n}\n\n#container::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n  content: "";\n}\n\n[part=icon] {\n  display: none;\n  pointer-events: none;\n}\n\n.hasIcon [part=icon] {\n  display: inline-flex;\n  width: 1em;\n}\n\n`;
/**
 * Base label class
*/
export class BaseLabel extends LitElement {
    constructor() {
        super(...arguments);
        /** Represents the state of the anonymous and icon slots */
        this.slots = new SlotController(this, null, 'icon');
    }
    render() {
        const { variant, color, icon } = this;
        const hasIcon = !!icon || this.slots.hasSlotted('icon');
        return html `
      <span id="container"
            class=${classMap({ hasIcon, [variant ?? '']: !!variant, [color ?? '']: !!color })}>
        <slot name="icon" part="icon">${this.renderDefaultIcon?.()}</slot>
        <slot id="text"></slot>
        ${this.renderSuffix?.() ?? ''}
      </span>
    `;
    }
}
BaseLabel.styles = [styles];
//# sourceMappingURL=BaseLabel.js.map