import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSiteStatus, type SummaryResponse } from '@rhds/elements/rh-site-status/rh-site-status.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

import { stub, type SinonStub } from 'sinon';

function makeJsonResponse<Body extends Partial<SummaryResponse>>(body: Body) {
  body.page ??= {};
  body.status ??= {};
  body.components ??= [];
  body.incidents ??= [];
  const headers = new Headers({ 'Content-Type': 'application/json' });
  return new Response(JSON.stringify(body), { headers });
}

describe('<rh-site-status>', function() {
  let element: RhSiteStatus;
  let fetchStub: SinonStub;

  afterEach(function() {
    fetchStub?.restore?.();
  });

  describe('simply instantiating', function() {
    beforeEach(async function() {
      fetchStub = stub(window, 'fetch');
      fetchStub.resolves(makeJsonResponse({
        status: {
          indicator: 'none',
          description: 'All Systems Operational',
        },
      }));
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
      fetchStub.resolves(makeJsonResponse({
        status: {
          indicator: 'none',
          description: 'All Systems Operational',
        },
      }));
      element = await createFixture<RhSiteStatus>(html`<rh-site-status></rh-site-status>`);
      await element.updateComplete;
    });

    it('should show all systems operational message', async function() {
      const [link] = (await a11ySnapshot()).children ?? [];
      expect(link.name.toLowerCase()).to.equal('all systems operational');
    });
  });

  describe('when endpoint returns a 404', function() {
    beforeEach(async function() {
      fetchStub = stub(window, 'fetch');
      fetchStub.resolves(new Response('', { status: 404, statusText: '404 Not Found' }));
      element = await createFixture<RhSiteStatus>(html`<rh-site-status></rh-site-status>`);
      await element.updateComplete;
    });

    afterEach(function() {
      fetchStub.restore();
    });

    it('should show an error message', async function() {
      const [link] = (await a11ySnapshot()).children ?? [];
      expect(link.name.toLowerCase()).to.equal('error loading status');
    });
  });

  describe('when endpoint returns a partial minor outage ', function() {
    beforeEach(async function() {
      fetchStub = stub(window, 'fetch');
      fetchStub.resolves(makeJsonResponse({
        status: {
          indicator: 'minor',
          description: 'Partially Degraded Service',
        },
      }));
      element = await createFixture<RhSiteStatus>(html`<rh-site-status></rh-site-status>`);
      await element.updateComplete;
    });

    it('should show partial outage message', async function() {
      const [link] = (await a11ySnapshot()).children ?? [];
      expect(link.name.toLowerCase()).to.equal('partial service');
    });
  });
});
