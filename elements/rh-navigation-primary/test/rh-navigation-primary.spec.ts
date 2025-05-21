import { expect, fixture, nextFrame } from '@open-wc/testing';
import { RhNavigationPrimary } from '@rhds/elements/rh-navigation-primary/rh-navigation-primary.js';
import { setViewport } from '@web/test-runner-commands';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

import { NAV } from './fixtures';
import { RhNavigationPrimaryItem } from '../rh-navigation-primary-item.js';

function isCompact() {
  const { matches } = window.matchMedia('(min-width: 1200px)');
  return !matches;
}

let element: RhNavigationPrimary;

describe('<rh-navigation-primary>', function() {
  describe('simply instantiating', function() {
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-navigation-primary')).to.be.an.instanceof(RhNavigationPrimary);
    });

    it('should upgrade', async function() {
      element = await fixture<RhNavigationPrimary>(NAV);
      const klass = customElements.get('rh-navigation-primary');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhNavigationPrimary);
    });
  });

  describe('accessibility', function() {
    beforeEach(async function() {
      element = await fixture<RhNavigationPrimary>(NAV);
    });
    beforeEach(async () => await element.updateComplete);

    // will generate false failures as it doesn't handle internals
    // rh-navigation-primary-items apply a role of listitem:
    // `#internals = InternalsController.of(this, { role: 'listitem' });`
    it.skip('is accessible', async function() {
      await expect(element.shadowRoot).to.be.accessible();
    });

    // a11ySnapshot() does not provide the internals data
    it.skip('should have internals role of navigation', async function() {
      expect(await a11ySnapshot()).to.axContainRole('navigation');
    });
  });

  describe('resizing viewports', function() {
    beforeEach(async function() {
      element = await fixture<RhNavigationPrimary>(NAV);
    });
    beforeEach(async () => await element.updateComplete);

    describe('compact viewport', function() {
      beforeEach(async function() {
        await setViewport({ width: 1199, height: 800 });
      });
      beforeEach(async () => await element.updateComplete);
      beforeEach(nextFrame);

      it('should be in compact mode', function() {
        expect(isCompact()).to.be.true;
      });

      it('should have compact class', function() {
        expect(element.shadowRoot?.querySelector('#container')?.classList.contains('compact')).to.be.true;
      });

      it('should have a closed hamburger', function() {
        expect(element.shadowRoot?.querySelector<HTMLDetailsElement>('#hamburger')?.open).to.be.false;
      });

      describe('interactions', function() {
        describe('toggling hamburger menu', function() {
          let details: HTMLDetailsElement | null | undefined;
          let summary: HTMLElement | null | undefined;

          beforeEach(async function() {
            details = element.shadowRoot?.querySelector('#hamburger');
            summary = details?.querySelector('summary');
            summary?.click();
          });
          beforeEach(async () => await element.updateComplete);

          describe('toggle open', function() {
            it('should open the menu', function() {
              expect(details?.hasAttribute('open')).to.be.true;
            });
          });

          describe('toggle closed', function() {
            beforeEach(async function() {
              summary?.click();
            });
            beforeEach(async () => await element.updateComplete);

            it('should close the menu', function() {
              expect(details?.hasAttribute('open')).to.be.false;
            });
          });
        });
      });
    });

    describe('wide viewport', function() {
      beforeEach(async function() {
        await setViewport({ width: 1680, height: 800 });
      });
      beforeEach(async () => await element.updateComplete);
      beforeEach(nextFrame);

      it('should be in wide mode', function() {
        expect(isCompact()).to.be.false;
      });

      it('should not have compact class', function() {
        expect(element.shadowRoot?.querySelector('#container')?.classList.contains('compact')).to.be.false;
      });

      it('should have an open hamburger', function() {
        expect(element.shadowRoot?.querySelector<HTMLDetailsElement>('#hamburger')?.open).to.be.true;
      });

      describe('interactions', function() {
        let navItem: RhNavigationPrimaryItem | null;
        let details: HTMLDetailsElement | null | undefined;
        let summary: HTMLElement | null | undefined;
        let event: Event;

        beforeEach(async function() {
          navItem = element.querySelector('rh-navigation-primary-item[variant="dropdown"]');
          details = navItem?.shadowRoot?.querySelector('details');
          summary = details?.querySelector('summary');
          summary?.click();
        });
        beforeEach(async () => await element.updateComplete);

        describe('clicking a navigation dropdown', function() {
          it('should open the menu', function() {
            expect(details?.hasAttribute('open')).to.be.true;
          });

          describe('clicking a second time', function() {
            beforeEach(async function() {
              summary?.click();
            });
            beforeEach(async () => await element.updateComplete);

            it('should close the menu', function() {
              expect(details?.hasAttribute('open')).to.be.false;
            });
          });
        });

        describe('imperatively toggling a navigation dropdown', function() {
          describe('toggling open', function() {
            beforeEach(async function() {
              navItem!.show();
            });
            beforeEach(async () => await element.updateComplete);

            it('should open the dropdown', function() {
              expect(details?.hasAttribute('open')).to.be.true;
            });
          });

          describe('toggling closed', function() {
            beforeEach(async function() {
              navItem!.hide();
            });
            beforeEach(async () => await element.updateComplete);

            it('should close the dropdown', function() {
              expect(details?.hasAttribute('open')).to.be.false;
            });
          });
        });
      });
    });
  });

  describe('dark mode', function() {
    beforeEach(async function() {
      element = await fixture<RhNavigationPrimary>(NAV);
      element.colorPalette = 'darkest';
    });
    beforeEach(async () => await element.updateComplete);

    it('should have a dark themed menu bar', function() {
      const bar = element.shadowRoot?.querySelector('#bar') as HTMLElement | undefined;
      expect(getComputedStyle(bar!).getPropertyValue('background-color')).to.be.equal('rgb(21, 21, 21)'); /* rgb(21, 21, 21) equiv #151515 */
    });
  });
});
