import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhNavigationUniversal } from '@rhds/elements/rh-navigation-universal/rh-navigation-universal.js';

describe('<rh-navigation-universal>', function() {
  describe('simply instantiating', function() {
    let element: RhNavigationUniversal;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-navigation-universal')).to.be.an.instanceof(RhNavigationUniversal);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhNavigationUniversal>(html`<rh-navigation-universal></rh-navigation-universal>`);
      const klass = customElements.get('rh-navigation-universal');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhNavigationUniversal);
    });
  });
});
