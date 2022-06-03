import { expect, html, fixture, aTimeout, oneEvent } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';

import { RhSecondaryNav } from '../rh-secondary-nav.js';
import { RhSecondaryNavDropdown } from '../rh-secondary-nav-dropdown';
import { SecondaryNavDropdownChangeEvent } from '../rh-secondary-nav-dropdown.js';
import { RhSecondaryNavOverlay } from '../rh-secondary-nav-overlay';

import { NAV } from './fixtures';

function isDesktop() {
  const matches = !!window.matchMedia('(min-width: 992px)').matches;
  return matches;
}

let element: RhSecondaryNav;
let mobileButton: HTMLButtonElement | null | undefined;
let overlay: RhSecondaryNavOverlay | null | undefined;
let dropdown: RhSecondaryNavDropdown | null;

describe('<rh-secondary-nav>', async function() {
  beforeEach(async function() {
    element = await fixture<RhSecondaryNav>(NAV);
    mobileButton = element.shadowRoot?.querySelector('button');
    overlay = element.shadowRoot?.querySelector('rh-secondary-nav-overlay');
    dropdown = element.querySelector('rh-secondary-nav-dropdown a');
  });

  it('should upgrade', async function() {
    const klass = customElements.get('rh-secondary-nav');
    expect(element)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhSecondaryNav);
  });

  it('should remove role="navigation" after upgrade', async function() {
    expect(element.hasAttribute('role')).to.be.false;
  });

  it('should have an overlay set to hidden after upgrade', async () => {
    const overlay: RhSecondaryNavOverlay | null | undefined = element.shadowRoot?.querySelector('rh-secondary-nav-overlay');
    expect(overlay?.hasAttribute('hidden')).to.be.true;
  });

  it('lightdom passes the a11y audit', async () => {
    await expect(element).to.be.accessible();
  });

  it('shadowdom passes the a11y audit', async function() {
    await expect(element).shadowDom.to.be.accessible();
  });

  describe('dropdown is clicked', function() {
    let event: SecondaryNavDropdownChangeEvent;
    beforeEach(async function() {
      setTimeout(() => dropdown?.click());
      event = await oneEvent(element, 'change');
    });

    it('should fire a dropdown change event with expanded = true when a dropdown is clicked', async () => {
      expect(event.expanded).to.be.true;
    });

    it('should fire a dropdown change event with expanded = false when a dropdown is clicked twice', async () => {
      setTimeout(() => dropdown?.click());
      event = await oneEvent(element, 'change');
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

      it('should not have is-mobile attribute', async () => {
        await expect(element.isMobile).to.be.false;
        await expect(element.hasAttribute('is-mobile')).to.be.false;
      });

      it('lightdom passes the a11y audit', async function() {
        await expect(element).to.be.accessible();
      });

      it('shadowdom passes the a11y audit', async function() {
        await expect(element).shadowDom.to.be.accessible();
      });

      describe('dropdown is clicked', function() {
        beforeEach(async function() {
          setTimeout(() => dropdown?.click());
          await oneEvent(element, 'change') as SecondaryNavDropdownChangeEvent;
        });

        it('overlay should remove hidden attribute after a dropdown is clicked', async () => {
          expect(overlay?.hasAttribute('hidden')).to.be.false;
        });

        it('should hide overlay if overlay is clicked', async () => {
          setTimeout(() => overlay?.click());
          await aTimeout(50);
          expect(overlay?.hasAttribute('hidden')).to.be.true;
        });

        it('should hide dropdown if overlay is clicked', async () => {
          setTimeout(() => overlay?.click());
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

      it('should have is-mobile attribute', function() {
        expect(element.hasAttribute('is-mobile')).to.be.true;
      });

      it('lightdom passes the a11y audit', async function() {
        await expect(element).to.be.accessible();
      });

      it('shadowdom passes the a11y audit', async function() {
        await expect(element).shadowDom.to.be.accessible();
      });

      describe('open mobile menu', function() {
        beforeEach(async function() {
          setTimeout(() => mobileButton?.click());
          await aTimeout(50);
        });

        it('overlay should remove hidden attribute after mobile menu button is clicked', async () => {
          expect(overlay?.hasAttribute('hidden')).to.be.false;
        });

        it('overlay should have hidden attribute after mobile menu button is clicked twice', async () => {
          setTimeout(() => mobileButton?.click());
          await aTimeout(50);
          expect(overlay?.hasAttribute('hidden')).to.be.true;
        });

        describe('dropdown is clicked', function() {
          beforeEach(async function() {
            setTimeout(() => dropdown?.click());
            await oneEvent(element, 'change') as SecondaryNavDropdownChangeEvent;
          });

          it('overlay should not remove hidden attribute after dropdown is clicked with mobile menu open', async () => {
            expect(overlay?.hasAttribute('hidden')).to.be.false;
          });

          it('overlay should not remove hidden attribute after dropdown is clicked twice with mobile menu open', async () => {
            setTimeout(() => dropdown?.click());
            await oneEvent(element, 'change') as SecondaryNavDropdownChangeEvent;
            expect(overlay?.hasAttribute('hidden')).to.be.false;
          });

          it('should hide overlay if overlay is clicked', async () => {
            setTimeout(() => overlay?.click());
            await aTimeout(50);
            expect(overlay?.hasAttribute('hidden')).to.be.true;
          });

          it('should hide menu and close dropdowns if overlay is clicked', async () => {
            setTimeout(() => overlay?.click());
            await aTimeout(50);
            expect(mobileButton?.hasAttribute('aria-expanded')).to.be.false;
            expect(dropdown?.hasAttribute('expanded')).to.be.false;
          });
        });
      });
    });
  });
});
