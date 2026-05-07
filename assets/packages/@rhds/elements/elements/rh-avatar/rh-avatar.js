var _RhAvatar_instances, _RhAvatar_style, _RhAvatar_pattern, _RhAvatar_normalize, _RhAvatar_initPattern;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `*,:after,:before{box-sizing:border-box}:host{display:block;container:avatar/inline-size;inline-size:100%}:host([plain]){inline-size:var(
         
        --rh-avatar-size,var(--rh-size-icon-06,64px)
      )}[hidden]{display:none!important}img,svg{object-fit:cover;object-position:center}canvas,img,svg{overflow:hidden;inline-size:var(--rh-avatar-size,var(--rh-size-icon-06,64px));max-inline-size:var(--rh-size-icon-06,64px);aspect-ratio:1;grid-area:a;border-radius:var(--rh-border-radius-pill,64px)}#default{enable-background:new 0 0 36 36}#default .st1{fill-rule:evenodd;clip-rule:evenodd;fill:light-dark(#f0f0f0,#212427)}#default .st2{fill:light-dark(#b8bbbe,#4f5255)}#default .st3{fill-rule:evenodd;clip-rule:evenodd}#default .st3,#default .st4{fill:light-dark(#d2d2d2,#6a6e73)}#title{grid-area:t;align-self:end;font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-weight:var(--rh-font-weight-heading-medium,500)}#subtitle,#title{max-inline-size:250px;font-size:var(--rh-font-size-body-text-sm,.875rem)}#subtitle{grid-area:s;align-self:start;font-weight:var(--rh-font-weight-heading-regular,400)}::slotted(a){color:var(--rh-color-interactive-primary-default)}::slotted(a:visited){color:var(--rh-color-interactive-primary-visited-default)}::slotted(a:active),::slotted(a:hover){color:var(--rh-color-interactive-primary-hover)}#container{--_colors:light-dark(var(--rh-avatar-colors,var(--rh-color-blue-30,#92c5f9) var(--rh-color-teal-50,#37a3a3) var(--rh-color-green-60,#3d7317) var(--rh-color-red-40,#f56e6e) var(--rh-color-purple-60,#3d2785)),var(--rh-avatar-colors,var(--rh-color-blue-50,#06c) var(--rh-color-teal-70,#004d4d) var(--rh-color-green-70,#204d00) var(--rh-color-red-50,#e00) var(--rh-color-purple-70,#21134d)));display:grid;column-gap:var(--rh-space-lg,16px);grid-template-columns:min-content 1fr;grid-template-rows:auto;grid-template-areas:"a t" "a s";color:var(--rh-color-text-secondary)}#container.block:not(.plain){text-align:center;place-items:center;gap:0;grid-template-columns:auto;grid-template-areas:"a" "t" "s";grid-template-rows:1fr auto auto}#container.block:not(.plain) :is(img,canvas,svg){margin-block-end:var(--rh-space-lg,16px)}@container avatar (max-width: 287px){#container:not(.plain):not(.block) :is(img,canvas,svg){margin-block-end:var(--rh-space-lg,16px)}}#container:not(.plain):not(.block){grid-template-columns:1fr;grid-template-areas:"a" "t" "s";grid-template-rows:auto;text-align:center;place-items:center}@container avatar (min-width: 288px){#container:not(.plain):not(.block){text-align:start;place-items:start;grid-template-areas:"a t" "a s";grid-template-columns:min-content 1fr;grid-template-rows:auto auto}#container:not(.plain):not(.block) :is(#title,#subtitle){text-align:start}}#container.plain{column-gap:0;inline-size:var(--rh-avatar-size,var(--rh-size-icon-06,64px))}#container.plain :is(#title,#subtitle){position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}#container.bordered :is(canvas,img,svg){border:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}`;
/**
 * Provides a circular user thumbnail for mastheads, cards, and attribution when
 * you need to visually identify a person. Allows an image, a deterministic
 * pattern, or a default icon. Must not take focus or act as a control; images
 * carry `role="presentation"`. Authors should provide a name via the
 * default slot so screen readers have context.
 *
 * @summary Circular thumbnail for mastheads, navigation, and attribution
 *
 * @slot - The user's display name — provides the accessible label for screen readers. Accepts text or an anchor for linked names.
 * @slot subtitle - Auxiliary info such as job title. Accepts text or `<a>` elements. Slotted anchors receive interactive color token styles. Screen readers announce this after the name.
 *
 * @csspart canvas - The `<canvas>` used for generated geometric patterns.
 * @csspart img - The `<img>` or default `<svg>` silhouette icon.
 *
 * @cssprop [--rh-avatar-size=var(--rh-size-icon-06, 64px)] - Thumbnail width and height; capped at the `--rh-size-icon-06` token (64px).
 * @cssprop [--rh-avatar-colors] - Space-separated hex values overriding the built-in light-dark pattern color tokens.
 */
let RhAvatar = class RhAvatar extends LitElement {
    constructor() {
        super(...arguments);
        _RhAvatar_instances.add(this);
        /**
         * When true, visually hides the name and subtitle via CSS clip while
         * keeping them accessible to screen readers.
         */
        this.plain = false;
        _RhAvatar_style.set(this, void 0);
        _RhAvatar_pattern.set(this, void 0);
    }
    connectedCallback() {
        super.connectedCallback();
        if (!isServer) {
            __classPrivateFieldGet(this, _RhAvatar_instances, "m", _RhAvatar_normalize).call(this);
        }
    }
    render() {
        const { layout, name, pattern, plain, src, subtitle, variant } = this;
        const bordered = variant === 'bordered';
        const inline = layout === 'inline';
        const block = layout === 'block';
        return html `
      <div id="container"
           class="${classMap({ inline, block, plain, bordered })}">${pattern ? html `
        <!-- Target the canvas element -->
        <canvas part="canvas"></canvas>` : src ? html `
        <!-- Targets the img or svg element. Avoid using this part for theming -->
        <img part="img" src="${src}" role="presentation">` : html `
        <svg id="default"
             viewBox="0 0 36 36"
             role="presentation"
             part="img">
          <path d="M0 0h36v36H0z" class="st1"/><path d="M17.7 20.1c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.8 6.4-6.4 6.4z" class="st3"/>
          <path d="M13.3 36v-6.7c-2 .4-2.9 1.4-3.1 3.5l-.1 3.2h3.2z" class="st2"/>
          <path d="m10.1 36 .1-3.2c.2-2.1 1.1-3.1 3.1-3.5V36h9.4v-6.7c2 .4 2.9 1.4 3.1 3.5l.1 3.2h4.7c-.4-3.9-1.3-9-2.9-11-1.1-1.4-2.3-2.2-3.5-2.6s-1.8-.6-6.3-.6-6.1.7-6.1.7c-1.2.4-2.4 1.2-3.4 2.6-1.7 1.9-2.6 7.1-3 10.9h4.7z" class="st4"/>
          <path d="m25.9 36-.1-3.2c-.2-2.1-1.1-3.1-3.1-3.5V36h3.2z" class="st2"/>
        </svg>
        `}
        <div id="title">
          <!--
            The subject's name. Should contain inline text, optionally wrapped in a link.
            When \`plain\` is set, the name and subtitle are used as accessible labels
          -->
          <slot>${name}</slot>
        </div>
        <div id="subtitle">
          <!--
            Auxiliary information about the subject, e.g. job title. Should contain inline text, optional links.
            When \`plain\` is set, the name and subtitle are used as accessible labels
          -->
          <slot name="subtitle">${subtitle}</slot>
        </div>
      </div>
    `;
    }
    async updated(changed) {
        if ((changed.has('pattern') && this.pattern) || (changed.has('name') && __classPrivateFieldGet(this, _RhAvatar_pattern, "f"))) {
            this.updatePattern();
        }
    }
    /**
     * Re-renders the geometric pattern. Called automatically when `pattern`
     * or `name` change; call manually after updating CSS custom properties.
     * @deprecated a future version will remove this public method
     */
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
    property({ reflect: true })
], RhAvatar.prototype, "variant", void 0);
RhAvatar = __decorate([
    customElement('rh-avatar'),
    themable
], RhAvatar);
export { RhAvatar };
//# sourceMappingURL=rh-avatar.js.map