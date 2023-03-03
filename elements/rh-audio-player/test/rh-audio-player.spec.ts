import { expect, html, aTimeout, oneEvent } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';

import { setViewport, sendKeys, sendMouse } from '@web/test-runner-commands';
import { ifDefined } from 'lit/directives/if-defined.js';
import { RhRange } from '../../rh-range/rh-range.js';

// import { a11ySnapshot, type A11yTreeSnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { RhAudioPlayer } from '../rh-audio-player.js';
// TODO import RhRange so I can set correct type on range elements

describe('<rh-audio-player>', function() {
  let element: RhAudioPlayer;

  beforeEach(function(this: Mocha.Context) {
    this.timeout(20_000);
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

  async function waitForCanplaythrough(this: Mocha.Context) {
    const audio = element.querySelector('audio');
    if (element.duration > 0) {
      return;
    }
    this.timeout(20_000);
    await oneEvent(audio!, 'canplaythrough');
    await element.updateComplete;
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
    const x = button.offsetLeft + 5;
    const y = button.offsetTop + 5;
    await sendMouse({ type: 'click', position: [x, y] });
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

  async function tab() {
    await sendKeys({ press: 'Tab' });
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
      await aTimeout(ms);
    };
  }

  // ASSERTIONS

  // TODO: use testing actions to click on specific pixels, rather than shadowroot queries. this will also test layout accuracy to a degree
  function getShadowElementBySelector(query: string) {
    return element?.shadowRoot?.querySelector(query);
  }

  function getShadowElementByAriaLabel(label: string) {
    return element?.shadowRoot?.querySelector(`[aria-label="${label}"]`);
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
    it('displays the correct elements', function() {
      expect(getShadowElementByAriaLabel('Play'), 'Play').to.exist.and.to.be.visible;
      expect(getShadowElementByAriaLabel('Seek'), 'Seek').to.exist.and.to.be.visible;
      expect(getShadowElementByAriaLabel('Mute'), 'Mute').to.exist.and.to.be.visible;
    });
  });

  describe('compact mode', function() {
    beforeEach(setupForMode('compact'));
    it('has width', assertHasWidth);
    it('displays the correct elements', function() {
      expect(getShadowElementByAriaLabel('Play'), 'Play').to.exist.and.to.be.visible;
      expect(getShadowElementByAriaLabel('Seek'), 'Seek').to.exist.and.to.be.visible;
      expect(getShadowElementByAriaLabel('Mute'), 'Mute').to.exist.and.to.be.visible;
      expect(getShadowElementByAriaLabel('Speed'), 'Speed').to.exist.and.to.be.visible;
      expect(getShadowElementByAriaLabel('Volume'), 'Volume').to.exist.and.to.be.visible;
    });
  });

  describe('compact-wide mode', function() {
    beforeEach(setupForMode('compact-wide'));
    it('has width', assertHasWidth);
    it('displays the correct elements', function() {
      expect(getShadowElementByAriaLabel('Play'), 'Play').to.exist.and.to.be.visible;
      expect(getShadowElementByAriaLabel('Seek'), 'Seek').to.exist.and.to.be.visible;
      expect(getShadowElementByAriaLabel('Mute'), 'Mute').to.exist.and.to.be.visible;
      expect(getShadowElementByAriaLabel('Speed'), 'Speed').to.exist.and.to.be.visible;
      expect(getShadowElementByAriaLabel('Volume'), 'Volume').to.exist.and.to.be.visible;
    });

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
      beforeEach(sleep(100));
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

    describe('calling seek(0)', function() {
      beforeEach(seek(0));
      it('sets time to 0', function() {
        expect(element?.currentTime).to.equal(0);
      });
    });

    describe('setting time slider to approximately 60%', function() {
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

    describe('tabbable controls', function() {
      beforeEach(waitForCanplaythrough);
      beforeEach(seek(1));
      beforeEach(tab);
      it('focuses seek range', function() {
        expect(element.shadowRoot?.activeElement).to.be.an.instanceof(RhRange).and.to.have.id('time');
      });
      describe('tab', function() {
        beforeEach(tab);
        it('focuses mute button', function() {
          expect(element.shadowRoot?.activeElement?.getAttribute('aria-label')).to.equal('Mute');
        });
        describe('tab', function() {
          beforeEach(tab);
          it('focuses volume slider', function() {
            expect(element.shadowRoot?.activeElement?.getAttribute('aria-label')).to.equal('Volume');
          });
          describe('tab', function() {
            beforeEach(tab);
            it('focuses speed select', function() {
              expect(element.shadowRoot?.activeElement?.getAttribute('aria-label')).to.equal('Speed');
            });
            describe('tab', function() {
              beforeEach(tab);
              it('focuses rewind button', function() {
                expect(element.shadowRoot?.activeElement?.getAttribute('aria-label')).to.equal('Rewind 15 seconds');
              });
              describe('tab', function() {
                beforeEach(tab);
                it('focuses play button', function() {
                  expect(element.shadowRoot?.activeElement?.getAttribute('aria-label')).to.equal('Play');
                });
                describe('tab', function() {
                  beforeEach(tab);
                  it('focuses advance button', function() {
                    expect(element.shadowRoot?.activeElement?.getAttribute('aria-label')).to.equal('Advance 15 seconds');
                  });
                  describe('tab', function() {
                    beforeEach(tab);
                    it('focuses menu button', function() {
                      expect(element.shadowRoot?.activeElement?.getAttribute('aria-label')).to.equal('More options');
                    });
                    describe('tab', function() {
                      beforeEach(tab);
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

    it('displays the correct elements', function() {
      expect(getShadowElementByAriaLabel('Play'), 'Play').to.exist.and.to.be.visible;
      expect(getShadowElementByAriaLabel('Seek'), 'Seek').to.exist.and.to.be.visible;
      expect(getShadowElementByAriaLabel('Mute'), 'Mute').to.exist.and.to.be.visible;
      expect(getShadowElementByAriaLabel('Speed'), 'Speed').to.exist.and.to.be.visible;
      expect(getShadowElementByAriaLabel('Volume'), 'Volume').to.exist.and.to.be.visible;
    });

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
      beforeEach(sleep(100));
      beforeEach(clickForward);
      beforeEach(sleep(100));

      it('skips forward', function() {
        expect(element.currentTime > starttime).to.be.true;
      });

      it('disables forward', function() {
        const fw = getShadowElementBySelector('#forward') as HTMLButtonElement;
        expect(fw?.disabled).to.be.true;
      });

      it('enables rewind', function() {
        const rw = getShadowElementBySelector('#rewind') as HTMLButtonElement;
        expect(rw?.disabled).to.be.false;
      });

      describe('then clicking the rewind button', function() {
        beforeEach(clickRewind);
        beforeEach(sleep(100));
        it('skips backward', function() {
          expect(element.currentTime).to.equal(0);
        });
      });
    });
  });

  /**
   * Testing compact mobile mode
   */
  describe.skip('in a smaller viewport', function() {
    beforeEach(async function() {
      await setViewport({ width: 400, height: 800 });
    });

    describe('compact mode', function() {
      before(setupForMode('compact'));
      it('has width', assertHasWidth);
      it('displays the correct elements', function() {
        expect(getShadowElementByAriaLabel('Play'), 'Play').to.exist.and.to.be.visible;
        expect(getShadowElementByAriaLabel('Seek'), 'Seek').to.exist.and.to.be.visible;
        expect(getShadowElementByAriaLabel('Mute'), 'Mute').to.exist.and.to.be.visible;
      });
    });

    describe('compact-wide mode', function() {
      before(setupForMode('compact-wide'));
      it('has width', assertHasWidth);
      it('displays the correct elements', function() {
        expect(getShadowElementByAriaLabel('Play'), 'Play').to.exist.and.to.be.visible;
        expect(getShadowElementByAriaLabel('Seek'), 'Seek').to.exist.and.to.be.visible;
        expect(getShadowElementByAriaLabel('Mute'), 'Mute').to.exist.and.to.be.visible;
      });
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
