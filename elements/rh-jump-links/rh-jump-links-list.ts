import { html, LitElement, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { consume } from '@lit/context';
import { classMap } from 'lit/directives/class-map.js';

import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { rhJumpLinksOrientationContext } from './context.js';

import style from './rh-jump-links-list.css' with { type: 'css' };

/**
 * Provides a nested, expandable group for organizing related
 * `<rh-jump-link>` elements within `<rh-jump-links>`. Slot the
 * parent link into `slot="parent"`. In vertical orientation, child
 * links indent beneath the parent; in horizontal orientation the
 * group is hidden. Sets `aria-current="location"` and
 * `role="listitem"` on itself for screen readers. Avoid deeply
 * nesting multiple levels.
 *
 * @summary Nested group of jump links with an expandable parent
 */
@customElement('rh-jump-links-list')
@themable
export class RhJumpLinksList extends LitElement {
  static readonly styles: CSSStyleSheet[] = [style];

  #internals = InternalsController.of(this, { role: 'listitem' });

  /** Whether the layout of children is vertical or horizontal. */
  @consume({ context: rhJumpLinksOrientationContext, subscribe: true })
  @state() private orientation?: 'horizontal' | 'vertical';

  /** Whether any child link in this group is the active section. When true, the parent border highlights and child list expands (vertical only). Defaults to false. */
  @property({ type: Boolean, reflect: true }) active = false;

  @observes('active')
  protected activeChanged(): void {
    this.#internals.ariaCurrent = this.active ? 'location' : null;
  }

  render(): TemplateResult<1> {
    const { active, orientation = 'vertical' } = this;
    return html`
      <div id="container" class="${classMap({ active, [orientation]: true })}">
        <!-- summary: parent link for this nested group (parent slot)
             description: |
               A single \`<rh-jump-link>\` that labels this group. When clicked,
               the nested list expands in vertical orientation. Screen readers
               announce it as a list item within the navigation landmark. -->
        <slot name="parent"></slot>
        <div id="list"
             ?hidden="${this.orientation === 'horizontal' || !active}"
             role="list">
          <!-- summary: child jump links (default slot)
               description: |
                 One or more \`<rh-jump-link>\` children that appear nested under
                 the parent link. In vertical mode, these indent with additional
                 padding. Hidden in horizontal orientation. Each child has
                 \`role="listitem"\` for screen readers. -->
          <slot></slot>
        </div>
      </div>
    `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'rh-jump-links-list': RhJumpLinksList;
  }
}
