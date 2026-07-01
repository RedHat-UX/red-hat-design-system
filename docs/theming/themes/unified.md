---
layout: layouts/pages/has-toc.njk
title: Felt theme
heading: How to use
permalink: /theming/themes/unified/index.html
tags:
  - themes
subnav:
  collection: sortedThemes
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
  import '@rhds/elements/rh-navigation-vertical/rh-navigation-vertical.js';
  import '@rhds/elements/rh-progress-stepper/rh-progress-stepper.js';
  import '@rhds/elements/rh-spinner/rh-spinner.js';
  import '@rhds/elements/rh-subnav/rh-subnav.js';
  import '@rhds/elements/rh-switch/rh-switch.js';
  import '@rhds/elements/rh-tabs/rh-tabs.js';
  import '@rhds/elements/rh-tag/rh-tag.js';
</script>
<script type="module" data-helmet>
  /**
   * Tabs bridge patch (remove when feat/tabs-unified-updates merges)
   *
   * The feat branch adds #wrapper to rh-tab and .overflow-icon to rh-tabs.
   * This patch injects both the structural HTML and CSS into shadow roots
   * to replicate that behavior until the feat branch merges.
   */

  /* ── rh-tab: CSS for #wrapper and focus/hover ─────────── */
  const tabPatch = new CSSStyleSheet();
  tabPatch.replaceSync(/*css*/`
    #button {
      gap: 0;
    }

    #wrapper {
      display: flex;
      gap: var(--rh-space-md, 8px);
      align-items: center;
      border-radius: var(--rh-tabs-link-inner-radius, 0);
      padding: var(--rh-tabs-link-inner-padding, 0);
      justify-content: var(--rh-tabs-link-inner-justify, initial);
    }

    #button.box:not(.active):before {
      border-inline-color:
        var(--rh-tabs-box-border-color, var(--rh-color-border-subtle));
    }

    #button.box.active:before {
      border-inline-color:
        var(--rh-tabs-box-border-color, var(--rh-color-border-subtle));
    }

    #button.box.first.active:before {
      border-inline-start-color:
        var(--rh-tabs-box-border-color, var(--rh-color-border-subtle));
    }

    #button.box.last.active:before {
      border-inline-end-color:
        var(--rh-tabs-box-border-color, var(--rh-color-border-subtle));
    }

    :host(:is(:focus-visible)) #button {
      outline: var(--rh-tabs-link-focus-outline,
        1px auto var(--rh-color-interactive-primary-default));
      outline-offset: -3px;
    }

    :host(:is(:focus-visible)) #wrapper {
      background-color:
        var(--rh-tabs-link-focus-background, transparent);
      outline: var(--rh-tabs-link-focus-inner-outline, none);
      outline-offset: 0;
    }

    :host(:hover:not([disabled], [aria-disabled='true']))
      #button:not(.active) #wrapper {
      background-color:
        var(--rh-tabs-link-hover-background, transparent);
    }
  `);

  /* ── rh-tabs: CSS for overflow buttons + .overflow-icon ── */
  const tabsPatch = new CSSStyleSheet();
  tabsPatch.replaceSync(/*css*/`
    :is(#previous-tab, #next-tab) {
      padding-block:
        var(--rh-tabs-overflow-button-padding-block, 0);
      padding-inline:
        var(--rh-tabs-overflow-button-padding-inline,
          var(--rh-space-lg, 16px));
      border-radius: var(--rh-tabs-overflow-button-radius, 0);
      min-width: var(--rh-tabs-overflow-button-min-size, auto);
    }

    :is(#previous-tab, #next-tab):before {
      border-block-end-color:
        var(--rh-tabs-overflow-border-color,
          var(--rh-color-border-subtle));
      border-inline-color:
        var(--rh-tabs-overflow-border-color,
          var(--rh-color-border-subtle));
    }

    :is(#previous-tab, #next-tab):hover:before {
      border-block-end:
        var(--rh-tabs-overflow-hover-indicator,
          var(--rh-border-width-lg, 3px) solid
            var(--rh-color-border-subtle));
    }

    :is(#previous-tab, #next-tab):focus {
      outline: none;
    }

    .overflow-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--rh-tabs-overflow-icon-size, auto);
      height: var(--rh-tabs-overflow-icon-size, auto);
      border-radius: var(--rh-tabs-overflow-icon-radius, 0);
    }

    :is(#previous-tab, #next-tab):hover .overflow-icon {
      background-color:
        var(--rh-tabs-overflow-hover-background, transparent);
    }

    :is(#previous-tab, #next-tab):focus .overflow-icon {
      background-color:
        var(--rh-tabs-overflow-focus-background, transparent);
      outline: var(--rh-tabs-overflow-focus-outline, none);
      outline-offset:
        var(--rh-tabs-overflow-focus-outline-offset, 0);
    }
  `);

  /* ── Inject structure + styles ───────────────────────────── */
  for (const pattern of document.querySelectorAll('uxdot-pattern')) {
    /* rh-tab: inject #wrapper around icon + text slots */
    for (const tab of pattern.shadowRoot.querySelectorAll('rh-tab')) {
      const root = tab.shadowRoot;
      const button = root.querySelector('#button');
      if (button && !root.querySelector('#wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.id = 'wrapper';
        wrapper.setAttribute('part', 'wrapper');
        while (button.firstChild) {
          wrapper.appendChild(button.firstChild);
        }
        button.appendChild(wrapper);
      }
      root.adoptedStyleSheets = [...root.adoptedStyleSheets, tabPatch];
    }

    /* rh-tabs: inject .overflow-icon spans around rh-icon.
       Overflow buttons render conditionally after layout measurement,
       so we observe the shadow root for their appearance. */
    for (const tabs of pattern.shadowRoot.querySelectorAll('rh-tabs')) {
      const root = tabs.shadowRoot;
      root.adoptedStyleSheets = [...root.adoptedStyleSheets, tabsPatch];

      function patchOverflowButtons() {
        for (const btn of root.querySelectorAll('#previous-tab, #next-tab')) {
          const icon = btn.querySelector('rh-icon');
          if (icon && !btn.querySelector('.overflow-icon')) {
            const span = document.createElement('span');
            span.className = 'overflow-icon';
            btn.replaceChild(span, icon);
            span.appendChild(icon);
          }
        }
      }

      patchOverflowButtons();
      new MutationObserver(patchOverflowButtons)
        .observe(root, { childList: true, subtree: true });
    }
  }
</script>
<style>
  #unified-theme-toggle {
    margin-block-end: var(--rh-space-2xl, 32px);

    p {
      display: flex;
      flex-direction: column;
      gap: var(--rh-space-2xl, 32px);
    }
  }

  .card-grid {
    display: grid;
    gap: var(--rh-space-2xl, 32px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));

    rh-card {
        height: 100%;
    }
  }
</style>

## Intro

Unified content

## What's changing and why

## Try it out

<rh-card id="unified-theme-toggle">
  <p>
    <label for="unified-page-switch">
        What would it look like to set the Unified theme preview on an entire page? Try it out:
    </label>
    <rh-switch id="unified-page-switch"
                message-on="Unified theme"
                message-off="Default theme"></rh-switch>
  </p>
</rh-card>

## Preview theme CSS

```css code-block {dedent: true, language: "css", highlighting: "prerendered", linenumbers: "true"}
{% set cssContent = "./docs/theming/themes/unified-theme/unified-theme-preview.css" | inlineCss %}{{ cssContent | safe }}
```

## Demos

<uxdot-pattern src="../patterns/unified-accordion.html">
  <h3 id="unified-accordion" slot="heading">Accordion</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-alert.html">
  <h3 id="unified-alert" slot="heading">Alerts</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-badge.html">
  <h3 id="unified-badge" slot="heading">Badge</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-breadcrumb.html">
  <h3 id="unified-breadcrumb" slot="heading">Breadcrumb</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-buttons.html">
  <h3 id="unified-buttons" slot="heading">Buttons</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-ctas.html">
  <h3 id="unified-ctas" slot="heading">Calls to action</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-cards.html">
  <h3 id="unified-cards" slot="heading">Cards</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-cards-glass.html">
  <h3 id="unified-glass-cards" slot="heading">Cards w/ Glass</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-chip.html">
  <h3 id="unified-chip" slot="heading">Chips</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-dialog.html">
  <h3 id="unified-dialog" slot="heading">Dialog</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-jump-links.html">
  <h3 id="unified-jump-links" slot="heading">Jump links</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-navigation-vertical.html">
  <h3 id="unified-navigation-vertical" slot="heading">Navigation (vertical)</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-progress-stepper.html">
  <h3 id="unified-progress-stepper" slot="heading">Progress stepper</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-spinner.html">
  <h3 id="unified-spinner" slot="heading">Spinner</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-subnav.html">
  <h3 id="unified-subnav" slot="heading">Subnav</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-switch.html">
  <h3 id="unified-switch" slot="heading">Switch</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-tabs.html">
  <h3 id="unified-tabs" slot="heading">Tabs</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-tabs-vertical.html" style="max-width: none">
  <h3 id="unified-tabs-vertical" slot="heading">Tabs (vertical)</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-tag.html">
  <h3 id="unified-tag" slot="heading">Tags</h3>
</uxdot-pattern>

{# renderFile './docs/theming/patterns/unified-kitchen-sink.html' #}

<uxdot-feedback>
  <h2>Color palettes and color schemes</h2>
  <p>To learn more about working with color palettes and color schemes,
     <a href="../color-palettes/">click here</a>.</p>
</uxdot-feedback>

<script type="module">
  async function getCssFileAsString(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        const cssString = await response.text();
        return cssString;
    } catch (error) {
        console.error("Could not fetch the CSS file:", error);
    }
  }
</script>
