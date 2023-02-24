import { expect, html, aTimeout } from '@open-wc/testing';
import { setViewport, sendKeys } from '@web/test-runner-commands';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { waitUntil } from '@open-wc/testing-helpers';
// import { a11ySnapshot, type A11yTreeSnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { RhAudioPlayer } from '@rhds/elements/rh-audio-player/rh-audio-player.js';
// TODO import RhRange so I can set correct type on range elements

describe('<rh-audio-player>', function() {
  let element: RhAudioPlayer;

  before(async function() {
    // TODO: there is an issue with media seeking on Chrome that affects local files, similar to this issues: https://stackoverflow.com/questions/8088364/html5-video-will-not-loop
    element = await createFixture <RhAudioPlayer>(html`
      <rh-audio-player poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
        <p slot="series">Code Comments</p>
        <h3 slot="title">Bringing Deep Learning to Enterprise Applications</h3>
        <audio crossorigin="anonymous" slot="media" controls>
          <source type="audio/mp3" srclang="en" src="/elements/rh-audio-player/demo/detailed-transcript.mp3">
        </audio>
      </rh-audio-player>
    `);
  });

  describe('simply instantiating', function() {
    it('should upgrade', function() {
      const klass = customElements.get('rh-audio-player');
      return expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhAudioPlayer);
    });

    it('lightdom passes the a11y audit', function() {
      return expect(element).to.be.accessible();
    });
  });
  const ModeElements = {
    'default': ['play', 'time', 'mute', 'menu'],
    'compact': ['play', 'time', 'mute', 'menu', 'playback-rate', 'playback-rate-stepup', 'playback-rate-stepdown', 'volume', 'poster'],
    'compact-mobile': ['play', 'time', 'mute', 'menu'],
    'compact-wide': ['play', 'time', 'mute', 'menu', 'playback-rate', 'playback-rate-stepup', 'playback-rate-stepdown', 'volume', 'poster'],
    'compact-wide-mobile': ['play', 'time', 'mute', 'menu'],
    'full': ['time', 'mute', 'volume', 'full-playback-rate', 'full-playback-rate-stepup', 'full-playback-rate-stepdown', 'rewind', 'full-play', 'forward', 'menu', 'poster'],
    'full-mobile': ['play', 'time', 'mute', 'menu'],
  };

  // TODO: use testing actions to click on specific pixels, rather than shadowroot queries. this will also test layout accuracy to a degree
  const checkElementsInMode = (mode:typeof RhAudioPlayer.mode, mobile:boolean) => {
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
    const modeKey:'default'|'full'|'compact'|'compact-wide' = !mode ? 'default' : mode;
    const mobileKey = !mobile || modeKey === 'default' ? '' : '-mobile';
    const modeElement = `${modeKey}${mobileKey}`;

    describe('checking elements in mode', function() {
      AllElements.forEach(id => {
        describe(id, function() {
          let el;

          before(async function() {
            return el = await getShadowElementBySelector(`#${id}`);
          });

          if (ModeElements[modeElement as keyof typeof ModeElements].includes(id)) {
            it('exists', function() {
              expect(el).to.exist;
            });
            it('is visible', function() {
              expect(el).to.be.visible.and.to.be.displayed;
            });
          } else {
            it('is invisible', function() {
              expect(el).not.to.exist || expect(el).to.not.be.displayed || expect(el).to.not.be.visible;
            });
          }
        });
      });
    });

    // TODO: Error: No elements found for include in page Context
    it.skip('shadowdom passes the a11y audit', function() {
      expect(element).shadowDom.to.be.accessible();
    });
  };
  const getShadowElementBySelector = (query: string) => element?.shadowRoot?.querySelector(query) as HTMLElement;
  const getButton = (query: string) => getShadowElementBySelector(query) as HTMLButtonElement;

  const testMode = (mobile:boolean, mode:typeof RhAudioPlayer.mode) => {
    describe(`setting mode to ${mode}`, function() {
      before(async function() {
        element.mode = mode;
        await element.updateComplete;
      });
      it(`element is has rendered`, function() {
        expect(element.offsetWidth > 0).to.be.true;
      });
      it('loaded correct mode', function() {
        expect(element.mode, 'state').to.equal(mode);
      });

      checkElementsInMode(mode, mobile);
    });
  };

  const checkMedia = function(full = false) {
    before(async function() {
      return await waitUntil(
        function() { element.readyState > 2; },
        'player timed out before media was ready to play',
        { interval: 1, timeout: 500 }
      );
    });
    describe('checking media readiness', function() {
      /**
       * plays or pauses
       */
      const setPlay = (play = false) => {
        it(play ? 'is playing' : 'is paused', async function() {
          play ? element.play() : element.pause();
          await element.updateComplete;
          return expect(!!element.paused, 'state').to.equal(!play);
        });
      };

      /**
       * tests clicking playbutton
       */
      const clickPlay = (plays = false) => {
        it(plays ? 'plays' : 'pauses', async function() {
          const button = await getButton(full ? '#fullplay' : '#play');
          button?.click();
          await element.updateComplete;
          const test = !!element.paused === !plays;
          return expect(test, 'state').to.be.true;
        });
      };

      /**
       * tests seeking
       */
      const seek = seconds => {
        it(`sets time to ${seconds}`, async function() {
          if (!element.paused) {
            element.pause();
            return await element.updateComplete;
          }
          element.seek(seconds);
          return expect(element?.currentTime).to.equal(seconds);
        });
      };

      /**
       * seeks via setting the time range slider input
       */
      const timeSlider = seconds => {
        it(`sets time range slider to ${seconds}`, async function() {
          if (!element.paused) {
            element.pause();
            return await element.updateComplete;
          }
          const button = await getShadowElementBySelector('#time');
          if (button) { button.value = seconds; }
          await element.updateComplete;
          return expect(element.currentTime).to.equal(seconds);
        });
      };

      describe('testing playback rate', function() {
        let startrate;
        const pbrType = full ? '#full-playback-rate' : '#playback-rate';

        it('sets playback rate', async function() {
          const pbr = await getShadowElementBySelector(pbrType) as HTMLSelectElement;
          if (pbr?.value) { pbr.value = '2.0'; }
          return expect(element?.playbackrate).to.equal(2.0);
        });

        it('increments playback rate', async function() {
          startrate = element?.playbackrate;
          const pbrdown = await getButton(`#${pbrType}-stepdown`);
          pbrdown?.click();
          await element.updateComplete;
          return expect(element?.playbackrate).to.equal(startrate - 0.2);
        });

        it('decrements playback rate', async function() {
          startrate = element?.playbackrate;
          const pbrup = await getButton(`#${pbrType}-stepup`);
          pbrup?.click();
          await element.updateComplete;
          return expect(element?.playbackrate).to.equal(startrate + 0.2);
        });
      });

      /**
       * Avoids issue: DOMException:
       * play() failed because the user didn't interact with the document first.
       */
      it('can mute via keyboard', async function() {
        element.unmute();
        await element.updateComplete;
        const mute = await getButton('mute');
        mute?.focus();
        await sendKeys({ press: 'Enter' });
        element.mute();
        await element.updateComplete;
        expect(element.muted, 'state').to.be.true;
      });

      // TODO: can't get audio to play event though element.play() function is called
      describe('pausing to test keyboard play', function() {
        setPlay(false);
        describe('then keyboard play', function() {
          /**
           * Avoids issue: DOMException: play() failed because the user didn't interact with the document first.
           */
          it('can play via keyboard', async function() {
            element.pause();
            await element.updateComplete;
            const button = await getButton(full ? '#fullplay' : '#play');
            button?.focus();
            await sendKeys({ press: 'Enter' });
            await element.updateComplete;
            return expect(element.paused, 'state').to.be.false;
          });

          describe('then making sure element is paused', function() {
            setPlay(false);
            describe('then pressing play button', function() {
              clickPlay(true);
            });

            describe('then making sure element is playing', function() {
              setPlay(true);
              describe('then pressing pause button', function() {
                clickPlay(false);

                // TODO: Failed to execute 'add' on 'DOMTokenList': The token provided must not be empty.
                describe('then setting time to 0', function() {
                  seek(0);

                  describe('then setting time slider to 10', function() {
                    timeSlider(10);
                  });
                });
              });
            });
          });
        });
      });

      if (full) {
        describe('checking forward and rewind', function() {
          let rw:HTMLButtonElement; let fw: HTMLButtonElement; let starttime:number;
          it('rewind is disabled', async function() {
            element.seek(0);
            rw = rw || await getButton('#rewind');
            return expect(rw?.disabled).to.be.true;
          });

          it('forward is not disabled', async function() {
            element.seek(0);
            fw = fw || await getButton('#forward');
            return expect(fw?.disabled).to.be.false;
          });

          describe('clicking the forward button', function() {
            starttime = element.currentTime;
            it('skips forward', async function() {
              fw = fw || await getButton('#forward');
              fw?.click();
              return expect(element.currentTime).to.equal(starttime + 15);
            });

            describe('then clicking the rewind button', function() {
              it('skips backward', async function() {
                starttime = element.currentTime;
                rw = rw || await getButton('#rewind');
                rw?.click();
                return expect(element.currentTime).to.equal(starttime - 15);
              });

              describe('seeking to end of audio', function() {
                it('enables rewind', async function() {
                  element.seek(element.duration);
                  await element.updateComplete;
                  return expect(rw?.disabled).to.be.false;
                });

                it('disables forward', async function() {
                  element.seek(element.duration);
                  await element.updateComplete;
                  return expect(fw?.disabled).to.be.true;
                });
              });
            });
          });
        });
      }
    });
  };

  describe('each regular mode', function() {
    it(`viewport is default`, function() {
      expect( document.body.offsetWidth < 500, 'state').to.be.false;
    });

    /**
     * Testing default (mini) mode
     * Note: All of its buttons will be tested in compact wide
     */
    describe('default mode', function() {
      testMode(false, 'default');
    });

    /**
     * Testing compact mode
     * Note: All of its buttons will be tested in compact wide
     */
    describe('compact mode', function() {
      testMode(false, 'compact');
    });

    /**
     * Testing compact-wide mode
     * Note: Mute buttons, volume slider,
     * play button, and playback-rate buttons
     * will be tested.
     */
    describe('compact-wide mode', function() {
      testMode(false, 'compact-wide');
      let mute:HTMLButtonElement;

      const setVolume = (level = 0) => {
        it(`volume is ${level}`, async function() {
          element.volume = level;
          await element.updateComplete;
          expect(element.volume, 'state').to.equal(level);
        });
      };

      const clickMute = (mutes = false) =>{
        it(mutes ? 'mutes' : 'unmutes', async function() {
          mute = mute || await getButton('#mute');
          mute?.click();
          await element.updateComplete;
          const test = !!element.muted === !mutes;
          expect(test, 'state').to.be.true;
        });
      };

      describe('then checking mute button', function() {
        before(async function() {
          return await waitUntil(
            function() { element.readyState > 2; },
            'player timed out before media was ready to mute/unmute',
            { interval: 1, timeout: 500 }
          );
        });

        it('mute enabled', async function() {
          const button = await getButton('#mute');
          return expect(!!button && !button?.disabled, 'state').to.be.true;
        });

        // tests play and pause based on which play button is visible
        describe('then setting volume to 0.5', function() {
          setVolume(0.5);
          describe('then clicking mute button', function() {
            clickMute(true);

            describe('setting volume to 0', function() {
              setVolume(0);
              describe('then clicking unmute button', function() {
                clickMute(false);
              });
            });
          });
        });
      });

      // TODO: audio is not ready before timeout
      checkMedia();
    });

    /**
     * Testing compact mode
     * Note: Full-play, full-playback-rate buttons,
     * and rewind/foward buttons will be tested
     */
    describe('full mode', async function() {
      testMode(false, 'full');

      // TODO: audio is not ready before timeout
      checkMedia();
    });
  });

  /**
   * Testing compact mobile mode
   * TODO: timeout issues with mobile
   */
  describe.skip('smaller viewport', function() {
    before(async function() {
      await setViewport({ width: 400, height: 800 });
      await element.updateComplete;
    });

    it(`viewport to desktop`, function() {
      expect( document.body.offsetWidth < 500, 'state').to.be.true;
    });

    describe('compact mobile mode', function() {
      testMode(true, 'compact');
    });

    describe('compact-wide mobile mode', function() {
      testMode(true, 'compact-wide');
    });
    describe('full mobile mode', function() {
      testMode(true, 'full');
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
