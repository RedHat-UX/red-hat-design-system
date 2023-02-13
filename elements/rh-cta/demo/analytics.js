import 'https://ga.jspm.io/npm:prismjs@1.29.0/prism.js';
import 'https://ga.jspm.io/npm:prismjs@1.29.0/plugins/autoloader/prism-autoloader.js';
import 'https://ga.jspm.io/npm:@power-elements/json-viewer@2.1.1/json-viewer.js';

customElements.define('slotted-link', class SlottedLinkElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }).innerHTML = /* html */`
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
    // for the purposes of the demo, let's enable console logging here
    // eslint-disable-next-line no-console
    console.log('CTA ANALYTICS EVENT', data);
    document.querySelector('json-viewer').object = data;
  }
});
