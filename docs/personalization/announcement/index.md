---
title: Announcement
heading: Announcement
sidenavTitle: Announcement
layout: layouts/pages/pattern.njk
order: 30
pattern-info:
    thumbnail: /assets/patterns/all-patterns-announcement.svg
    thumbnail-alt: Announcement pattern
    summary: Displays an important message across pages
    status: ready
tags:
  - personalization
  - personalization-pattern
---


## Overview

An Announcement is a **priority 1** personalization and should be
used sparingly. It includes a skinny banner at the very top of a website above
the navigation.

## Design

An announcement can be used to display an important message at the top
of a website, but is not limited to one page at a time. An announcement
can either have a themed background image or solid color background. For
colored backgrounds, we suggest using [alert
styles][alertstyles].

<uxdot-example variant="full">
<img alt="Announcement"
    src="/assets/optimization/announcement.svg"
    width="1000"
    height="203">
</uxdot-example>

## How to use

-   If a logo is associated with an announcement, it should have a max
    width of 80px.
-   Headline or body text should be 60 characters or fewer.
-   Call to action text should be 20 characters or fewer.
-   Provide a link to the announcement if applicable.

## The audience

Alert styles can be used for the following kinds of announcement content.

-   **Important cross-website announcements** - For top-tier press
    releases, company announcements, and important product launches, use
    a red or yellow background.
-   Single-page announcements - For global updates or important in-page
    content, use a green or blue background.


{% renderFile './docs/personalization/_feedback.md' %}