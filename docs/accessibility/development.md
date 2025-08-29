---
title: Development
tags:
  - accessibility
order: 70
---

<script data-helmet type="module">
  import '@rhds/elements/rh-alert/rh-alert.js';
  import '@rhds/elements/rh-code-block/rh-code-block.js';
</script>

<rh-alert state="info">
  <h3 slot="header">Note</h3>
  <p>This section covers development accessibility.
     Developers should also be familiar with accessibility
     <a href="/accessibility/">fundamentals</a>,
     <a href="../content/">content</a>, and
     <a href="../design/">design</a>.</p>
</rh-alert>

## Overview

While our elements themselves were developed and tested with accessibility in mind, components can still be rendered inaccessible in how they are used. The HTML slotted within a component could be inaccessible, or CSS variables and part selectors could be used in a way that renders the component inaccessible. Therefore, you should always consider how your particular use of a component may impact its accessibility.

## Icons and SVGs

### Meaningful icons

Icons must adhere to the same accessibility rules as other images. When icons are used for interactivity (e.g., as buttons or links), they are considered meaningful, unless they are either accompanied by sufficient text within that interactive element, or the interactive element itself is already labeled (e.g., via `aria-label`).
Visit our [Content section][content] for more information on image accessibility.

### Avoiding icon fonts

Icon fonts are a nifty visual hack that you shouldn’t use.

- They put your site at risk of failing [WCAG Success Criterion 1.1.1][wcag21tf3].
- Because assistive tech can’t reliably interpret them, the icons may be rendered “[inaccurate, nonsensical, redundant, or unpredictable][wcagiconfont].”
- And if the font file doesn’t load (or is overridden by the user), the icons may not display properly for visual users.

To make icon fonts accessible, you often have to re-hack what’s already a hack. So best just to avoid them altogether.

### SVG accessibility

#### Describing SVGs

As with any other image, SVGs that are loaded into your page via an `<img>` tag should include alt attributes. This attribute should be descriptive for meaningful SVGs and null for decorative SVGs. In addition, we recommend adding a role="img" attribute to the `<img>` element for SVGs:

```html rhcodeblock
<img src="logo.svg" alt="Image description" role="img" />
```

Inline `<svg>` elements (i.e., SVGs that are coded directly into the page source) cannot use the alt attribute. You must use some other means to describe or hide these images.
Instead of an alt attribute, an `<svg>` element comprising a simple image can include the role="img" attribute and contain a descriptive `<title>` element as its first child, like in the following example:

```html rh-code-block
<svg xmlns="http://www.w3.org/2000/svg" role="img">
  <title>Image description</title>
  ...
</svg>
```

More complex `<svg>` elements may require additional descriptive information. One way of including this information is via the `<desc>` element:

```html rh-code-block
<svg xmlns="http://www.w3.org/2000/svg" role="img">
  <title>Basic image description</title>
  <desc>More info on the image</desc>
  ...
</svg>
```

#### Hiding SVGs

You can hide `<svg>` elements from assistive tech with an `aria-hidden="true"` attribute.

```html rh-code-block
<svg aria-hidden="true">...</svg>
```

Carie Fisher explores several patterns (including the above) for embedding accessible SVGs in her 2021 [Smashing Magaine article][smashingmagainearticle].

## Web standards and semantics

The W3C establishes standards for the web. Browsers work according to these standards. And assistive technologies, like screen readers, are designed to work with this standard as well. When everything follows the same standard, it’s easy to be accessible. It’s what we do outside of the standards that has potential to make the web inaccessible.

Semantic HTML, using the standard HTML tags based on their meaning, is how we can communicate our intent to both the browser and assistive tech. For example, `<a>` and `<h1>` indicate meaning while `<div>` and `<span>` do not. For interactive components that aren’t covered by semantic HTML, refer to the Accessible Rich Internet Applications (ARIA) W3C specification. ARIA also allows us to specify certain regions of a page as [landmarks][landmarks] that screen reader users can skip to.

To help ensure your work is accessible:

- **Start by using semantic HTML as it was intended.** For example, use `<a>` for links and `<button>` for buttons, as they are already built to work the way they should work.
- **Markup order, visual order, and focus order should match.** Ensure that the assistive tech read order and keyboard focus order follow what is presented visually.
- **When there is no standard HTML for a UI component, use ARIA.** For example, there is no semantic HTML for a [tabs component][tabscomponent], so you’ll need to include some ARIA roles, states and properties to supply additional meaning to assistive technology.
- **Use ARIA landmarks, but in a limited number.** Think of landmarks as shortcuts on a page, if there are too many of them, they cease to be shortcuts.

## Accessible patterns

The best approach for making a component accessible is to refer to an existing HTML element or an established pattern. You can find examples of existing patterns via the following resources:

### WAI ARIA authoring practices guide

The [WAI ARIA Authoring Practices Guide (APG)][apg] includes [patterns][patterns] and [practices][practices] for making components accessible. Contributors should refer to the pattern that best matches the component they are building when considering the following:

- Keyboard navigation.
- WAI-ARIA roles, states and properties.

### Deque University Code Library

Accessibility solutions provider Deque Solutions offers training via its educational arm, Deque University. [Deque University's Code Library][dequelib] is a beta project that includes the Cauldron Pattern Library and ARIA examples. Contributors may also refer to examples in this code library. Each example includes all applicable HTML, CSS and JavaScript.

### Inclusive Components

Heydon Pickering describes his [Inclusive Components][inclusivecomponents] as "a blog trying to be a pattern library, with a focus on inclusive design." Each post covers a specific type of component—like a card or a data table—and provides a step-by-step explanation of how to make it more accessible. A more comprehensive list of components can be found in the [Inclusive Components book][inclusivecomponentsbook].

## Interactivity

The following World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.1 A and AA apply to developing interactive elements:

- Ensure that content that appears on hover or focus is dismissable, hoverable, and persistent for keyboard and mouse users. ([1.4.13 Content on Hover or Focus - Level AA][wcag22u1413])
- Ensure that all interactive elements can be accessed via keyboard. ([2.1.1 Keyboard - Level A][wcag22ukeyb])
- Allow keyboard users to navigate away from a component. ([2.1.2 No Keyboard Trap - Level A][wcag22ukeybtrap])
- Align focus order with visual order and DOM order. ([2.4.3 Focus Order - Level AA][wcag22ufocusvis])
- Ensure that the keyboard focus indicator is visible. ([2.4.7 Focus Visible - Level AA][wcag22ufocusvis])

<rh-alert state="info">
  <h3 slot="header">Tip</h3>
  <p>For more on keyboard navigation, see the WAI ARIA Authoring Practices
     Guide's (APG)
     <a href="https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/">
      Developing a Keyboard Interface</a>.</p>
</rh-alert>

### Hiding elements

The following World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.1 A and AA apply to dyanmic content:

- Ensure content that appears or disappears on changes to mouse hover or keyboard focus is dismissable, hoverable, and persistent. ([1.4.13 Content on Hover or Focus - Level AA][wcag22u1413])

<rh-alert state="info">
  <h3 slot="header">Tip</h3>
  <p>For more on dynamic content, see the Mozilla Developer Network's (MDN) <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">ARIA live regions</a>.</p>
</rh-alert>

### Disabled elements

For disabled composite components, such as fieldsets, radio groups, menus, and listboxes, [WAI-ARIA recommends][waiariarecommends]] that elements of these components remain focusable.

Users should still be able to read options within the composite group even if they cannot activate or trigger them. For example, a disabled dropdown menu should allow users to toggle it open via keyboard and focus on options even when activating the options is disabled.

### Keyboard navigation and focus events

When handling focus consider the following:

- The focus indicator should be visible.
- Some element must be in focus at all times.
- Focus is consistent and predictable.

For more information see the WAI-ARIA APG's [Fundamental Keyboard Navigation Conventions][apgkeyb] and [Discernible and Predictable Keyboard Focus][apgkeybdiscernable].

### Focus order and roving tabindex

Between components, the default method of navigating via keyboard is with the <kbd>Tab</kbd> to move to the next focusable component and <kbd><kbd>Shift</kbd>+<kbd>Tab</kbd></kbd> to move to the previous focusable component. Complex components can have multiple focusable items, so rather than force keyboard users to tab through every focusable item within each component, a [roving tabindex][rovingtabindex] should be used to allow keyboard users to <kbd>Tab</kbd>/<kbd><kbd>Shift</kbd>+<kbd>Tab</kbd></kbd> into the complex component, arrow keys to navigate within the component, and <kbd>Tab</kbd>/<kbd><kbd>Shift</kbd>+<kbd>Tab</kbd></kbd> back out of the complex component. (See the WAI-ARIA APG's [Managing Focus Within Components Using a Roving tabindex][apgkeybrti])

Our complex components, like accordion, secondary navigation, subnavigation, tabs, and tile, use this roving tabindex method via a reactive controller. (Refer to [Contributors: Accessibility controllers][accessibilitycontrollers])

### Keyboard traps

If the focus cannot be moved away from a focusable element by keyboard alone, a keyboard user can be "trapped" on the element, unable to focus on and interact with other focusable elements. See the following on avoiding keyboard traps:

- [WCAG 2.1.2: No keyboard trap][wcag212nokeyboardtrap]
- [WCAG 2.2, Technique G21: Ensuring that users are not trapped in content][wcag21techniqueg21]
- [CSUN: Web Accessibility Criteria - Keyboard Traps][csunkeyboardtraps]

## Error Handling

The following World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.1 A and AA apply to error handling:

- Use text to identify and describe errors that are automatically detected. ([3.3.1 Error Identification - Level A][wcag22uerror])
- Use text labels and instructions for user input. ([3.3.2 Labels or Instructions - Level A][wcag22ulabels])
- Provide text suggestions for user errors that are automatically detected. ([3.3.3 Error Suggestion - Level AA][wcag22uerrorsugg])
- Ensure that submissions are reversible, checked, or confirmed. ([3.3.4 Error Prevention (Legal, Financial, Data) - Level AA][wcagg22uerrorlegal])

## Scaling and rotation

### Accounting for text scaling and spacing

Your pages should permit users without assistive tech to scale text to at least 200% of its original size in the browser (e.g., via command-plus or control-plus on desktop, and pinch to zoom on touchscreens). Scaled text must all still be functional and visible after such scaling. That means no overlapping, clipping, or unexpected separation of content. ([1.4.4: Resize Text][wcag22u144])

To give users more control over scaling, font sizes specified in CSS should be set via relative measurements (e.g., em, rem, etc.) rather than absolute sizes (e.g., px, pt, etc.). This applies not only to body copy, but also to form element text. ([1.4.4: Resize Text][wcag21resize])

Content and functionality must also be maintained if users override the following text styles: line-height (up to 1.5× the font size), paragraph spacing (up to 2× the font size), letter spacing (up to .12× the font size), and word spacing (up to .16× the font size). ([1.4.12: Text Spacing][wcag21spacing])

### Screen rotation

Mobile users must be permitted to reorient their screen at will between landscape/portrait, without any messages requesting that they select a particular orientation. ([1.3.4: Orientation][wcag21orientation])

[accessibilitycontrollers]: /accessibility/contributors/#accessibility-controllers
[apg]: https://www.w3.org/WAI/ARIA/apg
[apgkeyb]: https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_generalnav
[apgkeybdiscernable]: https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#discernibleandpredictablekeyboardfocus
[apgkeybrti]: https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex
[content]: /accessibility/content/
[csunkeyboardtraps]: https://www.csun.edu/universal-design-center/web-accessibility-criteria-keyboard-traps#:~:text=Keyboard%20traps%20occur%20when%20a,menus%2C%20or%20even%20on%20hyperlinks.
[dequelib]: https://dequeuniversity.com/library/
[inclusivecomponents]: https://inclusive-components.design/
[inclusivecomponentsbook]: http://book.inclusive-components.design/
[landmarks]: https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/
[patterns]: https://www.w3.org/WAI/ARIA/apg/patterns/
[practices]: https://www.w3.org/WAI/ARIA/apg/practices/
[rovingtabindex]: https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#keyboardnavigationbetweencomponents
[smashingmagainearticle]: https://www.smashingmagaine.com/2021/05/accessible-svg-patterns-comparison/
[tabscomponent]: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/#wai-ariaroles,states,andproperties
[waiariarecommends]: https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#focusabilityofdisabledcontrols
[wcag212nokeyboardtrap]: https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html
[wcag21orientation]: https://www.w3.org/WAI/WCAG21/Understanding/orientation.html
[wcag21resize]: https://www.w3.org/WAI/WCAG21/Understanding/resize-text
[wcag21spacing]: https://www.w3.org/WAI/WCAG21/Understanding/text-spacing
[wcag21techniqueg21]: https://www.w3.org/WAI/WCAG21/Techniques/general/G21
[wcag21tf3]: https://www.w3.org/WAI/WCAG21/Techniques/failures/F3.html
[wcag22u1413]: https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html
[wcag22u144]: https://www.w3.org/WAI/WCAG21/Understanding/resize-text
[wcag22uerror]: https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html
[wcag22uerrorsugg]: https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html
[wcag22ufocusvis]: https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html
[wcag22ukeyb]: https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html
[wcag22ukeybtrap]: https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html
[wcag22ulabels]: https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html
[wcagg22uerrorlegal]: https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html
[wcagiconfont]: https://www.w3.org/WAI/GL/wiki/Icon_Font_with_an_On-Screen_Text_Alternative
