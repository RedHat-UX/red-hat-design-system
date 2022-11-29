import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhAudioPlayer } from '@rhds/elements/rh-audio-player/rh-audio-player.js';

const element = html`
  <rh-audio-player></rh-audio-player>
`;

describe('<rh-audio-player>', function() {
  it('should upgrade', async function() {
    const el = await createFixture <RhAudioPlayer> (element);
    const klass = customElements.get('rh-audio-player');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhAudioPlayer);
  });
});
