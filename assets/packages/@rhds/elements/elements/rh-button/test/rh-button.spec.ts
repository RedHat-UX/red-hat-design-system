import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhButton } from '../rh-button.js';

const template = html`
  <rh-button></rh-button>
`;

describe('<rh-button>', function() {
  it('should upgrade', async function() {
    const element = await createFixture<RhButton>(template);
    const klass = customElements.get('rh-button');
    expect(element)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhButton);
  });
});
