---
layout: layouts/pages/has-toc.njk
title: Demos
heading: Project Felt
permalink: /theming/themes/project-felt/demos/index.html
tocTags:
  - h2
  - h3
order: 20
tags:
  - projectFelt
subnav:
  collection: sortedProjectFelt
  order: 20
---
<script type="module" data-helmet>
  import '@uxdot/elements/uxdot-pattern.js';
  import '@rhds/elements/lib/elements/rh-context-demo/rh-context-demo.js';
  import '@rhds/elements/rh-accordion/rh-accordion.js';
  import '@rhds/elements/rh-alert/rh-alert.js';
  import '@rhds/elements/rh-badge/rh-badge.js';
  import '@rhds/elements/rh-breadcrumb/rh-breadcrumb.js';
  import '@rhds/elements/rh-button/rh-button.js';
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-chip/rh-chip.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-dialog/rh-dialog.js';
  import '@rhds/elements/rh-jump-links/rh-jump-links.js';
  import '@rhds/elements/rh-menu-dropdown/rh-menu-dropdown.js';
  import '@rhds/elements/rh-navigation-vertical/rh-navigation-vertical.js';
  import '@rhds/elements/rh-progress-stepper/rh-progress-stepper.js';
  import '@rhds/elements/rh-spinner/rh-spinner.js';
  import '@rhds/elements/rh-subnav/rh-subnav.js';
  import '@rhds/elements/rh-switch/rh-switch.js';
  import '@rhds/elements/rh-tabs/rh-tabs.js';
  import '@rhds/elements/rh-tag/rh-tag.js';
</script>

<link rel="stylesheet" data-helmet href="/theming/themes/project-felt/felt-theme-preview.css">

<style>
  #demos-nav {
    display: block;
    padding-block-end: var(--rh-space-2xl, 32px);
  }

  #demos-nav ul {
    columns: 2;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #demos-nav li {
    break-inside: avoid;
    margin: 0;
    padding: 0;
    padding-block-end: var(--rh-space-md, 8px);

    &:before {
      content: "•";
      margin-inline-end: var(--rh-space-md, 8px);
      color: var(--rh-color-interactive-primary-default);
    }
  }

  #demos-nav a {
    color: var(--rh-color-interactive-primary-default);
    text-decoration: none;

    &:hover {
      color: var(--rh-color-interactive-primary-hover);
      text-decoration: underline dashed 1px;
      text-decoration-color: inherit;
      text-underline-offset: max(5px, 0.28em);
    }

    &:focus-within {
      color: var(--rh-color-interactive-primary-focus);
      text-decoration: underline dashed 1px;
      text-decoration-color: inherit;
      text-underline-offset: max(5px, 0.28em);
    }

    &:visited {
      color: var(--rh-color-interactive-primary-visited-default);
      &:hover { color: var(--rh-color-interactive-primary-visited-hover); }
    }
  }

  @container main (min-width: 768px) {
    #demos-nav ul {
      columns: 3;
    }
  }

  @container main (min-width: 992px) {
    #demos-nav ul {
      columns: 4;
    }
  }

  .back-to-demos,
  .back-to-top {
    display: inline-block;
    margin-block: var(--rh-space-lg, 16px) var(--rh-space-2xl, 32px);
    color: var(--rh-color-interactive-primary-default);
    text-decoration: none;
    font-size: var(--rh-font-size-body-text-sm, 14px);

    &:before {
      display: inline-block;
      content: '⌃';
      margin-inline-end: var(--rh-space-md, 8px);
      color: var(--rh-color-interactive-primary-default);
    }

    &:hover {
      color: var(--rh-color-interactive-primary-hover);
      text-decoration: underline dashed 1px;
      text-decoration-color: inherit;
      text-underline-offset: max(5px, 0.28em);
    }
  }

  .back-to-top {
    display: none;
  }

  #page-toc:focus {
    outline: none;
  }

  @container main (min-width: 1440px) {
    #demos-nav,
    .back-to-demos {
      display: none;
    }

    .back-to-top {
      display: inline-block;
    }
  }
</style>

## Try it out

To apply the Project Felt preview theme to all of the elements below, toggle the switch.

<rh-switch id="felt-theme-switch"
            message-on="Project Felt preview theme"
            message-off="Off"></rh-switch>

## Demos

<nav id="demos-nav" aria-label="Demo components" hidden></nav>

<uxdot-pattern src="../../patterns/felt-preview-accordion.html">
  <uxdot-copy-permalink slot="heading"><h3 id="accordion" class="toc"><a href="#accordion">Accordion</a></h3></uxdot-copy-permalink>
</uxdot-pattern>

<uxdot-pattern src="../../patterns/felt-preview-alert.html">
  <uxdot-copy-permalink slot="heading"><h3 id="alert" class="toc"><a href="#alert">Alerts</a></h3></uxdot-copy-permalink>
</uxdot-pattern>

<uxdot-pattern src="../../patterns/felt-preview-badge.html">
  <uxdot-copy-permalink slot="heading"><h3 id="badge"><a href="#badge">Badge</a></h3></uxdot-copy-permalink>
</uxdot-pattern>

<uxdot-pattern src="../../patterns/felt-preview-breadcrumb.html">
  <uxdot-copy-permalink slot="heading"><h3 id="breadcrumb"><a href="#breadcrumb">Breadcrumb</a></h3></uxdot-copy-permalink>
</uxdot-pattern>

<uxdot-pattern src="../../patterns/felt-preview-buttons.html">
  <uxdot-copy-permalink slot="heading"><h3 id="button"><a href="#button">Button</a></h3></uxdot-copy-permalink>
</uxdot-pattern>

<uxdot-pattern src="../../patterns/felt-preview-ctas.html">
  <uxdot-copy-permalink slot="heading"><h3 id="call-to-action"><a href="#call-to-action">Call to action</a></h3></uxdot-copy-permalink>
</uxdot-pattern>

<uxdot-pattern src="../../patterns/felt-preview-cards.html">
  <uxdot-copy-permalink slot="heading"><h3 id="card"><a href="#card">Card</a></h3></uxdot-copy-permalink>
</uxdot-pattern>

<uxdot-pattern src="../../patterns/felt-preview-chip.html">
  <uxdot-copy-permalink slot="heading"><h3 id="chip"><a href="#chip">Chips</a></h3></uxdot-copy-permalink>
</uxdot-pattern>

<uxdot-pattern src="../../patterns/felt-preview-dialog.html">
  <uxdot-copy-permalink slot="heading"><h3 id="dialog"><a href="#dialog">Dialog</a></h3></uxdot-copy-permalink>
</uxdot-pattern>

<uxdot-pattern src="../../patterns/felt-preview-jump-links.html">
  <uxdot-copy-permalink slot="heading"><h3 id="jump-links"><a href="#jump-links">Jump links</a></h3></uxdot-copy-permalink>
</uxdot-pattern>

<uxdot-pattern src="../../patterns/felt-preview-menu.html">
  <uxdot-copy-permalink slot="heading"><h3 id="menu"><a href="#menu">Menu</a></h3></uxdot-copy-permalink>
</uxdot-pattern>

<uxdot-pattern src="../../patterns/felt-preview-navigation-vertical.html">
  <uxdot-copy-permalink slot="heading"><h3 id="navigation-vertical"><a href="#navigation-vertical">Navigation (vertical)</a></h3></uxdot-copy-permalink>
</uxdot-pattern>

<uxdot-pattern src="../../patterns/felt-preview-progress-stepper.html">
  <uxdot-copy-permalink slot="heading"><h3 id="progress-stepper"><a href="#progress-stepper">Progress stepper</a></h3></uxdot-copy-permalink>
</uxdot-pattern>

<uxdot-pattern src="../../patterns/felt-preview-spinner.html">
  <uxdot-copy-permalink slot="heading"><h3 id="spinner"><a href="#spinner">Spinner</a></h3></uxdot-copy-permalink>
</uxdot-pattern>

<uxdot-pattern src="../../patterns/felt-preview-subnav.html">
  <uxdot-copy-permalink slot="heading"><h3 id="subnav"><a href="#subnav">Subnav</a></h3></uxdot-copy-permalink>
</uxdot-pattern>

<uxdot-pattern src="../../patterns/felt-preview-switch.html">
  <uxdot-copy-permalink slot="heading"><h3 id="switch"><a href="#switch">Switch</a></h3></uxdot-copy-permalink>
</uxdot-pattern>

<uxdot-pattern src="../../patterns/felt-preview-tabs.html">
  <uxdot-copy-permalink slot="heading"><h3 id="tabs"><a href="#tabs">Tabs</a></h3></uxdot-copy-permalink>
</uxdot-pattern>

<uxdot-pattern src="../../patterns/felt-preview-tabs-vertical.html">
  <uxdot-copy-permalink slot="heading"><h3 id="tabs-vertical"><a href="#tabs-vertical">Tabs (vertical)</a></h3></uxdot-copy-permalink>
</uxdot-pattern>

<uxdot-pattern src="../../patterns/felt-preview-tag.html">
  <uxdot-copy-permalink slot="heading"><h3 id="tag"><a href="#tag">Tags</a></h3></uxdot-copy-permalink>
</uxdot-pattern>

<uxdot-feedback>
  <h2>Other available themes</h2>
  <p>If the Project Felt theme does not fit your user needs right now,
     <a href="/elements/">view all RHDS elements</a> with default styles.</p>
</uxdot-feedback>

<script type="module">
  const feltSwitch = document.querySelector('#felt-theme-switch');
  if (feltSwitch) {
    const response = await fetch('/theming/themes/project-felt/felt-theme-preview.css');
    const cssText = response.ok ? await response.text() : '';
    const sheet = new CSSStyleSheet();
    await sheet.replace(cssText);
    for (const pattern of document.querySelectorAll('uxdot-pattern')) {
      const root = pattern.shadowRoot;
      if (root && !root.adoptedStyleSheets.includes(sheet)) {
        root.adoptedStyleSheets = [...root.adoptedStyleSheets, sheet];
      }
    }
    feltSwitch.addEventListener('change', function() {
      for (const pattern of document.querySelectorAll('uxdot-pattern')) {
        pattern.shadowRoot
          ?.querySelector('#content')
          ?.classList.toggle('felt-preview', feltSwitch.checked);
      }
    });
  }

  const nav = document.querySelector('#demos-nav');
  if (nav) {
    const items = [...document.querySelectorAll('uxdot-pattern h3[id]')]
      .map(h3 => `<li><a href="#${h3.id}">${h3.textContent.trim()}</a></li>`)
      .join('');
    if (items) {
      nav.innerHTML = `<ul>${items}</ul>`;
      nav.hidden = false;
    }
  }

  for (const pattern of document.querySelectorAll('uxdot-pattern')) {
    pattern.insertAdjacentHTML('afterend',
      `<a href="#demos" class="back-to-demos">Back to demos list</a>` +
      `<a href="#page-toc" class="back-to-top">Back to page links</a>`);
  }

  const pageToc = document.querySelector('#page-toc');
  if (pageToc) {
    pageToc.setAttribute('tabindex', '-1');
  }
</script>
