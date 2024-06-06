import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { RhHealthIndex } from '@rhds/elements/rh-health-index/rh-health-index.js';

describe('<rh-health-index>', function() {
  describe('simply instantiating', function() {
    let element: RhHealthIndex;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-health-index')).to.be.an.instanceof(RhHealthIndex);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhHealthIndex>(html`<rh-health-index></rh-health-index>`);
      const klass = customElements.get('rh-health-index');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhHealthIndex);
    });

    // it('should update ARIA label', async function() {
    //   element = await createFixture<RhHealthIndex>(html`<rh-health-index grade="C" size="lg"></rh-health-index>`);
      
    // });

    it('should be accessible', async function() {
      await expect(element)
          .to.be.accessible();
    });
  });
});
