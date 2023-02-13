import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { css } from "lit";
const styles = css `:host{position:relative;white-space:nowrap;border:0}::slotted(pf-icon),pf-icon{color:currentColor}#container,:host{display:inline-flex;align-items:center;vertical-align:middle}#container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-width:0}#container::before{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;content:""}[part=icon]{display:none;pointer-events:none}.hasIcon [part=icon]{display:inline-flex;width:1em}`;
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