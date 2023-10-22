import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSystemsStatus } from '@rhds/elements/rh-systems-status/rh-systems-status.js';

describe('<rh-systems-status>', function() {
  describe('simply instantiating', function() {
    let element: RhSystemsStatus;
    it('should upgrade', async function() {
      element = await createFixture<RhSystemsStatus>(html`<rh-systems-status></rh-systems-status>`);
      const klass = customElements.get('rh-systems-status');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhSystemsStatus);
    });
  })
});
