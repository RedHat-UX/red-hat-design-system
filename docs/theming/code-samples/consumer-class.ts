import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';  // 1
import {
  colorContextConsumer,
  type ColorTheme,
} from '@rhds/elements/lib/context/color/consumer.js';

@customElement('rh-consumer')
export class RhConsumer extends LitElement {
  @colorContextConsumer() private on?: ColorTheme;       // 2

  render() {
    const { on = 'light' } = this;                       // 3
    return html`
      <div id="container"
           class="${classMap({ on: true, [on]: true })}">
      </div>`;
  }
}
