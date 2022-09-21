import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhPagination } from '@rhds/elements/rh-pagination/rh-pagination.js';

describe('<rh-pagination>', function() {
  before(function() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/elements/rh-pagination/rh-pagination-lightdom.css';
    document.head.append(link);
  });
  it('should upgrade', async function() {
    const element = await createFixture<RhPagination>(html`<rh-pagination></rh-pagination>`);
    const klass = customElements.get('rh-pagination');
    expect(element)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhPagination);
  });

  describe('with 5 pages', function() {
    let element: RhPagination;
    beforeEach(async function() {
      element = await createFixture<RhPagination>(html`
        <rh-pagination>
          <ol>
            <li><a href="#">1</a></li>
            <li><a href="#2">2</a></li>
            <li><a href="#3">3</a></li>
            <li><a href="#4">4</a></li>
            <li><a href="#5">5</a></li>
          </ol>
        </rh-pagination>
      `);
      element.addEventListener('click', event => {
        const link = event.composedPath().findLast(x => x instanceof HTMLAnchorElement);
        if (link) {
          event.preventDefault();
          history.pushState(null, link.innerText, link.href);
          element.requestUpdate();
        }
      });
    });

    it('does not overflow', function() {
      expect(element.getAttribute('overflow')).to.be.null;
    });

    describe('on the first page', function() {
      beforeEach(async function() {
        const url = new URL(location.href);
        url.hash = '';
        history.pushState(null, null, url.href);
        element.requestUpdate();
        await element.updateComplete;
      });
      it('disables first page stepper', function() {
        const [first] = element.shadowRoot.querySelectorAll('a');
        expect(first.hasAttribute('inert'), 'is inert').to.be.true;
        expect(first.hasAttribute('href'), 'has no href').to.be.false;
      });

      it('disables previous page stepper', function() {
        const [, prev] = element.shadowRoot.querySelectorAll('a');
        expect(prev.hasAttribute('inert'), 'is inert').to.be.true;
        expect(prev.hasAttribute('href'), 'has no href').to.be.false;
      });
    });

    describe('appending 5 new pages with javascript', function() {
      let nodelist: HTMLCollection;
      beforeEach(async function() {
        element.querySelector('ol').innerHTML = Array.from({ length: 10 }, (_, i) =>
          `<li><a href="#${i + 1}">${i + 1}</a></li>`).join('\n');
        await element.updateComplete;
        nodelist = element.querySelectorAll('li');
      });

      it('should overflow', function() {
        expect(element.getAttribute('overflow')).to.equal('end');
      });

      it('should show first 5 items', function() {
        for (const i of [1, 2, 3, 4, 5]) {
          const item = nodelist[i - 1];
          expect(item, `item ${i}`).to.be.visible;
        }
      });

      it('should hide items 6-9', function() {
        for (const i of [6, 7, 8, 9]) {
          const item = nodelist[i - 1];
          expect(getComputedStyle(item).display, item.innerHTML).to.equal('none');
        }
      });

      it('should show last item', function() {
        const item = [...nodelist].at(-1);
        expect(item).to.be.visible;
      });

      describe('then advancing to page 2', function() {
        before(() => element.next());

        it('enables first page stepper', function() {
          const [first] = element.shadowRoot.querySelectorAll('a');
          expect(first.hasAttribute('inert'), 'is not inert').to.be.false;
          expect(first.hasAttribute('href'), 'has an href').to.be.true;
        });

        it('enables previous page stepper', function() {
          const [, prev] = element.shadowRoot.querySelectorAll('a');
          expect(prev.hasAttribute('inert'), 'is not inert').to.be.false;
          expect(prev.hasAttribute('href'), 'has an href').to.be.true;
        });

        it('activates page 2', function() {
          const current = document.querySelector<HTMLAnchorElement>('[aria-current=page]');
          expect(new URL(current.href).hash).to.equal('#2');
        });

        describe('then advancing to page 3', function() {
          before(() => element.next());
          it('activates page 3', function() {
            const current = document.querySelector<HTMLAnchorElement>('[aria-current=page]');
            expect(new URL(current.href).hash).to.equal('#3');
          });
        });

        describe('then advancing to page 6', function() {
          before(() => element.next());
          before(() => element.next());
          before(() => element.next());
          let a; let b; let c; let d; let e; let f; let g; let h; let i; let j;
          beforeEach(function() {
            ([a, b, c, d, e, f, g, h, i, j] = nodelist);
          });
          it('activates page 6', function() {
            const current = document.querySelector<HTMLAnchorElement>('[aria-current=page]');
            expect(current).to.equal(f.firstElementChild);
          });
          it('shows link 1', function() {
            expect(a, a.innerHTML).to.be.visible;
          });
          it('hides links 2-5', function() {
            expect(getComputedStyle(b).display, b.innerHTML).to.equal('none');
            expect(getComputedStyle(c).display, c.innerHTML).to.equal('none');
            expect(getComputedStyle(d).display, d.innerHTML).to.equal('none');
            expect(getComputedStyle(e).display, e.innerHTML).to.equal('none');
          });
          it('shows links 6-10', function() {
            expect(f, f.innerHTML).to.be.visible;
            expect(g, g.innerHTML).to.be.visible;
            expect(h, h.innerHTML).to.be.visible;
            expect(i, i.innerHTML).to.be.visible;
            expect(j, j.innerHTML).to.be.visible;
          });
          describe('then advancing to page 10', function() {
            before(() => element.last());
            it('activates page 10', function() {
              const current = document.querySelector<HTMLAnchorElement>('[aria-current=page]');
              expect(current).to.equal(j.firstElementChild);
            });
            it('shows link 1', function() {
              expect(a, a.innerHTML).to.be.visible;
            });
            it('hides links 2-5', function() {
              expect(getComputedStyle(b).display, b.innerHTML).to.equal('none');
              expect(getComputedStyle(c).display, c.innerHTML).to.equal('none');
              expect(getComputedStyle(d).display, d.innerHTML).to.equal('none');
              expect(getComputedStyle(e).display, e.innerHTML).to.equal('none');
            });
            it('shows links 6-10', function() {
              expect(f, f.innerHTML).to.be.visible;
              expect(g, g.innerHTML).to.be.visible;
              expect(h, h.innerHTML).to.be.visible;
              expect(i, i.innerHTML).to.be.visible;
              expect(j, j.innerHTML).to.be.visible;
            });
          });
        });
      });
    });
  });
});
