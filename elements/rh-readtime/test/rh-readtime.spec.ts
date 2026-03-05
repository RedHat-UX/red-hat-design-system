import { expect, html, aTimeout } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { allUpdates } from '@patternfly/pfe-tools/test/utils.js';
import { RhReadtime } from '@rhds/elements/rh-readtime/rh-readtime.js';

function generateWords(count: number): string {
  return Array.from({ length: count }, () => 'word').join(' ');
}

describe('<rh-readtime>', function() {
  describe('simply instantiating', function() {
    let element: RhReadtime;

    beforeEach(async function() {
      element = await createFixture<RhReadtime>(html`<rh-readtime></rh-readtime>`);
    });

    it('should upgrade', function() {
      const klass = customElements.get('rh-readtime');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhReadtime);
    });

    it('imperatively instantiates', function() {
      expect(document.createElement('rh-readtime')).to.be.an.instanceof(RhReadtime);
    });
  });

  describe('property mode with word-count="228"', function() {
    let element: RhReadtime;

    beforeEach(async function() {
      element = await createFixture<RhReadtime>(html`
        <rh-readtime word-count="228">%t min read</rh-readtime>
      `);
      await allUpdates(element);
    });

    it('should compute 1 minute', function() {
      expect(element.minutes).to.equal(1);
    });

    it('should render the computed text in the accessibility tree', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainName('1 min read');
    });

    it('should be accessible', async function() {
      await expect(element).to.be.accessible();
    });
  });

  describe('property mode with word-count="1140"', function() {
    let element: RhReadtime;

    beforeEach(async function() {
      element = await createFixture<RhReadtime>(html`
        <rh-readtime word-count="1140">%t min read</rh-readtime>
      `);
      await allUpdates(element);
    });

    it('should compute 5 minutes', function() {
      expect(element.minutes).to.equal(5);
    });

    it('should render "5 min read" in the accessibility tree', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainName('5 min read');
    });
  });

  describe('property mode with image-count="1"', function() {
    let element: RhReadtime;

    beforeEach(async function() {
      element = await createFixture<RhReadtime>(html`
        <rh-readtime word-count="228" image-count="1">%t min read</rh-readtime>
      `);
      await allUpdates(element);
    });

    it('should add image time to the estimate', function() {
      expect(element.minutes).to.equal(2);
    });
  });

  describe('property mode without image-count', function() {
    let element: RhReadtime;

    beforeEach(async function() {
      element = await createFixture<RhReadtime>(html`
        <rh-readtime word-count="228">%t min read</rh-readtime>
      `);
      await allUpdates(element);
    });

    it('should not include image time', function() {
      expect(element.minutes).to.equal(1);
    });
  });

  describe('property mode without %t token', function() {
    let element: RhReadtime;

    beforeEach(async function() {
      element = await createFixture<RhReadtime>(html`
        <rh-readtime word-count="228"></rh-readtime>
      `);
      await allUpdates(element);
    });

    it('should render just the number in the accessibility tree', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainName('1');
    });
  });

  describe('container mode with selector', function() {
    let element: RhReadtime;

    beforeEach(async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <rh-readtime selector="#content">%t min read</rh-readtime>
          <div id="content">${generateWords(456)}</div>
        </div>
      `);
      element = container.querySelector('rh-readtime')!;
      await allUpdates(element);
    });

    it('should count words from the selector target', function() {
      expect(element.minutes).to.equal(2);
    });

    it('should render the reading time in the accessibility tree', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainName('2 min read');
    });

    it('should be accessible', async function() {
      await expect(element).to.be.accessible();
    });
  });

  describe('container mode without selector', function() {
    let element: RhReadtime;

    beforeEach(async function() {
      const container = await createFixture<HTMLElement>(html`
        <article>
          <rh-readtime>%t min read</rh-readtime>
          <p>${generateWords(456)}</p>
        </article>
      `);
      element = container.querySelector('rh-readtime')!;
      await allUpdates(element);
    });

    it('should count words from the parent element', function() {
      expect(element.minutes).to.be.greaterThan(0);
    });
  });

  describe('container mode images not counted by default', function() {
    let element: RhReadtime;

    beforeEach(async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <rh-readtime selector="#img-content">%t min read</rh-readtime>
          <div id="img-content">
            ${generateWords(228)}
            <img src="data:," alt="test">
          </div>
        </div>
      `);
      element = container.querySelector('rh-readtime')!;
      await allUpdates(element);
    });

    it('should not include image time without the images attribute', function() {
      expect(element.minutes).to.equal(1);
    });
  });

  describe('container mode with images attribute', function() {
    let element: RhReadtime;

    beforeEach(async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <rh-readtime selector="#img-content-2" images>%t min read</rh-readtime>
          <div id="img-content-2">
            ${generateWords(228)}
            <img src="data:," alt="test">
          </div>
        </div>
      `);
      element = container.querySelector('rh-readtime')!;
      await allUpdates(element);
    });

    it('should count images and add time', function() {
      expect(element.minutes).to.equal(2);
    });
  });

  describe('container mode with image-count override', function() {
    let element: RhReadtime;

    beforeEach(async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <rh-readtime selector="#img-content-3" image-count="5">%t min read</rh-readtime>
          <div id="img-content-3">
            ${generateWords(228)}
            <img src="data:," alt="test">
          </div>
        </div>
      `);
      element = container.querySelector('rh-readtime')!;
      await allUpdates(element);
    });

    it('should use image-count over DOM count', function() {
      expect(element.minutes).to.equal(2);
    });
  });

  describe('container mode with dynamic content', function() {
    let element: RhReadtime;
    let target: Element;

    beforeEach(async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div>
          <rh-readtime selector="#dynamic-content">%t min read</rh-readtime>
          <div id="dynamic-content">${generateWords(228)}</div>
        </div>
      `);
      element = container.querySelector('rh-readtime')!;
      target = container.querySelector('#dynamic-content')!;
      await allUpdates(element);
    });

    it('should recalculate when content changes', async function() {
      const initialMinutes = element.minutes;
      target.textContent = generateWords(1140);
      await aTimeout(50);
      await allUpdates(element);
      expect(element.minutes).to.be.greaterThan(initialMinutes);
    });
  });

  describe('language support with lang="de"', function() {
    let element: RhReadtime;

    beforeEach(async function() {
      element = await createFixture<RhReadtime>(html`
        <rh-readtime word-count="179" lang="de">%t Minuten Lesezeit</rh-readtime>
      `);
      await allUpdates(element);
    });

    it('should use German WPM (179)', function() {
      expect(element.minutes).to.equal(1);
    });
  });

  describe('language support from ancestor', function() {
    let element: RhReadtime;

    beforeEach(async function() {
      const container = await createFixture<HTMLDivElement>(html`
        <div lang="de">
          <rh-readtime word-count="179">%t Minuten Lesezeit</rh-readtime>
        </div>
      `);
      element = container.querySelector('rh-readtime')!;
      await allUpdates(element);
    });

    it('should resolve lang from the ancestor element', function() {
      expect(element.minutes).to.equal(1);
    });
  });

  describe('language support with unknown language', function() {
    let element: RhReadtime;

    beforeEach(async function() {
      element = await createFixture<RhReadtime>(html`
        <rh-readtime word-count="228" lang="xx-unknown">%t min read</rh-readtime>
      `);
      await allUpdates(element);
    });

    it('should fall back to English WPM', function() {
      expect(element.minutes).to.equal(1);
    });
  });
});
