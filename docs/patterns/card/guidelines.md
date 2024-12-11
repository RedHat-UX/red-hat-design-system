---
title: Guidelines
heading: Card
sidenavTitle: Card
layout: layouts/pages/pattern.njk
order: 20
tags:
  - cardPatterns
subnav:
  collection: cardPatterns
  order: 2
---

<script type="module" data-helmet>
  import '@rhds/elements/rh-accordion/rh-accordion.js';
  import '@rhds/elements/rh-avatar/rh-avatar.js';
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
  import '@rhds/elements/rh-surface/rh-surface.js';
  import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
</script>

<link rel="stylesheet"
      data-helmet
      href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">

<link rel="stylesheet"
      data-helmet
      href="/styles/samp.css">

## Usage

### Character count

The recommended maximum character count for the elements of a card are listed 
below and include spaces.

<rh-table>

  Element     Character count
  ----------- -----------------
  Title       20
  Headline    50
  Body text   165
  Footer      55

</rh-table>

{% renderFile './docs/_includes/partials/component/feedback.11ty.ts' %}
