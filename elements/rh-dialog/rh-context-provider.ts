import { ReactiveElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ColorContextProvider } from '@patternfly/pfe-core/controllers/color-context.js';

@customElement('rh-context-provider')
export class RhContextProvider extends ReactiveElement {
  provider = new ColorContextProvider(this);

  connectedCallback() {
    super.connectedCallback();
    this.renderRoot.append(document.createElement('slot'));
  }

  firstUpdated() {
    this.provider.update(null);
  }
}
