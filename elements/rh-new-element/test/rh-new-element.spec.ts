import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhNewElement } from '@rhds/elements/rh-new-element/rh-new-element.js';

describe('<rh-new-element>', function() {
  describe('simply instantiating', function() {
    let element: RhNewElement;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-new-element')).to.be.an.instanceof(RhNewElement);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhNewElement>(html`<rh-new-element></rh-new-element>`);
      const klass = customElements.get('rh-new-element');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhNewElement);
    });
  })
});
