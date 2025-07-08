---
title: Font family
heading: Typography
sidenavTitle: Typography
layout: layouts/pages/has-toc.njk
permalink: /foundations/typography/font-family/index.html
tags: 
  - typography
subnav:
  collection: sortedTypography
  order: 2
---


<link rel="stylesheet"
      href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css"
      data-helmet>

<script type="module" data-helmet>
  import '@rhds/elements/rh-table/rh-table.js';
  import '@rhds/elements/rh-card/rh-card.js';
  import '@rhds/elements/rh-cta/rh-cta.js';
</script>

## Overview

The Red Hat font family includes 3 fonts: [Red Hat Display][rhdisplay], [Red Hat Text][rhtext], and [Red Hat Mono][rhmono]. Their design is based on who we are: real people with big ideas creating platforms that power technology innovation.

To learn more about the Red Hat font family, go to the [Brand standards][brandstandards] website.

## Design tokens

Design tokens represent our design decisions as code. They are also how we track changes made to the design system. If a text style is changed, that change propagates across all websites and experiences that use tokens.

To see a list of tokens, including Noto, go to the [Typography tokens][typographytokens] page.

## Red Hat Display

Red Hat Display is our default font. Use it for headings to grab attention and establish hierarchy. Its letterforms reinforce our [tone of voice][tone] and reflect our technical and engineering expertise. Meanwhile, human touches disrupt the rigidity to represent our people and call back to the history of our brand.

Use regular, medium, or bold weights. Other weights can be used for [Expressive type][expressivetype] only.

<uxdot-example width-adjustment="810px" color-palette="lightest">
  <img src="./typography-rh-display.svg"
      alt="examples of Red Hat Display and its three weights"
      width="810"
      height="192"
      loading="lazy">
</uxdot-example>

## Red Hat Text

Red Hat Text takes all of the personality from Display and optimizes it for more demanding applications like paragraph text or text at small sizes.

Use the medium weight and italics for emphasis. Other weights can be used for [Expressive type][expressivetype] only.

<uxdot-example width-adjustment="810px" color-palette="lightest">
  <img src="./typography-rh-text.svg"
      alt="examples of Red Hat Text and its weights and styles"
      width="810"
      height="224"
      loading="lazy">
</uxdot-example>

## Red Hat Mono

Red Hat Mono was created to distinguish code from natural-language text. Use it to demonstrate code snippets in communications and interfaces or as a stylistic approach for more technical audiences.

Use the medium weight and italics for emphasis. Other weights can be used for [Expressive type][expressivetype] only.

<uxdot-example width-adjustment="810px" color-palette="lightest">
  <img src="./typography-rh-mono.svg"
      alt="examples of Red Hat Mono and its weights and styles"
      width="810"
      height="192"
      loading="lazy">
</uxdot-example>

## Non-Latin fonts

Noto is a set of international fonts developed by Google, Monotype, Adobe, and leading experts from around the world. All Noto fonts are licensed under the Open Font License. The simple and clean design makes it a good counterpart to the Red Hat font family.

<uxdot-example width-adjustment="778px" color-palette="lightest">
  <img src="./typography-non-latin-fonts.svg"
      alt="examples of Noto used for non-latin text"
      width="778"
      height="207"
      loading="lazy">
</uxdot-example>

## Download fonts

### Red Hat
<div class="grid sm-three-columns">
  <rh-card>
    <img slot="header" 
        src="./google-fonts-icon.svg" 
        width="64px" 
        alt="Google Fonts icon">
    <rh-cta>
        <a href="https://fonts.google.com/?query=Red+Hat">Google Fonts</a>
    </rh-cta>
  </rh-card>
  <rh-card>
    <img slot="header" 
        src="./github-icon.svg" 
        width="64px" 
        alt="GitHub icon">
    <rh-cta>
        <a href="https://github.com/RedHatOfficial/RedHatFont">GitHub</a>
    </rh-cta>
  </rh-card>
</div>

### Noto Sans
<div class="grid sm-three-columns">
  <rh-card>
    <img slot="header" 
        src="./google-fonts-icon.svg" 
        width="64px" 
        alt="Google Fonts icon">
    <rh-cta>
        <a href="https://fonts.google.com/noto/specimen/Noto+Sans">Google Fonts</a>
    </rh-cta>
  </rh-card>
</div>

<uxdot-feedback>
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
</uxdot-feedback>

[rhdisplay]: #red-hat-display
[rhtext]: #red-hat-text
[rhmono]: #red-hat-mono
[brandstandards]: https://www.redhat.com/en/about/brand/standards
[typographytokens]: /tokens/font/
[tone]: https://www.redhat.com/en/about/brand/standards/personality#how-we-sound
[expressivetype]: /foundations/typography/choosing-type/#expressive-type

