import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSkipLink } from '@rhds/elements/rh-skip-link/rh-skip-link.js';

describe('<rh-skip-link>', function() {
  describe('simply instantiating', function() {
    let element: RhSkipLink;
    it('should upgrade', async function() {
      element = await createFixture<RhSkipLink>(html`<rh-skip-link></rh-skip-link>`);
      const klass = customElements.get('rh-skip-link');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhSkipLink);
    });
  });
});
