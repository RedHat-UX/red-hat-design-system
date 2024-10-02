---
title: Accessibility tools
sidenavTitle: Accessibility tools
permalink: /accessibility/accessibility-tools/index.html
tags:
  - accessibility
order: 10
importElements:
  - rh-blockquote
---

## Automated Accessibility Tools

Automated tools can help you quickly identify many potential high-impact accessibility issues. Among such tools are free browser extensions like:

- Deque’s aXe DevTools
- WebAIM’s WAVE
- IBM's Equal Access Checker

### Deque aXe DevTools

Tucked away in your browser’s DevTools panel after installation, Deque’s aXe DevTools extension scans your page for accessibility issues and best practices, and then returns a text list of results and code callouts. With its ability to export results, aXe DevTools is also useful for documentation, reports, and issue tracking.

Different WCAG versions (2.0 through 2.2) and conformance levels (A through AAA) can be specified in the extension’s settings. (At Red Hat, we target WCAG 2.1 AA.) And you can toggle best practices results on and off, depending on whether you’re interested solely in strict WCAG conformance. You can read the full list of rules being tested at the [axe-core GitHub repository](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md).

The [aXe DevTools extension](https://www.deque.com/axe/devtools/) is available for Chrome, Firefox, and Edge. The free version allows you to test entire pages. The paid Pro version adds the capability to specify page sections for testing, provides additional export options, and also includes some guided walkthroughs for further testing.

### WebAIM WAVE

WAVE is an accessibility checker that’s particularly useful for visual users who prefer to see issues and alerts in context: kind of an augmented reality for the browser window. It may return some false positive results on color contrast, but such issues should always be manually confirmed, anyway. (And sometimes, what looks to be a false positive is a legitimate error, once you start digging into the CSS!)

Getting started with WAVE is simple. Just go to a page, click the extension button, and it annotates your screen with icons, based on topic (e.g., headings, color contrast issues, etc.). But it’s more than just a visual tool. Clicking on annotations often gives you the option to view relevant in-page code and WCAG criteria.
The [WAVE browser extension](https://wave.webaim.org/) is available for Chrome, Firefox, and Edge.

### IBM Equal Access Checker

Like aXe DevTools, IBM’s free Equal Access Checker resides in your browser’s DevTools panel after installation. When run, Equal Access Checker returns a text list of detected violations, warnings, and/or recommendations, depending on your preferences.

Running Equal Access Checker in conjunction with a tool like aXe DevTools can be useful for detecting a wider array of violations than either tool alone. And surfacing violations common to both tools may help you identify higher-risk issues.

In addition to WCAG versions 2.0, 2.1, and 2.2, Equal Access Checker can run scans based on IBM’s internal accessibility target. Currently, this target includes all of WCAG 2.1 AA, plus some additional U.S. (Section 508) and European (EN 301 549) standards not covered by WCAG. IBM has posted the [Equal Access testing ruleset](https://www.ibm.com/able/requirements/checker-rule-sets) at their accessibility site.

[Equal Access Checker](https://www.ibm.com/able/toolkit/tools/#develop) can be installed as a browser extension in Chrome, Firefox, and Edge. It’s also available as CI/CD Node packages.

## Browser inspectors

You can’t just view a page’s source and trust that the code you’re seeing there reflects what the browser is interpreting. Inspecting elements shows what’s really going on with them—after they’ve been inserted, modified, or deleted by JavaScript.

With or without any other browser extensions or bookmarklets, using the inspector is often the surest way to verify the status of HTML elements and attributes like heading levels, alt text, ARIA attributes and so on. You can use the inspector to view and edit the CSS values of properties like color, line-height, text-decoration, etc. And the browser’s console can alert you to JavaScript issues.

### Accessibility tools built into the browser inspector

Many modern desktop browsers now have accessibility-specific tools incorporated into their inspectors.

#### Chrome & Edge

Google's Chrome and Microsoft's Edge browsers have several accessibility tools built into DevTools. One of the most straightforward tools to use is [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/). Lighthouse can test for performance, best practices, accessibility, and SEO. It gives a page a score from 0-100% in each of these categories.

<figure>
  <uxdot-example width-adjustment="900px">
    <img src="/assets/accessibility/lighthouse-audit.png" alt="Screenshot of a Lighthouse autdit with a score of 100%.">
  </uxdot-example>
</figure>

Running an accessibility audit in Lighthouse is recommended to catch errors detectable via automated tooling.

Chrome and Edge also have an "Accessibility Pane" that lets users see information about the currently selected DOM node. This includes properties like:

- An element's role
- If an element is focusable
- If the element contains any `aria` attributes and their values
- An element's title
- ...and many other accessibility-related properties

<figure>
  <uxdot-example width-adjustment="893px">
    <img src="/assets/accessibility/accessibility-pane.png" alt="Screenshot of the accessibility pane on a ux.redhat.com page with three numbers identifying key features.">
  </uxdot-example>
  <figcaption>
    To view the Accessibility Pane, open DevTools then click:
    <ol style="font-size: var(--rh-font-size-body-text-md, 1rem);">
      <li>Accessibility</li>
      <li>Highlight the element you wish to inspect</li>
      <li>View the element's accessibility properties</li>
    </ol>
  </figcaption>
</figure>

Users can optionally check "Enable full-page accessibility tree" to change what's shown in the Elements panel. Doing so will transform the HTML in Elements into a representation of how assistive technology interprets the current page's DOM structure.

<figure>
  <uxdot-example width-adjustment="1167px">
    <img src="/assets/accessibility/accessibility-tree-view.png" alt="Screenshot showing the rendered page content in the browser on the left and the same content in the accessibility tree view on the right in DevTools">
  </uxdot-example>
  <figcaption>
    Inspecting the Alert (left) with the full-page accessibility tree enabled reveals its accessible properties (right).
  </figcaption>
</figure>

Visit Chrome's page on [accessibility features within Chrome DevTools](https://developer.chrome.com/docs/devtools/accessibility/reference/) to dig deeper.

#### Firefox

While not identical to Chrome and Edge's accessibility tree, Firefox has a dedicated "Accessibility" tab in its DevTools. They refer to it in their docs as the [Firefox’s accessibility inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/).

The Firefox accessibility inspector is largely the same as Chrome and Edge's. You can view the structure of the DOM as interpreted by assistive technology and view a specific element's accessibility properties.

One neat feature included within Firefox's accessibility inspector is the ability to "Show Tabbing Order". This adds numbered markers to the page which visually demonstrates where each focusable element lands in the tab order.

<figure>
  <uxdot-example width-adjustment="994px">
    <img src="/assets/accessibility/firefox-show-tab-order.png" alt="Screenshot of a page with 'Show Tabbing Order' checked. Each tab stop shows its tab stop number inside a pip.">
  </uxdot-example>
  <figcaption>
    A page in Firefox with visually numbered tab stops via the Firefox feature, "Show Tabbing order".
  </figcaption>
</figure>

#### Safari

Safari's DevTools does not have an accessibility tree feature; however, it does have an "Audit" tab that checks a page for accessibility. This automated checker contains 22 automated tests and outputs a score from 0-100%. Handily, the "Audit" tab also keeps a record of each audit you performed so that you can track your progress or export the report.

Learn more about the Audit tab in Safari in [WebKit's official documentation](https://webkit.org/web-inspector/audit-tab/).
