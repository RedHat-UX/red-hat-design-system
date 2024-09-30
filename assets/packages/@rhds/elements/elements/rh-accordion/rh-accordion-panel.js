import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { css } from "lit";
const styles = css `:host{display:none;overflow:hidden;will-change:height;--_panel-font-size:var(--rh-font-size-body-text-md,1rem);--_panel-body-padding-block-start:var(--rh-space-lg,16px);--_panel-body-padding-inline-end:var(--rh-space-xl,24px);--_panel-body-padding-block-end:var(--rh-space-lg,16px);--_panel-body-padding-inline-start:var(--rh-space-xl,24px)}:host ::slotted(*){display:block;margin:unset;background-color:initial}:host ::slotted(:not(:first-child)){padding-block-start:var(--rh-space-xl,24px)}.large{--_panel-body-padding-block-start:var(--rh-space-xl,24px);--_panel-body-padding-inline-end:var(--rh-space-xl,24px);--_panel-body-padding-block-end:var(--rh-space-xl,24px);--_panel-body-padding-inline-start:var(--rh-space-xl,24px);--_panel-font-size:var(--rh-font-size-body-text-md,1rem)}.body{position:relative;overflow:hidden;display:block;padding:var(--_panel-body-padding-block-start,var(--rh-space-md,8px)) var(--_panel-body-padding-inline-end,var(--rh-space-lg,16px)) var(--_panel-body-padding-block-end,var(--rh-space-md,8px)) var(--_panel-body-padding-inline-start,var(--rh-space-lg,16px))}:host([fixed]){overflow-y:auto;max-height:9.375rem}:host([expanded]){display:block;position:relative;position:unset}#container{border-inline-end:1px solid var(--rh-color-border-subtle);background-color:var(--rh-color-surface)}.expanded.on.light{--rh-color-surface:var(--rh-color-surface-lightest,#fff)}.expanded.on.dark{--rh-color-surface:var(--rh-color-surface-darkest,#151515)}.body:after{content:"";position:absolute;top:0;bottom:0;left:0;width:var(--rh-border-width-lg,3px);background-color:var(--rh-color-accent-brand);inset-block:0;inset-inline-start:0}.content{color:var(--rh-color-text-primary);font-size:var(--_panel-font-size,var(--rh-font-size-body-text-sm,.875rem))}`;
import { consume } from '@lit/context';
import { context } from './context.js';
/**
 * Accordion Panel
 *
 * @slot
 *       The content of the accordion panel can be any basic markup including but not limited to div, paragraph, or nested accordion panels.
 */
let RhAccordionPanel = class RhAccordionPanel extends LitElement {
    constructor() {
        super(...arguments);
        this.expanded = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId(this.localName));
        this.setAttribute('role', 'region');
    }
    render() {
        const { on = '', expanded } = this;
        const { large = false } = this.ctx ?? {};
        return html `
      <div id="container"
           class="${classMap({ on: true, [on]: !!on, large, expanded, content: true })}"
           part="container"
           tabindex="-1">
        <slot class="body"></slot>
      </div>
    `;
    }
};
RhAccordionPanel.version = '{{version}}';
RhAccordionPanel.styles = [styles];
__decorate([
    property({ type: Boolean, reflect: true })
], RhAccordionPanel.prototype, "expanded", void 0);
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhAccordionPanel.prototype, "colorPalette", void 0);
__decorate([
    colorContextConsumer()
], RhAccordionPanel.prototype, "on", void 0);
__decorate([
    consume({ context, subscribe: true }),
    property({ attribute: false })
], RhAccordionPanel.prototype, "ctx", void 0);
RhAccordionPanel = __decorate([
    customElement('rh-accordion-panel')
], RhAccordionPanel);
export { RhAccordionPanel };
//# sourceMappingURL=rh-accordion-panel.js.map