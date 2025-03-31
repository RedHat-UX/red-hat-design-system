---
title: Type specifics
heading: Typography
sidenavTitle: Typography
layout: layouts/pages/has-toc.njk
permalink: /foundations/typography/type-specifics/index.html
tags:
  - typography
subnav:
  collection: sortedTypography
  order: 4
---


## Overview

Following these typography specifics ensures that we create websites and experiences that are unmistakably Red Hat.

To see more guidance and best practices when using type, go to the [Brand standards website].

## Alignment

Alignment, sometimes referred to as justification, is the way multiple lines of text are aligned to each other.

- Align text to the left by default
- Centered text can be used if it makes sense in a layout or if centered elements need to be grouped together
- Never center long paragraphs of body text
- If possible, reduce the number of lines if using centered text
- Only align text to the right when using RTL languages

<uxdot-example width-adjustment="900px" color-palette="lightest">
  <img src="/foundations/typography/type-specifics-alignment.svg"
      alt="examples of left-aligned and center-aligned text"
      width="900"
      height="126">
</uxdot-example>

## Case

Case is the capitalization of letters. We want our messaging to be approachable and authentic, so the Red Hat font is designed to look best in sentence case.

- Never use title case unless you are referring to a proper noun like a book title, product name, etc.
- Never use all caps unless referring to an abbreviation or acronym

<uxdot-example width-adjustment="509px" color-palette="lightest">
  <img src="/foundations/typography/type-specifics-case.svg"
      alt="examples of left-aligned and center-aligned text"
      width="509"
      height="138">
</uxdot-example>

## Color

Color is applied to text depending on content, hierarchy, theme, and more.

To learn more about color as a foundation, go to the [Color][colorfoundations] page.

To learn more about color contrast, go to the [Accessibility][coloraccessibility] section.

## Emphasis

Emphasis or font weight helps important words and phrases stand out, but too much emphasis can be distracting.

To learn more about using extended weights, go to the [Choosing type][choosingtype] page.

- Emphasize text by changing the color or font weight, but do not use more than 1 type of emphasis at once
- Be mindful that a bold weight will always have more emphasis than a lighter weight font of the same size
- Headings should not be italic (except for [Expressive type][expressivetype] use cases)
- Body text can use medium and italic weights
- Inline linked text is always underlined

<uxdot-example width-adjustment="676px" color-palette="lightest">
  <img src="/foundations/typography/type-specifics-emphasis.svg"
      alt="examples of bolded text and an inline link"
      width="676"
      height="131">
</uxdot-example>

### Hierarchy

Good hierarchy is key to telling a story and there are many ways to create it using color, size, space, and weight. We use hierarchy to guide the reader through text in the order that we want them to read it.

- Use big headings to capture attention
- When it makes sense, make headings red so they feel unmistakably Red Hat
- Be mindful about [size pairings][sizepairings] <!--ADD LINK-->

<uxdot-example width-adjustment="808px" color-palette="lightest">
  <img src="/foundations/typography/type-specifics-hierarchy.svg"
      alt="text excerpt with a large heading, smaller subheading, and body text"
      width="808"
      height="356">
</uxdot-example>

### Line height

Line height is the vertical space in between lines of text in the same paragraph. Typography at Red Hat should feel open, but we do not want to impact readability and legibility by overly increasing or decreasing line heights.

To see line height values for specific text styles, go to the [Scale and rhythm][scaleandrhythm] page.

- Line heights that are too tight or too loose make text difficult to read
- The maximum line height for all text styles is 150% or 1.5x the font size
- The minimum line height is 130% or 1.3x the font size, but [Expressive type][expressivetype] may use a 1.1x line height 

<uxdot-example width-adjustment="940px" color-palette="lightest">
  <img src="/foundations/typography/type-specifics-line-height.svg"
      alt="editorial and expressive type with info about font sizes and line heights"
      width="940"
      height="344">
</uxdot-example>

### Line length

Line length is the number of characters in a single line of text including spaces.

- Lines that are too long are difficult for users to read
- Use a line length between 30 and 120 characters or between 2 and 8 desktop grid columns
- Lines should not be so short that only a few words fit per line
- Use white space rather than having text fill an entire container

<uxdot-example width-adjustment="1012px" color-palette="lightest">
  <img src="/foundations/typography/type-specifics-line-length.svg"
      alt="comparison of a paragraph at a width less than 500 pixels versus a paragraph at a width of 950 pixels"
      width="1012"
      height="368">
</uxdot-example>

### Margins

A margin is the space between text and the edge of a container or nearby objects. We use generous margins for open approachable layouts.

To learn more about space as a foundation, go to the [Spacing][spacingfoundations] page.

### Punctuation

To see specific brand use cases, go to the [Brand standards][brandstandards] website.

To learn more about punctuation at Red Hat, read our [corporate style guide][corporatestyleguide].

### Quotes

To learn how we style quotes, go to the [Blockquote][blockquote] component page.

### Rag, widows, and orphans

To see specific brand use cases, go to the [Brand standards][brandstandards] website.

### Size

Text size helps establish hierarchy. Large text sizes communicate important messages whereas small text sizes are more functional.

To learn about when to use extra large heading sizes, go to the [Choosing type][choosingtype] page.

- In general, the [Scale and rhythm][scaleandrhythm] page is a good resource when it comes to using text on the web
- Large sizes should be used for more important messages
- Create balanced text size pairings for visual harmony instead of tension
- Whatever size is used, text should always be readable and legible

<uxdot-example width-adjustment="745px" color-palette="lightest">
  <img src="/foundations/typography/type-specifics-size.svg"
      alt="comparison of a 48 pixel heading and a 20 pixel example of functional body text"
      width="745"
      height="101">
</uxdot-example>

### Tracking

Tracking, also known as letter spacing, is the horizontal space in between all letters in a line of text. We want our typography to feel open, so do not adjust the tracking of any text styles.

### Variable fonts

To see specific brand use cases, go to the [Brand standards][brandstandards] website.

<uxdot-feedback>
  <h2>Foundations</h2>
  <p>To learn how to use our other foundations in your designs, visit the <a href="/foundations">foundations</a> section.</p>
</uxdot-feedback>

[brandstandards]: https://www.redhat.com/en/about/brand/standards
[colorfoundations]: /foundations/color
[coloraccessibility]: /accessibility/design/#contrast
[choosingtype]: /foundations/typography/choosing-type
[expressivetype]: /foundations/typography/choosing-type/#expressive-type
[sizepairings]: /foundations/typography/guidelines#size-pairings
[scaleandrhythm]: ../typography/scale-and-rhythm.md
[spacingfoundations]: /foundations/spacing
[corporatestyleguide]: https://url.corp.redhat.com/4c19837
[blockquote]: /elements/blockquote/