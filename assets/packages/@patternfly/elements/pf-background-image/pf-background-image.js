var _PfBackgroundImage_instances, _PfBackgroundImage_svg, _PfBackgroundImage_updated, _PfBackgroundImage_onSlotChange;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { property } from 'lit/decorators/property.js';
import { styleMap } from 'lit/directives/style-map.js';
import { css } from "lit";
const styles = css `:host {\n  display: flex;\n\n  --_background-image: var(--pf-c-background-image--BackgroundImage);\n}\n\n#outer-container {\n  display: contents;\n}\n\n#container {\n  padding: 0;\n  margin: 0;\n  background-color: transparent;\n}\n\n#container::after {\n  display: block;\n  position: fixed;\n  top:  0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  content: "";\n  background-color: var(--pf-c-background-image--BackgroundColor, var(--pf-global--BackgroundColor--dark-100, #151515));\n  background-image: var(--_background-image);\n  filter: var(--pf-c-background-image--Filter, url("#image_overlay"));\n  background-repeat:  no-repeat;\n  background-size: cover;\n}\n\nslot[name="filter"] {\n  display: none;\n}\n\nslot[part="content"] {\n  display: block;\n  position: relative;\n  z-index: 1;\n  color: white;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  #container::after {\n    background-image: var(--pf-c-background-image--BackgroundImage-2x, var(--_background-image-2x, var(--_background-image)));\n  }\n}\n\n@media screen and (min-width: 576px) {\n  #container::after {\n    background-image: var(--pf-c-background-image--BackgroundImage--sm, var(--_background-image-sm, var(--_background-image)));\n  }\n}\n\n@media screen and (min-width: 576px) and (-webkit-min-device-pixel-ratio: 2), (min-width: 576px) and (min-resolution: 192dpi) {\n  #container::after {\n    background-image: var(--pf-c-background-image--BackgroundImage--sm-2x, var(--_background-image-sm-2x, var(--_background-image)));\n  }\n}\n\n@media screen and (min-width: 992px) {\n  #container::after {\n    background-image: var(--pf-c-background-image--BackgroundImage--lg, var(--_background-image-lg, var(--_background-image)));\n  }\n}\n`;
let PfBackgroundImage = class PfBackgroundImage extends LitElement {
    constructor() {
        super(...arguments);
        _PfBackgroundImage_instances.add(this);
        /**
         * Apply SVG Filter to the image
         */
        this.filter = false;
        _PfBackgroundImage_svg.set(this, void 0);
        _PfBackgroundImage_updated.set(this, false);
    }
    render() {
        const cssProps = {
            '--_background-image': this.src,
            '--_background-image-2x': this.src2x,
            '--_background-image-sm': this.srcSm,
            '--_background-image-sm-2x': this.srcSm2x,
            '--_background-image-lg': this.srcLg,
        };
        Object.entries(cssProps).forEach(([key, value]) => {
            // if the value is undefined, remove the css property
            if (!value) {
                delete cssProps[key];
            }
            else {
                // otherwise, add the value with the url() css function
                cssProps[key] = `url(${value})`;
            }
        });
        return html `
      <div id="container" part="container" style="${styleMap(cssProps)}">
        ${!this.filter ? html `` : html `
          <slot name="filter" @slotchange=${__classPrivateFieldGet(this, _PfBackgroundImage_instances, "m", _PfBackgroundImage_onSlotChange)}>
            ${(__classPrivateFieldGet(this, _PfBackgroundImage_svg, "f") && __classPrivateFieldGet(this, _PfBackgroundImage_updated, "f")) ? __classPrivateFieldGet(this, _PfBackgroundImage_svg, "f") : html `
              <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
                <filter id="image_overlay">
                  <feColorMatrix type="matrix" values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0"></feColorMatrix>
                  <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                    <feFuncR type="table" tableValues="0.086274509803922 0.43921568627451"></feFuncR>
                    <feFuncG type="table" tableValues="0.086274509803922 0.43921568627451"></feFuncG>
                    <feFuncB type="table" tableValues="0.086274509803922 0.43921568627451"></feFuncB>
                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                  </feComponentTransfer>
                </filter>
              </svg>
            `}
          </slot>
        `}
      </div>
    `;
    }
};
_PfBackgroundImage_svg = new WeakMap();
_PfBackgroundImage_updated = new WeakMap();
_PfBackgroundImage_instances = new WeakSet();
_PfBackgroundImage_onSlotChange = function _PfBackgroundImage_onSlotChange() {
    const [svg] = this._svg;
    if (svg) {
        __classPrivateFieldSet(this, _PfBackgroundImage_svg, svg, "f");
        __classPrivateFieldSet(this, _PfBackgroundImage_updated, true, "f");
        this.requestUpdate();
    }
    else {
        __classPrivateFieldSet(this, _PfBackgroundImage_updated, false, "f");
    }
};
PfBackgroundImage.styles = [styles];
PfBackgroundImage.version = "4.1.0";
__decorate([
    property({ reflect: true })
], PfBackgroundImage.prototype, "src", void 0);
__decorate([
    property({ reflect: true, attribute: 'src-2x' })
], PfBackgroundImage.prototype, "src2x", void 0);
__decorate([
    property({ reflect: true, attribute: 'src-sm' })
], PfBackgroundImage.prototype, "srcSm", void 0);
__decorate([
    property({ reflect: true, attribute: 'src-sm-2x' })
], PfBackgroundImage.prototype, "srcSm2x", void 0);
__decorate([
    property({ reflect: true, attribute: 'src-lg' })
], PfBackgroundImage.prototype, "srcLg", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfBackgroundImage.prototype, "filter", void 0);
__decorate([
    queryAssignedElements({ slot: 'filter', selector: 'svg' })
], PfBackgroundImage.prototype, "_svg", void 0);
PfBackgroundImage = __decorate([
    customElement('pf-background-image')
], PfBackgroundImage);
export { PfBackgroundImage };
//# sourceMappingURL=pf-background-image.js.map