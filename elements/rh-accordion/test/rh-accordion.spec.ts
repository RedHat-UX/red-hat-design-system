import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhAccordion } from '@rhds/elements/rh-accordion/rh-accordion.js';

const element = html`
  <rh-accordion></rh-accordion>
`;

describe('<rh-accordion>', function() {
  it('should upgrade', async function() {
    const el = await createFixture <RhAccordion>(element);
    const klass = customElements.get('rh-accordion');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhAccordion);
  });
});
