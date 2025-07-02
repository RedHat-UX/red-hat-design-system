import { expect, html, nextFrame } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSchemeToggle } from '@rhds/elements/rh-scheme-toggle/rh-scheme-toggle.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { sendKeys } from '@web/test-runner-commands';

function press(key: string) {
  return async function() {
    await sendKeys({ press: key });
  };
}

describe('<rh-scheme-toggle>', function() {
  describe('simply instantiating', function() {
    let element: RhSchemeToggle;

    beforeEach(async function() {
      element = await createFixture<RhSchemeToggle>(
        html`<rh-scheme-toggle></rh-scheme-toggle>`
      );
      await element.updateComplete;
    });

    it('imperatively instantiates', function() {
      expect(document.createElement('rh-scheme-toggle')).to.be.an.instanceof(
        RhSchemeToggle
      );
    });

    it('should upgrade', async function() {
      const klass = customElements.get('rh-scheme-toggle');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and.to.be.an.instanceOf(RhSchemeToggle);
    });

    it('should be accessible', async function() {
      await expect(element).to.be.accessible();
    });
  });
  describe('keyboard navigation', function() {
    let element: RhSchemeToggle;

    beforeEach(async function() {
      element = await createFixture<RhSchemeToggle>(
        html`<rh-scheme-toggle></rh-scheme-toggle>`
      );
    });
    beforeEach(async () => await element.updateComplete);

    describe('first tab press', function() {
      beforeEach(press('Tab'));

      it('should focus and check the device default mode radio input', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Device default', focused: true, checked: true });
      });

      describe('right arrow press', function() {
        beforeEach(press('ArrowRight'));

        it('should focus and check the light mode radio input', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).to.have.axQuery({ name: 'Light', focused: true, checked: true });
        });
      });

      describe('left arrow press', function() {
        beforeEach(press('ArrowRight'));

        it('should focus and check the dark mode radio input', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).to.have.axQuery({ name: 'Dark', focused: true, checked: true });
        });
      });
    });

    describe('local storage', function() {
      beforeEach(function() {
        localStorage.clear();
      });

      it('if local storage is set to light dark, should focus, check and set the scheme to light dark', async function() {
        localStorage.setItem('rhdsColorScheme', 'light dark');
        // Create new element after setting localStorage so it reads the value during initialization
        const newElement = await createFixture<RhSchemeToggle>(
          html`<rh-scheme-toggle></rh-scheme-toggle>`
        );
        await newElement.updateComplete;
        expect(newElement.scheme).to.equal('light dark');
      });

      it('if local storage is set to light, should focus, check and set the scheme to light', async function() {
        localStorage.setItem('rhdsColorScheme', 'light');
        // Create new element after setting localStorage so it reads the value during initialization
        const newElement = await createFixture<RhSchemeToggle>(
          html`<rh-scheme-toggle></rh-scheme-toggle>`
        );
        await newElement.updateComplete;
        expect(newElement.scheme).to.equal('light');
      });

      it('if local storage is set to dark, should focus, check and set the scheme to dark', async function() {
        localStorage.setItem('rhdsColorScheme', 'dark');
        // Create new element after setting localStorage so it reads the value during initialization
        const newElement = await createFixture<RhSchemeToggle>(
          html`<rh-scheme-toggle></rh-scheme-toggle>`
        );
        await newElement.updateComplete;
        expect(newElement.scheme).to.equal('dark');
      });
    });
  });
});
