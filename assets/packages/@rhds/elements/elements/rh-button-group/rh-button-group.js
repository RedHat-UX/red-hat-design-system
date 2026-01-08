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
 * @summary Organize multiple related buttons into a single collection
 *
 * @alias button-group
 */
let RhButtonGroup = class RhButtonGroup extends LitElement {
    constructor() {
        super(...arguments);
        // eslint-disable-next-line no-unused-private-class-members
        _RhButtonGroup_internals.set(this, InternalsController.of(this, { role: 'group' }));
    }
    render() {
        return html `
      <!-- Place \`<rh-button>\` elements or native \`<button>\` elements here to organize them into a button group. -->
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