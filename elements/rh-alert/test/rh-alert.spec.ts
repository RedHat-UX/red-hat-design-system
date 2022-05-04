import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhAlert } from '../rh-alert.js';

const template = html`
  <rh-alert></rh-alert>
`;

describe('<rh-alert>', function() {
  it('should upgrade', async function() {
    const element = await createFixture<RhAlert>(template);
    const klass = customElements.get('rh-alert');
    expect(element)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhAlert);
  });
});
