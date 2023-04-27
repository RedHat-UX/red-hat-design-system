import { __decorate } from "tslib";
import { BaseIcon } from './BaseIcon.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const style = css `:host([size=sm]) #container{--_size:var(--pf-global--icon--FontSize--sm, 10px)}:host([size=md]) #container{--_size:var(--pf-global--icon--FontSize--md, 18px)}:host([size=lg]) #container{--_size:var(--pf-global--icon--FontSize--lg, 24px)}:host([size=xl]) #container{--_size:var(--pf-global--icon--FontSize--xl, 54px)}#container,svg{width:var(--pf-icon--size,var(--_size));height:var(--pf-icon--size,var(--_size));min-width:var(--pf-icon--size,var(--_size));min-height:var(--pf-icon--size,var(--_size))}`;
/**
 * An **icon** component is a container that allows for icons of varying dimensions to
 * seamlessly replace each other without shifting surrounding content.
 *
 * @slot - Slotted content is used as a fallback in case the icon doesn't load
 * @fires load - Fired when an icon is loaded and rendered
 * @fires error - Fired when an icon fails to load
 * @csspart fallback - Container for the fallback (i.e. slotted) content
 */
let PfIcon = class PfIcon extends BaseIcon {
    constructor() {
        super(...arguments);
        /** Size of the icon */
        this.size = 'sm';
    }
};
PfIcon.styles = [...BaseIcon.styles, style];
PfIcon.defaultIconSet = 'fas';
__decorate([
    property({ reflect: true })
], PfIcon.prototype, "size", void 0);
PfIcon = __decorate([
    customElement('pf-icon')
], PfIcon);
export { PfIcon };
//# sourceMappingURL=pf-icon.js.map