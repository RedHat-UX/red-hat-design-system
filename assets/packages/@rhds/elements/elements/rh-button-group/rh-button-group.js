var _RhButtonGroup_internals;
import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:inline-flex;flex-wrap:wrap;gap:var(--rh-space-md,8px) var(--rh-space-lg,16px);margin-inline-end:var(--rh-space-lg,16px);margin-block-end:var(--rh-space-md,8px)}`;
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
/**
 * A button group visually organizes multiple related buttons into a single
 * collection.
 *
 * The component exposes `role="group"` via ElementInternals; authors do not need
 * to set it.
 *
 * For a toolbar pattern, wrap the group in an element with
 * `role="toolbar"`. When there is more than one toolbar, each must have an
 * accessible name (`aria-label` or `aria-labelledby`). For vertical toolbars, set
 * `aria-orientation="vertical"` on the toolbar element.
 *
 * For further accessibility details, see the [Accessibility](/elements/button-group/accessibility/) documentation.
 *
 * @summary Organize multiple related buttons into a single collection
 */
let RhButtonGroup = class RhButtonGroup extends LitElement {
    constructor() {
        super(...arguments);
        // eslint-disable-next-line no-unused-private-class-members
        _RhButtonGroup_internals.set(this, InternalsController.of(this, { role: 'group' }));
    }
    render() {
        return html `
      <!-- Place \`<rh-button>\` elements or native \`<button>\` elements here to organize them into a button group. For toolbar semantics and labeling, wrap the group in an element with \`role="toolbar"\` and see the element accessibility documentation. -->
      <slot></slot>
    `;
    }
};
_RhButtonGroup_internals = new WeakMap();
RhButtonGroup.styles = [styles];
RhButtonGroup = __decorate([
    customElement('rh-button-group'),
    themable
], RhButtonGroup);
export { RhButtonGroup };
//# sourceMappingURL=rh-button-group.js.map