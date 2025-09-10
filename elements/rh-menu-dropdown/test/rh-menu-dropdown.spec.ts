import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhMenuDropdown } from '@rhds/elements/rh-menu-dropdown/rh-menu-dropdown.js';

describe('<rh-menu-dropdown>', function() {
  describe('simply instantiating', function() {
    let element: RhMenuDropdown;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-menu-dropdown')).to.be.an.instanceof(RhMenuDropdown);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhMenuDropdown>(html`<rh-menu-dropdown></rh-menu-dropdown>`);
      const klass = customElements.get('rh-menu-dropdown');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhMenuDropdown);
    });
  });
});
