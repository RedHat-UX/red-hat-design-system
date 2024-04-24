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
            <li><a href="../../../..">Home</a></li>
            <li><a href="../../../">About</a></li>
            <li><a href="../../">Our Team</a></li>
            <li><a href="#" aria-current="page">Jamie Simeon Walinsky-Choeffer Houseman Stalinsky</a></li>
          </ol>
        </rh-breadcrumb>
      `);
      await element.updateComplete;
    });

    it('should be accessible', async function() {
      await expect(element)
          .to.be.accessible();
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
    });
  });
});
