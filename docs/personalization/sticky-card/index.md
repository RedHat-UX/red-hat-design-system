---
title: Sticky card
heading: Sticky card
sidenavTitle: Sticky card
layout: layouts/pages/pattern.njk
order: 80
pattern-info:
    thumbnail: /assets/patterns/all-patterns-sticky-card.png
    thumbnail-alt: Sticky card pattern
    status: ready  
tags:
  - personalization
  - personalization-pattern
---


## Overview

A Sticky card is a single page or cross-page offer that persists on the side
of the screen.

## Design

A sticky card can include a title, headline, body text, and call to action,
but not all of these elements are required in the same sticky card. It can
function in a couple of different ways depending on the primary goal of the
page.

-   **Less interruptive**
    -   On pages where the primary goal is to support reading and
        learning, a sticky card will slide in from right to left after
        the visitor has scrolled past 1,000 pixels. It will remain in a
        fixed position so it follows a user down the page.
    -   On mobile, a sticky card will appear inline on the page. For
        example, there is an example of a less interruptive sticky card
        on article pages.

<!-- -->

-   **More interruptive**
    -   On pages where the primary goal is to present a user with a
        personalized offer, a sticky card will slide in from right to
        left once the visitor has scrolled past the hero.
    -   On mobile, a sticky card will be shown as an overlay which is
        the same as on desktop. For example, show a sticky card on pages
        after a user has taken an action indicating they have an
        interest in a certain subject in order to present a resource
        they may be interested in.

<uxdot-example variant="full">
<img alt="Sticky card"
        src="/assets/optimization/sticky-card.svg"
        width="1000"
        height="419">
</uxdot-example>

## How to use

-   A sticky card should promote a resource or event and the only
    acceptable elements are a title, headline, body text, and call to
    action.
-   A sticky card can be used on a single page or across a set of pages.
-   A sticky card is useful on pages that do not have a call to action
    in the hero or near the top of the page because it can be used to
    call attention to a personalized resource.

## The audience

-   A sticky card can be displayed to a user who has shown interest in a
    product or topic, but have not converted yet.


{% renderFile './docs/personalization/_feedback.md' %}