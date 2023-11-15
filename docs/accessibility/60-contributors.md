---
title: Contributors
tags: accessibility
---

## Overview

{% alert title="Note" %}
This section covers accessibility for design system contributors. Contribultrs should also be familiar with accessibility [fundamentals](./fundamentals), [content](./content), [design](./design), and [development](./design).
{% endalert %}

## Accessible patterns

Rather than reinventing the wheel, the best way to approach making a component accessible is to refer to an existing pattern. 

### WAI ARIA Authoring Practices Guide

The World Wide Web Consortium (W3C) has created the Web Accessibility Inisiative (WAI) ARIA [Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg). The guide includes [patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) and [practices](https://www.w3.org/WAI/ARIA/apg/practices/) for making components accessible. Contributors should refer to the pattern that best matches the compontent they are building when considering the following:
- keyboard navigation
- WAI-ARIA roles, states and properties.

### Deque University Code Library

Deque Systems is an accessibility solution provider that offers training via its Deque University. [Deque University's Code Library](https://dequeuniversity.com/library/) is a bet project that includes the Cauldron Pattern Library and ARIA examples. Contributors may also refer to examples in this code library. Each example includes the HTML, CSS and JavaScript.

### Inclusive Components

Heydon Pickering describes his [Inclusive Components](https://inclusive-components.design) as "a blog trying to be a pattern library, with a focus on inclusive design". Each post covers a specific type of component, such as a card or a data table, and provides a step by step explanation of how to make it more accessible. A more comprehensive list of components can be found in the [Inclusive Components book](http://book.inclusive-components.design/).

## Interactivity

### Keyboard Accessibility
- Ensure that all interactive elements can be accessed via keyboard exactly as they appear in the DOM as well as visibly.
- Ensure that focus is clearly visible.
- Replicate expect kayboard interaction patterns of native elements or of accepted [accessible patterns](#accessible-patterns).
- Don't change content on a focus event. 

### When/how to show/hide new content (pop ups, tooltips, etc.) (https://www.ibm.com/able/toolkit/develop/dynamic-updates)

## Minimize chance for consumer errors.

## Accessibility controllers

When applicable use [controllers](https://lit.dev/docs/api/controllers/) for accessible keyboard navigation as well as ARIA roles, states and properties. Examples of our `@patternfly/pfe-core/controllers` are listed below:

- `internals-controller`: Attaches internals to a component so that ARIA roles, states and properties can be set internally and not altered by consumers.
- `listbox-controller`: Sets keyboard navigation as well as ARIA roles, states and properties for a listbox host and its options.
- `roving-tabindex-controller`: Used for groups of elements that are more easily navigated with arrow keys instead of the <kbd>Tab</kbd> key.
- `toggle-controller`: Sets keyboard navigation as well as ARIA roles, states and properties for a popup that with show/hid toggling.

## Cross-root ARIA

