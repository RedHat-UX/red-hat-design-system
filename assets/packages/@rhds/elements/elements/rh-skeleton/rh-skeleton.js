import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const styles = css `.visually-hidden{border:0;clip:rect(0,0,0,0);block-size:var(--rh-length-4xs,1px);margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;inline-size:var(--rh-length-4xs,1px)}`;
/**
 * A skeleton provides an animated placeholder for content that is loading
 * progressively. Must not receive focus or keyboard input.
 *
 * @summary A placeholder for content that is loading.
 *
 * @alias skeleton
 */
let RhSkeleton = class RhSkeleton extends LitElement {
    render() {
        return html `
      <span class="visually-hidden">
        <!-- Visually hidden text for screen readers.
             Customize by slotting in text that describes the loading content.
             Accepts inline text content. Defaults to "Loading...".
             Should be customized when multiple skeletons appear on the same page
             to help users of assistive technologies distinguish between them. -->
        <slot>Loading...</slot>
      </span>
    `;
    }
};
RhSkeleton.styles = [styles];
__decorate([
    property({ reflect: true })
], RhSkeleton.prototype, "type", void 0);
__decorate([
    property({ reflect: true })
], RhSkeleton.prototype, "size", void 0);
RhSkeleton = __decorate([
    customElement('rh-skeleton')
], RhSkeleton);
export { RhSkeleton };
//# sourceMappingURL=rh-skeleton.js.map