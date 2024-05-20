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
            <li><a href="#">Home</a></li>
            <li><a href="../../../">Products</a></li>
            <li><a href="../../">Red Hat OpenShift on AWS</a></li>
            <li><a href="../../">4</a></li>
            <li><a href="../../">Introduction to ROSA</a></li>
            <li><a href="#" aria-current="page">Chapter 1. Understanding ROSA</a></li>
          </ol>
        </rh-breadcrumb>
      `);
      await element.updateComplete;
    });

    it('should be accessible', async function() {
      await expect(element)
          .to.be.accessible();
    });

    it('should contain an ordered list, list items, and anchor tags', function() {
      const olElement = element.querySelector('ol');
      expect(olElement).to.exist;

      const listItemElements = element.querySelectorAll('li');
      expect(listItemElements).to.have.lengthOf.at.least(1);

      listItemElements.forEach(function(li) {
        const anchorElement = li.querySelector('a');
        expect(anchorElement).to.exist;
        expect(anchorElement.getAttribute('href')).to.not.be.empty;
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
        const computedStyle = getComputedStyle(firstBreadcrumb);
        expect(computedStyle.textDecorationLine).to.equal('underline');
      });
    });
  });
});
