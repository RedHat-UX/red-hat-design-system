import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { classMap } from 'lit/directives/class-map.js';

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';

import style from './rh-footer.css' with { type: 'css' };

import './rh-footer-copyright.js';

/**
 * Abbreviated footer for content shared across all Red Hat sites. Use
 * standalone or inside `<rh-footer>`. MUST NOT be wrapped in a native
 * `<footer>` — when standalone, sets the ARIA `contentinfo` landmark
 * role via ElementInternals. SHOULD include a heading slot for screen
 * readers. Tab moves focus between links. No special keyboard
 * interaction beyond standard link navigation.
 *
 * @summary An abbreviated footer with content that stays the same across all websites
 *
 * @demo https://ux.redhat.com/elements/footer/demo/footer-universal/ - Standalone universal footer
 * @alias footer-universal
 */
@customElement('rh-footer-universal')
@colorPalettes
export class RhFooterUniversal extends LitElement {
  static readonly styles = [style];

  /**
   * Color palette for the footer surface and text. Use design-system values
   * (e.g. light, darker). Should contrast with adjacent layout; avoid matching
   * a dark universal footer to a dark nav bar.
   * @summary Theme for footer (light/dark); should contrast with adjacent layout.
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette: ColorPalette = 'darker';

  #internals = InternalsController.of(this);

  #slots = new SlotController(
    this,
    'primary-start',
    'primary-end',
    'secondary-start',
    'secondary-end',
    'links-primary',
    'links-secondary',
    'tertiary',
  );

  override connectedCallback() {
    super.connectedCallback();
    this.#updateRole();
  }

  /**
   * Check if this element is nested inside another `<footer>`/`<rh-footer>`.
   * If not, set role="contentinfo" on the host via InternalsController.
   * NOTE: Does not check for other custom elements with `role="contentinfo"`
   */
  #updateRole() {
    let node: HTMLElement | null | undefined = this.parentElement;
    let hasFooterAncestor = false;

    while (node) {
      if (node.tagName === 'FOOTER') {
        hasFooterAncestor = true;
        break;
      }

      if (node.tagName === 'RH-FOOTER') {
        hasFooterAncestor = true;
        break;
      }

      if (node.shadowRoot?.querySelector('footer')) {
        hasFooterAncestor = true;
        break;
      }

      node = node.parentElement;
    }

    if (!hasFooterAncestor) {
      this.#internals.role = 'contentinfo';
    }
  }

  override render() {
    const hasTertiary = this.#slots.hasSlotted('tertiary');

    // determine if h2 already exists in parent context
    let node: HTMLElement | null | undefined = this.parentElement;
    let h2: HTMLElement | null | undefined = null;
    while (!!node && !h2) {
      h2 = h2
        || node?.closest('h2')
        || node?.querySelector('h2')
        || node?.shadowRoot?.querySelector('h2');
      node = node.parentElement;
    }

    return html`
      <div class="footer">
        <h2 id="global-heading" ?hidden="${!!h2}">
          <!-- Visually-hidden heading announced by screen readers to identify the footer landmark. Expects inline text. Defaults to "Red Hat footer". -->
          <slot name="heading">Red Hat footer</slot>
        </h2>
        <!--
          part:
            description: Wrapper for the universal footer content (logo, primary, secondary, tertiary).
        -->
        <div class="section global-base ${classMap({ hasTertiary })}" part="section base">
          <!-- Replaces the default layout. AVOID using; it removes all built-in ARIA structure. Expects block-level elements. -->
          <slot name="base">
            <!--
              part:
                description: Container for the logo slot.
            -->
            <div class="global-logo" part="logo">
              <!-- Logo or brand mark. Expects an anchor wrapping an \`<img>\` or \`<svg>\` with descriptive alt text for screen readers. Defaults to Red Hat logo. -->
              <slot name="logo">
                <!--
                  part:
                    description: Link wrapping the logo; defaults to redhat.com.
                -->
                <a class="global-logo-anchor"
                    part="logo-anchor"
                    href="https://redhat.com"
                    aria-label="Visit Red Hat">
                  <!--
                    part:
                      description: Logo image or SVG element.
                  -->
                  <svg class="global-logo-image"
                       part="logo-image"
                       data-name="Layer 1"
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 192 145">
                      <title>Red Hat logo</title>
                    <defs>
                      <style>
                        .band {
                          fill: transparent;
                        }
                      </style>
                    </defs>
                    <path class="band" d="M157.77,62.61a14,14,0,0,1,.31,3.42c0,14.88-18.1,17.46-30.61,17.46C78.83,83.49,42.53,53.26,42.53,44a6.43,6.43,0,0,1,.22-1.94l-3.66,9.06a18.45,18.45,0,0,0-1.51,7.33c0,18.11,41,45.48,87.74,45.48,20.69,0,36.43-7.76,36.43-21.77,0-1.08,0-1.94-1.73-10.13Z" />
                    <path class="cls-1" d="M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78" />
                  </svg>
                </a>
              </slot>
            </div>
            <!--
              part:
                description: Primary row (start, links, end).
            -->
            <div class="global-primary" part="primary">
              <!-- Content for the primary row. Expects block-level elements using the primary-start, links-primary, and primary-end slots. -->
              <slot name="primary">
                <!--
                  part:
                    description: Left area of the primary row.
                -->
                <div class="global-primary-start" part="primary-start" ?hidden=${!this.#slots.hasSlotted('primary-start')}>
                  <!-- Optional content at the start of the primary row. Expects block-level elements. -->
                  <slot name="primary-start"></slot>
                </div>
                <!--
                  part:
                    description: Main link list area in the primary row.
                -->
                <div class="global-links-primary" part="links-primary" ?hidden=${!this.#slots.hasSlotted('links-primary')}>
                  <!-- Primary links (e.g. About, Contact). Expects a heading and \`<ul>\` with \`<a>\` items. Each heading SHOULD have a unique id for \`aria-labelledby\`. -->
                  <slot name="links-primary"></slot>
                </div>
                <!--
                  part:
                    description: Right area of the primary row.
                -->
                <div class="global-primary-end" part="primary-end" ?hidden=${!this.#slots.hasSlotted('primary-end')}>
                  <!-- Optional content at the end of the primary row (e.g. \`<rh-footer-copyright>\`). Expects block-level elements. -->
                  <slot name="primary-end"></slot>
                </div>
              </slot>
            </div>
            <!--
              part:
                description: Spacer between primary and secondary rows.
            -->
            <div class="spacer" part="spacer"></div>
            <!--
              part:
                description: Secondary row (start, links, end).
            -->
            <div class="global-secondary" part="secondary">
              <!-- Content for the secondary row. Expects block-level elements using the secondary-start, links-secondary, and secondary-end slots. -->
              <slot name="secondary">
                <!--
                  part:
                    description: Left area of the secondary row.
                -->
                <div class="global-secondary-start" part="secondary-start" ?hidden=${!this.#slots.hasSlotted('secondary-start')}>
                  <!-- Optional content at the start of the secondary row. Expects block-level elements. -->
                  <slot name="secondary-start"></slot>
                </div>
                <!--
                  part:
                    description: Main link list area in the secondary row.
                -->
                <div class="global-links-secondary" part="links-secondary" ?hidden=${!this.#slots.hasSlotted('links-secondary')}>
                  <!-- Secondary links (e.g. Privacy, Terms). Expects a heading and \`<ul>\` with \`<a>\` items. Each heading SHOULD have a unique id for \`aria-labelledby\`. -->
                  <slot name="links-secondary"></slot>
                </div>
                <!--
                  part:
                    description: Right area of the secondary row.
                -->
                <div class="global-secondary-end" part="secondary-end" ?hidden=${!this.#slots.hasSlotted('secondary-end')}>
                  <!-- Optional content at the end of the secondary row. Expects block-level elements. -->
                  <slot name="secondary-end"></slot>
                </div>
              </slot>
            </div>
            <!--
              part:
                description: Optional bottom section (e.g. copyright, extra text).
            -->
            <div class="global-tertiary" part="tertiary" ?hidden=${!this.#slots.hasSlotted('tertiary')}>
              <!-- Tertiary content below primary and secondary rows. Expects block-level elements. -->
              <slot name="tertiary"></slot>
            </div>
          </slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-footer-universal': RhFooterUniversal;
  }
}
