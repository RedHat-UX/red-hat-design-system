import { LitElement, html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import '@patternfly/pfe-avatar';

// import {msg} from '@lit/localize';

import styles from './rh-audio-player-profile.css';


/**
 * Audio Player Profile Attribution
 * @slot fullname - full name
 * @slot role - role, title, affiliation
 */
@customElement('rh-audio-player-profile')
export class RhAudioPlayerProfile extends LitElement {
  static readonly styles = [styles];

  @property({ reflect: true, type: String }) src?:string;
  @queryAssignedElements({ slot: 'fullname' }) private _fullname!: HTMLElement[];

  render() {
    return html`
      ${!this.src ? '' : html`<pfe-avatar slot="avatar" name="${this.#fullname}" src="${this.src}"></pfe-avatar>`}
      <p>
        <slot name="fullname"></slot><br>
        <slot name="role"></slot>, <slot name="company"></slot>
      </p>
    `;
  }

  get #fullname():string {
    return !this._fullname[0] ? '' : this._fullname[0].innerHTML || '';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-profile': RhAudioPlayerProfile;
  }
}
