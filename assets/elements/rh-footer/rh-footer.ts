import { RhFooter } from './RhFooter.js';

customElements.define('rh-footer', RhFooter);

declare global {
  interface HTMLElementTagNameMap {
    'rh-footer': RhFooter;
  }
}
