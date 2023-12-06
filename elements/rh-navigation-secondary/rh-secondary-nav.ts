/** @deprecated */

import { customElement } from 'lit/decorators/custom-element.js';
import { RhNavigationSecondary } from './rh-navigation-secondary.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

@customElement('rh-secondary-nav')
class RhSecondaryNav extends RhNavigationSecondary {
  constructor() {
    super();
    new Logger(this).warn('rh-secondary-nav is deprecated. Use rh-navigation-secondary instead.');
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'rh-secondary-nav': RhSecondaryNav;
  }
}
