import { aTimeout, expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { sendKeys, resetMouse } from '@web/test-runner-commands';
import { RhMenuDropdown } from '@rhds/elements/rh-menu-dropdown/rh-menu-dropdown.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

function press(key: string) {
  return async function() {
    await sendKeys({ press: key });
  };
}

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

  describe('when rendered with menu items and a label', () => {
    let element: RhMenuDropdown;
    const updateComplete = () => element.updateComplete;

    beforeEach(async () => {
      element = await createFixture(html`
        <rh-menu-dropdown>
          <p slot="label">Basic toggle</p>
          <rh-menu-item>Action</rh-menu-item>
          <rh-menu-item href="#">Link</rh-menu-item>
          <rh-menu-item disabled>Disabled Action</rh-menu-item>
          <rh-menu-item disabled href="#">Disabled link</rh-menu-item>
          <rh-menu-item disabled aria-disabled="true">Aria-disabled link</rh-menu-item>
          <hr />
          <rh-menu-item>Separated action</rh-menu-item>
          <rh-menu-item href="#">Separated link</rh-menu-item>
        </rh-menu-dropdown>
      `);
      await updateComplete();
    });

    it('renders the toggle label from the slot', () => {
      const label = element.querySelector('[slot="label"]');
      expect(label?.textContent?.trim()).to.equal('Basic toggle');
    });

    it('renders all menu items, including disabled and separated', () => {
      const items = element.querySelectorAll('rh-menu-item');
      expect(items.length).to.equal(7);
    });

    it('has 4 enabled (interactive) menu items', () => {
      const items = Array.from(element.querySelectorAll('rh-menu-item'));
      const enabled = items.filter(item => !item.hasAttribute('disabled'));
      expect(enabled.length).to.equal(4);
    });

    describe('keyboard interaction', () => {
      beforeEach(press('Tab'));
      beforeEach(press('Enter'));
      beforeEach(updateComplete);

      it('opens the menu when pressing Enter', async () => {
        expect(element.open).to.be.true;
      });

      it('focuses the first enabled item by default', async () => {
        const snapshot = await a11ySnapshot();
        const menu = snapshot?.children?.find(child => child.role === 'menu');
        const focused = menu?.children?.find(child => child.focused);
        expect(focused?.name).to.equal('Action');
      });

      describe('pressing Escape', () => {
        beforeEach(async () => {
          await sendKeys({ press: 'Escape' });
          await updateComplete();
        });

        it('closes the menu', async () => {
          expect(element.open).to.be.false;
        });
      });
    });
  });
});
