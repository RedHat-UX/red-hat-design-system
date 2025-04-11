import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';

import { RhAudioPlayer } from '../rh-audio-player.js';
import { RhTranscript } from '../rh-transcript.js';


describe('<rh-transcript>', function() {
  let element: RhAudioPlayer;
  let transcript: RhTranscript | null;

  it('instantiates imperatively', function() {
    expect(document.createElement('rh-transcript')).to.be.an.instanceof(RhTranscript);
  });

  describe('simply instantiating', function() {
    beforeEach(async function() {
      transcript = await createFixture<RhTranscript>(html`
        <rh-transcript>
        </rh-transcript>
    `);
    });

    it('should upgrade', function() {
      const klass = customElements.get('rh-transcript');
      expect(transcript)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhTranscript);
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
          <rh-transcript slot="transcript"></rh-transcript>
        </rh-audio-player>
      `);
      transcript = element.querySelector('rh-transcript');
    });

    it('should use slotted data', function() {
      expect(transcript?.menuLabel).to.equal('transcript');
      expect(transcript?.autoscrollLabel).to.equal('גלילת אוטומטית');
      expect(transcript?.downloadLabel).to.equal('הורדה');
    });
  });
});
