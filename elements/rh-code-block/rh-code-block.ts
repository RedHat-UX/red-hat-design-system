import { type ColorTheme, colorContextConsumer } from '../../lib/context/color/consumer.js';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators/property.js';

import style from './rh-code-block.css';

/**
 * A code block is formatted text within a container.
 * @summary Formats code strings within a container.
 * @slot - A non-executable script tag containing the sample content. JavaScript
 *         samples should use the type `text/sample-javascript`. HTML samples
 *         containing script tags must escape the closing `</script>` tag.
 */
@customElement('rh-code-block')
export class RhCodeBlock extends LitElement {
  static styles = [style];

  /** When set, the code block displays with compact spacing */
  @property({ type: Boolean, reflect: true }) compact = false;

  /** When set, the code block is resizable */
  @property({ type: Boolean, reflect: true }) resizable = false;

  /** When set, the code block occupies it's full height, without scrolling */
  @property({ type: Boolean, reflect: true, attribute: 'full-height' }) fullHeight = false;

  @colorContextConsumer() private on?: ColorTheme;

  render() {
    const { on = '' } = this;
    return html`
      <slot id="content" class="${classMap({ [on]: !!on })}"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-code-block': RhCodeBlock;
  }
}
