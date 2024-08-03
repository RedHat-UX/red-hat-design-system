---
title: Web Standards
sidenavTitle: Web Standards
permalink: /accessibility/web-standards/index.html
tags:
  - accessibility
order: 1
importElements:
  - rh-blockquote
  - rh-card
---

<style>
    rh-blockquote {
        display: block;
        margin-block: 2em !important;
        max-width: 36em;
    }

    #container {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    #container svg {
      padding: 32px;
    }

    .icon-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px;
    }
</style>

## Inclusion is part of our culture

<hr>

<p>As Red Hatters, it is in our culture to be open and inclusive. Developing web pages or applications in any other way would not be the Red Hat way.</p>

<rh-blockquote>
  <p>"When you call something an edge case, you’re really just defining the limits of what you care about.”</p>
  <span slot="author">Eric Meyer</span>
  <span slot="title">Software Engineer</span>
</rh-blockquote>

<p>Any developer, designer and content author who is creating applications or writing content for the Red Hat Customer Portal should be aware of our Web Standards and Accessibility Guidelines. These guidelines outline the best practices for building inclusive, usable, and bullet-proof web pages and applications that are accessible to anyone on any device.</p>

<p>While legal mandates and policies are good, they are often heavy-handed, and somewhat counter to our culture at Red Hat. This is why having a cultural identity in inclusivity, like ours at Red Hat, is a better, more grassroots approach to openly sharing our ideas with everyone regardless of abilities or impairments.</p>

<rh-card>
  <h3 slot="header">Did you know?</h3>
  <p>When you intentionally or even unintentionally create barriers for users regardless of ability or disability it is a form of discrimination. Any form of discrimination could lead to a lawsuit that might damage our brand, especially as a company that is as open and inclusive as ours.</p>
</rh-card>

### Getting Started

How you use these patterns may affect the accessibility of your web page or web application. Following these role-specific guidelines will help ensure that you are building inclusively.

<div id="container">

<section class="icon-card" tabindex="-1">

  <svg width="150" height="150" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>

  ### For Developers

</section>

<section class="icon-card" tabindex="-1">

  <svg width="150" height="150" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>

### For Designers

</section>

<section class="icon-card" tabindex="-1">

  <svg width="150" height="150" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>

### For Content Authors

</section>

</div>
<hr>

<section aria-labelledby="for-developers" tabindex="-1">
  <h2>For Developers</h2>

  <hr>
  
  <h3>1 — Build solid foundations</h3>

  Building a solid, bullet-proof web application that is usable should be at the core of every developer’s mindset from the very beginning of development.

  <rh-card>
    <h3 slot="header">Otherwise...</h3>
    <ul>
      <li>If it is not solid or bullet-proof, it will break easily.</li>
      <li><strong>Operable</strong> - User interface components and navigation must be operable.</li>
    </ul>
  </rh-card>

  The key to building solid, bullet-proof web pages and applications is a solid foundation—which is HTML. The reason HTML is still the foundation of the web is because it is descriptive, simple to implement, and tolerant of input—making it incredibly stable as well as future-proof and backward compatible.

  <rh-blockquote>
    <p>"Be liberal in what you require but conservative in what you do.”</p>
    <span slot="author">Tim Berners-Lee</span>
    <a href="https://www.w3.org/DesignIssues/Principles.html#PLP">Principles of Design</a>
  </rh-blockquote>

  <hgroup>
    <h3>1.1 — HTML must validate</h3>

    At Red Hat, we use valid HTML5 markup.
  </hgroup>

  While HTML linters and validator tools are a good start, you must always, double-check (i.e. Inspect) the DOM in your web page or web application to ensure the integrity of the HTML you expected.

  <rh-card>
    <h3 slot="header">Otherwise...</h3>
    <ul>
      <li>Must write valid HTML5 markup. <code>&lt;!DOCTYPE html&gt;</code></li>
      <li>Must utilize HTML validators and linters as a preliminary, sanity check</li>
      <li>Must double-check (i.e. Inspect) the DOM to ensure the integrity of your HTML.</li>
    </ul>
  </rh-card>

</section>

<section aria-labelledby="for-designers" tabindex="-1">
  <h2>For Designers</h2>

  <hr>
  
  <h3>1 — Build solid foundations</h3>

  Information for this section coming soon!
</section>

<section aria-labelledby="for-content-authors" tabindex="-1">

  <h2>For Content Authors</h2>

  <hr>
  
  <h3>1 — Build solid foundations</h3>

  Information for this section coming soon!
</section>


The World Wide Web Consortium’s Web Accessibility Initiative (WAI) has authored a [Diverse Abilities and Barriers](https://www.w3.org/WAI/people-use-web/abilities-barriers/) page that lists potential barriers that individuals of varying auditory, cognitive, learning, neurological, physical, speech, and visual abilities are likely to face.

<rh-blockquote>
  <ol>
    <li><strong>Perceivable</strong> - Information and user interface components must be presentable to users in ways they can perceive.</li>
    <li><strong>Operable</strong> - User interface components and navigation must be operable.</li>
    <li><strong>Understandable</strong> - Information and the operation of user interface must be understandable.</li>
    <li><strong>Robust</strong> - Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.</li>
  </ol>
  <span slot="author">Source: <a href="https://www.w3.org/WAI/WCAG21/Understanding/intro">Introduction to Understanding WCAG</a>.</span>
  <span slot="title">Accessibility Guidelines Working Group (AG WG) Participants. Copyright © 2023 W3C® (MIT, ERCIM, Keio). Status: Draft Updated 20 June 2023.</span>
</rh-blockquote>