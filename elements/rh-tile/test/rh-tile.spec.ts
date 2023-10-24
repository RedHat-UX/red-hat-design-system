import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
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
      <img slot="image" src="https://fakeimg.pl/296x50" alt="296 X 50 placeholder">
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
      <img slot="image" src="https://fakeimg.pl/296x50" alt="296 X 50 placeholder">
      <div slot="title">Title</div>
      <h2 slot="headline"><a href="#top">Link</a></h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <div slot="footer">Suspendisse eu turpis elementum</div>
    </rh-tile>`;
    let element: RhTile;

    beforeEach(async function() {
      element = await createFixture<RhTile>(tile);
    });

    it('is accessible', async function() {
      await expect(element).to.be.an.accessible;
    });

    it('has a checkbox', async function() {
      const snapshot = await a11ySnapshot();
      const checkboxes = snapshot?.children.filter(child=>child.role === 'checkbox');
      expect(checkboxes.length)
        .to.equal(1);
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
