import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import '@rhds/elements/rh-scheme-toggle/rh-scheme-toggle.js';
import { css } from "lit";
const styles = css `:host{color-scheme:only dark;display:block;background-color:var(--rh-color-surface-darkest);color:var(--rh-color-text-primary-on-dark);height:max-content;container-type:inline-size;container-name:uxdot-masthead}#container{display:grid;column-gap:var(--rh-space-lg);grid-template-columns:max-content 1fr 1fr;max-height:var(--uxdot-masthead-max-height,72px);margin-inline:var(--rh-space-md);margin-block:var(--rh-space-lg)}#container #scheme{display:none}@container (min-width: 576px){#container{gap:var(--rh-space-2xl);margin:var(--rh-space-lg)}}@container (min-width: 992px){#container{grid-template-columns:1fr max-content max-content}#container #scheme{display:contents}}#hamburger{display:flex;flex-direction:column;align-items:center;gap:var(--rh-space-md);justify-content:center}@container (min-width: 992px){#hamburger{display:none}}#hamburger::slotted(button){color:var(--rh-color-text-primary-on-dark);background-color:initial;border:none;margin:0;padding:var(--rh-space-md);line-height:0!important}#hamburger::slotted(button:active),#hamburger::slotted(button:focus),#hamburger::slotted(button:hover),#hamburger:hover::slotted(button){color:var(--rh-color-icon-subtle-hover)}#hamburger::slotted(button:focus){outline:var(--rh-border-width-md) solid var(--rh-color-border-interactive-on-dark);border-radius:var(--rh-border-radius-default)}#logo a{display:flex;flex-direction:row;align-items:center;justify-self:flex-start;gap:var(--rh-space-md)}@container (min-width: 992px){#logo a{margin-inline-start:var(--rh-space-lg)}}#links{--rh-icon-size:24px;justify-self:end;column-gap:var(--rh-space-lg)}#links,#links a{display:flex;flex-direction:row}#links a{gap:var(--rh-space-lg);align-items:center;color:var(--rh-color-text-primary-on-dark,#fff)!important;text-decoration:underline dashed 1px;text-decoration-color:light-dark(var(--rh-color-gray-50),var(--rh-color-gray-40));text-underline-offset:max(5px,.28em);transition:all .3s ease}#links a:is(:hover,:focus){color:var(--rh-color-icon-subtle-hover,#a3a3a3)!important}#links a:focus-within,#links a:is(:hover,:focus){text-decoration-color:inherit;text-underline-offset:max(6px,.33em)}#links #github{display:none}@container (min-width: 768px){#links #github{display:inherit}}#links #version{margin-inline-end:var(--rh-space-md,8px)}#links span.display-xs{display:none}@container uxdot-masthead (min-width: 576px){#links span.display-xs{display:inline}}`;
let UxdotMasthead = class UxdotMasthead extends LitElement {
    render() {
        const { version } = this;
        return html `
      <div id="container" part="container">
        <slot id="hamburger" name="hamburger"></slot>
        <div id="logo">
          <a href="/">
            <img alt="Red Hat Design System logo"
                 src="/assets/red-hat-design-system.svg"
                 width="188"
                 height="40">
          </a>
        </div>
        <rh-scheme-toggle id="scheme"></rh-scheme-toggle>
        <div id="links">
          <a id="github" href="https://github.com/RedHat-UX/red-hat-design-system/">
            <span class="display-xs">Contribute on Github</span>
            <rh-icon set="social" icon="github" size="lg"></rh-icon>
          </a>
          <a id="version" href="https://github.com/RedHat-UX/red-hat-design-system/releases/tag/v${version}/"
             title="Version ${version}"
             aria-label="Version ${version}">v${version}</a>
        </div>
      </div>
      <slot></slot>
    `;
    }
};
UxdotMasthead.styles = [styles];
__decorate([
    property()
], UxdotMasthead.prototype, "version", void 0);
UxdotMasthead = __decorate([
    customElement('uxdot-masthead')
], UxdotMasthead);
export { UxdotMasthead };
//# sourceMappingURL=uxdot-masthead.js.map