import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhChipGroup } from '@rhds/elements/rh-chip/rh-chip-group.js';

describe('<rh-chip-group>', function() {
  describe('simply instantiating', function() {
    let element: RhChipGroup;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-chip-group')).to.be.an.instanceof(RhChipGroup);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhChipGroup>(html`<rh-chip-group></rh-chip-group>`);
      const klass = customElements.get('rh-chip-group');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhChipGroup);
    });
  });

  describe('when the element loads', function() {
    let element: RhChipGroup;
    beforeEach(async function() {
      element = await createFixture<RhChipGroup>(html`
         <rh-chip-group>
           <span slot="accessible-label">Filter by:</span>
           <rh-chip>Option 1</rh-chip>
           <rh-chip>Option 2</rh-chip>
           <rh-chip>Option 3</rh-chip>
         </rh-chip-group>
      `);
      await element.updateComplete;
    });

    it('should be accessible', async function() {
      await expect(element)
          .to.be.accessible();
    });
  });
});
