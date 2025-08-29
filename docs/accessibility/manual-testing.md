---
title: Manual testing
sidenavTitle: Manual testing
permalink: /accessibility/manual-testing/index.html
order: 80
tags:
  - accessibility
---

<style data-helmet>
  rh-blockquote {
    display: block;
    margin-block: 2rem;
    margin-inline-start: 2.5rem;
  }
</style>

<script type="module" data-helmet>
  import '@rhds/elements/rh-blockquote/rh-blockquote.js';
</script>

If you're getting started with accessibility after you already have web properties out in the wild, your first experiences with accessibility testing will likely be in an effort to remediate these experiences. But learning to shift left on accessibility—incorporating it earlier in your processes—can ultimately save time and help ensure your projects are inclusive at launch.

<rh-blockquote>
  <p>"When you call something an edge case, you're really just defining the limits of what you care about."</p>
  <span slot="author">Eric Meyer</span>
</rh-blockquote>

Making accessibility testing part of your pre-launch QA allows designers, developers, and content writers to revisit their work before they’ve moved on to the next project. Better still, you can incorporate role-based testing in each phase of your project, so issues can be avoided before handoffs between creators.

Designers can evaluate their designs for things like color contrast, honest affordance of interactive items, visually-meaningful reading/focus order of elements, etc. Writers can check their source documentation for a logical content outline, clearly-written labels and instructions for forms, appropriate alternative text for images, and so on. And developers can test their work (and the content that was handed off to them) right in the browser.

Keep in mind that testing isn’t easy. With many accessibility checks being judgment calls (what constitutes good alt text or clear form instructions?), even [experts disagree on accessibility][conformancechallenges]. Seek perfection, but accept progress along the way. Fix obvious errors, and use your best judgment with other potential issues—asking other subject matter experts as you go, if you have access to them.

## Testing technologies

When testing web pages for accessibility, the following five tools are
invaluable:

- Your keyboard
- A screen reader
- A color contrast checker
- The [browser inspector][browserinspector]
- Accessibility tools for [CI/CD pipelines][cicdpipelines]

### Keyboard testing

If you do nothing else to test your projects, try navigating the entire
experience with your keyboard, via the following keys:

- _<kbd>Tab</kbd> and <kbd>shift+tab</kbd>_ to move forward and backward between focusable items (e.g., links, form controls, and scrollable windows).
- _Arrow keys (<kbd>↑ → ↓ ←</kbd>)_ to scroll windows, to operate form controls and tab interfaces, and to navigate through groups of focusable items (like sections of an accordion or options in a menu).
- _<kbd>Enter</kbd> and/or <kbd>Space</kbd>_ to follow links, activate buttons, select list items, and trigger other interactive items, as appropriate.

### Screen readers

If you’re feeling ambitious and want to combine testing tasks, perform your keyboard testing with a screen reader turned on.

We have a [page covering the basics of screen reader testing][srtest] on Mac, Windows, Linux, iOS, and Android platforms.

### Color contrast checkers

A [plurality of web accessibility issues][contrastissues] stem from insufficient color contrast. But unless you’re a math genius who can calculate the [relative luminance of RGB colors][relativeluminanceofrgbcolors] in your head, contrast is difficult to test without the help of tools.

TPGi’s [Colour Contrast Analyzer][colourcontrastanalyzer] is a free Mac and Windows application that helps you measure contrast between colors via an eyedropper tool (which lets you test the color of any pixel on your screen) or by typing in color values.

If you’re either not on a device where you can install TPGi’s tool or just want a quick gut check, WebAIM has an [online contrast checker][aimcc] that allows you to type in foreground and background color values.

[conformancechallenges]: https://www.w3.org/TR/accessibility-conformance-challenges/#themes-from-research
[browserinspector]: /accessibility/accessibility-tools/#browser-inspectors
[cicdpipelines]: /accessibility/ci-cd/
[srtest]: /accessibility/screen-readers/
[contrastissues]: https://webaim.org/projects/million/#contrast
[colourcontrastanalyzer]: https://www.tpgi.com/color-contrast-checker/
[relativeluminanceofrgbcolors]: https://www.w3.org/TR/WCAG22/#dfn-relative-luminance
[aimcc]: https://webaim.org/resources/contrastchecker/
