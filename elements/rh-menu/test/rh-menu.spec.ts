import { expect, html, aTimeout } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { sendKeys } from '@web/test-runner-commands';
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
    element = await createFixture <RhMenu>(html`
      <rh-menu>
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

  it('is accessible', async function() {
    await Promise.resolve(expect(element).to.be.accessible({
      // the host should have the right semantics and delegates to the shadow root.
      // ignoredRules: ['aria-hidden-focus'],
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
      describe('PageDown', function() {
        beforeEach(press('PageDown'));
        it('should focus on item3', function() {
          expect(document.activeElement).and.to.have.id('item3');
        });
      });
      describe('PageUp', function() {
        beforeEach(press('PageUp'));
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
      describe('PageDown', function() {
        beforeEach(press('PageDown'));
        it('should focus on item3', function() {
          expect(document.activeElement).and.to.have.id('item3');
        });
      });
      describe('PageUp', function() {
        beforeEach(press('PageUp'));
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
      describe('PageDown', function() {
        beforeEach(press('PageDown'));
        it('should focus on item3', function() {
          expect(document.activeElement).and.to.have.id('item3');
        });
      });
      describe('PageUp', function() {
        beforeEach(press('PageUp'));
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
      describe('PageDown', function() {
        beforeEach(press('PageDown'));
        it('should focus on item3', function() {
          expect(document.activeElement).and.to.have.id('item3');
        });
      });
      describe('PageUp', function() {
        beforeEach(press('PageUp'));
        it('should focus on item1', function() {
          expect(document.activeElement).and.to.have.id('item1');
        });
      });
    });
  });
});
