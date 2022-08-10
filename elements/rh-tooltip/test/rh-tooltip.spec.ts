import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhTooltip } from '@rhds/elements/rh-tooltip/rh-tooltip.js';

const element = html`
  <rh-tooltip></rh-tooltip>
`;

describe('<rh-tooltip>', function() {
  it('should upgrade', async function() {
    const el = await createFixture <RhTooltip>(element);
    const klass = customElements.get('rh-tooltip');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhTooltip);
  });
});
