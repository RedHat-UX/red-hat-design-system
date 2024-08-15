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
  });
});

describe('when the element loads', function() {
  let element: RhAnnouncement;
  beforeEach(async function() {
    element = await createFixture<RhAnnouncement>(html`
      <rh-announcement>
        <img src="https://placehold.co/120x40?text=logo" slot="image" alt="LOGO" width="120" height="40">
        <p>Main content</p>
        <rh-cta slot="cta">
          <a href="#">CTA Text</a>
        </rh-cta>
      </rh-announcement>
    `);
    await element.updateComplete;
  });

  it('should be accessible', async function() {
    await expect(element)
        .to.be.accessible();
  });
});
