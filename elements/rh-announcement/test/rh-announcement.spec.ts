import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhAnnouncement } from '@rhds/elements/rh-announcement/rh-announcement.js';

describe('<rh-announcement>', function() {
  describe('simply instantiating', function() {
    let element: RhAnnouncement;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-announcement')).to.be.an.instanceof(RhAnnouncement);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhAnnouncement>(html`<rh-announcement></rh-announcement>`);
      const klass = customElements.get('rh-announcement');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhAnnouncement);
    });
  })
});
