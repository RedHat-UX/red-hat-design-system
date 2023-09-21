import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhTile } from '@rhds/elements/rh-tile/rh-tile.js';

describe('<rh-tile>', function() {
  describe('simply instantiating', function() {
    let element: RhTile;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-tile')).to.be.an.instanceof(RhTile);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhTile>(html`<rh-tile></rh-tile>`);
      const klass = customElements.get('rh-tile');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhTile);
    });
  })
});
