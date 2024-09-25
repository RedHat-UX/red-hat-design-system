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

When testing web pages for accessibility, the following four tools are invaluable:

- Your keyboard
- A screen reader
- A color contrast checker
- The browser inspector
- Accessibility tools for CI/CD pipelines

#### Keyboard testing

If you do nothing else to test your projects, try navigating the entire experience with your keyboard, via the following keys:

- _<kbd>Tab</kbd> and <kbd>shift+tab</kbd>_ to move forward and backward between focusable items (e.g., links, form controls, and scrollable windows).
- _Arrow keys (<kbd>↑ → ↓ ←</kbd>)_ to scroll windows, to operate form controls and tab interfaces, and to navigate through groups of focusable items (like sections of an accordion or options in a menu).
- _<kbd>Enter</kbd> and/or <kbd>Space</kbd>_ to follow links, activate buttons, select list items, and trigger other interactive items, as appropriate.

#### Screen readers

If you’re feeling ambitious and want to combine testing tasks, perform your keyboard testing with a screen reader turned on.

We have a [page covering the basics of screen reader testing](/accessibility/screen-readers/) on Mac, Windows, Linux, iOS, and Android platforms.

#### Color contrast checkers

A [plurality of web accessibility issues](https://webaim.org/projects/million/#contrast) stem from insufficient color contrast. But unless you’re a math genius who can calculate the [relative luminance of RGB colors](https://www.w3.org/TR/WCAG21/#dfn-relative-luminance) in your head, contrast is difficult to test without the help of tools.

TPGi’s [Colour Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/) is a free Mac and Windows application that helps you measure contrast between colors via an eyedropper tool (which lets you test the color of any pixel on your screen) or by typing in color values.

If you’re either not on a device where you can install TPGi’s tool or just want a quick gut check, WebAIM has an [online contrast checker](https://webaim.org/resources/contrastchecker/) that allows you to type in foreground and background color values.

#### Browser inspector

You can’t just view a page’s source and trust that the code you’re seeing there reflects what the browser is interpreting. Inspecting elements shows what’s really going on with them—after they’ve been inserted, modified, or deleted by JavaScript.

With or without any other browser extensions or bookmarklets, using the inspector is often the surest way to verify the status of HTML elements and attributes like heading levels, alt text, ARIA attributes and so on. You can use the inspector to view and edit the CSS values of properties like color, line-height, text-decoration, etc. And the browser’s console can alert you to JavaScript issues.

##### Accessibility tools built into the browser inspector

Many modern desktop browsers now have accessibility-specific tools incorporated into their inspectors.

###### Chrome & Edge

Google's Chrome and Microsoft's Edge browsers have several accessibility tools built into DevTools. One of the most straightforward tools to use is [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/). Lighthouse can test for performance, best practices, accessibility, and SEO. It gives a page a score from 0-100% in each of these categories.

Running an accessibility audit in Lighthouse is recommended to catch errors detectable via automated tooling.

Chrome and Edge also have an "Accessibility Pane" that lets users see information about the currently selected DOM node. This includes properties like:

   * An element's role
   * If an element is focusable
   * If the element contains any `aria` attributes and their values
   * An element's title
   * ...and many other accessibility-related properties

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

###### Firefox

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

###### Safari

Safari's DevTools does not have an accessibility tree feature; however, it does have an "Audit" tab that checks a page for accessibility. This automated checker contains 22 automated tests and outputs a score from 0-100%. Handily, the "Audit" tab also keeps a record of each audit you performed so that you can track your progress or export the report.

Learn more about the Audit tab in Safari in [WebKit's official documentation](https://webkit.org/web-inspector/audit-tab/).

#### Accessibility tools for CI/CD pipelines

Many Red Hat projects use continuous integration and continuous delivery pipelines to help deliver robust digital products to our users. There are several accessibility tools for CI/CD. The Red Hat Design System uses the [Chai A11y aXe](https://open-wc.org/docs/testing/chai-a11y-axe/) module and Web Test Runner's [a11ySnapshot feature](https://modern-web.dev/docs/test-runner/commands/#accessibility-snapshot) for unit tests.

##### Chai A11y aXe

Chai A11y Axe is a plugin to perform automated accessibility tests via [aXe](https://www.deque.com/axe/) for the [Chai Assertion Library](https://www.chaijs.com/). Here's how to test and see if a web component in the Red Hat Design System passes aXe accessibility tests. In this example, we're going to use Chai A11y aXe with `<rh-tag>`:

1. Follow the instructions to [Install the project](https://ux.redhat.com/get-started/developers/contributing/).
1. Open `elements/rh-tag/test/rh-tag.spec.ts`.
    * Note: there are already tests for `<rh-tag>`. For this exercise, let's pretend this file is blank. Temporarily delete its contents.
1. Paste the following into `rh-tag.spec.ts`:
    ```ts
    import { expect, html } from '@open-wc/testing';
    import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';

    import { RhTag } from '@rhds/elements/rh-tag/rh-tag.js';

    describe('when the element loads', function() {
      let element: RhTag;
      beforeEach(async function() {
        element = await createFixture<RhTag>(html`
          <rh-tag>Default tag</rh-tag>
        `);
        await element.updateComplete;
      });

      it('should be accessible', async function() {
        await expect(element)
            .to.be.accessible();
      });
    });
    ```
1. Run this test in your terminal by typing: `npm run test -- -- elements/rh-tag/test/rh-tag.spec.ts`
1. You should see "1/1 test files | 1 passed, 0 failed" output to your terminal.
1. Congrats, you just implemented aXe a11y tests into your testing pipeline! 🎉

In this test, we called the Chai A11y aXe module and ran it against `<rh-tag>` to ensure `<rh-tag>` didn't fail any automated accessibility tests as reported by aXe. Every component in the Red Hat Design System should call and use Chai A11y aXe to continuously verify accessibility in RHDS components.

If you want to see what a failed test might look like, add something to `<rh-tag>` that aXe would flag for failing an accessibility test—like `tabindex="1234"`. Then, re-run the test (step 4). Your terminal will show "Error: Accessibility Violations" and provide more information about what failed and how to fix it.

##### a11ySnapshot

Web Test Runner's [`a11ySnapshot` command](https://modern-web.dev/docs/test-runner/commands/#accessibility-snapshot) requests a snapshot of the accessibility tree built in the browser. Web component authors can use `a11ySnapshot` to verify accessibility properties in unit tests.

Here's how to integrate `a11ySnapshot` with `<rh-skip-link>`:

1. Follow the instructions to [Install the project](https://ux.redhat.com/get-started/developers/contributing/).
1. Open `elements/rh-skip-link/test/rh-skip-link.spec.ts`.
    * Note: there are already tests for `<rh-skip-link>`. For this exercise, let's pretend this file is blank. Temporarily delete its contents.
1. Paste the following into `rh-skip-link.spec.ts`:
    ```ts
    import { expect, html } from '@open-wc/testing';
    import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
    import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
    import { RhSkipLink } from '@rhds/elements/rh-skip-link/rh-skip-link.js';

    describe('<rh-skip-link>', function() {
      describe('when the element loads', function() {
        let element: RhSkipLink;
        beforeEach(async function() {
          element = await createFixture<RhSkipLink>(html`
            <rh-skip-link>
              <a href="#main-content">
                Skip to main content
              </a>
            </rh-skip-link>
          `);
          await element.updateComplete;
        });

        it('should have a link with the name, "Skip to main content"', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).to.axContainRole('link');
          expect(snapshot).to.axContainName('Skip to main content');
        });
      });
    });
    ```
1. Run this test in your terminal by typing: `npm run test -- -- elements/rh-skip-link/test/rh-skip-link.spec.ts`
1. You should see "1/1 test files | 1 passed, 0 failed" output to your terminal.
1. Congrats, you just implemented `a11ySnapshot` into your testing pipeline! 🎉

In step three above, we're using `a11ySnapshot` and some custom Chai helpers to verify the [role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/link_role) of the link in the lightdom and ensure it has the name, "Skip to main content". Test writers can `console.log()` the contents of `a11ySnapshot` to see other properties to test against. Be sure to check the PatternFly Elements's source for a list of other [custom Chai accessibility helpers](https://github.com/patternfly/patternfly-elements/blob/main/tools/pfe-tools/test/a11y-snapshot.ts#L321-L332) that are available to RHDS users.

This is a very basic example of using `a11ySnapshot`. To see more complex examples, check out the tests for [`<rh-switch>`](https://github.com/RedHat-UX/red-hat-design-system/blob/main/elements/rh-switch/test/rh-switch.spec.ts), [`<rh-site-status>`](https://github.com/RedHat-UX/red-hat-design-system/blob/main/elements/rh-site-status/test/rh-site-status.spec.ts), or [`<rh-icon>`](https://github.com/RedHat-UX/red-hat-design-system/blob/main/elements/rh-icon/test/rh-icon.spec.ts).

For more information about testing, including how users should organize tests, visit the [Testing page](https://github.com/RedHat-UX/red-hat-design-system/wiki/Testing) on our Wiki.
