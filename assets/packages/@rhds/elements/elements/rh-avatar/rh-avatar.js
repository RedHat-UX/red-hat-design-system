var _RhAvatar_instances, _RhAvatar_style, _RhAvatar_pattern, _RhAvatar_screen, _RhAvatar_normalize, _RhAvatar_initPattern;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { css } from "lit";
const styles = css `:host{display:inline-block;width:min-content}[hidden]{display:none!important}#container{display:grid;color:var(--rh-color-text-secondary-on-light,#4d4d4d);--_colors:var(--rh-avatar-colors,var(--rh-color-blue-30,#92c5f9) var(--rh-color-teal-50,#37a3a3) var(--rh-color-green-60,#3d7317) var(--rh-color-red-40,#f56e6e) var(--rh-color-purple-60,#3d2785));column-gap:var(--rh-space-lg,16px);width:min-content;grid-template-columns:min-content minmax(max-content,250px);grid-template-rows:min-content min-content;grid-template-areas:"a t" "a s"}#title{grid-area:t;align-self:end;font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display","Noto Sans Arabic","Noto Sans Hebrew","Noto Sans JP","Noto Sans KR","Noto Sans Malayalam","Noto Sans SC","Noto Sans TC","Noto Sans Thai",Helvetica,Arial,sans-serif);font-weight:var(--rh-font-weight-heading-medium,500)}#subtitle,#title{font-size:var(--rh-font-size-body-text-sm,.875rem)}#subtitle{grid-area:s;align-self:start;font-weight:var(--rh-font-weight-heading-regular,300)}#container.mobile,:host([layout=block]) #container{text-align:center;place-items:center;gap:0;grid-template-columns:minmax(max-content,250px);grid-template-areas:"a" "t" "s";grid-template-rows:minmax(var(--rh-avatar-size,var(--rh-size-icon-06,64px)),var(--rh-size-icon-06,64px)) min-content auto}#container.mobile :is(img,canvas,svg),:host([layout=block]) :is(img,canvas,svg){margin-block-end:var(--rh-space-lg,16px)}slot{display:block;max-width:250px}::slotted(a){color:var(--rh-color-interactive-primary-default-on-light,#06c);text-decoration:none}::slotted(a:visited){color:var(--rh-color-interactive-primary-visited-default-on-light,#5e40be)}::slotted(a:active),::slotted(a:hover){color:var(--rh-color-interactive-primary-hover-on-light,#036)}.dark ::slotted(a){color:var(--rh-color-interactive-primary-default-on-dark,#92c5f9)}.dark ::slotted(a:visited){color:var(--rh-color-interactive-primary-visited-default-on-dark,#b6a6e9)}.dark ::slotted(a:active),.dark ::slotted(a:hover){color:var(--rh-color-interactive-primary-hover-on-dark,#b9dafc)}#container.dark{color:var(--rh-color-text-secondary-on-dark,#c7c7c7);--_colors:var(--rh-avatar-colors,var(--rh-color-blue-50,#06c) var(--rh-color-teal-70,#004d4d) var(--rh-color-green-70,#204d00) var(--rh-color-red-50,#e00) var(--rh-color-purple-70,#21134d))}img,svg{object-fit:cover;object-position:center}canvas,img,svg{overflow:hidden;width:var(--rh-avatar-size,var(--rh-size-icon-06,64px));max-width:var(--rh-size-icon-06,64px);aspect-ratio:1;grid-area:a;border-radius:var(--rh-border-radius-pill,64px)}:host([plain]) slot{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}:host([plain]) #container{column-gap:0}`;
const DEFAULT_AVATARS = {
    light: html `<svg xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 36 36" viewBox="0 0 36 36" role="presentation" part="img">
      <style>.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#f0f0f0}.st2{fill:#b8bbbe}.st3{fill-rule:evenodd;clip-rule:evenodd;fill:#d2d2d2}.st4{fill:#d2d2d2}</style><path d="M0 0h36v36H0z" class="st1"/><path d="M17.7 20.1c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.8 6.4-6.4 6.4z" class="st3"/><path d="M13.3 36v-6.7c-2 .4-2.9 1.4-3.1 3.5l-.1 3.2h3.2z" class="st2"/><path d="m10.1 36 .1-3.2c.2-2.1 1.1-3.1 3.1-3.5V36h9.4v-6.7c2 .4 2.9 1.4 3.1 3.5l.1 3.2h4.7c-.4-3.9-1.3-9-2.9-11-1.1-1.4-2.3-2.2-3.5-2.6s-1.8-.6-6.3-.6-6.1.7-6.1.7c-1.2.4-2.4 1.2-3.4 2.6-1.7 1.9-2.6 7.1-3 10.9h4.7z" class="st4"/><path d="m25.9 36-.1-3.2c-.2-2.1-1.1-3.1-3.1-3.5V36h3.2z" class="st2"/>
    </svg>`,
    dark: html `<svg xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 36 36" viewBox="0 0 36 36" role="presentation" part="img">
    <style>.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#212427}.st2{fill:#4F5255}.st3{fill-rule:evenodd;clip-rule:evenodd;fill:#6A6E73}.st4{fill:#6A6E73}</style><path d="M0 0h36v36H0z" class="st1"/><path d="M17.7 20.1c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.8 6.4-6.4 6.4z" class="st3"/><path d="M13.3 36v-6.7c-2 .4-2.9 1.4-3.1 3.5l-.1 3.2h3.2z" class="st2"/><path d="m10.1 36 .1-3.2c.2-2.1 1.1-3.1 3.1-3.5V36h9.4v-6.7c2 .4 2.9 1.4 3.1 3.5l.1 3.2h4.7c-.4-3.9-1.3-9-2.9-11-1.1-1.4-2.3-2.2-3.5-2.6s-1.8-.6-6.3-.6-6.1.7-6.1.7c-1.2.4-2.4 1.2-3.4 2.6-1.7 1.9-2.6 7.1-3 10.9h4.7z" class="st4"/><path d="m25.9 36-.1-3.2c-.2-2.1-1.1-3.1-3.1-3.5V36h3.2z" class="st2"/>
  </svg>`,
    saturated: html ``,
};
DEFAULT_AVATARS.saturated = DEFAULT_AVATARS.dark;
/**
 * An avatar is a small thumbnail representation of a user.
 * @summary Visually represents a user in a masthead or navigation
 * @slot                                       - The subject's name
 * @slot subtitle                              - auxiliary information about the subject, e.g. job title
 * @cssprop {<color>+} --rh-avatar-colors      - List of colors to use when generating avatars
 * @cssprop {<length>} [--rh-avatar-size=64px] - Size of the avatar,
 */
let RhAvatar = class RhAvatar extends LitElement {
    constructor() {
        super(...arguments);
        _RhAvatar_instances.add(this);
        /** When true, hides the title and subtitle */
        this.plain = false;
        _RhAvatar_style.set(this, void 0);
        _RhAvatar_pattern.set(this, void 0);
        _RhAvatar_screen.set(this, new ScreenSizeController(this));
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _RhAvatar_instances, "m", _RhAvatar_normalize).call(this);
    }
    render() {
        const { on } = this;
        const { mobile } = __classPrivateFieldGet(this, _RhAvatar_screen, "f");
        return html `
      <div id="container" class="${classMap({ mobile, [on ?? 'light']: !!on })}">${this.pattern ? html `
        <canvas part="canvas"></canvas>` : this.src ? html `
        <img src="${this.src}" role="presentation" part="img">` : html `${DEFAULT_AVATARS[on ?? 'light']}`}
        <slot id="title">${this.name}</slot>
        <slot id="subtitle" name="subtitle">${this.subtitle}</slot>
      </div>
    `;
    }
    async updated(changed) {
        if ((changed.has('pattern') && this.pattern)
            || (__classPrivateFieldGet(this, _RhAvatar_pattern, "f") && changed.has('name') || changed.has('on'))) {
            this.updatePattern();
        }
    }
    async updatePattern() {
        __classPrivateFieldSet(this, _RhAvatar_pattern, __classPrivateFieldGet(this, _RhAvatar_pattern, "f") ?? await __classPrivateFieldGet(this, _RhAvatar_instances, "m", _RhAvatar_initPattern).call(this), "f");
        if (__classPrivateFieldGet(this, _RhAvatar_pattern, "f")) {
            const size = parseInt(__classPrivateFieldGet(this, _RhAvatar_style, "f")?.getPropertyValue('width') ?? '0');
            const colors = __classPrivateFieldGet(this, _RhAvatar_style, "f")?.getPropertyValue('--_colors')?.split(/\s+/) ?? [];
            const { name, pattern } = this;
            __classPrivateFieldGet(this, _RhAvatar_pattern, "f").render({ size, colors, name, pattern });
        }
    }
};
_RhAvatar_style = new WeakMap();
_RhAvatar_pattern = new WeakMap();
_RhAvatar_screen = new WeakMap();
_RhAvatar_instances = new WeakSet();
_RhAvatar_normalize = function _RhAvatar_normalize() {
    for (const node of this.childNodes) {
        if (node instanceof Text && !node.data.trim()) {
            node.data = node.data.trim();
        }
    }
    this.normalize();
};
_RhAvatar_initPattern = async function _RhAvatar_initPattern() {
    const { RandomPatternController } = await import('./random-pattern-controller.js');
    const canvas = this.shadowRoot?.querySelector('canvas');
    if (canvas) {
        __classPrivateFieldSet(this, _RhAvatar_style, __classPrivateFieldGet(this, _RhAvatar_style, "f") ?? getComputedStyle(canvas), "f");
        return new RandomPatternController(this, canvas);
    }
};
RhAvatar.styles = [styles];
__decorate([
    property({ reflect: true })
], RhAvatar.prototype, "src", void 0);
__decorate([
    property({ reflect: true })
], RhAvatar.prototype, "name", void 0);
__decorate([
    property({ reflect: true })
], RhAvatar.prototype, "subtitle", void 0);
__decorate([
    property({ reflect: true })
], RhAvatar.prototype, "layout", void 0);
__decorate([
    property({ reflect: true })
], RhAvatar.prototype, "pattern", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhAvatar.prototype, "plain", void 0);
__decorate([
    colorContextConsumer(),
    property()
], RhAvatar.prototype, "on", void 0);
RhAvatar = __decorate([
    customElement('rh-avatar')
], RhAvatar);
export { RhAvatar };
//# sourceMappingURL=rh-avatar.js.map