import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { css } from "lit";
const styles = css `:host{display:block;background-color:var(--rh-color-surface-darkest);color:var(--rh-color-text-primary-on-dark);position:fixed;inset:0;height:max-content;z-index:var(--uxdot-masthead-z-index,2);container-type:inline-size;container-name:host;z-index:10}#container{display:grid;column-gap:var(--rh-space-lg);grid-template-columns:max-content 1fr max-content;max-height:var(--uxdot-masthead-max-height,72px);margin-inline:var(--rh-space-md);margin-block:var(--rh-space-lg)}slot[name=hamburger]{display:flex;flex-direction:column;align-items:center;gap:var(--rh-space-md);justify-content:center}slot[name=hamburger]::slotted(button){color:var(--rh-color-text-primary-on-dark);background-color:initial;border:none;margin:0;padding:var(--rh-space-md);line-height:0!important}slot[name=hamburger]::slotted(button:active),slot[name=hamburger]::slotted(button:focus),slot[name=hamburger]::slotted(button:hover),slot[name=hamburger]:hover::slotted(button){color:var(--rh-color-icon-subtle-hover)}slot[name=hamburger]::slotted(button:focus){outline:var(--rh-border-width-md) solid var(--rh-color-border-interactive-on-dark);border-radius:var(--rh-border-radius-default)}slot[name=logo]::slotted(a){display:flex;flex-direction:row;align-items:center;justify-self:flex-start;gap:var(--rh-space-md)}slot[name=links]{--rh-icon-size:24px;display:flex;flex-direction:row;column-gap:var(--rh-space-lg)}slot[name=links]::slotted(a){display:flex;flex-direction:row;gap:var(--rh-space-lg);align-items:center}@container (min-width: 576px){#container{gap:var(--rh-space-lg);margin:var(--rh-space-lg)}}@container (min-width: 992px){#container{grid-template-columns:1fr max-content}slot[name=hamburger]{display:none}slot[name=logo]::slotted(a){margin-inline-start:var(--rh-space-lg)}}`;
let UxdotMasthead = class UxdotMasthead extends LitElement {
    render() {
        return html `
      <div id="container" part="container">
        <slot name="hamburger"></slot>
        <slot name="logo"></slot>
        <slot name="links"></slot>
      </div>
    `;
    }
};
UxdotMasthead.styles = [styles];
UxdotMasthead = __decorate([
    customElement('uxdot-masthead')
], UxdotMasthead);
export { UxdotMasthead };
//# sourceMappingURL=uxdot-masthead.js.map