import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhAvatar } from '../rh-avatar.js';

describe('<rh-avatar>', function() {
  describe('simply instantiating', function() {
    let element: RhAvatar;
    beforeEach(async function() {
      element = await createFixture<RhAvatar>(html`<rh-avatar></rh-avatar>`);
    });
    it('should upgrade', async function() {
      expect(element)
        .to.be.an.instanceOf(customElements.get('rh-avatar'))
        .and
        .to.be.an.instanceOf(RhAvatar);
    });
  });
});
