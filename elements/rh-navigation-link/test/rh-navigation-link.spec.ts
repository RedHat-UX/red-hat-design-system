import { expect, fixture, html } from '@open-wc/testing';
import { RhNavigationLink } from '@rhds/elements/rh-navigation-link/rh-navigation-link.js';

let element: RhNavigationLink;

describe('<rh-navigation-link>', function() {
  describe('simply instantiating', function() {
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-navigation-link')).to.be.an.instanceof(RhNavigationLink);
    });

    it('should upgrade', async function() {
      element = await fixture<RhNavigationLink>(html`<rh-navigation-link href="#">Link</rh-navigation-link>`);
      const klass = customElements.get('rh-navigation-link');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhNavigationLink);
    });
  });
});
