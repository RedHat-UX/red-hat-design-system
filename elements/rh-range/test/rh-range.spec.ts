import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhRange } from '@rhds/elements/rh-range/rh-range.js';

describe('<rh-range>', async function() {
  describe('simply instantiating', function() {
    let element: RhRange;
    beforeEach(async function() {
      element = await createFixture <RhRange>(html`<rh-range></rh-range>`);
    });

    it('should upgrade', function() {
      const klass = customElements.get('rh-range');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhRange);
    });

    it('lightdom passes the a11y audit', function() {
      return expect(element).to.be.accessible({
        // ignore this because the focusable semantics are delegated by the host
        ignoredRules: ['aria-hidden-focus']
      });
    });
  });
});
