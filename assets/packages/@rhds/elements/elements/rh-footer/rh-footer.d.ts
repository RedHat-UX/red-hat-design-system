import './rh-footer-social-link.js';
import './rh-footer-links.js';
import './rh-footer-block.js';
import './rh-footer-universal.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
import '@rhds/elements/rh-accordion/rh-accordion.js';
import { RhFooter } from './RhFooter.js';
import { RhFooterUniversal } from './rh-footer-universal.js';
import { RhGlobalFooter } from './rh-global-footer.js';
export { RhFooter, RhGlobalFooter, RhFooterUniversal };
declare global {
    interface HTMLElementTagNameMap {
        'rh-footer': RhFooter;
    }
}
