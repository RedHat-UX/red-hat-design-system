import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSiteStatus } from '@rhds/elements/rh-site-status/rh-site-status.js';


function overrideFetch(ok: boolean, status: number, statusText: string, json?: () => Promise<unknown>) {
  window.fetch = new Proxy(window.fetch, {
    apply: (target, thisArg, args) => {
      if (args[0] === 'https://status.redhat.com/index.json') {
        return Promise.resolve({
          ok,
          status,
          statusText,
          json
        });
      }
      return target.apply(thisArg, args);
    }
  });
}


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

  describe('when endpoint returns an All systems operational', function() {
    let element: RhSiteStatus;

    beforeEach(async function() {
      overrideFetch(true, 200, 'All systems operational', () => Promise.resolve({ status: { indicator: 'none', description: 'All systems operational' } }));

      element = await createFixture<RhSiteStatus>(html`<rh-site-status></rh-site-status>`);
      await element.updateComplete;
    });

    it('should show all systems operational message', async function() {
      // delaying 100ms to allow the fetch to complete
      setTimeout(() => {
        expect(element.shadowRoot!.textContent).to.include('All systems operational');
      }, 1000);
    });
  });

  describe('when endpoint returns a 404', function() {
    let element: RhSiteStatus;

    beforeEach(async function() {
      overrideFetch(false, 404, 'Not Found');

      element = await createFixture<RhSiteStatus>(html`<rh-site-status></rh-site-status>`);
      await element.updateComplete;
    });

    it('should show an error message', async function() {
      // delaying 100ms to allow the fetch to complete
      setTimeout(() => {
        expect(element.shadowRoot!.textContent).to.include('Error: 404 Not Found');
      }, 100);
    });
  });
});

describe('when endpoint returns a partial minor outage ', function() {
  let element: RhSiteStatus;

  beforeEach(async function() {
    overrideFetch(true, 200, 'Partially Degraded Service', () => Promise.resolve({ status: { indicator: 'minor', description: 'Partially Degraded Service' } }));

    element = await createFixture<RhSiteStatus>(html`<rh-site-status></rh-site-status>`);
    await element.updateComplete;
  });

  it('should show partial outage message', async function() {
    // delaying 100ms to allow the fetch to complete
    setTimeout(() => {
      expect(element.shadowRoot!.textContent).to.include('Partial service');
    }, 100);
  });
});
