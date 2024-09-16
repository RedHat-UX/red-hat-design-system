---
layout: layouts/pages/basic.njk
title: Personalization patterns
order: 30
hasToc: true
tags:
  - foundations
importElements:
  - rh-tile
---

<link rel="stylesheet" href="{{ '/assets/packages/@rhds/elements/elements/rh-tile/rh-tile-lightdom.css' | url }}">


<section aria-labelledby="overview">

  ## Overview

  Personalization is a digital marketing tactic where priority audiences are intercepted through targeting. Those audiences can be account-, demographic-, behavioral-, lifecycle-, or intent-based. Our goal is to provide visitors with the best next action when browsing our websites as well as meet their specific needs and progress them through the customer lifecycle.
  
  For more information about how personalization works, the team, and our vision for the future, read the [source deck](https://docs.google.com/presentation/d/1rRLFRJLsbspINGu5r2zXBUITRkwzVVH8T3CveA1Z_bM/edit#slide=id.g24f5d8f664e_0_1100).


  <nav class="grid xs-two-columns sm-three-columns">
    <rh-tile compact bleed>
      <uxdot-example color-palette="dark" slot="image" no-border>
        <img src="{{ '/elements/dialog/screenshot.png' | url }}" alt="Dialog">
      </uxdot-example>
      <h3 slot="headline"><a href="#pattern-1-dialog" slot="headline">Dialog</a></h3>
    </rh-tile>
    <rh-tile compact bleed>
      <uxdot-example slot="image" transparent no-border>
        <img src="{{ '/assets/patterns/all-patterns-sticky-banner.png' | url }}" alt="Sticky banner">
      </uxdot-example>
      <h3 slot="headline"><a href="#pattern-2-sticky-banner" slot="headline">Sticky banner</a></h3>
    </rh-tile>
    <rh-tile compact bleed>
      <uxdot-example slot="image" transparent no-border>
        <img src="{{ '/assets/patterns/all-patterns-sticky-card.png' | url }}" alt="Sticky card">
      </uxdot-example>
      <h3 slot="headline"><a href="#pattern-3-sticky-card" slot="headline">Sticky card</a></h3>
    </rh-tile>
    <rh-tile compact bleed>
      <uxdot-example slot="image" no-border color-palette="lighter">
        <img src="{{ '/assets/patterns/all-patterns-announcement.png' | url }}" alt="Announcement">
      </uxdot-example>
      <h3 slot="headline"><a href="#pattern-4-announcement">Announcement</a></h3>
    </rh-tile>
    <rh-tile compact bleed>
      <uxdot-example slot="image" transparent  no-border>
        <img src="{{ '/elements/card/screenshot.svg' | url }}" alt="Card">
      </uxdot-example>
      <h3 slot="headline"><a href="#pattern-5-in-page-card">In-page card</a></h3>
    </rh-tile>
    <rh-tile compact bleed>
      <uxdot-example slot="image" transparent no-border>
        <img src="{{ '/elements/tabs/screenshot.png' | url }}" alt="Tabs">
      </uxdot-example>
      <h3 slot="headline"><a href="#pattern-6-active-tab">Active tab</a></h3>
    </rh-tile>
    <rh-tile compact bleed>
      <uxdot-example slot="image" transparent no-border>
        <img src="{{ '/elements/alert/screenshot.svg' | url }}" alt="Alert">
      </uxdot-example>
      <h3 slot="headline"><a href="#pattern-7-inline-alert">In-page alert</a></h3>
    </rh-tile>
    <rh-tile compact bleed>
      <uxdot-example slot="image" transparent no-border>
        <!-- TODO: Add custom patterns image -->
        <!-- <img src="" alt="Custom Patterns"> -->
      </uxdot-example>
      <h3 slot="headline"><a href="#custom-patterns">Custom patterns</a></h3>
    </rh-tile>
  </nav>
</section>


<section aria-labelledby="getting-started-with-personalization">

  ## Getting started with personalization
  
  Before jumping into personalization, have answers to these questions ready first.

  <ul>
    <li>What audience are you trying to target?</li>
    <li>How large is the audience?</li>
      <ul>
        <li>Reference the <a href="https://docs.google.com/document/d/1hutgW-tyti73C64XnO4_ftpO83R81KEquEV4AeGqvWA/edit?usp=sharing">Go/No go estimator</a> to calculate and determine the viability of your project.</li>
      </ul>
    <li>What do you want that audience to do?</li>
    <li>What would success look like for this audience?</li>
    <li>What type of experience(s) do you want to use?</li>
    <li>Are any tests or personalizations already running on the page you are working on?</li>
  </ul>
</section>


<section aria-labelledby="pattern-1-dialog">
  
  ## Pattern 1: Dialog { id="pattern-1-dialog" }

  A Dialog displays content in a container which sits on top of the page and darkens any content underneath. This is a <strong>priority 1</strong> implementation as it prevents a user from completing a task or interacting with the rest of the page until they close the dialog.

  ### Design { id="dialog-design"}
  
  A dialog can be used both on desktop and mobile.

  <uxdot-example variant="full">
    <img src="{{ '/assets/optimization/modal.svg' | url }}" alt="Dialog">
  </uxdot-example>

  ### How to use { id="dialog-how-to-use"}

  <ul>
    <li>Use sparingly as it interrupts the workflow of a user, requires immediate attention from a user, and distracts a user from completing their current task.</li>
    <li>A best practice is to trigger a dialog only when a user interacts with the appropriate element, never on its own. For instance, show a dialog if a user selects something and then needs to complete a more important task. If that is not ideal or possible, show it once a user has completed their task.</li>
    <li>Refrain from presenting a dialog while a user is likely to be in the middle of an important task.</li>
    <li>Per our design system, every dialog should include a close button. It should also close when a user clicks outside of the dialog and when the Escape (<em>esc</em>) key is pressed.</li>
    <li>Messaging within a dialog should be simple, do not include multiple steps or long forms.</li>
    <li>A dialog can be used on mobile, but a user might have a hard time closing it on a small screen.</li>
  </ul>

  ### The audience { id="dialog-audience"}

  A dialog can be used for the following types of content (among others).

  <ul>
    <li>Product announcements</li>
    <li>Notifications related to any previous user actions</li>
    <li>An experience that ideally does not direct a user away from their task or the page</li>
  </ul>
</section>


<section aria-labelledby="pattern-2-sticky-banner">

  ## Pattern 2: Sticky banner { id="pattern-2-sticky-banner" }

  A Sticky banner displays a secondary offer without interrupting the experience of a user. It sticks to the bottom of the screen and overlays existing content.
  
  ### Design { id="sticky-banner-design"}

  <ul>
    <li>If a sticky banner links to a set of assets (like in Pathfactory), a placeholder image can be displayed describing what the user gets.</li>
    <li>If a sticky banner links to specific assets, a resource icon can be displayed instead of the Pathfactory image.</li>
    <li>The headline should not wrap, 35 - 40 characters or fewer is acceptable.</li>
    <li>The body text should not wrap beyond more than two lines; 85 - 110 characters or fewer, depending on how the first line wraps, is acceptable.</li>
    <li>A user should be able to permanently close a sticky banner and that same sticky banner <strong>should not</strong> reappear when they return.</li>
  </ul>

  <uxdot-example variant="full">
    <img src="{{ '/assets/optimization/sticky-banner.svg' | url }}" alt="Sticky banner">
  </uxdot-example>

  ### How to use { id="sticky-banner-how-to-use"}

  <ul>
    <li>A sticky banner slides up from the bottom of the page. We often require a user to scroll past the fold before revealing a sticky banner to avoid interfering with the primary hero message.</li>
    <li>Decide on which pages will display a sticky banner. We typically do not show a sticky banner on landing pages like the Solutions pages and Thought Leadership article pages.</li>
    <li>Design a sticky banner to explicitly tell a user what they will receive if they make a selection. For example, include an image that visually describes the resource and write content to be specific to the resource.</li>
    <li>The Drift chatbot icon appears on top of everything, so avoid creating a design that spans the entire width of a sticky banner to avoid a conflict.</li>
  </ul>

  ### The audience { id="sticky-banner-audience"}

  <ul>
    <li>A sticky banner can be displayed to a user who has shown interest in a product or topic, but have not converted yet.</li>
    <li>We recommend the audience be large enough so that a click-through rate of under 10% is sufficient to meet goals.</li>
    <li>Expect a fairly high close rate, based on initial trials, in the 40% range.</li>
  </ul>
</section>


<section aria-labelledby="pattern-3-sticky-card">
  
  ## Pattern 3: Sticky card { id="pattern-3-sticky-card" }

  A Sticky card is a single page or cross-page offer that persists on the side of the screen.

  ### Design { id="sticky-card-design"}

  A sticky card can include a title, headline, body text, and call to action, but not all of these elements are required in the same sticky card. It can function in a couple of different ways depending on the primary goal of the page.

  <ul>
    <li><strong>Less interruptive</strong>
      <ul>
        <li>On pages where the primary goal is to support reading and learning, a sticky card will slide in from right to left after the visitor has scrolled past 1,000 pixels. It will remain in a fixed position so it follows a user down the page.</li>
        <li>On mobile, a sticky card will appear inline on the page. For example, there is an example of a less interruptive sticky card on article pages.</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li><strong>More interruptive</strong>
      <ul>
        <li>On pages where the primary goal is to present a user with a personalized offer, a sticky card will slide in from right to left once the visitor has scrolled past the hero.</li>
        <li>On mobile, a sticky card will be shown as an overlay which is the same as on desktop. For example, show a sticky card on pages after a user has taken an action indicating they have an interest in a certain subject in order to present a resource they may be interested in.</li>
      </ul>
    </li>
  </ul>

  <uxdot-example variant="full">
    <img src="{{ '/assets/optimization/sticky-card.svg' | url }}" alt="Sticky card">
  </uxdot-example>

  ### How to use { id="sticky-card-how-to-use"}

  <ul>
    <li>A sticky card should promote a resource or event and the only acceptable elements are a title, headline, body text, and call to action. </li>
    <li>A sticky card can be used on a single page or across a set of pages. </li>
    <li>A sticky card is useful on pages that do not have a call to action in the hero or near the top of the page because it can be used to call attention to a personalized resource.</li>
  </ul>

  ### The audience { id="sticky-card-audience"}

  <ul>
    <li>A sticky card can be displayed to a user who has shown interest in a product or topic, but have not converted yet.</li>
  </ul>
</section>

<hr>

<section aria-labelledby="pattern-4-announcement">

  ## Pattern 4: Announcement { id="pattern-4-announcement" }

  An Announcement is a <strong>priority 1</strong> personalization and should be used sparingly. It includes a skinny banner at the very top of a website above the navigation.

  ### Design { id="announcement-design"}

  An announcement can be used to display an important message at the top of a website, but is not limited to one page at a time. An announcement can either have a themed background image or solid color background. For colored backgrounds, we suggest using <a href="https://ux.redhat.com/foundations/color/" target="_blank">alert styles</a>.

  <uxdot-example variant="full">
    <img src="{{ '/assets/optimization/announcement.svg' | url }}" alt="Announcement">
  </uxdot-example>

  ### How to use { id="announcement-how-to-use"}

  <ul>
    <li>If a logo is associated with an announcement, it should have a max width of 80px.</li>
    <li>Headline or body text should be 60 characters or fewer.</li>
    <li>Call to action text should be 20 characters or fewer.</li>
    <li>Provide a link to the announcement if applicable.</li>
  </ul>

  ### The audience { id="announcement-audience"}

  Alert styles can be used for the following kinds of announcement content.

  <ul>
    <li><strong>Important cross-website announcements</strong> - For top-tier press releases, company announcements, and important product launches, use a red or yellow background.</li>
    <li>Single-page announcements - For global updates or important in-page content, use a green or blue background.</li>
  </ul>
</section>


<section aria-labelledby="pattern-5-in-page-card">

  ## Pattern 5: In-page card { id="pattern-5-in-page-card" }

  An In-page card is an existing card(s) within a page for personalization or targeting.

  <rh-alert state="warning">
    <h3 slot="header">Warning</h3>
    <p>Only cards on the redhat.com home page are templated in Adobe Target. For a different card experience on other pages, new design and development work may be required.</p>
  </rh-alert>

  ### Design { id="in-page-card-design" }

  There are several versions of in-page offer cards depending on what kind of asset you need to promote.

  <ul>
    <li>Resource offer</li>
    <li>Event/webinar offer</li>
    <li>Page offer</li>
    <li>Product card</li>
  </ul>

  <uxdot-example variant="full">
    <img src="{{ '/assets/optimization/card.svg' | url }}" alt="Card">
  </uxdot-example>

  ### How to use { id="in-page-card-how-to-use" }

  <ul>
    <li>Find an existing card(s) within your page or set of pages you want to personalize.</li>
    <li>Define the offer you are trying to promote (announcement, event, press release, webinar, etc.).</li>
    <li>To automate the process of what you show a user, Adobe has pre-built technology to automatically personalize based on the attributes of a user or an algorithm based on content type. Please work with the <a href="mailto:digital-design-system@redhat.com">Digital Systems Web Team</a> if you are interested in this direction.</li>
  </ul>

  ### The audience { id="in-page-card-audience" }

  An in-page card should be relevant to the context of the page a user is currently on.

</section>

<hr>

<section aria-labelledby="pattern-6-active-tab">

  ## Pattern 6: Active tab { id="pattern-6-active-tab" }

  The Active tab is a simple experience applicable to any page that contains tabs. It aims to customize the visitor experience by highlighting a tab based on the interests of a user.

  ### Design { id="active-tab-design" }

  Active tab uses the existing tab component design and only customizes the active tab within the tab set (no custom design work is needed).

  <uxdot-example variant="full">
    <img src="{{ '/assets/optimization/tabs.svg' | url }}" alt="Tabs">
  </uxdot-example>

  ### How to use { id="active-tab-how-to-use" }

  <ul>
    <li>Choose your target audience.</li>
    <li>Choose a tab that best aligns to that audience in order to provide a targeted experience to them.</li>
    <li>Request the active tab experience be set for that audience and describe what goals you hope to accomplish by doing so.</li>
  </ul>

  ### The audience { id="active-tab-audience" }

  An active tab design can be used for the following types of content.

  <ul>
    <li>Persona-based targeting</li>
    <li>Lifecycle-based targeting</li>
    <li>Product affinity targeting</li>
    <li>Topic affinity targeting</li>
  </ul>
</section>


<section aria-labelledby="pattern-7-inline-alert">

  ## Pattern 7: Inline alert { id="pattern-7-inline-alert" }
  
  An Inline alert is a single or multiple page offer that appears inline with page content.

  ### Design { id="inline-alert-design" }

  <p>An inline-alert only includes text, but no images. It can also include a single or two links that direct a user to other pages.</p>

  <uxdot-example variant="full">
    <img src="{{ '/assets/optimization/alert.svg' | url }}" alt="Alert">
  </uxdot-example>

  If a user closes an inline alert, consider if or when it should be displayed again for the same user. It could be suppressed for a week, month, or forever depending on the goal of the project. The <a href="https://ux.redhat.com/elements/alert/" target="_blank">alert component</a> in Adobe XD has two styles, normal and alternate, and either can be used.

  ### How to use { id="inline-alert-how-to-use" }

  <ul>
    <li>Use when the goal is to show an inline message pertinent to the surrounding content.</li>
  </ul>

  ### The audience { id="inline-alert-audience" }

  An inline alert can be displayed to any appropriate audience group.

</section>


<section aria-labelledby="custom-patterns">
  <h2 id="custom-patterns">Custom patterns</h2>
  <p>Custom patterns are not pre-established targeting opportunities. If you are interested in creating a custom targeting experience, please reach out to the <a href="mailto:digital-design-system@redhat.com ">design system team</a> or <a href="https://docs.google.com/forms/d/e/1FAIpQLSft-6oHhI5d2wO-oEeBuT23wiYPpxOH2UKLH9ZkRswjby2CSg/viewform?usp=sf_link">via this form</a> with the details of your request and they will help you to establish the framework for the new design.</p>
</section>

<uxdot-feedback>
  <h2>Feedback</h2>
  <p>Help us improve this page by leaving your feedback below.</p>
</uxdot-feedback>
