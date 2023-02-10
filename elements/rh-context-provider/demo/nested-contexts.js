import '@rhds/elements/rh-context-provider/rh-context-provider.js';

import { ColorContextConsumer } from '../../../lib/context/color/consumer.js';

import { LitElement, html } from 'lit';

customElements.define('test-context-consumer', class ContextConsumer extends LitElement {
  consumer = new ColorContextConsumer(this);

  on = this.consumer.value;

  render() {
    return html`
      <div>
        <p>Child on: ${this.on}</p>
      </div>
    `;
  }

  willUpdate() {
    this.on = this.consumer.value;
  }
});

document.getElementById('nestedForm').reset();
