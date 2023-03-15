import { expect, html, aTimeout, oneEvent } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { sendKeys } from '@web/test-runner-commands';
import { RhMenu } from '@rhds/elements/rh-menu/rh-menu.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';

describe('<rh-menu>', function() {
  let element: RhMenu;
  let menubutton: HTMLButtonElement;

  async function waitForToggle() {
    await oneEvent(element, 'toggle');
  }

  async function clickToggle() {
    document.getElementById('menubutton')?.click();
    await waitForToggle();
  }

  async function hide() {
    element?.hide();
    await waitForToggle();
  }

  function press(press: string) {
    return async function() {
      await sendKeys({ press });
      await aTimeout(10);
    };
  }

  function focusId(id: string) {
    return async function() {
      document.getElementById(id)?.focus?.();
      await aTimeout(100);
    };
  }

  beforeEach(async function() {
    element = await createFixture <RhMenu>(html`
      <rh-menu>
        <rh-tooltip slot="button">
          <span slot="content">Toggle Menu</span>
          <button id="menubutton" aria-label="Toggle Menu">
            <svg fill="#000" width="24" height="24">
              <circle cx="12" cy="22" r="2"/>
              <circle cx="12" cy="12" r="2"/>
              <circle cx="12" cy="2" r="2"/>
            </svg>
          </button>
        </rh-tooltip>
        <button id="item1">Menuitem1</button>
        <button id="item2">Menuitem2</button>
        <button id="item3">Menuitem3</button>
      </rh-menu>
    `);
    await aTimeout(50);
    menubutton = document.getElementById('menubutton') as HTMLButtonElement;
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
      ignoredRules: ['aria-hidden-focus'],
    }));
  });

  describe('clicking the menu toggle', function() {
    beforeEach(clickToggle);
    it('focuses the first item', function() {
      expect(document.activeElement).to.have.id('item1');
    });
    describe('Shift+Tab', function() {
      beforeEach(press('Shift+Tab'));
      beforeEach(waitForToggle);
      it('should close menu', function() {
        expect(element.open).to.be.false;
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

    describe('when focused on menubutton', function() {
      beforeEach(focusId('menubutton'));
      describe('End', function() {
        beforeEach(press('End'));
        it('should focus on item3', function() {
          expect(document.activeElement)
            .to.be.an.instanceof(HTMLButtonElement)
            .and.to.have.id('item3');
        });
      });
      describe('ArrowUp', function() {
        beforeEach(press('ArrowUp'));
        it('should focus on item3', function() {
          expect(document.activeElement)
            .to.be.an.instanceof(HTMLButtonElement)
            .and.to.have.id('item3');
        });
      });
      describe('PageUp', function() {
        beforeEach(press('PageUp'));
        it('should focus on item1', function() {
          expect(document.activeElement)
            .to.be.an.instanceof(HTMLButtonElement)
            .and.to.have.id('item1');
        });
      });
    });
  });

  describe('when menu is closed', function() {
    beforeEach(hide);

    describe('clicking menubutton', function() {
      let event: Event;
      beforeEach(async function(this: Mocha.Context) {
        this.timeout(1_000);
        setTimeout(() => menubutton?.click());
        event = await oneEvent(element, 'toggle');
        await element.updateComplete;
      });
      it('should open menu', function() {
        expect(element?.open).to.be.true;
      });

      it('should fire "toggle" event', function() {
        expect(event).to.be.ok;
      });

      describe('then clicking menubutton again', function() {
        beforeEach(async function() {
          menubutton?.click();
          setTimeout(() => menubutton?.click());
          event = await oneEvent(element, 'toggle');
          await element.updateComplete;
        });

        it('should close menu', function() {
          expect(element?.open).to.be.false;
        });

        it('should fire "toggle" event', function() {
          expect(event).to.be.ok;
        });
      });
    });
  });
});
