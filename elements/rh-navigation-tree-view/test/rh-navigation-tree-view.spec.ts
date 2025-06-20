import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhNavigationTreeView } from '@rhds/elements/rh-navigation-tree-view/rh-navigation-tree-view.js';

describe('<rh-navigation-tree-view>', function() {
  describe('simply instantiating', function() {
    let element: RhNavigationTreeView;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-navigation-tree-view')).to.be.an.instanceof(RhNavigationTreeView);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhNavigationTreeView>(html`<rh-navigation-tree-view></rh-navigation-tree-view>`);
      const klass = customElements.get('rh-navigation-tree-view');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhNavigationTreeView);
    });
  })
});
