import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhTabs } from '@rhds/elements/rh-tabs/rh-tabs.js';

const element = html`
  <rh-tabs></rh-tabs>
`;

describe('<rh-tabs>', function() {
  it('should upgrade', async function() {
    const el = await createFixture <RhTabs>(element);
    const klass = customElements.get('rh-tabs');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhTabs);
  });
});
