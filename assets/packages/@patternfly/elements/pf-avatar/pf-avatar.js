var _PfAvatar_instances, _PfAvatar_onLoad;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { css } from "lit";
const style = css `:host {
  display: inline-block;
\t/** Border color for avatar */
\t--pf-c-avatar--BorderColor: transparent;
\t/** Border width for avatar */
\t--pf-c-avatar--BorderWidth: 0;
\t/** Border radius for avatar */
\t--pf-c-avatar--BorderRadius: var(--pf-global--BorderRadius--lg, 30em);
\t/** Width for avatar */
\t--pf-c-avatar--Width: 2.25rem;
\t/** Height for avatar */
\t--pf-c-avatar--Height: 2.25rem;
\t/** Width for small avatar */
\t--pf-c-avatar--m-sm--Width: 1.5rem;
\t/** Height for small avatar */
\t--pf-c-avatar--m-sm--Height: 1.5rem;
\t/** Width for medium avatar */
\t--pf-c-avatar--m-md--Width: 2.25rem;
\t/** Height for medium avatar */
\t--pf-c-avatar--m-md--Height: 2.25rem;
\t/** Width for large avatar */
\t--pf-c-avatar--m-lg--Width: 4.5rem;
\t/** Height for large avatar */
\t--pf-c-avatar--m-lg--Height: 4.5rem;
\t/** Width for extra large avatar */
\t--pf-c-avatar--m-xl--Width: 8rem;
\t/** Height for extra large avatar */
\t--pf-c-avatar--m-xl--Height: 8rem;
\t--pf-c-avatar--m-light--BorderColor: var(--pf-global--BorderColor--dark-100, #d2d2d2);
\t--pf-c-avatar--m-light--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);
\t/** Border color for dark avatar */
\t--pf-c-avatar--m-dark--BorderColor: var(--pf-global--palette--black-700, #4f5255);
\t--pf-c-avatar--m-dark--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);
\twidth: var(--pf-c-avatar--Width);
\theight: var(--pf-c-avatar--Height);
\tborder-radius: var(--pf-c-avatar--BorderRadius);
}

:host([hidden]),
[hidden] {
  display: none !important;
}

svg,
img {
  display: inline;
  object-fit: cover;
  width: var(--pf-c-avatar--Width);
  height: var(--pf-c-avatar--Height);
  border-radius: var(--pf-c-avatar--BorderRadius);
  border: var(--pf-c-avatar--BorderWidth) solid var(--pf-c-avatar--BorderColor);
}

:host([border]) {
  --pf-c-avatar--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);
}

:host([border="dark"]) {
  --pf-c-avatar--BorderColor: var(--pf-c-avatar--m-dark--BorderColor);
}

:host([size="sm"]) {
  --pf-c-avatar--Width: var(--pf-c-avatar--m-sm--Width);
  --pf-c-avatar--Height: var(--pf-c-avatar--m-sm--Height);
}

:host([size="md"]) {
  --pf-c-avatar--Width: var(--pf-c-avatar--m-md--Width);
  --pf-c-avatar--Height: var(--pf-c-avatar--m-md--Height);
}

:host([size="lg"]) {
  --pf-c-avatar--Width: var(--pf-c-avatar--m-lg--Width);
  --pf-c-avatar--Height: var(--pf-c-avatar--m-lg--Height);
}

:host([size="xl"]) {
  --pf-c-avatar--Width: var(--pf-c-avatar--m-xl--Width);
  --pf-c-avatar--Height: var(--pf-c-avatar--m-xl--Height);
}
`;
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
PfAvatar.version = "4.3.0";
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