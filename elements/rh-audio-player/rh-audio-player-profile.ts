import { LitElement, html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import '@patternfly/elements/pf-avatar/pf-avatar.js';
import styles from './rh-audio-player-profile.css';


/**
 * Audio Player Profile Attribution
 * @slot fullname - full name
 * @slot role - role, title, affiliation
 */
@customElement('rh-audio-player-profile')
export class RhAudioPlayerProfile extends LitElement {
  static readonly styles = [styles];

  @property({ reflect: true }) src?: string;

  @queryAssignedElements({ slot: 'fullname' }) private _fullname!: HTMLElement[];

  render() {
    return html`${!this.src ? '' : html`
      <pf-avatar slot="avatar" name="${this.#fullname}" src="${this.src}"></pf-avatar>`}
      <div id="text">
        <slot name="fullname"></slot><br>
        <slot name="role"></slot>, <slot name="company"></slot>
      </div>
    `;
  }

  get #fullname() {
    const [slotted] = this._fullname;
    return slotted?.textContent ?? '';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-profile': RhAudioPlayerProfile;
  }
}
