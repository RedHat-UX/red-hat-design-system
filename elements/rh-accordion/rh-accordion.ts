import { colorContextProvider, ColorPalette, ColorTheme } from '../../lib/context/color.js';
import { cascades } from '@patternfly/pfe-core/decorators/cascades.js';
import { customElement, property } from 'lit/decorators.js';

import styles from './rh-accordion.css';
import { BaseAccordion } from '@patternfly/pfe-accordion/BaseAccordion';
import { colorContextConsumer, initializer } from '@patternfly/pfe-core/decorators.js';
import { RhAccordionHeader } from './rh-accordion-header.js';

/**
 * Accordion
 * @slot - Place element content here
 */
@customElement('rh-accordion')
export class RhAccordion extends BaseAccordion {
  static readonly version = '{{version}}';

  static readonly styles = [...BaseAccordion.styles, styles];

  #allHeaders(accordion?: BaseAccordion): RhAccordionHeader[] {
    if ( accordion !== undefined ) {
      return Array.from(accordion.children).filter(BaseAccordion.isHeader);
    }
    return Array.from(this.children).filter(BaseAccordion.isHeader);
  }

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @colorContextConsumer()
  @property({ reflect: true }) on: ColorTheme = 'light';

  @cascades('rh-accordion-header', 'rh-accordion-panel')
  @property({ reflect: true })
    large?: 'true'|'false';

  @cascades('rh-accordion-header', 'rh-accordion-panel')
    bordered = true;

  /**
   * If the element has one `rh-accordion-header`, it will get tagged with
   * `disclosure="true"`. This applies a slightly different set of styles:
   * chevron appears on the left side, the header has a single border on all four sides.
   * Applying `disclosure="false"` to an element containing only one header/panel pairing
   * will set the element to display as a standard accordion.
   */
  @cascades('rh-accordion-header', 'rh-accordion-panel')
  @property({ type: String, reflect: true })
    disclosure?: 'true'|'false';

  private _manualDisclosure?: 'true'|'false';

  private initialized = false;

  constructor() {
    super();
    this.single = 'false';
  }

  @initializer() protected async _init() {
    super._init();
    if (!this.initialized) {
      this._manualDisclosure = this.getAttribute('disclosure') as 'true'|'false';
      await this.updateComplete;
      this.initialized = true;
    }

    this.updateAccessibility();
  }

  override updateAccessibility() {
    super.updateAccessibility();

    const headers = this.#allHeaders();

    if (headers.length === 1) {
      this.disclosure = this._manualDisclosure ?? 'true';
    } else if (headers.length > 1) {
      this.disclosure = 'false';
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion': RhAccordion;
  }
}
