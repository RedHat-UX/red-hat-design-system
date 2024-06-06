import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { allUpdates } from '@patternfly/pfe-tools/test/utils.js';
import { RhHealthIndex } from '@rhds/elements/rh-health-index/rh-health-index.js';

describe('<rh-health-index>', function() {
  describe('simply instantiating', function() {
    let element: RhHealthIndex;
    beforeEach(async function() {
      element = await createFixture<RhHealthIndex>(html`<rh-health-index></rh-health-index>`);
    });

    it('imperatively instantiates', function() {
      expect(document.createElement('rh-health-index')).to.be.an.instanceof(RhHealthIndex);
    });

    it('should upgrade', async function() {
      const klass = customElements.get('rh-health-index');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhHealthIndex);
    });

    it('should be accessible', async function() {
      await expect(element)
          .to.be.accessible();
    });
  });
  describe('accessibility', function() {
    let element: RhHealthIndex;
    beforeEach(async function() {
      element = await createFixture<RhHealthIndex>(html`<rh-health-index grade="C" size="lg"></rh-health-index>`);
      await allUpdates(element);
    });

    it('should update ARIA label', async function() {
      /* Should test on a11y Tree, but role="img" and aria-label aren't available in snapshot for some reason */
      // const snapshot = await a11ySnapshot();
      // expect(snapshot)
      //   .to.deep.equal({
          
      //   });
      /* Testing shadowRoot instead */
      let ariaLabel = element.shadowRoot?.querySelector('#container')?.getAttribute('aria-label');
      expect(ariaLabel)
        .to.equal("Health: grade C out of A through F");
    });
  });
});
