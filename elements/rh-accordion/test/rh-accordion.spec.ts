import { expect, fixture, html, nextFrame, aTimeout } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';

import { allUpdates, clickElementAtCenter } from '@patternfly/pfe-tools/test/utils.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

import { RhAccordion, RhAccordionHeader, RhAccordionPanel } from '@rhds/elements/rh-accordion/rh-accordion.js';

describe('<rh-accordion>', function() {
  let element: RhAccordion;
  let headers: RhAccordionHeader[];
  let panels: RhAccordionPanel[];

  function press(press: string) {
    return async function() {
      await sendKeys({ press });
      await allUpdates(element);
    };
  }

  it('should upgrade', async function() {
    element = document.createElement('rh-accordion');
    const klass = customElements.get('rh-accordion');
    expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhAccordion);
  });

  it('imperatively instantiates', function() {
    expect(document.createElement('rh-accordion')).to.be.an.instanceof(RhAccordion);
    expect(document.createElement('rh-accordion-header')).to.be.an.instanceof(RhAccordionHeader);
    expect(document.createElement('rh-accordion-panel')).to.be.an.instanceof(RhAccordionPanel);
  });

  describe('in typical usage', function() {
    let header1: RhAccordionHeader;
    let header2: RhAccordionHeader;
    let header3: RhAccordionHeader;

    let panel1: RhAccordionPanel;
    let panel2: RhAccordionPanel;
    let panel3: RhAccordionPanel;

    beforeEach(async function() {
      element = await fixture(html`
        <rh-accordion>
          <rh-accordion-header id="header1">
            <h3>Header1 Consetetur sadipscing elitr?</h3>
          </rh-accordion-header>
          <rh-accordion-panel id="panel1">
            <p>Panel1 <a href="#">Panel1 link Lorem ipsum dolor</a>, sit amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
              rebum.</p>
          </rh-accordion-panel>
          <rh-accordion-header>
            <h3>Header2 Labore et dolore magna aliquyam erat?</h3>
          </rh-accordion-header>
          <rh-accordion-panel>
            <p>Panel2 <a href="#">Panel2 link Lorem ipsum dolor</a> sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
              rebum.</p>
          </rh-accordion-panel>
          <rh-accordion-header>
            <h3>Header3 Incididunt in Lorem voluptate eiusmod dolor?</h3>
          </rh-accordion-header>
          <rh-accordion-panel>
            <p>Panel3<a href="#">Panel3 link Lorem ipsum dolor</a> sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
              rebum.</p>
          </rh-accordion-panel>
        </rh-accordion>
      `);
      headers = Array.from(element.querySelectorAll('rh-accordion-header'));
      panels = Array.from(element.querySelectorAll('rh-accordion-panel'));
      [header1, header2, header3] = headers;
      [panel1, panel2, panel3] = panels;
    });

    beforeEach(() => allUpdates(element));

    it('is accessible', async function() {
      await expect(element).to.be.accessible();
    });

    it('preserves existing IDs', function() {
      expect(element.querySelector('#header1')).to.exist;
      expect(element.querySelector('#panel1')).to.exist;
    });

    describe('clicking the first header', function() {
      beforeEach(async () => {
        await clickElementAtCenter(header1);
      });

      it('expands first pair', async function() {
        expect(header1.expanded).to.be.true;
        expect(panel1.expanded).to.be.true;
        expect(panel1.hidden).to.be.false;
      });

      describe('then clicking first header again', function() {
        beforeEach(async () => {
          await clickElementAtCenter(header1);
        });

        it('collapses first pair', function() {
          expect(header1.expanded).to.be.false;
          expect(panel1.expanded).to.be.false;
          expect(panel1.hidden).to.be.true;
        });
      });
    });

    /* API TESTS */
    describe('calling toggle(1)', function() {
      beforeEach(async () => {
        element.toggle(1);
      });

      it('expands second pair', function() {
        expect(header2.expanded).to.be.true;
        expect(panel2.expanded).to.be.true;
        expect(panel2.hidden).to.be.false;
      });

      describe('then calling toggle(1) again', function() {
        beforeEach(async () => {
          element.toggle(1);
        });

        it('collapses second pair', function() {
          expect(header2.expanded).to.be.false;
          expect(panel2.expanded).to.be.false;
          expect(panel2.hidden).to.be.true;
        });
      });
    });

    describe('calling expand(1)', function() {
      beforeEach(async () => {
        element.expand(1);
      });

      it('expands second pair', function() {
        expect(header2.expanded).to.be.true;
        expect(panel2.expanded).to.be.true;
        expect(panel2.hidden).to.be.false;
      });

      describe('then calling collapse(1)', function() {
        beforeEach(async () => {
          element.collapse(1);
        });

        it('collapses second pair', function() {
          expect(header2.expanded).to.be.false;
          expect(panel2.expanded).to.be.false;
          expect(panel2.hidden).to.be.true;
        });
      });
    });

    describe('calling expandAll()', function() {
      beforeEach(async () => {
        element.expandAll();
      });

      it('expands all pairs', function() {
        for (const header of headers) {
          expect(header.expanded).to.be.true;
        }

        for (const panel of panels) {
          expect(panel.expanded).to.be.true;
          expect(panel.hidden).to.be.false;
        }
      });

      describe('then calling collapseAll()', function() {
        beforeEach(async () => {
          element.collapseAll();
        });

        it('collapses all pairs', function() {
          for (const header of headers) {
            expect(header.expanded).to.be.false;
          }

          for (const panel of panels) {
            expect(panel.expanded).to.be.false;
            expect(panel.hidden).to.be.true;
          }
        });
      });
    });

    /* ATTRIBUTE TESTS */
    describe('setting expanded-index attribute', function() {
      const indices = '1,2';
      beforeEach(function() {
        element.setAttribute('expanded-index', indices);
      });
      beforeEach(() => allUpdates(element));
      beforeEach(nextFrame);

      it('expands the pairs listed in the expanded-index attribute', function() {
        for (const idx of indices.split(',').map(x => parseInt(x))) {
          const header = headers[idx];
          const panel = panels[idx];

          expect(header.expanded, 'header expanded DOM property').to.be.true;
          expect(header.expanded, 'header expanded attribute').to.be.true;
          expect(panel.expanded, 'panel expanded DOM property').to.be.true;
          expect(panel.expanded, 'panel expanded attribute').to.be.true;
        }
      });
    });

    describe('dynamically adding pairs', function() {
      beforeEach(function() {
        const newHeader = document.createElement('rh-accordion-header');
        newHeader.id = 'newHeader';
        newHeader.innerHTML = `<h2>New Header</h2>`;

        const newPanel = document.createElement('rh-accordion-panel');
        newPanel.id = 'newPanel';
        newPanel.innerHTML = `New Panel`;

        element.appendChild(newHeader);
        element.appendChild(newPanel);
      });

      beforeEach(() => allUpdates(element));

      it('properly initializes new pairs', function() {
        const newHeader = headers.at(-1);
        const newPanel = panels.at(-1);
        expect(newHeader?.hasAttribute('id'), 'header has an id').to.be.true;
        expect(newHeader?.getAttribute('aria-controls'), 'header has aria-controls')
            .to.equal(newPanel?.getAttribute('id'));

        expect(newPanel?.getAttribute('role'), 'panel has role').to.equal('region');
        expect(newPanel?.hasAttribute('id'), 'panel has id').to.be.true;
        expect(newPanel?.getAttribute('aria-labelledby'), 'panel has aria-labelledby')
            .to.equal(newHeader?.getAttribute('id'));
      });
    });
  });

  describe('with slotted headers elements', function() {
    let element: RhAccordion;

    beforeEach(async function() {
      element = await fixture(html`
        <rh-accordion>
          <h5>
            <rh-accordion-header>5-b</rh-accordion-header>
          </h5>
          <rh-accordion-panel>panel</rh-accordion-panel>
        </rh-accordion>
      `);
    });

    beforeEach(() => element.updateComplete);

    it('removes the h5', function() {
      expect(element.querySelector('h5')?.shadowRoot?.querySelector('h5')).to.not.be.ok;
    });

    // playwright doesn't expose aria-level from internals
    it.skip('retains the level five heading', async function() {
      expect(await a11ySnapshot()).to.axContainQuery({ level: 5 });
    });
  });

  describe('for assistive technology', function() {
    let header1: RhAccordionHeader;
    let header2: RhAccordionHeader;
    let header3: RhAccordionHeader;

    let panel1: RhAccordionPanel;
    let panel2: RhAccordionPanel;
    let panel3: RhAccordionPanel;

    beforeEach(async function() {
      element = await fixture(html`
        <rh-accordion>
          <rh-accordion-header>h1</rh-accordion-header>
          <rh-accordion-panel><a href="#">p1</a></rh-accordion-panel>
          <rh-accordion-header>h2</rh-accordion-header>
          <rh-accordion-panel>p2</rh-accordion-panel>
          <rh-accordion-header>h3</rh-accordion-header>
          <rh-accordion-panel>p3</rh-accordion-panel>
        </rh-accordion>
      `);
    });

    beforeEach(function() {
      [header1, header2, header3] = element.querySelectorAll<RhAccordionHeader>('rh-accordion-header');
      [panel1, panel2, panel3] = element.querySelectorAll<RhAccordionPanel>('rh-accordion-panel');
    });

    it('applies hidden attribute to all panels', function() {
      expect(panel1.hidden, 'panel1').to.be.true;
      expect(panel2.hidden, 'panel2').to.be.true;
      expect(panel3.hidden, 'panel3').to.be.true;
    });

    describe('calling focus() on the first header', function() {
      beforeEach(function() {
        header1.focus();
      });

      beforeEach(async () => {
        await allUpdates(element);
      });

      beforeEach(nextFrame);

      describe('Pressing Space', function() {
        beforeEach(press(' '));

        beforeEach(async () => {
          await allUpdates(element);
        });

        it('expands the first pair', function() {
          expect(panel1.expanded).to.be.true;
          expect(panel1.hidden, 'panel1').to.be.false;
          expect(panel2.expanded).to.be.false;
          expect(panel3.expanded).to.be.false;
          expect(panel2.hidden, 'panel2').to.be.true;
          expect(panel3.hidden, 'panel3').to.be.true;
        });

        describe('Pressing Enter', function() {
          beforeEach(press('Enter'));

          beforeEach(async () => {
            await allUpdates(element);
          });

          it('collapses the first panel', function() {
            expect(panel1.expanded).to.be.false;
            expect(panel2.expanded).to.be.false;
            expect(panel3.expanded).to.be.false;
            expect(panel1.hidden, 'panel1').to.be.true;
            expect(panel2.hidden, 'panel2').to.be.true;
            expect(panel3.hidden, 'panel3').to.be.true;
          });
        });
      });

      describe('Pressing Tab', function() {
        beforeEach(press('Tab'));

        beforeEach(async () => {
          await allUpdates(element);
        });

        it('header2 to have focus', async function() {
          expect(await a11ySnapshot()).to.have.axTreeFocusOn(header2);
        });
      });
    });

    describe('calling focus() on the middle header', function() {
      beforeEach(function() {
        header2.focus();
      });

      beforeEach(nextFrame);

      describe('Pressing Space', function() {
        beforeEach(press(' '));

        it('expands the middle pair', function() {
          expect(panel1.expanded).to.be.false;
          expect(panel2.expanded).to.be.true;
          expect(panel3.expanded).to.be.false;
          expect(panel1.hidden, 'panel1').to.be.true;
          expect(panel2.hidden, 'panel2').to.be.false;
          expect(panel3.hidden, 'panel3').to.be.true;
        });

        describe('Pressing Enter', function() {
          beforeEach(press('Enter'));

          it('collapses the middle panel', function() {
            expect(panel1.expanded).to.be.false;
            expect(panel2.expanded).to.be.false;
            expect(panel3.expanded).to.be.false;
            expect(panel1.hidden, 'panel1').to.be.true;
            expect(panel2.hidden, 'panel2').to.be.true;
            expect(panel3.hidden, 'panel3').to.be.true;
          });
        });
      });

      describe('Pressing Tab', function() {
        beforeEach(press('Tab'));

        it('moves focus to the last header', async function() {
          expect(await a11ySnapshot()).to.have.axTreeFocusOn(header3);
        });
      });
    });

    describe('calling focus() on the last header', function() {
      beforeEach(function() {
        header3.focus();
      });

      beforeEach(nextFrame);

      describe('Press Space', function() {
        beforeEach(press(' '));

        it('expands the last pair', function() {
          expect(panel1.expanded).to.be.false;
          expect(panel2.expanded).to.be.false;
          expect(panel3.expanded).to.be.true;
          expect(panel1.hidden, 'panel1').to.be.true;
          expect(panel2.hidden, 'panel2').to.be.true;
          expect(panel3.hidden, 'panel3').to.be.false;
        });

        describe('Press Space again', function() {
          beforeEach(press(' '));

          it('collapses the last pair', function() {
            expect(panel1.expanded).to.be.false;
            expect(panel2.expanded).to.be.false;
            expect(panel3.expanded).to.be.false;
            expect(panel1.hidden, 'panel1').to.be.true;
            expect(panel2.hidden, 'panel2').to.be.true;
            expect(panel3.hidden, 'panel3').to.be.true;
          });
        });
      });

      describe('Press Shift+Tab', function() {
        beforeEach(press('Shift+Tab'));

        it('moves focus to the second header', async function() {
          expect(await a11ySnapshot()).to.have.axTreeFocusOn(header2);
        });
      });

      describe('Press Tab', function() {
        beforeEach(press('Tab'));

        it('moves focus to the body', async function() {
          expect(await a11ySnapshot()).to.have.axTreeFocusOn(document.body);
        });
      });
    });

    describe('expand(0)', function() {
      beforeEach(function() {
        element.expand(0);
      });

      beforeEach(nextFrame);

      it('expand the first header', function() {
        expect(header1.expanded).to.be.true;
        expect(panel1.hidden).to.be.false;
      });
    });

    describe('expand(1)', function() {
      beforeEach(function() {
        element.expand(1);
      });

      beforeEach(nextFrame);

      it('expand the second header', function() {
        expect(header2.expanded).to.be.true;
        expect(panel2.hidden).to.be.false;
      });
    });
  });

  describe('with expanded attribute', function() {
    let header1: RhAccordionHeader;
    let header2: RhAccordionHeader;
    let header3: RhAccordionHeader;

    let panel1: RhAccordionPanel;
    let panel2: RhAccordionPanel;
    let panel3: RhAccordionPanel;

    beforeEach(async function() {
      element = await fixture<RhAccordion>(html`
        <rh-accordion>
          <h2><rh-accordion-header id="attribute-header-1" expanded>h1</rh-accordion-header></h2>
          <rh-accordion-panel id="attribute-panel-1"><p>p1</p></rh-accordion-panel>
          <h2><rh-accordion-header id="attribute-header-2" expanded>h2</rh-accordion-header></h2>
          <rh-accordion-panel id="attribute-panel-2"><p>p2</p></rh-accordion-panel>
          <h2><rh-accordion-header>h3</rh-accordion-header></h2>
          <rh-accordion-panel><p>p3</p></rh-accordion-panel>
        </rh-accordion>
      `);
      headers = Array.from(element.querySelectorAll<RhAccordionHeader>('rh-accordion-header'));
      panels = Array.from(element.querySelectorAll<RhAccordionPanel>('rh-accordion-panel'));
      [header1, header2, header3] = headers;
      [panel1, panel2, panel3] = panels;
      await element.updateComplete;
    });

    beforeEach(async () => {
      await allUpdates(element);
    });

    it('first panel is expanded', function() {
      expect(header1.expanded, 'header-1 expanded').to.be.true;
      expect(panel1.expanded, 'panel-1 expanded').to.be.true;
      expect(panel1.hidden, 'panel-1 hidden').to.be.false;
    });

    it('second panel is expanded', function() {
      expect(header2.expanded, 'header-2 expanded').to.be.true;
      expect(panel2.expanded, 'panel-2 expanded').to.be.true;
      expect(panel2.hidden, 'panel-2 hidden').to.be.false;
    });

    it('third panel remains hidden', function() {
      expect(header3.expanded, 'header-3 expanded').to.be.false;
      expect(panel3.expanded, 'panel-3 expanded').to.be.false;
      expect(panel3.hidden, 'panel-3 hidden').to.be.true;
    });
  });
});
