import { LitElement, html, css } from 'lit';

class UxdotFeedback extends LitElement {
  static styles = css`

    :host {
      display: block;
      container-type: inline-size;
      container-name: host;
      margin-block-start:var(--rh-space-5xl, 80px);
    }

    #container {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: var(--rh-space-3xl, 48px);
      margin-block-end: var(--rh-space-3xl, 48px);
    }

    h2,
    ::slotted(h2) {
      font-family: var(--rh-font-family-heading, RedHatDisplay, 'Red Hat Display', 'Noto Sans Arabic', 'Noto Sans Hebrew', 'Noto Sans JP', 'Noto Sans KR', 'Noto Sans Malayalam', 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans Thai', Helvetica, Arial, sans-serif);
      font-size: var(--rh-font-size-heading-md, 1.75rem) !important;
      font-weight: var(--rh-font-weight-heading-medium, 500);
      line-height: var(--rh-line-height-heading, 1.3);
      margin: var(--rh-space-2xl, 32px) 0 !important;
    }

    p {
      font-size: var(--rh-font-size-body-text-lg, 1.125rem)
    }

    @container host (min-width: 576px) {
      #container {
        grid-template-columns: 1fr 1fr;
      }
    }
  `;

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
            <a href="https://github.com/RedHat-UX/red-hat-design-system/discussions" class="feedback-contact-link">contact us</a>.
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('uxdot-feedback', UxdotFeedback);
