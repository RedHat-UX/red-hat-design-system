import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { HeadingController, HeadingOptions } from '../../lib/HeadingController.js';
// import {msg} from '@lit/localize';

import styles from './rh-audio-player-panel.css';


/**
 * Audio Player
 * @slot - Place element content here
 */
@customElement('rh-audio-player-panel')
export class RhAudioPlayerPanel extends LitElement {
  static readonly styles = [styles];

  @queryAssignedElements({ slot: 'heading' }) private _heading!: HTMLElement;
  @property({ type: Object }) headingOverride!:TemplateResult | string;
  @property({ type: Object }) headingPrefix:TemplateResult | string = '';
  @property({ type: String, attribute: 'hidden', reflect: true }) hidden!:boolean;

  #headingLevelController = new HeadingController(this);

  get #options():HeadingOptions {
    return {
      id: this.slot as string,
      classes: { 'panel-title': true }
    };
  }

  get heading():TemplateResult|string {
    return this.headingOverride ?
      this.headingOverride
      : this._heading && this._heading.textContent ?
      this._heading.textContent
      : this.slot === 'about' ?
      'About this Episode'
      : this.slot === 'subscribe' ?
      'Subscribe'
      : 'Transcript';
  }

  render() {
    const slot = this.slot as string;
    return html`
      ${this.headingPrefix}
      ${this.#headingLevelController.headingTemplate(this.headingOverride, this.#options)}
      <slot name="heading" hidden></slot>
      <slot></slot>
      <slot name="footer"></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-panel': RhAudioPlayerPanel;
  }
}
