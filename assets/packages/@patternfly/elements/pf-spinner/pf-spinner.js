import { __decorate } from "tslib";
import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { styleMap } from 'lit/directives/style-map.js';
import { BaseSpinner } from './BaseSpinner.js';
import { css } from "lit";
const styles = css `[hidden]{display:none!important}div{display:contents}svg{width:var(--pf-c-spinner--Width,var(--pf-c-spinner--diameter,var(--pf-global--icon--FontSize--xl,3.375rem)));height:var(--pf-c-spinner--Height,var(--pf-c-spinner--diameter,var(--pf-global--icon--FontSize--xl,3.375rem)));animation:pf-c-spinner-animation-rotate calc(var(--pf-c-spinner--AnimationDuration,1.4s) * 2) var(--pf-c-spinner--AnimationTimingFunction,linear) infinite}:host([size=sm]) div{--pf-c-spinner--diameter:var(--pf-c-spinner--m-sm--diameter,\n    var(--pf-global--icon--FontSize--sm, 0.625rem))}:host([size=md]) div{--pf-c-spinner--diameter:var(--pf-c-spinner--m-md--diameter,\n    var(--pf-global--icon--FontSize--md, 1.125rem))}:host([size=lg]) div{--pf-c-spinner--diameter:var(--pf-c-spinner--m-lg--diameter,\n    var(--pf-global--icon--FontSize--lg, 1.5rem))}:host([size=xl]) div{--pf-c-spinner--diameter:var(--pf-c-spinner--m-xl--diameter,\n    var(--pf-global--icon--FontSize--xl, 3.375rem))}circle{stroke:var(--pf-c-spinner--Color,var(--pf-global--primary-color--100,#06c));stroke-width:var(--pf-c-spinner--stroke-width,10);animation:pf-c-spinner-animation-dash var(--pf-c-spinner--AnimationDuration,1.4s) var(--pf-c-spinner__path--AnimationTimingFunction,ease-in-out) infinite}@keyframes pf-c-spinner-animation-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes pf-c-spinner-animation-dash{0%{stroke-dashoffset:280;transform:rotate(0)}15%{stroke-width:calc(var(--pf-c-spinner__path--StrokeWidth,10) - 4)}40%{stroke-dashoffset:150;stroke-dasharray:220}100%{stroke-dashoffset:280;transform:rotate(720deg)}}`;
/**
 * A spinner is used to indicate to users that an action is in progress. For actions
 * that may take a long time, use a progress bar instead.
 *
 * @cssprop {<length>} --pf-c-spinner--diameter                      {@default `3.375rem`}
 * @cssprop {<length>} --pf-c-spinner--Width                         {@default `3.375rem`}
 * @cssprop {<length>} --pf-c-spinner--Height                        {@default `3.375rem`}
 * @cssprop {<color>}  --pf-c-spinner--Color                         {@default `#06c`}
 * @cssprop {<length>} --pf-c-spinner--m-sm--diameter                {@default `0.625rem`}
 * @cssprop {<length>} --pf-c-spinner--m-md--diameter                {@default `1.125rem`}
 * @cssprop {<length>} --pf-c-spinner--m-lg--diameter                {@default `1.5rem`}
 * @cssprop {<length>} --pf-c-spinner--m-xl--diameter                {@default `3.375rem`}
 * @cssprop {<time>}   --pf-c-spinner--AnimationDuration             {@default `1.4s`}
 * @cssprop {<string>} --pf-c-spinner--AnimationTimingFunction       {@default `linear`}
 * @cssprop {<number>} --pf-c-spinner--stroke-width                  {@default `10`}
 * @cssprop {<color>}  --pf-c-spinner__path--Stroke                  {@default `#06c`}
 * @cssprop {<number>} --pf-c-spinner__path--StrokeWidth             {@default `10`}
 * @cssprop {<string>} --pf-c-spinner__path--AnimationTimingFunction {@default `ease-in-out`}
 */
let PfSpinner = class PfSpinner extends BaseSpinner {
    render() {
        return html `<div style=${styleMap({ '--pf-c-spinner--diameter': this.diameter })}>${super.render()}</div>`;
    }
};
PfSpinner.styles = [...BaseSpinner.styles, styles];
PfSpinner = __decorate([
    customElement('pf-spinner')
], PfSpinner);
export { PfSpinner };
//# sourceMappingURL=pf-spinner.js.map