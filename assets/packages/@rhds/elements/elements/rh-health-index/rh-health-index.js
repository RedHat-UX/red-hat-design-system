var _RhHealthIndex_internals;
var RhHealthIndex_1;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:inline-block}[hidden]{display:none!important}#grade{margin-inline-end:var(--rh-space-lg,16px)}.a,.b{--_border-sm:var(--rh-color-status-success);--_border-md:#0000;--_border-lg:var(--rh-color-status-success);--_fill-sm:var(--rh-color-surface-status-success);--_fill-md:var(--rh-color-status-success);--_fill-lg:var(--rh-color-surface-status-success);--_text-sm:var(--rh-color-text-primary);--_text-lg:var(--rh-color-text-primary);--_accent:var(--rh-color-status-success)}.c{--_border-sm:var(--rh-color-status-warning);--_border-md:#0000;--_border-lg:var(--rh-color-status-warning);--_fill-sm:var(--rh-color-surface-status-warning);--_fill-md:var(--rh-color-status-warning);--_fill-lg:var(--rh-color-surface-status-warning);--_text-sm:var(--rh-color-text-primary);--_text-lg:var(--rh-color-text-primary);--_accent:var(--rh-color-status-warning)}.d{--_border-sm:var(--rh-color-status-caution);--_border-md:#0000;--_border-lg:var(--rh-color-status-caution);--_fill-sm:var(--rh-color-surface-status-caution);--_fill-md:var(--rh-color-status-caution);--_fill-lg:var(--rh-color-surface-status-caution);--_text-sm:var(--rh-color-text-primary);--_text-lg:var(--rh-color-text-primary);--_accent:var(--rh-color-status-caution)}.e,.f{--_border-sm:var(--rh-color-status-danger);--_border-md:#0000;--_border-lg:var(--rh-color-status-danger);--_fill-sm:var(--rh-color-surface-status-danger);--_fill-md:var(--rh-color-status-danger);--_fill-lg:var(--rh-color-surface-status-danger);--_text-sm:var(--rh-color-text-primary);--_text-lg:var(--rh-color-text-primary);--_accent:var(--rh-color-status-danger)}#container{--_box-size:var(--rh-space-xl,24px);display:inline-flex;scale:1;align-items:center;width:max-content;font-size:var(--_font-size,var(--rh-font-size-body-text-md,1rem));font-family:var(--rh-font-family-code,RedHatMono,"Red Hat Mono","Courier New",Courier,monospace);line-height:var(--_box-size);text-transform:uppercase}#container.xl{--_box-size:var(--rh-space-2xl,32px);--_font-size:var(--rh-font-size-body-text-xl,1.25rem)}#container.sm{display:inline-block;margin:0;border:none}#container.md,#container.sm{height:var(--_box-size)}#container.lg,#container.xl{display:flex;margin:0;border:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}.box{border:var(--rh-border-width-sm,1px) solid #0000;background-color:light-dark(var(--rh-color-surface-lightest,#fff),oklch(from var(--rh-color-surface-dark,#383838) calc(l * .82) c h));width:var(--_box-size);display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;position:relative}.box:not(:first-child){margin-inline-start:-1px}.box.active{color:var(--rh-color-text-primary);z-index:1}.box.sm{color:light-dark(var(--_text-sm),var(--rh-color-text-primary));border-color:var(--_border-sm);background-color:light-dark(var(--_fill-sm),var(--rh-color-surface-darkest,#151515))}.box.md{border-color:light-dark(var(--rh-color-border-subtle-on-light,#c7c7c7),var(--rh-color-icon-subtle,#707070));background-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));height:100%}.box.md.active{border-color:var(--_border-md);background-color:var(--_fill-md)}.box.lg,.box.xl{border:none;margin:1px;display:inline-block;line-height:var(--_box-size);width:var(--_box-size);text-align:center;padding-inline:2px;color:var(--_text-lg)}.box.lg:after,.box.xl:after{display:block;content:"";min-height:var(--rh-length-xs,4px);z-index:1;background-color:var(--_accent)}.box.lg.active,.box.xl.active{position:relative;margin:-1px;font-weight:var(--rh-font-weight-code-medium,500);color:var(--rh-color-text-primary)}.box.lg.active:before,.box.xl.active:before{display:block;content:"";inset:-2px -1px;z-index:-1;position:absolute;background-color:light-dark(var(--_fill-lg),var(--rh-color-surface-darkest,#151515));border:var(--rh-border-width-sm,1px) solid var(--_border-lg)}`;
/**
 * Health index displays a health grade (A–F) for a particular item or package.
 *
 * @summary     Displays a health grade for a particular item or package
 *
 * @alias health-index
 */
let RhHealthIndex = RhHealthIndex_1 = class RhHealthIndex extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Sets the size of the health index
         * Defaults to `md`
         */
        this.size = 'md';
        /**
         * Sets the health grade
         * Defaults to `A`
         */
        this.grade = 'A';
        // TODO: use I18nController to support officially supported languages.
        _RhHealthIndex_internals.set(this, InternalsController.of(this, {
            role: 'meter',
            ariaValueMin: '1',
            ariaValueMax: '6',
            ariaValueText: 'Grade A',
            ariaLabel: 'Health graded A through F',
            ariaRoleDescription: 'Level indicator',
        }));
    }
    willUpdate(changed) {
        this.grade = this.grade.toUpperCase();
        if (changed.has('grade')) {
            const { grade } = this;
            const gradeNumeral = (RhHealthIndex_1.grades.indexOf(grade) + 1);
            __classPrivateFieldGet(this, _RhHealthIndex_internals, "f").ariaValueNow = gradeNumeral.toString();
            __classPrivateFieldGet(this, _RhHealthIndex_internals, "f").ariaValueText = `Grade ${grade}`;
        }
    }
    render() {
        const { size = 'md' } = this;
        const grades = [...RhHealthIndex_1.grades].map(x => x.toLowerCase());
        const grade = this.grade.toLowerCase();
        return html `
      <div id="container"
           aria-hidden="true"
           class="${classMap({ [size]: true })}">
        <div id="grade" ?hidden="${size !== 'md'}">${grade}</div>${size === 'sm' ? html `
        <div class="box ${classMap({ [grade]: true, [size]: true })}">${grade}</div>` : grades.map(letter => html `
        <div class="box ${classMap({ [letter]: true, [size]: true, active: letter === grade })}">
          ${!(size === 'lg' || size === 'xl') ? '' : letter}
        </div>`)}
      </div>
    `;
    }
};
_RhHealthIndex_internals = new WeakMap();
RhHealthIndex.styles = [styles];
RhHealthIndex.grades = 'ABCDEF';
__decorate([
    property({ reflect: true })
], RhHealthIndex.prototype, "size", void 0);
__decorate([
    property({ reflect: true })
], RhHealthIndex.prototype, "grade", void 0);
RhHealthIndex = RhHealthIndex_1 = __decorate([
    customElement('rh-health-index'),
    themable
], RhHealthIndex);
export { RhHealthIndex };
//# sourceMappingURL=rh-health-index.js.map