customElements.define('slotted-link', class SlottedLinkElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }).innerHTML = `
      <rh-cta><slot name="default"></slot></rh-cta>
      <rh-cta variant="primary"><slot name="primary"></slot></rh-cta>
      <rh-cta variant="secondary"><slot name="secondary"></slot></rh-cta>
      <rh-cta variant="brick"><slot name="brick"></slot></rh-cta>
    `;
  }
});


function deepClosest(event, selector) {
  for (const node of event.composedPath().reverse()) {
    if (node.matches?.(selector)) {
      return node;
    }
  }
  return event.target.closest(selector);
}

document.addEventListener('click', function(event) {
  const cta = deepClosest(event, 'rh-cta');
  if (cta) {
    const { href, text, title } = cta.cta;
    const color = cta.colorPalette;
    const type = cta.variant ?? 'default';
    const data = { href, text, title, color, type };
    // eslint-disable-next-line no-console
    console.log('CTA ANALYTICS EVENT', data);
    document.querySelector('json-viewer').object = data;
  }
});

// Make use of global config object to change default options
window.ZeroMdConfig = {
  cssUrls: [
    '/assets/prism.css',
    'https://unpkg.com/prismjs/plugins/toolbar/prism-toolbar.min.css'
  ]
};
