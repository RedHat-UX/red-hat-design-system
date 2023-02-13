import './rh-footer-social-link.js';
import './rh-footer-links.js';
import './rh-footer-block.js';
import './rh-global-footer.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
import '@rhds/elements/rh-accordion/rh-accordion.js';
import { RhFooter } from './RhFooter.js';
import { RhGlobalFooter } from './rh-global-footer.js';
export { RhFooter, RhGlobalFooter };
declare global {
    interface HTMLElementTagNameMap {
        'rh-footer': RhFooter;
    }
}
