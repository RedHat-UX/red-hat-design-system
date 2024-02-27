---
layout: layouts/pages/basic.njk
title: About this website
order: 0
tags:
  - about
---

<style>
  #approach {
    margin-block-end: var(--rh-space-5xl, 80px);
  }

  :is(#approach, #fundamentals) h2 {
    text-align: center;
    margin-block-start: var(--rh-space-2xl, 32px);
    margin-block-end: var(--rh-space-4xl, 64px);
    font-size: var(--rh-font-size-heading-lg, 2.25rem);
  }

  :is(#approach, #fundamentals) :is(h2, h3) {
    font-weight: var(--rh-font-weight-heading-medium, 500);
  }

  #fundamentals h3 {
    margin-block: var(--rh-space-2xl, 32px);
  }

  :is(#approach, #fundamentals) .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--rh-space-2xl, 32px);
  }

  :is(#approach, #fundamentals) .item {
    display: flex;
    flex-direction: column;

    justify-content: center;
  }  

  #approach .item:nth-child(1) {
    order: 1;
  }

  #approach .item:nth-child(2) {
    order: 2;
  }

  #approach .item:nth-child(3) {
    order: 4;
  }

  #approach .item:nth-child(4) {
    order: 3;
  }

  #approach .item:nth-child(5) {
    order: 5;
  }

  #approach .item:nth-child(6) {
    order: 6;
  }

  #approach .item:nth-child(7) {
    order: 8;
  }

  #approach .item:nth-child(8) {
    order: 7;
  }  

  :is(#approach, #fundamentals) .item p {
    font-size: var(--rh-font-size-body-text-lg, 1.125rem);
  }

  #approach .item h3 {
    margin-block-start: 0;
  }

  #approach .item img {
    width: 100%;
  }

  #fundamentals .grid {
    margin-block-end: var(--rh-space-4xl, 64px);
  }

  #fundamentals {
    text-align: center;
  }

  #fundamentals .item {
    text-align: left;
  }

  #fundamentals .item img {
    max-width: 70px;
  }

  hr {
    margin-block: var(--rh-space-5xl, 80px);
  }

  @container container (min-width: 567px) {
    :is(#approach, #fundamentals) .grid {
      grid-template-columns: 1fr 1fr;
    }

    #approach .item:nth-child(n) {
      order: unset;
    }
  }

  @container container (min-width: 768px) {
    :is(#approach, #fundamentals) .grid {
      gap: var(--rh-space-4xl, 64px);
    }
  }

</style>

<script type="module" src="{{ '/assets/javascript/elements/uxdot-hero.js' | url }}"></script>

<uxdot-hero compact>
  <h2 slot="header">We create Red&nbsp;Hat digital experiences</h2>
  <p>Our teams work across the world in a range of disciplines, from UX research and digital design to web development and content strategy. We collaborate to make every digital interaction with Red&nbsp;Hat reflect our core brand traits which are open, authentic, helpful, and brave.</p>
</uxdot-hero>

<hr>

<section id="approach">
  <h2>Our approach</h2>
  
  <div class="grid">
    <div class="item">
      <h3>Brand standards</h3>
      <p><a href="https://www.redhat.com/en/about/brand/standards">Red Hat brand standards</a> are the source code for our identity. They govern how we look and sound in all types of media. We follow brand standards to unify Red&nbsp;Hat digital experiences and stay up-to-date with our brand as it grows, improves, and adapts to meet new challenges.</p>
    </div>
    <div class="item">
      <img src="{{ '/assets/about/brand.svg' | url }}" alt="Red Hat brand standards">
    </div>
    <div class="item">
      <img src="{{ '/assets/about/patternfly.svg' | url }}" alt="PatternFly">
    </div>
    <div class="item">
      <h3>PatternFly collaboration</h3>
      <p>We collaborate with <a href="https://www.patternfly.org">PatternFly</a>, an open source design system for enterprise product experiences. Using PatternFly as a foundation, we create intuitive and scalable Red&nbsp;Hat digital experiences the open source way.</p>
    </div>
    <div class="item">
      <h3>Shared language and vision</h3>
      <p>We leverage similar elements as PatternFly, so designers no longer need to reinvent the wheel when choosing components. For example, an <a href="/elements/accordion/">Accordion</a> used in a Red&nbsp;Hat web application will look the same when used on a website.</p>
    </div>
    <div class="item">
      <img src="{{ '/assets/about/shared-language.svg' | url }}" alt="Shared language">
    </div>
    <div class="item">
      <img src="{{ '/assets/about/web-components.svg' | url }}" alt="Web components">
    </div>
    <div class="item">
      <h3>Web components</h3>
      <p>Our team is building an open source web component-driven development system to build scalable UI elements. This <a href="https://patternflyelements.com/" target="_blank">open source community project</a> supports many components in our design system.</p>
    </div>
  </div>
</section>

<hr>

<section id="fundamentals">
  <h2>Fundamentals</h2>
  <div class="grid">
    <div class="item">
      <img src="{{ '/assets/about/icon-flexible.svg' | url }}" alt="Flexibility">
      <h3>Flexible</h3>
      <p>Our components can be arranged in a number of ways and CSS variables can be used for further customization.</p>
    </div>
    <div class="item">
      <img src="{{ '/assets/about/icon-accessible.svg' | url }}" alt="Accessibility">
      <h3>Accessible</h3>
      <p>The goal of our design system is to create meaningful experiences that work for everyone, regardless of ability.</p>
    </div>
    <div class="item">
      <img src="{{ '/assets/about/icon-consistent.svg' | url }}" alt="Consistency">
      <h3>Consistent</h3>
      <p>Our documentation and tools streamline collaboration so teams can create consistent and on-brand experiences.</p>
    </div>
    <div class="item">
      <img src="{{ '/assets/about/icon-scalable.svg' | url }}" alt="Scalability">
      <h3>Scalable</h3>
      <p>Our system enables teams to work concurrently across the Red&nbsp;Hat system of websites and beyond.</p>
    </div>
  </div>
  <rh-cta variant="secondary">
    <a href="/get-started">Get started</a>
  </rh-cta>
</section>
