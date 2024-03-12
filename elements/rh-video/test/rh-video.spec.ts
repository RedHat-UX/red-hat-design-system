import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhVideo } from '@rhds/elements/rh-video/rh-video.js';

describe('<rh-video>', function() {
  describe('simply instantiating', function() {
    let element: RhVideo;
    it('should upgrade', async function() {
      element = await createFixture<RhVideo>(html`<rh-video></rh-video>`);
      const klass = customElements.get('rh-video');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhVideo);
    });
  })
});
