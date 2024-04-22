import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhBreadcrumb } from '@rhds/elements/rh-breadcrumb/rh-breadcrumb.js';

describe('<rh-breadcrumb>', function() {
  describe('simply instantiating', function() {
    let element: RhBreadcrumb;
    it('should upgrade', async function() {
      element = await createFixture<RhBreadcrumb>(html`<rh-breadcrumb></rh-breadcrumb>`);
      const klass = customElements.get('rh-breadcrumb');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhBreadcrumb);
    });
  });
});
