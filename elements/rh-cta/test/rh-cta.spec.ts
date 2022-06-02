import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhCta } from '../rh-cta.js';

const template = html`
  <rh-cta></rh-cta>
`;

describe('<rh-cta>', function() {
  it('should upgrade', async function() {
    const element = await createFixture<RhCta>(template);
    const klass = customElements.get('rh-cta');
    expect(element)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhCta);
  });
});
