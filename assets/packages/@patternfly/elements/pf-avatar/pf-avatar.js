import { __decorate } from "tslib";
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { BaseAvatar } from './BaseAvatar.js';
import { css } from "lit";
const style = css `svg,\nimg {\n  width: var(--pf-c-avatar--Width, 24px);\n  height: var(--pf-c-avatar--Height, 24px);\n  border-radius: var(--pf-c-avatar--BorderRadius, var(--pf-global--BorderRadius--lg, 128px));\n  border:\n    var(--pf-c-avatar--BorderWidth, 0)\n    solid\n    var(--pf-c-avatar--BorderColor,\n      var(--pf-global--BorderColor--dark-100, #d2d2d2));\n}\n\n:host([border]) :is(img, svg) {\n  --pf-c-avatar--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);\n}\n\n:host([border="dark"]) :is(img, svg) {\n  --pf-c-avatar--BorderColor: var(--pf-c-avatar--m-dark--BorderColor,\n      var(--pf-global--palette--black-700, #4f5255));\n}\n\n:host([size='sm']) {\n  --pf-c-avatar--Width: var(--pf-c-avatar--m-sm--Width, 24px);\n  --pf-c-avatar--Height: var(--pf-c-avatar--m-sm--Height, 24px);\n}\n\n:host([size='md']) {\n  --pf-c-avatar--Width: var(--pf-c-avatar--m-md--Width, 36px);\n  --pf-c-avatar--Height: var(--pf-c-avatar--m-md--Height, 36px);\n}\n\n:host([size='lg']) {\n  --pf-c-avatar--Width: var(--pf-c-avatar--m-lg--Width, 72px);\n  --pf-c-avatar--Height: var(--pf-c-avatar--m-lg--Height, 72px);\n}\n\n:host([size='xl']) {\n  --pf-c-avatar--Width: var(--pf-c-avatar--m-xl--Width, 128px);\n  --pf-c-avatar--Height: var(--pf-c-avatar--m-xl--Height, 128px);\n}\n`;
/**
 * An **avatar** is a visual used to represent a user. It may contain an image or a placeholder graphic.
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