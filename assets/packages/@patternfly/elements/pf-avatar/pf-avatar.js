var _PfAvatar_instances, _PfAvatar_onLoad;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { css } from "lit";
const style = css `:host {\n  display: inline-block;\n\t--pf-c-avatar--BorderColor: transparent;\n\t--pf-c-avatar--BorderWidth: 0;\n\t--pf-c-avatar--BorderRadius: var(--pf-global--BorderRadius--lg, 30em);\n\t--pf-c-avatar--Width: 2.25rem;\n\t--pf-c-avatar--Height: 2.25rem;\n\t--pf-c-avatar--m-sm--Width: 1.5rem;\n\t--pf-c-avatar--m-sm--Height: 1.5rem;\n\t--pf-c-avatar--m-md--Width: 2.25rem;\n\t--pf-c-avatar--m-md--Height: 2.25rem;\n\t--pf-c-avatar--m-lg--Width: 4.5rem;\n\t--pf-c-avatar--m-lg--Height: 4.5rem;\n\t--pf-c-avatar--m-xl--Width: 8rem;\n\t--pf-c-avatar--m-xl--Height: 8rem;\n\t--pf-c-avatar--m-light--BorderColor: var(--pf-global--BorderColor--dark-100, #d2d2d2);\n\t--pf-c-avatar--m-light--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);\n\t--pf-c-avatar--m-dark--BorderColor: var(--pf-global--palette--black-700, #4f5255);\n\t--pf-c-avatar--m-dark--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);\n\twidth: var(--pf-c-avatar--Width);\n\theight: var(--pf-c-avatar--Height);\n\tborder-radius: var(--pf-c-avatar--BorderRadius);\n}\n\n:host([hidden]),\n[hidden] {\n  display: none !important;\n}\n\nsvg,\nimg {\n  display: inline;\n  object-fit: cover;\n  width: var(--pf-c-avatar--Width);\n  height: var(--pf-c-avatar--Height);\n  border-radius: var(--pf-c-avatar--BorderRadius);\n  border: var(--pf-c-avatar--BorderWidth) solid var(--pf-c-avatar--BorderColor);\n}\n\n:host([border]) {\n  --pf-c-avatar--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);\n}\n\n:host([border="dark"]) {\n  --pf-c-avatar--BorderColor: var(--pf-c-avatar--m-dark--BorderColor);\n}\n\n:host([size="sm"]) {\n  --pf-c-avatar--Width: var(--pf-c-avatar--m-sm--Width);\n  --pf-c-avatar--Height: var(--pf-c-avatar--m-sm--Height);\n}\n\n:host([size="md"]) {\n  --pf-c-avatar--Width: var(--pf-c-avatar--m-md--Width);\n  --pf-c-avatar--Height: var(--pf-c-avatar--m-md--Height);\n}\n\n:host([size="lg"]) {\n  --pf-c-avatar--Width: var(--pf-c-avatar--m-lg--Width);\n  --pf-c-avatar--Height: var(--pf-c-avatar--m-lg--Height);\n}\n\n:host([size="xl"]) {\n  --pf-c-avatar--Width: var(--pf-c-avatar--m-xl--Width);\n  --pf-c-avatar--Height: var(--pf-c-avatar--m-xl--Height);\n}\n`;
export class PfAvatarLoadEvent extends Event {
    constructor(originalEvent) {
        super('load', { bubbles: true });
        this.originalEvent = originalEvent;
    }
}
let PfAvatar = class PfAvatar extends LitElement {
    constructor() {
        super(...arguments);
        _PfAvatar_instances.add(this);
        /** The alt text for the avatar image. */
        this.alt = 'Avatar image';
        /** Size of the Avatar */
        this.size = 'sm';
        /** Whether or not the Avatar image is dark */
        this.dark = false;
    }
    render() {
        return this.src != null ? html `
      <img id="img"
           alt="${this.alt ?? ''}"
           src=${this.src}
           @load="${__classPrivateFieldGet(this, _PfAvatar_instances, "m", _PfAvatar_onLoad)}">
    ` : this.dark ? html `
      <svg xmlns="http://www.w3.org/2000/svg"
           style="enable-background:new 0 0 36 36"
           viewBox="0 0 36 36">
        <style>.st1,.st2{fill-rule:evenodd;clip-rule:evenodd;fill:#6a6e73}.st2{fill:#4f5255}</style><path d="M0 0h36v36H0z" style="fill:#212427"/>
        <path d="M30.5 36c-.4-3.9-1.3-9-2.9-11-1.1-1.4-2.3-2.2-3.5-2.6s-1.8-.6-6.3-.6-6.1.7-6.1.7c-1.2.4-2.4 1.2-3.4 2.6C6.7 27 5.8 32.2 5.4 36h25.1zM17.7 20.1c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.8 6.4-6.4 6.4z" class="st1"/><path d="M13.3 36v-6.7c-2 .4-2.9 1.4-3.1 3.5l-.1 3.2h3.2zM22.7 36v-6.7c2 .4 2.9 1.4 3.1 3.5l.1 3.2h-3.2z" class="st2"/>
      </svg>
    ` : html `
      <svg xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 36 36" viewBox="0 0 36 36">
        <style>.st2{fill:#b8bbbe}</style><path d="M0 0h36v36H0z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#f0f0f0"/>
        <path d="M17.7 20.1c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.8 6.4-6.4 6.4z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#d2d2d2"/><path d="M13.3 36v-6.7c-2 .4-2.9 1.4-3.1 3.5l-.1 3.2h3.2z" class="st2"/>
        <path d="m10.1 36 .1-3.2c.2-2.1 1.1-3.1 3.1-3.5V36h9.4v-6.7c2 .4 2.9 1.4 3.1 3.5l.1 3.2h4.7c-.4-3.9-1.3-9-2.9-11-1.1-1.4-2.3-2.2-3.5-2.6s-1.8-.6-6.3-.6-6.1.7-6.1.7c-1.2.4-2.4 1.2-3.4 2.6-1.7 1.9-2.6 7.1-3 10.9h4.7z" style="fill:#d2d2d2"/><path d="m25.9 36-.1-3.2c-.2-2.1-1.1-3.1-3.1-3.5V36h3.2z" class="st2"/>
      </svg>
      `;
    }
};
_PfAvatar_instances = new WeakSet();
_PfAvatar_onLoad = function _PfAvatar_onLoad(event) {
    this.dispatchEvent(new PfAvatarLoadEvent(event));
};
PfAvatar.styles = [style];
PfAvatar.version = "4.1.0";
__decorate([
    property()
], PfAvatar.prototype, "src", void 0);
__decorate([
    property({ reflect: true })
], PfAvatar.prototype, "alt", void 0);
__decorate([
    property({ reflect: true })
], PfAvatar.prototype, "size", void 0);
__decorate([
    property({ reflect: true })
], PfAvatar.prototype, "border", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfAvatar.prototype, "dark", void 0);
PfAvatar = __decorate([
    customElement('pf-avatar')
], PfAvatar);
export { PfAvatar };
//# sourceMappingURL=pf-avatar.js.map