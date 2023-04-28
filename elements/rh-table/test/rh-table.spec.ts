import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhTable } from '@rhds/elements/rh-table/rh-table.js';

const element = html`
  <rh-table></rh-table>
`;

describe('<rh-table>', function() {
  it('should upgrade', async function() {
    const el = await createFixture <RhTable>(element);
    const klass = customElements.get('rh-table');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhTable);
  });
});
