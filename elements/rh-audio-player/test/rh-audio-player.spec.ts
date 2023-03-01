import { expect, html, aTimeout } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';

import { setViewport, sendKeys, sendMouse } from '@web/test-runner-commands';
import { ifDefined } from 'lit/directives/if-defined.js';

// import { a11ySnapshot, type A11yTreeSnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { RhAudioPlayer } from '../rh-audio-player.js';
// TODO import RhRange so I can set correct type on range elements

const ModeElements = new Map<RhAudioPlayer['mode'], string[]>([
  [undefined, ['play', 'time', 'mute', 'menu']],
  ['compact', ['play', 'time', 'mute', 'menu', 'playback-rate', 'playback-rate-stepup', 'playback-rate-stepdown', 'volume', 'poster']],
  ['compact-wide', ['play', 'time', 'mute', 'menu', 'playback-rate', 'playback-rate-stepup', 'playback-rate-stepdown', 'volume', 'poster']],
  ['full', [
    'time',
    'mute',
    'volume',
    'full-playback-rate',
    'full-playback-rate-stepup',
    'full-playback-rate-stepdown',
    'rewind',
    'full-play',
    'forward',
    'menu',
    'poster',
  ]],
]);

const MobileModeElements = new Map<RhAudioPlayer['mode'], string[]>([
  [undefined, ['play', 'time', 'mute', 'menu']],
  ['compact', ['play', 'time', 'mute', 'menu']],
  ['compact-wide', ['play', 'time', 'mute', 'menu']],
  ['full', ['play', 'time', 'mute', 'menu']],

]);

const AllElements = [
  'forward',
  'full-play',
  'menu',
  'mute',
  'play',
  'playback-rate',
  'playback-rate-stepup',
  'playback-rate-stepdown',
  'full-playback-rate',
  'full-playback-rate-stepup',
  'full-playback-rate-stepdown',
  'rewind',
  'time',
  'volume',
];

describe('<rh-audio-player>', function() {
  let element: RhAudioPlayer;

  describe('simply instantiating', function() {
    beforeEach(async function() {
      element = await createFixture<RhAudioPlayer>(html`<rh-audio-player></rh-audio-player>`);
    });
    it('should upgrade', function() {
      const klass = customElements.get('rh-audio-player');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhAudioPlayer);
    });
  });

  // ACTIONS

  function setupForMode(mode?: RhAudioPlayer['mode']) {
    return (async function() {
      element = await createFixture <RhAudioPlayer>(html`
        <rh-audio-player mode="${ifDefined(mode)}" poster="/elements/rh-audio-player/test/poster.png">
          <p slot="series">Code Comments</p>
          <h3 slot="title">Bringing Deep Learning to Enterprise Applications</h3>
          <audio crossorigin="anonymous" slot="media" controls preload="auto">
            <source type="audio/mp3" srclang="en" src="/elements/rh-audio-player/test/test.100k.mp3">
          </audio>
        </rh-audio-player>
      `);
      await aTimeout(50);
    });
  }

  function setVolume(level: number) {
    return async function() {
      element.volume = level;
      await element.updateComplete;
    };
  }

  async function clickMute() {
    const button = getShadowElementBySelector('#mute') as HTMLButtonElement;
    button!.click();
    await element.updateComplete;
  }

  async function play() {
    await element.play();
    await element.updateComplete;
  }

  async function clickPlay() {
    const button = getShadowElementBySelector(element.mode === 'full' ? '#fullplay' : '#play') as HTMLButtonElement;
    await sendMouse({ type: 'click', position: [button.offsetLeft + 5, button.offsetTop + 5] });
    await element.updateComplete;
  }

  async function pause() {
    element.pause();
    await element.updateComplete;
  }

  async function clickForward() {
    const button = getShadowElementBySelector('#forward') as HTMLButtonElement;
    button!.click();
  }

  async function clickRewind() {
    const button = getShadowElementBySelector('#rewind') as HTMLButtonElement;
    button!.click();
  }

  function seek(seconds: number) {
    return function() {
      element.seek(seconds);
    };
  }

  /**
   * seeks via setting the time range slider input
   */
  function seekViaSlider(percent: 0|10|20|30|40|50|60|70|80|90|100) {
    return async function() {
      const range = getShadowElementBySelector('#time') as HTMLInputElement;
      const x = Math.floor(range.offsetLeft + range.offsetWidth * (percent / 100));
      const y = Math.floor(range.offsetTop + range.offsetHeight / 2);
      await sendMouse({ type: 'click', position: [x, y] });
    };
  }

  function sleep(ms: number) {
    return async function(this: Mocha.Context) {
      this.timeout(20_000);
      await aTimeout(ms);
    };
  }

  // ASSERTIONS

  // TODO: use testing actions to click on specific pixels, rather than shadowroot queries. this will also test layout accuracy to a degree
  function getShadowElementBySelector(query: string) {
    return element?.shadowRoot?.querySelector(query);
  }

  function assertModeElementsExist(mode?: RhAudioPlayer['mode']) {
    return function() {
      for (const id of AllElements) {
        const el = getShadowElementBySelector(`#${id}`)!;
        if (ModeElements.get(mode)?.includes(id)) {
          expect(el, id)
            .to.exist
            .and.to.be.visible
            .and.to.be.displayed;
        } else {
          expect(el, id).to.not.exist;
        }
      }
    };
  }

  function assertMobileModeElementsExist(mode?: RhAudioPlayer['mode']) {
    return function() {
      for (const id of AllElements) {
        const el = getShadowElementBySelector(`#${id}`)!;
        if (MobileModeElements.get(mode)?.includes(id)) {
          expect(el, id)
            .to.exist
            .and.to.be.visible
            .and.to.be.displayed;
        } else {
          expect(el, id).to.not.exist;
        }
      }
    };
  }

  function assertHasWidth() {
    expect(element.offsetWidth).to.be.greaterThan(0);
  }

  async function assertIsAccessible() {
    await Promise.resolve(expect(element).to.be.accessible());
  }

  describe('without mode', function() {
    beforeEach(setupForMode());
    it('has width', assertHasWidth);
    it('displays the correct elements', assertModeElementsExist());
  });

  describe('compact mode', function() {
    beforeEach(setupForMode('compact'));
    it('has width', assertHasWidth);
    it('displays the correct elements', assertModeElementsExist('compact'));
  });

  describe('compact-wide mode', function() {
    beforeEach(setupForMode('compact-wide'));
    it('has width', assertHasWidth);
    it('displays the correct elements', assertModeElementsExist('compact-wide'));

    it('has mute button enabled', function() {
      const button = getShadowElementBySelector('#mute') as HTMLButtonElement;
      expect(button?.disabled, 'state').to.be.false;
    });

    describe('setting volume to 0.5', function() {
      beforeEach(setVolume(0.5));
      beforeEach(sleep(100));
      it('sets the volume', function() {
        expect(element.volume).to.equal(0.5);
      });

      describe('then clicking mute button', function() {
        beforeEach(clickMute);
        beforeEach(sleep(100));
        it('mutes', function() {
          expect(element.muted, 'state').to.be.true;
        });
        describe('setting volume to 0', function() {
          beforeEach(setVolume(0));
          describe('then clicking unmute button', function() {
            beforeEach(clickMute);
            beforeEach(sleep(100));
            it('unmutes', function() {
              expect(element.muted, 'state').to.be.false;
            });
          });
        });
      });
    });

    describe('clicking play', function() {
      beforeEach(clickPlay);
      it('plays', function() {
        expect(element.paused, 'paused').to.be.false;
      });
      describe('then clicking pause', function() {
        beforeEach(sleep(100));
        beforeEach(clickPlay);
        it('pauses', function() {
          expect(element.paused, 'paused').to.be.true;
        });
        describe('then pressing Enter on the keyboard', function() {
          beforeEach(sleep(100));
          beforeEach(async function() {
            await sendKeys({ press: 'Enter' });
            await element.updateComplete;
          });
          it('plays', async function() {
            expect(element.paused, 'paused').to.be.false;
          });
        });
      });
    });
    describe('then calling seek(0)', function() {
      beforeEach(seek(0));
      it('sets time to 0', function() {
        expect(element?.currentTime).to.equal(0);
      });
    });
    describe('then setting time slider to approximately 60%', function() {
      beforeEach(sleep(100));
      beforeEach(seekViaSlider(60));
      it('sets the currentTime to approximately 60%', function() {
        expect(element.currentTime)
          .to.be.greaterThanOrEqual(element.duration / 2)
          .and.to.be.lessThan(element.duration);
      });
    });
  });

  describe('full mode', function() {
    let starttime: number;

    beforeEach(setupForMode('full'));

    beforeEach(function() {
      starttime = element.currentTime;
    });

    it('has width', assertHasWidth);

    it('displays the correct elements', assertModeElementsExist('full'));

    // TODO: repeat this suite in mobile
    it('rewind is disabled', function() {
      const rw = getShadowElementBySelector('#rewind') as HTMLButtonElement;
      expect(rw?.disabled).to.be.true;
    });

    // TODO: repeat this suite in mobile
    it('forward is not disabled', function() {
      const fw = getShadowElementBySelector('#forward') as HTMLButtonElement;
      expect(fw?.disabled).to.be.false;
    });

    describe('clicking the forward button', function() {
      beforeEach(clickForward);

      it('skips forward', function() {
        expect(element.currentTime).to.equal(starttime + 15);
      });

      describe('then clicking the rewind button', function() {
        beforeEach(clickRewind);

        it('skips backward', function() {
          expect(element.currentTime).to.equal(starttime - 15);
        });

        describe('seeking to end of audio', function() {
          beforeEach(function() {
            element.seek(element.duration);
          });

          it('enables rewind', function() {
            const rw = getShadowElementBySelector('#rewind') as HTMLButtonElement;
            expect(rw?.disabled).to.be.false;
          });

          it('disables forward', function() {
            const fw = getShadowElementBySelector('#rewind') as HTMLButtonElement;
            expect(fw?.disabled).to.be.true;
          });
        });
      });
    });
  });

  /**
   * Testing compact mobile mode
   */
  describe('in a smaller viewport', function() {
    beforeEach(async function() {
      await setViewport({ width: 400, height: 800 });
    });

    describe('compact mode', function() {
      before(setupForMode('compact'));
      it('has width', assertHasWidth);
      it('displays the correct elements', assertMobileModeElementsExist('compact'));
    });

    describe('compact-wide mode', function() {
      before(setupForMode('compact-wide'));
      it('has width', assertHasWidth);
      it('displays the correct elements', assertMobileModeElementsExist('compact-wide'));
      it('has mute button enabled', function() {
        const button = getShadowElementBySelector('#mute') as HTMLButtonElement;
        expect(button?.disabled, 'state').to.be.false;
      });
    });
  });
});

// todo playback rate select and buttons
// todo colors
// todo text overflow
// todo menu
// todo transcript
// todo language
// todo concurrentcy
// todo test icons that toggle

function checkMedia(full = false) {
  describe('checking media readiness', function() {
    /**
       * Avoids issue: DOMException:
       * play() failed because the user didn't interact with the document first.
       */
    it('can mute via keyboard', async function() {
      element.unmute();
      await element.updateComplete;
      const mute = getButton('mute');
      mute?.focus();
      await sendKeys({ press: 'Enter' });
      element.mute();
      await element.updateComplete;
      expect(element.muted, 'state').to.be.true;
    });

    describe('testing playback rate', function() {
      let startrate;
      const pbrType = full ? '#full-playback-rate' : '#playback-rate';

      it('sets playback rate', async function() {
        const pbr = await getShadowElementBySelector(pbrType) as HTMLSelectElement;
        if (pbr?.value) { pbr.value = '2.0'; }
        expect(element?.playbackrate).to.equal(2.0);
      });

      it('increments playback rate', async function() {
        startrate = element?.playbackrate;
        const pbrdown = getButton(`#${pbrType}-stepdown`);
        pbrdown?.click();
        await element.updateComplete;
        expect(element?.playbackrate).to.equal(startrate - 0.2);
      });

      it('decrements playback rate', async function() {
        startrate = element?.playbackrate;
        const pbrup = getButton(`#${pbrType}-stepup`);
        pbrup?.click();
        await element.updateComplete;
        expect(element?.playbackrate).to.equal(startrate + 0.2);
      });
    });
  });
}
