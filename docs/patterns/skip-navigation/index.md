---
title: Skip navigation
tags:
  - pattern
---

## Overview

Skip navigation is a styled link that appears at the top of a page when the Tab key is pressed. It bypasses the navigation and jumps users down to the main content when selected.

## Sample pattern

{% example palette="none",
           alt="Skip navigation",
           src="./skip-nav.svg" %}

  ## Style

Skip to main content is a styled link that consists of a text label and a background container. Even though it looks like a Button, it functions more like a jump link.
{% example palette="medium",
           alt="Skip navigation specs",
           src="./skip-nav-style.svg" %}

## Usage

A skip to main content link helps some users browse the web more effectively. It should be invisible on every page as a commitment to accessibility.

{% example palette="none",
           alt="Skip navigation usage",
           src="./skip-nav-usage-1.svg" %}

{% example palette="none",
           alt="Skip navigation usage",
           src="./skip-nav-usage-2.svg" %}

{% example palette="none",
           alt="Skip navigation usage",
           src="./skip-nav-usage-3.svg" %}

## Best practices

Don't apply the skip to main content link style to other components.
{% example palette="wrong",
           alt="Skip navigation style errors",
           src="./skip-nav-best-practices-1.svg" %}

## Behavior

When a user presses the Tab key upon page load, the skip to main content link will appear centered at the top above the navigation. When a user presses the Enter key, the page will move down and the focus indicator should highlight the main content.

{% example palette="none",
           alt="Skip navigation behavior",
           src="./skip-nav-behavior.svg" %}

## Spacing

A skip to main content link  uses [space tokens](/tokens/space/) to define spacing 
values between elements.

{% spacerTokensTable 
  headline="",
  caption='',
  headingLevel="4",
  tokens="--rh-space-sm,--rh-space-md" %}
{% endspacerTokensTable %}

{% example palette="none",
           alt="Skip navigation spacing diagram",
           src="./skip-nav-spacing.svg" %}

{% include 'feedback.html' %}