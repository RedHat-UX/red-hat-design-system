import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSubnav } from '@rhds/elements/rh-subnav/rh-subnav.js';

const element = html`
  <rh-subnav></rh-subnav>
`;

describe('<rh-subnav>', function() {
  it('should upgrade', async function() {
    const el = await createFixture <RhSubnav>(element);
    const klass = customElements.get('rh-subnav');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhSubnav);
  });
});
