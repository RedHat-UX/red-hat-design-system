import { expect, html, oneEvent } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { clickElementAtOffset } from '@patternfly/pfe-tools/test/utils.js';
import { sendKeys } from '@web/test-runner-commands';
import { RhDialog } from '@rhds/elements/rh-dialog/rh-dialog.js';
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
    const updateComplete = () => element.updateComplete;
    beforeEach(async function() {
      element = await createFixture(html`
        <rh-dialog trigger="trigger">
          <h2 slot="header">Header</h2>
          <p>Body</p>
          <rh-button slot="footer">Footer Action</rh-button>
        </rh-dialog>
        <rh-button id="trigger">Open</rh-button>
      `);
      trigger = document.getElementById('trigger')!;
    });
    describe('clicking the trigger', function() {
      let openEventPromise: Promise<Event>;
      let closeEventPromise: Promise<Event>;
      let cancelEventPromise: Promise<Event>;
      beforeEach(function() {
        openEventPromise = oneEvent(element, 'open');
        closeEventPromise = oneEvent(element, 'close');
        cancelEventPromise = oneEvent(element, 'cancel');
      });
      beforeEach(() => trigger.click());
      beforeEach(updateComplete);
      it('opens the dialog', function() {
        expect(element.open).to.be.true;
      });
      it('fires "open" event', async function() {
        const openEvent = await openEventPromise;
        expect(openEvent.type).to.equal('open');
      });
      describe('pressing Escape', function() {
        beforeEach(press('Escape'));
        beforeEach(updateComplete);
        it('closes the dialog', function() {
          expect(element.open).to.be.false;
        });
        it('fires the cancel event', async function() {
          const cancelEvent = await cancelEventPromise;
          expect(cancelEvent.type).to.equal('cancel');
        });
      });
      describe('clicking outside the dialog', function() {
        beforeEach(() => clickElementAtOffset(document.body, [10, 10]));
        beforeEach(updateComplete);
        it('closes the dialog', function() {
          expect(element.open).to.be.false;
        });
        it('fires the cancel event', async function() {
          const cancelEvent = await cancelEventPromise;
          expect(cancelEvent.type).to.equal('cancel');
        });
      });
      describe('clicking the close button', function() {
        // ordinarily we try our best to avoid querying the shadow root in test files
        // in this case, we feel justified in making an exception, because the "close-button"
        // css part is already included in the element's public API.
        // NOTE: we query specifically for the element with that part, not by shadow class or id
        beforeEach(() => element.shadowRoot.querySelector('[part="close-button"]')?.click());
        beforeEach(updateComplete);
        it('closes the dialog', function() {
          expect(element.open).to.be.false;
        });
        it('fires the close event', async function() {
          const closeEvent = await closeEventPromise;
          expect(closeEvent.type).to.equal('close');
        });
      });
    });
  });
});
