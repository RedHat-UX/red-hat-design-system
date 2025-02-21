---
title: Inline alert
heading: Inline alert
sidenavTitle: Inline alert
layout: layouts/pages/pattern.njk
order: 60
pattern-info:
    thumbnail: /elements/alert/screenshot.svg
    thumbnail-alt: Inline alert pattern
    status: ready  
tags:
  - personalization
  - personalization-pattern
---


## Overview

An Inline alert is a single or multiple page offer that appears inline with
page content.

## Design

An inline-alert only includes text, but no images. It can also include a
single or two links that direct a user to other pages.

<uxdot-example variant="full">
<img alt="Alert"
    src="/assets/optimization/alert.svg"
    width="1000"
    height="207">
</uxdot-example>

If a user closes an inline alert, consider if or when it should be
displayed again for the same user. It could be suppressed for a week,
month, or forever depending on the goal of the project. The [alert
element][alertelement] in Adobe XD has two styles, normal and
alternate, and either can be used.

## How to use

-   Use when the goal is to show an inline message pertinent to the
    surrounding content.

## The audience

An inline alert can be displayed to any appropriate audience group.

[alertelement]: /elements/alert/

{% renderFile './docs/personalization/_feedback.md' %}