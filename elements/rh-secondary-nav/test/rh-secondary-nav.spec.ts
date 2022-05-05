import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSecondaryNav } from 'rh-secondary-nav';

const element = html`
  <rh-secondary-nav></rh-secondary-nav>
`;

describe('<rh-secondary-nav>', function() {
  it('should upgrade', async function() {
    const el = await createFixture<RhSecondaryNav>(element);
    const klass = customElements.get('rh-secondary-nav');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhSecondaryNav);
  });
});
