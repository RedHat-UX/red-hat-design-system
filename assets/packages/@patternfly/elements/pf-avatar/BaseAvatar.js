import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const style = css `:host{display:contents}:host([src]) img,svg{display:inline;object-fit:cover}:host([hidden]){display:none}`;
export class AvatarLoadEvent extends Event {
    constructor(originalEvent) {
        super('load', { bubbles: true, composed: true });
        this.originalEvent = originalEvent;
    }
}
/**
 * Avatar is an element for displaying a user's avatar image.
 *
 *
 * @summary For displaying a user's avatar image
 */
export class BaseAvatar extends LitElement {
    constructor() {
        super(...arguments);
        /** The alt text for the avatar image. */
        this.alt = 'Avatar image';
        /** Size of the Avatar */
        this.size = 'sm';
        /** Whether or not the Avatar image is dark */
        this.dark = false;
    }
    render() {
        return this.src != null ? html `
      <img
        size=${this.size}
        alt=${this.alt ?? ''}
        @load="${(e) => this.dispatchEvent(new AvatarLoadEvent(e))}"
        src=${this.src}>
    ` : this.dark ? html `
      <svg xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 36 36" viewBox="0 0 36 36">
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
}
BaseAvatar.styles = [style];
__decorate([
    property()
], BaseAvatar.prototype, "src", void 0);
__decorate([
    property({ reflect: true })
], BaseAvatar.prototype, "alt", void 0);
__decorate([
    property({ reflect: true })
], BaseAvatar.prototype, "size", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], BaseAvatar.prototype, "dark", void 0);
//# sourceMappingURL=BaseAvatar.js.map