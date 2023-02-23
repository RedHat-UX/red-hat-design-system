import { expect, html, aTimeout, elementUpdated } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { waitUntil } from '@open-wc/testing-helpers';
import { a11ySnapshot, type A11yTreeSnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { RhAudioPlayer } from '@rhds/elements/rh-audio-player/rh-audio-player.js';
// TODO import RhRange so I can set correct type on range elements

describe('<rh-audio-player>', function() {
  describe.skip('simply instantiating', function() {
    let element: RhAudioPlayer;

    beforeEach(async function() {
      element = await createFixture <RhAudioPlayer>(html`<rh-audio-player></rh-audio-player>`);
    });

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

  describe('each mode', async function() {
    let element: RhAudioPlayer;
    const ui = {
      play: undefined as HTMLButtonElement|undefined,
      fullplay: undefined as HTMLButtonElement|undefined,
      mute: undefined as HTMLButtonElement|undefined,
      time: undefined as HTMLElement|undefined, // TODO as RhRange
      poster: undefined as HTMLElement|undefined,
      volume: undefined as HTMLElement|undefined, // TODO as RhRange
      forward: undefined as HTMLButtonElement|undefined,
      rewind: undefined as HTMLButtonElement|undefined,
      playbackrate: undefined as HTMLSelectElement|undefined,
      playbackratestepdown: undefined as HTMLButtonElement|undefined,
      playbackratestepup: undefined as HTMLButtonElement|undefined,
      fullplaybackrate: undefined as HTMLSelectElement|undefined,
      fullplaybackratestepdown: undefined as HTMLButtonElement|undefined,
      fullplaybackratestepup: undefined as HTMLButtonElement|undefined,
      menu: undefined as HTMLElement|undefined,
    };
    let starttime: number;
    let startrate:number;


    const ModeElements = {
      'default': ['play', 'time', 'mute', 'menu'],
      'compact': ['play', 'time', 'mute', 'menu', 'playback-rate', 'playback-rate-stepup', 'playback-rate-stepdown', 'volume', 'poster'],
      'compact-mobile': ['play', 'time', 'mute', 'menu'],
      'compact-wide': ['play', 'time', 'mute', 'menu', 'playback-rate', 'playback-rate-stepup', 'playback-rate-stepdown', 'volume', 'poster'],
      'compact-wide-mobile': ['play', 'time', 'mute', 'menu'],
      'full': ['time', 'mute', 'volume', 'full-playback-rate', 'full-playback-rate-stepup', 'full-playback-rate-stepdown', 'rewind', 'full-play', 'forward', 'menu', 'poster'],
      'full-mobile': ['play', 'time', 'mute', 'menu'],
    };

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

    const getShadowElementBySelector = (query: string) => element?.shadowRoot?.querySelector(query) as HTMLElement;
    const getButton = (query: string) => getShadowElementBySelector(query) as HTMLButtonElement;

    // TODO: use testing actions to click on specific pixels, rather than shadowroot queries. this will also test layout accuracy to a degree
    const checkElementInMode = (mode: keyof typeof ModeElements, id:string, el?:HTMLElement) => {
      const key = id.replace('-', '') as keyof typeof ui;
      describe(id, function() {
        before(function() {
          if (!el) { el = ui[key]; }
        });

        if (ModeElements[mode].includes(id)) {
          it('exists', function() {
            return expect(el).to.exist;
          });
          it('is visible', function() {
            return expect(el).to.be.visible.and.to.be.displayed;
          });
        } else {
          it('is invisible', function() {
            return expect(el).not.to.exist || expect(el).to.not.be.displayed || expect(el).to.not.be.visible;
          });
        }
      });
    };

    const checkElementsInMode = (mode: keyof typeof ModeElements) => AllElements.forEach(id => checkElementInMode(mode, id));


    const initPlayer = async (mode?: keyof typeof ModeElements) => {
      // reset viewport
      if (mode) { element.mode = mode; }
      await setViewport({ width: 1000, height: 800 });

      // update variables
      await element.updateComplete;
      ui.play = getButton('#play');
      ui.fullplay = getButton('#full-play');
      ui.mute = getButton('#mute');
      ui.time = getShadowElementBySelector('#time');
      ui.poster = getButton('#poster');
      ui.volume = getShadowElementBySelector('#volume');
      ui.forward = getButton('#forward');
      ui.rewind = getButton('#rewind');
      ui.playbackrate = getShadowElementBySelector('#playback-rate') as HTMLSelectElement;
      ui.playbackratestepdown = getButton('#playback-rate-stepdown');
      ui.playbackratestepup = getButton('#playback-rate-stepup');
      ui.fullplaybackrate = getShadowElementBySelector('#full-playback-rate') as HTMLSelectElement;
      ui.fullplaybackratestepdown = getButton('#full-playback-rate-stepdown');
      ui.fullplaybackratestepup = getButton('#full-playback-rate-stepup');
      ui.menu = getButton('#menu');
    };

    before(async function() {
      // TODO: there is an issue with media seeking on Chrome that affects local files, similar to this issues: https://stackoverflow.com/questions/8088364/html5-video-will-not-loop
      element = await createFixture <RhAudioPlayer>(html`
        <rh-audio-player poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
          <p slot="series">Code Comments</p>
          <h3 slot="title">Bringing Deep Learning to Enterprise Applications</h3>
          <audio crossorigin="anonymous" slot="media" controls>
            <source type="audio/mp3" srclang="en" src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3">
          </audio>
        </rh-audio-player>
      `);
      return await waitUntil(() => element?.querySelector('audio')?.readyState > 2);
    });

    describe.skip('default mode', async function() {
      before(async function() {
        await initPlayer();
      });

      // TODO: Error: No elements found for include in page Context
      it('shadowdom passes the a11y audit', function() {
        return expect(element).shadowDom.to.be.accessible();
      });

      checkElementsInMode('default');

      describe('then pressing mute button', function() {
        it('mutes', function() {
          element.volume = 0.5;
          ui.mute?.click();
          return expect(element.muted, 'state').to.be.true;
        });

        describe('then pressing unmute button', function() {
          it('unmutes', function() {
            element.mute();
            ui.mute?.click();
            return expect(element.muted, 'state').to.be.false;
          });
        });
      });

      // TODO: Resolve this issue: https://developer.chrome.com/blog/autoplay/
      describe.skip('pressing play button', function() {
        it('plays', function() {
          element.mute();
          ui.play?.focus();
          ui.play?.click();
          return expect(element.paused, 'state').to.be.false;
        });

        describe('then pressing pause button', function() {
          it('pauses', function() {
            ui.play?.click();
            return expect(element.paused, 'state').to.be.true;
          });
        });
        // TODO: Failed to execute 'add' on 'DOMTokenList': The token provided must not be empty.
        describe('then setting time slider', function() {
          it('sets time slider', function() {
            element.pause();
            if (ui.time) { ui.time.value = 10; }
            return expect(element?.currentTime).to.equal(10);
          });
        });
      });
    });

    // TODO: this test is timing out, but tests all complete and then it continues to sit
    describe.skip('compact mode', async function() {
      before(async function() {
        return await initPlayer('compact');
      });

      // TODO: Error: No elements found for include in page Context
      it('shadowdom passes the a11y audit', function() {
        return expect(element).shadowDom.to.be.accessible();
      });
      // TODO: playback-rate-stepup and playback-rate-stepdown aren't found
      checkElementsInMode('compact');

      describe('on a mobile display', async function() {
        before(async function() {
          return await setViewport({ width: 400, height: 800 });
        });

        // TODO: playback-rate-is visible and volume is visible
        checkElementsInMode('compact-mobile');
      });
    });

    // TODO: this test is timing out, but tests all complete and then it continues to sit
    describe.skip('compact-wide mode', function() {
      before(async function() {
        return await initPlayer('compact-wide');
      });

      // TODO: Error: No elements found for include in page Context
      it('shadowdom passes the a11y audit', function() {
        return expect(element).shadowDom.to.be.accessible();
      });

      // TODO: playback-rate-stepup and playback-rate-stepdown aren't found
      checkElementsInMode('compact-wide');

      describe('on a mobile display', function() {
        before(async function() {
          return await setViewport({ width: 400, height: 800 });
        });

        // TODO: playback-rate-is visible and volume is visible
        checkElementsInMode('compact-wide-mobile');
      });
    });

    describe('full mode', function() {
      before(async function() {
        return await initPlayer('full');
      });

      // TODO: Error: No elements found for include in page Context
      it('shadowdom passes the a11y audit', async function() {
        await waitUntil(() => !!element?.shadowRoot);
        return await expect(element).shadowDom.to.be.accessible();
      });

      // TODO: play and playback-rate are visible; full-playback-rate, full-playback-rate-stepup and full-playback-rate-stepdown aren't found
      checkElementsInMode('full');


      // TODO:  Failed to execute 'add' on 'DOMTokenList': The token provided must not be empty.
      describe('pressing mute button', function() {
        it('mutes', function() {
          element.volume = 0.5;
          ui.mute?.click();
          return expect(element.muted, 'state').to.be.true;
        });

        describe('then pressing unmute button', function() {
          it('unmutes', function() {
            element.mute();
            ui.mute?.click();
            return expect(element.muted, 'state').to.be.false;
          });
        });

        describe('then setting the volume property to 0', function() {
          let snapshot: A11yTreeSnapshot;
          let volumeSliderSnapshot: A11yTreeSnapshot|undefined;

          function setVolume(volume: number) {
            return async function() {
              element.volume = volume;
              await element.updateComplete;
            };
          }

          async function updateSnapshots() {
            await element.updateComplete;
            snapshot = await a11ySnapshot();
            volumeSliderSnapshot = snapshot?.children?.find(x => x.role === 'slider' && x.name === 'Volume');
          }

          beforeEach(setVolume(0));
          beforeEach(updateSnapshots);

          it('sets muted', function() {
            expect(element.muted).to.be.true;
          });

          it('sets volume slider to 0', function() {
            expect(volumeSliderSnapshot?.value).to.equal(0);
          });

          describe('setting the volume property to 0.5', function() {
            beforeEach(setVolume(0.5));
            beforeEach(updateSnapshots);
            beforeEach(updateSnapshots);
            it('unsets muted', function() {
              expect(element.muted).to.be.false;
            });
            it('sets volume slider to 50', function() {
              expect(volumeSliderSnapshot?.value).to.equal(50);
            });
          });
        });
      });

      describe('seeking', function() {
        it('disables rewind', function() {
          element.seek(0);
          return expect(ui.rewind?.disabled).to.be.true;
        });

        it('enables forward', function() {
          element.seek(0);
          return expect(ui.forward?.disabled).to.be.false;
        });

        // TODO: Resolve this issue: https://developer.chrome.com/blog/autoplay/
        describe.skip('pressing play button', function() {
          it('plays', function() {
            element.mute();
            ui.fullplay?.focus();
            ui.fullplay?.click();
            return expect(element.paused, 'state').to.be.false;
          });

          describe('then pressing pause button', function() {
            it('pauses', function() {
              ui.fullplay?.click();
              return expect(element.paused, 'state').to.be.true;
            });
          });
          // TODO: Failed to execute 'add' on 'DOMTokenList': The token provided must not be empty.
          describe('then setting time slider', function() {
            it('sets time slider', function() {
              element.pause();
              if (ui.time) { ui.time.value = 10; }
              return expect(element?.currentTime).to.equal(10);
            });
          });
        });

        it('time seeks', function() {
          element.seek(10);
          expect(element.currentTime).to.equal(starttime + 10);
          return starttime = element.currentTime;
        });

        describe('clicking the forward button', function() {
          before(function() {
            return starttime = element.currentTime;
          });
          it('forward exist', function() {
            return expect(ui.forward).to.exist;
          });
          it('skips forward', function() {
            ui.forward?.click();
            return expect(element.currentTime).to.equal(starttime + 15);
          });
        });

        describe('clicking the rewind button', function() {
          before(function() {
            starttime = element.currentTime;
            return ui.rewind?.click();
          });
          it('skips backward', function() {
            return expect(element.currentTime).to.equal(starttime - 15);
          });
        });

        // TODO: full-playback-rate, full-playback-rate-stepup and full-playback-rate-stepdown aren't found
        describe('setting the playback rate', function() {
          beforeEach(async function() {
            if (ui.fullplaybackrate?.value) { ui.fullplaybackrate.value = '2.0'; }
            return await element.updateComplete;
          });

          it('sets playback rate', function() {
            return expect(element?.playbackrate).to.equal(2.0);
          });

          it('increments playback rate', async function() {
            startrate = element?.playbackrate;
            ui.fullplaybackratestepdown?.click();
            await element.updateComplete;
            return expect(element?.playbackrate).to.equal(startrate - 0.2);
          });

          it('decrements playback rate', async function() {
            startrate = element?.playbackrate;
            ui.fullplaybackratestepup?.click();
            await element.updateComplete;
            return expect(element?.playbackrate).to.equal(startrate + 0.2);
          });
        });

        describe('seeking to end of audio', function() {
          before(async function() {
            element.seek(element.duration);
            return await element.updateComplete;
          });

          it('enables rewind', function() {
            return expect(ui.rewind?.disabled).to.be.false;
          });

          it('disables forward', function() {
            return expect(ui.forward?.disabled).to.be.true;
          });
        });
      });

      describe('on a mobile display', function() {
        before(async function() {
          return await setViewport({ width: 400, height: 800 });
        });

        // TODO: full-play and forward are visible
        checkElementsInMode('full-mobile');
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
