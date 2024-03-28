import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSiteStatus } from '@rhds/elements/rh-site-status/rh-site-status.js';

describe('<rh-site-status>', function() {
  describe('simply instantiating', function() {
    let element: RhSiteStatus;
    it('should upgrade', async function() {
      element = await createFixture<RhSiteStatus>(html`<rh-site-status></rh-site-status>`);
      const klass = customElements.get('rh-site-status');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhSiteStatus);
    });
  });
});
