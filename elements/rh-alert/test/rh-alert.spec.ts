import { expect, html, oneEvent, fixture } from '@open-wc/testing';
import { clickElementAtCenter } from '@patternfly/pfe-tools/test/utils.js';
import { RhAlert } from '../rh-alert.js';
import { tokens } from '@rhds/tokens';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';

describe('<rh-alert>', function() {
  let element: RhAlert;
  let dismissableElement: RhAlert;

  beforeEach(async function() {
    element = await fixture<RhAlert>(html`
      <rh-alert state="default">
       <h3 slot="header">Default</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est
          egestas, a sollicitudin mauris tincidunt.</p>
        <button slot="actions" data-action="dismiss">Dismiss</button>
        <button slot="actions" data-action="confirm">Confirm</button>
      </rh-alert>
    `);
    dismissableElement = await fixture<RhAlert>(html`
      <rh-alert dismissable>
        <h3 slot="header">Default dismissable</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est
          egestas, a sollicitudin mauris tincidunt.</p>
        <button slot="actions" data-action="dismiss">Dismiss</button>
        <button slot="actions" data-action="confirm">Confirm</button>
      </rh-alert>
    `);
  });

  it('should upgrade', async function() {
    const klass = customElements.get('rh-alert');
    expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhAlert);
  });

  describe('dismissable <rh-alert>', async () => {
    let elementCloseButton: HTMLButtonElement | undefined | null;

    beforeEach(async function() {
      elementCloseButton = dismissableElement.shadowRoot?.querySelector('#close-button');
    });

    it('should only show the close button if the dismissable attribute is present', () => {
      expect(element.shadowRoot?.querySelector('#close-button')).to.be.null;
      expect(elementCloseButton).not.to.be.undefined;
    });

    it('should send a close event on dismissable close button click', async () => {
      const elementCloseButton = dismissableElement.shadowRoot!.querySelector('#close-button')!;
      if (!elementCloseButton) {
        throw new Error('no close button');
      }
      await clickElementAtCenter(elementCloseButton);
      expect(dismissableElement.isConnected).to.be.false;
    });

    it('should be able to prevent default on the close event', async () => {
      elementCloseButton = dismissableElement.shadowRoot?.querySelector('#close-button');

      dismissableElement?.addEventListener('close', event => {
        event.preventDefault();
      });
      setTimeout(function() {
        elementCloseButton?.click();
      });
      await oneEvent(dismissableElement, 'close');
      dismissableElement.requestUpdate();

      await dismissableElement.updateComplete;
      expect(dismissableElement.isConnected).to.be.true;
    });
  });

  for (const [state, bgtoken] of Object.entries({
    neutral: '--rh-color-surface-status-neutral',
    info: '--rh-color-surface-status-info',
    success: '--rh-color-surface-status-success',
    caution: '--rh-color-surface-status-caution',
    warning: '--rh-color-surface-status-warning',
    danger: '--rh-color-surface-status-danger',
  })) {
    const expected = tokens.get(`${bgtoken}-on-light`) as unknown as string;
    describe(`state="${state}"`, function() {
      let element: RhAlert;
      beforeEach(async function() {
        element = await createFixture(html`<rh-alert state="${state}">Content</rh-alert>`);
      });
      it('uses the correct background color', function() {
        // it would be better to assert the color value at a given pixel offset from the element boundary
        // but we take a shortcut here because we know the id of the shadow container. this is brittle though
        const actual = getComputedStyle(element.shadowRoot!.getElementById('container')!).backgroundColor;
        expect(actual).to.be.colored(expected);
      });
    });
    describe(`state="${state.toUpperCase()}" case insensitive`, function() {
      let element: RhAlert;
      beforeEach(async function() {
        element = await createFixture(html`<rh-alert state="${state.toUpperCase()}">Content</rh-alert>`);
      });
      it('uses the correct background color', function() {
        // it would be better to assert the color value at a given pixel offset from the element boundary
        // but we take a shortcut here because we know the id of the shadow container. this is brittle though
        const actual = getComputedStyle(element.shadowRoot!.getElementById('container')!).backgroundColor;
        expect(actual).to.be.colored(expected);
      });
    });
  }
});
