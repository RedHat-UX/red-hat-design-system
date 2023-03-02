import { __decorate } from "tslib";
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { BaseBadge } from './BaseBadge.js';
import { css } from "lit";
const styles = css `:host{border-radius:var(--pf-c-badge--BorderRadius,var(--pf-global--BorderRadius--lg,180em));min-width:var(--pf-c-badge--MinWidth,var(--pf-global--spacer--xl,2rem));padding-left:var(--pf-c-badge--PaddingLeft,var(--pf-global--spacer--sm,.5rem));padding-right:var(--pf-c-badge--PaddingRight,var(--pf-global--spacer--sm,.5rem));font-size:var(--pf-c-badge--FontSize,\n    var(--pf-theme--font-size, .75em));font-weight:var(--pf-c-badge--FontWeight,var(--pf-theme--font-weight--bold,700));line-height:var(--pf-c-badge--LineHeight,\n    var(--pf-global--LineHeight--md, 1.5));color:var(--pf-c-badge--Color,var(--pf-global--palette--black-900,#151515));background-color:var(--pf-c-badge--BackgroundColor,var(--pf-global--palette--black-200,#f0f0f0))}:host([state=read]){--pf-c-badge--Color:var(--pf-c-badge--m-read--Color,\n    var(--pf-global--palette--black-900, #151515));--pf-c-badge--BackgroundColor:var(--pf-c-badge--m-read--BackgroundColor,\n    var(--pf-global--palette--black-200, #f0f0f0))}:host([state=unread]){--pf-c-badge--Color:var(--pf-c-badge--m-unread--Color,\n    var(--pf-global--palette--white, #fff));--pf-c-badge--BackgroundColor:var(--pf-c-badge--m-unread--BackgroundColor,\n    var(--pf-global--palette--blue-400, #06c))}`;
/**
 * A badge is used to annotate other information like a label or an object name.
 *
 * @cssprop {<length>} --pf-c-badge--BorderRadius               {@default `180em`}
 *
 * @cssprop {<length>} --pf-c-badge--MinWidth                   {@default `2rem`}
 *
 * @cssprop {<length>} --pf-c-badge--PaddingLeft                {@default `0.5rem`}
 * @cssprop {<length>} --pf-c-badge--PaddingRight               {@default `0.5rem`}
 *
 * @cssprop {<length>} --pf-c-badge--FontSize                   {@default `0.85em`}
 * @cssprop {<length>} --pf-c-badge--LineHeight                 {@default `1.5`}
 * @cssprop {<length>} --pf-c-badge--FontWeight                 {@default `700`}
 *
 * @cssprop {<color>} --pf-c-badge--Color                       {@default `#151515`}
 * @cssprop {<color>} --pf-c-badge--BackgroundColor             {@default `#f0f0f0`}
 *
 * @cssprop {<color>} --pf-c-badge--m-read--Color               {@default `#151515`}
 * @cssprop {<color>} --pf-c-badge--m-read--BackgroundColor     {@default `#f0f0f0`}
 *
 * @cssprop {<color>} --pf-c-badge--m-unread--Color             {@default `#fff`}
 * @cssprop {<color>} --pf-c-badge--m-unread--BackgroundColor   {@default `#06c`}
 */
let PfBadge = class PfBadge extends BaseBadge {
};
PfBadge.styles = [...BaseBadge.styles, styles];
__decorate([
    property({ reflect: true })
], PfBadge.prototype, "state", void 0);
__decorate([
    property({ reflect: true, type: Number })
], PfBadge.prototype, "number", void 0);
__decorate([
    property({ reflect: true, type: Number })
], PfBadge.prototype, "threshold", void 0);
PfBadge = __decorate([
    customElement('pf-badge')
], PfBadge);
export { PfBadge };
//# sourceMappingURL=pf-badge.js.map