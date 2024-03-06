import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhFootnote } from '@rhds/elements/rh-footnote/rh-footnote.js';

describe('<rh-footnote>', function() {
  describe('simply instantiating', function() {
    let element: RhFootnote;
    it('should upgrade', async function() {
      element = await createFixture<RhFootnote>(html`<rh-footnote></rh-footnote>`);
      const klass = customElements.get('rh-footnote');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhFootnote);
    });
  })
});
