import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { css } from "lit";
const styles = css `:host{display:block}:host([compact]){margin-block-end:var(--rh-space-3xl)}#container{display:flex;flex-direction:column;align-items:center;width:100%}slot[name=header]::slotted(*){margin-block:0!important}slot[name=header]::slotted(h1){color:var(--rh-color-text-brand-on-light);margin-block-end:0;text-transform:capitalize;font-family:var(--rh-font-family-heading);line-height:var(--rh-line-height-heading);font-size:var(--rh-font-size-code-lg)!important;font-weight:var(--rh-font-weight-code-medium)}slot[name=tagline]::slotted(p){font-size:var(--rh-font-size-heading-2xl)!important;margin-block:var(--rh-space-lg)!important;text-align:center}slot[name=image]::slotted(img){width:100%;height:auto;margin-block-start:var(--rh-space-4xl)}:host slot[name=header]::slotted(h2){color:var(--rh-color-text-brand-on-light);font-family:var(--rh-font-family-heading);font-size:var(--rh-font-size-heading-xl)!important;font-weight:var(--rh-font-weight-heading-regular)!important;margin-block-end:var(--rh-space-2xl)!important;text-align:center}:host([compact]) ::slotted(p){font-size:var(--rh-font-size-body-text-lg);text-align:center;max-width:62rem}`;
let UxdotHero = class UxdotHero extends LitElement {
    render() {
        return html `
      <div id="container" part="container">
        <slot name="header"></slot>
        <slot name="tagline"></slot>
        <slot></slot>
        <slot name="image"></slot>
      </div>
    `;
    }
};
UxdotHero.styles = [styles];
UxdotHero = __decorate([
    customElement('uxdot-hero')
], UxdotHero);
export { UxdotHero };
//# sourceMappingURL=uxdot-hero.js.map