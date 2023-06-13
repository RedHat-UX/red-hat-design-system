const hPermalinkTpl = document.createElement('template');
// TODO: rh-button icon variant, delegate aria-label
hPermalinkTpl.innerHTML = `
  <slot></slot>
  <span id="signifier">(permalink)</span>
  <button id="button" aria-label="Copy link to clipboard">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="M13.09 2.64a3 3 0 0 0-4.15 0L6.1 5.49a2.93 2.93 0 0 0 0 4.15.63.63 0 0 0 .88 0 .64.64 0 0 0 0-.89 1.65 1.65 0 0 1-.49-1.19A1.66 1.66 0 0 1 7 6.37l2.83-2.84a1.68 1.68 0 1 1 2.37 2.38l-.62.62a.63.63 0 1 0 .89.88l.62-.62a2.93 2.93 0 0 0 0-4.15Z"/>
      <path d="M8.61 6.77a.64.64 0 0 0 0 .89 1.68 1.68 0 0 1 0 2.37l-2.44 2.44a1.68 1.68 0 0 1-2.38 0 1.7 1.7 0 0 1 0-2.38l.15-.09a.64.64 0 0 0 0-.89.63.63 0 0 0-.88 0l-.15.15a3 3 0 0 0 0 4.15 3 3 0 0 0 4.15 0l2.43-2.44a2.9 2.9 0 0 0 .86-2.07 2.93 2.93 0 0 0-.85-2.13.64.64 0 0 0-.89 0Z"/>
    </svg>
  </button>
`;

const hPermalinkStyle = new CSSStyleSheet();
hPermalinkStyle.replaceSync(`
:host {
  align-items: center;
  display: flex;
}

svg {
  width: var(--rh-size-icon-02);
}

#signifier {
  display: var(--perma-signifier-display, none);
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
    button.setAttribute('aria-label', this.getAttribute('copy-button-label') ?? 'Copy link to clipboard');
    button.addEventListener('click', async () => {
      const { href } = this.querySelector('a');
      if (href) {
        await navigator.clipboard.writeText(href);
        const toast = document.createElement('rh-alert');
        toast.dismissable = true;
        toast.setAttribute('aria-live', 'polite');
        toast.style.position = 'fixed';
        toast.style.setProperty('inset-block-end', 'var(--rh-space-lg)');
        toast.style.setProperty('inset-inline-end', 'var(--rh-space-lg)');
        const heading = document.createElement('h2');
        heading.textContent = this.getAttribute('copied-text') ?? 'Link copied';
        heading.slot = 'header';
        toast.append(heading);
        document.body.append(toast);
        const toastDelay = parseInt(this.getAttribute('toast-delay') ?? '10');
        setTimeout(() => toast.remove(), toastDelay * 1000);
      }
    });
  }
});
