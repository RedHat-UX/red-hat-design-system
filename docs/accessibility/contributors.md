---
title: Contributors
tags:
  - accessibility
order: 50
---

## Overview

<rh-alert state="info">
  <h3 slot="header">Note</h3>
  <p>This section covers accessibility for design system contributors. Contributors should also be familiar with accessibility <a href="../">fundamentals</a>, <a href="../content">content</a>, <a href="../design">design</a>, and <a href="../development">development</a>.</p>
</rh-alert>

## ARIA issues with shadowDOM

Currently, there is no way to associate ARIA attributes with elements in different DOM trees. So an element in light DOM can't use the ID reference of an element in shadowDOM to associate elements with one another, and vice versa (e.g., via aria-labelledby, aria-describedby, etc.).

The following resources explain the problem in more detail and provide some workarounds, examples, and future proposals:

- Alice Boxhall's [How Shadow DOM and accessibility are in conflict](https://alice.pages.igalia.com/blog/how-shadow-dom-and-accessibility-are-in-conflict/)
- Nolan Lawson's [Shadow DOM and accessibility: the trouble with ARIA](https://nolanlawson.com/2022/11/28/shadow-dom-and-accessibility-the-trouble-with-aria/)
- Leo Balter's [Cross-root ARIA](https://github.com/leobalter/cross-root-aria-delegation/blob/main/explainer.md) explainer

## Accessibility controllers

Where applicable, use [controllers](https://lit.dev/docs/api/controllers/) for accessible keyboard navigation as well as ARIA roles, states and properties. Examples of our @patternfly/pfe-core/controllers are listed below:

- `internals-controller`: Attaches internals to a component so that ARIA roles, states and properties can be set internally and not altered by consumers.
- `listbox-controller`: Sets keyboard navigation and ARIA roles, states, and properties for a listbox host and its options.
- `roving-tabindex-controller`: Used for groups of elements that are more easily navigated with arrow keys instead of the <kbd>tab</kbd> key. This controller is preferred over aria-activedescendant, which will be challenging until there is a solution for cross-root ARIA.
- `toggle-controller`: Sets keyboard navigation and ARIA roles, states, and properties for a popup with show/hide toggling.

## Authoring tool accessibility guidelines (ATAG)

Help authors (and consumers) use the component in a manner that is accessible. The [Authoring Tool Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/atag/) (ATAG) 2.0 provide guidelines for content authoring tools. [ATAG 2.0 Part B](https://www.w3.org/TR/ATAG20/#part_b) is concerned with helping others create accessible content. While a Web Component itself is not an authoring tool, components can be used within content management systems and other authoring tools. So, we should develop our components in a way that consumers (whether developers or content authors using tools and templates that developers have created) can easily make accessible content with them.

- Place as much of the accessibility burden as possible on the component itself, rather than the consumer's use of it.
- Limit slots and properties so only a small-but-frequently-used number of combinations are possible. Then, create tests and demos to verify that these combinations are accessible.
- If additional customizations are required, these can be achieved via a limited set of CSS properties and variables, where the consumer assumes responsibility for potential accessibility issues.
