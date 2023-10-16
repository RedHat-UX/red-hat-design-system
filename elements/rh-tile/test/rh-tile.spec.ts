import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { sendMouse, sendKeys } from '@web/test-runner-commands';
import { RhTile } from '@rhds/elements/rh-tile/rh-tile.js';

describe('<rh-tile>', function() {
  let element: RhTile;

  async function click(element: HTMLElement) {
    const { x, y, width, height } = element.getBoundingClientRect();
    const position = [x + width / 2, y + height / 2].map(Math.round) as [number, number];
    await sendMouse({ type: 'click', position });
  }

  async function enter() {
    await sendKeys({ press: 'Enter' });
    await element.updateComplete;
  }

  function input(element, checked = false) {
    return element?.shadowRoot?.querySelector(`input[type="checkbox"]${checked ? ':checked' : ''}`);
  }

  describe('simply instantiating', function() {
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-tile')).to.be.an.instanceof(RhTile);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhTile>(html`<rh-tile></rh-tile>`);
      const klass = customElements.get('rh-tile');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhTile);
    });
  });

  describe('default tile', function() {
    const tile = html`<rh-tile>
      <img slot="image" src="//fakeimg.pl/296x50" alt="296 X 50 placeholder">
      <div slot="title">Title</div>
      <h2 slot="headline"><a href="#top">Link</a></h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <div slot="footer">Suspendisse eu turpis elementum</div>
    </rh-tile>`;
    let element: RhTile;

    it('is accessible', async function() {
      element = await createFixture<RhTile>(tile);
      expect(element)
        .to.be.an.accessible;
    });
  });

  describe('checkable tile', function() {
    const tile = html`<rh-tile checkable>
      <img slot="image" src="//fakeimg.pl/296x50" alt="296 X 50 placeholder">
      <div slot="title">Title</div>
      <h2 slot="headline"><a href="#top">Link</a></h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <div slot="footer">Suspendisse eu turpis elementum</div>
    </rh-tile>`;
    let element: RhTile;

    beforeEach(async function() {
      element = await createFixture<RhTile>(tile);
    });

    it('is accessible', function() {
      expect(element)
        .to.be.an.accessible;
    });

    it('has a checkbox', function() {
      expect(input(element))
        .to.exist.and.to.be.visible;
    });

    describe('pressing Enter', async function() {
      beforeEach(async function() {
        element.focus();
        await enter();
      });

      it('is checked', function() {
        expect(element.checked)
          .to.equal(true);
      });

      describe('clicking', async function() {
        beforeEach(async function() {
          element.checked = true;
          await element.updateComplete;
          await click(element);
        });
        it('is unchecked', function() {
          expect(element.checked)
            .to.equal(false);
        });
      });
    });
  });
});
