---
title: In-page card
heading: In-page card
sidenavTitle: In-page card
layout: layouts/pages/pattern.njk
order: 50
pattern-info:
    thumbnail: /elements/card/screenshot.svg
    thumbnail-alt: In-page card pattern
    status: ready  
tags:
  - personalization
  - personalization-pattern
---

<script type="module" data-helmet>
  import '@rhds/elements/rh-alert/rh-alert.js';
</script>

## Overview

An In-page card is an existing card(s) within a page for personalization or targeting.

<rh-alert state="warning">
    <h3 slot="header">Warning</h3>
    <p>Only cards on the redhat.com home page are templated in Adobe Target. For a different card experience on other pages, new design and development work may be required.</p>
</rh-alert>

## Design

There are several versions of in-page offer cards depending on what kind of
asset you need to promote.

-   Resource offer
-   Event/webinar offer
-   Page offer
-   Product card

<uxdot-example variant="full">
<img alt="Card"
    src="/assets/optimization/card.svg"
    width="1000"
    height="340">
</uxdot-example>

## How to use

-   Find an existing card(s) within your page or set of pages you want
    to personalize.
-   Define the offer you are trying to promote (announcement, event,
    press release, webinar, etc.).
-   To automate the process of what you show a user, Adobe has pre-built
    technology to automatically personalize based on the attributes of a
    user or an algorithm based on content type. Please work with the
    [Digital Systems Web Team][digitalsystemswebteam]
    if you are interested in this direction.

## The audience

An in-page card should be relevant to the context of the page a user is
currently on.



{% renderFile './docs/personalization/_feedback.md' %}