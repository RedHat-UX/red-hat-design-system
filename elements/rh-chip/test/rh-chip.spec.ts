import { expect, html, oneEvent } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhChip, ChipChangeEvent } from '@rhds/elements/rh-chip/rh-chip.js';
import { sendKeys } from '@web/test-runner-commands';

describe('<rh-chip>', function() {
  let element: RhChip;

  describe('simply instantiating', function() {
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-chip')).to.be.an.instanceof(RhChip);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhChip>(html`<rh-chip>Option</rh-chip>`);
      const klass = customElements.get('rh-chip');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhChip);
    });
  });

  describe('when the element loads', function() {
    let element: RhChipGroup;
    beforeEach(async function() {
      element = await createFixture<RhChipGroup>(html`
        <rh-chip>Option 1</rh-chip>
      `);
      await element.updateComplete;
    });

    it('should be accessible', async function() {
      await expect(element)
          .to.be.accessible();
    });
  });

  function getCheckbox(el: RhChip): HTMLInputElement {
    return el.shadowRoot!.querySelector('input') as HTMLInputElement;
  }

  describe('a basic chip', function() {
    let checkbox: HTMLInputElement;

    beforeEach(async function() {
      element = await createFixture<RhChip>(html`<rh-chip>Test Chip</rh-chip>`);
      await element.updateComplete;
      checkbox = getCheckbox(element);
    });

    it('fires a change event when clicked', async function() {
      const changeEventPromise = oneEvent(element, 'change');
      checkbox.click();
      const event = await changeEventPromise;

      expect(event).to.be.an.instanceof(ChipChangeEvent);
      expect(event.type).to.equal('change');
      expect((event as ChipChangeEvent).checked).to.be.false; // Initial value before change

      // Chip now checked
      expect(element.checked).to.be.true;
    });
  });

  describe('a disabled chip', function() {
    let checkbox: HTMLInputElement;

    beforeEach(async function() {
      element = await createFixture<RhChip>(html`<rh-chip disabled>Disabled Chip</rh-chip>`);
      await element.updateComplete;
      checkbox = getCheckbox(element);
    });

    it('does not have the checked attribute on the host', function() {
      expect(element.getAttribute('checked')).to.be.null;
    });

    it('has aria-disabled attribute set to true', function() {
      expect(checkbox.getAttribute('aria-disabled')).to.equal('true');
    });

    it('prevents checking via click when disabled', async function() {
      checkbox.click();
      await element.updateComplete;
      expect(element.checked).to.be.false;
    });

    it('prevents checking via keyboard when disabled', async function() {
      checkbox.focus();

      await sendKeys({ press: ' ' });
      await element.updateComplete;

      expect(element.checked).to.be.false;
    });
  });

  describe('a disabled checked chip', function() {
    let checkbox: HTMLInputElement;

    beforeEach(async function() {
      element = await createFixture<RhChip>(html`<rh-chip checked disabled>Disabled Chip</rh-chip>`);
      await element.updateComplete;
      checkbox = getCheckbox(element);
    });

    it('has aria-disabled attribute set to true', function() {
      expect(checkbox.getAttribute('aria-disabled')).to.equal('true');
    });

    it('prevents unchecking via click when disabled', async function() {
      checkbox.click();
      await element.updateComplete;
      expect(element.checked).to.be.true;
    });

    it('prevents unchecking via keyboard when disabled', async function() {
      checkbox.focus();

      await sendKeys({ press: ' ' });
      await element.updateComplete;

      expect(element.checked).to.be.true;
    });
  });
});
