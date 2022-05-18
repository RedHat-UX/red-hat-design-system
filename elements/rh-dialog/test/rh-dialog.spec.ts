import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhDialog } from 'rh-dialog';

const element = html`
  <rh-dialog></rh-dialog>
`;

describe('<rh-dialog>', function() {
  it('should upgrade', async function() {
    const el = await createFixture<RhDialog>(element);
    const klass = customElements.get('rh-dialog');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhDialog);
  });
});
