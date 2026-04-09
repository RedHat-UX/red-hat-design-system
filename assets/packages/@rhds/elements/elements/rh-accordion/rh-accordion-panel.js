import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { consume } from '@lit/context';
import { context } from './context.js';
import { css } from "lit";
const styles = css `:host{display:block;overflow:hidden;will-change:height;--_panel-body-padding-block-start:var(--rh-space-lg,16px);--_panel-body-padding-inline-end:var(--rh-space-xl,24px);--_panel-body-padding-block-end:var(--rh-space-lg,16px);--_panel-body-padding-inline-start:var(--rh-space-xl,24px)}:host(:not([expanded])){display:none}::slotted(:not(rh-accordion)){display:block;margin:unset;background-color:initial}:host ::slotted(:not(:first-child)){padding-block-start:var(--rh-space-xl,24px)}.large{--_panel-body-padding-block-start:var(--rh-space-xl,24px);--_panel-body-padding-inline-end:var(--rh-space-xl,24px);--_panel-body-padding-block-end:var(--rh-space-xl,24px);--_panel-body-padding-inline-start:var(--rh-space-xl,24px)}.body{position:relative;overflow:hidden;display:block;padding:var(--_panel-body-padding-block-start,var(--rh-space-md,8px)) var(--_panel-body-padding-inline-end,var(--rh-space-lg,16px)) var(--_panel-body-padding-block-end,var(--rh-space-md,8px)) var(--_panel-body-padding-inline-start,var(--rh-space-lg,16px))}:host([fixed]){overflow-y:auto;max-height:9.375rem}:host([expanded]){display:block;position:relative;position:unset}#container{border-inline-end:1px solid var(--rh-color-border-subtle);background-color:var(--_accordion-background)}.body:after{content:"";position:absolute;top:0;bottom:0;left:0;width:var(--rh-border-width-lg,3px);background-color:var(--rh-color-accent-brand);inset-block:0;inset-inline-start:0}.content{color:var(--rh-color-text-primary);font-size:var(--_panel-font-size)}`;
/**
 * Collapsible content region within an accordion, paired with an
 * `rh-accordion-header`. Renders with `role="region"` and
 * `aria-labelledby` linking to its header for screen reader context.
 *
 * Must be a direct child of `rh-accordion`, immediately following its
 * corresponding `rh-accordion-header`. Panel content can include text,
 * cards, images, or nested accordions. Text blocks should not exceed
 * 750px width for optimal readability.
 */
let RhAccordionPanel = class RhAccordionPanel extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Sets the initial visibility state of the panel content.
         * When `true`, the panel is expanded and its content is visible.
         * When `false` (default), the panel is collapsed and its content is hidden.
         *
         * #### Usage guidelines
         * - Use to draw attention to important content that should be immediately visible
         * - Set on the first panel in a FAQ or help section to show the most common question
         * - Supports multiple panels being expanded simultaneously for content comparison
         * - Users can expand and collapse panels one at a time by default, or multiple panels
         *   when implementing "Expand all" functionality
         *
         * By default, all panels are collapsed (expanded=false). Users expand panels by clicking
         * the header, which animates the caret icon and reveals the content.
         *
         * See [Expanding and collapsing panels](https://ux.redhat.com/elements/accordion/guidelines/#expanding-and-collapsing-panels) in Guidelines documentation
         */
        this.expanded = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId(this.localName));
        this.setAttribute('role', 'region');
    }
    render() {
        const { expanded } = this;
        const { large = false } = this.ctx ?? {};
        return html `
      <!-- summary: main wrapper region that contains the panel content
           description: |
             The container part represents the structural element that holds the panel's body content.
             It maintains the color scheme context to ensure proper text visibility and color contrast,
             and should match the color palette of the container it's in. This part defines the overall
             styling and boundaries for the panel's revealed content area. -->
      <div id="container"
           class="${classMap({ large, expanded, content: true })}"
           part="container"
           tabindex="-1">
        <!-- The content of the accordion panel can be any basic markup including but not limited
             to div, paragraph, or nested accordion panels. -->
        <slot class="body"></slot>
      </div>
    `;
    }
    expandedChanged() {
        this.hidden = !this.expanded;
    }
};
RhAccordionPanel.styles = [styles];
__decorate([
    property({ type: Boolean, reflect: true })
], RhAccordionPanel.prototype, "expanded", void 0);
__decorate([
    consume({ context, subscribe: true }),
    property({ attribute: false })
], RhAccordionPanel.prototype, "ctx", void 0);
__decorate([
    observes('expanded')
], RhAccordionPanel.prototype, "expandedChanged", null);
RhAccordionPanel = __decorate([
    customElement('rh-accordion-panel'),
    themable
], RhAccordionPanel);
export { RhAccordionPanel };
//# sourceMappingURL=rh-accordion-panel.js.map