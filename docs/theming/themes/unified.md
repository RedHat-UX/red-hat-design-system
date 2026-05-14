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
  import '@rhds/elements/rh-menu-dropdown/rh-menu-dropdown.js';
  import '@rhds/elements/rh-navigation-vertical/rh-navigation-vertical.js';
  import '@rhds/elements/rh-progress-stepper/rh-progress-stepper.js';
  import '@rhds/elements/rh-spinner/rh-spinner.js';
  import '@rhds/elements/rh-subnav/rh-subnav.js';
  import '@rhds/elements/rh-switch/rh-switch.js';
  import '@rhds/elements/rh-tabs/rh-tabs.js';
  import '@rhds/elements/rh-tag/rh-tag.js';
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

<!-- <uxdot-pattern src="../patterns/unified-cards-glass.html">
  <h3 id="unified-glass-cards" slot="heading">Cards w/ Glass</h3>
</uxdot-pattern> -->

<uxdot-pattern src="../patterns/unified-chip.html">
  <h3 id="unified-chip" slot="heading">Chips</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-dialog.html">
  <h3 id="unified-dialog" slot="heading">Dialog</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-jump-links.html">
  <h3 id="unified-jump-links" slot="heading">Jump links</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-menu.html">
  <h3 id="unified-menu" slot="heading">Menu</h3>
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
  const rhSwitch = document.querySelector('#unified-page-switch');
    const stylesheet = new CSSStyleSheet(); 
    const cssFile = await getCssFileAsString("/theming/themes/unified-theme/unified-theme-preview.css");
    rhSwitch.addEventListener('change', function() {
        if (rhSwitch.checked) {
            stylesheet
            .replace(cssFile)
            .catch((err) => {
                console.error("Failed to replace styles:", err);
            });
            document.adoptedStyleSheets.push(stylesheet);
        } else {
            stylesheet
            .replace("")
            .catch((err) => {
                console.error("Failed to clear styles:", err);
            });
            document.adoptedStyleSheets.push(stylesheet);
        }
    });
</script>
