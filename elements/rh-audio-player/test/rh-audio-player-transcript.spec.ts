import { expect, html, aTimeout } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';

import { RhAudioPlayer } from '../rh-audio-player.js';
import { RhAudioPlayerTranscript } from '../rh-audio-player-transcript.js';


describe('<rh-audio-player-transcript>', function() {
  let element: RhAudioPlayer;
  let transcript: RhAudioPlayerTranscript | null;

  describe('simply instantiating', function() {
    beforeEach(async function() {
      transcript = await createFixture<RhAudioPlayerTranscript>(html`
        <rh-audio-player-transcript>
        </rh-audio-player-transcript>
    `);
    });

    it('should upgrade', function() {
      const klass = customElements.get('rh-audio-player-transcript');
      expect(transcript)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhAudioPlayerTranscript);
    });
  });

  describe('with lightdom microcopy', function() {
    beforeEach(async function() {
      element = await createFixture<RhAudioPlayer>(html`
        <rh-audio-player lang="he-IL" mediaseries="testing" mediatitle="123">
            <script type="application/json" data-language="he-IL">
            {
              "autoscroll": "גלילת אוטומטית",
              "download": "הורדה"
            }
            </script>
          <rh-audio-player-transcript slot="transcript"></rh-audio-player-transcript>
        </rh-audio-player>
      `);
      transcript = await element.querySelector('rh-audio-player-transcript');
    });

    it('should use slotted data', function() {
      expect(transcript?.shadowRoot?.textContent?.replace(/\s+/g, ' ').trim()).to.equal('transcript גלילת אוטומטית הורדה');
    });
  });
});
