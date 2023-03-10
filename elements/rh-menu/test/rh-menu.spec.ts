import { expect, html, aTimeout, oneEvent } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { sendKeys } from '@web/test-runner-commands';
import { RhMenu } from '@rhds/elements/rh-menu/rh-menu.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';

const element = html`
  <rh-menu>
      <rh-tooltip slot="button">
        <span slot="content">Toggle Menu</span>
        <button id="menubutton" aria-label="Toggle Menu">
          <svg style="fill: #000" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
            <circle cx="12" cy="22" r="2"/>
            <circle cx="12" cy="12" r="2"/>
            <circle cx="12" cy="2" r="2"/>
          </svg>
        </button>
      </rh-tooltip>
      <button id="item1" slot="menu">Menuitem1</button>
      <button id="item2" slot="menu">Menuitem2</button>
      <button id="item3" slot="menu">Menuitem3</button>
  </rh-menu>
`;

describe('<rh-menu>', function() {
  let el:RhMenu; let menubutton:HTMLButtonElement;

  async function openMenu() {
    if (!el?.open) { await el?.show(); }
  }

  async function focusById(id:string) {
    await openMenu();
    const button:HTMLButtonElement = document.querySelector(`#${id}`) || el?.querySelector(`#${id}`);
    button?.focus();
    await aTimeout(1);
  }

  function testKey(fromId:string, key:string, toId:string) {
    describe(`from ${fromId}, pressing "${key}" key`, function() {
      it(`should focus on ${toId}`, async function() {
        await focusById(fromId);
        await aTimeout(100);
        await sendKeys({ press: key });
        await aTimeout(10);
        expect(document.activeElement).to.be.an.instanceof(HTMLButtonElement).and.to.have.id(toId);
      });
    });
  }

  beforeEach(async function() {
    el = await createFixture <RhMenu>(element);
    await aTimeout(50);
    menubutton = document.querySelector(`#menubutton`) || el?.querySelector(`#menubutton`);
  });

  it('should upgrade', function() {
    const klass = customElements.get('rh-menu');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhMenu);
  });

  it('is accessible', function() {
    expect(el).to.be.accessible;
  });

  describe('tabbing to menu button', function() {
    it('should focus on menu button', async function() {
      await sendKeys({ press: 'Tab' });
      await aTimeout(300);
      expect(document.activeElement).to.be.an.instanceof(HTMLButtonElement).and.to.have.id('menubutton');
    });
  });

  describe('using keys when menu is open', function() {
    describe(`from item1, pressing "Shift+Tab" keys`, function() {
      it(`should close menu`, async function() {
        await focusById('item1');
        await aTimeout(100);
        await sendKeys({ press: 'Shift+Tab' });
        await aTimeout(500);
        expect(el.open).to.be.false;
      });

      testKey('item1', 'ArrowRight', 'item2');
      // TODO: will pass once fix to roving-tabindex-controller is implemented
      testKey('item3', 'ArrowRight', 'item1');
      // TODO: will pass once fix to roving-tabindex-controller is implemented
      testKey('item3', 'ArrowLeft', 'item2');
      testKey('item1', 'ArrowLeft', 'item3');
      testKey('item3', 'Home', 'item1');
      testKey('menubutton', 'End', 'item3');
      testKey('item1', 'End', 'item3');

      testKey('menubutton', 'ArrowUp', 'item3');
      // TODO: will pass once fix to roving-tabindex-controller is implemented
      testKey('item3', 'ArrowUp', 'item2');
      testKey('item1', 'ArrowUp', 'item3');
      testKey('item1', 'ArrowDown', 'item2');
      // TODO: will pass once fix to roving-tabindex-controller is implemented
      testKey('item3', 'ArrowDown', 'item1');
      testKey('menubutton', 'PageUp', 'item1');
      testKey('item3', 'PageUp', 'item1');
      testKey('item1', 'PageDown', 'item3');
    });
  });

  describe('toggling menu button', function() {
    before(async function() {
      if (el?.open) {
        await el?.hide();
      }
    });

    it('should open menu', async function(this: Mocha.Context) {
      menubutton?.click();
      await oneEvent(el, 'toggle');
      this.timeout(1_000);
      return expect(el?.open).to.be.true;
    });

    it('should close menu', async function(this: Mocha.Context) {
      if (!el?.open) {
        await el?.show();
      }
      menubutton?.click();
      await oneEvent(el, 'toggle');
      this.timeout(1_000);
      return expect(el?.open).to.be.false;
    });
  });
});
