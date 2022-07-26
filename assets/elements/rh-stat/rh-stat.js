import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { pfelement, colorContextConsumer } from '@patternfly/pfe-core/decorators.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import styles from "./rh-stat.css.js";
import { tabletLandscapeBreakpoint } from '../../lib/tokens.js';
import { MatchMediaController } from '../../lib/MatchMediaController.js';
/**
 * Stat
 * @slot - Place element content here
 */
let RhStat = class RhStat extends LitElement {
    constructor() {
        super();
        this.on = 'light';
        this.matchMedia = new MatchMediaController(this, `(max-width: ${tabletLandscapeBreakpoint})`, {
            onChange: ({ matches }) => this.isMobile = matches,
        });
        this.isMobile = false;
        this.slots = new SlotController(this, {
            slots: ['icon'],
        });
        this.icon = '';
        this.top = 'default';
        this.size = 'default';
    }
    connectedCallback() {
        super.connectedCallback();
        this.updateIcons();
    }
    render() {
        const hasSlottedIcon = this.slots.hasSlotted('icon');
        return html `
          <slot class="${classMap({ hasIcon: hasSlottedIcon || this.icon.length > 0 })}" name="icon">
            ${this.icon.length > 0 ?
            html `
                <pfe-icon size=${this.size === 'default' ? 'md' : 'lg'} icon=${this.icon}></pfe-icon>
              ` : html ``}
            </slot>
          <slot name="title"></slot>
          <slot name="statistic">Statistic Placeholder</slot>
          <slot name="description">Description Placeholder</slot>
          <slot name="cta"></slot>
    `;
    }
    updateIcons() {
        if (this.querySelectorAll('pfe-icon')?.length > 0) {
            const pfeIcon = this.querySelectorAll('pfe-icon')?.[0];
            pfeIcon.setAttribute('size', this.size === 'default' ? 'md' : 'lg');
        }
    }
};
RhStat.version = '{{version}}';
RhStat.styles = [styles];
__decorate([
    colorContextConsumer(),
    property({ reflect: true })
], RhStat.prototype, "on", void 0);
__decorate([
    property({ reflect: true, type: String })
], RhStat.prototype, "icon", void 0);
__decorate([
    property({ reflect: true, type: String })
], RhStat.prototype, "top", void 0);
__decorate([
    property({ reflect: true, type: String })
], RhStat.prototype, "size", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'is-mobile' })
], RhStat.prototype, "isMobile", void 0);
RhStat = __decorate([
    customElement('rh-stat'),
    pfelement()
], RhStat);
export { RhStat };
//# sourceMappingURL=rh-stat.js.map