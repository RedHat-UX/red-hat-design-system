---
layout: layouts/pages/basic.njk
title: Overview
order: 0
tags:
  - getstarted
---

<style>
  #get-started-nav {
    display: flex;
    flex-direction: row;
    gap: var(--rh-space-2xl, 32px);
    margin-block-start: var(--rh-space-2xl, 32px);
  }

  #get-started-nav figcaption {
    font-family: var(--rh-font-family-heading, RedHatDisplay, 'Red Hat Display', 'Noto Sans Arabic', 'Noto Sans Hebrew', 'Noto Sans JP', 'Noto Sans KR', 'Noto Sans Malayalam', 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans Thai', Helvetica, Arial, sans-serif);
    font-size: var(--rh-font-size-heading-sm, 1.5rem);
  }

</style>

## Get started

The Red Hat Design System for digital experiences gives designers and developers the tools to create accessible and on-brand user interfaces quickly. The role-specific pages linked below will guide you through using the design system.

<nav id="get-started-nav">
  <a href="/get-started/designers">
    <figure>
      <uxdot-example color-palette="light">
        <img alt="Row of two cards being resized with a mouse pointer" src="/assets/get-started/designers.png">
      </uxdot-example>
      <figcaption>Designers</figcaption>
    </figure>
  </a>
  <figure>
  <uxdot-example color-palette="light">
    <img alt="Card overlapping code editor user interface" src="/assets/get-started/developers.png">
  </uxdot-example>
  <figcaption>Developers (Coming soon)</figcaption>
  </figure>
</nav>

<uxdot-feedback>
  <h2>Release notes</h2>
  <p>To see what foundations, tokens, elements, or patterns have been released recently, check out our <a href="/release-notes">release notes</a>.</p>
</uxdot-feedback>