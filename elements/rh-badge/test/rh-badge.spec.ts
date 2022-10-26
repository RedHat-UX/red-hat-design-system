import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhBadge } from '@rhds/elements/rh-badge/rh-badge.js';

const element = html`
  <rh-badge></rh-badge>
`;

describe('<rh-badge>', function() {
  it('should upgrade', async function() {
    const el = await createFixture <RhBadge>(element);
    const klass = customElements.get('rh-badge');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhBadge);
  });
});
