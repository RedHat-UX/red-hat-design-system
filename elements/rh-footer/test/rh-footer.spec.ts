import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { RhFooter } from '../RhFooter.js';
import '../rh-footer.js';

describe('<rh-footer>', function() {
  let element: RhFooter;
  describe('simply instantiating', function() {
    beforeEach(async function() {
      element = await fixture<RhFooter>(html`<rh-footer></rh-footer>`);
    });

    it('should upgrade', async function() {
      const klass = customElements.get('rh-footer');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhFooter);
    });

    it('passes the a11y audit', async function() {
      expect(element).shadowDom.to.be.accessible();
    });
  });
});
