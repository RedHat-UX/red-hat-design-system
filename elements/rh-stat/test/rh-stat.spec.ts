import { html } from 'lit';
import { expect, fixture, aTimeout } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';
import { RhStat } from '../rh-stat.js';
import { tokens } from '@rhds/tokens';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import '@patternfly/pfe-tools/test/stub-logger.js';

const KITCHEN_SINK = html`
  <rh-stat titleplacement="below" size="large" top="statistic">
      <pfe-icon slot="icon" icon="atom"></pfe-icon>
      <span slot="title">Overwrite Title</span>
      <p>Stat body that includes two lines and a footnote.</p>
      <span slot="statistic">Overwrite Statistic</span>
  </rh-stat>
`;

describe('<rh-stat>', function() {
  let element: RhStat;

  describe('simply instantiating', function() {
    beforeEach(async function() {
      element = await fixture<RhStat>(html`<rh-stat></rh-stat>`);
    });

    it('should upgrade', function() {
      const klass = customElements.get('rh-stat');
      expect(element)
        .to.be.an.instanceof(klass)
        .and
        .to.be.an.instanceOf(RhStat);
    });

    it('passes the a11y audit', function() {
      expect(element).shadowDom.to.be.accessible();
    });
  });

  describe('without stat', function() {
    beforeEach(async function() {
      element = await fixture<RhStat>(html`
        <rh-stat>
          <p>hello</p>
        </rh-stat>
      `);
      await element.updateComplete;
      element.connectedCallback();
    });
    it('warns', function() {
      expect(Logger.warn).to.have.been.calledWith('[rh-stat]', 'Must contain stat content');
    });
  });

  describe('without description', function() {
    beforeEach(async function() {
      element = await fixture<RhStat>(html`
        <rh-stat>
          <span slot="stat">32</stat>
        </rh-stat>
      `);
    });
    it('warns', function() {
      expect(Logger.warn).to.have.been.calledWith('[rh-stat]', 'Must contain description content');
    });
  });

  describe('adjusting window size', function() {
    beforeEach(async function() {
      element = await fixture<RhStat>(KITCHEN_SINK);
    });

    describe('wider than tablet', function() {
      beforeEach(async function() {
        await setViewport({ width: 1200, height: 800 });
        await element.updateComplete;
        await aTimeout(200);
      });

      it('has correct font size for statistic slot', function() {
        const slot = element.shadowRoot?.querySelectorAll('slot[name="statistic"]');
        expect(slot?.length).to.equal(1);
        const fontSize = window.getComputedStyle(slot![0]).getPropertyValue('font-size');
        expect(fontSize).to.equal('48px');
      });

      it('has correct font size for description slot', function() {
        const slot = element.shadowRoot?.querySelectorAll('slot:not([name])');
        expect(slot?.length).to.equal(1);
        const fontSize = window.getComputedStyle(slot![0]).getPropertyValue('font-size');
        expect(fontSize).to.equal('18px');
      });

      it('displays icon', function() {
        const rect = element.querySelector('[slot="icon"]')?.getBoundingClientRect();
        expect(rect?.width).to.equal(parseInt(tokens.get('--rh-size-icon-04')));
      });
    });

    describe('shorter than tablet', function() {
      beforeEach(async function() {
        await setViewport({ width: 300, height: 800 });
        await element.updateComplete;
        await aTimeout(1900);
      });

      it('has correct font size for title slot', function() {
        const slot = element.querySelectorAll('[slot="title"]');
        expect(slot?.length).to.equal(1);
        const fontSize = window.getComputedStyle(slot![0]).getPropertyValue('font-size');
        expect(fontSize).to.equal('20px');
      });

      it('has correct icon size for icon slot', function() {
        const slot = element.querySelectorAll('pfe-icon');
        expect(slot?.length).to.equal(1);
        const size = slot![0].getAttribute('size');
        expect(size).to.equal('lg');
      });

      it('has correct font size for statistic slot', function() {
        const slot = element.querySelectorAll('[slot="statistic"]');
        expect(slot?.length).to.equal(1);
        const fontSize = window.getComputedStyle(slot![0]).getPropertyValue('font-size');
        expect(fontSize).to.equal('48px');
      });

      it('has correct font size for description slot', function() {
        const slot = element.shadowRoot?.querySelectorAll('slot:not([name])');
        expect(slot?.length).to.equal(1);
        const fontSize = window.getComputedStyle(slot![0]).getPropertyValue('font-size');
        expect(fontSize).to.equal('18px');
      });
    });
  });
});
