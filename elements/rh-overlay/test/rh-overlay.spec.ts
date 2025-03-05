import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhOverlay } from '@rhds/elements/rh-overlay/rh-overlay.js';

describe('<rh-overlay>', function() {
  describe('simply instantiating', function() {
    let element: RhOverlay;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-overlay')).to.be.an.instanceof(RhOverlay);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhOverlay>(html`<rh-overlay></rh-overlay>`);
      const klass = customElements.get('rh-overlay');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhOverlay);
    });
  })
});
