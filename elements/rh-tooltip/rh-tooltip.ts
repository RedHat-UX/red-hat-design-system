import type { Placement } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';

import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import { BaseTooltip } from '@patternfly/elements/pf-tooltip/BaseTooltip.js';

import styles from './rh-tooltip.css';

/**
 * Tooltip
 * @summary Reveals a small area of information on hover
 * @slot - Place element content here
 *
 * @cssprop --rh-box-shadow-sm
 * @cssprop --rh-color-surface-darkest
 * @cssprop --rh-color-surface-lightest
 * @cssprop --rh-color-text-primary-on-dark
 * @cssprop --rh-color-text-primary-on-light
 * @cssprop --rh-font-size-body-text-sm
 * @cssprop --rh-line-height-body-text
 * @cssprop --rh-space-lg
 * @cssprop --rh-tooltip-arrow-size
 * @cssprop --rh-tooltip-content-background-color
 * @cssprop --rh-tooltip-content-color
 * @cssprop --rh-tooltip-content-font-size
 * @cssprop --rh-tooltip-content-padding-block-end
 * @cssprop --rh-tooltip-content-padding-block-start
 * @cssprop --rh-tooltip-content-padding-inline-end
 * @cssprop --rh-tooltip-content-padding-inline-start
 * @cssprop --rh-tooltip-max-width
 */
@customElement('rh-tooltip')
export class RhTooltip extends BaseTooltip {
  static readonly version = '{{version}}';

  static readonly styles = [...BaseTooltip.styles, styles];

  @colorContextConsumer() private on?: ColorTheme;

  @property() position: Placement = 'top';
  @property() content?: string;

  override render() {
    const { on = '' } = this;
    return html`
      <div id="rh-container" class="${classMap({ [on]: !!on })}">
        ${super.render()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tooltip': RhTooltip;
  }
}
