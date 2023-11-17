---
title: Contributors
tags: accessibility
---

## Overview

{% alert title="Note" %}
This section covers accessibility for design system contributors. Contribultrs should also be familiar with accessibility [fundamentals](../fundamentals), [content](../content), [design](../design), and [development](../design).
{% endalert %}

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

## Dynamic Content

The following World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.1 A and AA apply to dyanmic content:

- Ensure content that appears or disappears on changes to mouse hover or keyboard focus is dismissable, hoverable, and persistent. (See [1.4.13 Content on Hover or Focus - Level AA](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html).)

{% alert title="Tip" %}
For more on dynamic content, see the Mozilla Developer Network's (MDN) [ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions).
{% endalert %}

## Error Handling

The following World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.1 A and AA apply to error handling:

- Use text to identify and describe errors that are automatically detected. (See [3.3.1 Error Identification - Level A](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html).)
- Use text labels and instructions for user input. (See [3.3.2 Labels or Instructions - Level A](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html).)
- Provide text suggestions for user errors that are automatically detected. (See [3.3.3 Error Suggestion - Level AA](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html).)
- Ensure that submissions are reversible, checked, or confirmed. (See [3.3.4 Error Prevention (Legal, Financial, Data) - Level AA](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html).)

## Using ARIA with shadowDOM
Currently there is no way to associate aria attributes with elements in different DOM trees. So an element in light DOM can't use the ID reference of an element in shadowDOM to associate the elements with one another, and vice versa. 

The following resources explain the problem in more detail, provide examples, and potentially some workarounds or future proposals:

- Alice Boxhall's [How Shadow DOM and accessibility are in conflict](https://alice.pages.igalia.com/blog/how-shadow-dom-and-accessibility-are-in-conflict/)
- Nolan Lawson's [Shadow DOM and accessibility: the trouble with ARIA](https://nolanlawson.com/2022/11/28/shadow-dom-and-accessibility-the-trouble-with-aria/)
- Leo Balter's [Cross-root ARIA](https://github.com/leobalter/cross-root-aria-delegation/blob/main/explainer.md) explainer

## Recommended Practices

### Refer to pre-existing accessible patterns

Rather than reinventing the wheel, the best way to approach making a component accessible is to refer to an existing HTML element or an established pattern pattern. Some examples of existing patterns can be found in the WAI ARIA Authoring Practices Guide, Deque University Code Library, and Heydon Pickering's Inclusive Components.

#### WAI ARIA Authoring Practices Guide

The [WAI ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg) includes [patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) and [practices](https://www.w3.org/WAI/ARIA/apg/practices/) for making components accessible. Contributors should refer to the pattern that best matches the compontent they are building when considering the following:
- keyboard navigation
- WAI-ARIA roles, states and properties.

#### Deque University Code Library

Deque Systems is an accessibility solution provider that offers training via its Deque University. [Deque University's Code Library](https://dequeuniversity.com/library/) is a bet project that includes the Cauldron Pattern Library and ARIA examples. Contributors may also refer to examples in this code library. Each example includes the HTML, CSS and JavaScript.

#### Inclusive Components

Heydon Pickering describes his [Inclusive Components](https://inclusive-components.design) as "a blog trying to be a pattern library, with a focus on inclusive design". Each post covers a specific type of component, such as a card or a data table, and provides a step by step explanation of how to make it more accessible. A more comprehensive list of components can be found in the [Inclusive Components book](http://book.inclusive-components.design/).

### Use applicable accessibility controllers.

When applicable use [controllers](https://lit.dev/docs/api/controllers/) for accessible keyboard navigation as well as ARIA roles, states and properties. Examples of our `@patternfly/pfe-core/controllers` are listed below:

- `internals-controller`: Attaches internals to a component so that ARIA roles, states and properties can be set internally and not altered by consumers.
- `listbox-controller`: Sets keyboard navigation as well as ARIA roles, states and properties for a listbox host and its options.
- `roving-tabindex-controller`: Used for groups of elements that are more easily navigated with arrow keys instead of the <kbd>Tab</kbd> key. This controller is preferred over aria-activedescendant, which is challenging to until there is a solution for cross-root ARIA. 
- `toggle-controller`: Sets keyboard navigation as well as ARIA roles, states and properties for a popup that with show/hid toggling.

### Minimize posssibility of consumer errors.