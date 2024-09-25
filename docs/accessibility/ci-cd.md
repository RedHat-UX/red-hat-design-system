---
title: CI/CD
sidenavTitle: CI/CD
permalink: /accessibility/ci-cd/index.html
hasToc: false
tags:
  - accessibility
order: 80
---

## Accessibility tools for CI/CD pipelines

Many Red Hat projects use continuous integration and continuous delivery pipelines to help deliver robust digital products to our users. There are several accessibility tools for CI/CD. The Red Hat Design System uses the [Chai A11y aXe](https://open-wc.org/docs/testing/chai-a11y-axe/) module and Web Test Runner's [a11ySnapshot feature](https://modern-web.dev/docs/test-runner/commands/#accessibility-snapshot) for unit tests.

### Chai A11y aXe

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

### a11ySnapshot

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
