import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { classMap } from 'lit/directives/class-map.js';

import { observed } from '@patternfly/pfe-core/decorators.js';

import { BaseTab } from '@patternfly/elements/pf-tabs/BaseTab.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import styles from './rh-tab.css';

/**
 * Tab
 *
 * @slot icon - Can contain an `<svg>` or `<pf-icon>`
 * @slot - Tab title text
 *
 * @csspart button - `<button>` element
 * @csspart icon - icon `<span>` element
 * @csspart text - tile text `<span>` element
 *
 * @cssprop {<color>} --rh-tabs-link-color - Tab link text color {@default `#4d4d4d`}
 * @cssprop {<color>} --rh-tabs-active-border-color - Tab active border color {@default `#ff442b`}
 * @cssprop {<length>} --rh-tabs-link-padding-inline-start - Tab padding inline start {@default `32px`}
 * @cssprop {<length>} --rh-tabs-link-padding-block-start - Tab padding block start {@default `16px`}
 * @cssprop {<length>} --rh-tabs-link-padding-inline-end - Tab padding inline end {@default 32px`}
 * @cssprop {<length>} --rh-tabs-link-padding-block-end - Tab padding block end {@default `16px`}
 *
 * @fires { TabExpandEvent } tab-expand - when a tab expands
 */
@customElement('rh-tab')
export class RhTab extends BaseTab {
  static readonly version = '{{version}}';

  static readonly styles = [...BaseTab.styles, styles];

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  @observed
  @property({ reflect: true, type: Boolean }) active = false;

  @observed
  @property({ reflect: true, type: Boolean }) disabled = false;

  render() {
    const { on = '' } = this;
    return html`
      <div id="rhds-container" class="${classMap({ [on]: !!on })}">${super.render()}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tab': RhTab;
  }
}
