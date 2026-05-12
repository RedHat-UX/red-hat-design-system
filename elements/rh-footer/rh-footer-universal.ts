import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { classMap } from 'lit/directives/class-map.js';

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { lightdomCSS } from '@rhds/elements/lib/lightdom-css.js';

import style from './rh-footer.css' with { type: 'css' };

import './rh-footer-copyright.js';

/**
 * Global Red Hat footer bar for consistent branding across all
 * properties. Authors must not customize content per-site. The
 * `secondary-start` slot should contain `<rh-footer-copyright>`.
 * Renders a `<footer>` with ARIA landmark semantics and a
 * visually-hidden `<h2>` so screen readers can identify the region.
 * Tab navigates link groups.
 *
 * @summary Global Red Hat universal footer with logo, links, and copyright
 */
@customElement('rh-footer-universal')
@colorPalettes
@lightdomCSS(import.meta.url, './rh-footer-lightdom.css')
export class RhFooterUniversal extends LitElement {
  static readonly styles = [style];

  /**
   * Color palette for the universal footer. Defaults to `'darker'`.
   * Valid values: `'lighter'`, `'light'`, `'dark'`, `'darker'`, `'darkest'`.
   * The universal footer typically renders on the darkest surface.
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

  #hasAncestorH2 = false;

  override connectedCallback() {
    super.connectedCallback();
    this.#updateRole();
    this.#hasAncestorH2 = this.#detectAncestorH2();
  }

  /** Check if an h2 already exists in the parent context. */
  #detectAncestorH2(): boolean {
    let node: HTMLElement | null | undefined = this.parentElement;
    while (node) {
      if (node?.closest('h2')
        || node?.querySelector('h2')
        || node?.shadowRoot?.querySelector('h2')) {
        return true;
      }
      node = node.parentElement;
    }
    return false;
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

    return html`
      <div class="footer">
        <h2 id="global-heading" ?hidden="${this.#hasAncestorH2}">
          <!-- summary: visually-hidden heading for assistive technology
               description: |
                 Expects inline text. Screen readers use this heading to identify the
                 universal footer region. Defaults to "Red Hat footer". Hidden if a
                 parent \`<h2>\` already exists. -->
          <slot name="heading">Red Hat footer</slot>
        </h2>
        <!-- Wrapper for the universal footer content (logo, primary, secondary, tertiary). -->
        <div class="section global-base ${classMap({ hasTertiary })}" part="section base">
          <!-- summary: overrides all universal footer content (base slot)
               description: |
                 Expects block elements. Replaces the entire universal footer structure.
                 Avoid using; bypasses all built-in layout, grid regions, responsive
                 behavior, and ARIA landmark wiring. -->
          <slot name="base">
            <!-- Container for the logo slot. -->
            <div class="global-logo" part="logo">
              <!-- summary: Red Hat logo (logo slot)
                   description: |
                     Expects block elements: an \`<a>\` wrapping an \`<img>\` or \`<svg>\`.
                     Defaults to the Red Hat logo SVG linking to redhat.com. Screen
                     readers rely on the anchor \`aria-label\` for identification. -->
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
                    <path class="band" d="M157.77,62.61a14,14,0,0,1,.31,3.42c0,14.88-18.1,17.46-30.61,17.46C78.83,83.49,42.53,53.26,42.53,44a6.43,6.43,0,0,1,.22-1.94l-3.66,9.06a18.45,18.45,0,0,0-1.51,7.33c0,18.11,41,45.48,87.74,45.48,20.69,0,36.43-7.76,36.43-21.77,0-1.08,0-1.94-1.73-10.13Z"/>
                    <path class="cls-1" d="M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78"/>
                  </svg>
                </a>
              </slot>
            </div>
            <!-- Primary row (start, links, end). -->
            <div class="global-primary" part="primary">
              <!-- summary: overrides primary-start, links-primary, and primary-end (primary slot)
                   description: |
                     Expects block elements. Replaces the entire primary link region.
                     Override only when the three sub-slots are insufficient.
                     Screen readers navigate child links as a group. -->
              <slot name="primary">
                <!-- Left area of the primary row. -->
                <div class="global-primary-start" part="primary-start" ?hidden=${!this.#slots.hasSlotted('primary-start')}>
                  <!-- summary: content before primary links (primary-start slot)
                       description: |
                         Expects inline or block elements placed before the primary
                         global navigation links. Screen readers encounter this
                         content before the link list. -->
                  <slot name="primary-start"></slot>
                </div>
                <!-- Main link list area in the primary row. -->
                <div class="global-links-primary" part="links-primary" ?hidden=${!this.#slots.hasSlotted('links-primary')}>
                  <!-- summary: primary global navigation links (links-primary slot)
                       description: |
                         Expects block elements: a \`<ul>\` of \`<li>\` anchor links for
                         primary global Red Hat navigation. Screen readers announce
                         the list group; Tab moves through each link. -->
                  <slot name="links-primary"></slot>
                </div>
                <!-- Right area of the primary row. -->
                <div class="global-primary-end" part="primary-end" ?hidden=${!this.#slots.hasSlotted('primary-end')}>
                  <!-- summary: content after primary links (primary-end slot)
                       description: |
                         Expects inline or block elements placed after the primary
                         global navigation links. Screen readers encounter this
                         content after the link list. -->
                  <slot name="primary-end"></slot>
                </div>
              </slot>
            </div>
            <!-- Spacer between primary and secondary rows. -->
            <div class="spacer" part="spacer"></div>
            <!-- Secondary row (start, links, end). -->
            <div class="global-secondary" part="secondary">
              <!-- summary: overrides secondary-start, links-secondary, and secondary-end (secondary slot)
                   description: |
                     Expects block elements. Replaces the entire secondary link region.
                     Override only when the three sub-slots are insufficient.
                     Screen readers navigate child links as a group. -->
              <slot name="secondary">
                <!-- Left area of the secondary row. -->
                <div class="global-secondary-start" part="secondary-start" ?hidden=${!this.#slots.hasSlotted('secondary-start')}>
                  <!-- summary: content before secondary links, e.g. copyright (secondary-start slot)
                       description: |
                         Expects block elements such as \`<rh-footer-copyright>\`, placed
                         before the secondary links. Screen readers announce this
                         content in DOM order within the footer landmark. -->
                  <slot name="secondary-start"></slot>
                </div>
                <!-- Main link list area in the secondary row. -->
                <div class="global-links-secondary" part="links-secondary" ?hidden=${!this.#slots.hasSlotted('links-secondary')}>
                  <!-- summary: secondary global navigation links (links-secondary slot)
                       description: |
                         Expects block elements: a \`<ul>\` of \`<li>\` anchor links for
                         secondary global Red Hat navigation. Screen readers announce
                         the list group; Tab moves through each link. -->
                  <slot name="links-secondary"></slot>
                </div>
                <!-- Right area of the secondary row. -->
                <div class="global-secondary-end" part="secondary-end" ?hidden=${!this.#slots.hasSlotted('secondary-end')}>
                  <!-- summary: content after secondary links (secondary-end slot)
                       description: |
                         Expects inline or block elements placed after the secondary
                         global navigation links. Screen readers encounter this
                         content after the secondary link list. -->
                  <slot name="secondary-end"></slot>
                </div>
              </slot>
            </div>
            <!-- Optional bottom section (e.g. copyright, extra text). -->
            <div class="global-tertiary" part="tertiary" ?hidden=${!this.#slots.hasSlotted('tertiary')}>
              <!-- summary: optional third content region (tertiary slot)
                   description: |
                     Expects block elements such as a language selector or custom
                     widget. Hidden when nothing is slotted. Screen readers
                     encounter this region after the secondary links. -->
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
