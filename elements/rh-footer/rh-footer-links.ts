import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { consume } from '@lit/context';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import style from './rh-footer-links.css' with { type: 'css' };
import { compactContext } from './context.js';

import '@rhds/elements/rh-icon/rh-icon.js';

/**
 * Accessible link group for the footer. Auto-wires `aria-labelledby`
 * between the heading and `<ul>` for screen readers. Must contain a
 * `<ul>`; should include a heading in the `header` slot. Tab moves
 * focus through each link. When slotted into `rh-footer`'s `links`
 * slot, it uses a native details/summary disclosure on mobile and remains
 * open on desktop.
 *
 * @summary Accessible link group with heading for footer navigation
 */
@customElement('rh-footer-links')
export class RhFooterLinks extends LitElement {
  static readonly styles = style;

  @consume({ context: compactContext, subscribe: true })
  @state() private compact = true;

  /** Opens this navigation group in compact layouts. */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Visually hides the header slot content while preserving it for screen
   * readers. The `aria-labelledby` association remains active regardless
   * of this setting. USE when the heading should be accessible but not
   * visible (e.g. social links group). Defaults to false.
   */
  @property({
    type: Boolean,
    attribute: 'header-hidden',
    reflect: true,
  }) headerHidden = false;

  #mo = new MutationObserver(() => this.updateAccessibility());

  protected slots = new SlotController(this, 'header');

  connectedCallback() {
    super.connectedCallback();
    if (!isServer) {
      this.updateAccessibility();
    }
    this.#mo.observe(this, { childList: true });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#mo.disconnect();
  }

  updateAccessibility() {
    // ensure we've rendered to our shadowroot
    const header = this.querySelector('[slot="header"]');
    const ul = this.querySelector('ul');
    if (header && ul) {
      // ensure there is an id on the header slot
      header.id ||= getRandomId('rh-footer-links');
      ul.setAttribute('aria-labelledby', header.id);
    }
  }

  #onToggle(event: ToggleEvent) {
    const details = event.currentTarget as HTMLDetailsElement;
    if (this.compact) {
      this.open = details.open;
      if (details.open) {
        this.dispatchEvent(new Event('rh-footer-links-open', {
          bubbles: true,
          composed: true,
        }));
      }
    } else if (!details.open) {
      details.open = true;
    }
  }

  render() {
    const content = html`
      <div part="header" class="header">
        <!-- summary: link group heading
             description: |
               Expects a block elements heading (h2-h5) labeling this link group.
               Automatically linked to the \`<ul>\` via \`aria-labelledby\` for screen
               reader users. Visually hidden when \`header-hidden\` attribute is set. -->
        <slot name="header"></slot>
      </div>
      <div part="default" class="default">
        <!-- summary: accordion panel content
             description: |
               Expects block elements. Alternative content slot used when links are
               rendered inside an accordion panel on mobile viewports. Screen readers
               navigate panel content after the accordion header is expanded. -->
        <slot name="panel"></slot>
        <!-- summary: link list
             description: |
               Expects block elements: a \`<ul>\` of navigation links. Each link is
               focusable via Tab. The list should have \`aria-labelledby\` pointing
               to the header (auto-wired by the component). -->
        <slot></slot>
      </div>
    `;

    // HTMLElement#slot is not reflected by Lit's server DOM shim.
    if (this.getAttribute('slot') !== 'links') {
      return content;
    }

    return html`
      <details ?open=${!this.compact || this.open} @toggle=${this.#onToggle}>
        <summary part="header" tabindex=${this.compact ? '0' : '-1'}>
          <slot name="header"></slot>
          <rh-icon set="ui" icon="caret-down" aria-hidden="true"></rh-icon>
        </summary>
        <div id="details-content" part="default">
          <slot name="panel"></slot>
          <slot></slot>
        </div>
      </details>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-footer-links': RhFooterLinks;
  }
}
