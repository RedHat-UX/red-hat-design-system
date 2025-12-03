---
title: Examples
heading: Tabs
sidenavTitle: Tabs
layout: layouts/pages/pattern.njk
tags:
  - tabPatterns
subnav:
  collection: tabPatterns
  order: 2
---


<rh-alert state="warning">
  Use this pattern sparingly. If your tabs serve only as page navigation,
  use the <a href="/elements/subnavigation">Subnav</a> element instead.
</rh-alert>

<uxdot-pattern src="./patterns/link-to-tab.html">
  <h2 slot="heading">Link to tab</h2>
  <p>Use to activate a particular tab when the page's URL hash refers to an element
  within the tab panel, or to the tab itself.</p>
</uxdot-pattern>

<script type="module">
  // NOTE: the script sample provided in the link-to-tab demo will only work in the 
  // document, but we present it here in shadow root, so this script specifically
  // targets the element
  const pattern = document.querySelector('uxdot-pattern[src="./patterns/link-to-tab.html"]')
  await pattern.updateComplete;
  function activateTabByHash() {
    const { hash } = location;
    if (!hash) { return; }
    const hashTarget = pattern.shadowRoot.querySelector(hash);
    const tabs = hashTarget.closest('rh-tabs');
    if (hashTarget.localName === 'rh-tab') {
      tabs.select(hashTarget);
    } else {
      const panel = hashTarget?.closest('rh-tab-panel');
      const panelIndex = Array.from(tabs.querySelectorAll('rh-tab-panel')).indexOf(panel);
      if (panelIndex >= 0) {
        tabs.select(panelIndex);
      }
    }
  }
  addEventListener('hashchange', activateTabByHash);
  activateTabByHash();
</script>

<uxdot-pattern src="./patterns/code-tabs.html">
  <h2 slot="heading">Code Tabs</h2>
  <p>Use this pattern to display highlighted code blocks of one or more
     languages, for example: the HTML, CSS, and JavaScript needed to implement a
     pattern.</p>
</uxdot-pattern>

