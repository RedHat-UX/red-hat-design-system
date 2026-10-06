import { html } from 'lit';
import { expect, fixture, aTimeout } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';
import { RhStat } from '../rh-stat.js';
import { tokens } from '@rhds/tokens';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import '@patternfly/pfe-tools/test/stub-logger.js';

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

    it('passes the a11y audit', async function() {
      await Promise.resolve(expect(element).to.be.accessible());
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
      element = await fixture<RhStat>(html`
        <rh-stat titleplacement="below" size="large" top="statistic">
            <rh-icon slot="icon" set="standard" icon="atom"></rh-icon>
            <span slot="title">Overwrite Title</span>
            <p>Stat body that includes two lines and a footnote.</p>
            <span slot="statistic">Overwrite Statistic</span>
        </rh-stat>
      `);
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
        expect(fontSize).to.equal('16px');
      });

      it('displays icon', function() {
        const rect = element.querySelector('[slot="icon"]')?.getBoundingClientRect();
        expect(rect?.width).to.equal(parseInt(tokens.get('--rh-size-icon-06')!));
      });
    });

    describe('shorter than tablet', function() {
      beforeEach(async function() {
        await setViewport({ width: 300, height: 800 });
        await element.updateComplete;
      });

      it('has correct font size for title slot', function() {
        const slot = element.querySelectorAll('[slot="title"]');
        expect(slot?.length).to.equal(1);
        const fontSize = window.getComputedStyle(slot![0]).getPropertyValue('font-size');
        expect(fontSize).to.equal('18px');
      });

      it('has correct font size for statistic slot', function() {
        const slot = element.querySelectorAll('[slot="statistic"]');
        expect(slot?.length).to.equal(1);
        const fontSize = window.getComputedStyle(slot![0]).getPropertyValue('font-size');
        expect(fontSize).to.equal('35px');
      });

      it('has correct font size for description slot', function() {
        const slot = element.shadowRoot?.querySelectorAll('slot:not([name])');
        expect(slot?.length).to.equal(1);
        const fontSize = window.getComputedStyle(slot![0]).getPropertyValue('font-size');
        expect(fontSize).to.equal('16px');
      });
    });
  });

  describe('container width', function() {
    beforeEach(async function() {
      await setViewport({ width: 1200, height: 800 });
    });

    describe('narrow stat in a wide viewport', function() {
      beforeEach(async function() {
        element = await fixture<RhStat>(html`
          <rh-stat style="width: 320px">
            <span slot="title">Title</span>
            <span slot="statistic">32</span>
            <p>Description</p>
          </rh-stat>
        `);
        await element.updateComplete;
      });

      it('uses the compact statistic size', function() {
        const slot = element.querySelector('[slot="statistic"]');
        const fontSize = window.getComputedStyle(slot!).getPropertyValue('font-size');
        expect(fontSize).to.equal('26px');
      });

      it('uses the compact body size', function() {
        const slot = element.querySelector('p');
        const fontSize = window.getComputedStyle(slot!).getPropertyValue('font-size');
        expect(fontSize).to.equal('16px');
      });
    });

    describe('deprecated is-mobile on a wide stat', function() {
      beforeEach(async function() {
        element = await fixture<RhStat>(html`
          <rh-stat is-mobile size="large">
            <span slot="title">Title</span>
            <span slot="statistic">32</span>
            <p>Description</p>
          </rh-stat>
        `);
        await element.updateComplete;
      });

      it('uses the compact large statistic size', function() {
        const slot = element.querySelector('[slot="statistic"]');
        const fontSize = window.getComputedStyle(slot!).getPropertyValue('font-size');
        expect(fontSize).to.equal('35px');
      });

      it('uses the compact title and body sizes', function() {
        const title = element.querySelector('[slot="title"]');
        const body = element.querySelector('p');
        expect(window.getComputedStyle(title!).getPropertyValue('font-size')).to.equal('18px');
        expect(window.getComputedStyle(body!).getPropertyValue('font-size')).to.equal('16px');
      });
    });

    describe('slotted paragraph with a page font-size rule', function() {
      /**
       * Docs typography sets every `p` to 18px inside a cascade layer.
       * That specified size beats inheritance from `#content`.
       */
      async function fixtureStat(width?: string) {
        const root = await fixture<HTMLDivElement>(html`
          <div>
            <style>
              @layer typography {
                :where(p) { font-size: 1.125rem; }
              }
            </style>
            <rh-stat style="${width ?? ''}">
              <span slot="title">Title</span>
              <span slot="statistic">32</span>
              <p>Description</p>
            </rh-stat>
          </div>
        `);
        element = root.querySelector('rh-stat')!;
        await element.updateComplete;
      }

      it('keeps the wide body size', async function() {
        await fixtureStat();
        const body = element.querySelector('p');
        expect(window.getComputedStyle(body!).getPropertyValue('font-size')).to.equal('16px');
      });

      it('uses the compact body size when the stat is narrow', async function() {
        await fixtureStat('width: 320px');
        const body = element.querySelector('p');
        expect(window.getComputedStyle(body!).getPropertyValue('font-size')).to.equal('16px');
      });
    });
  });
});
