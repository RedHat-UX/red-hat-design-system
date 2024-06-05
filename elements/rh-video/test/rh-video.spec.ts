import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { type A11yTreeSnapshot, a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { clickElementAtCenter } from '@patternfly/pfe-tools/test/utils.js';
import { sendKeys } from '@web/test-runner-commands';
import { RhVideo } from '@rhds/elements/rh-video/rh-video.js';

describe('<rh-video>', function() {
  let element: RhVideo;
  let snapshot: A11yTreeSnapshot;
  let children: A11yTreeSnapshot[];

  function getThumbnail() {
    return element.querySelector('[slot="thumbnail"]');
  }

  function isVisuallyHidden(el) {
    return !el || el?.hidden || window.getComputedStyle(el)?.getPropertyValue('opacity') === '0';
  }

  function isA11yHidden(el) {
    return !el || el?.hidden || el.getAttribute('aria-hidden') === 'true';
  }

  async function eventFired(eventName, prop) {
    return new Promise(function(resolve) {
      if (element[prop]) {
        resolve(true);
      } else {
        element.addEventListener(eventName, function() {
          resolve(true);
        });
      }
    });
  }

  describe('simply instantiating', function() {
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-video')).to.be.an.instanceof(RhVideo);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhVideo>(html`<rh-video></rh-video>`);
      const klass = customElements.get('rh-video');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhVideo);
    });
  });

  describe('default video', function() {
    beforeEach(async function() {
      element = await createFixture<RhVideo>(html`
      <rh-video>
        <img slot="thumbnail" src="https://fakeimg.pl/300x150/282828/eae0d0" alt="fakethumb"/>
        <template>
          <iframe title="videotitle" width="300" height="150" src="https://www.youtube.com/embed/Hc8emNr2igU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </template>
       <p slot="caption">Caption</caption>
      </rh-video>`);
      snapshot = await a11ySnapshot();
      ({ children } = snapshot);
    });

    it('is accessible', async function() {
      await expect(element)
          .to.be.accessible();
    });

    it('does not have video', function() {
      expect(!!element.videoElement).to.be.false;
    });

    it('consent button is not in a11y tree', function() {
      const [consent] = children.filter(child => child.name === 'Update preferences');
      expect(consent).to.not.exist;
    });

    it('consent button is hidden', function() {
      const consent = element.consentButton;
      expect(!consent || consent.hidden).to.be.true;
    });

    it('play button is in a11y tree', function() {
      const [play] = children.filter(child => child.name === 'videotitle (play video)');
      expect(play).to.exist;
    });

    it('shows play button', function() {
      const play = element.playButton;
      expect(!play || play.hidden).to.be.false;
    });

    it('thumbnail button is in a11y tree', function() {
      const [thumb] = children.filter(child => child.name === 'fakethumb');
      expect(thumb).to.exist;
    });

    it('shows thumbnail', function() {
      const thumb = getThumbnail();
      expect(isVisuallyHidden(thumb) && isA11yHidden(thumb)).to.be.false;
    });
  });

  describe('using a keyboard to play', function() {
    beforeEach(async function() {
      element = await createFixture<RhVideo>(html`
      <rh-video>
        <img slot="thumbnail" src="https://fakeimg.pl/300x150/282828/eae0d0" alt="fakethumb"/>
        <template>
          <iframe title="videotitle" width="300" height="150" src="https://www.youtube.com/embed/Hc8emNr2igU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </template>
      </rh-video>`);
      element?.focusableElement?.focus();
      await sendKeys({ press: 'Enter' });
      await eventFired('play-click', 'playClicked');
      await eventFired('play', 'playStarted');
      snapshot = await a11ySnapshot();
      ({ children } = snapshot);
    });

    it('prepares to play', function() {
      expect(children).to.deep.equal([{ role: 'Iframe', name: 'videotitle', focused: true }]);
    });
  });

  describe('using a mouse to play', function() {
    beforeEach(async function() {
      element = await createFixture<RhVideo>(html`
      <rh-video>
        <img slot="thumbnail" src="https://fakeimg.pl/300x150/282828/eae0d0" alt="fakethumb"/>
        <template>
          <iframe title="videotitle" width="300" height="150" src="https://www.youtube.com/embed/Hc8emNr2igU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </template>
      </rh-video>`);
      await clickElementAtCenter(element.focusableElement);
      await eventFired('play-click', 'playClicked');
      await eventFired('play', 'playStarted');
      snapshot = await a11ySnapshot();
      ({ children } = snapshot);
    });

    it('prepares to play', function() {
      expect(children).to.deep.equal([{ role: 'Iframe', name: 'videotitle', focused: true }]);
    });
  });

  describe('requires consent', function() {
    beforeEach(async function() {
      element = await createFixture<RhVideo>(html`
      <rh-video require-consent>
        <img slot="thumbnail" src="https://fakeimg.pl/300x150/282828/eae0d0" alt="fakethumb"/>
        <template>
          <iframe title="videotitle" width="300" height="150" src="https://www.youtube.com/embed/Hc8emNr2igU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </template>
       <p slot="caption">Caption</caption>
      </rh-video>`);
      snapshot = await a11ySnapshot();
      ({ children } = snapshot);
    });

    it('is accessible', async function() {
      await expect(element)
          .to.be.accessible();
    });

    it('has consent button', function() {
      const button = element.consentButton;
      expect(!button || button.hidden).to.be.false;
    });

    it('does not have video', function() {
      expect(!!element.videoElement).to.be.false;
    });

    it('play button is not a11y tree', function() {
      const [play] = children.filter(child => child.name === 'videotitle (play video)');
      expect(play).to.not.exist;
    });

    it('button is hidden', function() {
      const button = element.playButton;
      expect(!button || button.hidden).to.be.true;
    });

    it('thumbnail is not in a11y tree', function() {
      const [thumb] = children.filter(child => child.name === 'fakethumb');
      expect(thumb).to.not.exist;
    });

    it('thumbnail is invisible', function() {
      const thumb = getThumbnail();
      expect(isVisuallyHidden(thumb) || isA11yHidden(thumb)).to.be.true;
    });
  });

  describe('using a keyboard to update consent', function() {
    beforeEach(async function() {
      element = await createFixture<RhVideo>(html`
      <rh-video require-consent>
        <img slot="thumbnail" src="https://fakeimg.pl/300x150/282828/eae0d0" alt="fakethumb"/>
        <template>
          <iframe title="videotitle" width="300" height="150" src="https://www.youtube.com/embed/Hc8emNr2igU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </template>
      </rh-video>`);
      element.consentButton?.focus();
      await sendKeys({ press: ' ' });
      await eventFired('consent-click', 'consentClicked');
      element.hasConsent = true;
      snapshot = await a11ySnapshot();
      ({ children } = snapshot);
    });

    it('fires consent-click', function() {
      expect(element.consentClicked).to.be.true;
    });

    it('shows play button and thumbnail', function() {
      expect(children).to.deep.equal([
        { role: 'image', name: 'fakethumb' },
        { role: 'button', name: 'videotitle (play video)' },
      ]);
    });
  });

  describe('using a mouse to update consent', function() {
    beforeEach(async function() {
      element = await createFixture<RhVideo>(html`
      <rh-video require-consent>
        <img slot="thumbnail" src="https://fakeimg.pl/300x150/282828/eae0d0" alt="fakethumb"/>
        <template>
          <iframe title="videotitle" width="300" height="150" src="https://www.youtube.com/embed/Hc8emNr2igU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </template>
      </rh-video>`);
      await clickElementAtCenter(element.focusableElement.shadowRoot?.querySelector('button'));
      await eventFired('consent-click', 'consentClicked');
      element.hasConsent = true;
      snapshot = await a11ySnapshot();
      ({ children } = snapshot);
    });

    it('fires consent-click', function() {
      expect(element.consentClicked).to.be.true;
    });

    it('shows play button and thumbnail', function() {
      expect(children).to.deep.equal([
        { role: 'image', name: 'fakethumb' },
        { role: 'button', name: 'videotitle (play video)' },
      ]);
    });
  });
});
