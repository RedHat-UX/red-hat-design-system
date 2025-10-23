import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhPagination } from '@rhds/elements/rh-pagination/rh-pagination.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { stub, type SinonStub } from 'sinon';

import '@patternfly/pfe-tools/test/stub-logger.js';

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

  describe('with slotted i18n content', function() {
    before(function() {
      stub(Logger.prototype, 'warn');
    });
    after(function() {
      (Logger.prototype.warn as SinonStub).restore();
    });
    beforeEach(async function() {
      await createFixture<RhPagination>(html`
        <rh-pagination>
          <span slot="go-to-page">עבור לדף</span>
          <ol>
            <li><a href="#">1</a></li>
            <li><a href="#2">2</a></li>
            <li><a href="#3">3</a></li>
            <li><a href="#4">4</a></li>
            <li><a href="#5">5</a></li>
          </ol>
        </rh-pagination>
      `);
    });
    it('does not log a content validation warning', function() {
      expect(Logger.prototype.warn).to.not.have.been.called;
    });
  });

  describe('with invalid slotted content', function() {
    before(function() {
      stub(Logger.prototype, 'warn');
    });
    after(function() {
      (Logger.prototype.warn as SinonStub).restore();
    });
    beforeEach(async function() {
      await createFixture<RhPagination>(html`
        <rh-pagination>
          <span>go to page, bro!</span>
          <ol>
            <li><a href="#">1</a></li>
            <li><a href="#2">2</a></li>
            <li><a href="#3">3</a></li>
            <li><a href="#4">4</a></li>
            <li><a href="#5">5</a></li>
          </ol>
        </rh-pagination>
      `);
    });
    it('logs a content validation warning', function() {
      expect(Logger.prototype.warn).to.have.been.calledWith('must have a single <ol> element as it\'s only child');
    });
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
        const link = [...event.composedPath()]
            .reverse()
            .find(x => x instanceof HTMLAnchorElement);
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
      let first: HTMLAnchorElement;
      beforeEach(async function() {
        [first] = element.shadowRoot!.querySelectorAll('a');
        first.click();
        element.requestUpdate();
        await element.updateComplete;
      });
      it('disables first page stepper', function() {
        expect(first.hasAttribute('inert'), 'is inert').to.be.true;
      });

      it('disables previous page stepper', function() {
        const [, prev] = element.shadowRoot!.querySelectorAll('a');
        expect(prev.hasAttribute('inert'), 'is inert').to.be.true;
        expect(prev.hasAttribute('href'), 'has no href').to.be.false;
      });
    });

    describe('appending 5 new pages with javascript', function() {
      let nodelist: NodeListOf<HTMLLIElement>;
      beforeEach(async function() {
        element.querySelector('ol')!.innerHTML = Array.from({ length: 10 }, (_, i) =>
          `<li><a href="#${i + 1}">${i + 1}</a></li>`).join('\n');
        await element.updateComplete;
        await element.updateComplete;
        nodelist = element.querySelectorAll('li')!;
      });

      it('should overflow', function() {
        expect(element.getAttribute('overflow'), 'overflow attr').to.equal('end');
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
          const [first] = element.shadowRoot!.querySelectorAll('a');
          expect(first.hasAttribute('inert'), 'is not inert').to.be.false;
          expect(first.hasAttribute('href'), 'has an href').to.be.true;
        });

        it('enables previous page stepper', function() {
          const [, prev] = element.shadowRoot!.querySelectorAll('a');
          expect(prev.hasAttribute('inert'), 'is not inert').to.be.false;
          expect(prev.hasAttribute('href'), 'has an href').to.be.true;
        });

        it('activates page 2', function() {
          const current = document.querySelector<HTMLAnchorElement>('[aria-current=page]');
          expect(new URL(current!.href).hash).to.equal('#2');
        });

        describe('then advancing to page 3', function() {
          before(() => element.next());
          it('activates page 3', function() {
            const current = document.querySelector<HTMLAnchorElement>('[aria-current=page]');
            expect(new URL(current!.href).hash).to.equal('#3');
          });
        });

        describe('then advancing to page 6', function() {
          before(() => element.next());
          before(() => element.next());
          before(() => element.next());
          let a: Element;
          let b: Element;
          let c: Element;
          let d: Element;
          let e: Element;
          let f: Element;
          let g: Element;
          let h: Element;
          let i: Element;
          let j: Element;
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

  describe('variants', function() {
    it('should support borderless variant', async function() {
      const element = await createFixture<RhPagination>(html`
        <rh-pagination variant="borderless">
          <ol>
            <li><a href="#">1</a></li>
            <li><a href="#2">2</a></li>
          </ol>
        </rh-pagination>
      `);
      expect(element.variant).to.equal('borderless');
      expect(element.hasAttribute('variant')).to.be.true;
      expect(element.getAttribute('variant')).to.equal('borderless');
    });

    it('should support open variant for backward compatibility', async function() {
      const element = await createFixture<RhPagination>(html`
        <rh-pagination variant="open">
          <ol>
            <li><a href="#">1</a></li>
            <li><a href="#2">2</a></li>
          </ol>
        </rh-pagination>
      `);
      expect(element.variant).to.equal('open');
      expect(element.hasAttribute('variant')).to.be.true;
      expect(element.getAttribute('variant')).to.equal('open');
    });

    describe('deprecation warnings', function() {
      let warnStub: SinonStub;

      beforeEach(function() {
        warnStub = stub(Logger.prototype, 'warn');
      });

      afterEach(function() {
        warnStub.restore();
      });

      it('should show deprecation warning when using open variant', async function() {
        await createFixture<RhPagination>(html`
          <rh-pagination variant="open">
            <ol>
              <li><a href="#">1</a></li>
              <li><a href="#2">2</a></li>
            </ol>
          </rh-pagination>
        `);
        expect(warnStub).to.have.been.calledWith('variant="open" is deprecated; use "borderless" instead.');
      });

      it('should not show deprecation warning when using borderless variant', async function() {
        await createFixture<RhPagination>(html`
          <rh-pagination variant="borderless">
            <ol>
              <li><a href="#">1</a></li>
              <li><a href="#2">2</a></li>
            </ol>
          </rh-pagination>
        `);
        expect(warnStub).to.not.have.been.calledWith('variant="open" is deprecated; use "borderless" instead.');
      });
    });
  });
});
