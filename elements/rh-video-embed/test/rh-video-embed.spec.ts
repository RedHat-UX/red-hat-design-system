import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { clickElementAtCenter } from '@patternfly/pfe-tools/test/utils.js';
import { sendKeys } from '@web/test-runner-commands';
import { RhVideoEmbed } from '@rhds/elements/rh-video-embed/rh-video-embed.js';

describe('<rh-video-embed>', function() {
  let element: RhVideoEmbed;

  function getThumbnail() {
    return element.querySelector<HTMLElement>('[slot="thumbnail"]');
  }

  function isHidden(el?: HTMLElement | null) {
    return !el || el?.hidden;
  }

  function isVisuallyHidden(el?: HTMLElement | null) {
    return !el || el?.hidden || window.getComputedStyle(el)?.getPropertyValue('opacity') === '0';
  }

  function isA11yHidden(el?: HTMLElement | null) {
    return !el || el?.hidden || el.getAttribute('aria-hidden') === 'true';
  }

  async function eventFired(eventName: string, prop: keyof RhVideoEmbed) {
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
      expect(document.createElement('rh-video-embed')).to.be.an.instanceof(RhVideoEmbed);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhVideoEmbed>(html`<rh-video-embed></rh-video-embed>`);
      const klass = customElements.get('rh-video-embed');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhVideoEmbed);
    });
  });

  describe('default video', function() {
    beforeEach(async function() {
      element = await createFixture<RhVideoEmbed>(html`
      <rh-video-embed>
        <img slot="thumbnail" alt="fakethumb" src="https://fakeimg.pl/900x499/282828/eae0d0"/>
        <template>
          <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  frameborder="0"
                  height="499"
                  referrerpolicy="strict-origin-when-cross-origin"
                  src="https://www.youtube.com/embed/Hc8emNr2igU"
                  title="videotitle"
                  width="900"></iframe>
        </template>
       <p slot="caption">Caption</caption>
      </rh-video-embed>`);
    });

    it('is accessible', async function() {
      await expect(element)
          .to.be.accessible();
    });

    it('consent button is not in a11y tree', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.not.axContainName('Update preferences');
    });

    it('consent button is hidden', function() {
      expect(isHidden(element.consentButton)).to.be.true;
    });

    it('play button is in a11y tree', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainName('videotitle (play video)');
    });

    it('shows play button', function() {
      const play = element.playButton;
      expect(!play || play.hidden).to.be.false;
    });

    it('thumbnail button is in a11y tree', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainName('fakethumb');
    });

    it('shows thumbnail', function() {
      const thumb = getThumbnail();
      expect(isVisuallyHidden(thumb) && isA11yHidden(thumb)).to.be.false;
    });
  });

  describe('using a keyboard to play', function() {
    beforeEach(async function() {
      element = await createFixture<RhVideoEmbed>(html`
      <rh-video-embed>
        <img slot="thumbnail" alt="fakethumb" src="https://fakeimg.pl/900x499/282828/eae0d0"/>
        <template>
          <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen frameborder="0" height="499" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/Hc8emNr2igU" title="videotitle" width="900"></iframe>
        </template>
      </rh-video-embed>`);
      element?.focusableElement?.focus();
      await sendKeys({ press: 'Enter' });
      await eventFired('play-click', 'playClicked');
      await eventFired('play', 'playStarted');
    });

    it('prepares to play', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot)
          .axTreeFocusedNode
          .to.have.axRole('Iframe')
          .and.to.have.axName('videotitle');
    });
  });

  describe('using a mouse to play', function() {
    beforeEach(async function() {
      element = await createFixture<RhVideoEmbed>(html`
      <rh-video-embed>
        <img slot="thumbnail" alt="fakethumb" src="https://fakeimg.pl/900x499/282828/eae0d0"/>
        <template>
          <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen frameborder="0" height="499" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/Hc8emNr2igU" title="videotitle" width="900"></iframe>
        </template>
      </rh-video-embed>`);
      await clickElementAtCenter(element.focusableElement);
      await eventFired('play-click', 'playClicked');
      await eventFired('play', 'playStarted');
    });

    it('prepares to play', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot)
          .axTreeFocusedNode
          .to.have.axRole('Iframe')
          .and.to.have.axName('videotitle');
    });
  });

  describe('requires consent', function() {
    beforeEach(async function() {
      element = await createFixture<RhVideoEmbed>(html`
      <rh-video-embed require-consent>
        <img slot="thumbnail" alt="fakethumb" src="https://fakeimg.pl/900x499/282828/eae0d0"/>
        <template>
          <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen frameborder="0" height="499" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/Hc8emNr2igU" title="videotitle" width="900"></iframe>
        </template>
       <p slot="caption">Caption</caption>
      </rh-video-embed>`);
    });

    it('is accessible', async function() {
      await expect(element)
          .to.be.accessible();
    });

    it('has consent button', function() {
      const button = element.consentButton;
      expect(!button || button.hidden).to.be.false;
    });

    it('play button is not a11y tree', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.not.axContainName('videotitle (play video)');
    });

    it('button is hidden', function() {
      const button = element.playButton;
      expect(!button || button.hidden).to.be.true;
    });

    it('thumbnail is not in a11y tree', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.not.axContainName('fakethumb');
    });

    it('thumbnail is invisible', function() {
      const thumb = getThumbnail();
      expect(isVisuallyHidden(thumb) || isA11yHidden(thumb)).to.be.true;
    });
  });

  describe('using a keyboard to update consent', function() {
    beforeEach(async function() {
      element = await createFixture<RhVideoEmbed>(html`
      <rh-video-embed require-consent>
        <img slot="thumbnail" alt="fakethumb" src="https://fakeimg.pl/900x499/282828/eae0d0"/>
        <template>
          <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen frameborder="0" height="499" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/Hc8emNr2igU" title="videotitle" width="900"></iframe>
        </template>
      </rh-video-embed>`);
      element.consentButton?.focus();
      await sendKeys({ press: ' ' });
      await eventFired('consent-click', 'consentClicked');
      element.consented = true;
    });

    it('fires consent-click', function() {
      expect(element.consentClicked).to.be.true;
    });

    it('shows play button and thumbnail', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainQuery({ role: 'image', name: 'fakethumb' })
          .and.to.axContainQuery({ role: 'button', name: 'videotitle (play video)' });
    });
  });

  describe('using a mouse to update consent', function() {
    beforeEach(async function() {
      element = await createFixture<RhVideoEmbed>(html`
      <rh-video-embed require-consent>
        <img slot="thumbnail" alt="fakethumb" src="https://fakeimg.pl/900x499/282828/eae0d0"/>
        <template>
          <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen frameborder="0" height="499" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/Hc8emNr2igU" title="videotitle" width="900"></iframe>
        </template>
      </rh-video-embed>`);
      await clickElementAtCenter(element.focusableElement.shadowRoot!.querySelector('button')!);
      await eventFired('consent-click', 'consentClicked');
      element.consented = true;
    });

    it('fires consent-click', function() {
      expect(element.consentClicked).to.be.true;
    });

    it('shows play button and thumbnail', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainQuery({ role: 'image', name: 'fakethumb' })
          .and.to.axContainQuery({ role: 'button', name: 'videotitle (play video)' });
    });
  });
});
