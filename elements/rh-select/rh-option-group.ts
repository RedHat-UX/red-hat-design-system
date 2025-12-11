import { LitElement, html, type TemplateResult } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import styles from './rh-option-group.css';

/**
 * Group of options within a listbox
 * @alias option-group
 */
@customElement('rh-option-group')
export class RhOptionGroup extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  /** Group description. Overridden by `label` slot. */
  @property() label?: string;

  /** Whether group is disabled */
  @property({ type: Boolean, reflect: true }) disabled = false;

  // eslint-disable-next-line no-unused-private-class-members
  #internals = InternalsController.of(this, { role: 'group' });

  render(): TemplateResult<1> {
    const { disabled } = this;
    return html`
      <div id="label-container"
           role="presentation">
        <!-- Group label. Overrides the \`label\` attribute. -->
        <slot class="${classMap({ disabled })}"
              name="label">${this.label}</slot>
      </div>
      <!-- Insert \`<rh-option>\` or \`<hr>\` elements -->
      <slot class="${classMap({ disabled })}"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-option-group': RhOptionGroup;
  }
}
