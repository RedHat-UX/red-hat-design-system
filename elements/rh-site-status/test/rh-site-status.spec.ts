import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSiteStatus } from '@rhds/elements/rh-site-status/rh-site-status.js';

import { stub, type SinonStub } from 'sinon';

describe('<rh-site-status>', function() {
  let element: RhSiteStatus;
  let fetchStub: SinonStub;

  afterEach(function() {
    fetchStub?.restore?.();
  });

  describe('simply instantiating', function() {
    beforeEach(async function() {
      fetchStub = stub(window, 'fetch');
      fetchStub.resolves({
        ok: true,
        status: 200,
        statusText: 'OK',
        json: () => Promise.resolve({
          status: {
            indicator: 'none',
            description: 'All systems operational',
          },
        }),
      });
      element = await createFixture<RhSiteStatus>(html`<rh-site-status></rh-site-status>`);
      await element.updateComplete;
    });

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
    beforeEach(async function() {
      fetchStub = stub(window, 'fetch');
      fetchStub.resolves({
        ok: true,
        status: 200,
        statusText: 'OK',
        json: () => Promise.resolve({
          status: {
            indicator: 'none',
            description: 'All Systems Operational',
          },
        }),
      });
      element = await createFixture<RhSiteStatus>(html`<rh-site-status></rh-site-status>`);
      await element.updateComplete;
    });

    it('should show all systems operational message', async function() {
      // we moved the text capitalization styling to a CSS concern, so can't test for the text capitalization here.
      expect(element.shadowRoot!.textContent).to.include('All Systems Operational');
    });
  });

  describe('when endpoint returns a 404', function() {
    beforeEach(async function() {
      fetchStub = stub(window, 'fetch');
      fetchStub.resolves({
        ok: false,
        status: 404,
        statusText: '404 Not Found',
      });
      element = await createFixture<RhSiteStatus>(html`<rh-site-status></rh-site-status>`);
      await element.updateComplete;
    });

    afterEach(function() {
      fetchStub.restore();
    });

    it('should show an error message', async function() {
      expect(element.shadowRoot!.textContent).to.include('Error loading status');
    });
  });

  describe('when endpoint returns a partial minor outage ', function() {
    beforeEach(async function() {
      fetchStub = stub(window, 'fetch');
      fetchStub.resolves({
        ok: true,
        status: 200,
        statusText: 'OK',
        json: () => Promise.resolve({
          status: {
            indicator: 'minor',
            description: 'Partially Degraded Service',
          },
        }),
      });
      element = await createFixture<RhSiteStatus>(html`<rh-site-status></rh-site-status>`);
      await element.updateComplete;
    });

    it('should show partial outage message', async function() {
      expect(element.shadowRoot!.textContent).to.include('Partial service');
    });
  });
});
