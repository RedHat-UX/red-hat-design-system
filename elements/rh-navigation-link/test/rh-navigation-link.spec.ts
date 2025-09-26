import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhNavigationLink } from '@rhds/elements/rh-navigation-link/rh-navigation-link.js';

describe('<rh-navigation-link>', function() {
  describe('simply instantiating', function() {
    let element: RhNavigationLink;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-navigation-link')).to.be.an.instanceof(RhNavigationLink);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhNavigationLink>(html`<rh-navigation-link></rh-navigation-link>`);
      const klass = customElements.get('rh-navigation-link');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhNavigationLink);
    });
  })
});
