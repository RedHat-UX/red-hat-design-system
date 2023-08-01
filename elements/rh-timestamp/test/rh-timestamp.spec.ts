import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhTimestamp } from '@rhds/elements/rh-timestamp/rh-timestamp.js';

describe('<rh-timestamp>', function() {
  describe('simply instantiating', function() {
    let element: RhTimestamp;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-timestamp')).to.be.an.instanceof(RhTimestamp);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhTimestamp>(html`<rh-timestamp></rh-timestamp>`);
      const klass = customElements.get('rh-timestamp');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhTimestamp);
    });
  });
});
