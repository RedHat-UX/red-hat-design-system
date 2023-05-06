import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';

import { RhAudioPlayerTranscript } from '../rh-audio-player-transcript.js';

describe('<rh-audio-player-transcript>', function() {
  let element: RhAudioPlayerTranscript;

  describe('simply instantiating', function() {
    beforeEach(async function() {
      element = await createFixture<RhAudioPlayerTranscript>(html`
      <rh-audio-player-transcript></rh-audio-player-transcript>
    `);
    });

    it('should upgrade', function() {
      const klass = customElements.get('rh-audio-player-transcript');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhAudioPlayerTranscript);
    });
  });

  describe('with lightdom microcopy', function() {
    beforeEach(async function() {
      element = await createFixture<RhAudioPlayerTranscript>(html`
        <rh-audio-player-transcript lang="he-IL">
          <script type="application/json" data-language="he-IL">
          {
            "autoscroll": "גלילת אוטומטית",
            "download": "הורדה"
          }
          </script>
        </rh-audio-player-transcript>
      `);
    });

    it('should use slotted data', function() {
      expect(element.shadowRoot?.textContent?.replace(/\s+/g, ' ').trim()).to.equal('Transcript גלילת אוטומטית הורדה');
    });
  });
});
