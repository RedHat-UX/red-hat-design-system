import { expect, fixture } from '@open-wc/testing';
import { RhButtonGroup } from '@rhds/elements/rh-button-group/rh-button-group.js';

import '@rhds/elements/rh-button/rh-button.js';

let element: RhButtonGroup;

describe('<rh-button-group>', function() {
  describe('simply instantiating', function() {
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-button-group')).to.be.an.instanceof(RhButtonGroup);
    });

    it('should upgrade', async function() {
      element = await fixture<RhButtonGroup>(`<rh-button-group></rh-button-group>`);
      const klass = customElements.get('rh-button-group');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhButtonGroup);
    });
  });

  describe('accessibility', function() {
    beforeEach(async function() {
      element = await fixture<RhButtonGroup>(`
        <rh-button-group>
          <rh-button>Save</rh-button>
          <rh-button>Cancel</rh-button>
        </rh-button-group>
      `);
    });
    beforeEach(async () => await element.updateComplete);

    it('is accessible', async function() {
      await expect(element).to.be.accessible();
    });
  });

  describe('with buttons', function() {
    beforeEach(async function() {
      element = await fixture<RhButtonGroup>(`
        <rh-button-group>
          <rh-button>Save</rh-button>
          <rh-button>Cancel</rh-button>
        </rh-button-group>
      `);
    });
    beforeEach(async () => await element.updateComplete);

    it('should slot buttons correctly', function() {
      const buttons = element.querySelectorAll('rh-button');
      expect(buttons).to.have.length(2);
      expect(buttons[0].textContent?.trim()).to.equal('Save');
      expect(buttons[1].textContent?.trim()).to.equal('Cancel');
    });
  });
});
