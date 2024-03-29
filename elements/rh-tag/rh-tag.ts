import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import '@patternfly/elements/pf-icon/pf-icon.js';

import styles from './rh-tag.css';

/**
 * A tag is a caption added to an element for better clarity and user convenience.
 *
 * @summary  Highlights an element to add clarity or draw attention
 *
 * @fires close - when a removable label's close button is clicked
 *
 * @slot icon
 *       Contains the labels's icon, e.g. web-icon-alert-success.
 *
 * @slot
 *       Must contain the text for the label.
 *
 * @csspart icon - container for the label icon
 *
 * @cssprop  {<length>} --rh-tag-margin-inline-end
 *           The margin at the end of the direction parallel to the flow of the text.
 *           {@default 4px}
 * @cssprop  {<length>} --rh-tag-padding-block-start
 *           The padding at the start of the direction perpendicular to the flow of the text.
 *           {@default 4px}
 * @cssprop  {<length>} --rh-tag-padding-block-end
 *           The padding at the end of the direction perpendicular to the flow of the text.
 *           {@default 4px}
 * @cssprop  {<length>} --rh-tag-padding-inline-start
 *           The padding at the start of the direction parallel to the flow of the text.
 *           {@default 8px}
 * @cssprop  {<length>} --rh-tag-padding-inline-end
 *           The padding at the end of the direction parallel to the flow of the text.
 *           {@default 8px}
 * @cssprop --pf-icon--size
 *
 */
@customElement('rh-tag')
export class RhTag extends LitElement {
  static readonly styles = [styles];

  /** The icon to display in the label. */
  @property() icon?: string;

  /** The variant of the label. */
  @property() variant?: 'filled' | 'outline' = 'filled';

  /** The color of the label. */
  @property() color?: 'blue' | 'cyan' | 'green' | 'orange' | 'purple' | 'red' | 'grey';

  @colorContextConsumer() private on?: ColorTheme;

  /** Represents the state of the anonymous and icon slots */
  #slots = new SlotController(this, 'icon', null);

  override render() {
    const { variant, color, icon, on = '' } = this;
    const hasIcon = !!icon || this.#slots.hasSlotted('icon');
    return html`
      <span id="container"
            class="${classMap({
              hasIcon,
              [on]: !!on,
              [variant ?? '']: !!variant,
              [color ?? '']: !!color })}">
        <slot name="icon" part="icon">
          <pf-icon ?hidden="${!icon}"
                   .icon="${icon || undefined as unknown as string}"></pf-icon>
        </slot>
        <slot id="text"></slot>
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
