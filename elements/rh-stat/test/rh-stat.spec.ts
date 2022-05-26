/* eslint-disable no-console */
import { html } from 'lit';
import { expect, fixture, aTimeout } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';
import { RhStat } from '../rh-stat.js';

const KITCHEN_SINK = html`
  <rh-stat titleplacement="below" size="large" top="statistic">
      <pfe-icon slot='icon' icon='rh-atom'></pfe-icon>
      <span slot="title">Overwrite Title</span>
      <span slot="description">Stat body that includes two lines and a footnote.</span>
      <span slot="statistic">Overwrite Statistic</span>
  </rh-stat>
`;

describe('<rh-stat>', function() {
  let element: RhStat;

  describe('initializing', () => {
    beforeEach(async function() {
      element = await fixture<RhStat>(KITCHEN_SINK);
    });

    it('should upgrade', async () => {
      const klass = customElements.get('rh-stat');
      expect(element)
        .to.be.an.instanceof(klass)
        .and
        .to.be.an.instanceOf(RhStat);
    });

    it.skip('passes the a11y audit', async function() {
      expect(element).shadowDom.to.be.accessible();
    });
  });

  describe('adjusting window size', () => {
    beforeEach(async function() {
      element = await fixture<RhStat>(KITCHEN_SINK);
    });

    describe('wider than tablet', () => {
      beforeEach(async () => {
        await setViewport({ width: 1200, height: 800 });
        await element.updateComplete;
        await aTimeout(200);
      });

      it('has correct font size for statistic slot', () => {
        const slot = element.shadowRoot?.querySelectorAll('slot[name="statistic"]');
        expect(slot?.length).to.equal(1);
        const fontSize = window.getComputedStyle(slot![0]).getPropertyValue('font-size');
        expect(fontSize).to.equal('48px');
      });

      it('has correct font size for description slot', () => {
        const slot = element.shadowRoot?.querySelectorAll('slot[name="description"]');
        expect(slot?.length).to.equal(1);
        const fontSize = window.getComputedStyle(slot![0]).getPropertyValue('font-size');
        expect(fontSize).to.equal('18px');
      });
    });

    xdescribe('shorter than tablet', () => {
      beforeEach(async function() {
        await setViewport({ width: 300, height: 800 });
        await element.isUpdatePending;
        await aTimeout(1900);
      });

      it('has correct font size for title slot', () => {
        const slot = element.shadowRoot?.querySelectorAll('slot[name="title"]');
        expect(slot?.length).to.equal(1);
        const fontSize = window.getComputedStyle(slot![0]).getPropertyValue('font-size');
        expect(fontSize).to.equal('20px');
      });

      it('has correct icon size for icon slot', () => {
        console.log('element');
        console.log(element);
        const slot = element.shadowRoot?.querySelectorAll('slot[name="icon"] > pfe-icon');
        expect(slot?.length).to.equal(1);
        const size = slot![0].getAttribute('size');
        expect(size).to.equal('lg');
      });

      xit('has correct font size for statistic slot', () => {
        const slot = element.shadowRoot?.querySelectorAll('slot[name="statistic"]');
        expect(slot?.length).to.equal(1);
        const fontSize = window.getComputedStyle(slot![0]).getPropertyValue('font-size');
        expect(fontSize).to.equal('32px');
      });

      it('has correct font size for description slot', () => {
        const slot = element.shadowRoot?.querySelectorAll('slot[name="description"]');
        expect(slot?.length).to.equal(1);
        const fontSize = window.getComputedStyle(slot![0]).getPropertyValue('font-size');
        expect(fontSize).to.equal('18px');
      });
    });
  });

  // it('should upgrade', async function() {
  //   const el = await createFixture<RhStat>(element);
  //   const klass = customElements.get('rh-stat');
  //   expect(el)
  //     .to.be.an.instanceOf(klass)
  //     .and
  //     .to.be.an.instanceOf(RhStat);
  // });
});
