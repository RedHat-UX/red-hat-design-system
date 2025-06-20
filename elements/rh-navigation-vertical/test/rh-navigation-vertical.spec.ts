import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhNavigationTreeView } from '@rhds/elements/rh-navigation-vertical/rh-navigation-vertical.js';

describe('<rh-navigation-vertical>', function() {
  describe('simply instantiating', function() {
    let element: RhNavigationTreeView;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-navigation-vertical')).to.be.an.instanceof(RhNavigationTreeView);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhNavigationTreeView>(html`<rh-navigation-vertical></rh-navigation-vertical>`);
      const klass = customElements.get('rh-navigation-vertical');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhNavigationTreeView);
    });
  });
});
