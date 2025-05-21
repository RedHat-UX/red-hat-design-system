import { LitElement, html } from 'lit';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './uxdot-best-practice.css';

@customElement('uxdot-best-practice')
export class UxdotBestPractice extends LitElement {
  static styles = [styles];

  @property({ reflect: true }) variant: 'do' | 'dont' | 'caution' = 'do';


  render() {
    const { variant } = this;
    const iconMap = {
      do: 'check-circle-fill',
      dont: 'close-circle-fill',
      caution: 'warning-fill',
    };
    const titleMap = {
      do: 'Do',
      dont: 'Don\'t',
      caution: 'Caution',
    };
    return html`
      <figure id="container">
        <slot name="image"></slot>
        <figcaption id="${variant}">
          <span><rh-icon icon="${iconMap[variant]}" set="ui" size="md"></rh-icon>${titleMap[variant]}</span>
          <slot></slot>
        </figcaption>
      </figure>
    `;
  }
}

