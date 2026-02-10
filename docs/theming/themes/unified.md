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
  import '@rhds/elements/rh-audio-player/rh-audio-player.js';
  import '@rhds/elements/rh-blockquote/rh-blockquote.js';
  import '@rhds/elements/rh-button/rh-button.js';
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
    p {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>

Unified content

## Preview theme CSS

```css code-block {dedent: true, language: "css", highlighting: "prerendered", linenumbers: "true"}
{% set cssContent = "./docs/theming/themes/unified-theme-preview.css" | inlineCss %}{{ cssContent | safe }}
```

## Demo

<rh-card id="unified-theme-toggle">
  <p>
    <label for="unified-page-switch">
        What would it look like to set the Unified theme on an entire page?
    </label>
    <rh-switch id="unified-page-switch"
                message-on="Unified theme"
                message-off="Default theme"></rh-switch>
  </p>
</rh-card>

### Currently supported elements
<rh-card id="unified-supported-elements">
  <div id="unified-supported-buttons">
    <rh-button>Primary</rh-button>
    <rh-button danger>Primary danger</rh-button>
    <rh-button variant="secondary">Secondary</rh-button>
    <rh-button variant="secondary" danger>Secondary danger</rh-button>
    <rh-button variant="tertiary">Tertiary</rh-button>
    <rh-button variant="link">Link</rh-button>
    <rh-button icon="search" icon-set="microns" variant="secondary" label="Search"></rh-button>
    <rh-button variant="close" accessible-label="Close"></rh-button>
    <rh-button variant="play">Play</rh-button>
    <rh-button disabled>Disabled</rh-button>
  </div>
</rh-card>

{% renderFile './docs/_includes/partials/component/feedback.11ty.ts' %}

<script type="module">
  async function getCssFileAsString(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        const cssString = await response.text();
        console.log(cssString); // The raw CSS content as a string
        return cssString;
    } catch (error) {
        console.error("Could not fetch the CSS file:", error);
    }
  }
  const rhSwitch = document.querySelector('#unified-page-switch');
    const stylesheet = new CSSStyleSheet(); 
    const cssFile = await getCssFileAsString("/theming/themes/unified-theme-preview.css");
    rhSwitch.addEventListener('change', function() {
        if (rhSwitch.checked) {
            stylesheet
            .replace(cssFile)
            .catch((err) => {
                console.error("Failed to replace styles:", err);
            });
            document.adoptedStyleSheets.push(stylesheet);
            console.log(stylesheet);
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
