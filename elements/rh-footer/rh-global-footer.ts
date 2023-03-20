import { customElement } from 'lit/decorators/custom-element.js';
import { RhFooterUniversal } from './rh-footer-universal.js';

/** @deprecated - use `<rh-footer-universal>` */
@customElement('rh-global-footer')
export class RhGlobalFooter extends RhFooterUniversal {}

declare global {
  interface HTMLElementTagNameMap {
    'rh-global-footer': RhGlobalFooter;
  }
}
