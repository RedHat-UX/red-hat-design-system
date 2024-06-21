import type { RhNavigationPrimaryOverlay } from '@rhds/elements/rh-navigation-primary/rh-navigation-primary-overlay.js';
import type {
  RhNavigationPrimaryDropdown,
  NavigationPrimaryDropdownExpandEvent,
} from '@rhds/elements/rh-navigation-primary/rh-navigation-primary-dropdown.js';

import { expect, assert, fixture, aTimeout, oneEvent } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';

import { RhNavigationPrimary } from '@rhds/elements/rh-navigation-primary/rh-navigation-primary.js';

import { DARKVARIANT, NAV } from './fixtures';

function isDesktop() {
  const matches = !!window.matchMedia('(min-width: 992px)').matches;
  return matches;
}

let element: RhNavigationPrimary;
let mobileButton: HTMLButtonElement | null | undefined;
let overlay: RhNavigationPrimaryOverlay | null | undefined;
let dropdown: RhNavigationPrimaryDropdown | null;

import '@patternfly/pfe-tools/test/stub-logger.js';

describe('<rh-navigation-primary>', async function() {
  beforeEach(async function() {
    element = await fixture<RhNavigationPrimary>(NAV);
    mobileButton = element.shadowRoot?.querySelector('button');
    overlay = element.shadowRoot?.querySelector('rh-navigation-primary-overlay');
    dropdown = element.querySelector('rh-navigation-primary-dropdown a');
  });

  it('should upgrade', async function() {
    const klass = customElements.get('rh-navigation-primary');
    expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhNavigationPrimary);
  });

  it('should remove role="navigation" after upgrade', async function() {
    expect(element.hasAttribute('role')).to.be.false;
  });

  it('should by default set color-palette="lighter"', async function() {
    expect(element.getAttribute('color-palette') === 'lighter').to.be.true;
  });

  it('should have an overlay set to hidden after upgrade', async function() {
    const overlay: RhNavigationPrimaryOverlay | null | undefined = element.shadowRoot?.querySelector('rh-navigation-primary-overlay');
    expect(overlay?.hasAttribute('open')).to.be.false;
  });

  it('passes the a11y audit', async function() {
    await expect(element).to.be.accessible();
  });

  describe('dropdown is clicked', function() {
    let event: NavigationPrimaryDropdownExpandEvent;
    beforeEach(async function() {
      setTimeout(function() {
        dropdown?.click();
      });
      event = await oneEvent(element, 'expand-request');
    });

    it('should fire a dropdown change event with expanded = true when a dropdown is clicked', async function() {
      expect(event.expanded).to.be.true;
    });

    it('should fire a dropdown change event with expanded = false when a dropdown is clicked twice', async function() {
      setTimeout(function() {
        dropdown?.click();
      });
      event = await oneEvent(element, 'expand-request');
      expect(event.expanded).to.be.false;
    });
  });

  describe('adjusting window size', function() {
    describe('desktop screen', function() {
      beforeEach(async function() {
        await setViewport({ width: 992, height: 800 });
        await element.updateComplete;
        await aTimeout(100);
        expect(isDesktop()).to.be.true;
      });

      it('should not have class compact on shadow root nav', async function() {
        await expect(element.shadowRoot?.querySelector('nav')?.classList.contains('compact')).to.be.false;
      });

      it('lightdom passes the a11y audit', async function() {
        await expect(element).to.be.accessible();
      });

      it('shadowdom passes the a11y audit', async function() {
        await expect(element).shadowDom.to.be.accessible();
      });

      describe('dropdown is clicked', function() {
        beforeEach(async function() {
          setTimeout(function() {
            dropdown?.click();
          });
          await oneEvent(element, 'expand-request') as NavigationPrimaryDropdownExpandEvent;
        });

        it('overlay should remove hidden attribute after a dropdown is clicked', async function() {
          expect(overlay?.hasAttribute('hidden')).to.be.false;
        });

        it('should hide overlay if overlay is clicked', async function() {
          setTimeout(function() {
            overlay?.click();
          });
          await aTimeout(50);
          expect(overlay?.hasAttribute('open')).to.be.false;
        });

        it('should hide dropdown if overlay is clicked', async function() {
          setTimeout(function() {
            overlay?.click();
          });
          await aTimeout(50);
          expect(dropdown?.hasAttribute('expanded')).to.be.false;
        });
      });
    });

    describe('mobile screen', function() {
      beforeEach(async function() {
        await setViewport({ width: 991, height: 800 });
        await element.updateComplete;
        await aTimeout(100);
        expect(isDesktop()).to.be.false;
      });

      it('should have class compact on shadow root nav', function() {
        expect(element.shadowRoot?.querySelector('nav')?.classList.contains('compact')).to.be.true;
      });

      it('lightdom passes the a11y audit', async function() {
        await expect(element).to.be.accessible();
      });

      it('shadowdom passes the a11y audit', async function() {
        await expect(element).shadowDom.to.be.accessible();
      });

      describe('open mobile menu', function() {
        beforeEach(async function() {
          setTimeout(function() {
            mobileButton?.click();
          });
          await aTimeout(50);
        });

        it('overlay should remove hidden attribute after mobile menu button is clicked', async function() {
          expect(overlay?.hasAttribute('hidden')).to.be.false;
        });

        it('overlay should have hidden attribute after mobile menu button is clicked twice', async function() {
          setTimeout(function() {
            mobileButton?.click();
          });
          await aTimeout(50);
          expect(overlay?.hasAttribute('open')).to.be.false;
        });

        describe('dropdown is clicked', function() {
          beforeEach(async function() {
            setTimeout(function() {
              dropdown?.click();
            });
            await oneEvent(element, 'expand-request') as NavigationPrimaryDropdownExpandEvent;
          });

          it('overlay should not remove hidden attribute after dropdown is clicked with mobile menu open', async function() {
            expect(overlay?.hasAttribute('hidden')).to.be.false;
          });

          it('overlay should not remove hidden attribute after dropdown is clicked twice with mobile menu open', async function() {
            setTimeout(function() {
              dropdown?.click();
            });
            await oneEvent(element, 'expand-request') as NavigationPrimaryDropdownExpandEvent;
            expect(overlay?.hasAttribute('hidden')).to.be.false;
          });

          it('should hide overlay if overlay is clicked', async function() {
            setTimeout(function() {
              overlay?.click();
            });
            await aTimeout(50);
            expect(overlay?.hasAttribute('open')).to.be.false;
          });

          it('should hide menu and close dropdowns if overlay is clicked', async function() {
            setTimeout(function() {
              overlay?.click();
            });
            await aTimeout(50);
            expect(mobileButton?.getAttribute('aria-expanded')).to.be.equal('false');
            expect(dropdown?.hasAttribute('expanded')).to.be.false;
          });
        });
      });
    });
  });

  describe('color-palette dark', function() {
    beforeEach(async function() {
      element = await fixture<RhNavigationPrimary>(DARKVARIANT);
      await element.updateComplete;
      await aTimeout(150);
    });

    it('should have a dark themed menu bar', async function() {
      expect(element.getAttribute('color-palette') === 'dark').to.be.true;
      const container = element.shadowRoot?.querySelector('#container');
      if (container) {
        expect(getComputedStyle(container).getPropertyValue('background-color')).to.be.equal('rgb(56, 56, 56)');
      } else {
        assert.fail('container', 'null', 'No container found, did element upgrade?');
      }
    });
  });

  describe('current page indicator', function() {
    let dropdown: RhNavigationPrimaryDropdown;

    beforeEach(async function() {
      element = await fixture<RhNavigationPrimary>(NAV);
      await element.updateComplete;
      dropdown = element.querySelector('rh-navigation-primary-dropdown') as RhNavigationPrimaryDropdown;
    });

    it('should have a current page indicator on a dropdown that contains a link set to current page', async function() {
      const link = dropdown.querySelector('[slot="menu"] a');
      const container = dropdown.shadowRoot?.querySelector('#container');
      link.setAttribute('aria-current', 'page');
      await dropdown.updateComplete;
      await aTimeout(50);
      expect(container.classList.contains('highlight')).to.be.true;
    });
  });
});
