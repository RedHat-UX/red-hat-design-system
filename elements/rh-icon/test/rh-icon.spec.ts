import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhIcon } from '@rhds/elements/rh-icon/rh-icon.js';

describe('<rh-icon>', function() {
  describe('simply instantiating', function() {
    let element: RhIcon;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-icon')).to.be.an.instanceof(RhIcon);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhIcon>(html`<rh-icon></rh-icon>`);
      const klass = customElements.get('rh-icon');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhIcon);
    });
  });
});
