import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSiteStatus } from '@rhds/elements/rh-site-status/rh-site-status.js';


describe('<rh-site-status>', function() {
  describe('simply instantiating', function() {
    let element: RhSiteStatus;
    it('should upgrade', async function() {
      element = await createFixture<RhSiteStatus>(html`<rh-site-status></rh-site-status>`);
      const klass = customElements.get('rh-site-status');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhSiteStatus);
    });
  });

  // TODO: We can't rely on default endpoint to always return a status 200
  // Figure out how to mock the fetch call, should we store a json file locally that
  // contains the different state status responses? 
  // describe('when api call is successful', function() {
  //   let element: RhSiteStatus;

  //   beforeEach(async function() {
  //     element = await createFixture<RhSiteStatus>(html`<rh-site-status></rh-site-status>`);
  //     await element.updateComplete;
  //   });

  //   it('should show an success message', async function() {
  //     // delaying 1 second to allow the fetch to succeed
  //     setTimeout(() => {
  //       expect(element.shadowRoot!.textContent).to.include('All systems operational');
  //     }, 1000);
  //   });
  // });

  describe('when endpoint is incorrect', function() {
    let element: RhSiteStatus;

    beforeEach(async function() {
      element = await createFixture<RhSiteStatus>(html`<rh-site-status></rh-site-status>`);
      element.endpoint = 'index.json';
      await element.updateComplete;
    });

    it('should show a loading spinner', async function() {
      expect(element.shadowRoot!.querySelector('rh-spinner')).to.exist;
    });

    it('should show an error message', async function() {
      // delaying 1 second to allow the fetch to fail
      setTimeout(() => {
        expect(element.shadowRoot!.textContent).to.include('Error loading status');
      }, 1000);
    });
  });
});
