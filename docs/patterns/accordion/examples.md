---
title: Examples
heading: Accordion
sidenavTitle: Accordion
layout: layouts/pages/pattern.njk
tags:
  - accordionPatterns
subnav:
  collection: accordionPatterns
  order: 2
---

<uxdot-pattern src="./patterns/link-to-accordion.html">
  <h2 slot="heading">Link to accordion</h2>
</uxdot-pattern>

<script type="module">
  import '@rhds/elements/rh-accordion/rh-accordion.js';
  // NOTE: the script sample provided below is presented here in shadow root, so this script specifically
  // targets the element that contains it. If you are using this pattern in a document, you can remove the 
  // pattern and replace the pattern.shadowRoot.querySelector with a document.querySelector for the hashTarget.
  // Please reference the script in JS tab of the example demo for a working example outside of a shadow root.

  function accordionTargetIndex(accordion, target) {
    return Array.from(accordion.querySelectorAll('rh-accordion-header')).indexOf(target);
  }

  async function activateAccordionByHash() {
    const pattern = document.querySelector('uxdot-pattern[src="./patterns/link-to-accordion.html"]')
    await pattern.updateComplete;
    const { hash } = location;
    if (!hash) { return; }
    const hashTarget = pattern.shadowRoot.querySelector(hash);
    const accordion = hashTarget?.closest('rh-accordion');
    if (!accordion || !hashTarget) { return; }
    await accordion.updateComplete;
    if (hashTarget.localName === 'rh-accordion-header') {
      const headerIndex = accordionTargetIndex(accordion, hashTarget);
      await hashTarget.updateComplete;
      accordion.expand(headerIndex);
      await accordion.updateComplete;
      hashTarget.focus();
    } else {
      const panel = hashTarget?.closest('rh-accordion-panel');
      if (!panel) { return; }
      await panel.updateComplete;
      const headerId = panel.getAttribute('aria-labelledby');
      const header = accordion.querySelector(`#${headerId}`);
      const headerIndex = accordionTargetIndex(accordion, header);
      if (headerIndex >= 0) {
        accordion.expand(headerIndex);
        await accordion.updateComplete;
        hashTarget.focus();
      }
    }
    hashTarget.scrollIntoView({ block: 'center', inline: 'center', behavior: 'auto' });
  }
  addEventListener('hashchange', activateAccordionByHash);
  activateAccordionByHash();
</script>
