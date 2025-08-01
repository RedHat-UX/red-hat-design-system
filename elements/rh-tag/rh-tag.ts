import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import type { IconNameFor, IconSetName } from '@rhds/icons';

import { themable } from '@rhds/elements/lib/themable.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-tag.css';

/**
 * A tag is a caption added to an element for better clarity and user convenience.
 *
 * @summary  Highlights an element to add clarity or draw attention
 *
 * @alias tag
 *
 * @fires close - when a removable label's close button is clicked
 *
 */
@customElement('rh-tag')
@themable
export class RhTag extends LitElement {
  static readonly styles = [styles];

  /**
   * The icon to display in the label.
   */
  @property({ reflect: true }) icon?: IconNameFor<IconSetName>;

  /**
   * Icon set to display in the label
   */
  @property({ attribute: 'icon-set' }) iconSet: IconSetName = 'ui';

  /** The variant of the label. */
  @property() variant?: 'filled' | 'outline' | 'desaturated' = 'filled';

  /** The variant of the label. */
  @property() size?: 'compact';

  /** optional href for linked tag. */
  @property() href?: string;

  /**
   * The color of the label.
   * Note: 'cyan' will also work, but is deprecated
   */
  @property() color?:
    | 'red'
    | 'red-orange'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'purple'
    | 'gray';

  /** Represents the state of the anonymous and icon slots */
  #slots = new SlotController(this, 'icon', null);

  override render() {
    const { icon, size, variant = 'filled', color = 'gray' } = this;
    const hasIcon = !!icon || this.#slots.hasSlotted('icon');
    return html`
      <span id="container"
            class="${classMap({
              hasIcon,
              compact: size === 'compact',
              teal: color === ('cyan' as 'blue' /* cyan deprecated */) || color === 'teal',
              [variant]: true,
              [color]: true })}">
        <!--
          slot:
            summary: Contains the labels's icon, e.g. web-icon-alert-success.
          part:
            summary: container for the label icon
        -->
        <slot name="icon" part="icon">
          <rh-icon ?hidden="${!icon}" icon="${ifDefined(icon)}" set="${this.iconSet}"></rh-icon>
        </slot>${!this.href ? html`
        <!-- Must contain the text for the label. -->
        <slot id="text"></slot>` : html`
        <a href="${this.href}">
          <!-- Must contain the text for the label. -->
          <slot id="text"></slot>
        </a>`}
      </span>
    `;
  }
}

export type TagColor = RhTag['color'];

declare global {
  interface HTMLElementTagNameMap {
    'rh-tag': RhTag;
  }
}
