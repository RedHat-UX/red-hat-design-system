import { expect, html, nextFrame } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { setViewport, sendKeys } from '@web/test-runner-commands';
import { type A11yTreeSnapshot, a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

import { allUpdates } from '@patternfly/pfe-tools/test/utils.js';

import { RhBackToTop } from '@rhds/elements/rh-back-to-top/rh-back-to-top.js';

const takeProps = (props: string[]) => (obj: object) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => props.includes(k)));

describe('<rh-back-to-top>', function() {
  describe('simply instantiating', function() {
    let element: RhBackToTop;
    it('should upgrade', async function() {
      element = await createFixture<RhBackToTop>(html`<rh-back-to-top></rh-back-to-top>`);
      const klass = customElements.get('rh-back-to-top');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhBackToTop);
    });
  });

  describe('when rendered in a viewport with a height smaller then content length', function() {
    let element: RhBackToTop;
    let snapshot: A11yTreeSnapshot;

    beforeEach(async function() {
      await setViewport({ width: 320, height: 640 });
      window.scrollTo({ top: 0, behavior: 'instant' });
      await nextFrame();
      const container = await createFixture(html`
        <div style="height: 2000px;">
          <rh-back-to-top href="#top">Back to top</rh-back-to-top>
        </div>
      `);
      element = container.querySelector('rh-back-to-top') as RhBackToTop;
      snapshot = await a11ySnapshot();

      await allUpdates(element);
    });

    it('should not be in the accessibility tree', function() {
      expect(snapshot.children).to.be.undefined;
    });

    it('should be visibly hidden on init', function() {
      const { children } = snapshot;
      expect(children).to.be.undefined;
    });

    describe('when page is scrolled down 401px passed the default 400px setting', function() {
      beforeEach(async function() {
        window.scrollTo({ top: 401, behavior: 'instant' });
        await nextFrame();
        await allUpdates(element);
        snapshot = await a11ySnapshot();
      });

      it('should be in the accessibility tree', async function() {
        await expect(element).to.be.accessible();
      });

      it('should be visible', function() {
        expect(snapshot.children?.map(takeProps(['name', 'role']))).to.deep.equal([{ role: 'link', name: 'Back to top' }]);
      });

      describe('pressing the tab key', function() {
        beforeEach(async function() {
          await sendKeys({ press: 'Tab' });
          await allUpdates(element);
          await nextFrame();
        });

        it('should focus the component', function() {
          expect(document.activeElement).to.equal(element);
        });
      });
    });

    describe('when the always visible property is true', function() {
      beforeEach(async function() {
        window.scrollTo({ top: 0, behavior: 'instant' });
        await nextFrame();
        element.visible = 'always';
        await allUpdates(element);
        snapshot = await a11ySnapshot();
      });

      it('should be visible', function() {
        expect(snapshot.children?.map(takeProps(['name', 'role']))).to.deep.equal([{ role: 'link', name: 'Back to top' }]);
      });

      it('should be accessible', async function() {
        await expect(element).to.be.accessible();
      });

      describe('pressing the tab key', function() {
        beforeEach(async function() {
          await sendKeys({ press: 'Tab' });
          await allUpdates(element);
          await nextFrame();
        });
        it('should focus the component', function() {
          expect(document.activeElement).to.equal(element);
        });
      });
    });
    describe('when the scroll distance is set to 1000', function() {
      beforeEach(async function() {
        element.scrollDistance = 1000;
        await allUpdates(element);
        snapshot = await a11ySnapshot();
      });

      it('should be hidden', function() {
        const { children } = snapshot;
        expect(children).to.be.undefined;
      });

      describe('when scrolled 1001px', function() {
        beforeEach(async function() {
          window.scrollTo({ top: 1001, behavior: 'instant' });
          await nextFrame();
          await allUpdates(element);
          snapshot = await a11ySnapshot();
        });

        it('should be visible', function() {
          expect(snapshot.children?.map(takeProps(['name', 'role']))).to.deep.equal([{ role: 'link', name: 'Back to top' }]);
        });
      });
    });
  });

  describe('when rendered in an element with an overflowed height', function() {
    let element: RhBackToTop;

    beforeEach(async function() {
      window.scrollTo({ top: 0, behavior: 'instant' });
      await nextFrame();
      const container = await createFixture<RhBackToTop>(html`
        <div id="top" style="height: 500px; overflow-y: scroll;">
          <div style="height: 2000px;"></div>
          <rh-back-to-top href="#top" scrollable-selector="#top">Back to top</rh-back-to-top>
        </div>
      `);
      element = container.querySelector('rh-back-to-top')!;
      await allUpdates(element);
    });

    it('should be hidden on init', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.not.axContainName('Back to top');
      expect(snapshot).to.not.axContainRole('link');
    });

    describe('when scrolled 401px', function() {
      beforeEach(async function() {
        const scrollableElement = document.querySelector('#top')!;
        scrollableElement.scrollTo({ top: 401, behavior: 'instant' });
        await nextFrame();
        await allUpdates(element);
      });

      it('should be visible', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.axContainName('Back to top');
        expect(snapshot).to.axContainRole('link');
      });
    });
  });

  describe('when no text is provided', function() {
    let element: RhBackToTop;
    let snapshot: A11yTreeSnapshot;

    describe('as a link', function() {
      beforeEach(async function() {
        await setViewport({ width: 320, height: 640 });
        window.scrollTo({ top: 0, behavior: 'instant' });
        await nextFrame();
        const container = await createFixture<RhBackToTop>(html`
          <div id="top">
            <div style="height: 2000px;"></div>
            <rh-back-to-top href="#top"></rh-back-to-top>
          </div>
        `);
        element = container.querySelector('rh-back-to-top')!;
        await allUpdates(element);
      });

      describe('when scrolled', function() {
        beforeEach(async function() {
          window.scrollTo({ top: 401, behavior: 'instant' });
          await nextFrame();
          await allUpdates(element);
          snapshot = await a11ySnapshot();
        });

        it('should have a label of "Back to top"', function() {
          expect(snapshot.children?.map(takeProps(['name', 'role']))).to.deep.equal([{ role: 'link', name: 'Back to top' }]);
        });
      });
    });
  });
});
