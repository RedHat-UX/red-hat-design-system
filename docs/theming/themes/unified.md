---
layout: layouts/pages/has-toc.njk
title: Unified theme
heading: Themes
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
  import '@rhds/elements/rh-button/rh-button.js';
  import '@rhds/elements/rh-progress-stepper/rh-progress-stepper.js';
  import '@rhds/elements/rh-audio-player/rh-audio-player.js';
  import '@rhds/elements/rh-blockquote/rh-blockquote.js';
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-pagination/rh-pagination.js';
  import '@rhds/elements/rh-switch/rh-switch.js';
  import '@rhds/elements/rh-tabs/rh-tabs.js';
  import '@rhds/elements/rh-tag/rh-tag.js';
  import '@rhds/elements/rh-tile/rh-tile.js';
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

  .example-row {
    margin-block: var(--rh-space-2xl, 32px);
  }

  .example-flex {
    display: flex;
    flex-wrap: wrap;
    gap: var(--rh-space-lg, 16px);
    align-items: center;
  }
</style>

Unified content

## Try it out!

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

<uxdot-pattern src="../patterns/unified-buttons.html">
  <h3 id="unified-buttons" slot="heading">Buttons</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-ctas.html">
  <h3 id="unified-ctas" slot="heading">Calls to action</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-cards.html">
  <h3 id="unified-cards" slot="heading">Cards</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-progress-stepper.html">
  <h3 id="unified-progress-stepper" slot="heading">Progress stepper</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-spinner.html">
  <h3 id="unified-spinner" slot="heading">Spinner</h3>
</uxdot-pattern>

<uxdot-pattern src="../patterns/unified-cards-glass.html">
  <h3 id="unified-glass-cards" slot="heading">Cards w/ Glass</h3>
</uxdot-pattern>

{# renderFile './docs/theming/patterns/unified-kitchen-sink.html' #}

{% renderFile './docs/_includes/partials/component/feedback.11ty.ts' %}

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
