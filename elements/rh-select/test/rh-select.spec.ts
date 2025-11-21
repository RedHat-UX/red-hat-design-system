import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSelect } from '@rhds/elements/rh-select/rh-select.js';

describe('<rh-select>', function() {
  describe('simply instantiating', function() {
    let element: RhSelect;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-select')).to.be.an.instanceof(RhSelect);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhSelect>(html`<rh-select></rh-select>`);
      const klass = customElements.get('rh-select');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhSelect);
    });
  })
});
