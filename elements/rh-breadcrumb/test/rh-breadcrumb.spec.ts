import { expect, html, nextFrame } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { allUpdates } from '@patternfly/pfe-tools/test/utils.js';

import { RhBreadcrumb } from '@rhds/elements/rh-breadcrumb/rh-breadcrumb.js';

describe('<rh-breadcrumb>', function() {
  describe('simply instantiating', function() {
    let element: RhBreadcrumb;
    it('should upgrade', async function() {
      element = await createFixture<RhBreadcrumb>(html`<rh-breadcrumb></rh-breadcrumb>`);
      const klass = customElements.get('rh-breadcrumb');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhBreadcrumb);
    });
  });

  describe('when the element loads', function() {
    let element: RhBreadcrumb;
    beforeEach(async function() {
      element = await createFixture<RhBreadcrumb>(html`
        <rh-breadcrumb>
          <ol>
            <li><a href="#">One</a></li>
            <li><a href="#">Two</a></li>
            <li><a href="#">Three</a></li>
            <li><a href="#">Four</a></li>
            <li><a href="#">Five</a></li>
            <li><a href="#" aria-current="page">Six</a></li>
          </ol>
        </rh-breadcrumb>
      `);
      await element.updateComplete;
    });

    it('should be accessible', async function() {
      await expect(element)
          .to.be.accessible();
    });

    it('should have nav element with aria-label "Breadcrumb"', async function() {
      const { shadowRoot } = element;
      const navElement = shadowRoot?.querySelector('nav');
      expect(navElement).to.exist;
      expect(navElement?.getAttribute('aria-label')).to.equal('Breadcrumb');
    });

    it('should contain an ordered list, list items, and anchor tags', function() {
      const olElement = element.querySelector('ol');
      expect(olElement).to.exist;

      const listItemElements = element.querySelectorAll('li');
      expect(listItemElements).to.have.lengthOf.at.least(1);

      listItemElements.forEach(function(li) {
        const anchorElement = li.querySelector('a');
        expect(anchorElement).to.exist;
        expect(anchorElement?.getAttribute('href')).to.not.be.empty;
      });
    });

    describe('pressing the tab key', function() {
      beforeEach(async function() {
        await sendKeys({ press: 'Tab' });
        await allUpdates(element);
        await nextFrame();
      });

      it('should focus the first link', function() {
        const firstBreadcrumb = element.querySelector('a');
        expect(document.activeElement).to.equal(firstBreadcrumb);
      });

      it('should underline the first link when focused', function() {
        const firstBreadcrumb = element.querySelector('a');
        const computedStyle = getComputedStyle(firstBreadcrumb as Element);
        expect(computedStyle.textDecorationLine).to.equal('underline');
      });
    });
  });

  describe('when the element has an accessible label property', function() {
    let element: RhBreadcrumb;
    const customAccessibleLabel = 'Custom Breadcrumb Label';
    beforeEach(async function() {
      element = await createFixture<RhBreadcrumb>(html`
        <rh-breadcrumb accessible-label="${customAccessibleLabel}">
          <ol>
            <li><a href="#">One</a></li>
            <li><a href="#">Two</a></li>
            <li><a href="#">Three</a></li>
            <li><a href="#">Four</a></li>
            <li><a href="#">Five</a></li>
            <li><a href="#" aria-current="page">Six</a></li>
          </ol>
        </rh-breadcrumb>
      `);
      await element.updateComplete;
    });

    it('should output the custom accessible label', async function() {
      const { shadowRoot } = element;
      const navElement = shadowRoot?.querySelector('nav');
      expect(navElement).to.exist;
      expect(navElement?.getAttribute('aria-label')).to.equal(customAccessibleLabel);
    });
  });

  describe('when truncate is enabled', function() {
    let element: RhBreadcrumb;
    const truncateBtnClass = 'truncate-btn';
    const truncateBtnContainerClass = `${truncateBtnClass}-container`;

    describe('with 5+ breadcrumb items', function() {
      beforeEach(async function() {
        element = await createFixture<RhBreadcrumb>(html`
          <rh-breadcrumb truncate>
            <ol>
              <li><a href="#">One</a></li>
              <li><a href="#">Two</a></li>
              <li><a href="#">Three</a></li>
              <li><a href="#">Four</a></li>
              <li><a href="#">Five</a></li>
              <li><a href="#" aria-current="page">Six</a></li>
            </ol>
          </rh-breadcrumb>
        `);
        await element.updateComplete;
      });

      it('should be accessible', async function() {
        await expect(element).to.be.accessible();
      });

      it('should hide middle items and show truncation button', function() {
        const listItems = element.querySelectorAll('li');
        const items = Array.from(listItems);
        expect(listItems).to.have.lengthOf(7); // 6 breadcrumbs + truncation btn

        expect(items[0].hasAttribute('hidden')).to.be.false;
        expect(items.at(-1)?.hasAttribute('hidden')).to.be.false;
        expect(items.at(-2)?.hasAttribute('hidden')).to.be.false;

        for (const [i, item] of items.entries()) {
          if (item.classList.contains(truncateBtnContainerClass)) {
            continue;
          }

          // Find the hidden list items:
          const isMiddle = i > 0 && i < items.length - 2;
          expect(item.hasAttribute('hidden')).to.equal(isMiddle);
        }

        const truncateBtn = element.querySelector(`.${truncateBtnClass}`);
        expect(truncateBtn).to.exist;
        expect(truncateBtn?.getAttribute('aria-expanded')).to.equal('false');
        expect(truncateBtn?.textContent?.includes('Show')).to.be.true;
      });

      it('should show all items and remove button when truncation button is clicked', async function() {
        const truncateBtn = element.querySelector(`.${truncateBtnClass}`);
        expect(truncateBtn).to.exist;
        (truncateBtn as HTMLElement)?.click();
        await element.updateComplete;

        const listItems = element.querySelectorAll('li');
        for (const item of listItems) {
          expect(item.hasAttribute('hidden')).to.be.false;
        }
        expect(element.querySelector(`.${truncateBtnClass}`)).to.not.exist;
      });
    });

    describe('with fewer than 5 breadcrumb items', function() {
      beforeEach(async function() {
        element = await createFixture<RhBreadcrumb>(html`
          <rh-breadcrumb truncate>
            <ol>
              <li><a href="#">One</a></li>
              <li><a href="#">Two</a></li>
              <li><a href="#">Three</a></li>
              <li><a href="#" aria-current="page">Four</a></li>
            </ol>
          </rh-breadcrumb>
        `);
        await element.updateComplete;
      });

      it('should not truncate or add truncation button', function() {
        const listItems = element.querySelectorAll('li');
        expect(listItems).to.have.lengthOf(4);

        for (const item of listItems) {
          expect(item.hasAttribute('hidden')).to.be.false;
        }

        expect(element.querySelector(`.${truncateBtnClass}`)).to.not.exist;
      });
    });
  });
});
