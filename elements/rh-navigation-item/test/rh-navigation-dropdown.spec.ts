import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhNavigationDropdown } from '@rhds/elements/rh-navigation-dropdown/rh-navigation-dropdown.js';

describe('<rh-navigation-dropdown>', function() {
  describe('simply instantiating', function() {
    let element: RhNavigationDropdown;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-navigation-dropdown')).to.be.an.instanceof(RhNavigationDropdown);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhNavigationDropdown>(html`<rh-navigation-dropdown></rh-navigation-dropdown>`);
      const klass = customElements.get('rh-navigation-dropdown');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhNavigationDropdown);
    });
  })
});
