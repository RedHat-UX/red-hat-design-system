import { expect, html, oneEvent, fixture } from '@open-wc/testing';
import sinon from 'sinon';
import { RhAlert } from '../rh-alert.js';


const defaultTemplate = html`
  <rh-alert state="default">
   <h3 slot="header">Default</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est
      egestas, a sollicitudin mauris tincidunt.</p>
    <button slot="actions" data-action="dismiss">Dismiss</button>
    <button slot="actions" data-action="confirm">Confirm</button>
  </rh-alert>
`;

const dismissableTemplate = html`
  <rh-alert dismissable>
    <h3 slot="header">Default dismissable</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est
      egestas, a sollicitudin mauris tincidunt.</p>
    <button slot="actions" data-action="dismiss">Dismiss</button>
    <button slot="actions" data-action="confirm">Confirm</button>
  </rh-alert>
`;


describe('<rh-alert>', function() {
  let element: RhAlert;
  let dismissableElement: RhAlert;

  beforeEach(async function() {
    element = await fixture<RhAlert>(defaultTemplate);
    dismissableElement = await fixture<RhAlert>(dismissableTemplate);
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
    let stub;

    beforeEach(async function() {
      elementCloseButton = dismissableElement.shadowRoot?.querySelector('#close-button');
      stub = sinon.stub(dismissableElement, 'remove');
    });

    it('should only show the close button if the dismissable attribute is present', () => {
      expect(element.shadowRoot?.querySelector('#close-button')).to.be.null;
      expect(elementCloseButton).not.to.be.undefined;
    });

    it('should send a close event on dismissable close button click', async () => {
      elementCloseButton = dismissableElement.shadowRoot?.querySelector('#close-button');

      setTimeout(function() {
        elementCloseButton?.click();
      });
      await oneEvent(dismissableElement, 'close');
      dismissableElement.requestUpdate();

      await dismissableElement.updateComplete;
      expect(stub).to.have.been.calledOnce;
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
      expect(stub).not.to.have.been.calledOnce;
    });
  });
});
