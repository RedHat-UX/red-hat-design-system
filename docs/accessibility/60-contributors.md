---
title: Contributors
tags: accessibility
---

## Overview

{% alert title="Note" %}
This section covers accessibility for design system contributors. Contributors should also be familiar with accessibility [fundamentals](../fundamentals), [content](../content), [design](../design), and [development](../design).
{% endalert %}

## Concerns

### Disabled components
For compostite components, such as fieldsets, radio groups, menus, and listboxes, [WAI-ARIA recommends](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#focusabilityofdisabledcontrols) that elements of a disabled composite components remain focusable.

Users should still be able to read options within the composite group even if they cannot activate or trigger them.  For example, a disabled dropdown menu should allow users to toggle it open via keyboard and focus on options even if activating the options is disabled.

### Using ARIA with shadowDOM
Currently there is no way to associate aria attributes with elements in different DOM trees. So an element in light DOM can't use the ID reference of an element in shadowDOM to associate the elements with one another, and vice versa. 

The following resources explain the problem in more detail, provide examples, and potentially some workarounds or future proposals:

- Alice Boxhall's [How Shadow DOM and accessibility are in conflict](https://alice.pages.igalia.com/blog/how-shadow-dom-and-accessibility-are-in-conflict/)
- Nolan Lawson's [Shadow DOM and accessibility: the trouble with ARIA](https://nolanlawson.com/2022/11/28/shadow-dom-and-accessibility-the-trouble-with-aria/)
- Leo Balter's [Cross-root ARIA](https://github.com/leobalter/cross-root-aria-delegation/blob/main/explainer.md) explainer

## Recommended Practices

### Refer to pre-existing accessible patterns.

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

### Increase the likelihood consumers will use components accessibily.

Place as much of the accessibility burden as possible on component itself rather than the consumer's user of it. Ensure that components are excessible by default for the vast majority of use cases. Make it harder to make a component inaccessible. The rarer, more customized use cases where accessibility errors tend to be more likely should require more advanced knowledge of the  component API.