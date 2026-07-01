---
layout: layouts/pages/has-toc.njk
title: Project Felt
heading: Project Felt
permalink: /theming/themes/project-felt/index.html
order: 10
tags:
  - theming
  - projectFelt
subnav:
  collection: sortedProjectFelt
  order: 10
---

## Harmonizing the Red Hat experience

### Our new theme is built for journeys

Design systems bridge brand identity to the end user experience, but when a brand identity spans marketing experiences, a product marketplace, and complex enterprise software user interfaces, that bridge needs active maintenance.

Whether users are shopping for a product on a marketing website or using a complex dashboard user interface to get work done, our goal is always the same -- to make the user journey look unified and feel continuous.

To that end, we are introducing a new theme variant with familiar Red Hat visuals.

This new theme is part of Project Felt, which is an ongoing cross-team initiative to encourage greater unity between the Red Hat brand, marketing experiences, and product user interfaces. Built on our design token system, the Project Felt theme ships as a non-breaking release and is fully ready for use in your products.

Here is how it came together and where we are taking it next.

## Envisioning a seamless journey

This theming effort started as a cross-team workshop between maintainers of the PatternFly and Red Hat design systems, and the Red Hat brand team. Together, we tackled this shared challenge:

**How do we create a more seamless experience for users as they move through the full Red Hat journey?**

To start, we leveraged the "See, Buy, Use" flow as our experience map. We created mock experiences as part of this flow in order to visualize:

- a visitor first encountering Red Hat through social ads or marketing experiences,
- then, a prospect navigating to our product marketplace to start a trial or make a purchase,
- finally, a daily active customer using the features included in a product interface.

We know these unique contexts have not always been in sync, so our goal was to find a shared visual language that makes the Red Hat journey feel consistent while still preserving intentional differences as needed.

The result of this workshop laid the groundwork for many of the styles we are shipping today. While unity and cohesion are the goals, we do not want to apply one single look and feel to everything yet. Rather than changing the default look of our systems, we created a separate option -- Project Felt theme -- so teams can choose the visual language that best fits their needs.

## Project Felt theme

The Project Felt theme is our first theme variant and a step towards a unified Red Hat identity. Named after the material of the iconic Red Hat fedora, our new Project Felt theme is Red Hat through and through. It expands on leveraging Red Hat red as a primary accent color and introduces pill-shaped borders for buttons, controls, containers, and more.

The result is marketing experiences and product interfaces that are more visually aligned and recognizably Red Hat. For teams building things where continuity matters, the Project Felt theme makes it easier to deliver that familiarity for users.

Because the Project Felt theme is built entirely on our design token system, you can adopt it without breaking changes.

<rh-alert state="info">
  <h4 slot="header">Helpful to know</h4>
  <p>No breaking changes is the goal. There are potential CSS changes. If you have modified or styled existing components, especially using CSS parts, it is beneficial to double check or QA the implementation when applying the new theme just to be sure.</p>
</rh-alert>

## Path to production

The path to production will be incremental to minimize disruption.

- RHDS components will be built to allow engineers to toggle between base RHDS styles and the new Project Felt theme by using a style sheet that will ship with RHDS v4.2.0 ("Growlithe").
- The new theme will be delivered as a non-breaking update for both RHDS and PatternFly.
- Workshops across teams are planned to dive deeper into integrating the unified theme in code.

<rh-alert state="info">
  <h4 slot="header">Helpful to know</h4>
  <p>RHDS will continue to update the original Figma library, which will include elements styled with the default, base RHDS theme and the Project Felt theme.</p>
</rh-alert>

## Enablement in Figma

In the RHDS Figma library, we added a property called "Theme". It gives users the ability to toggle between base RHDS styles and Project Felt theme styles. Additionally, the semantic tokens for this new theme will be available in a separate "Semantic tokens - Project Felt theme" collection.

## Timeline

The new Project Felt theme will roll out in phases:

- **Q2 2026 deliverables ("Growlithe" release):**
  - A subset of higher priority RHDS elements (e.g. Accordion, Button, Call to action, Card, and Tabs) will be updated with the new unified design language as a preview theme in the repo.
  - The same subset of elements will be updated in the RHDS Figma library.
- **Q3-Q4 2026:**
  - Delivery of the remaining Unified Theme in the RHDS repo and Figma library
  - Work on token alignment begins to create the foundation for one design system
  - Support for the optional glass effect may be added (dependent on Summit study feedback on legibility and accessibility).

## What's next: Toward one system

This release marks the first phase of a larger, long-term effort to unify PatternFly with RHDS, making it easier for every Red Hat team to build and maintain consistent experiences across websites and products. The Project Felt theme is our first step toward a future where Red Hat websites and products have a shared foundation, and "Red Hat" is consistently recognizable across every touchpoint.

<uxdot-feedback>
  <h2>Other available themes</h2>
  <p>If the Project Felt theme does not fit your user needs right now,
     <a href="/elements/">view all RHDS elements</a> with default styles.</p>
</uxdot-feedback>
