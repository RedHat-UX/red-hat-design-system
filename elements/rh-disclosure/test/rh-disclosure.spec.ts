import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhDisclosure } from '@rhds/elements/rh-disclosure/rh-disclosure.js';

describe('<rh-disclosure>', function() {
  describe('simply instantiating', function() {
    let element: RhDisclosure;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-disclosure')).to.be.an.instanceof(RhDisclosure);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhDisclosure>(html`<rh-disclosure></rh-disclosure>`);
      const klass = customElements.get('rh-disclosure');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhDisclosure);
    });
  });

  describe('when the element loads', function() {
    let element: RhDisclosure;
    beforeEach(async function() {
      element = await createFixture<RhDisclosure>(html`
        <rh-disclosure>
          <span slot="summary-label">
            Summary title
          </span>
          <p>Details content goes here.</p>
        </rh-disclosure>
      `);
      await element.updateComplete;
    });

    it('should be accessible', async function() {
      await expect(element).to.be.accessible();
    });
  });
});
