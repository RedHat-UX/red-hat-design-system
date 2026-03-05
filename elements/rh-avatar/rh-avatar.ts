import type { RandomPatternController } from './random-pattern-controller.js';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { LitElement, html, isServer, type PropertyValues } from 'lit';

import { themable } from '../../lib/themable.js';

import styles from './rh-avatar.css' with { type: 'css' };

/**
 * Circular user thumbnail showing an image, generated pattern, or
 * default icon. USE in mastheads, cards, and attribution. MUST pair
 * with a name for screen reader context via the default slot. Images
 * use `role="presentation"` since the name slot provides identity.
 * SHOULD NOT be directly interactive; slot links in name/subtitle.
 *
 * @summary Circular user thumbnail for mastheads, navigation, and attribution
 *
 * @slot - The user's display name. Accepts text or an anchor element for linked names. Screen readers will announce this content as the avatar's label.
 * @slot subtitle - Auxiliary user information such as job title or company. Accepts text, `<span>`, or `<a>` elements. Slotted links receive interactive color styles.
 *
 * @csspart canvas - The `<canvas>` element used when rendering generated geometric patterns. Only present when the `pattern` attribute is set.
 * @csspart img - The `<img>` or default `<svg>` element displaying the user's photo or the fallback silhouette icon. Has `role="presentation"`.
 *
 * @cssprop [--rh-avatar-size=var(--rh-size-icon-06, 64px)] - Controls the width and height of the avatar thumbnail. Accepts any size token. Maximum rendered size is capped at `--rh-size-icon-06` (64px).
 * @cssprop [--rh-avatar-colors] - Space-separated list of hex color values used for generating pattern backgrounds. Overrides the built-in light/dark color palette. Each color produces a primary/adjusted pair for pattern rendering.
 *
 * @alias avatar
 */
@customElement('rh-avatar')
@themable
export class RhAvatar extends LitElement {
  static readonly styles = [styles];

  /**
   * URL to the user's custom avatar image. When set, the image replaces both
   * the default silhouette icon and any generated pattern. The image is
   * rendered as a circle with `object-fit: cover`. The `<img>` element has
   * `role="presentation"` so screen readers SHOULD rely on the name slot
   * for context. Defaults to undefined (no custom image).
   */
  @property({ reflect: true }) src?: string;

  /**
   * The user's display name (given name and family name, or username).
   * Rendered as default slot content when no slotted text is provided.
   * When `pattern` is set, the name seeds the deterministic pattern generator
   * so the same name always produces the same visual pattern. Defaults to
   * undefined. Accepts any string value.
   */
  @property({ reflect: true }) name?: string;

  /**
   * Auxiliary information about the user, such as job title or company name.
   * Rendered as default content in the `subtitle` slot when no slotted
   * elements are provided. Separate multiple items with commas (e.g.
   * "Professor, MIT"). Defaults to undefined. Accepts any string value.
   */
  @property({ reflect: true }) subtitle?: string;

  /**
   * Controls the spatial arrangement of the avatar thumbnail relative to the
   * name and subtitle text. When `'inline'`, the avatar sits to the left of
   * the text (default). When `'block'`, the avatar is stacked above the text.
   * On small viewports (below 576px), both layouts collapse to a centered
   * block arrangement. Defaults to undefined (inline behavior).
   * Accepts `'inline'` or `'block'`.
   */
  @property({ reflect: true }) layout?: 'inline' | 'block';

  /**
   * The type of geometric pattern to display.
   *
   * When set, a pattern is generated on a canvas element instead of showing the default
   * avatar icon. The pattern is **deterministically generated** from the `name` property,
   * so the same name always produces the same visual pattern. This provides consistent
   * visual identity without storing generated images.
   *
   * - `squares` - Displays a symmetrical pattern of colored squares
   * - `triangles` - Displays a symmetrical pattern of colored triangles
   *
   * ## Usage guidelines
   * - Use patterns when users haven't uploaded custom avatar images
   * - Patterns provide visual variety and help distinguish between users
   * - Pattern colors are controlled by the `--_colors` CSS custom property
   * - A specific name is linked to the same pattern, so avatars stay static without storing images
   *
   * @see [Style](https://ux.redhat.com/elements/avatar/style/) documentation
   */
  @property({ reflect: true }) pattern?: 'squares' | 'triangles';

  /**
   * When true, visually hides the name and subtitle text using a
   * screen-reader-friendly technique (CSS `clip`). The text remains in
   * the DOM and is announced by assistive technology. USE `plain` when the
   * avatar appears in compact contexts like navigation bars, card headers,
   * or icon rows. Defaults to false.
   */
  @property({ reflect: true, type: Boolean }) plain = false;

  /**
   * Visual variant for the avatar thumbnail. When set to `'bordered'`, adds
   * a subtle border using `--rh-border-width-sm` and `--rh-color-border-subtle`
   * tokens. USE bordered variant for extra visual prominence or when placing
   * avatars on non-white backgrounds. Defaults to undefined (no border).
   * Accepts `'bordered'` only.
   */
  @property({ reflect: true }) variant?: 'bordered';

  #style?: CSSStyleDeclaration;

  #pattern?: RandomPatternController;


  connectedCallback() {
    super.connectedCallback();
    if (!isServer) {
      this.#normalize();
    }
  }

  /**
   * Page authors may include whitespace in the element while also using `name`
   * or `subtitle` attributes to inject default content. In those cases, any
   * slotted text nodes, even if consisting solely of white-space, will override
   * the default content (i.e. attribute values)
   */
  #normalize() {
    for (const node of this.childNodes) {
      if (node instanceof Text && !node.data.trim()) {
        node.data = node.data.trim();
      }
    }
    this.normalize();
  }

  render() {
    return html`
      <div id="container">${this.pattern ? html`
        <!-- summary: canvas element for rendering generated geometric patterns
             description: |
               This part is used when the \`pattern\` attribute is set to "squares" or "triangles".
               It renders a deterministic, randomly-generated geometric pattern based on the user's name.
               The same name always produces the same pattern, providing consistent visual identity
               without storing generated images. Pattern colors are controlled by the --_colors CSS
               custom property. Use this part to customize the canvas styling (border, shadow, etc.). -->
        <canvas part="canvas"></canvas>` : this.src ? html`
        <!-- summary: image element for custom user avatar photo
             description: |
               This part displays the user's uploaded custom avatar image when the \`src\` attribute
               is provided. It replaces both the default avatar icon and generated patterns. The image
               is always circular and sized according to --rh-avatar-size. Has role="presentation" for
               accessibility as the avatar context is provided elsewhere. Use this part to customize
               image styling (border, filter effects, etc.). -->
        <img src="${this.src}" role="presentation" part="img">` : html`
        <!-- summary: default avatar icon SVG element
             description: |
               This part displays the default gray silhouette icon representing a generic user when
               neither a custom image (src) nor a pattern is provided. The SVG shows a simple human
               figure. Has role="presentation" for accessibility. Use this part to customize the
               default icon styling (color, opacity, border, etc.). -->
        <svg xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 36 36" viewBox="0 0 36 36" role="presentation" part="img" id="default">
          <path d="M0 0h36v36H0z" class="st1"/><path d="M17.7 20.1c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.8 6.4-6.4 6.4z" class="st3"/>
          <path d="M13.3 36v-6.7c-2 .4-2.9 1.4-3.1 3.5l-.1 3.2h3.2z" class="st2"/>
          <path d="m10.1 36 .1-3.2c.2-2.1 1.1-3.1 3.1-3.5V36h9.4v-6.7c2 .4 2.9 1.4 3.1 3.5l.1 3.2h4.7c-.4-3.9-1.3-9-2.9-11-1.1-1.4-2.3-2.2-3.5-2.6s-1.8-.6-6.3-.6-6.1.7-6.1.7c-1.2.4-2.4 1.2-3.4 2.6-1.7 1.9-2.6 7.1-3 10.9h4.7z" class="st4"/>
          <path d="m25.9 36-.1-3.2c-.2-2.1-1.1-3.1-3.1-3.5V36h3.2z" class="st2"/>
        </svg>
        `}
        <!-- summary: The user's display name
             description: |
               Primary identity text for the avatar. Accepts plain text or an anchor
               element for linked names. When no content is slotted, falls back to the
               \`name\` attribute value. Screen readers announce this slot content as the
               avatar's identity label. SHOULD always provide a name for accessibility. -->
        <slot id="title">${this.name}</slot>
        <!-- summary: Auxiliary user information such as job title or company
             description: |
               Secondary descriptive text displayed below the name. Accepts text,
               \`<span>\`, or \`<a>\` elements. When no content is slotted, falls back to
               the \`subtitle\` attribute value. Slotted anchor elements receive
               interactive link color styles. Separate multiple items with commas. -->
        <slot id="subtitle" name="subtitle">${this.subtitle}</slot>
      </div>
    `;
  }

  async updated(changed: PropertyValues<this>) {
    if ((changed.has('pattern') && this.pattern)
        || (this.#pattern && changed.has('name') || changed.has('on' as keyof RhAvatar))) {
      this.updatePattern();
    }
  }

  async #initPattern() {
    const { RandomPatternController } = await import('./random-pattern-controller.js');
    const canvas = this.shadowRoot?.querySelector('canvas');
    if (canvas) {
      this.#style ??= getComputedStyle(canvas);
      return new RandomPatternController(this, canvas);
    }
  }

  /**
   * Regenerates the avatar's random geometric pattern.
   *
   * This method is called automatically when the `pattern` or `name` properties change.
   * You can also call it manually to force the pattern to re-render, for example after
   * dynamically changing CSS custom properties that affect pattern colors.
   *
   * ## Pattern generation
   * - The pattern is **deterministically generated** from the user's name
   * - The same name will always produce the same visual pattern
   * - This allows consistent visual identity without storing generated images
   * - Pattern colors are controlled by the `--_colors` CSS custom property
   *
   * ## Usage
   * Typically you don't need to call this method manually, as it's triggered automatically.
   * Manual calls are only needed when:
   * - Dynamically updating CSS variables that affect pattern rendering
   * - Forcing a re-render after external style changes
   *
   * @example
   * ```js
   * const avatar = document.querySelector('rh-avatar');
   * avatar.pattern = 'squares';
   * avatar.name = 'Grace Hopper';
   * // Pattern renders automatically
   *
   * // Later, force re-render if needed:
   * await avatar.updatePattern();
   * ```
   */
  async updatePattern() {
    this.#pattern ??= await this.#initPattern();
    if (this.#pattern) {
      const size = parseInt(this.#style?.getPropertyValue('width') ?? '0');
      const colors = this.#style?.getPropertyValue('--_colors')?.split(/\s+/) ?? [];
      const { name, pattern } = this;
      this.#pattern.render({ size, colors, name, pattern });
    }
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'rh-avatar': RhAvatar;
  }
}
