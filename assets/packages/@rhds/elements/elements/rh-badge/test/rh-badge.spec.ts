import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { hexToRgb, getColor } from '@patternfly/pfe-tools/test/hex-to-rgb.js';
import { RhBadge } from '@rhds/elements/rh-badge/rh-badge.js';

// Background colors for the various states
const states = {
  default: '#f2f2f2',
  info: '#0066cc',
  success: '#3e8635',
  moderate: '#f0ab00',
  important: '#be0000',
  critical: '#8f0000'
};

const element = html`
  <rh-badge></rh-badge>
`;

describe('<rh-badge>', function() {
  it('should upgrade', async function() {
    const el = await createFixture <RhBadge>(element);
    const klass = customElements.get('rh-badge');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhBadge);
  });
});

it('should have a pill shape and padding on left and right only', async function() {
  const element = await createFixture<RhBadge>(html`
    <rh-badge></rh-badge>
  `);
  const elStyles = getComputedStyle(element);

  expect(elStyles.getPropertyValue('border-radius')).to.equal('64px');
  expect(elStyles.getPropertyValue('padding-top')).to.equal('0px');
  expect(elStyles.getPropertyValue('padding-right')).to.equal('8px');
  expect(elStyles.getPropertyValue('padding-bottom')).to.equal('0px');
  expect(elStyles.getPropertyValue('padding-left')).to.equal('8px');
});

Object.entries(states).forEach(([state, color]) => {
  it(`should have a background color of '${color}' when state is ${state}`, async function() {
    const el = await createFixture<RhBadge>(element);

    if (state !== 'default') {
      el.setAttribute('state', state);
    }

    const [r, g, b] = getColor(el, 'background-color');
    expect([r, g, b]).to.deep.equal(hexToRgb(color));
  });
});
