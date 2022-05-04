import { css, html, LitElement } from 'lit';
import { state, property, queryAssignedElements } from 'lit/decorators.js';
import { mobileBreakpoint } from './lib/tokens.js';
// import { MatchMediaController } from './lib/MatchMediaController.js';

interface LinkSet {
  header: HTMLElement | null;
  panel: HTMLElement | null;
}

export class RhFooterLinkWrapper extends LitElement {
  static get tag() {
    return `rh-footer-links-wrapper`;
  }

  @property({ type: Boolean, attribute: 'is-mobile', reflect: true })
  public isMobile = false;

  @state() private linkSets?: LinkSet[];

  @queryAssignedElements({ slot: 'links' }) private links?: HTMLElement[];

  static get styles() {
    return css`
      :host {
        display: contents;
        width: 100%;
        --pfe-accordion--Color: #fff;
        --pfe-accordion--Color--expanded: #fff;
        --pfe-accordion--Color--active: #fff;
        --pfe-accordion--BackgroundColor: transparent;
        --pfe-accordion--BackgroundColor--expanded: #151515;
        --pfe-accordion--BorderColor: var(--_border-color);
        --pfe-accordion--FontWeight--header: 300;
        --pfe-accordion--accent--expanded: var(--_accent-color);
        --pfe-accordion--accent--active: var(--_accent-color);
      }

      :host([is-mobile]) {
        --link-font-size: 16px;
        --rh-footer--links-columns: 1;
        --rh-footer-links-flex-direction: row;
        --rh-footer-links-width: 100% !important;
        --rh-footer-link-width: 100% !important;
      }

      /* Add a touch of padding to the bottom of pfe-accordion-panels */
      :host([is-mobile]) ::slotted(rh-footer-links) {
        padding-bottom: 16px;
      }

      .base {
        width: 100%;
      }

      @media screen and (min-width: ${mobileBreakpoint}) {
        :host([is-mobile]) {
          --rh-footer-link-width: calc(50% - 5px) !important;
        }
      }
    `;
  }

  async build(): Promise<void> {
    // get a list of rh-footer-links items
    if (this.shadowRoot) {
      // update the lightdom
      if (this.isMobile) {
        this.linkSets = (
          this.querySelector('slot')?.assignedElements?.() ?? []
        ).map(item => ({
          // for each header we need to create an array of panel items that it's associated with.
          header: item.querySelector('[slot="header"]'),
          panel: item as HTMLElement,
        }));
        console.log(this.linkSets);

        // if mobile then we need to apply the dynamic slots
        for (const [index, set] of Object.entries(this.linkSets ?? [])) {
          if (set.header) {
            // move the header out of the pfe-footer-links
            // and into the scope of this pfe-footer-links-wrapper
            // insertBefore ensures that they will be direct siblings
            this.insertBefore(set.header, set.panel);
            set.header.setAttribute('slot', `header-${index}`);
          }
          if (set.panel) {
            set.panel.setAttribute('slot', `panel-${index}`);
          }
        }
      }
      // clean up dynamic links if we have a linkSet
      else if (this.linkSets) {
        for (const set of Object.values(this.linkSets ?? [])) {
          if (set.header) {
            // move the header back into pfe-footer-links
            set.panel?.prepend(set.header);
            set.header.setAttribute('slot', `header`);
          }
          if (set.panel) {
            set.panel.removeAttribute('slot');
          }
        }
      }
    }
  }

  render() {
    console.log(this.isMobile);
    // make sure we check if we need to rebuild
    // the dynamic slots
    this.build();
    return html`
      ${this.isMobile && this.linkSets
        ? html`
            <pfe-accordion>
              ${this.linkSets.map(
                (_, index) => html`
                  <pfe-accordion-header
                    ><slot name="header-${index}"></slot
                  ></pfe-accordion-header>
                  <pfe-accordion-panel
                    ><slot name="panel-${index}"></slot
                  ></pfe-accordion-panel>
                `
              )}
            </pfe-accordion>
          `
        : html` <slot></slot> `}
    `;
  }
}

customElements.define(RhFooterLinkWrapper.tag, RhFooterLinkWrapper);
