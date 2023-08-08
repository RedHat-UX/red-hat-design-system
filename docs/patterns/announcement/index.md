---
title: Announcement
tags:
  - pattern
---

## Overview

An Announcement is a short banner that promotes an important message. It can be 
used across websites, depending on the relevance of the message and the target 
audience.

## Sample implementation

{% example palette="medium",
           alt="Example of an announcement banner",
           src="./announcement-sample-1.svg" %}

{% repoStatus %}

## Style

An announcement banner can be used in light, dark, and saturated themes. It can 
feature elements like text, a button, a call to action, icons, imagery, or a 
background container.

{% example palette="medium",
           alt="Anatomy of an announcement banner",
           src="./announcement-style-1.svg" %}

## Theme

{% example palette="medium",
           alt="Announcement banner on light theme",
           src="./announcement-theme-1.svg" %}

{% example palette="light",
           alt="Announcement banner on dark theme",
           src="./announcement-theme-2.svg" %}

## Usage

An announcement banner can promote a popular event or advertise an important 
organizational or product announcement.

### Grid

An announcement banner doesn’t fall within the grid. It spans the entire width 
of a browser window on all screens whereas the content of the banner itself 
should fall within the standard grid.

![Announcement banner spanning entire width of browser window](./announcement-usage-1.svg)

### Layout

An announcement banner should be positioned above the navigation so it becomes 
the highest layout in hierarchy. It can also be used across different pages to 
better attract attention from visitors who might be coming from different 
places.

{% example palette="medium",
           alt="Announcement banner positioned above the main menu on Redhat.com",
           src="./announcement-usage-2.svg" %}

### Content

Any content within an announcement banner can either be center-aligned or 
aligned to the left and right sides, depending on the amount of content and what 
its objective is.

{% example palette="medium",
           alt="One announcement banner showing center-aligned content and one showing left and right-aligned content",
           src="./announcement-usage-content.svg" %}

## Best practices

Do not position the announcement banner below the navigation.

{% example palette="wrong",
           alt="Example of an announcement banner below the primary navigation",
           src="./announcement-bestpractice-1.svg" %}

## Behavior

### Persistence

An announcement banner sits above the navigation and can be sticky, but should 
not be visible on scroll if the navigation of the site is also in fixed 
position.

<hr class="margin-top--10 margin-bottom--10">

## Responsive design

### Breakpoints

An announcement banner works well across both large and small screens. The 
elements inside will stack in one column and become vertically-aligned on small 
screens.

#### Desktop

![Example of an announcement banner on desktop](./announcement-responsive-1.svg)

#### Tablet

![Example of an announcement banner on tablet](./announcement-responsive-2.svg)

#### Mobile

![Example of an announcement banner on mobile](./announcement-responsive-3.svg)


Some text styles reduce in size on small screens. Learn more about 
[typography](../../foundations/typography) on mobile {.footnote}

<hr class="margin-top--10 margin-bottom--10">

## Interaction states

Since announcement banners can consist of a variety of elements, refer to the specific interaction states that are assigned to each style and component for more information.

<hr class="margin-top--10 margin-bottom--9">

## Spacing

The announcement banner uses [space tokens](/tokens/space/) to define spacing values between elements.

{% spacerTokensTable headingLevel="3", tokens="--rh-space-sm,--rh-space-lg, --rh-space-xl, --rh-space-3xl" %}{% endspacerTokensTable %}

{% example palette="medium",
           alt="Example of an announcement banner with spacers",
           src="./announcement-spacing-1.svg"  %}

{% include 'feedback.html' %}













