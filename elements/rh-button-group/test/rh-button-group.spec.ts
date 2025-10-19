import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhButtonGroup } from '@rhds/elements/rh-button-group/rh-button-group.js';

describe('<rh-button-group>', function() {
  describe('simply instantiating', function() {
    let element: RhButtonGroup;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-button-group')).to.be.an.instanceof(RhButtonGroup);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhButtonGroup>(html`<rh-button-group></rh-button-group>`);
      const klass = customElements.get('rh-button-group');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhButtonGroup);
    });
  })
});
