import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhPopover } from '@rhds/elements/rh-popover/rh-popover.js';

describe('<rh-popover>', function() {
  describe('simply instantiating', function() {
    let element: RhPopover;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-popover')).to.be.an.instanceof(RhPopover);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhPopover>(html`<rh-popover></rh-popover>`);
      const klass = customElements.get('rh-popover');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhPopover);
    });
  })
});
