---
title: CI/CD
sidenavTitle: CI/CD
permalink: /accessibility/ci-cd/index.html
hasToc: false
tags:
  - accessibility
order: 80
---

<script data-helmet type="module">
  import '@rhds/elements/rh-code-block/rh-code-block.js';
</script>

## Accessibility tools for CI/CD pipelines

Many Red Hat projects use continuous integration and continuous delivery pipelines to help deliver robust digital products to our users. There are several accessibility tools for CI/CD. The Red Hat Design System uses the [Chai A11y aXe][chaia11yaxe] module and [PatternFly Elements Tools][pfe-tools]'s  a11ySnapshot feature, based on [Web Test Runner][a11ysnapshot], for unit tests.

### Chai A11y aXe

Chai A11y Axe is a plugin to perform automated accessibility tests via [aXe](https://www.deque.com/axe/) for the [Chai Assertion Library](https://www.chaijs.com/). Here's how to test and see if a web component in the Red Hat Design System passes aXe accessibility tests. In this example, we're going to use Chai A11y aXe with `<rh-tag>`:

1. Follow the instructions to [Install the project](https://ux.redhat.com/get-started/developers/contributing/).
1. Open `elements/rh-tag/test/rh-tag.spec.ts`.
1. Add an aXe assertion to `rh-tag.spec.ts` (see below)
1. Run this test in your terminal by typing: `npm run test -- -- elements/rh-tag/test/rh-tag.spec.ts`
1. You should see "1/1 test files | 1 passed, 0 failed" output to your terminal.
1. Congrats, you just implemented aXe a11y tests into your testing pipeline! 🎉

The aXe assertion from step 3 looks like this, add it anywhere inside the first `describe('<rh-tag>')` block:


<rh-code-block highlighting="prerendered">

```ts
it('should be accessible', async function() {
  await expect(element)
      .to.be.accessible();
});
```

</rh-code-block>

In this test, we called the Chai A11y aXe module and ran it against `<rh-tag>` to ensure `<rh-tag>` didn't fail any automated accessibility tests as reported by aXe. Every component in the Red Hat Design System should call and use Chai A11y aXe to continuously verify accessibility in RHDS components.

If you want to see what a failed test might look like, add something to `<rh-tag>` that aXe would flag for failing an accessibility test—like `tabindex="1234"`. Then, re-run the test (step 4). Your terminal will show "Error: Accessibility Violations" and provide more information about what failed and how to fix it.

### a11ySnapshot

Web Test Runner's [`a11ySnapshot` command](https://modern-web.dev/docs/test-runner/commands/#accessibility-snapshot) requests a snapshot of the accessibility tree built in the browser. Web component authors can use `a11ySnapshot` to verify accessibility properties in unit tests.

Here's how to integrate `a11ySnapshot` with `<rh-skip-link>`:

1. Follow the instructions to [Install the project](https://ux.redhat.com/get-started/developers/contributing/).
1. Open `elements/rh-skip-link/test/rh-skip-link.spec.ts`.
1. Add ax-tree assertions to `rh-skip-link.spec.ts` (see below)
1. Run this test in your terminal by typing: `npm run test -- -- elements/rh-skip-link/test/rh-skip-link.spec.ts`
1. You should see "1/1 test files | 1 passed, 0 failed" output to your terminal.
1. Congrats, you just implemented `a11ySnapshot` into your testing pipeline! 🎉

These ax-tree assertions can go inside the top-level `describe('rh-skip-link')` block.

<rh-code-block highlighting="prerendered">

```ts
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
  });

  it('should have a link with the name, "Skip to main content"', async function() {
    const snapshot = await a11ySnapshot();
    expect(snapshot).to.axContainRole('link');
    expect(snapshot).to.axContainName('Skip to main content');
  });
});
```

</rh-code-block>

In step three above, we're using `a11ySnapshot` and some custom Chai helpers to verify the [role][linkrole] of the link in the lightdom and ensure it has the name, "Skip to main content". Test writers can `console.log()` the contents of `a11ySnapshot` to see other properties to test against. Be sure to check the PatternFly Elements's source for a list of other [custom Chai accessibility helpers](https://github.com/patternfly/patternfly-elements/blob/main/tools/pfe-tools/test/a11y-snapshot.ts#L321-L332) that are available to RHDS users.

This is a very basic example of using `a11ySnapshot`. To see more complex examples, check out the tests for [`<rh-switch>`](https://github.com/RedHat-UX/red-hat-design-system/blob/main/elements/rh-switch/test/rh-switch.spec.ts), [`<rh-site-status>`](https://github.com/RedHat-UX/red-hat-design-system/blob/main/elements/rh-site-status/test/rh-site-status.spec.ts), or [`<rh-icon>`](https://github.com/RedHat-UX/red-hat-design-system/blob/main/elements/rh-icon/test/rh-icon.spec.ts).

For more information about testing, including how users should organize tests, visit the [Testing page](https://github.com/RedHat-UX/red-hat-design-system/wiki/Testing) on our Wiki.

[chaia11yaxe]: https://open-wc.org/docs/testing/chai-a11y-axe/
[pfe-tools]: https://github.com/patternfly/patterfly-elements/tree/main/tools/pfe-tools/
[allysnapshot]: https://modern-web.dev/docs/test-runner/commands/#accessibility-snapshot
[linkrole]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/link_role
