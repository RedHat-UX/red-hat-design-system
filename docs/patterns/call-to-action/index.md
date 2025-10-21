---
title: Overview
heading: Call to Action
sidenavTitle: Call to Action
layout: layouts/pages/pattern.njk
order: 10
tags:
  - pattern
  - ctaPatterns
subnav:
  collection: ctaPatterns
  order: 1
---

<script type="module" data-helmet>
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-code-block/rh-code-block.js';
  import '@rhds/elements/rh-button/rh-button.js';
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
</script>

## Desaturated

Design system consumers can theme `<rh-cta>` to create desaturated CTAs.

<uxdot-example color-palette="darkest" width-adjustment="564px">
  <img alt="A primary and tertiary CTA. The primary has black text and a white background. The tertiary is reversed."
       src="./cta-style-variants-desaturated.svg"
       width="564"
       height="56">
</uxdot-example>

See the [examples](/patterns/call-to-action/examples/) page for code and implementation details. Our
CTA docs have [style guidelines](/elements/call-to-action/style/#desaturated) for desaturated CTAs.
