import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhStat } from '../rh-stat.js';

const element = html`
  <rh-stat></rh-stat>
`;

describe('<rh-stat>', function() {
  it('should upgrade', async function() {
    const el = await createFixture<RhStat>(element);
    const klass = customElements.get('rh-stat');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhStat);
  });
});
