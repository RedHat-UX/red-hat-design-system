import { expect, html, aTimeout } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { sendKeys } from '@web/test-runner-commands';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

import { RhMenu } from '@rhds/elements/rh-menu/rh-menu.js';

import '@rhds/elements/rh-tooltip/rh-tooltip.js';

describe('<rh-menu>', function() {
  let element: RhMenu;

  function press(press: string) {
    return async function() {
      await sendKeys({ press });
      await aTimeout(10);
    };
  }

  beforeEach(async function() {
    /* Explict Role of menubar is added to the element to because element internals is ignored */
    element = await createFixture <RhMenu>(html`
      <rh-menu role="menubar">
        <button id="item1">Menuitem1</button>
        <button id="item2">Menuitem2</button>
        <button id="item3">Menuitem3</button>
      </rh-menu>
    `);
  });

  it('should upgrade', function() {
    const klass = customElements.get('rh-menu');
    expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhMenu);
  });

  it('instantiates imperatively', function() {
    expect(document.createElement('rh-menu')).to.be.an.instanceof(RhMenu);
  });

  it('should be accessible', async function() {
    /* we ignore the aria-allowed-role as the rh-menu applies menubar role in element internals */
    await Promise.resolve(expect(element).to.be.accessible({
      ignoredRules: ['aria-allowed-role'],
    }));
  });

  describe('tabbing to the element', function() {
    beforeEach(press('Tab'));

    it('focuses the first item', function() {
      expect(document.activeElement).to.have.id('item1');
    });

    describe('Tab', function() {
      beforeEach(press('Tab'));

      it('focuses the document', function() {
        expect(document.activeElement).to.equal(document.body);
      });
    });

    describe('Shift+Tab', function() {
      beforeEach(press('Shift+Tab'));

      it('focuses the document', function() {
        expect(document.activeElement).to.equal(document.body);
      });
    });

    describe('ArrowRight', function() {
      beforeEach(press('ArrowRight'));

      it('focuses the second item', function() {
        expect(document.activeElement).to.have.id('item2');
      });

      describe('ArrowRight', function() {
        beforeEach(press('ArrowRight'));

        it('should focus on item3', function() {
          expect(document.activeElement).to.have.id('item3');
        });

        describe('ArrowRight', function() {
          beforeEach(press('ArrowRight'));

          it('should focus on item1', function() {
            expect(document.activeElement).to.have.id('item1');
          });
        });
      });

      describe('End', function() {
        beforeEach(press('End'));
        it('should focus on item3', function() {
          expect(document.activeElement).and.to.have.id('item3');
        });
      });

      describe('Home', function() {
        beforeEach(press('Home'));

        it('should focus on item1', function() {
          expect(document.activeElement).and.to.have.id('item1');
        });
      });
    });

    describe('ArrowDown', function() {
      beforeEach(press('ArrowDown'));

      it('focuses the second item', function() {
        expect(document.activeElement).to.have.id('item2');
      });

      describe('ArrowDown', function() {
        beforeEach(press('ArrowDown'));

        it('should focus on item3', function() {
          expect(document.activeElement).to.have.id('item3');
        });

        describe('ArrowDown', function() {
          beforeEach(press('ArrowDown'));

          it('should focus on item1', function() {
            expect(document.activeElement).to.have.id('item1');
          });
        });
      });

      describe('End', function() {
        beforeEach(press('End'));

        it('should focus on item3', function() {
          expect(document.activeElement).and.to.have.id('item3');
        });
      });

      describe('Home', function() {
        beforeEach(press('Home'));

        it('should focus on item1', function() {
          expect(document.activeElement).and.to.have.id('item1');
        });
      });
    });

    describe('ArrowLeft', function() {
      beforeEach(press('ArrowLeft'));

      it('focuses the second item', function() {
        expect(document.activeElement).to.have.id('item3');
      });

      describe('ArrowLeft', function() {
        beforeEach(press('ArrowLeft'));

        it('should focus on item3', function() {
          expect(document.activeElement).to.have.id('item2');
        });

        describe('ArrowLeft', function() {
          beforeEach(press('ArrowLeft'));

          it('should focus on item1', function() {
            expect(document.activeElement).to.have.id('item1');
          });
        });
      });

      describe('End', function() {
        beforeEach(press('End'));

        it('should focus on item3', function() {
          expect(document.activeElement).and.to.have.id('item3');
        });
      });

      describe('Home', function() {
        beforeEach(press('Home'));

        it('should focus on item1', function() {
          expect(document.activeElement).and.to.have.id('item1');
        });
      });
    });

    describe('ArrowUp', function() {
      beforeEach(press('ArrowUp'));

      it('focuses the second item', function() {
        expect(document.activeElement).to.have.id('item3');
      });

      describe('ArrowUp', function() {
        beforeEach(press('ArrowUp'));

        it('should focus on item3', function() {
          expect(document.activeElement).to.have.id('item2');
        });

        describe('ArrowUp', function() {
          beforeEach(press('ArrowUp'));

          it('should focus on item1', function() {
            expect(document.activeElement).to.have.id('item1');
          });
        });
      });

      describe('End', function() {
        beforeEach(press('End'));

        it('should focus on item3', function() {
          expect(document.activeElement).and.to.have.id('item3');
        });
      });

      describe('Home', function() {
        beforeEach(press('Home'));

        it('should focus on item1', function() {
          expect(document.activeElement).and.to.have.id('item1');
        });
      });
    });
  });

  describe('menu items', async function() {
    beforeEach(async function() {
      /* Explict Role of menubar and menuitem are added to the elements to because element internals is ignored */
      element = await createFixture <RhMenu>(html`
        <rh-menu role="menubar">
          <rh-menu-item role="menuitem">Menuitem1</rh-menu-item>
          <rh-menu-item role="menuitem">Menuitem2</rh-menu-item>
          <rh-menu-item role="menuitem">Menuitem3</rh-menu-item>
        </rh-menu>
      `);
    });

    beforeEach(async function() {
      await element.updateComplete;
    });

    it('should be accessible', async function() {
      expect(element).to.be.accessible();
    });

    describe('tabbing to the element', function() {
      beforeEach(press('Tab'));

      it('focuses the first item', async function() {
        const snapshot = await a11ySnapshot();
        const menu = snapshot?.children?.find(x => x.role === 'menubar');
        const focused = menu?.children?.find(x => x.focused);
        expect(focused).to.deep.include({ role: 'menuitem', name: 'Menuitem1', focused: true });
      });
    });
  });
});
