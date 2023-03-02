import { __decorate } from "tslib";
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { BaseAvatar } from './BaseAvatar.js';
import { css } from "lit";
const style = css `img,svg{width:var(--pf-c-avatar--Width,24px);height:var(--pf-c-avatar--Height,24px);border-radius:var(--pf-c-avatar--BorderRadius,var(--pf-global--BorderRadius--lg,128px));border:var(--pf-c-avatar--BorderWidth,0) solid var(--pf-c-avatar--BorderColor,var(--pf-global--BorderColor--dark-100,#d2d2d2))}:host([border]) :is(img,svg){--pf-c-avatar--BorderWidth:var(--pf-global--BorderWidth--sm, 1px)}:host([border=dark]) :is(img,svg){--pf-c-avatar--BorderColor:var(--pf-c-avatar--m-dark--BorderColor,\n      var(--pf-global--palette--black-700, #4f5255))}:host([size=sm]){--pf-c-avatar--Width:var(--pf-c-avatar--m-sm--Width, 24px);--pf-c-avatar--Height:var(--pf-c-avatar--m-sm--Height, 24px)}:host([size=md]){--pf-c-avatar--Width:var(--pf-c-avatar--m-md--Width, 36px);--pf-c-avatar--Height:var(--pf-c-avatar--m-md--Height, 36px)}:host([size=lg]){--pf-c-avatar--Width:var(--pf-c-avatar--m-lg--Width, 72px);--pf-c-avatar--Height:var(--pf-c-avatar--m-lg--Height, 72px)}:host([size=xl]){--pf-c-avatar--Width:var(--pf-c-avatar--m-xl--Width, 128px);--pf-c-avatar--Height:var(--pf-c-avatar--m-xl--Height, 128px)}`;
/**
 * Avatar is an element for displaying a user's avatar image.
 *
 *
 * @summary For displaying a user's avatar image
 */
let PfAvatar = class PfAvatar extends BaseAvatar {
    constructor() {
        super(...arguments);
        /** Size of the Avatar */
        this.size = 'sm';
    }
};
PfAvatar.styles = [style];
__decorate([
    property({ reflect: true })
], PfAvatar.prototype, "size", void 0);
__decorate([
    property({ reflect: true })
], PfAvatar.prototype, "border", void 0);
PfAvatar = __decorate([
    customElement('pf-avatar')
], PfAvatar);
export { PfAvatar };
//# sourceMappingURL=pf-avatar.js.map