import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhPagination } from '@rhds/elements/rh-pagination/rh-pagination.js';

const element = html`
  <rh-pagination></rh-pagination>
`;

describe('<rh-pagination>', function() {
  it('should upgrade', async function() {
    const el = await createFixture<RhPagination>(element);
    const klass = customElements.get('rh-pagination');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhPagination);
  });
});
