---
layout: layouts/pages/basic.njk
title: Roadmap
order: 20
bodyClasses: page-docs
tags:
  - about
importElements:
  - rh-tile
---

<link data-helmet rel="stylesheet" href="/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css">

<style data-helmet>
  rh-tile {
    margin-block: var(--rh-space-3xl, 48px);
    max-width: 320px;
  }

  rh-tile [slot="headline"] {
    font-weight: var(--rh-font-weight-heading-bold, 700);
  }

  rh-tile [icon="github"] {
    --rh-icon-size: var(--rh-size-icon-03, 32px);
  }
</style>


Our roadmap is an up-to-date outline of what we're working on and what we're planning to do in the Red Hat Design System over the next 2–3 quarters (6-9 months). You can follow along through [our open source roadmap on GitHub](https://github.com/orgs/RedHat-UX/projects/7/).

The roadmap is subject to change based on our users' feedback and needs. If you have an idea or feature request, please submit a [GitHub issue](https://github.com/RedHat-UX/red-hat-design-system/issues).

Check out [our scrum board on GitHub](https://github.com/orgs/RedHat-UX/projects/1/views/18) to see what we're working on from week to week.

<rh-tile compact>
  <rh-icon slot="image" set="social" icon="github" size="lg"></rh-icon>
  <a slot="headline" href="https://github.com/orgs/RedHat-UX/projects/7/">Roadmap</a>
</rh-tile>

<uxdot-feedback>
  <h2>Release Notes</h2>
  <p>To see what foundations, tokens, elements, or patterns have been released recently, check out <a href="/about/release-notes">our release notes</a>.</p>
</uxdot-feedback>
