---
title: Development
tags: accessibility
---

## Overview

{% alert title="Note" %}
This section covers development accessibility. Developers should also be familiar with accessibility [fundamentals](../fundamentals), [content](../content), and [design](../design).
{% endalert %}

### Why just using the component isn’t the catch-all a11y solution

## Icons and images

### Meaningful icons

### Avoiding icon fonts

### SVG accessibility

### Decorative vs. meaningful

## HTML/ARIA

### Use semantic HTML when possible, ARIA is a fallback

### ARIA landmarks

### Read order

## Interactivity
The following World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.1 A and AA apply to developing interactive elements:

- Ensure that content that appears on hover or focus is dismissable, hoverable, and persistent for keyboard and mouse users. (See [1.4.13 Content on Hover or Focus - Level AA](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html).)
- Ensure that all interactive elements can be accessed via keyboard. (See [2.1.1 Keyboard - Level A](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html).)
- Allow keyboard users to navigate away from a component. (See [2.1.2 No Keyboard Trap - Level A](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html).)
- Align focus order with visual order and DOM order. (See [SC 2.4.3 Focus Order - Level AA](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html).)
- Ensure that the keyboard focus indicator is visible. (See[SC 2.4.7 Focus Visible - Level AA](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html).)

{% alert title="Tip" %}
For more on keyboard navigation, see the WAI ARIA Authoring Practices Guide's  (APG) [Developing a Keyboard Interface](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/).
{% endalert %}

### Hiding elements

The following World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.1 A and AA apply to dyanmic content:

- Ensure content that appears or disappears on changes to mouse hover or keyboard focus is dismissable, hoverable, and persistent. (See [1.4.13 Content on Hover or Focus - Level AA](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html).)

{% alert title="Tip" %}
For more on dynamic content, see the Mozilla Developer Network's (MDN) [ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions).
{% endalert %}

### Mouse and focus events

### Focus order and roving tabindex

### Instructions for escaping keyboard traps

## Error Handling

The following World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.1 A and AA apply to error handling:

- Use text to identify and describe errors that are automatically detected. (See [3.3.1 Error Identification - Level A](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html).)
- Use text labels and instructions for user input. (See [3.3.2 Labels or Instructions - Level A](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html).)
- Provide text suggestions for user errors that are automatically detected. (See [3.3.3 Error Suggestion - Level AA](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html).)
- Ensure that submissions are reversible, checked, or confirmed. (See [3.3.4 Error Prevention (Legal, Financial, Data) - Level AA](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html).)

## Scaling and rotation

### Accounting for zoom, rotation, text scaling