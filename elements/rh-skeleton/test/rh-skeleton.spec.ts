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
  })
});
