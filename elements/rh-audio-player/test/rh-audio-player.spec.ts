import { expect, html, aTimeout } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhAudioPlayer } from '@rhds/elements/rh-audio-player/rh-audio-player.js';

describe('<rh-audio-player>', async function() {
  describe('simply instantiating', function() {
    let element: RhAudioPlayer;
    beforeEach(async function() {
      element = await createFixture <RhAudioPlayer>(html`<rh-audio-player></rh-audio-player>`);
    });

    it('should upgrade', function() {
      const klass = customElements.get('rh-audio-player');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhAudioPlayer);
    });

    it('lightdom passes the a11y audit', function() {
      return expect(element).to.be.accessible();
    });

    it('mini shadowdom passes the a11y audit', function() {
      return expect(element).shadowDom.to.be.accessible();
    });
  });

  describe('with all features in light dom', function() {
    let element: RhAudioPlayer;

    // TODO: use testing actions to click on specific pixels, rather than shadowroot queries. this will also test layout accuracy to a degree
    const getShadowElementBySelector = (query: string) => element?.shadowRoot?.querySelector(query);

    const ModeButtons = {
      'default': ['play', 'time', 'mute', 'menu'],
      'compact': ['play', 'time', 'mute', 'menu', 'playback-rate', 'volume'],
      'compact-mobile': ['play', 'time', 'mute', 'menu'],
      'compact-wide': ['play', 'time', 'mute', 'menu', 'playback-rate', 'volume'],
      'compact-wide-mobile': ['play', 'time', 'mute', 'menu'],
      'full': ['time', 'mute', 'volume', 'playback-rate', 'rewind', 'full-play', 'forward', 'menu'],
      'full-mobile': ['play', 'time', 'mute', 'menu'],
    };

    const AllButtons = [
      'forward',
      'full-play',
      'menu',
      'mute',
      'play',
      'playback-rate',
      'rewind',
      'time',
      'volume',
    ];

    const checkButtonsInMode = (mode: keyof typeof ModeButtons) => {
      AllButtons.forEach(id => {
        const button = getShadowElementBySelector(`#${id}`);
        const tooltip = getShadowElementBySelector(`#${id}-tooltip`);
        describe(id, function() {
          if (ModeButtons[mode].includes(id)) {
            it('is visible', function() {
              expect(button).to.be.visible;
            });
          } else {
            it('is invisible', function() {
              expect(button).to.not.be.visible;
            });
          }
          // TODO: use playwright actions instead of method calls
          // SKIPPING for now because tooltip has it's own tests, and these take a long time to run
          describe.skip('focusing', function() {
            beforeEach(async function() {
              button?.focus();
              await element.updateComplete;
            });
            it('opens tooltip', function() {
              expect(tooltip.open).to.be.true;
            });
            describe('blurring', function() {
              beforeEach(async function() {
                button?.blur();
                await element.updateComplete;
              });
              it('closes tooltip', function() {
                expect(tooltip.open).to.be.false;
              });
            });
          });
          describe.skip('mouseover', function() {
            beforeEach(async function() {
              button?.mouseover();
              await element.updateComplete;
            });
            it('opens tooltip', function() {
              expect(tooltip.open).to.be.true;
            });
            describe('mouseout', function() {
              beforeEach(async function() {
                button?.mouseout();
                await element.updateComplete;
              });
              it('closes tooltip', function() {
                expect(tooltip.open).to.be.false;
              });
            });
          });
        });
      });
    };

    beforeEach(async function() {
      element = await createFixture <RhAudioPlayer>(html`
        <rh-audio-player poster="https://www.redhat.com/cms/managed-files/CLH-S7-ep1.png">
          <p slot="series">Code Comments</p>
          <h3 slot="title">Bringing Deep Learning to Enterprise Applications</h3>
          <rh-audio-player-about slot="about">
            <h4 slot="heading">About the Episode</h4>
            <p>
              There are a lot of publicly available data sets out there. But when it
              comes to specific enterprise use cases, you&apos;re not necessarily going to
              able to find one to train your models. To realize the power of AI/ML in
              enterprise environments, end users need an inference engine to run on
              their hardware. Ryan Loney takes us through OpenVINO and Anomalib, open
              toolkits from Intel that do precisely that. He looks specifically at
              anomaly detection in use cases as varied as medical imaging and
              manufacturing.
            </p>
            <p>
              Want to learn more about Anomalib? Check out the research paper that
              introduces the deep learning library.
            </p>
            <rh-audio-player-profile slot="profile" src="https://www.redhat.com/cms/managed-files/ryan-loney.png">
              <span slot="fullname">Ryan Loney</span><br>
              <span slot="role">Product manager, OpenVINO Developer Tools</span>, <span slot="company">Intel&reg;</span>
            </rh-audio-player-profile>
          </rh-audio-player-about>
          <audio crossorigin="anonymous" slot="media" controls>
            <source type="audio/mp3" srclang="en" src="https://cdn.simplecast.com/audio/28d037d3-7d17-42d4-a8e2-2e00fd8b602b/episodes/bd38190e-516f-49c0-b47e-6cf663d80986/audio/dc570fd1-7a5e-41e2-b9a4-96deb346c20f/default_tc.mp3">
          </audio>
          <rh-audio-player-subscribe slot="subscribe">
            <h4 slot="heading">Subscribe</h4>
            <p>Subscribe here:</p>
            <a slot="link" href="https://podcasts.apple.com/us/podcast/code-comments/id1649848507" target="_blank" title="Listen on Apple Podcasts" data-analytics-linktype="cta" data-analytics-text="Listen on Apple Podcasts" data-analytics-category="Hero|Listen on Apple Podcasts">
              <img src="https://www.redhat.com/cms/managed-files/badge_apple-podcast-white.svg" alt="Listen on Apple Podcasts">
            </a>
            <a slot="link" href="https://open.spotify.com/show/6eJc62sKckHs4uEQ8eoKzD" target="_blank" title="Listen on Spotify" data-analytics-linktype="cta" data-analytics-text="Listen on Spotify" data-analytics-category="Hero|Listen on Spotify">
              <img src="https://www.redhat.com/cms/managed-files/badge_spotify.svg" alt="Listen on Spotify">
            </a>
            <a slot="link" href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5wYWNpZmljLWNvbnRlbnQuY29tL2NvZGVjb21tZW50cw" target="_blank" title="Listen on Google Podcasts" data-analytics-linktype="cta" data-analytics-text="Listen on Google Podcasts" data-analytics-category="Hero|Listen on Google Podcasts">
              <img src="https://www.redhat.com/cms/managed-files/badge_google-podcast.svg" alt="Listen on Google Podcasts">
            </a>
            <a slot="link" href="https://feeds.pacific-content.com/codecomments" target="_blank" title="Subscribe via RSS Feed" data-analytics-linktype="cta" data-analytics-text="Subscribe via RSS Feed" data-analytics-category="Hero|Subscribe via RSS Feed">
              <img class="img-fluid" src="https://www.redhat.com/cms/managed-files/badge_RSS-feed.svg" alt="Subscribe via RSS Feed">
            </a>
          </rh-audio-player-subscribe>
          <rh-audio-player-transcript slot="transcript">
            <rh-audio-player-cue>
              <span slot="start">00:02</span>
              <span slot="voice">Burr Sutter</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">00:02</span>
              <span slot="text">I'm Burr Sutter.</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">00:04</span>
              <span slot="text">I'm a Red Hatter who spends a lot of time talking to technologists about technologies.</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">00:09</span>
              <span slot="text">We say this a lot at Red Hat.</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">00:11</span>
              <span slot="text">No single technology provider holds the key to success, including us.</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">00:15</span>
              <span slot="text">And I would say the same thing about myself.</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">00:18</span>
              <span slot="text">I love to share ideas, so I thought it would be awesome to talk to some brilliant technologists at Red Hat Partners.</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">00:23</span>
              <span slot="text">This is Code Comments, an original podcast from Red Hat.</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">00:29</span>
              <span slot="voice">Burr Sutter</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">00:30</span>
              <span slot="text">I'm sure, like many of you here, you have been thinking about AI/ML, artificial intelligence and machine learning.</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">00:37</span>
              <span slot="text">I've been thinking about that for quite some time and I actually had the opportunity to work on a few successful projects, here at Red Hat, </span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">00:42</span>
              <span slot="text">using those technologies, actually enabling a data set,</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">00:45</span>
              <span slot="text">gathering a data set, working with a data scientist and data engineering team,</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">00:49</span>
              <span slot="text">and then training a model and putting that model into production runtime environment.</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">00:53</span>
              <span slot="text">It was an exciting set of projects and you can see those on numerous YouTube videos that have published out there before.</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">00:58</span>
              <span slot="text">But I want you to think about the problem space a little bit,</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">00:58</span>
              <span slot="text">because there are some interesting challenges about a AI/ML.</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">01:04</span>
              <span slot="text">One is simply just getting access to the data,</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">01:05</span>
              <span slot="text">and while there are numerous publicly available data sets,</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">01:08</span>
              <span slot="text">when it comes to your specific enterprise use case, you might not be to find publicly available data.</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">01:14</span>
              <span slot="text">In many cases you cannot, even for our applications that we created,</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">01:17</span>
              <span slot="text">we had to create our data set, capture our data set, explore the data set,</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">01:22</span>
              <span slot="text">and of course, train a model accordingly.</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">01:24</span>
              <span slot="text">And we also found there's another challenge to be overcome in this a AI/ML world,</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">01:28</span>
              <span slot="text">and that is access to certain types of hardware.</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">01:31</span>
              <span slot="text">If you think about an enterprise environment and the creation of an enterprise application specifically for a AI/ML,</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">01:36</span>
              <span slot="text">end users need an inference engine to run on their hardware.</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">01:39</span>
              <span slot="text">Hardware that's available to them, to be effective for their application.</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">01:43</span>
              <span slot="text">Let's say an application like Computer Vision, one that can detect anomalies and medical imaging or maybe on a factory floor.</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">01:49</span>
              <span slot="text">As those things are whizzing by on the factory line there, looking at them and trying to determine if there is an error or not.</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">02:01</span>
              <span slot="text">Well, there's a solution for this as an open toolkit called OpenVINO.</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">02:05</span>
              <span slot="text">And you might be thinking, "Hey, wait a minute, don't you need a GPU for AI inferencing, a GPU for artificial intelligence, machine learning?"</span>
            </rh-audio-player-cue>
            <rh-audio-player-cue>
              <span slot="start">02:11</span>
              <span slot="text">Well, not according to Ryan Loney, product manager of OpenVINO Developer Tools at Intel.</span>
            </rh-audio-player-cue>
          </rh-audio-player-transcript>
      </rh-audio-player>
      `);
      await element.updateComplete;
      // TODO: rather than relying on timeout in tests, override `getUpdateComplete` in RhAudioPlayer
      await aTimeout(100);
    });

    describe('default mode', function() {
      checkButtonsInMode('default');

      it('lightdom passes the a11y audit', function() {
        expect(element).to.be.visible;
        return expect(element).to.be.accessible();
      });

      it('shadowdom passes the a11y audit', function() {
        return expect(element).shadowDom.to.be.accessible();
      });

      it('poster is not visible', function() {
        expect(getShadowElementBySelector('#poster')).to.not.be.visible;
      });

      describe('pressing play button', function() {
        beforeEach(async function() {
          getShadowElementBySelector('play')?.click();
          await element.updateComplete;
        });

        it('plays', function() {
          expect(element.paused, 'state').to.be.false;
          expect(element.icon, 'icon').to.equal(RhAudioPlayer.icons.pause);
        });

        describe('then pressing pause button', function() {
          beforeEach(async function() {
            getShadowElementBySelector('play')?.click();
            await element.updateComplete;
          });

          it('pauses', function() {
            expect(element.paused, 'state').to.be.true;
            expect(element.icon, 'icon').to.equal(RhAudioPlayer.icons.play);
          });
        });

        describe('then pressing mute button', function() {
          beforeEach(async function() {
            getShadowElementBySelector('mute')?.click();
            await element.updateComplete;
          });

          it('mutes', async function() {
            expect(element.muted, 'state').to.be.true;
            expect(element.icon, 'icon').to.equal(RhAudioPlayer.icons.unmute);
          });

          describe('then pressing mute button', function() {
            beforeEach(async function() {
              getShadowElementBySelector('mute')?.click();
              await element.updateComplete;
            });

            it('unmutes', function() {
              expect(element.muted, 'state').to.be.false;
              expect(element.icon, 'icon').to.equal(RhAudioPlayer.icons.unmute);
            });
          });
        });

        describe('then setting time slider', function() {
          beforeEach(async function() {
            getShadowElementBySelector('time').value = 10;
            await element.updateComplete;
          });
          it('sets time slider', function() {
            expect(element.currentTime).to.equal(10);
          });
        });
      });
    });

    describe('compact mode', function() {
      beforeEach(async function() {
        element.mode = 'compact';
        await element.updateComplete;
        await aTimeout(100);
      });

      it('shadowdom passes the a11y audit', function() {
        return expect(element).shadowDom.to.be.accessible();
      });

      it('poster is visible', function() {
        expect(getShadowElementBySelector('#poster')).to.be.visible;
      });

      checkButtonsInMode('compact');

      describe('on a mobile display', function() {
        beforeEach(async function() {
          await setViewport({ width: 400, height: 800 });
          await element.updateComplete;
          await aTimeout(100);
        });

        checkButtonsInMode('compact-mobile');

        it('poster is not visible', function() {
          expect(getShadowElementBySelector('#poster')).to.not.be.visible;
        });
      });
    });

    describe('compact-wide mode', function() {
      beforeEach(async function() {
        element.mode = 'compact-wide';
        await element.updateComplete;
        await aTimeout(100);
      });

      it('shadowdom passes the a11y audit', function() {
        return expect(element).shadowDom.to.be.accessible();
      });

      it('poster is not visible', function() {
        expect(getShadowElementBySelector('#poster')).to.not.be.visible;
      });

      checkButtonsInMode('compact-wide');

      describe('on a mobile display', function() {
        beforeEach(async function() {
          await setViewport({ width: 400, height: 800 });
          await element.updateComplete;
          await aTimeout(100);
        });

        checkButtonsInMode('compact-wide-mobile');

        it('poster is not visible', function() {
          expect(getShadowElementBySelector('#poster')).to.not.be.visible;
        });
      });
    });

    describe('full mode', function() {
      beforeEach(async function() {
        element.mode = 'full';
        await element.updateComplete;
        await aTimeout(100);
      });

      it('shadowdom passes the a11y audit', function() {
        return expect(element).shadowDom.to.be.accessible();
      });

      it('poster is not visible', async function() {
        expect(getShadowElementBySelector('#poster')).to.not.be.visible;
      });

      checkButtonsInMode('full');

      describe('on a mobile display', function() {
        beforeEach(async function() {
          await setViewport({ width: 400, height: 800 });
          await element.updateComplete;
          await aTimeout(100);
        });

        checkButtonsInMode('full-mobile');

        it('poster is not visible', function() {
          expect(getShadowElementBySelector('#poster')).to.not.be.visible;
        });
      });

      describe('pressing play button', function() {
        beforeEach(async function() {
          getShadowElementBySelector('full-play')?.click();
          await element.updateComplete;
        });

        it('plays', function() {
          expect(element.paused, 'state').to.be.false;
          expect(element.icon, 'icon').to.equal(RhAudioPlayer.icons.pause);
        });

        describe('then pressing pause button', function() {
          beforeEach(async function() {
            getShadowElementBySelector('full-play')?.click();
            await element.updateComplete;
          });

          it('pauses', function() {
            expect(element.paused, 'state').to.be.true;
            expect(element.icon, 'icon').to.equal(RhAudioPlayer.icons.play);
          });
        });
      });
    });

    it('disables rewind', function() {
      expect(getShadowElementBySelector('rewind').disabled).to.be.true;
    });

    describe('clicking the forward button', function() {
      let starttime: number;
      before(async function() {
        starttime = element.currentTime;
        getShadowElementBySelector('forward')?.click();
        await element.updateComplete;
      });
      it('skips forward', function() {
        expect(element.currentTime > starttime).to.be.true;
        expect(element.currentTime).to.equal(starttime + 15);
      });
    });

    describe('clicking the forward button', function() {
      let starttime: number;
      before(async function() {
        starttime = element.currentTime;
        getShadowElementBySelector('rewind')?.click();
        await element.updateComplete;
      });
      it('skips forward', function() {
        expect(element.currentTime < starttime).to.be.true;
        expect(element.currentTime).to.equal(starttime - 15);
      });
    });

    describe('setting the volume slider to 0', function() {
      beforeEach(async function() {
        getShadowElementBySelector('volume').value = 0;
      });
      it('sets muted', function() {
        expect(element.muted).to.be.true;
      });
      describe('setting the volume slider to 1', function() {
        beforeEach(async function() {
          getShadowElementBySelector('volume').value = 1;
        });
        it('unsets muted', function() {
          expect(element.muted).to.be.true;
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
});
