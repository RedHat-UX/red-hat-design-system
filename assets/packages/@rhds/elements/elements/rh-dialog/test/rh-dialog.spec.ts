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
});
