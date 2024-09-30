var _RhHealthIndex_internals;
var RhHealthIndex_1;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { css } from "lit";
const styles = css `:host{display:inline-block}[hidden]{display:none!important}#container{display:inline-flex;align-items:center;width:max-content;font-size:var(--rh-font-size-body-text-md,1rem);font-family:var(--rh-font-family-code,RedHatMono,"Red Hat Mono","Courier New",Courier,monospace);line-height:var(--_box-size);text-transform:uppercase;--_box-size:var(--rh-space-xl,24px);--_color-text-active:var(--rh-color-gray-95,#151515);--_color-text-inactive:var(--rh-color-gray-70,#383838);--_color-text:var(--_color-text-inactive);--_color-fill:var(--rh-color-surface-lightest,#fff);--_color-border:var(--rh-color-border-subtle)}#grade{margin-inline-end:var(--rh-space-lg,16px)}.box{background-color:var(--_color-fill,#0000);color:var(--_color-text);border:var(--rh-border-width-sm,1px) solid var(--_color-border);width:var(--_box-size);display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;position:relative;--_color-fill-active:var(--_color-10);--_color-border-active:var(--_color-20);--_color-text-active:var(--_color-30)}.box:not(:first-child){margin-inline-start:-1px}.box.active{color:var(--_color-text-active);z-index:10}:is(.sm,.md) .box.active{border-color:var(--_color-border-active);background-color:var(--_color-fill-active)}:not(.sm) .box{--_color-fill-active:var(--_color-10);--_color-border-active:var(--_color-30)}.md{height:var(--_box-size)}.md .box{height:100%}.md .box:is(.b,.c,.d){--_color-border-active:var(--_color-25)}.sm{display:inline-block;margin:0;border:none;height:var(--_box-size)}:is(.lg,.xl){--_color-fill-active:var(--_color-10);--_color-border-active:var(--_color-30);--_color-text-active:var(--_color-30);display:flex;margin:0;border:var(--rh-border-width-sm,1px) solid var(--_color-border)}#container:is(.lg,.xl) .box{border:none;margin:1px;display:inline-block;line-height:var(--_box-size);width:var(--_box-size);text-align:center;padding-inline:2px}:is(.lg,.xl) .box:after{display:block;content:"";min-height:var(--rh-length-xs,4px);z-index:10;background-color:var(--_color-20)}:is(.lg,.xl) .box.active{position:relative;margin:-1px;font-weight:var(--rh-font-weight-code-medium,500)}:is(.lg,.xl) .box.active:before{display:block;content:"";inset-inline:-1px;inset-block:-2px;z-index:-1;position:absolute;background-color:var(--_color-fill-active,var(--_color-10));border:var(--rh-border-width-sm,1px) solid var(--_color-border-active)}#container.xl{font-size:var(--rh-font-size-body-text-xl,1.25rem);--_box-size:var(--rh-space-2xl,32px)}.a{--_color-10:var(--rh-color-green-20,#d1f1bb);--_color-20:var(--rh-color-green-60,#3d7317);--_color-30:var(--rh-color-green-70,#204d00)}.b{--_color-10:var(--rh-color-green-10,#e9f7df);--_color-20:var(--rh-color-green-40,#87bb62);--_color-25:var(--rh-color-green-60,#3d7317);--_color-30:var(--rh-color-green-70,#204d00)}.c{--_color-10:var(--rh-color-yellow-10,#fff4cc);--_color-20:var(--rh-color-yellow-30,#ffcc17);--_color-25:var(--rh-color-yellow-50,#b98412);--_color-30:var(--rh-color-yellow-70,#73480b)}.d{--_color-10:var(--rh-color-orange-10,#ffe8cc);--_color-20:var(--rh-color-orange-40,#f5921b);--_color-25:var(--rh-color-orange-60,#9e4a06);--_color-30:var(--rh-color-orange-70,#732e00)}.e{--_color-10:var(--rh-color-red-orange-10,#ffe3d9);--_color-20:var(--rh-color-red-orange-60,#b1380b);--_color-30:var(--rh-color-red-orange-70,#731f00)}.f{--_color-10:var(--rh-color-red-10,#fce3e3);--_color-20:var(--rh-color-red-70,#5f0000);--_color-30:var(--rh-color-red-70,#5f0000)}#container.dark .box{--_color-text-active:var(--rh-color-white,#fff);--_color-fill:var(--rh-color-surface-darkest,#151515);--_color-text:var(--_color-text-inactive);--_color-text-inactive:var(--_color-25,var(--_color-20))}#container.dark:is(.lg,.xl) .box{--_color-fill:var(--rh-color-surface-dark-alt,#292929);--_color-fill-active:var(--rh-color-surface-darkest,#151515)}#container.dark.sm .box{background-color:var(--_color-fill)}.dark .a{--_color-10:var(--rh-color-green-60,#3d7317);--_color-25:var(--rh-color-green-10,#e9f7df);--_color-30:var(--rh-color-green-40,#87bb62)}.dark .b{--_color-10:var(--rh-color-green-40,#87bb62);--_color-25:var(--rh-color-green-10,#e9f7df);--_color-30:var(--rh-color-green-20,#d1f1bb)}.dark .c{--_color-10:var(--rh-color-yellow-30,#ffcc17);--_color-25:var(--rh-color-yellow-10,#fff4cc);--_color-30:var(--rh-color-yellow-10,#fff4cc)}.dark .d{--_color-10:var(--rh-color-orange-40,#f5921b);--_color-25:var(--rh-color-orange-10,#ffe8cc);--_color-30:var(--rh-color-orange-20,#fccb8f)}.dark .e{--_color-10:var(--rh-color-red-orange-50,#f0561d);--_color-25:var(--rh-color-red-orange-10,#ffe3d9);--_color-30:var(--rh-color-red-orange-30,#f89b78)}.dark .f{--_color-10:var(--rh-color-red-60,#a60000);--_color-25:var(--rh-color-red-10,#fce3e3);--_color-30:var(--rh-color-red-40,#f56e6e)}`;
/**
 * Health index displays a health grade (A–F) for a particular item or package.
 * @summary     Displays a health grade for a particular item or package
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
        const { on, size } = this;
        const grades = [...RhHealthIndex_1.grades].map(x => x.toLowerCase());
        const grade = this.grade.toLowerCase();
        return html `
      <div id="container"
           aria-hidden="true"
           class="${classMap({ [size ?? '']: !!size, [on ?? '']: !!on })}">
        <div id="grade" ?hidden="${size !== 'md'}">${grade}</div>${size === 'sm' ? html `
        <div class="box active ${grade}">${grade}</div>` : grades.map(letter => html `
        <div class="box ${classMap({ [letter]: true, active: letter === grade })}">
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
__decorate([
    colorContextConsumer()
], RhHealthIndex.prototype, "on", void 0);
RhHealthIndex = RhHealthIndex_1 = __decorate([
    customElement('rh-health-index')
], RhHealthIndex);
export { RhHealthIndex };
//# sourceMappingURL=rh-health-index.js.map