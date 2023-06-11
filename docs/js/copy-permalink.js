const hPermalinkTpl = document.createElement('template');
hPermalinkTpl.innerHTML = `
  <slot></slot>
  <span id="signifier">(permalink)</span>
  <button id="button" aria-label="Copy link to clipboard">🔗</button>
  <p id="status" aria-live="polite"></p>
`;

const hPermalinkStyle = new CSSStyleSheet();
hPermalinkStyle.replaceSync(`
:host {
  align-items: center;
  display: inline-flex;
  height: 100%;
}

#signifier {
  display: var(--perma-signifier-display, none);
}

#status {
  font-size: var(--rh-font-size-body-text-sm);
  font-weight: var(--rh-font-weight-body-text-regular);
  margin: 0;
}

#button {
  height: 1.75rem;
  background: none;
  border: none;
  border-radius: var(--rh-border-radius-default);
  margin-inline: var(--rh-space-sm);
}

#button:is(:hover, :focus) {
  background: var(--rh-color-surface-light);
}
`);

customElements.define('copy-permalink', class CopyPermalink extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
      .append(hPermalinkTpl.content.cloneNode(true));
    this.shadowRoot.adoptedStyleSheets = [hPermalinkStyle];
    const button = this.shadowRoot.getElementById('button');
    const status = this.shadowRoot.getElementById('status');
    button.setAttribute('aria-label', this.getAttribute('copy-button-label') ?? 'Copy link to clipboard');
    button.addEventListener('click', async () => {
      const { href } = this.querySelector('a');
      if (href) {
        await navigator.clipboard.writeText(href);
        status.textContent = this.getAttribute('copied-text') ?? 'link copied';
      }
    });
  }
});
