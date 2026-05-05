import type { A11yTreeSnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { expect, html, nextFrame } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { sendKeys } from '@web/test-runner-commands';
import { a11ySnapshot, querySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

import { RhTextarea } from '@rhds/elements/rh-textarea/rh-textarea.js';

describe('<rh-textarea>', function() {
  it('imperatively instantiates', function() {
    expect(document.createElement('rh-textarea')).to.be.an.instanceof(RhTextarea);
  });

  describe('simply instantiating', function() {
    let element: RhTextarea;
    let snapshot: A11yTreeSnapshot;

    beforeEach(async function() {
      element = await createFixture<RhTextarea>(html`
        <rh-textarea accessible-label="Notes"></rh-textarea>
      `);
    });

    it('should upgrade', async function() {
      const klass = customElements.get('rh-textarea');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhTextarea);
    });

    it('has accessible textbox role', async function() {
      snapshot = await a11ySnapshot();
      const textbox = querySnapshot(snapshot, { role: 'textbox' });
      expect(textbox).to.not.be.null;
    });

    it('has accessible name from accessible-label', async function() {
      snapshot = await a11ySnapshot();
      const textbox = querySnapshot(snapshot, { role: 'textbox' });
      expect(textbox?.name).to.be.ok;
    });

    it('defaults rows to 5', function() {
      expect(element.rows).to.equal(5);
    });

    it('defaults resize to vertical', function() {
      expect(element.resize).to.equal('vertical');
    });

    it('defaults value to empty string', function() {
      expect(element.value).to.equal('');
    });
  });

  describe('with label and placeholder', function() {
    let element: RhTextarea;

    beforeEach(async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <label for="textarea">Notes</label>
          <rh-textarea id="textarea" placeholder="Enter notes"></rh-textarea>
        </div>
      `);
      element = container.querySelector('rh-textarea')!;
      await element.updateComplete;
    });

    it('should be accessible', async function() {
      await expect(element).to.be.accessible();
    });

    it('has textbox in a11y tree', async function() {
      const snapshot = await a11ySnapshot();
      const textbox = querySnapshot(snapshot, { role: 'textbox' });
      expect(textbox).to.not.be.null;
    });

    describe('typing into the textarea', function() {
      beforeEach(async function() {
        element.focus();
        await sendKeys({ type: 'hello' });
        await element.updateComplete;
      });

      it('syncs value with typed input', function() {
        expect(element.value).to.equal('hello');
      });
    });

    describe('typing fires input event', function() {
      let inputFired: boolean;

      beforeEach(async function() {
        inputFired = false;
        element.addEventListener('input', () => {
          inputFired = true;
        });
        element.focus();
        await sendKeys({ type: 'a' });
      });

      it('fires input event', function() {
        expect(inputFired).to.be.true;
      });
    });
  });

  describe('accessible label sources', function() {
    it('uses associated label (for/id) as textarea name', async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <label for="textarea-label">Products</label>
          <rh-textarea id="textarea-label"></rh-textarea>
        </div>
      `);
      const element = container.querySelector('rh-textarea')!;
      await element.updateComplete;
      // Query the shadow DOM directly because the test runner's a11y
      // snapshot does not expose cross-root ariaLabelledByElements wiring.
      const textarea = element.shadowRoot!.querySelector('textarea')!;
      expect(textarea.ariaLabelledByElements?.length).to.be.greaterThan(0);
    });

    it('uses accessible-label attribute', async function() {
      await createFixture<RhTextarea>(html`
        <rh-textarea accessible-label="Feedback"></rh-textarea>
      `);
      const snapshot = await a11ySnapshot();
      const textbox = querySnapshot(snapshot, { role: 'textbox' });
      expect(textbox?.name).to.equal('Feedback');
    });

    it('uses host aria-label when set', async function() {
      await createFixture<RhTextarea>(html`
        <rh-textarea aria-label="Custom label"></rh-textarea>
      `);
      const snapshot = await a11ySnapshot();
      const textbox = querySnapshot(snapshot, { role: 'textbox' });
      expect(textbox?.name).to.equal('Custom label');
    });
  });

  describe('disabled', function() {
    let element: RhTextarea;

    beforeEach(async function() {
      element = await createFixture<RhTextarea>(html`
        <rh-textarea disabled accessible-label="Notes"></rh-textarea>
      `);
      await element.updateComplete;
    });

    it('reflects disabled property', function() {
      expect(element.disabled).to.be.true;
      expect(element.hasAttribute('disabled')).to.be.true;
    });

    it('excludes value from FormData', async function() {
      const form = await createFixture<HTMLFormElement>(html`
        <form>
          <rh-textarea name="notes" value="test" disabled accessible-label="Notes"></rh-textarea>
        </form>
      `);
      const formData = new FormData(form);
      expect(formData.get('notes')).to.be.null;
    });

    it('reflects disabled false when attribute removed', async function() {
      element.removeAttribute('disabled');
      await element.updateComplete;
      expect(element.disabled).to.be.false;
    });
  });

  describe('readonly', function() {
    let element: RhTextarea;

    beforeEach(async function() {
      element = await createFixture<RhTextarea>(html`
        <rh-textarea readonly value="read only content" accessible-label="Notes"></rh-textarea>
      `);
      await element.updateComplete;
    });

    it('reflects readonly property', function() {
      expect(element.readonly).to.be.true;
      expect(element.hasAttribute('readonly')).to.be.true;
    });

    it('preserves value for form submission', function() {
      expect(element.value).to.equal('read only content');
    });
  });

  describe('state', function() {
    let element: RhTextarea;

    beforeEach(async function() {
      element = await createFixture<RhTextarea>(html`
        <rh-textarea state="danger" help-text="Error message" accessible-label="Notes"></rh-textarea>
      `);
      await element.updateComplete;
    });

    it('reflects state attribute', function() {
      expect(element.state).to.equal('danger');
      expect(element.getAttribute('state')).to.equal('danger');
    });

    it('exposes help text', function() {
      expect(element.helpText).to.equal('Error message');
    });
  });

  describe('help-text', function() {
    it('exposes help-text attribute via property', async function() {
      const element = await createFixture<RhTextarea>(html`
        <rh-textarea help-text="Helper message"></rh-textarea>
      `);
      await element.updateComplete;
      expect(element.helpText).to.equal('Helper message');
    });

    it('renders slotted help-text', async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <rh-textarea accessible-label="Notes">
            <p slot="help-text">Slotted help</p>
          </rh-textarea>
        </div>
      `);
      const element = container.querySelector('rh-textarea')!;
      await element.updateComplete;
      await nextFrame();
      const slotted = element.querySelector('[slot="help-text"]');
      expect(slotted).to.exist;
      expect(slotted!.textContent).to.equal('Slotted help');
    });
  });

  describe('character count', function() {
    it('reflects show-character-count property', async function() {
      const element = await createFixture<RhTextarea>(html`
        <rh-textarea show-character-count maxlength="100"></rh-textarea>
      `);
      await element.updateComplete;
      expect(element.showCharacterCount).to.be.true;
      expect(element.hasAttribute('show-character-count')).to.be.true;
    });

    describe('typing with character count enabled', function() {
      let element: RhTextarea;

      beforeEach(async function() {
        element = await createFixture<RhTextarea>(html`
          <rh-textarea show-character-count maxlength="100" accessible-label="Bio"></rh-textarea>
        `);
        await element.updateComplete;
      });

      it('updates value length as user types', async function() {
        element.focus();
        await sendKeys({ type: 'hello' });
        await element.updateComplete;
        expect(element.value).to.equal('hello');
        expect(element.value.length).to.equal(5);
      });
    });
  });

  describe('form association', function() {
    let form: HTMLFormElement;
    let element: RhTextarea;

    beforeEach(async function() {
      form = await createFixture<HTMLFormElement>(html`
        <form>
          <label for="textarea">Notes</label>
          <rh-textarea id="textarea" name="notes" value="initial value"></rh-textarea>
        </form>
      `);
      element = form.querySelector('rh-textarea')!;
      await element.updateComplete;
    });

    it('includes value in form data', function() {
      const formData = new FormData(form);
      expect(formData.get('notes')).to.equal('initial value');
    });

    it('excludes value from FormData when disabled', async function() {
      element.disabled = true;
      await element.updateComplete;
      await nextFrame();
      const formData = new FormData(form);
      expect(formData.get('notes')).to.be.null;
    });

    it('restores to initial value on form reset', async function() {
      element.value = 'changed';
      await element.updateComplete;
      await nextFrame();
      expect(element.value).to.equal('changed');

      form.reset();
      await element.updateComplete;
      await nextFrame();
      expect(element.value).to.equal('initial value');
    });

    it('restores to empty on form reset when no initial value', async function() {
      const emptyForm = await createFixture<HTMLFormElement>(html`
        <form>
          <rh-textarea name="notes" accessible-label="Notes"></rh-textarea>
        </form>
      `);
      const el = emptyForm.querySelector('rh-textarea')!;
      await el.updateComplete;

      el.value = 'typed';
      await el.updateComplete;
      await nextFrame();

      emptyForm.reset();
      await el.updateComplete;
      await nextFrame();
      expect(el.value).to.equal('');
    });
  });

  describe('required', function() {
    let form: HTMLFormElement;
    let element: RhTextarea;

    beforeEach(async function() {
      form = await createFixture<HTMLFormElement>(html`
        <form>
          <label for="textarea">Notes</label>
          <rh-textarea id="textarea" name="notes" required></rh-textarea>
        </form>
      `);
      element = form.querySelector('rh-textarea')!;
      await element.updateComplete;
    });

    it('reflects required attribute to property', function() {
      expect(element.required).to.be.true;
      expect(element.hasAttribute('required')).to.be.true;
    });

    it('fails form validation when empty', function() {
      expect(form.reportValidity()).to.be.false;
    });

    it('reflects required false when attribute removed', async function() {
      element.removeAttribute('required');
      await element.updateComplete;
      expect(element.required).to.be.false;
    });

    it('checkValidity returns false when required and empty', function() {
      expect(element.checkValidity()).to.be.false;
    });

    it('checkValidity returns true when required and value set', async function() {
      element.value = 'some text';
      await element.updateComplete;
      await nextFrame();
      expect(element.checkValidity()).to.be.true;
    });

    it('checkValidity returns true when not required and empty', async function() {
      element.required = false;
      await element.updateComplete;
      expect(element.checkValidity()).to.be.true;
    });

    it('reportValidity returns false when required and empty', function() {
      expect(element.reportValidity()).to.be.false;
    });

    it('reportValidity returns true when required and value set', async function() {
      element.value = 'some text';
      await element.updateComplete;
      await nextFrame();
      expect(element.reportValidity()).to.be.true;
    });

    it('form reportValidity returns false when required and empty', function() {
      expect(form.reportValidity()).to.be.false;
    });

    it('validity updates when value changes', async function() {
      expect(element.checkValidity()).to.be.false;

      element.value = 'filled';
      await element.updateComplete;
      await nextFrame();
      expect(element.checkValidity()).to.be.true;

      element.value = '';
      await element.updateComplete;
      await nextFrame();
      expect(element.checkValidity()).to.be.false;
    });

    it('exposes validity.valueMissing', function() {
      element.checkValidity();
      expect(element.validity.valueMissing).to.be.true;
    });
  });

  describe('minlength validation', function() {
    let element: RhTextarea;

    beforeEach(async function() {
      element = await createFixture<RhTextarea>(html`
        <rh-textarea minlength="10" value="hi" accessible-label="Notes"></rh-textarea>
      `);
      await element.updateComplete;
    });

    it('checkValidity returns false when value is shorter than minlength', function() {
      expect(element.checkValidity()).to.be.false;
    });

    it('checkValidity returns true when value meets minlength', async function() {
      element.value = 'hello world';
      await element.updateComplete;
      await nextFrame();
      expect(element.checkValidity()).to.be.true;
    });
  });

  describe('proxy methods', function() {
    let element: RhTextarea;

    beforeEach(async function() {
      element = await createFixture<RhTextarea>(html`
        <rh-textarea value="hello world" accessible-label="Notes"></rh-textarea>
      `);
      await element.updateComplete;
    });

    it('select() selects all text', function() {
      element.select();
      expect(element.selectionStart).to.equal(0);
      expect(element.selectionEnd).to.equal(11);
    });

    it('setSelectionRange() sets cursor position', function() {
      element.setSelectionRange(5, 5);
      expect(element.selectionStart).to.equal(5);
      expect(element.selectionEnd).to.equal(5);
    });

    it('setRangeText() replaces text at range', function() {
      element.setRangeText('there', 6, 11);
      expect(element.value).to.equal('hello there');
    });
  });
});
