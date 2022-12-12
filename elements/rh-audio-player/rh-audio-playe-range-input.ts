import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { pfelement } from '@patternfly/pfe-core/decorators.js';

import styles from './rh-audio-player-range-input.css';

/**
 * Audio Player Range Input
 * @slot - optional datalist here
 */
@customElement('rh-audio-player-range-input') @pfelement()
export class RhAudioPlayerRangeInput extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  @property({ reflect: true, type: Number }) min = undefined;
  @property({ reflect: true, type: Number }) max = undefined;
  @property({ reflect: true, type: Number }) step = undefined;
  @property({ reflect: true, type: Number }) value = undefined;
  @property({ reflect: true, type: String }) poster = undefined;
  @property({ reflect: true, type: Boolean }) disabled = false;
  @property({ reflect: true, type: Boolean }) hidden = false;

  get list():string | undefined {
    return undefined;
  }

  render() {
    return html`
      <input
        ?disabled="${this.disabled}"
        ?hidden="${this.hidden}"
        type="range" 
        list="${!this.list ? '' : this.list}" 
        min="${!this.min ? '' : this.min}" 
        max="${!this.max ? '' : this.max}"
        step="${!this.step ? '' : this.step}" 
        @input="${this._handleEvent}"
        @change="${this._handleEvent}"
        value="${!this.value ? '' : this.value}">
        <slot></slot>
    `;
  }

  private _handleEvent(event:Event) {
    // this.dispatchEvent(new Event(event))
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-range-input': RhAudioPlayerRangeInput;
}
}
