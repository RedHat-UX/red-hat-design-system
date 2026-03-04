import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhDrawer } from '@rhds/elements/rh-drawer/rh-drawer.js';

describe('<rh-drawer>', function() {
  describe('simply instantiating', function() {
    let element: RhDrawer;

    it('imperatively instantiates', function() {
      expect(document.createElement('rh-drawer')).to.be.an.instanceof(RhDrawer);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhDrawer>(html`<rh-drawer></rh-drawer>`);
      const klass = customElements.get('rh-drawer');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhDrawer);
    });
  });

  describe('when open with slotted content', function() {
    let element: RhDrawer;

    beforeEach(async function() {
      element = await createFixture<RhDrawer>(html`
        <rh-drawer open>
          <h3 slot="header">Header</h3>
          <nav slot="body">Body content</nav>
          <p slot="footer">Footer</p>
          <p>Page content</p>
        </rh-drawer>
      `);
      await element.updateComplete;
    });

    it('should be accessible', async function() {
      await expect(element)
          .to.be.accessible();
    });
  });
});
