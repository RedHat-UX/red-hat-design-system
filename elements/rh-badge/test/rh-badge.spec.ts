import { tokens } from '@rhds/tokens';
import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhBadge } from '@rhds/elements/rh-badge/rh-badge.js';
import { RhSurface } from '@rhds/elements/rh-surface/rh-surface.js';

describe('<rh-badge>', function() {
  it('should upgrade', async function() {
    const el = await createFixture <RhBadge>(html`<rh-badge></rh-badge>`);
    const klass = customElements.get('rh-badge');
    expect(el)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhBadge);
  });
  it(`should have a background color '--rh-color-status-neutral-on-light'`, async function() {
    const element = await createFixture <RhBadge>(html`<rh-badge></rh-badge>`);
    // NB: querying shadow root in tests is bad, mmkay?
    const styles = getComputedStyle(element.shadowRoot!.querySelector('span')!);
    expect(styles.backgroundColor).to.be.colored(tokens.get('--rh-color-status-neutral-on-light'));
  });
});

it('should have a pill shape and padding on left and right only', async function() {
  const element = await createFixture<RhBadge>(html`<rh-badge></rh-badge>`);
  // NB: querying shadow root in tests is bad, mmkay?
  const elStyles = getComputedStyle(element.shadowRoot!.querySelector('span')!);

  expect(elStyles.getPropertyValue('border-radius')).to.equal('64px');
  expect(elStyles.getPropertyValue('padding-top')).to.equal('0px');
  expect(elStyles.getPropertyValue('padding-right')).to.equal('8px');
  expect(elStyles.getPropertyValue('padding-bottom')).to.equal('0px');
  expect(elStyles.getPropertyValue('padding-left')).to.equal('8px');
});

type StatusColor =
  | '--rh-color-status-neutral'
  | '--rh-color-status-info'
  | '--rh-color-status-success'
  | '--rh-color-status-caution'
  | '--rh-color-status-warning'
  | '--rh-color-status-danger';

// deprecated states should map to their modern equivalents
for (const [deprecatedState, modernState] of Object.entries({
  moderate: 'warning',
  important: 'caution',
  critical: 'danger',
  note: 'info',
})) {
  describe(`deprecated state="${deprecatedState}"`, function() {
    let element: RhBadge;
    let span: HTMLSpanElement;
    beforeEach(async function() {
      element = await createFixture<RhBadge>(html`
        <rh-badge state="${deprecatedState}" number="50">50</rh-badge>
      `);
      span = element.shadowRoot!.querySelector('span')!;
    });
    it(`should normalize state to "${modernState}"`, function() {
      expect(element.state).to.equal(modernState);
    });
    it(`should have a background color matching state="${modernState}"`, function() {
      const token = `--rh-color-status-${modernState}-on-light` as const;
      expect(getComputedStyle(span).backgroundColor).to.be.colored(tokens.get(token));
    });
  });

  // Verify the CSS alias selector for the deprecated class name works
  // independently of JS normalization. This simulates SSR/pre-hydration
  // where declarative shadow DOM contains the deprecated class name.
  describe(`CSS alias class="${deprecatedState}" (SSR)`, function() {
    let span: HTMLSpanElement;
    beforeEach(async function() {
      const element = await createFixture<RhBadge>(html`
        <rh-badge number="50">50</rh-badge>
      `);
      span = element.shadowRoot!.querySelector('span')!;
      // Directly apply the deprecated class to bypass JS normalization
      span.className = deprecatedState;
    });
    it(`should style .${deprecatedState} with the ${modernState} background color`, function() {
      const token = `--rh-color-status-${modernState}-on-light` as const;
      expect(getComputedStyle(span).backgroundColor).to.be.colored(tokens.get(token));
    });
  });
}

for (const [state, token] of Object.entries({
  neutral: '--rh-color-status-neutral',
  info: '--rh-color-status-info',
  success: '--rh-color-status-success',
  caution: '--rh-color-status-caution',
  warning: '--rh-color-status-warning',
  danger: '--rh-color-status-danger',
}) as [string, StatusColor][]) {
  describe(`state="${state}"`, function() {
    let element: RhBadge;
    let styles: CSSStyleDeclaration;
    beforeEach(async function() {
      element = await createFixture<RhBadge>(html`
        <rh-badge state="${state}">0</rh-badge>
      `);
    });
    beforeEach(async function() {
      // NB: querying shadow root in tests is bad, mmkay?
      styles = getComputedStyle(element.shadowRoot!.querySelector('span')!);
    });
    it(`should have a background color '${token}-on-light'`, async function() {
      expect(styles.backgroundColor).to.be.colored(tokens.get(`${token}-on-light`));
    });
    describe('on a dark background', function() {
      beforeEach(async function() {
        await createFixture<RhSurface>(html`
          <rh-surface color-palette="darkest">${element}</rh-surface>
        `);
      });
      it(`should have a background color '${token}-on-dark'`, async function() {
        expect(styles.backgroundColor).to.be.colored(tokens.get(`${token}-on-dark`));
      });
    });
  });
}
