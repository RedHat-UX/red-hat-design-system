import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { sendKeys } from '@web/test-runner-commands';
import { RhTile } from '../rh-tile.js';
import { RhTileGroup } from '../rh-tile-group.js';

describe('<rh-tile-group>', function() {
  let element: RhTileGroup;
  let tile1: RhTile;
  let tile2: RhTile;
  let tile3: RhTile;

  function press(press: string) {
    return async function() {
      await sendKeys({ press });
      await element.updateComplete;
    };
  }

  describe('simply instantiating', function() {
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-tile-group')).to.be.an.instanceof(RhTileGroup);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhTileGroup>(html`<rh-tile-group></rh-tile-group>`);
      const klass = customElements.get('rh-tile-group');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhTileGroup);
    });
  });

  describe('as a radio group', async function() {
    beforeEach(async function() {
      element = await createFixture<RhTileGroup>(html`
        <rh-tile-group radio>
          <rh-tile>Tile 1</rh-tile>
          <rh-tile>Tile 2</rh-tile>
          <rh-tile>Tile 3</rh-tile>
        </rh-tile-group>
      `);
      [tile1, tile2, tile3] = element.querySelectorAll('rh-tile');
      element.focus();
    });

    it('is accessible', async function() {
      await expect(element).to.be.accessible();
    });

    it('exposes radio roles to the ax tree', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot)
          .to.axContainQuery({ role: 'radio', name: 'Tile 1', focused: true, checked: false }).and
          .to.axContainQuery({ role: 'radio', name: 'Tile 2', checked: false }).and
          .to.axContainQuery({ role: 'radio', name: 'Tile 3', checked: false });
    });

    it('sets focus', function() {
      expect(document.activeElement).to.equal(tile1);
    });

    it('has no selected element', function() {
      expect(element.selected)
          .to.be.undefined;
    });

    describe('space on first tile', async function() {
      beforeEach(press('Space'));
      beforeEach(() => element.updateComplete);
      it('selects the first tile', function() {
        expect(element.selected)
            .to.equal(tile1);
      });
    });

    describe('arrow down', async function() {
      beforeEach(press('ArrowDown'));
      it('sets focus on second tile', function() {
        expect(document.activeElement)
            .to.equal(tile2);
      });

      describe('clicking second tile', async function() {
        beforeEach(press('Space'));
        beforeEach(() => element.updateComplete);
        it('selects the second tile only', function() {
          expect(element.selected)
              .to.equal(tile2);
        });
        it('has only one checked radio button', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot)
              .to.axContainQuery({ role: 'radio', name: 'Tile 1', checked: false }).and
              .to.axContainQuery({ role: 'radio', name: 'Tile 2', checked: true, focused: true }).and
              .to.axContainQuery({ role: 'radio', name: 'Tile 3', checked: false });
        });
      });
    });

    describe('arrow up', async function() {
      beforeEach(press('ArrowUp'));
      it('sets focus on last tile', function() {
        expect(document.activeElement)
            .to.equal(tile3);
      });
    });

    describe('with accessible labels', function() {
      beforeEach(async function() {
        tile2.setAttribute('accessible-label', 'carreau numéro 2');
        await tile2.updateComplete;
      });

      it('has radio roles', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot)
            .to.axContainQuery({ role: 'radio', name: 'Tile 1', focused: true, checked: false }).and
            .to.axContainQuery({ role: 'radio', name: 'carreau numéro 2', checked: false }).and
            .to.axContainQuery({ role: 'radio', name: 'Tile 3', checked: false });
      });
    });
  });

  describe('in a form', function() {
    let form: HTMLFormElement;

    function submit() {
      form.requestSubmit();
    }

    describe('as a radio group', function() {
      beforeEach(async function() {
        form = await createFixture(html`
          <form @submit="${(e: Event) => e.preventDefault()}">
            <rh-tile-group radio>
              <rh-tile name="radio" value="1">Tile 1</rh-tile>
              <rh-tile name="radio" value="2">Tile 2</rh-tile>
              <rh-tile name="radio" value="3">Tile 3</rh-tile>
            </rh-tile-group>
          </form>
        `);
        // because `createFixture` will only wait on the first element.
        await Promise.all(Array.from(form.querySelectorAll('*'), x =>
          (x as RhTile).updateComplete));
      });

      it('includes the radio in the form\'s elements list', function() {
        expect(form.radio).to.be.an.instanceof(NodeList);
      });

      describe('submitting the form', function() {
        beforeEach(submit);
        it('does not contain radio values', function() {
          expect(new FormData(form).get('radio')).to.be.null;
        });
      });

      describe('checking a radio tile', function() {
        beforeEach(press('Tab'));
        beforeEach(press('Space'));
        describe('submitting the form', function() {
          beforeEach(submit);
          it('contains the selected radio value', function() {
            expect(new FormData(form).get('radio')).to.equal('1');
          });
        });
      });
    });
  });
});
