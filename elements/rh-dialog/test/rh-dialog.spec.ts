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

  describe('nested dialogs', function() {
    it('Escape closes only the inner dialog', async function() {
      const outer = await createFixture<RhDialog>(html`
        <rh-dialog>
          <h2 slot="header">Outer</h2>
          <rh-dialog id="inner-dialog">
            <h2 slot="header">Inner</h2>
            <p>Nested</p>
          </rh-dialog>
        </rh-dialog>
      `);
      const inner = outer.querySelector<RhDialog>('#inner-dialog')!;

      outer.show();
      await outer.updateComplete;
      inner.show();
      await inner.updateComplete;
      await nextFrame();

      // Focus inside the inner dialog so the key bubbles through both hosts.
      inner.shadowRoot?.querySelector<HTMLElement>('[part="close-button"]')?.focus();
      await press('Escape')();
      await outer.updateComplete;
      await inner.updateComplete;
      await nextFrame();

      expect(inner.open, 'inner dialog').to.be.false;
      expect(outer.open, 'outer dialog').to.be.true;
    });
  });

  describe('document scroll lock', function() {
    // The lock is a document attribute, html[data-rh-dialog-scroll-lock].
    // It must not write an inline overflow onto body, or that style outlives
    // the dialog on a client-side navigation. A shadow host is invisible to
    // document :has(), so the attribute is what locks those dialogs too.
    function htmlOverflow() {
      return getComputedStyle(document.documentElement).overflow;
    }

    function scrollLockAttribute() {
      return document.documentElement.hasAttribute('data-rh-dialog-scroll-lock');
    }

    async function openDialog(dialog: RhDialog) {
      dialog.show();
      await dialog.updateComplete;
      await nextFrame();
    }

    // Puts the dialog in an open shadow root. Document CSS cannot see that
    // host, which is the case the attribute lock is for.
    async function createShadowDialog() {
      const host = await createFixture<HTMLDivElement>(html`<div></div>`);
      const root = host.attachShadow({ mode: 'open' });
      const dialog = document.createElement('rh-dialog') as RhDialog;
      root.append(dialog);
      await dialog.updateComplete;
      return { host, dialog };
    }

    it('locks document scroll while open without an inline body style', async function() {
      const dialog = await createFixture<RhDialog>(html`<rh-dialog></rh-dialog>`);
      await openDialog(dialog);

      expect(document.body.style.overflow).to.equal('');
      expect(htmlOverflow()).to.equal('hidden');
    });

    it('releases document scroll after close()', async function() {
      const dialog = await createFixture<RhDialog>(html`<rh-dialog></rh-dialog>`);
      await openDialog(dialog);
      dialog.close('kept');
      await dialog.updateComplete;
      await nextFrame();

      expect(dialog.open).to.be.false;
      expect(dialog.returnValue).to.equal('kept');
      expect(document.body.style.overflow).to.equal('');
      expect(htmlOverflow()).to.not.equal('hidden');
    });

    it('releases document scroll when open is set to false', async function() {
      const dialog = await createFixture<RhDialog>(html`<rh-dialog></rh-dialog>`);
      let closeCount = 0;
      dialog.addEventListener('close', () => {
        closeCount++;
      });
      await openDialog(dialog);

      dialog.open = false;
      await dialog.updateComplete;
      await nextFrame();

      const native = dialog.shadowRoot?.querySelector('dialog');
      expect(dialog.open, 'open').to.be.false;
      expect(native?.open, 'native dialog').to.be.false;
      expect(closeCount, 'close event').to.equal(1);
      expect(document.body.style.overflow).to.equal('');
      expect(htmlOverflow()).to.not.equal('hidden');
      expect(scrollLockAttribute()).to.be.false;
    });

    it('releases document scroll when the native dialog closes', async function() {
      const dialog = await createFixture<RhDialog>(html`<rh-dialog></rh-dialog>`);
      let closed = false;
      dialog.addEventListener('close', () => {
        closed = true;
      });
      await openDialog(dialog);

      // Same path as HTMLDialogElement.close(), which does not enter RhDialog.close().
      dialog.shadowRoot?.querySelector('dialog')?.close('native-close');
      await dialog.updateComplete;
      await nextFrame();

      expect(dialog.open, 'open').to.be.false;
      expect(dialog.returnValue, 'returnValue').to.equal('native-close');
      expect(closed, 'close event').to.be.true;
      expect(document.body.style.overflow).to.equal('');
      expect(htmlOverflow()).to.not.equal('hidden');
      expect(scrollLockAttribute()).to.be.false;
    });

    it('keeps the lock when a native close leaves another dialog open', async function() {
      const first = await createFixture<RhDialog>(html`<rh-dialog></rh-dialog>`);
      const second = await createFixture<RhDialog>(html`<rh-dialog></rh-dialog>`);
      await openDialog(first);
      await openDialog(second);

      first.shadowRoot?.querySelector('dialog')?.close();
      await first.updateComplete;
      await nextFrame();

      expect(first.open).to.be.false;
      expect(second.open).to.be.true;
      expect(htmlOverflow()).to.equal('hidden');
      expect(scrollLockAttribute()).to.be.true;

      second.close();
      await second.updateComplete;
      await nextFrame();
      expect(htmlOverflow()).to.not.equal('hidden');
      expect(scrollLockAttribute()).to.be.false;
    });

    it('releases document scroll when removed while open', async function() {
      const dialog = await createFixture<RhDialog>(html`<rh-dialog></rh-dialog>`);
      await openDialog(dialog);
      dialog.remove();
      await nextFrame();

      expect(document.body.style.overflow).to.equal('');
      expect(htmlOverflow()).to.not.equal('hidden');
    });

    it('keeps the lock until the last open dialog closes', async function() {
      const first = await createFixture<RhDialog>(html`<rh-dialog></rh-dialog>`);
      const second = await createFixture<RhDialog>(html`<rh-dialog></rh-dialog>`);
      await openDialog(first);
      await openDialog(second);

      first.close();
      await first.updateComplete;
      await nextFrame();
      expect(htmlOverflow()).to.equal('hidden');

      second.close();
      await second.updateComplete;
      await nextFrame();
      expect(htmlOverflow()).to.not.equal('hidden');
      expect(document.body.style.overflow).to.equal('');
    });

    it('keeps the lock until the last open dialog is removed', async function() {
      const first = await createFixture<RhDialog>(html`<rh-dialog></rh-dialog>`);
      const second = await createFixture<RhDialog>(html`<rh-dialog></rh-dialog>`);
      await openDialog(first);
      await openDialog(second);

      first.remove();
      await nextFrame();
      expect(htmlOverflow()).to.equal('hidden');

      second.remove();
      await nextFrame();
      expect(htmlOverflow()).to.not.equal('hidden');
    });

    it('locks document scroll for a video dialog', async function() {
      const dialog = await createFixture<RhDialog>(html`<rh-dialog type="video"></rh-dialog>`);
      await openDialog(dialog);

      expect(document.body.style.overflow).to.equal('');
      expect(htmlOverflow()).to.equal('hidden');

      dialog.close();
      await dialog.updateComplete;
      await nextFrame();
      expect(htmlOverflow()).to.not.equal('hidden');
    });

    it('locks document scroll for a dialog inside a shadow root', async function() {
      const { dialog } = await createShadowDialog();
      await openDialog(dialog);

      expect(document.body.style.overflow).to.equal('');
      expect(htmlOverflow()).to.equal('hidden');
      expect(scrollLockAttribute()).to.be.true;
    });

    it('releases the shadow-root lock after close()', async function() {
      const { dialog } = await createShadowDialog();
      await openDialog(dialog);
      dialog.close();
      await dialog.updateComplete;
      await nextFrame();

      expect(document.body.style.overflow).to.equal('');
      expect(htmlOverflow()).to.not.equal('hidden');
      expect(scrollLockAttribute()).to.be.false;
    });

    it('releases the shadow-root lock when removed while open', async function() {
      const { host } = await createShadowDialog();
      const dialog = host.shadowRoot!.querySelector('rh-dialog') as RhDialog;
      await openDialog(dialog);
      host.remove();
      await nextFrame();

      expect(document.body.style.overflow).to.equal('');
      expect(htmlOverflow()).to.not.equal('hidden');
      expect(scrollLockAttribute()).to.be.false;
    });

    it('keeps the lock until the last open shadow dialog closes', async function() {
      const first = await createShadowDialog();
      const second = await createShadowDialog();
      await openDialog(first.dialog);
      await openDialog(second.dialog);

      first.dialog.close();
      await first.dialog.updateComplete;
      await nextFrame();
      expect(htmlOverflow()).to.equal('hidden');
      expect(scrollLockAttribute()).to.be.true;

      second.dialog.close();
      await second.dialog.updateComplete;
      await nextFrame();
      expect(htmlOverflow()).to.not.equal('hidden');
      expect(scrollLockAttribute()).to.be.false;
      expect(document.body.style.overflow).to.equal('');
    });

    it('keeps the lock until the last open shadow dialog is removed', async function() {
      const first = await createShadowDialog();
      const second = await createShadowDialog();
      await openDialog(first.dialog);
      await openDialog(second.dialog);

      first.host.remove();
      await nextFrame();
      expect(htmlOverflow()).to.equal('hidden');
      expect(scrollLockAttribute()).to.be.true;

      second.host.remove();
      await nextFrame();
      expect(htmlOverflow()).to.not.equal('hidden');
      expect(scrollLockAttribute()).to.be.false;
    });

    describe('show() before the first render', function() {
      // `@query('#dialog')` is null until Lit renders. show() must not set
      // `open` or keep the scroll lock until showModal() has succeeded.
      async function cleanup(dialog: RhDialog) {
        dialog.close();
        dialog.remove();
        await nextFrame();
      }

      it('opens the native dialog after connect, without locking early', async function() {
        const dialog = document.createElement('rh-dialog') as RhDialog;
        let opened = false;
        dialog.addEventListener('open', () => {
          opened = true;
        });

        try {
          document.body.append(dialog);
          // Shadow root exists, but the native <dialog> is not rendered yet.
          dialog.show();
          dialog.show();

          expect(dialog.open, 'host open before render').to.be.false;
          expect(dialog.shadowRoot?.querySelector('dialog'), 'native dialog before render').to.be.null;
          expect(scrollLockAttribute(), 'lock before render').to.be.false;
          expect(document.body.style.overflow).to.equal('');

          await dialog.updateComplete;
          await nextFrame();

          const native = dialog.shadowRoot?.querySelector('dialog');
          expect(dialog.open, 'host open').to.be.true;
          expect(native?.open, 'native dialog open').to.be.true;
          expect(opened, 'open event').to.be.true;
          expect(scrollLockAttribute(), 'lock after open').to.be.true;
          expect(htmlOverflow()).to.equal('hidden');
          expect(document.body.style.overflow).to.equal('');

          // Two early show() calls must take the lock only once.
          dialog.close();
          await dialog.updateComplete;
          await nextFrame();
          expect(dialog.open).to.be.false;
          expect(native?.open, 'native dialog after close').to.be.false;
          expect(scrollLockAttribute()).to.be.false;
          expect(htmlOverflow()).to.not.equal('hidden');
        } finally {
          await cleanup(dialog);
        }
      });

      it('opens when show() is called before the element is connected', async function() {
        const dialog = document.createElement('rh-dialog') as RhDialog;

        try {
          dialog.show();
          expect(dialog.open, 'open before connect').to.be.false;
          expect(scrollLockAttribute(), 'lock before connect').to.be.false;

          document.body.append(dialog);
          expect(dialog.open, 'open before render').to.be.false;
          expect(scrollLockAttribute(), 'lock before render').to.be.false;

          await dialog.updateComplete;
          await nextFrame();

          expect(dialog.open).to.be.true;
          expect(dialog.shadowRoot?.querySelector('dialog')?.open, 'native dialog').to.be.true;
          expect(scrollLockAttribute()).to.be.true;
          expect(htmlOverflow()).to.equal('hidden');
        } finally {
          await cleanup(dialog);
        }
      });

      it('does not open or lock when removed before the first render', async function() {
        const dialog = document.createElement('rh-dialog') as RhDialog;
        const errors: unknown[] = [];
        const onError = (event: ErrorEvent) => errors.push(event.message);
        const onRejection = (event: PromiseRejectionEvent) => errors.push(String(event.reason));
        window.addEventListener('error', onError);
        window.addEventListener('unhandledrejection', onRejection);

        try {
          document.body.append(dialog);
          dialog.show();
          dialog.remove();
          await nextFrame();

          expect(dialog.open).to.be.false;
          expect(scrollLockAttribute()).to.be.false;
          expect(htmlOverflow()).to.not.equal('hidden');
          expect(errors, 'showModal after removal').to.eql([]);
        } finally {
          window.removeEventListener('error', onError);
          window.removeEventListener('unhandledrejection', onRejection);
          dialog.remove();
        }
      });

      it('does not open or lock when close() runs before the first render', async function() {
        const dialog = document.createElement('rh-dialog') as RhDialog;

        try {
          dialog.show();
          dialog.close('cancelled-early');
          document.body.append(dialog);
          await dialog.updateComplete;
          await nextFrame();

          expect(dialog.open).to.be.false;
          expect(dialog.returnValue).to.equal('cancelled-early');
          expect(dialog.shadowRoot?.querySelector('dialog')?.open, 'native dialog').to.not.equal(true);
          expect(scrollLockAttribute()).to.be.false;
          expect(htmlOverflow()).to.not.equal('hidden');
          expect(document.body.style.overflow).to.equal('');
        } finally {
          await cleanup(dialog);
        }
      });

      it('toggle() before the first render opens, and a second toggle cancels it', async function() {
        const dialog = document.createElement('rh-dialog') as RhDialog;

        try {
          document.body.append(dialog);
          dialog.toggle();
          dialog.toggle();
          await dialog.updateComplete;
          await nextFrame();

          expect(dialog.open, 'second toggle before render').to.be.false;
          expect(dialog.shadowRoot?.querySelector('dialog')?.open, 'native dialog').to.not.equal(true);
          expect(scrollLockAttribute()).to.be.false;

          dialog.toggle();
          await dialog.updateComplete;
          await nextFrame();
          expect(dialog.open, 'toggle after render').to.be.true;
          expect(dialog.shadowRoot?.querySelector('dialog')?.open, 'native dialog after later toggle').to.be.true;
          expect(scrollLockAttribute()).to.be.true;
        } finally {
          await cleanup(dialog);
        }
      });
    });

    it('does not lock document scroll for markup open until show()', async function() {
      const dialog = await createFixture<RhDialog>(html`<rh-dialog open></rh-dialog>`);
      await dialog.updateComplete;
      await nextFrame();

      expect(dialog.open).to.be.true;
      expect(document.body.style.overflow).to.equal('');
      expect(htmlOverflow()).to.not.equal('hidden');
      expect(scrollLockAttribute()).to.be.false;

      await openDialog(dialog);
      expect(htmlOverflow()).to.equal('hidden');
      expect(scrollLockAttribute()).to.be.true;

      dialog.close();
      await dialog.updateComplete;
      await nextFrame();
      expect(htmlOverflow()).to.not.equal('hidden');
    });
  });
});
