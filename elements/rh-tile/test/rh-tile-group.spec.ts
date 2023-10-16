import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { sendKeys, sendMouse } from '@web/test-runner-commands';
import { RhTileGroup } from '@rhds/elements/rh-tile/rh-tile-group.js';

describe('<rh-tile>', function() {
  let element: RhTileGroup;
  const tileGroup = html`
      <rh-tile-group radio>
        <rh-tile checked>
          <div slot="title">Title</div>
          <h2 slot="headline"><a href="#top">Link</a></h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <div slot="footer">Suspendisse eu turpis elementum</div>
        </rh-tile>
    
        <rh-tile>
          <div slot="title">Title</div>
          <h2 slot="headline"><a href="#top">Link</a></h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <div slot="footer">Suspendisse eu turpis elementum</div>
        </rh-tile>
    
        <rh-tile>
          <div slot="title">Title</div>
          <h2 slot="headline"><a href="#top">Link</a></h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <div slot="footer">Suspendisse eu turpis elementum</div>
        </rh-tile>
      </rh-tile-group>`;

  async function click(element: HTMLElement) {
    const { x, y, width, height } = element.getBoundingClientRect();
    const position = [x + width / 2, y + height / 2].map(Math.round) as [number, number];
    await sendMouse({ type: 'click', position });
  }

  async function arrowDown() {
    await sendKeys({ down: 'ArrowDown' });
    await element.updateComplete;
  }

  async function enter() {
    await sendKeys({ press: 'Enter' });
    await element.updateComplete;
  }

  async function arrowUp() {
    await sendKeys({ down: 'ArrowUp' });
    await element.updateComplete;
  }

  function tiles(element) {
    return [...element.querySelectorAll('rh-tile')];
  }

  function input(element, checked = false) {
    return element?.shadowRoot?.querySelector(`input[type="radio"]${checked ? ':checked' : ''}`);
  }

  function inputs(element, checked = false) {
    return tiles(element).map(tile => input(tile, checked)).filter(input=>input);
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

  describe('radio tile', function() {
    it('is accessible', async function() {
      element = await createFixture<RhTileGroup>(tileGroup);
      expect(element)
        .to.be.an.accessible;
    });

    it('has radio buttons', async function() {
      element = await createFixture<RhTileGroup>(tileGroup);
      expect(tiles(element).length)
        .to.equal(inputs(element).length);
    });

    describe('as a radio group', async function() {
      it('sets focus', async function() {
        element = await createFixture<RhTileGroup>(tileGroup);
        const [tile1, tile2, tile3] = tiles(element);
        await element.focus();
        expect(document.activeElement)
          .to.equal(tile1);

        describe('arrow down', async function() {
          await arrowDown();
          it('sets focus on second tile', function() {
            expect(document.activeElement)
              .to.equal(tile2);
          });

          describe('another arrow down', async function() {
            await arrowDown();
            it('sets focus on third tile', function() {
              expect(document.activeElement)
                .to.equal(tile3);
            });

            describe('another arrow down', async function() {
              await arrowDown();
              it('sets focus on first tile', function() {
                expect(document.activeElement)
                  .to.equal(tile1);
              });

              describe('arrow up', async function() {
                await arrowUp();
                it('sets focus on last tile', function() {
                  expect(document.activeElement)
                    .to.equal(tile3);
                });

                describe('another arrow up', async function() {
                  await arrowUp();
                  it('sets focus on second tile', function() {
                    expect(document.activeElement)
                      .to.equal(tile2);
                  });
                });
              });
            });
          });
        });
      });

      describe('only allows one item to be selected', async function() {
        element = await createFixture<RhTileGroup>(tileGroup);
        const [tile1, tile2] = tiles(element);
        await element.focus();

        it('only has one selected element', function() {
          expect(element.selected)
            .to.equal(tile1);

          describe('only one tiles has a checked radio', function() {
            const [checked1] = inputs(element, true);
            const tileChecked = input(tile1, true);

            it('only has one checked radio button', function() {
              expect(checked1)
                .to.equal([tileChecked]);

              describe('clicking second tile', async function() {
                tile2.focus();
                await enter();
                it('selects the second tile only', function() {
                  expect(element.selected)
                    .to.equal(tile2);
                });
              });
            });
          });
        });
      });
    });
  });
});
