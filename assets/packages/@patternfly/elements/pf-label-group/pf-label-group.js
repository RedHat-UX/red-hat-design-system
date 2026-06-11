var _PfLabelGroup_instances, _PfLabelGroup_overflowLabel_get, _PfLabelGroup_closeButton_get, _PfLabelGroup_categorySlotted_get, _PfLabelGroup_labels_get, _PfLabelGroup_labelCount_get, _PfLabelGroup_hasCategory_get, _PfLabelGroup_remaining_get, _PfLabelGroup_tabindex, _PfLabelGroup_onCloseClick, _PfLabelGroup_onMoreClick, _PfLabelGroup_onSlotchange, _PfLabelGroup_onRemove, _PfLabelGroup_updateOverflow;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { PfLabel } from '../pf-label/pf-label.js';
import { css } from "lit";
const styles = css `:host {
  --pf-c-label-group__list--MarginBottom: calc(var(--pf-global--spacer--xs, 0.25rem) * -1);
  --pf-c-label-group__list--MarginRight: calc(var(--pf-global--spacer--xs, 0.25rem) * -1);
  --pf-c-label-group--m-category--PaddingTop: var(--pf-global--spacer--xs, 0.25rem);
  --pf-c-label-group--m-category--PaddingRight: var(--pf-global--spacer--xs, 0.25rem);
  --pf-c-label-group--m-category--PaddingBottom: var(--pf-global--spacer--xs, 0.25rem);
  --pf-c-label-group--m-category--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);
  --pf-c-label-group--m-category--BorderRadius: var(--pf-global--BorderRadius--sm, 3px);
  --pf-c-label-group--m-category--BackgroundColor: var(--pf-global--BackgroundColor--200, #f0f0f0);
  --pf-c-label-group__label--MarginRight: var(--pf-global--spacer--sm, 0.5rem);
  --pf-c-label-group__label--FontSize: var(--pf-global--FontSize--sm, 0.875rem);
  --pf-c-label-group__label--MaxWidth: 18ch;
  --pf-c-label-group__close--MarginTop: calc(var(--pf-global--spacer--xs, 0.25rem) * -1);
  --pf-c-label-group__close--MarginBottom: calc(var(--pf-global--spacer--xs, 0.25rem) * -1);
  --pf-c-label-group__list-item--MarginRight: var(--pf-global--spacer--xs, 0.25rem);
  --pf-c-label-group__list-item--MarginBottom: var(--pf-global--spacer--xs, 0.25rem);
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  min-width: 0;
  max-width: 100%;
  color: var(--pf-global--Color--100, #151515);
}

[hidden],
.empty,
::slotted([hidden]),
::slotted([overflow-hidden]) {
  display: none !important;
}

#outer {
  display: inline-flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  min-width: 0;
  column-gap: var(--pf-global--spacer--xs, 0.25rem);
  border-radius: var(--pf-global--BorderRadius--sm, 3px);
  padding: 0 !important;
}

#outer.has-category {
  padding:
    var(--pf-c-label-group--m-category--PaddingTop)
    var(--pf-c-label-group--m-category--PaddingRight)
    var(--pf-c-label-group--m-category--PaddingBottom)
    var(--pf-c-label-group--m-category--PaddingLeft) !important;
  background-color: var(--pf-c-label-group--m-category--BackgroundColor);
}

#labels {
  margin-inline-end: var(--pf-c-label-group__list--MarginRight);
  margin-block-end: var(--pf-c-label-group__list--MarginBottom);
  font-family: var(--pf-global--FontFamily--sans-serif, "RedHatTextUpdated", "Overpass", overpass, helvetica, arial, sans-serif);
  font-size: var(--pf-global--FontSize--sm, 14px);
  font-weight: var(--pf-global--FontWeight--normal, 400);
  line-height: 1.6;
}

#labels ::slotted(pf-label) {
  display: inline-flex;
  min-width: 0;
  margin-inline-end: var(--pf-c-label-group__list-item--MarginRight);
  margin-block-end: var(--pf-c-label-group__list-item--MarginBottom);
}

::slotted([slot="category"]) {
  display: inline-block;
  max-inline-size: var(--pf-c-label-group__label--MaxWidth);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
  margin-inline-end: var(--pf-c-label-group__label--MarginRight);
  font-size: var(--pf-c-label-group__label--FontSize);
}

:host([orientation="vertical"]) #outer {
  flex-direction: column;
  align-items: flex-start;
}

#close-button {
  --pf-icon--size: 16px;
  margin-block: var(--pf-c-label-group__close--MarginTop) var(--pf-c-label-group__close--MarginBottom);
  inset-block-start: 0.125em;
}

.visually-hidden {
  border: 0;
  clip: rect(0, 0, 0, 0);
  block-size: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  inline-size: 1px;
}
`;
export class PfLabelGroupExpandEvent extends Event {
    constructor() {
        super('expand', { bubbles: true, cancelable: true });
    }
}
export class PfLabelGroupRemoveEvent extends Event {
    constructor() {
        super('remove', { bubbles: true, cancelable: true });
    }
}
/**
 * `${`
 * **WS** (_>= 0x_)
 * `remaining`
 * **WS** (_>= 0x_)
 * `}`
 */
const REMAINING_RE = /\$\{\s*remaining\s*\}/g;
let PfLabelGroup = class PfLabelGroup extends LitElement {
    constructor() {
        super();
        _PfLabelGroup_instances.add(this);
        /** Orientation of the label group. */
        this.orientation = 'horizontal';
        /** Accessible label for the label group when no category name is provided. */
        this.accessibleLabel = '';
        /** Accessible label for the close button. */
        this.accessibleCloseLabel = 'Close';
        /**
         * Customizable "more" template string.
         * Use variable `${remaining}` for the overflow label count.
         */
        this.collapsedText = '${remaining} more';
        /** Customizable "show less" text string. */
        this.expandedText = 'show less';
        /** Number of labels to show before overflow. */
        this.numLabels = 3;
        /** Whether overflow labels are visible. */
        this.open = false;
        /** Whether the label group can be closed. */
        this.closeable = false;
        /** Label count tracked during SSR via child events. */
        this._ssrLabelCount = 0;
        _PfLabelGroup_tabindex.set(this, RovingTabindexController.of(this, {
            getItems: () => [
                ...Array.prototype.slice.call(__classPrivateFieldGet(this, _PfLabelGroup_instances, "a", _PfLabelGroup_labels_get), 0, this.open ? __classPrivateFieldGet(this, _PfLabelGroup_instances, "a", _PfLabelGroup_labels_get).length : Math.min(__classPrivateFieldGet(this, _PfLabelGroup_instances, "a", _PfLabelGroup_labels_get).length, this.numLabels)),
                __classPrivateFieldGet(this, _PfLabelGroup_instances, "a", _PfLabelGroup_overflowLabel_get),
                __classPrivateFieldGet(this, _PfLabelGroup_instances, "a", _PfLabelGroup_closeButton_get),
            ].filter(x => !!x),
        }));
        this.addEventListener('remove', __classPrivateFieldGet(this, _PfLabelGroup_instances, "m", _PfLabelGroup_onRemove));
        this.addEventListener('ssr:label', () => this._ssrLabelCount++);
    }
    render() {
        const empty = __classPrivateFieldGet(this, _PfLabelGroup_instances, "a", _PfLabelGroup_labelCount_get) <= 0;
        return html `
      <div id="outer"
           class="${classMap({ 'has-category': __classPrivateFieldGet(this, _PfLabelGroup_instances, "a", _PfLabelGroup_hasCategory_get), empty })}"
           role="toolbar">
        <slot id="category"
              name="category"
              @slotchange="${__classPrivateFieldGet(this, _PfLabelGroup_instances, "m", _PfLabelGroup_onSlotchange)}">
          <span class="visually-hidden"
                ?hidden="${!this.accessibleLabel}">${this.accessibleLabel ?? ''}</span>
        </slot>
        <slot id="labels" @slotchange="${__classPrivateFieldGet(this, _PfLabelGroup_instances, "m", _PfLabelGroup_onSlotchange)}"></slot>
        <pf-label id="overflow"
                  aria-controls="labels"
                  overflow-label
                  ?hidden="${__classPrivateFieldGet(this, _PfLabelGroup_instances, "a", _PfLabelGroup_remaining_get) < 1}"
                  @click="${__classPrivateFieldGet(this, _PfLabelGroup_instances, "m", _PfLabelGroup_onMoreClick)}"
        >${__classPrivateFieldGet(this, _PfLabelGroup_instances, "a", _PfLabelGroup_remaining_get) < 1 ? ''
            : this.open ? this.expandedText
                : this.collapsedText.replace(REMAINING_RE, __classPrivateFieldGet(this, _PfLabelGroup_instances, "a", _PfLabelGroup_remaining_get).toString())}</pf-label>
        <pf-button id="close-button"
                   plain
                   icon="times-circle"
                   icon-set="fas"
                   label="${this.accessibleCloseLabel}"
                   aria-describedby="category"
                   ?hidden="${!this.closeable}"
                   @click="${__classPrivateFieldGet(this, _PfLabelGroup_instances, "m", _PfLabelGroup_onCloseClick)}"></pf-button>
      </div>
    `;
    }
    /** Updates labels when relevant properties change. */
    labelsChanged() {
        __classPrivateFieldGet(this, _PfLabelGroup_instances, "m", _PfLabelGroup_updateOverflow).call(this);
    }
};
_PfLabelGroup_tabindex = new WeakMap();
_PfLabelGroup_instances = new WeakSet();
_PfLabelGroup_overflowLabel_get = function _PfLabelGroup_overflowLabel_get() {
    return this.renderRoot?.querySelector?.('#overflow') ?? null;
};
_PfLabelGroup_closeButton_get = function _PfLabelGroup_closeButton_get() {
    return this.renderRoot?.querySelector?.('#close-button') ?? null;
};
_PfLabelGroup_categorySlotted_get = function _PfLabelGroup_categorySlotted_get() {
    const slot = this.renderRoot
        ?.querySelector?.('slot[name="category"]');
    return slot?.assignedNodes({ flatten: true }) ?? [];
};
_PfLabelGroup_labels_get = function _PfLabelGroup_labels_get() {
    if (isServer) {
        return [];
    }
    return this.querySelectorAll('pf-label:not([slot]):not([overflow-label])');
};
_PfLabelGroup_labelCount_get = function _PfLabelGroup_labelCount_get() {
    if (isServer) {
        return this._ssrLabelCount;
    }
    return __classPrivateFieldGet(this, _PfLabelGroup_instances, "a", _PfLabelGroup_labels_get).length;
};
_PfLabelGroup_hasCategory_get = function _PfLabelGroup_hasCategory_get() {
    return __classPrivateFieldGet(this, _PfLabelGroup_instances, "a", _PfLabelGroup_categorySlotted_get).length > 0;
};
_PfLabelGroup_remaining_get = function _PfLabelGroup_remaining_get() {
    return __classPrivateFieldGet(this, _PfLabelGroup_instances, "a", _PfLabelGroup_labelCount_get) - this.numLabels;
};
_PfLabelGroup_onCloseClick = function _PfLabelGroup_onCloseClick() {
    this.dispatchEvent(new PfLabelGroupRemoveEvent());
};
_PfLabelGroup_onMoreClick = async function _PfLabelGroup_onMoreClick(event) {
    event.stopPropagation();
    this.open = !this.open;
    await this.updateComplete;
    this.labelsChanged();
    if (__classPrivateFieldGet(this, _PfLabelGroup_instances, "a", _PfLabelGroup_overflowLabel_get)) {
        __classPrivateFieldGet(this, _PfLabelGroup_tabindex, "f").atFocusedItemIndex = __classPrivateFieldGet(this, _PfLabelGroup_tabindex, "f").items.indexOf(__classPrivateFieldGet(this, _PfLabelGroup_instances, "a", _PfLabelGroup_overflowLabel_get));
    }
    this.dispatchEvent(new PfLabelGroupExpandEvent());
};
_PfLabelGroup_onSlotchange = function _PfLabelGroup_onSlotchange() {
    this.requestUpdate();
};
_PfLabelGroup_onRemove = function _PfLabelGroup_onRemove(event) {
    if (event instanceof PfLabelGroupRemoveEvent) {
        this.remove();
    }
};
_PfLabelGroup_updateOverflow = function _PfLabelGroup_updateOverflow() {
    __classPrivateFieldGet(this, _PfLabelGroup_instances, "a", _PfLabelGroup_labels_get).forEach((label, i) => {
        label.hidden = i >= this.numLabels && !this.open;
    });
};
PfLabelGroup.styles = [styles];
PfLabelGroup.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
PfLabelGroup.version = "4.4.0";
__decorate([
    property({ reflect: true })
], PfLabelGroup.prototype, "orientation", void 0);
__decorate([
    property({ attribute: 'accessible-label' })
], PfLabelGroup.prototype, "accessibleLabel", void 0);
__decorate([
    property({ attribute: 'accessible-close-label' })
], PfLabelGroup.prototype, "accessibleCloseLabel", void 0);
__decorate([
    property({ attribute: 'collapsed-text' })
], PfLabelGroup.prototype, "collapsedText", void 0);
__decorate([
    property({ attribute: 'expanded-text' })
], PfLabelGroup.prototype, "expandedText", void 0);
__decorate([
    property({ attribute: 'num-labels', type: Number })
], PfLabelGroup.prototype, "numLabels", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfLabelGroup.prototype, "open", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfLabelGroup.prototype, "closeable", void 0);
__decorate([
    observes('numLabels'),
    observes('closeable'),
    observes('open')
], PfLabelGroup.prototype, "labelsChanged", null);
PfLabelGroup = __decorate([
    customElement('pf-label-group')
], PfLabelGroup);
export { PfLabelGroup };
//# sourceMappingURL=pf-label-group.js.map