---
title: Sticky banner
heading: Sticky banner
sidenavTitle: Sticky banner
layout: layouts/pages/pattern.njk
order: 70
pattern-info:
    thumbnail: /assets/patterns/all-patterns-sticky-banner.png
    thumbnail-alt: Sticky banner pattern
    status: ready  
tags:
  - personalization
  - personalization-pattern
---


## Overview

A Sticky banner displays a secondary offer without interrupting the experience
of a user. It sticks to the bottom of the screen and overlays existing
content.

## Design

-   If a sticky banner links to a set of assets (like in Pathfactory), a
    placeholder image can be displayed describing what the user gets.
-   If a sticky banner links to specific assets, a resource icon can be
    displayed instead of the Pathfactory image.
-   The headline should not wrap, 35 - 40 characters or fewer is
    acceptable.
-   The body text should not wrap beyond more than two lines; 85 - 110
    characters or fewer, depending on how the first line wraps, is
    acceptable.
-   A user should be able to permanently close a sticky banner and that
    same sticky banner **should not** reappear when they return.

<uxdot-example variant="full">
<img alt="Sticky banner"
        src="/assets/optimization/sticky-banner.svg"
        width="1000"
        height="152">
</uxdot-example>

## How to use

-   A sticky banner slides up from the bottom of the page. We often
    require a user to scroll past the fold before revealing a sticky
    banner to avoid interfering with the primary hero message.
-   Decide on which pages will display a sticky banner. We typically do
    not show a sticky banner on landing pages like the Solutions pages
    and Thought Leadership article pages.
-   Design a sticky banner to explicitly tell a user what they will
    receive if they make a selection. For example, include an image that
    visually describes the resource and write content to be specific to
    the resource.
-   The Drift chatbot icon appears on top of everything, so avoid
    creating a design that spans the entire width of a sticky banner to
    avoid a conflict.

## The audience

-   A sticky banner can be displayed to a user who has shown interest in
    a product or topic, but have not converted yet.
-   We recommend the audience be large enough so that a click-through
    rate of under 10% is sufficient to meet goals.
-   Expect a fairly high close rate, based on initial trials, in the 40%
    range.


{% renderFile './docs/personalization/_feedback.md' %}