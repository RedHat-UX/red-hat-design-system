import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-badge.css';

/**
 * A badge is used to annotate other information like a label or an object name.
 *
 *  - `neutral` - Indicates generic information or a message with no severity.
 *  - `danger` - Indicates a danger state, like an error that is blocking a user from completing a task.
 *  - `warning` - Indicates a warning state, like a non-blocking error that might need to be fixed.
 *  - `caution` - Indicates an action or notice which should immediately draw the attention
 *  - `info` - Indicates helpful information or a message with very little to no severity.
 *  - `success` - Indicates a success state, like if a process was completed without errors.
 *
 * @summary Annotates information like a label or object
 *
 * @alias badge
 *
 */
@customElement('rh-badge')
@themable
export class RhBadge extends LitElement {
  static readonly styles = [styles];

  /**
   * Denotes the status or severity that this badge represents.
   *
   * - `neutral` (default) - Generic information or message with no severity
   * - `info` - Helpful information or message with very little to no severity
   * - `success` - Success state, like a process completed without errors
   * - `caution` - Action or notice which should immediately draw attention
   * - `warning` - Warning state, like a non-blocking error that might need fixing
   * - `danger` - Danger state, like an error blocking a user from completing a task
   *
   * ## Usage guidelines
   * - Use appropriate state to indicate severity level
   * - Do not rely on color alone - provide additional context via text or labels
   * - When using multiple badges, use visual cues beyond color to differentiate them
   * - Default to `neutral` for generic counts without status meaning
   *
   * **Note:** 'moderate', 'important', and 'critical' are deprecated and will be converted
   * to their DPO-approved equivalents ('warning', 'caution', 'danger').
   *
   * @see [Guidelines](https://ux.redhat.com/elements/badge/guidelines/) documentation
   */
  @property({ reflect: true }) state:
    | 'danger'
    | 'warning'
    | 'caution'
    | 'neutral'
    | 'success'
    | 'info' =
      'neutral';

  /**
   * Sets the numeric count to display in the badge.
   *
   * Displays the number value inside the badge. Commonly used to show counts like
   * number of objects, events, or unread items.
   *
   * ## Usage guidelines
   * - Use for displaying counts (e.g., unread messages, notifications, items)
   * - Pair with `threshold` to cap display at a maximum value (e.g., "999+")
   * - For general text captions without counts, use rh-tag instead
   * - Duplicate the number in the default slot for screen reader accessibility
   *
   * ## Threshold behavior
   * When paired with `threshold`, displays `threshold+` if number exceeds threshold.
   * For example, `number="1500" threshold="999"` displays "999+".
   *
   * @example
   * ```html
   * <rh-badge number="7">7</rh-badge>
   * <rh-badge number="1500" threshold="999">1500</rh-badge>
   * ```
   */
  @property({ reflect: true, type: Number }) number?: number;

  /**
   * Sets a maximum display value, adding a `+` sign if the number exceeds this threshold.
   *
   * When the `number` value exceeds the `threshold`, the badge displays `threshold+`
   * instead of the actual number. This prevents displaying very large numbers that
   * would make the badge too wide.
   *
   * ## Usage guidelines
   * - Common threshold value: 999 (displays "999+" for values >= 1000)
   * - Use to maintain consistent badge width for large counts
   * - Do not display actual values over 999 to avoid UI layout issues
   * - Always pair with the `number` attribute
   *
   * @example
   * ```html
   * <!-- Displays "999+" -->
   * <rh-badge number="1500" threshold="999">1500</rh-badge>
   *
   * <!-- Displays "50" (under threshold) -->
   * <rh-badge number="50" threshold="999">50</rh-badge>
   * ```
   */
  @property({ reflect: true, type: Number }) threshold?: number;

  /** Ensures that state is consistent, regardless of input */
  @observes('state', { waitFor: 'updated' })
  private stateChanged() {
    const state = this.state.toLowerCase();
    switch (state) {
      // the first four are deprecated pre-DPO status names
      case 'moderate': this.state = 'warning'; break;
      case 'important': this.state = 'caution'; break;
      case 'critical': this.state = 'danger'; break;
      case 'note': this.state = 'info'; break;
      // the following are DPO-approved status names
      case 'danger':
      case 'warning':
      case 'caution':
      case 'neutral':
      case 'info':
      case 'success':
        return;
      default:
        this.state = 'neutral';
    }
  }

  override render() {
    const { state, threshold, number } = this;
    const isLarge = !!threshold && number != null && (threshold < number);
    const computedContent = isLarge ? `${threshold}+` : number?.toString() ?? null;
    return html`
      <span class="${classMap({ [state]: true })}">${computedContent}</span>
      <!-- summary: accessible text content or contextual labels (default slot)
           description: |
             Contains accessible text content that provides context for the badge count.
             The content appears after the computed number display in visual rendering.

             **Common patterns:**
             - Duplicate the `number` value for screen reader accessibility
             - Add contextual labels like "Unread" or "Flagged" when using multiple badges
             - Provide aria-label on the element for additional context

             **Best practices:**
             - Always provide accessible context since badges convey information visually
             - Do not rely on color alone to communicate status
             - Keep content short (use rh-tag for lengthy text captions)
             - Content should complement, not replace, the `number` property

             **Accessibility:**
             - Badge does not get an accessible name by default
             - Ensure adequate contextual information is provided in surrounding layout
             - Do not convey information by color alone (e.g., read vs unread)

             @example Accessible badge with duplicated number
             <rh-badge number="7">7</rh-badge>

             @example Badge with contextual label
             <rh-badge number="50" state="neutral">Unread</rh-badge>

             @see [Accessibility](https://ux.redhat.com/elements/badge/accessibility/) documentation -->
      <slot class="${classMap({ [state]: true })}"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-badge': RhBadge;
  }
}
