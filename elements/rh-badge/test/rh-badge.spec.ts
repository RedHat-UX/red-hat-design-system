import { tokens } from '@rhds/tokens';
import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { hexToRgb, getColor } from '@patternfly/pfe-tools/test/hex-to-rgb.js';
import { RhBadge } from '@rhds/elements/rh-badge/rh-badge.js';

describe('<rh-badge>', function() {
  it('should upgrade', async function() {
    const el = await createFixture <RhBadge>(html`<rh-badge></rh-badge>`);
    const klass = customElements.get('rh-badge');
    expect(el)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhBadge);
  });
});

it('should have a pill shape and padding on left and right only', async function() {
  const element = await createFixture<RhBadge>(html`<rh-badge></rh-badge>`);
  const elStyles = getComputedStyle(element);

  expect(elStyles.getPropertyValue('border-radius')).to.equal('64px');
  expect(elStyles.getPropertyValue('padding-top')).to.equal('0px');
  expect(elStyles.getPropertyValue('padding-right')).to.equal('8px');
  expect(elStyles.getPropertyValue('padding-bottom')).to.equal('0px');
  expect(elStyles.getPropertyValue('padding-left')).to.equal('8px');
});

for (const [state, color] of Object.entries({
  default: tokens.get('--rh-color-surface-lighter'),
  info: tokens.get('--rh-color-interactive-blue-darker'),
  success: tokens.get('--rh-color-green-60'),
  moderate: tokens.get('--rh-color-yellow-40'),
  important: tokens.get('--rh-color-red-60'),
  critical: tokens.get('--rh-color-red-60'),
})) {
  it(`should have a background color of '${color}' when state is ${state}`, async function() {
    const el = await createFixture<RhBadge>(html`<rh-badge></rh-badge>`);

    if (state !== 'default') {
      el.setAttribute('state', state);
    }

    const [r, g, b] = getColor(el, 'background-color');
    expect([r, g, b]).to.deep.equal(hexToRgb(color));
  });
}
