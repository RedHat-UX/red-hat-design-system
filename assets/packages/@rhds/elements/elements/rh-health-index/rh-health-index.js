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
const styles = css `:host{display:inline-block}[hidden]{display:none!important}#grade{margin-inline-end:var(--rh-space-lg,16px)}.a{--_bs:var(--rh-color-green-60,#3d7317);--_bm:light-dark(var(--rh-color-green-70,#204d00),var(--rh-color-green-40,#87bb62));--_bl:var(--_bm);--_fs:var(--rh-color-green-20,#d1f1bb);--_fm:var(--rh-color-green-60,#3d7317);--_fl:var(--rh-color-green-20,#d1f1bb);--_ts:var(--rh-color-green-70,#204d00);--_tl:light-dark(var(--rh-color-green-70,#204d00),var(--rh-color-green-10,#e9f7df));--_accent:var(--rh-color-green-60,#3d7317)}.b{--_bs:var(--rh-color-green-40,#87bb62);--_bm:light-dark(var(--rh-color-green-60,#3d7317),var(--rh-color-green-30,#afdc8f));--_bl:light-dark(var(--rh-color-green-70,#204d00),var(--rh-color-green-20,#d1f1bb));--_fs:var(--rh-color-green-10,#e9f7df);--_fm:var(--rh-color-green-40,#87bb62);--_fl:var(--rh-color-green-10,#e9f7df);--_ts:var(--rh-color-green-70,#204d00);--_tl:light-dark(var(--rh-color-green-70,#204d00),var(--rh-color-green-10,#e9f7df));--_accent:var(--rh-color-green-40,#87bb62)}.c{--_bs:var(--rh-color-yellow-30,#ffcc17);--_bm:light-dark(var(--rh-color-yellow-50,#b98412),var(--rh-color-yellow-10,#fff4cc));--_bl:light-dark(var(--rh-color-yellow-70,#73480b),var(--rh-color-yellow-10,#fff4cc));--_fs:var(--rh-color-yellow-10,#fff4cc);--_fm:var(--rh-color-yellow-30,#ffcc17);--_fl:var(--rh-color-yellow-10,#fff4cc);--_ts:var(--rh-color-yellow-70,#73480b);--_tl:var(--_bl);--_accent:var(--rh-color-yellow-30,#ffcc17)}.d{--_bs:var(--rh-color-orange-40,#f5921b);--_bm:light-dark(var(--rh-color-orange-60,#9e4a06),var(--rh-color-orange-20,#fccb8f));--_bl:light-dark(var(--rh-color-orange-70,#732e00),var(--rh-color-orange-20,#fccb8f));--_fs:var(--rh-color-orange-10,#ffe8cc);--_fm:var(--rh-color-orange-40,#f5921b);--_fl:var(--rh-color-orange-10,#ffe8cc);--_ts:var(--rh-color-orange-70,#732e00);--_tl:light-dark(var(--rh-color-orange-70,#732e00),var(--rh-color-orange-10,#ffe8cc));--_accent:var(--rh-color-orange-40,#f5921b)}.e{--_bs:light-dark(var(--rh-color-red-orange-60,#b1380b),var(--rh-color-red-orange-50,#f0561d));--_bm:light-dark(var(--rh-color-red-orange-70,#731f00),var(--rh-color-red-orange-30,#f89b78));--_bl:var(--_bm);--_fs:var(--rh-color-red-orange-10,#ffe3d9);--_fm:var(--_bs);--_fl:var(--rh-color-red-orange-10,#ffe3d9);--_ts:var(--rh-color-red-orange-70,#731f00);--_tl:light-dark(var(--rh-color-red-orange-70,#731f00),var(--rh-color-red-orange-10,#ffe3d9));--_accent:var(--_bs)}.f{--_bs:light-dark(var(--rh-color-red-70,#5f0000),var(--rh-color-red-60,#a60000));--_bm:light-dark(var(--rh-color-red-70,#5f0000),var(--rh-color-red-40,#f56e6e));--_bl:var(--_bm);--_fs:var(--rh-color-red-10,#fce3e3);--_fm:var(--rh-color-red-70,#5f0000);--_fl:var(--rh-color-red-10,#fce3e3);--_ts:var(--rh-color-red-70,#5f0000);--_tl:light-dark(var(--rh-color-red-70,#5f0000),var(--rh-color-red-10,#fce3e3));--_accent:var(--_bs)}#container{--_box-size:var(--rh-space-xl,24px);display:inline-flex;scale:1;align-items:center;width:max-content;font-size:var(--_font-size,var(--rh-font-size-body-text-md,1rem));font-family:var(--rh-font-family-code,RedHatMono,"Red Hat Mono","Courier New",Courier,monospace);line-height:var(--_box-size);text-transform:uppercase}#container.xl{--_box-size:var(--rh-space-2xl,32px);--_font-size:var(--rh-font-size-body-text-xl,1.25rem)}#container.sm{display:inline-block;margin:0;border:none}#container.md,#container.sm{height:var(--_box-size)}#container.lg,#container.xl{display:flex;margin:0;border:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}.box{border:var(--rh-border-width-sm,1px) solid #0000;background-color:light-dark(var(--rh-color-surface-lightest,#fff),oklch(from var(--rh-color-surface-dark) calc(l * .82) c h));width:var(--_box-size);display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;position:relative}.box:not(:first-child){margin-inline-start:-1px}.box.active{color:var(--rh-color-text-primary);z-index:1}.box.sm{color:light-dark(var(--_ts),var(--rh-color-text-primary));border-color:var(--_bs);background-color:light-dark(var(--_fs),var(--rh-color-surface-darkest,#151515))}.box.md{border-color:light-dark(var(--rh-color-border-subtle-on-light,#c7c7c7),var(--rh-color-icon-subtle,#707070));background-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));height:100%}.box.md.active{border-color:var(--_bm);background-color:var(--_fm)}.box.lg,.box.xl{border:none;margin:1px;display:inline-block;line-height:var(--_box-size);width:var(--_box-size);text-align:center;padding-inline:2px;color:var(--_tl)}.box.lg:after,.box.xl:after{display:block;content:"";min-height:var(--rh-length-xs,4px);z-index:1;background-color:var(--_accent)}.box.lg.active,.box.xl.active{position:relative;margin:-1px;font-weight:var(--rh-font-weight-code-medium,500);color:var(--rh-color-text-primary)}.box.lg.active:before,.box.xl.active:before{display:block;content:"";inset:-2px -1px;z-index:-1;position:absolute;background-color:light-dark(var(--_fl),var(--rh-color-surface-darkest,#151515));border:var(--rh-border-width-sm,1px) solid var(--_bl)}`;
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