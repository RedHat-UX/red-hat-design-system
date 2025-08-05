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

<script type="module" data-helmet>
  import '@rhds/elements/rh-accordion/rh-accordion.js';
</script>

<style data-helmet>
  rh-accordion {
    display: block;
    margin-block: var(--rh-space-2xl, 32px);
  }
</style>

## Frequently asked questions

### Getting access

<rh-accordion>
  <h3><rh-accordion-header>I do not have a redhat.com email address. Can I still get access to the Figma library?</rh-accordion-header></h3>
  <rh-accordion-panel>
    <p>We can send you a .fig file, but you will not receive notifications when library updates are published.</p>
  </rh-accordion-panel>
</rh-accordion>

### Using Figma

<rh-accordion>
  <h3><rh-accordion-header>How can I contribute an idea, a design, a bug, or something else?</rh-accordion-header></h3>
  <rh-accordion-panel>
    <p>For general contributions that have no priority or timeline, create a GitHub <a href="https://github.com/orgs/RedHat-UX/discussions">discussion</a>. We will review your request and get back to you if needed.</p>
  </rh-accordion-panel>
</rh-accordion>

### Using variables and styles

<rh-accordion>
  <h3><rh-accordion-header>I cannot get variables and styles to work. Where can I learn more?</rh-accordion-header></h3>
  <rh-accordion-panel>
    <p>There are lots of learning resources specific to variables and styles on the <a href="https://help.figma.com/hc/en-us/articles/15343107263511-Apply-variables-to-designs">Figma website</a>, <a href="https://www.youtube.com/watch?v=0ioM6arfU-k">YouTube</a>, and <a href="https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/working-with-variables-and-conditionals?u=2056732">more</a>.</p>
    <p>We would be happy to walk you through anything on a call, just <a href="/support/#contact-us">contact us</a>.</p>
  </rh-accordion-panel>
  <h3><rh-accordion-header>What is the difference between a variable and a style?</rh-accordion-header></h3>
  <rh-accordion-panel>
    <p>You can learn about terminology in <a href="/get-started/designers/figma-variables-and-styles#terminology">this section</a>.</p>
  </rh-accordion-panel>
  <h3><rh-accordion-header>Why are there design token variables and Figma-only variables?</rh-accordion-header></h3>
  <rh-accordion-panel>
    <p>Due to limitations in Figma, some variables are a workaround for how tokens work in code.</p>
    <p>For example, in code, the <code>light-dark()</code> CSS function can use any token. In Figma, every variable is limited to using only one token value per mode or scheme. This setup becomes problematic when there are multiple tokens to choose from per scheme like surface colors.</p>
  </rh-accordion-panel>
  <h3><rh-accordion-header>Can I create my own local variable or style?</rh-accordion-header></h3>
  <rh-accordion-panel>
    <p>No, our variables and styles are connected to existing design tokens. Creating something custom or one-off causes confusion for engineers and is not technically part of the design system.</p>
    <p>If you need something new, see below.</p>
  </rh-accordion-panel>
  <h3><rh-accordion-header>Can I request a new design token or variable or style?</rh-accordion-header></h3>
  <rh-accordion-panel>
    <p>We do not add new tokens very often, but feel free to create a GitHub <a href="https://github.com/orgs/RedHat-UX/discussions">discussion</a>. We will review your request and get back to you about next steps.</p>
  </rh-accordion-panel>
  <h3><rh-accordion-header>What happens to components in old Figma files?</rh-accordion-header></h3>
  <rh-accordion-panel>
    <p>As part of the variables and styles migration, one component includes two color schemes now. This means that all light scheme components are preserved, but all dark scheme components are deleted. However, any existing components will not change visually unless you manually update or relink them.</p>
    <p>We understand this can be a breaking change, so if you would like some help over a call, <a href="/support/#contact-us">contact us</a>.</p>
  </rh-accordion-panel>
  <h3><rh-accordion-header>Will I receive variable and style updates like I do with components?</rh-accordion-header></h3>
  <rh-accordion-panel>
    <p>Yes. When something in the library is added, changed, or deleted, the process is the same. When library updates are available, the Libraries icon in the Assets tab will display a blue badge.</p>
  </rh-accordion-panel>
</rh-accordion>

<uxdot-feedback>
  <h2>Developers</h2>
  <p>To get started using our design system as a developer, go to the <a href="get-started/developers">Developers</a> page.</p>
</uxdot-feedback>
