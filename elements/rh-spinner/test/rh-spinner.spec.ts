import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSpinner } from '@rhds/elements/rh-spinner/rh-spinner.js';

const element = html`
  <rh-spinner></rh-spinner>
`;

describe('<rh-spinner>', function() {
  it('should upgrade', async function() {
    const el = await createFixture <RhSpinner>(element);
    const klass = customElements.get('rh-spinner');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhSpinner);
  });
});
