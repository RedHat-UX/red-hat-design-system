import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhLabel } from '../rh-tag.js';

const TEMPLATE = html`
  <rh-tag color="blue">Blue</rh-tag>
`;

describe('<rh-tag>', async function() {
  it('should upgrade', async function() {
    const element = await createFixture <RhTag>(TEMPLATE);
    const klass = customElements.get('rh-tag');
    expect(element)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhLabel);
  });
});
