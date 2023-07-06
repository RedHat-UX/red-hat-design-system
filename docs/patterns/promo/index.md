---
title: Promo
layout: layout-basic.njk
tags:
  - pattern
footnote: Some text styles reduce in size on small screens. Learn more about [typography on mobile](../../foundations/typography)
---

{% import 'component/components.njk' as components %}

## Overview

A Promo is a full-width site banner used to promote or advertise an announcement like a product, feature, or event.

## Sample component

{% example palette="none",
    alt="Promo banner",
    src="./promo-banner.svg" %}

{% repoStatus %}

## Style

A promo banner has light, dark, saturated, and photo background options. It contains a headline, text, and a call to action that can be arranged differently depending on the variant and breakpoint.

{% example palette="light",
    alt="Promo banner specs",
    src="./promo-banner-style.svg" %}

#### Theme

{% example palette="light",
    alt="Promo banner color theme",
    src="./promo-banner-theme.svg" %}

{% example palette="light",
    alt="Promo banner gray theme",
    src="./promo-banner-theme-gray.svg" %}

{% example palette="light",
    alt="Promo banner dark theme",
    src="./promo-banner-theme-black.svg" %}

{% example palette="light",
    alt="Promo banner imaged theme",
    src="./promo-banner-theme-imaged.svg" %}

#### Call to action

A promo banner features a Secondary call to action. Don’t change it to the Primary or Default style, even if other Secondary styles are used in the same area.

<hr class="margin-top--10 margin-bottom--10">

## Usage

#### Layout

A promo banner always has three elements, a headline, text, and a call to action. These elements are arranged differently depending on the variant and breakpoint. On large screens, the promo banner background spans the width of a browser window. The content inside falls within a 12-column grid on large screens and a one-column grid on small screens.

{% example palette="none",
    alt="Promo banner desktop layout",
    src="./promo-banner-layout-desktop.svg" %}

{% example palette="none",
    alt="Promo banner mobile layout",
    src="./promo-banner-layout-mobile.svg" %}

#### Placement

A promo banner can be placed anywhere on a page below the hero and the fold, but be mindful of hierarchy. If content in a promo banner is less important or relevant than other content, it may  be positioned lower on the page.

{% example palette="none",
    alt="Promo banner placement",
    src="./promo-banner-placement.svg" %}

#### Color backgrounds

The promo banner default background color is blue. If other layouts nearby use a similar color or if they have the same visual weight, the page will become too heavy. Switch the background color to light gray so a user’s eye can rest. Alternatively, if there’s a lot of blue on the page, use the black background instead if it works in the layout.

#### Photo background

Use a photo background in a promo banner sparingly, as it can feel heavy. Always ensure that accessibility standards are being met when placing text and calls to action on a photo background (reversing the text and call to action colors or adding an overlay will help).

``
  - If a page already contains lots of photos or graphics, avoid using a promo banner with a photo background because the page will become heavier.``
  - If a page is short or lacks visual interest, consider using a promo banner with a photo background.``
``

{% example palette="none",
    alt="Promo banner imaged wrong style",
    src="./promo-banner-imaged-wrong.svg" %}

{% example palette="none",
    alt="Promo banner imaged right style",
    src="./promo-banner-imaged-right.svg" %}

#### Content
The content or offer being advertised in a promo banner should be secondary or even tertiary to the main message of the page so it doesn’t distract from the intended user experience.

<hr class="margin-top--10 margin-bottom--10">

## Best practices

Don't place a promo banner near another layout with equal or more visual weight.

{% example palette="wrong",
    alt="Promo banner placement issue",
    src="./promo-banner-best-practices-1.svg" %}

Be mindful of using the black promo banner in a light environment because the contrast can be harsh.

{% example palette="wrong",
    alt="Promo banner contrast issue",
    src="./promo-banner-best-practices-2.svg" %}


For better accessibility, don’t use light text on a light photo background without a dark overlay underneath.

{% example palette="wrong",
    alt="Promo banner placement issue",
    src="./promo-banner-best-practices-3.svg" %}

Don't omit any of the three elements or change the call to action style.
            
{% example palette="wrong",
    alt="Promo banner omitted elements issue",
    src="./promo-banner-best-practices-4.svg" %}

Don't include links in the text, the only link that should be featured is the call to action.

{% example palette="wrong",
    alt="Promo banner link text issue",
    src="./promo-banner-best-practices-5.svg" %}

## Responsive design

#### Breakpoints
    <p>A promo banner works well across both large and small screens. The elements in both variants will stack in one column and become vertically-aligned on small screens.</p>

#### Desktop
    
{% example palette="none",
    alt="Promo banner responsive desktop",
    src="./promo-banner-responsive-desktop.svg" %}
    
#### Tablet
    
{% example palette="none",
    alt="Promo banner responsive tablet",
    src="./promo-banner-responsive-tablet.svg" %}

#### Mobile

{% example palette="none",
    alt="Promo banner responsive mobile",
    src="./promo-banner-responsive-mobile.svg" %}

<hr class="margin-top--10 margin-bottom--10">

## Spacing

Both promo banner variants use [PatternFly 4 spacers](https://www.patternfly.org/v4/guidelines/spacers) to define spacing values between elements.

{% example palette="light",
    alt="Promo banner spec spacing",
    src="./promo-banner-spacing-large.svg" %}

{% example palette="light",
    alt="Promo banner spec spacing small",
    src="./promo-banner-spacing-small.svg" %}

{% include 'feedback.html' %}