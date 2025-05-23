import { LitElement, html } from 'lit';

import { customElement } from 'lit/decorators/custom-element.js';

import styles from './uxdot-feedback.css';

@customElement('uxdot-feedback')
export class UxdotFeedback extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div id="container" part="container">
        <div>
          <slot>
            <h2>Other libraries</h2>
            <p>To learn more about our other libraries, visit <a href="/get-started/">this page</a>.</p>
          </slot>
        </div>
        <div>
        <h2>Feedback</h2>
          <p>
            To give feedback about anything on this page,
            <a href="https://github.com/RedHat-UX/red-hat-design-system/discussions">contact us</a>.
          </p>
        </div>
      </div>
    `;
  }
}

