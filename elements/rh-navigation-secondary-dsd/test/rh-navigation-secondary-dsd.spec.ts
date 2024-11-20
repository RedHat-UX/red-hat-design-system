import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhNavigationSecondaryDsd } from '@rhds/elements/rh-navigation-secondary-dsd/rh-navigation-secondary-dsd.js';

describe('<rh-navigation-secondary-dsd>', function() {
  describe('simply instantiating', function() {
    let element: RhNavigationSecondaryDsd;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-navigation-secondary-dsd')).to.be.an.instanceof(RhNavigationSecondaryDsd);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhNavigationSecondaryDsd>(html`<rh-navigation-secondary-dsd></rh-navigation-secondary-dsd>`);
      const klass = customElements.get('rh-navigation-secondary-dsd');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhNavigationSecondaryDsd);
    });
  })
});
