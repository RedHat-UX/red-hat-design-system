---
title: Development
tags: accessibility
---

## Overview

{% alert title="Note" %}
This section covers development accessibility. Developers should also be familiar with accessibility [fundamentals](../), [content](../content), and [design](../design).
{% endalert %}

While our elements themselves were developed and tested with accessibility, components can still be rendered inaccessible in how they are used. The HTML slotted within a component could be inaccessible, or CSS variables and part selectors could be used in a way that renders the component inaccessible. Therefore, you should always consider how your particular use of a component may impact its accessibility.

## Icons and SVGs

### Meaningful icons

Icons must adhere to the same accessibility rules as other images. When icons are used for interactivity (e.g., as buttons or links), they are considered meaningful, unless they are either accompanied by sufficient text within that interactive element, or the interactive element itself is already labeled (e.g., via `aria-label`).
Visit our [Content section](https://deploy-preview-1340--red-hat-design-system.netlify.app/accessibility/content) for more information on image accessibility.

### Avoiding icon fonts

Icon fonts are a nifty visual hack that you shouldn’t use.

- They put your site at risk of failing [WCAG Success Criterion 1.1.1](https://www.w3.org/WAI/WCAG21/Techniques/failures/F3.html). 
- Because assistive tech can’t reliably interpret them, the icons may be rendered “[inaccurate, nonsensical, redundant, or unpredictable](https://www.w3.org/WAI/GL/wiki/Icon_Font_with_an_On-Screen_Text_Alternative).”  
- And if the font file doesn’t load (or is overridden by the user), the icons may not display properly for visual users.

To make icon fonts accessible, you often have to re-hack what’s already a hack. So best just to avoid them altogether.

### SVG accessibility

#### Describing SVGs

As with any other image, SVGs that are loaded into your page via an `<img>` tag should include alt attributes. This attribute should be descriptive for meaningful SVGs and null for decorative SVGs. In addition, we recommend adding a role="img" attribute to the `<img>` element for SVGs:

```
<img src="logo.jpg" alt="Image description" role="img">
```

Inline `<svg>` elements (i.e., SVGs that are coded directly into the page source) cannot use the alt attribute. You must use some other means to describe or hide these images.
Instead of an alt attribute, an `<svg>` element comprising a simple image can include the role="img" attribute and contain a descriptive `<title>` element as its first child, like in the following example:

```
<svg xmlns="http://www.w3.org/2000/svg" role="img">
  <title>Image description</title>
  ...
</svg>
```

More complex `<svg>` elements may require additional descriptive information. One way of including this      information is via the `<desc>` element:

```
<svg xmlns="http://www.w3.org/2000/svg" role="img">
  <title>Basic image description</title>
  <desc>More info on the image</desc>
  …
</svg>

```

#### Hiding SVGs

You can hide inline `<svg>` elements with an `aria-hidden="true"` attribute.

```
<svg aria-hidden="true">
  …
</svg>
```

Carie Fisher explores several patterns (including the above) for embedding accessible SVGs in her 2021 [Smashing Magazine article](https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison/).

## Web standards and semantics

The W3C establishes standards for the web. Browsers work according to these standards. And assistive technology, like screen readers, are designed to work with this standard as well. When everything follows the same standard, it’s easy to be accessible. It’s what we do outside of the standards that has potential to make the web inaccessible. 

Semantic HTML, using the standard HTML tags based on their meaning, is how we can communicate our intent to both the browser and the assistive technology. For example, `<a>` and `<h1>` indicate meaning while `<div>` and `<span>` do not. For interactive components that aren’t covered by semantic HTML, there is the Accessible Rich Internet Applications (ARIA) W3C specification. ARIA also allows us to specify certain regions of a page as [landmarks](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/) that screen reader users can skip to.

So to ensure your work is accessible, do the following:

- **Start by using semantic HTML as it was intended.** For example, use `<a>` for links and `<button>` for buttons, as they are already built to work the way they should work.
- **Markup order, visual order, and focus order should match.** Ensure that assistive technology read order and keyboard focus order follow what is presented visually.
- **When there is no standard HTML for a UI component, use ARIA.** For example, there is no semantic HTML for a [tabs component](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/#wai-ariaroles,states,andproperties), so you’ll need to include some ARIA roles, states and properties to supply additional meaning to assistive technology.
- **Use ARIA landmarks, but in a limited number.** Think of landmarks as shortcuts on a page, if there are too many of them, then they cease to be shortcuts.

## Accessible patterns

The best approach for making a component accessible is to refer to an existing HTML element or an established pattern. You can find examples of existing patterns in the following resources:

### WAI ARIA authoring practices guide

The [WAI ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg) includes [patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) and [practices](https://www.w3.org/WAI/ARIA/apg/practices/) for making components accessible. Contributors should refer to the pattern that best matches the component they are building when considering the following:

- keyboard navigation
- WAI-ARIA roles, states and properties.

### Deque University Code Library

Accessibility solution provider Deque Solutions offers training via its educational arm, Deque University. [Deque University's Code Library](https://dequeuniversity.com/library/) is a beta project that includes the Cauldron Pattern Library and ARIA examples. Contributors may also refer to examples in this code library. Each example includes all applicable HTML, CSS and JavaScript.

### Inclusive Components

Heydon Pickering describes his [Inclusive Components](https://inclusive-components.design/) as "a blog trying to be a pattern library, with a focus on inclusive design." Each post covers a specific type of component—like a card or a data table—and provides a step-by-step explanation of how to make it more accessible. A more comprehensive list of components can be found in the [Inclusive Components book](http://book.inclusive-components.design/).

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

### Disabled elements
For disabled composite components, such as fieldsets, radio groups, menus, and listboxes, [WAI-ARIA recommends(https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#focusabilityofdisabledcontrols)] that elements of these components remain focusable.

Users should still be able to read options within the composite group even if they cannot activate or trigger them. For example, a disabled dropdown menu should allow users to toggle it open via keyboard and focus on options even when activating the options is disabled.

### Mouse and focus events

https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/
Focus order and roving tabindex

### Keyboard traps
Some resources…
- WCAG 2.1.2: No keyboard trap
- WCAG 2.1, Technique G21: Ensuring that users are not trapped in content
- CSUN: Web Accessibility Criteria - Keyboard Traps


## Error Handling

The following World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.1 A and AA apply to error handling:

- Use text to identify and describe errors that are automatically detected. (See [3.3.1 Error Identification - Level A](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html).)
- Use text labels and instructions for user input. (See [3.3.2 Labels or Instructions - Level A](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html).)
- Provide text suggestions for user errors that are automatically detected. (See [3.3.3 Error Suggestion - Level AA](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html).)
- Ensure that submissions are reversible, checked, or confirmed. (See [3.3.4 Error Prevention (Legal, Financial, Data) - Level AA](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html).)

## Scaling and rotation

### Accounting for text scaling and spacing

Your pages should permit users without assistive tech to scale text to at least 200% of its original size in the browser (e.g., via command-plus or control-plus on desktop, and pinch to zoom on touchscreens). Scaled text must all still be functional and visible after such scaling. That means no overlapping, clipping, or unexpected separation of content. (See [1.4.4: Resize Text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text))

To give users more control over scaling, font sizes specified in CSS should be set via relative measurements (e.g., em, rem, etc.) rather than absolute sizes (e.g., px, pt, etc.). This applies not only to body copy, but also to form element text. (See [1.4.4: Resize Text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text))

Content and functionality must also be maintained if users override the following text styles: line-height (up to 1.5× the font size), paragraph spacing (up to 2× the font size), letter spacing (up to .12× the font size), and word spacing (up to .16× the font size). (See [1.4.12: Text Spacing](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing))

### Screen rotation

Mobile users must be permitted to reorient their screen at will between landscape/portrait, without any messages requesting that they select a particular orientation. (See [1.3.4: Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html))