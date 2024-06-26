---
title: QA and Testing
sidenavTitle: QA and Testing
permalink: /accessibility/qa-testing/index.html
tags:
  - accessibility
order: 50
importElements:
  - rh-blockquote
  - rh-table
---

<link rel="stylesheet" href="{{ '/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css' | url }}">
<link rel="stylesheet" href="{{ '/styles/samp.css' | url }}">

<style>
  .page-spacing .container rh-table {
    margin-block-end: var(--rh-space-3xl, 48px);
  }

  rh-blockquote {
    display: block;
    margin-block: 2em !important;
    max-width: 36em;
  }
</style>

## Accessibility tools

Automated tools can help you quickly identify many potential high-impact accessibility issues. Among such tools are free browser extensions like WebAIM’s WAVE, Deque’s axe DevTools, and IBM's Equal Access Checker.

### WebAIM WAVE

WAVE is an accessibility checker that’s particularly useful for visual users who prefer to see issues and alerts in context: kind of an augmented reality for the browser window. It may return some false positive results on color contrast, but such issues should always be manually confirmed, anyway. (And sometimes, what looks to be a false positive is a legitimate error, once you start digging into the CSS!)

Getting started with WAVE is simple. Just go to a page, click the extension button, and it annotates your screen with icons, based on topic (e.g., headings, color contrast issues, etc.). But it’s more than just a visual tool. Clicking on annotations often gives you the option to view relevant in-page code and WCAG criteria.
The [WAVE browser extension](https://wave.webaim.org/) is available for Chrome, Firefox, and Edge.

### Deque axe DevTools

Tucked away in your browser’s DevTools panel after installation, Deque’s axe DevTools extension scans your page for accessibility issues and best practices, and then returns a text list of results and code callouts. With its ability to export results, axe DevTools is also useful for documentation, reports, and issue tracking.

Different WCAG versions (2.0 through 2.2) and conformance levels (A through AAA) can be specified in the extension’s settings. (At Red Hat, we target WCAG 2.1 AA.) And you can toggle best practices results on and off, depending on whether you’re interested solely in strict WCAG conformance. You can read the full list of rules being tested at the [axe-core GitHub repository](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md).

The [axe DevTools extension](https://www.deque.com/axe/devtools/) is available for Chrome, Firefox, and Edge. The free version allows you to test entire pages. The paid Pro version adds the capability to specify page sections for testing, provides additional export options, and also includes some guided walkthroughs for further testing.

### IBM Equal Access Checker

Like axe DevTools, IBM’s free Equal Access Checker resides in your browser’s DevTools panel after installation. When run, Equal Access Checker returns a text list of detected violations, warnings, and/or recommendations, depending on your preferences.

Running Equal Access Checker in conjunction with a tool like axe DevTools can be useful for detecting a wider array of violations than either tool alone. And surfacing violations common to both tools may help you identify higher-risk issues.

In addition to WCAG versions 2.0, 2.1, and 2.2, Equal Access Checker can run scans based on IBM’s internal accessibility target. Currently, this target includes all of WCAG 2.1 AA, plus some additional U.S. (Section 508) and European (EN 301 549) standards not covered by WCAG. IBM has posted the [Equal Access testing ruleset](https://www.ibm.com/able/requirements/checker-rule-sets) at their accessibility site.

[Equal Access Checker](https://www.ibm.com/able/toolkit/tools/#develop) can be installed as a browser extension in Chrome, Firefox, and Edge. It’s also available as CI/CD Node packages.

## Testing

If you're getting started with accessibility after you already have web properties out in the wild, your first experiences with accessibility testing will likely be in an effort to remediate these experiences. But learning to shift left on accessibility—incorporating it earlier in your processes—can ultimately save time and help ensure your projects are inclusive at launch.

<rh-blockquote>
    <p>"When you call something an edge case, you're really just defining the limits of what you care about."</p>
    <span slot="author">Eric Meyer</span>
</rh-blockquote>

Making accessibility testing part of your pre-launch QA allows designers, developers, and content writers to revisit their work before they’ve moved on to the next project. Better still, you can incorporate role-based testing in each phase of your project, so issues can be avoided before handoffs between creators.

Designers can evaluate their designs for things like color contrast, honest affordance of interactive items, visually-meaningful reading/focus order of elements, etc. Writers can check their source documentation for a logical content outline, clearly-written labels and instructions for forms, appropriate alternative text for images, and so on. And developers can test their work (and the content that was handed off to them) right in the browser.

Keep in mind that testing isn’t easy. With many accessibility checks being judgment calls (what constitutes good alt text or clear form instructions?), even [experts disagree on accessibility](https://www.w3.org/TR/accessibility-conformance-challenges/#themes-from-research). Seek perfection, but accept progress along the way. Fix obvious errors, and use your best judgment with other potential issues—asking other subject matter experts as you go, if you have access to them.

### Testing technologies

When manually testing web pages for accessibility, the following four tools are invaluable:

- Your keyboard
- A screen reader
- A color contrast checker
- The browser inspector

#### Keyboard testing

If you do nothing else to test your projects, try navigating the entire experience with your keyboard, via the following keys:

- _<kbd>Tab</kbd> and <kbd>shift+tab</kbd>_ to move forward and backward between focusable items (e.g., links, form controls, and scrollable windows).
- _Arrow keys (<kbd>↑ → ↓ ←</kbd>)_ to scroll windows, to operate form controls and tab interfaces, and to navigate through groups of focusable items (like sections of an accordion or options in a menu).
- _<kbd>Enter</kbd> and/or <kbd>Space</kbd>_ to follow links, activate buttons, select list items, and trigger other interactive items, as appropriate.

#### Screen readers

If you’re feeling ambitious and want to combine testing tasks, perform your keyboard testing with a screen reader turned on. The screen reader you use for testing depends on the operating system and browser you wish to test.

<rh-table>
  <table>
    <caption>
      Browser and screen reader pairings
    </caption>
    <thead>
      <tr>
        <th scope="col" data-label="OS">Operating system</th>
        <th scope="col" data-label="Browser">Browser</th>
        <th scope="col" data-label="Reader">Screen reader</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="OS">MacOS</td>
        <td data-label="Browser">Safari</td>
        <td data-label="Reader"><a href="https://support.apple.com/guide/voiceover/turn-voiceover-on-or-off-vo2682/mac">VoiceOver for Mac</a> (included with MacOS)</td>
      </tr>
      <tr>
        <td data-label="OS">Windows</td>
        <td data-label="Browser">Firefox</td>
        <td><a href="https://www.nvaccess.org/download/">NVDA</a> (free download)</td>
      </tr>
      <tr>
        <td data-label="OS">Windows</td>
        <td data-label="Browser">Chrome</td>
        <td data-label="Reader"><a href="https://www.freedomscientific.com/products/software/jaws/">JAWS</a> (paid)</td>
      </tr>
      <tr>
        <td data-label="OS">Linux</td>
        <td data-label="Browser">Firefox</td>
        <td data-label="Reader"><a href="https://help.gnome.org/users/orca/stable/index.html.en">Orca</a> (included with GNOME desktop environment)</td>
      </tr>
      <tr>
        <td data-label="OS">Android</td>
        <td data-label="Browser">Chrome</td>
        <td data-label="Reader"><a href="https://support.google.com/accessibility/android/answer/6283677?hl=en&amp;ref_topic=10601571&amp;sjid=4695144848639410734-NC">Talkback</a> (included with Android)</td>
      </tr>
      <tr>
        <td data-label="OS">iOS</td>
        <td data-label="Browser">Safari</td>
        <td data-label="Reader"><a href="https://support.apple.com/en-sa/guide/iphone/iph3e2e415f/ios">VoiceOver for iOS</a> (included with iOS)</td>
      </tr>
    </tbody>
  </table>
</rh-table>

Deque offers a collection of [screen reader shortcuts](https://dequeuniversity.com/screenreaders/) for all of the above listed technologies.

#### Color contrast checkers

A [plurality of web accessibility issues](https://webaim.org/projects/million/#contrast) stem from insufficient color contrast. But unless you’re a math genius who can calculate the [relative luminance of RGB colors](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) in your head, contrast is difficult to test without the help of tools.

TPGi’s [Colour Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/) is a free Mac and Windows application that helps you measure contrast between colors via an eyedropper tool (which lets you test the color of any pixel on your screen) or by typing in color values.

If you’re either not on a device where you can install TPGi’s tool or just want a quick gut check, WebAIM has an [online contrast checker](https://webaim.org/resources/contrastchecker/) that allows you to type in foreground and background color values.

#### Browser inspector

You can’t just view a page’s source and trust that the code you’re seeing there reflects what the browser is interpreting. Inspecting elements shows what’s really going on with them—after they’ve been inserted, modified, or deleted by JavaScript.

With or without any other browser extensions or bookmarklets, using the inspector is often the surest way to verify the status of HTML elements and attributes like heading levels, alt text, ARIA attributes and so on. You can use the inspector to view and edit the CSS values of properties like color, line-height, text-decoration, etc. And the browser’s console can alert you to JavaScript issues.

Many modern desktop browsers now have accessibility-specific tools incorporated into their inspectors, like [Firefox’s accessibility inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/) and the [accessibility features within Chrome DevTools](https://developer.chrome.com/docs/devtools/accessibility/reference/).
