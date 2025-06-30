import { expect, html, nextFrame } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSchemeToggle } from '@rhds/elements/rh-scheme-toggle/rh-scheme-toggle.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import type { A11yTreeSnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

describe('<rh-scheme-toggle>', function () {
  describe('simply instantiating', function () {
    let element: RhSchemeToggle;

    beforeEach(async function () {
      element = await createFixture<RhSchemeToggle>(
        html`<rh-scheme-toggle></rh-scheme-toggle>`
      );
      await element.updateComplete;
    });

    it('imperatively instantiates', function () {
      expect(document.createElement('rh-scheme-toggle')).to.be.an.instanceof(
        RhSchemeToggle
      );
    });

    it('should upgrade', async function () {
      const klass = customElements.get('rh-scheme-toggle');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and.to.be.an.instanceOf(RhSchemeToggle);
    });

    it('should be accessible', async function () {
      await expect(element).to.be.accessible();
    });
  });
  describe('testing the toggle states', function () {
    let element: RhSchemeToggle;
    let snapshot: A11yTreeSnapshot;

    beforeEach(async function () {
      element = await createFixture<RhSchemeToggle>(
        html`<rh-scheme-toggle></rh-scheme-toggle>`
      );
      await element.updateComplete;
      await nextFrame();
    });

    it('should check the clicked input and update scheme', async function () {
      // Get all radio inputs from the shadow DOM
      const lightInput = element.shadowRoot?.querySelector(
        'input[value="light"]'
      ) as HTMLInputElement;
      const darkInput = element.shadowRoot?.querySelector(
        'input[value="dark"]'
      ) as HTMLInputElement;
      const autoInput = element.shadowRoot?.querySelector(
        'input[value="light dark"]'
      ) as HTMLInputElement;

      expect(lightInput).to.exist;
      expect(darkInput).to.exist;
      expect(autoInput).to.exist;

      // Click the light mode input
      lightInput.click();
      await element.updateComplete;

      // Verify the light input is now checked
      expect(lightInput.checked).to.be.true;
      expect(darkInput.checked).to.be.false;
      expect(autoInput.checked).to.be.false;
      expect(element.scheme).to.equal('light');

      // Click the dark mode input
      darkInput.click();
      await element.updateComplete;

      // Verify the dark input is now checked
      expect(lightInput.checked).to.be.false;
      expect(darkInput.checked).to.be.true;
      expect(autoInput.checked).to.be.false;
      expect(element.scheme).to.equal('dark');

      // Click the auto mode input
      autoInput.click();
      await element.updateComplete;

      // Verify the auto input is now checked
      expect(lightInput.checked).to.be.false;
      expect(darkInput.checked).to.be.false;
      expect(autoInput.checked).to.be.true;
      expect(element.scheme).to.equal('light dark');
    });
  });
});
