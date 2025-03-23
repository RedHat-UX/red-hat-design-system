import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhNavigationPrimary } from '@rhds/elements/rh-navigation-primary/rh-navigation-primary.js';

describe('<rh-navigation-primary>', function() {
  describe('simply instantiating', function() {
    let element: RhNavigationPrimary;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-navigation-primary')).to.be.an.instanceof(RhNavigationPrimary);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhNavigationPrimary>(html`<rh-navigation-primary></rh-navigation-primary>`);
      const klass = customElements.get('rh-navigation-primary');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhNavigationPrimary);
    });
  });
});
