import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhBackToTop } from '@rhds/elements/rh-back-to-top/rh-back-to-top.js';

describe('<rh-back-to-top>', function() {
  describe('simply instantiating', function() {
    let element: RhBackToTop;
    it('should upgrade', async function() {
      element = await createFixture<RhBackToTop>(html`<rh-back-to-top></rh-back-to-top>`);
      const klass = customElements.get('rh-back-to-top');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhBackToTop);
    });
  });
});
