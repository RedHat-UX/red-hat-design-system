import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { css } from "lit";
const styles = css `:host{display:block;container-type:inline-size;container-name:host;margin-block-start:var(--rh-space-5xl)}#container{display:grid;grid-template-columns:1fr;grid-gap:var(--rh-space-3xl);margin-block-end:var(--rh-space-3xl)}::slotted(h2),h2{font-family:var(--rh-font-family-heading);font-size:var(--rh-font-size-heading-md)!important;font-weight:var(--rh-font-weight-heading-medium);line-height:var(--rh-line-height-heading);margin:var(--rh-space-2xl) 0!important}p{font-size:var(--rh-font-size-body-text-lg)}@container host (min-width: 576px){#container{grid-template-columns:1fr 1fr}}`;
let UxdotFeedback = class UxdotFeedback extends LitElement {
    render() {
        return html `
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
            <a href="https://github.com/RedHat-UX/red-hat-design-system/discussions" class="feedback-contact-link">contact us</a>.
          </p>
        </div>
      </div>
    `;
    }
};
UxdotFeedback.styles = [styles];
UxdotFeedback = __decorate([
    customElement('uxdot-feedback')
], UxdotFeedback);
export { UxdotFeedback };
//# sourceMappingURL=uxdot-feedback.js.map