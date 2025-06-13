import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { TemplateResult } from 'lit';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import type { IconNameFor, IconSetName } from '@rhds/icons';

import { themable } from '@rhds/elements/lib/themable.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-tag.css';

/**
 * A tag is a caption added to an element for better clarity and user convenience.
 * @summary  Highlights an element to add clarity or draw attention
 * @slot icon -  Contains the tags's icon, e.g. web-icon-alert-success.
 * @slot      -  Must contain the text for the tag.
 * @csspart icon - container for the tag icon
 * @cssprop  {<length>} [--rh-tag-margin-inline-end=4px]
 *           The margin at the end of the direction parallel to the flow of the text.
 * @cssprop  {<length>} [--rh-tag-padding-block-start=4px]
 *           The padding at the start of the direction perpendicular to the flow of the text.
 * @cssprop  {<length>} [--rh-tag-padding-block-end=4px]
 *           The padding at the end of the direction perpendicular to the flow of the text.
 * @cssprop  {<length>} [--rh-tag-padding-inline-start=8px]
 *           The padding at the start of the direction parallel to the flow of the text.
 * @cssprop  {<length>} [--rh-tag-padding-inline-end=8px]
 *           The padding at the end of the direction parallel to the flow of the text.
 *
 */
@customElement('rh-tag')
@themable
export class RhTag extends LitElement {
  static readonly styles = [styles];

  /**
   * The icon to display in the tag.
   */
  @property({ reflect: true }) icon?: IconNameFor<IconSetName>;

  /**
   * Icon set to display in the tag
   */
  @property({ attribute: 'icon-set' }) iconSet: IconSetName = 'ui';

  /** The variant of the tag. */
  @property() variant?: 'filled' | 'outline' | 'desaturated' = 'filled';

  /** The size of the tag. */
  @property() size?: 'compact';

  /** optional href for linked tag. */
  @property() href?: string;

  /**
  * Whether an interactive tag is disabled.
  */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** The color of the tag. */
  @property() color?:
    | 'red'
    | 'red-orange'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'cyan' // deprecated
    | 'teal'
    | 'blue'
    | 'purple'
    | 'gray';

  /** Represents the state of the anonymous and icon slots */
  #slots = new SlotController(this, 'icon', null);

  override render() {
    const { icon, size, variant = 'filled', color = 'gray', disabled } = this;
    const hasIcon = !!icon || this.#slots.hasSlotted('icon');
    return html`
      <span id="container"
            class="${classMap({
              disabled,
              hasIcon,
              compact: size === 'compact',
              teal: color === 'cyan' || color === 'teal',
              [variant]: true,
              [color]: true })}">
        <slot name="icon" part="icon">
          <rh-icon ?hidden="${!icon}" icon="${ifDefined(icon)}" set="${this.iconSet}"></rh-icon>
        </slot>${this.#renderContent()}
      </span>
    `;
  }

  #renderContent(): TemplateResult {
    if (this.href) {
      return html`
        <a href="${this.href}" 
           aria-disabled="${String(this.disabled) as 'true' | 'false'}"
           @keydown="${this.#onKeyDown}">
          <slot id="text"></slot>
        </a>`;
    }
    return html`<slot id="text"></slot>`;
  }

  #onKeyDown(event: KeyboardEvent): void {
    if (this.disabled && event.key === 'Enter') {
      event.preventDefault();
    }
  }
}

export type TagColor = RhTag['color'];

declare global {
  interface HTMLElementTagNameMap {
    'rh-tag': RhTag;
  }
}
