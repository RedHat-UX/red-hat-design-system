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
          <h5>
            <rh-accordion-header>5</rh-accordion-header>
          </h5>
        </rh-accordion>
      `);
    });

    it('removes the h5', async function() {
      expect(element.querySelector('h5')?.shadowRoot?.querySelector('h5')).to.not.be.ok;
    });
  });
});
