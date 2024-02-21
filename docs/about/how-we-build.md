---
layout: layouts/pages/basic.njk
title: How we build
order: 10
hasToc: true
tags:
  - about
importElements:
  - rh-table  
---

<link rel="stylesheet" href="{{ '/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css' | url }}">

<style>
  section + section,
  section + hr {
    margin-block-start: var(--rh-space-4xl, 64px);
  }

  section h2 {
    margin-block: var(--rh-space-xl, 24px);
  }

  section p {
    margin-block: var(--rh-space-md, 16px);
  }

  section img {
    max-width: 100%;
    margin-block-start: var(--rh-space-2xl, 32px);
  }

  figure:has(img + img) {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--rh-space-lg, 16px);
  }

  figcaption {
    color: var(--rh-color-text-secondary-on-light, #4d4d4d);
  }

  table {
    border: 1px solid #d2d2d2;
    border-top: 0;
    border-left: 0;
    border-right: 0;
  }

  #patternfly-elements-section .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--rh-space-xl, 32px);
  }

  :is(#webrh-section, #flexible-template-system-section) {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--rh-space-xl, 32px)
  }

  :is(#webrh-section, #flexible-template-system-section) div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @container container (min-width: 768px) {
    figure:has(img + img),
    #patternfly-elements-section .grid,
    :is(#webrh-section, #flexible-template-system-section) {
      grid-template-columns: 1fr 1fr;
    }
  }

</style>

<section id="experiences-section">

  ## Building experiences for the web

  The <strong>Red Hat Design System</strong> (RHDS) allows designers and developers across different teams to build branded experiences consistently. Based on the foundations of <a href="https://www.patternfly.org/v4/" target="_blank">PatternFly</a> and the <a href="https://www.redhat.com/en/about/brand/standards" target="_blank">Red Hat Brand Standards</a>, our design system reflects the Red&nbsp;Hat brand digitally.

</section>

<section id="foundations-section">
  
  ## Foundations

  <strong>The Red Hat brand has a strong voice.</strong> To make our design system feel like Red Hat, we use foundations like <a href="../../foundations/color">color</a>, <a href="../../foundations/spacing">space</a>, and <a href="../../foundations/typography">typography</a> to enhance our components, and use <a href="https://www.redhat.com/en/about/brand/standards/icons" target="_blank">icons</a> and <a href="https://www.redhat.com/en/about/brand/standards/illustration" target="_blank">illustrations</a> to enhance our layouts. Our end goal is to elevate the Red Hat brand across our digital properties.

</section>

<hr>

<section id="patternfly-section">
  
  ## PatternFly

  <strong>PatternFly</strong> is the open source design system for Red Hat products, it is also the foundation for our components. We share design when possible by contributing ideas back to PatternFly to help grow its capabilities. When building a new component or updating an existing component, PatternFly is always our first source of inspiration.
  
  PatternFly can be used by designers and developers inside and outside of Red Hat. PatternFly is used to create React applications and provide HTML and CSS assets for other web projects. The Red Hat Design System is used to create Red Hat-branded websites or other digital properties. We collaborate with the <strong>Red Hat User Experience Design</strong> (UXD) team as they build user interface components for PatternFly.
  
  By sharing ideas between the PatternFly and RHDDS teams, we create a design language across all of Red Hat, for each stage of the customer lifecycle.

  <rh-cta>
    <a href="https://www.patternfly.org/v4/" target="_blank">Visit PatternFly</a>
  </rh-cta>
  <figure>
    <img src="{{ '/assets/about/how-we-build/patternfly.svg' | url }}" alt="Example PatternFly components">
    <figcaption>Examples of PatternFly components</figcaption>
  </figure>
</section>

<section id="patternfly-elements-section">
  
  ## PatternFly Elements

  The <strong>PatternFly Elements</strong> (PFE) project leverages the PatternFly design system and some code elements to create an accessible and open source web component library. Web components, or native custom HTML tags, allow users to easily include design system foundations and components across their websites and applications.
  
  PFE components not only work in any application framework, they are <strong>evergreen</strong>, meaning the components themselves can be upgraded easily which allows for consistency, scalability, and flexibility. PFE components are used across many of the core Red Hat websites, including <a href="https://www.redhat.com/en" target="_blank">redhat.com</a>, <a href="https://access.redhat.com/" target="_blank">access.redhat.com</a>, <a href="https://developers.redhat.com/" target="_blank">developers.redhat.com</a>, <a href="https://connect.redhat.com/" target="_blank">connect.redhat.com</a>, and more.

  <rh-cta>
    <a href="https://patternflyelements.com/" target="_blank">Visit PatternFly Elements</a>
  </rh-cta>
  <div class="grid">
    <figure>
      <img src="{{ '/assets/about/how-we-build/patternfly-elements.svg' | url }}" alt="Example PFE components">
      <figcaption>Examples of PFE components that are not themed</figcaption>
    </figure>
    <figure>
      <img src="{{ '/assets/about/how-we-build/patternfly-elements-rh-themed.svg' | url }}" alt="Example PFE components">
      <figcaption>Examples of PFE components themed with Red Hat CSS variables</figcaption>
    </figure>
  </div>
</section>

<section id="visual-examples-section">

  ## Visual examples

  <rh-table>
    <table>
    <thead>
      <tr>
        <th scope="col" data-label="Design System">Design system</th>
        <th scope="col" data-label="Implementation">Implementation</th>
        <th scope="col" data-label="Example">Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Design System">
          <strong>PatternFly</strong>
        </td>
        <td data-label="Implementation">
          <a href="https://www.patternfly.org/v4/" target="_blank">PatternFly components</a>
        </td>
        <td data-label="Example"><img src="{{ '/assets/about/how-we-build/table-patternfly.svg' | url }}" alt="Example PatternFly components"></td>
      </tr>
      <tr>
        <td data-label="Design System">
          <strong>PFE</strong>
        </td>
        <td data-label="Implementation">
          <a href="https://patternflyelements.com/components/" target="_blank">PFE components</a>
        </td>
        <td data-label="Example"><img src="{{ '/assets/about/how-we-build/table-pfe.svg' | url }}" alt="Example PFE components"></td>
      </tr>
      <tr>
        <td data-label="Design System">
          <strong>PFE + RHDDS</strong>
        </td>
        <td data-label="Implementation">
          <a href="https://patternflyelements.com/components/" target="_blank">PFE components</a> themed with Red Hat CSS variables</td>
        <td data-label="Example"><img src="{{ '/assets/about/how-we-build/table-pfe-rh.svg' | url }}" alt="Example PFE components with Red Hat CSS variables"></td>
      </tr>
    </tbody>
  </table>
  </rh-table>
</section>

<section id="webrh-section">
  <div>
    <h2 id="webrh">WebRH</h2>
    <p>WebRH is an asset library of components and patterns created within Red Hat Marketing. The goal was to bring consistency to redhat.com and now other Red Hat web properties that are built on Drupal. These patterns are leveraged by Drupal through tools that make up the Flexible Template System.<br/><br/>WebRH contains components and patterns including JSON schemas, Twig templates (to be used in Drupal), custom CSS, and PFE web components. WebRH creates flexible patterns within Drupal so content editors can create visually-consistent experiences with unstructured data or content.<br/><br/>A copy of the WebRH library is viewable within the <a href="https://webrh-patternkit.int.open.paas.redhat.com/schema/pattern_page" target="_blank">Schema Editor</a> and allows anyone to build and test new and existing patterns through a user interface similar to FTS in Drupal.</p>
    <rh-cta>
      <a href="https://gitlab.corp.redhat.com/uxdd/webrh" target="_blank">Learn more about WebRH</a>
    </rh-cta>
  </div>
  <div>
    <figure>
      <img src="{{ '/assets/about/how-we-build/webrh.png' | url }}" alt="WebRH screenshot">
      <figcaption>Example of a WebRH pattern being customized in the Schema Editor (formerly Patternkit)</figcaption>
    </figure>
  </div>
</section>

<section id="flexible-template-system-section">
  <div>
    <h2 id="flexible-template-system">Flexible Template System</h2>
    <p>The <strong>Flexible Template System</strong> (FTS) refers to the authoring tools and patterns used to build pages within the <a href="https://www.drupal.org/" target="_blank">Drupal CMS</a>. Fields for content and settings that control design and layout are exposed to content editors which simplifies the page building process. Using patterns enables authors to have flexibility with page layout and design without having to write code. Various patterns from the WebRH library are loaded inside Drupal based on the <a href="https://source.redhat.com/groups/public/redhatcom/redhatcom_wiki/drupal_content_type_training__documentation_hub" target="_blank">content type</a>. Different content types have different purposes and use different patterns. The Flexible template content type is for general use.<br><br>In Drupal 7, WebRH patterns are built with a local version of <a href="https://www.drupal.org/project/patternkit" target="_blank">Patternkit</a> and then imported into Drupal with the <a href="https://www.drupal.org/project/patternbuilder" target="_blank">Pattern Builder</a> module.<br><br>In Drupal 8+, the Patternkit module will fetch the WebRH patterns via PatternAPI, a services layer which dynamically pulls the appropriate pattern by name and version.</p>
    <rh-cta>
      <a href="https://source.redhat.com/departments/marketing/digitalmarketingstrategy/flexibletemplatingsystem" target="_blank">Learn more about FTS</a>
    </rh-cta>
  </div>
  <div>
    <figure>
      <img src="/assets/about/how-we-build/flexible-template-system.png" alt="FTS screenshot">
      <figcaption>Example of an FTS pattern being customized in Drupal</figcaption>
    </figure>
  </div>
</section>

<section id="patternkit">
  
  ## Patternkit

  <a href="https://www.drupal.org/project/patternkit" target="_blank">Patternkit 2.x</a> is a Drupal 8+ module that connects libraries like WebRH to content management systems like Drupal. It leverages the <a href="https://github.com/json-editor/json-editor" target="_blank">JSON Schema Editor</a> to expose the fields defined within the component and pattern schemas, so content authors can add content and change settings while seeing the results in real time.
  
  <a href="https://github.com/PatternBuilder/pattern-kit" target="_blank">Patternkit 1.x</a> is used by developers to develop, test, and demo WebRH patterns. The <a href="https://webrh-patternkit.int.open.paas.redhat.com/schema/pattern_page" target="_blank">WebRH Schema Editor</a> (formerly known as Patternkit) is a playground to interact with the WebRH pattern library. It is hosted on OpenShift and is updated every three weeks to show the latest updates to WebRH.

  <rh-cta>
    <a href="https://url.corp.redhat.com/webrh-schema-editor" target="_blank">Learn more about Patternkit</a>
  </rh-cta>

</section>

<section id="web-dms">

  ## WebDMS

  <strong>WebDMS</strong> is a custom Bootstrap 4 implementation that allows for rapid development, a very short learning curve, and immense flexibility. It is custom development for projects with outside-of-the-box design, interactivity, engagement, and motion needs. Because of the flexibility and fast iteration speed, we are able to test new designs and then solidify them into FTS patterns if we find that they are used across multiple pages.

  <figure>
    <img src="{{ '/assets/about/how-we-build/webdms-1.png' | url }}" alt="Example of WebDMS patterns showing hybrid cloud">
    <img src="{{ '/assets/about/how-we-build/webdms-2.png' | url }}" alt="Example of WebDMS patterns showing implementation of jumplinks">
    <figcaption>Examples of WebDMS applied on top of the Red Hat Design System</figcaption>
  </figure>
  
</section>

<uxdot-feedback>
  <h2>Other resources</h2>
  <p>To learn how to use our design system kit and libraries, visit <a href="/get-started/">this page</a>.</p>
</uxdot-feedback>