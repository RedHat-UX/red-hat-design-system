import { expect, html, nextFrame } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { clickElementAtOffset } from '@patternfly/pfe-tools/test/utils.js';
import { sendKeys } from '@web/test-runner-commands';
import { DialogCancelEvent, DialogCloseEvent, DialogOpenEvent, RhDialog } from '@rhds/elements/rh-dialog/rh-dialog.js';
import { RhButton } from '@rhds/elements/rh-button/rh-button.js';

function press(key: string) {
  return async function() {
    await sendKeys({ press: key });
  };
}

describe('<rh-dialog>', function() {
  it('should upgrade', async function() {
    const el = await createFixture<RhDialog>(html`
      <rh-dialog></rh-dialog>
    `);
    const klass = customElements.get('rh-dialog');
    expect(el)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhDialog);
  });

  describe('with a trigger', function() {
    let element: RhDialog;
    let trigger: RhButton;
    type DialogEvent = DialogOpenEvent | DialogCloseEvent | DialogCancelEvent;
    const events = new Map<DialogEvent['type'], DialogEvent>();

    const updateComplete = () => element.updateComplete;

    beforeEach(async function() {
      const storeEvent = (event: DialogEvent) => events.set(event.type, event);
      element = await createFixture(html`
        <rh-dialog trigger="trigger"
                   @cancel="${storeEvent}"
                   @open="${storeEvent}"
                   @close="${storeEvent}">
          <h2 slot="header">Header</h2>
          <p>Body</p>
          <rh-button slot="footer">Footer Action</rh-button>
        </rh-dialog>
        <rh-button id="trigger">Open</rh-button>
      `);
      trigger = document.getElementById('trigger')! as RhButton;
    });

    afterEach(function() {
      events.clear();
    });

    describe('clicking the trigger', function() {
      beforeEach(() => trigger.click());
      beforeEach(updateComplete);
      beforeEach(nextFrame);

      it('opens the dialog', function() {
        expect(element.open).to.be.true;
      });

      it('fires "open" event', async function() {
        expect(events.get('open')).to.be.an.instanceof(DialogOpenEvent);
      });

      describe('Escape', function() {
        beforeEach(press('Escape'));
        beforeEach(updateComplete);
        beforeEach(nextFrame);

        it('closes the dialog', function() {
          expect(element.open).to.be.false;
        });

        it('fires "cancel" event', async function() {
          expect(events.get('cancel')).to.be.an.instanceof(DialogCancelEvent);
        });
      });

      describe('clicking outside the dialog', function() {
        beforeEach(() => clickElementAtOffset(document.body, [10, 10]));
        beforeEach(updateComplete);

        it('closes the dialog', function() {
          expect(element.open).to.be.false;
        });

        it('fires "cancel" event', async function() {
          expect(events.get('cancel')).to.be.an.instanceof(DialogCancelEvent);
        });
      });

      describe('clicking the close button', function() {
        // ordinarily we try our best to avoid querying the shadow root in test files
        // in this case, we feel justified in making an exception, because the "close-button"
        // css part is already included in the element's public API.
        // NOTE: we query specifically for the element with that part, not by shadow class or id
        beforeEach(() => element.shadowRoot?.querySelector<HTMLElement>('[part="close-button"]')?.click());
        beforeEach(updateComplete);
        beforeEach(nextFrame);

        it('closes the dialog', function() {
          expect(element.open).to.be.false;
        });

        it('fires "close" event', async function() {
          expect(events.get('close')).to.be.an.instanceof(DialogCloseEvent);
        });
      });
    });
  });

  describe('<rh-dialog> with a form', function() {
    let element: RhDialog;
    let triggerButton: RhButton;
    let formElement: HTMLFormElement;
    let selectElement: HTMLSelectElement;
    let confirmationButton: HTMLButtonElement;
    let cancellationButton: HTMLButtonElement;

    async function openDialog() {
      triggerButton.click();
      await element.updateComplete;
      await nextFrame();
      expect(element.open, 'Dialog should be open after trigger click').to.be.true;
    }

    beforeEach(async function() {
      const fixture = await createFixture(html`
        <div>
          <rh-dialog id="dialog-element-form" trigger="trigger-form">
            <form id="form-element">
              <p>
                <label>
                  Favorite RHDS Token Value:
                  <select id="selectElement">
                    <option value="default">Choose…</option>
                    <option value="--rh-color-brand-red">--rh-color-brand-red</option>
                    <option value="--rh-color-red-50">--rh-color-red-50</option>
                    <option value="--rh-color-status-note">--rh-color-status-note</option>
                  </select>
                </label>
              </p>
              <div>
                <button id="cancellationButton" value="cancel">Cancel</button>
                <button type="submit" id="confirmation-button" value="default">Submit</button>
              </div>
            </form>
          </rh-dialog>
          <rh-button id="trigger-form">Open Dialog</rh-button>
        </div>
      `);
      element = fixture.querySelector<RhDialog>('#dialog-element-form')!;
      triggerButton = fixture.querySelector<RhButton>('#trigger-form')!;
      formElement = fixture.querySelector<HTMLFormElement>('#form-element')!;
      selectElement = fixture.querySelector<HTMLSelectElement>('#selectElement')!;
      confirmationButton = fixture.querySelector<HTMLButtonElement>('#confirmation-button')!;
      cancellationButton = fixture.querySelector<HTMLButtonElement>('#cancellationButton')!;

      formElement.addEventListener('submit', e => e.preventDefault());

      confirmationButton.addEventListener('click', event => {
        event.preventDefault();
        if (element.open) {
          element.close(selectElement.value);
        }
      });

      cancellationButton.addEventListener('click', event => {
        event.preventDefault();
        if (element.open) {
          element.cancel('cancelled');
        }
      });
    });

    it('should set returnValue correctly when submitting with a selected option', async function() {
      await openDialog();
      selectElement.value = '--rh-color-brand-red';

      await confirmationButton.click();
      await element.updateComplete;
      await nextFrame();

      expect(element.open, `Dialog should be closed after submit with selection`).to.be.false;
      expect(element.returnValue, `returnValue after submit with selection`).to.equal(selectElement.value);
    });

    it('should set returnValue correctly when submitting with default option', async function() {
      await openDialog();
      selectElement.value = 'default';

      await confirmationButton.click();
      await element.updateComplete;
      await nextFrame();

      expect(element.open, `Dialog should be closed after submit with default`).to.be.false;
      expect(element.returnValue, `returnValue after submit with default`).to.equal(selectElement.value);
    });

    it('should set returnValue correctly when the forms "Cancel" button is clicked', async function() {
      await openDialog();

      await cancellationButton.click();
      await element.updateComplete;
      await nextFrame();

      expect(element.open, `Dialog should be closed after form cancel button`).to.be.false;
      expect(element.returnValue, `returnValue after form cancel button`).to.equal('cancelled');
    });

    it('should set empty returnValue when closed via ESC key', async function() {
      await openDialog();

      await press('Escape')();
      await element.updateComplete;
      await nextFrame();

      expect(element.open, `Dialog should be closed after ESC key`).to.be.false;
      expect(element.returnValue, `returnValue after ESC key`).to.equal('');
    });

    it('should set empty returnValue when closed by clicking outside', async function() {
      await openDialog();

      await clickElementAtOffset(document.body, [10, 10]); ;
      await element.updateComplete;
      await nextFrame();

      expect(element.open, `Dialog should be closed after clicking outside`).to.be.false;
      expect(element.returnValue, `returnValue after clicking outside`).to.equal('');
    });
  });
});
