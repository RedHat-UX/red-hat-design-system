import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { SystemsStatus } from '@rhds/elements/systems-status/systems-status.js';

describe('<systems-status>', function() {
  describe('simply instantiating', function() {
    let element: SystemsStatus;
    it('should upgrade', async function() {
      element = await createFixture<SystemsStatus>(html`<systems-status></systems-status>`);
      const klass = customElements.get('systems-status');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(SystemsStatus);
    });
  })
});
