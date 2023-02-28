import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhAvatar } from '@rhds/elements/rh-avatar/rh-avatar.js';

describe('<rh-avatar>', function() {
  describe('simply instantiating', function() {
    let element: RhAvatar;
    before(async function() {
      element = await createFixture<RhAvatar>(html`<rh-avatar></rh-avatar>`);
    });
    it('should upgrade', async function() {
      expect(element)
        .to.be.an.instanceOf(customElements.get('rh-avatar'))
        .and
        .to.be.an.instanceOf(RhAvatar);
    });
    it(`should default to pattern: "squares"`, async function() {
      expect(element.pattern).to.equal('squares');
    });
  });
});
