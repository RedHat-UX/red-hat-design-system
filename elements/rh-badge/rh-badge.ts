import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-badge.css' with { type: 'css' };

/**
 * A badge provides a small numeric count on a pill for labels, filters, or lists. Set `state`
 * when the count carries severity:
 *
 *  - `neutral` - Indicates generic information or a message with no severity.
 *  - `danger` - Indicates a danger state, like an error that is blocking a user from completing a task.
 *  - `warning` - Indicates a warning state, like a non-blocking error that might need to be fixed.
 *  - `caution` - Indicates an action or notice which should immediately draw the attention
 *  - `info` - Indicates helpful information or a message with very little to no severity.
 *  - `success` - Indicates a success state, like if a process was completed without errors.
 *
 * It must not take focus or act as a control; it has no implicit ARIA role. Provide context in
 * surrounding text. Avoid color-only meaning (WCAG 1.4.1). Use `threshold` with `number` for values
 * like `999+`.
 *
 * @summary Non-interactive numeric pill badge for counts and status
 *
 * @alias badge
 */
@customElement('rh-badge')
@themable
export class RhBadge extends LitElement {
  static readonly styles = [styles];

  /**
   * Background severity: `danger`, `warning`, `caution`, `neutral`, `success`, or `info`.
   * Defaults to `neutral`.
   *
   * Legacy values are normalized: `moderate` → `warning`, `important` → `caution`,
   * `critical` → `danger`, `note` → `info`.
   *
   * @see [Guidelines](https://ux.redhat.com/elements/badge/guidelines/)
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
   * Numeric count rendered in the badge. With `threshold`, values above the threshold display
   * as `threshold+`. For text-only labels without a count, use `rh-tag` instead.
   */
  @property({ reflect: true, type: Number }) number?: number;

  /**
   * Upper bound for `number`; when `number` is greater, the badge shows `threshold+`.
   */
  @property({ reflect: true, type: Number }) threshold?: number;

  /** Normalizes `state` to supported values (including deprecated aliases). */
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
      <!--
        summary: Count text (default slot)
        description: |
          Put the numeric count in the default slot—the same value as the \`number\` attribute when
          you use number. The badge has no implicit accessible name; authors should provide context
          in surrounding text (labels, headings, table cells, etc.). For longer non-count labels,
          use rh-tag instead.
      -->
      <slot class="${classMap({ [state]: true })}"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-badge': RhBadge;
  }
}
