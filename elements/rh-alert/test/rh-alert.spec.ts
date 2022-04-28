import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhAlert } from 'rh-alert';

const element = html`
  <rh-alert></rh-alert>
`;

describe('<rh-alert>', function() {
  it('should upgrade', async function() {
    const el = await createFixture<RhAlert>(element);
    const klass = customElements.get('rh-alert');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhAlert);
  });
});
