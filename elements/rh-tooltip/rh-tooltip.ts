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
 * @summary A tooltip is a floating text area that provides helpful or contextual information on hover, focus, or tap.
 * @slot - Place element content here
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
