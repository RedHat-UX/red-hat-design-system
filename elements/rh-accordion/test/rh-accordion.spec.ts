import { expect, html, fixture } from '@open-wc/testing';
import { RhAccordion } from '@rhds/elements/rh-accordion/rh-accordion.js';

describe('<rh-accordion>', function() {
  it('should upgrade', async function() {
    const el = document.createElement('rh-accordion');
    const klass = customElements.get('rh-accordion');
    expect(el)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhAccordion);
  });

  describe('with slotted h5', function() {
    let element: RhAccordion;

    before(async function() {
      element = await fixture(html`
        <rh-accordion>
          <rh-accordion-header><h5>5</h5></rh-accordion-header>
        </rh-accordion>
      `);
    });

    it('renders an h5', async function() {
      expect(element.querySelector('rh-accordion-header')?.shadowRoot?.querySelector('h5')).to.be.ok;
    });

    describe('changing the heading to h2', function() {
      beforeEach(function() {
        const newHeader = document.createElement('h2');
        newHeader.textContent = '2';
        element.querySelector('h5')?.replaceWith(newHeader);
      });

      beforeEach(() => element.updateComplete);

      it('renders an hd', async function() {
        expect(element.querySelector('rh-accordion-header')?.shadowRoot?.querySelector('h2')).to.be.ok;
      });
    });
  });

  describe('with heading-tag attribute', function() {
    let element: RhAccordion;

    beforeEach(async function() {
      element = await fixture(html`
        <rh-accordion>
          <rh-accordion-header heading-tag="h5">5</rh-accordion-header>
        </rh-accordion>
      `);
    });

    it('renders the correct heading level', async function() {
      expect(element.querySelector('rh-accordion-header')?.shadowRoot?.querySelector('h5')).to.be.ok;
    });

    describe('setting heading-tag attribute to the number 2', function() {
      beforeEach(function() {
        element.querySelector('rh-accordion-header')!.headingTag = 2;
      });

      beforeEach(() => element.updateComplete);

      it('renders an h2', function() {
        expect(element.querySelector('rh-accordion-header')?.shadowRoot?.querySelector('h2')).to.be.ok;
      });
    });
  });
});
