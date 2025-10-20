import { expect, html, aTimeout, oneEvent } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

import { setViewport, sendKeys, sendMouse } from '@web/test-runner-commands';
import { clickElementAtCenter } from '@patternfly/pfe-tools/test/utils.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { querySelectorDeep } from 'query-selector-shadow-dom';

import { RhAudioPlayer } from '../rh-audio-player.js';
import { RhAudioPlayerAbout } from '../rh-audio-player-about.js';
import { RhAudioPlayerScrollingTextOverflow } from '../rh-audio-player-scrolling-text-overflow.js';
import { RhAudioPlayerSubscribe } from '../rh-audio-player-subscribe.js';

import { RhCue } from '../rh-cue.js';
import { RhTranscript } from '../rh-transcript.js';


function press(key: string) {
  return async function() {
    await sendKeys({ press: key });
  };
}

describe('<rh-audio-player>', function() {
  let element: RhAudioPlayer;

  const updateComplete = () => element.updateComplete;

  // ACTIONS

  function setupForLayout(layout?: RhAudioPlayer['layout']) {
    return (async function() {
      element = await createFixture <RhAudioPlayer>(html`
        <rh-audio-player layout="${ifDefined(layout)}" poster="/elements/rh-audio-player/test/poster.png">
          <p slot="series">Code Comments</p>
          <h3 slot="title">Bringing Deep Learning to Enterprise Applications</h3>
          <audio crossorigin="anonymous" slot="media" controls preload="auto">
            <source type="audio/mp3" srclang="en" src="/elements/rh-audio-player/test/test.1mb.mp3">
          </audio>
          <rh-transcript slot="transcript">
              <rh-cue start="00:01" voice="Burr Sutter"></rh-cue>
              <rh-cue start="00:01">
                  I'm Burr Sutter.
              </rh-cue>
              <rh-cue start="00:02">
                  I'm Burr Sutter.
              </rh-cue>
          </rh-transcript>
        </rh-audio-player>
      `);
      await aTimeout(50);
    });
  }

  async function waitForCanplaythrough(this: Mocha.Context, player = element) {
    const audio = player.querySelector('audio');
    if (!audio) {
      throw new Error('no audio element!');
    }
    if (player.duration > 0) {
      return;
    }
    this.timeout(20_000);
    await oneEvent(audio, 'canplaythrough');
    await aTimeout(20);
    await player.updateComplete;
  }

  function setVolume(level: number) {
    return async function() {
      element.volume = level;
      await element.updateComplete;
    };
  }

  async function clickMute() {
    const button = querySelectorDeep('#mute') as HTMLButtonElement;
    button!.click();
    await element.updateComplete;
  }

  /*
  async function play() {
    await element.play();
    await element.updateComplete;
  }*/

  async function clickPlay(player = element) {
    await player.updateComplete;
    const button = player.shadowRoot!.querySelector('[id$="play"]') as HTMLButtonElement;
    const { x, y, width, height } = button.getBoundingClientRect();
    const position = [x + width / 2, y + height / 2].map(Math.round) as [number, number];
    await sendMouse({ type: 'click', position });
    await player.updateComplete;
  }

  async function clickMenu() {
    const button = querySelectorDeep('#menu') as HTMLButtonElement;
    const x = button.offsetLeft + 5;
    const y = button.offsetTop + 5;
    await sendMouse({ type: 'click', position: [x, y] });
    await element.updateComplete;
  }

  async function clickTranscript() {
    const button = getShadowElementByAriaLabel('Transcript') as HTMLButtonElement;
    const x = button.offsetLeft + 5;
    const y = button.offsetTop + 5;
    await sendMouse({ type: 'click', position: [x, y] });
    await element.updateComplete;
  }

  async function clickClose() {
    const button = querySelectorDeep('#close') as HTMLButtonElement;
    const x = button.offsetLeft + 5;
    const y = button.offsetTop + 5;
    await sendMouse({ type: 'click', position: [x, y] });
    await element.updateComplete;
  }

  /*
  async function pause() {
    element.pause();
    await element.updateComplete;
  }
  */

  async function clickForward() {
    const button = querySelectorDeep('#forward') as HTMLButtonElement;
    button!.click();
  }

  async function clickRewind() {
    const button = querySelectorDeep('#rewind') as HTMLButtonElement;
    button!.click();
  }

  function seek(seconds: number) {
    return function() {
      element.seek(seconds);
    };
  }

  /**
   * seeks via setting the time range slider input
   * @param percent how much
   */
  function seekViaSlider(percent: 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100) {
    return async function() {
      const range = querySelectorDeep('#time') as HTMLInputElement;
      const x = Math.floor(range.offsetLeft + range.offsetWidth * (percent / 100));
      const y = Math.floor(range.offsetTop + range.offsetHeight / 2);
      await sendMouse({ type: 'click', position: [x, y] });
    };
  }

  function sleep(ms: number) {
    return async function(this: Mocha.Context) {
      await aTimeout(ms);
    };
  }

  // ASSERTIONS

  function getShadowElementByAriaLabel(label: string) {
    return element?.shadowRoot?.querySelector(`[aria-label="${label}"]`);
  }

  function assertHasWidth() {
    expect(element.offsetWidth).to.be.greaterThan(0);
  }
  /*
  async function assertIsAccessible() {
    await Promise.resolve(expect(element).to.be.accessible());
  }
  */

  beforeEach(function(this: Mocha.Context) {
    this.timeout(20_000);
  });

  it('instantiates imperatively', function() {
    expect(document.createElement('rh-audio-player')).to.be.an.instanceof(RhAudioPlayer);
    expect(document.createElement('rh-audio-player-about')).to.be.an.instanceof(RhAudioPlayerAbout);
    expect(document.createElement('rh-audio-player-scrolling-text-overflow')).to.be.an.instanceof(RhAudioPlayerScrollingTextOverflow);
    expect(document.createElement('rh-audio-player-subscribe')).to.be.an.instanceof(RhAudioPlayerSubscribe);
    expect(document.createElement('rh-cue')).to.be.an.instanceof(RhCue);
    expect(document.createElement('rh-transcript')).to.be.an.instanceof(RhTranscript);
  });

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

  describe('with lang="es"', function() {
    beforeEach(async function() {
      element = await createFixture<RhAudioPlayer>(html`
        <rh-audio-player lang="es"></rh-audio-player>
      `);
    });
    beforeEach(sleep(100));
    beforeEach(() => element.updateComplete);
    it('has spanish-language buttons', function() {
      expect(querySelectorDeep('#time')?.getAttribute('aria-label'), 'time slider label').to.equal('Buscar');
    });
  });

  describe('with multiple instances on the page', function() {
    let a: RhAudioPlayer;
    let b: RhAudioPlayer;
    beforeEach(async function() {
      await createFixture<RhAudioPlayer>(html`
        <div>
          <rh-audio-player id="a">
            <audio src="/elements/rh-audio-player/test/test.100k.mp3"
                   slot="media"
                   crossorigin="anonymous"
                   preload="auto"
                   controls
                   loop></audio>
          </rh-audio-player>
          <rh-audio-player id="b">
            <audio src="/elements/rh-audio-player/test/test.100k.mp3"
                   slot="media"
                   crossorigin="anonymous"
                   preload="auto"
                   controls
                   loop></audio>
          </rh-audio-player>
        </div>
      `);
      a = document.querySelector('rh-audio-player#a')!;
      b = document.querySelector('rh-audio-player#b')!;
    });

    beforeEach(async function(this: Mocha.Context) {
      await waitForCanplaythrough.call(this, a);
      await clickPlay(a);
      await waitForCanplaythrough.call(this, b);
      await clickPlay(b);
    });

    it('prevents concurrent playback', function() {
      expect(a.paused, 'first is paused').to.be.true;
      expect(b.paused, 'second is playing').to.be.false;
    });
  });

  describe('in a larger viewport', function() {
    beforeEach(async function() {
      await setViewport({ width: 1000, height: 800 });
    });
    describe('without layout', function() {
      beforeEach(setupForLayout());
      it('has width', assertHasWidth);
      it('displays the correct elements', async function() {
        expect(await a11ySnapshot())
            .to.axContainName('Play')
            .and.to.axContainName('Seek')
            .and.to.axContainName('Mute')
            .and.to.axContainName('More options');
      });
    });

    describe('compact layout', function() {
      beforeEach(setupForLayout('compact'));
      it('has width', assertHasWidth);
      it('displays the correct elements', async function() {
        expect(await a11ySnapshot())
            .to.axContainName('Play')
            .and.to.axContainName('Seek')
            .and.to.axContainName('Mute')
            .and.to.axContainName('Speed')
            .and.to.axContainName('Volume')
            .and.to.axContainName('More options');
      });
    });

    describe('compact-wide layout', function() {
      beforeEach(setupForLayout('compact-wide'));
      it('has width', assertHasWidth);
      it('displays the correct elements', async function() {
        expect(await a11ySnapshot())
            .to.axContainName('Play')
            .and.to.axContainName('Seek')
            .and.to.axContainName('Mute')
            .and.to.axContainName('Speed')
            .and.to.axContainName('Volume')
            .and.to.axContainName('More options');
      });

      it('has mute button enabled', async function() {
        expect(await a11ySnapshot())
            .axQuery({ name: 'Mute' })
            .to.not.have.axProperty('disabled', true);
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
        beforeEach(waitForCanplaythrough);
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
            beforeEach(press('Enter'));
            beforeEach(updateComplete);
            it('plays', function() {
              expect(element.paused, 'paused').to.be.false;
            });
          });
        });
      });

      describe('calling seek(0)', function() {
        beforeEach(waitForCanplaythrough);
        beforeEach(seek(0));
        it('sets time to 0', function() {
          expect(element?.currentTime).to.equal(0);
        });
      });

      describe('setting time slider to approximately 60%', function() {
        beforeEach(waitForCanplaythrough);
        beforeEach(seekViaSlider(60));
        it('sets the currentTime to approximately 60%', function() {
          expect(element.currentTime)
              .to.be.greaterThanOrEqual(element.duration / 2)
              .and.to.be.lessThan(element.duration);
        });
      });

      describe('clicking playback rate select', function() {
        beforeEach(waitForCanplaythrough);
        beforeEach(async function() {
          await clickElementAtCenter(querySelectorDeep('rh-audio-player-rate-stepper:not([hidden]) select')!);
        });
        describe('ArrowUp, Enter', function() {
          beforeEach(press('ArrowUp'));
          beforeEach(press('Enter'));
          it('sets playback rate', function() {
            expect(element?.playbackRate).to.equal(0.75);
          });
        });
      });


      describe('clicking rate stepdown', function() {
        beforeEach(waitForCanplaythrough);
        beforeEach(async function() {
          await clickElementAtCenter(querySelectorDeep('#stepdown')!);
        });
        it('sets playback rate', function() {
          expect(element?.playbackRate).to.equal(0.75);
        });
      });

      describe('clicking rate stepup', function() {
        beforeEach(waitForCanplaythrough);
        beforeEach(async function() {
          await clickElementAtCenter(querySelectorDeep('#stepup')!);
        });
        it('sets playback rate', function() {
          expect(element?.playbackRate).to.equal(1.25);
        });
      });
    });

    describe('full layout', function() {
      let starttime: number;

      beforeEach(setupForLayout('full'));

      beforeEach(function() {
        starttime = element.currentTime;
      });

      it('has width', assertHasWidth);

      describe('tabbable controls', function() {
        beforeEach(waitForCanplaythrough);
        beforeEach(seek(1));
        describe('Tab (1)', function() {
          beforeEach(press('Tab'));
          it('has width', assertHasWidth);

          it('focuses seek range', async function() {
            expect(await a11ySnapshot())
                .axTreeFocusedNode
                .to.have.axName('Seek');
          });
          describe('Tab (2)', function() {
            beforeEach(press('Tab'));
            it('focuses mute button', async function() {
              expect(await a11ySnapshot())
                  .axTreeFocusedNode
                  .to.have.axName('Mute');
            });
            describe('Tab (3)', function() {
              beforeEach(press('Tab'));
              it('focuses volume slider', async function() {
                expect(await a11ySnapshot())
                    .axTreeFocusedNode
                    .to.have.axName('Volume');
              });
              describe('Tab (4)', function() {
                beforeEach(press('Tab'));
                it('focuses speed select', async function() {
                  expect(await a11ySnapshot())
                      .axTreeFocusedNode
                      .to.have.axName('Speed');
                });
                describe('Tab (5)', function() {
                  beforeEach(press('Tab'));
                  it('focuses rewind button', async function() {
                    expect(await a11ySnapshot())
                        .axTreeFocusedNode
                        .to.have.axName('Rewind 15 seconds');
                  });
                  describe('Tab (6)', function() {
                    beforeEach(press('Tab'));
                    it('focuses play button', async function() {
                      expect(await a11ySnapshot())
                          .axTreeFocusedNode
                          .to.have.axName('Play');
                    });
                    describe('Tab (7)', function() {
                      beforeEach(press('Tab'));
                      it('focuses advance button', async function() {
                        expect(await a11ySnapshot())
                            .axTreeFocusedNode
                            .to.have.axName('Advance 15 seconds');
                      });
                      describe('Tab (8)', function() {
                        beforeEach(press('Tab'));
                        it('focuses menu button', async function() {
                          expect(await a11ySnapshot())
                              .axTreeFocusedNode
                              .to.have.axName('More options');
                        });
                        describe('Tab (9)', function() {
                          beforeEach(press('Tab'));
                          it('reaches the end of focusable elements', function() {
                            expect(element.shadowRoot?.activeElement).to.be.null;
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });

      it('displays the correct elements', async function() {
        expect(await a11ySnapshot())
            .to.axContainName('Play')
            .and.to.axContainName('Seek')
            .and.to.axContainName('Mute')
            .and.to.axContainName('Speed')
            .and.to.axContainName('Volume')
            .and.to.axContainName('More options');
      });

      // TODO: repeat this suite in mobile
      it('rewind is disabled', async function() {
        expect(await a11ySnapshot()).to.axContainQuery({
          name: 'Rewind 15 seconds',
          disabled: true,
        });
      });

      // TODO: repeat this suite in mobile
      it('forward is not disabled', async function() {
        expect(await a11ySnapshot())
            .axQuery({ name: 'Advance 15 seconds' })
            .to.not.have.axProperty('disabled', true);
      });

      describe('clicking the forward button', function() {
        beforeEach(sleep(100));
        beforeEach(clickForward);
        beforeEach(sleep(100));

        it('skips forward', function() {
          const { currentTime } = element;
          expect(currentTime > starttime).to.be.true;
        });

        it('enables rewind', async function() {
          expect(await a11ySnapshot())
              .axQuery({ name: 'Rewind 15 seconds' })
              .to.not.have.axProperty('disabled', true);
        });

        describe('then clicking the rewind button', function() {
          beforeEach(sleep(100));
          beforeEach(clickRewind);
          beforeEach(sleep(100));
          it('skips backward', function() {
            expect(element.currentTime).to.equal(0);
          });
        });
      });

      describe('seeking to the end', function() {
        beforeEach(seek(60));
      });

      describe('testing playback rate', function() {
        beforeEach(waitForCanplaythrough);
        describe('clicking playback rate select', function() {
          beforeEach(waitForCanplaythrough);
          beforeEach(async function() {
            await clickElementAtCenter(querySelectorDeep('rh-audio-player-rate-stepper:not([hidden]) select')!);
          });
          describe('ArrowUp, Enter', function() {
            beforeEach(press('ArrowUp'));
            beforeEach(press('Enter'));
            it('sets playback rate', function() {
              expect(element?.playbackRate).to.equal(0.75);
            });
          });
        });

        describe('clicking rate stepdown', function() {
          beforeEach(waitForCanplaythrough);
          beforeEach(async function() {
            await clickElementAtCenter(querySelectorDeep('rh-audio-player-rate-stepper:not([hidden]) #stepdown')!);
          });
          it('sets playback rate', function() {
            expect(element?.playbackRate).to.equal(0.75);
          });
        });

        describe('clicking rate stepup', function() {
          beforeEach(waitForCanplaythrough);
          beforeEach(async function() {
            await clickElementAtCenter(querySelectorDeep('rh-audio-player-rate-stepper:not([hidden]) #stepup')!);
          });
          it('sets playback rate', function() {
            expect(element?.playbackRate).to.equal(1.25);
          });
        });
      });
    });
  });

  /**
   * Testing compact mobile layout
   */
  describe('in a smaller viewport', function() {
    beforeEach(async function() {
      await setViewport({ width: 550, height: 800 });
    });

    describe('testing menu', function() {
      beforeEach(setupForLayout());
      describe('opening menu button', function() {
        beforeEach(sleep(100));
        beforeEach(clickMenu);
        it('opens menu', function() {
          const menuitem = getShadowElementByAriaLabel('Transcript');
          expect(menuitem).to.exist.and.to.be.visible;
        });

        describe('clicking about button', function() {
          beforeEach(clickTranscript);
          it('opens about panel', function() {
            const panel = document.querySelector('[slot=transcript]');
            expect(panel).to.exist.and.to.be.visible;
          });

          describe('clicking close button', function() {
            beforeEach(clickClose);
            it('closes panel', function() {
              expect(element.expanded).to.be.false;
            });
          });
        });
      });
    });

    describe('compact layout', function() {
      beforeEach(setupForLayout('compact'));
      it('has width', assertHasWidth);
      it('displays the correct elements', function() {
        expect(getShadowElementByAriaLabel('Play'), 'Play').to.exist.and.to.be.visible;
        expect(getShadowElementByAriaLabel('Seek'), 'Seek').to.exist.and.to.be.visible;
        expect(getShadowElementByAriaLabel('Mute'), 'Mute').to.exist.and.to.be.visible;
      });
    });

    describe('compact-wide layout', function() {
      beforeEach(setupForLayout('compact-wide'));
      it('has width', assertHasWidth);
      it('displays the correct elements', function() {
        expect(getShadowElementByAriaLabel('Play'), 'Play').to.exist.and.to.be.visible;
        expect(getShadowElementByAriaLabel('Seek'), 'Seek').to.exist.and.to.be.visible;
        expect(getShadowElementByAriaLabel('Mute'), 'Mute').to.exist.and.to.be.visible;
      });
      it('has mute button enabled', function() {
        const button = querySelectorDeep('#mute') as HTMLButtonElement;
        expect(button?.disabled, 'state').to.be.false;
      });
    });

    describe('full layout', function() {
      beforeEach(setupForLayout('full'));
      it('has width', assertHasWidth);
      it('displays the correct elements', function() {
        expect(querySelectorDeep('#play'), 'Play').to.exist.and.to.be.visible;
        expect(getShadowElementByAriaLabel('Seek'), 'Seek').to.exist.and.to.be.visible;
        expect(getShadowElementByAriaLabel('Mute'), 'Mute').to.exist.and.to.be.visible;
      });
    });
  });
});

// todo colors
// todo text overflow
// todo transcript
// todo test icons that toggle
