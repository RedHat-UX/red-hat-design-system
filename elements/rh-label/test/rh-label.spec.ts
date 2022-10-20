import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhLabel } from '../rh-label.js';

const TEMPLATE = html`
  <rh-label color="blue">Blue</rh-label>
`;

describe('<rh-label>', async function() {
  it('should upgrade', async function() {
    const element = await createFixture <RhLabel>(TEMPLATE);
    const klass = customElements.get('rh-label');
    expect(element)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhLabel);
  });
});
