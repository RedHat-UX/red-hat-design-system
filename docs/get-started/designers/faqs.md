---
layout: layouts/pages/basic.njk
title: FAQs
heading: Designers
permalink: /get-started/designers/faqs.html
tags:
  - designers
subnav:
  collection: sortedDesigners
  order: 50
---

<link rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css"
      data-helmet>

<script type="module" data-helmet>
  import '@uxdot/elements/uxdot-example.js';
  import '@rhds/elements/rh-alert/rh-alert.js';
  import '@rhds/elements/rh-accordion/rh-accordion.js';
  import '@rhds/elements/rh-table/rh-table.js';
</script>

{#
  the .page-faqs rule allows for spacing of "sections" while only using
  headers which are converted to uxdot-copy-permalink
  TODO: determine if this is how we want to do this
#}

<style data-helmet>
  .page-faqs .container {
    uxdot-copy-permalink:not(:first-of-type),
    uxdot-feedback h2 {
      margin-block-start: var(--rh-space-5xl, 80px);
    }
  }

  rh-accordion {
    display: block;
    margin-block: var(--rh-space-2xl, 32px);
  }
</style>

## Frequently asked questions

<rh-accordion>
  <h3><rh-accordion-header>How can I get better at Figma?</rh-accordion-header></h3>
  <rh-accordion-panel>
    <p>Check out these resources if you want to improve your Figma skills.</p>
    <ul>
      <li>YouTube channels like <a href="https://www.youtube.com/channel/UCQsVmhSa4X-G3lHlUtejzLA">Figma</a> and <a href="https://www.youtube.com/@UICollectiveDesign">UI Collective</a> have lots of free videos</li>
      <li>The <a href="https://www.figma.com/resource-library/">Figma Resource Library</a> has helpful content</li>
      <li>If all else fails, find answers in the <a href="https://help.figma.com/hc/en-us">Figma Help Center</a></li>
    </ul>
  </rh-accordion-panel>
  <h3><rh-accordion-header>How do foundational styles, elements, and patterns get updated?</rh-accordion-header></h3>
  <rh-accordion-panel>
    <p>The design system team meets regularly to discuss work in progress and new issues. Updates are assigned a priority in our GitHub backlog. Once a priority is set and a schedule is agreed upon, design or development work begins. When the work is completed, the Figma libraries, documentation website, and repos are all updated. All updates are tracked in our <a href="https://github.com/RedHat-UX/red-hat-design-system/releases">changelog</a> and listed on the <a href="https://ux.redhat.com/release-notes/">Release notes</a> page. Larger updates are sometimes communicated via a quarterly newsletter e-mail.</p>
  </rh-accordion-panel>
  <h3><rh-accordion-header>What if an element or pattern I need is missing?</rh-accordion-header></h3>
  <rh-accordion-panel>
    <p>If you think something is missing or you cannot find something, <a href="/support/#contact-us">connect with us on Slack</a> or <a href="https://github.com/orgs/RedHat-UX/discussions/new/choose">create a discussion</a>.</p>
  </rh-accordion-panel>
  <h3><rh-accordion-header>How can I contribute an idea?</rh-accordion-header></h3>
  <rh-accordion-panel>
    <p>If you have feedback or you would like to contribute an idea, <a href="https://github.com/orgs/RedHat-UX/discussions/new/choose">create a discussion</a></p>
  </rh-accordion-panel>
  <h3><rh-accordion-header>How can I report a bug?</rh-accordion-header></h3>
  <rh-accordion-panel>
    <p>If you find a bug, <a href="https://github.com/RedHat-UX/red-hat-design-system/issues/new/choose">create an issue</a> and describe it as thoroughly as possible. If something is broken, e-mail <a href="mailto:design-system@redhat.com" style="white-space: nowrap;">design-system@redhat.com</a> or connect with us on Slack and we will investigate.</p>
  </rh-accordion-panel>
</rh-accordion>

<uxdot-feedback>
  <h2>Developers</h2>
  <p>To get started using our design system as a developer, go to the <a href="get-started/developers">Developers</a> page.</p>
</uxdot-feedback>
