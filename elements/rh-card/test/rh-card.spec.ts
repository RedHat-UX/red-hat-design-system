import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhCard } from '@rhds/elements/rh-card/rh-card.js';

const element = html`
  <rh-card></rh-card>
`;

describe('<rh-card>', function() {
  it('should upgrade', async function() {
    const el = await createFixture <RhCard>(element);
    const klass = customElements.get('rh-card');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhCard);
  });
});
