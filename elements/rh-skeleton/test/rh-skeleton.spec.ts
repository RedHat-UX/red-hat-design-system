import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSkeleton } from '@rhds/elements/rh-skeleton/rh-skeleton.js';

describe('<rh-skeleton>', function() {
  describe('simply instantiating', function() {
    let element: RhSkeleton;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-skeleton')).to.be.an.instanceof(RhSkeleton);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhSkeleton>(html`<rh-skeleton></rh-skeleton>`);
      const klass = customElements.get('rh-skeleton');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhSkeleton);
    });
  });

  describe('when the element loads', function() {
    let element: RhSkeleton;
    beforeEach(async function() {
      element = await createFixture<RhSkeleton>(html`<rh-skeleton></rh-skeleton>`);
      await element.updateComplete;
    });

    it('should be accessible', async function() {
      await expect(element)
          .to.be.accessible();
    });

    it('should have a11y content in the default slot', function() {
      expect(element.shadowRoot?.textContent).to.not.be.empty;
    });
  });
});
