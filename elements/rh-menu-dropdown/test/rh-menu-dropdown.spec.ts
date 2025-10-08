import { aTimeout, expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { sendKeys } from '@web/test-runner-commands';
import { RhMenuDropdown } from '@rhds/elements/rh-menu-dropdown/rh-menu-dropdown.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { clickElementAtCenter, clickElementAtOffset } from '@patternfly/pfe-tools/test/utils.js';

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

  describe('default toggle button: when rendered with menu items and a label', () => {
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
  });

  describe('keyboard navigation', () => {
    let element: RhMenuDropdown;
    const updateComplete = () => element.updateComplete;

    beforeEach(async () => {
      element = await createFixture(html`
        <rh-menu-dropdown>
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

    describe('keyboard interaction', () => {
      beforeEach(press('Tab'));
      beforeEach(press('Enter'));
      beforeEach(updateComplete);

      it('opens the menu when pressing Enter', async () => {
        expect(element.open).to.be.true;
      });

      // it('focuses the first enabled item by default', async () => {
      //   const snapshot = await a11ySnapshot();
      //   const menu = snapshot?.children?.find(x => x.role === 'menu');
      //   const focused = menu?.children?.find(x => x.focused);
      //   expect(focused).to.deep.include({ role: 'menuitem', name: 'Action', focused: true });
      // });

      describe('ArrowDown', function() {
        beforeEach(press('ArrowDown'));
        beforeEach(() => aTimeout(300));
        beforeEach(updateComplete);

        // it('focuses option 2', async () => {
        //   const snapshot = await a11ySnapshot();
        //   const menu = snapshot?.children?.find(x => x.role === 'menu');
        //   const focused = menu?.children?.find(x => x.focused);
        //   expect(focused).to.deep.include({ role: 'menuitem', name: 'Link', focused: true });
        // });
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

  describe('Outside click behavior', function() {
    let element: RhMenuDropdown;
    const updateComplete = () => element.updateComplete;
    let outsideElement: HTMLElement;

    beforeEach(async function() {
      element = await createFixture<RhMenuDropdown>(html`
        <rh-menu-dropdown>
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

      // Create a dummy div to represent an "outside" area
      outsideElement = document.createElement('div');
      outsideElement.style.width = '200px';
      outsideElement.style.height = '200px';
      document.body.appendChild(outsideElement);
    });

    afterEach(() => {
      outsideElement.remove();
    });

    describe('focus', function() {
      beforeEach(press('Tab'));
      beforeEach(updateComplete);

      describe('ArrowDown', function() {
        beforeEach(press('ArrowDown'));
        beforeEach(() => aTimeout(300));
        beforeEach(updateComplete);

        it('should open the dropdown', function() {
          expect(element.open).to.be.true;
        });

        describe('click outside the element', async () => {
          // Click outside element
          await clickElementAtCenter(outsideElement);
          beforeEach(() => aTimeout(500));
          beforeEach(updateComplete);

          it('should close the dropdown when clicking outside', async function() {
            expect(element.open).to.be.false;
          });
        });
      });
    });
  });

  describe('on focus-out behavior', function() {
    let element: RhMenuDropdown;
    const updateComplete = () => element.updateComplete;

    beforeEach(async function() {
      element = await createFixture<RhMenuDropdown>(html`
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

      beforeEach(updateComplete);
    });

    describe('focus', function() {
      beforeEach(press('Tab'));
      beforeEach(() => aTimeout(300));
      beforeEach(updateComplete);

      describe('ArrowDown', function() {
        beforeEach(press('ArrowDown'));
        beforeEach(() => aTimeout(300));
        beforeEach(updateComplete);

        it('should open the dropdown', function() {
          expect(element.open).to.be.true;
        });

        describe('move the focus out of the element', function() {
          beforeEach(press('Tab'));
          beforeEach(() => aTimeout(300));
          beforeEach(updateComplete);

          // it('should close the dropdown when focused out', async function() {
          //   expect(element.open).to.be.false;
          // });
        });
      });
    });
  });

  describe('with `disabled` attribute', function() {
    let element: RhMenuDropdown;
    const updateComplete = () => element.updateComplete;

    beforeEach(async function() {
      element = await createFixture<RhMenuDropdown>(html`
        <rh-menu-dropdown disabled>
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

    it('passes aXe audit', async function() {
      await expect(element).to.be.accessible();
    });

    describe('focus', function() {
      beforeEach(press('Tab'));
      beforeEach(updateComplete);
      describe('ArrowDown', function() {
        beforeEach(press('ArrowDown'));
        beforeEach(updateComplete);

        it('does not open on focus and keyboard interaction', async function() {
          // Should remain closed
          expect(element.open).to.be.false;
        });
      });
    });

    describe('clicking the element', function() {
      beforeEach(async function() {
        await clickElementAtOffset(element, [10, 10]);
      });
      it('cannot be interacted with via click', async function() {
        expect(element.open).to.be.false;
      });
    });
  });
});
