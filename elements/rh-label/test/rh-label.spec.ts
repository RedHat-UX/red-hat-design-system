import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhLabel } from '@rhds/elements/rh-label/rh-label.js';

const element = html`
  <rh-label></rh-label>
`;

describe('<rh-label>', function() {
  it('should upgrade', async function() {
    const el = await createFixture <RhLabel>(element);
    const klass = customElements.get('rh-label');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhLabel);
  });
});
