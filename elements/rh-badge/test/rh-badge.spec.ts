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
  it(`should have a background color '--rh-color-surface-lighter' when state is unset`, async function() {
    const element = await createFixture <RhBadge>(html`<rh-badge></rh-badge>`);
    // NB: querying shadow root in tests is bad, mmkay?
    const styles = getComputedStyle(element.shadowRoot!.querySelector('.on')!);
    expect(styles.backgroundColor).to.be.colored(tokens.get('--rh-color-surface-lighter')!);
  });
});

it('should have a pill shape and padding on left and right only', async function() {
  const element = await createFixture<RhBadge>(html`<rh-badge></rh-badge>`);
  // NB: querying shadow root in tests is bad, mmkay?
  const elStyles = getComputedStyle(element.shadowRoot!.querySelector('.on')!);

  expect(elStyles.getPropertyValue('border-radius')).to.equal('64px');
  expect(elStyles.getPropertyValue('padding-top')).to.equal('0px');
  expect(elStyles.getPropertyValue('padding-right')).to.equal('8px');
  expect(elStyles.getPropertyValue('padding-bottom')).to.equal('0px');
  expect(elStyles.getPropertyValue('padding-left')).to.equal('8px');
});

for (const [state, token] of Object.entries({
  info: '--rh-color-status-info-on-light',
  success: '--rh-color-status-success-on-light',
  caution: '--rh-color-status-caution-on-light',
  warning: '--rh-color-status-warning-on-light',
  danger: '--rh-color-status-danger-on-light',
})) {
  describe(`state="${state}"`, function() {
    let element: RhBadge;
    let styles: CSSStyleDeclaration;
    beforeEach(async function() {
      element = await createFixture<RhBadge>(html`
        <rh-badge state="${state}"></rh-badge>
      `);
    });
    beforeEach(async function() {
      // NB: querying shadow root in tests is bad, mmkay?
      styles = getComputedStyle(element.shadowRoot!.querySelector('.on')!);
    });
    it(`should have a background color '${token}'`, async function() {
      expect(styles.backgroundColor).to.be.colored(tokens.get(token)!);
    });
    describe('on a dark background', function() {
      const darkToken = token.replace('on-light', 'on-dark');
      beforeEach(async function() {
        await createFixture<RhSurface>(html`
          <rh-surface color-palette="darkest">${element}</rh-surface>
        `);
      });
      it(`should have a background color '${darkToken}'`, async function() {
        expect(styles.backgroundColor).to.be.colored(tokens.get(darkToken)!);
      });
    });
  });
}
