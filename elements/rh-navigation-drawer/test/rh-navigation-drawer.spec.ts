import { expect, nextFrame, aTimeout, fixture, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { sendKeys, setViewport } from '@web/test-runner-commands';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { allUpdates } from '@patternfly/pfe-tools/test/utils.js';
import { RhNavigationDrawer } from '@rhds/elements/rh-navigation-drawer/rh-navigation-drawer.js';

const DRAWER = await createFixture<RhNavigationDrawer>(html`
  <rh-navigation-drawer>
    <div slot="header">Navigation Header</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
        </ul>
      </nav>
    <div slot="footer">Footer content</div>
  </rh-navigation-drawer>
`);

describe('<rh-navigation-drawer>', function() {
  let element: RhNavigationDrawer;
  const updateComplete = async () => await allUpdates(element);

  describe('simply instantiating', function() {
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-navigation-drawer')).to.be.an.instanceof(RhNavigationDrawer);
    });

    it('should upgrade', async function() {
      element = await fixture<RhNavigationDrawer>(DRAWER);
      const klass = customElements.get('rh-navigation-drawer');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhNavigationDrawer);
    });
  });

  describe('accessibility', function() {
    beforeEach(async function() {
      element = await fixture<RhNavigationDrawer>(DRAWER);
    });

    it('is accessible', async function() {
      await expect(element).to.be.accessible();
    });
  });

  describe('breakpoint utility method', function() {
    it('should return correct pixel values for breakpoints', function() {
      expect(RhNavigationDrawer.getBreakpointValue('xs')).to.equal(576);
      expect(RhNavigationDrawer.getBreakpointValue('sm')).to.equal(768);
      expect(RhNavigationDrawer.getBreakpointValue('md')).to.equal(992);
      expect(RhNavigationDrawer.getBreakpointValue('lg')).to.equal(1200);
      expect(RhNavigationDrawer.getBreakpointValue('xl')).to.equal(1440);
      expect(RhNavigationDrawer.getBreakpointValue('2xl')).to.equal(1680);
    });
  });

  describe('narrow container behavior', function() {
    beforeEach(async function() {
      // Set viewport to less than md breakpoint (992px) to ensure narrow container behavior
      await setViewport({ width: 768, height: 800 });
      element = await fixture<RhNavigationDrawer>(DRAWER);
      const wrapper = document.querySelector('div');
      wrapper!.style.containerType = 'inline-size';
      wrapper!.style.height = '100%';
    });
    beforeEach(updateComplete);
    beforeEach(nextFrame);

    it('should be accessible', async function() {
      await expect(element).to.be.accessible();
    });

    it('should use disclosure pattern in narrow containers', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainQuery({ role: 'DisclosureTriangle', name: 'Menu' });
    });

    describe('collapsible behavior', function() {
      beforeEach(async function() {
        element.setAttribute('collapsible', '');
      });
      beforeEach(updateComplete);
      beforeEach(nextFrame);

      describe('with collapsible attribute', function() {
        it('toggle button should not be present', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).to.not.axContainQuery({ role: 'button', name: 'Toggle navigation' });
        });
      });
    });

    describe('disclosure keyboard navigation', function() {
      describe('pressing Tab to focus disclosure', function() {
        beforeEach(async function() {
          await sendKeys({ press: 'Tab' });
        });
        beforeEach(updateComplete);
        beforeEach(nextFrame);

        it('disclosure should be focused', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).to.axContainQuery({ role: 'DisclosureTriangle', focused: true });
        });

        describe('pressing Space to expand', function() {
          beforeEach(async function() {
            await sendKeys({ press: ' ' });
          });
          beforeEach(updateComplete);
          beforeEach(nextFrame);

          it('should expand disclosure', async function() {
            const snapshot = await a11ySnapshot();
            expect(snapshot).to.axContainQuery({ role: 'DisclosureTriangle', expanded: true });
          });

          it('should still be focused on disclosure', async function() {
            const snapshot = await a11ySnapshot();
            expect(snapshot).to.axContainQuery({ role: 'DisclosureTriangle', focused: true });
          });

          describe('pressing Space again', function() {
            beforeEach(async function() {
              await sendKeys({ press: ' ' });
            });
            beforeEach(updateComplete);
            beforeEach(nextFrame);

            it('should be collapsed and focused on disclosure', async function() {
              const snapshot = await a11ySnapshot();
              expect(snapshot).to.axContainQuery({ role: 'DisclosureTriangle', focused: true });
            });
          });
        });

        describe('pressing Enter to expand', function() {
          beforeEach(async function() {
            await sendKeys({ press: 'Enter' });
          });
          beforeEach(updateComplete);
          beforeEach(nextFrame);

          it('should expand disclosure', async function() {
            const snapshot = await a11ySnapshot();
            expect(snapshot).to.axContainQuery({ role: 'DisclosureTriangle', expanded: true, focused: true });
          });

          describe('pressing Enter again', function() {
            beforeEach(async function() {
              await sendKeys({ press: 'Enter' });
            });
            beforeEach(updateComplete);
            beforeEach(nextFrame);

            it('should be collapsed and focused on disclosure', async function() {
              const snapshot = await a11ySnapshot();
              expect(snapshot).to.axContainQuery({ role: 'DisclosureTriangle', focused: true });
            });
          });
        });
      });
    });
  });

  describe('wide container behavior', function() {
    beforeEach(async function() {
      await setViewport({ width: 1680, height: 800 });
      element = await fixture<RhNavigationDrawer>(DRAWER);
      const wrapper = document.querySelector('div');
      wrapper!.style.containerType = 'inline-size';
      wrapper!.style.height = '100%';
    });
    beforeEach(updateComplete);
    beforeEach(nextFrame);

    describe('collapsible behavior', function() {
      describe('with collapsible attribute', function() {
        beforeEach(async function() {
          element.setAttribute('collapsible', '');
        });
        beforeEach(updateComplete);
        beforeEach(nextFrame);

        describe('tabbing to toggle', function() {
          beforeEach(async function() {
            await sendKeys({ press: 'Tab' });
          });

          it('should focus on toggle', async function() {
            const snapshot = await a11ySnapshot();
            expect(document.activeElement).to.equal(element);
            expect(snapshot).to.axContainQuery({ role: 'button', name: 'Collapse navigation', expanded: true });
          });

          describe('pressing Enter', function() {
            beforeEach(async function() {
              await sendKeys({ press: 'Enter' });
            });
            beforeEach(updateComplete);
            beforeEach(nextFrame);

            it('should collapse menu', async function() {
              const snapshot = await a11ySnapshot();
              expect(snapshot).to.axContainQuery({ role: 'button', name: 'Expand navigation' });
            });
          });

          describe('pressing Enter again', function() {
            beforeEach(async function() {
              await sendKeys({ press: 'Enter' });
            });
            beforeEach(updateComplete);
            beforeEach(nextFrame);

            it('should expand disclosure', async function() {
              const snapshot = await a11ySnapshot();
              expect(snapshot).to.axContainQuery({ role: 'button', name: 'Collapse navigation', expanded: true });
            });
          });
        });
      });
    });
  });

  describe('label attribute configuration', function() {
    beforeEach(async function() {
      await setViewport({ width: 768, height: 800 });
      element = await fixture<RhNavigationDrawer>(DRAWER);
    });
    beforeEach(updateComplete);
    beforeEach(nextFrame);

    describe('default menu label', function() {
      it('should default to "Menu" if not specified', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.axContainQuery({ role: 'DisclosureTriangle', name: 'Menu' });
      });
    });

    describe('menu-label attribute', function() {
      beforeEach(async function() {
        element.setAttribute('menu-label', 'Primary Navigation');
      });
      beforeEach(updateComplete);
      beforeEach(nextFrame);

      it('should use custom menu label', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.axContainQuery({ role: 'DisclosureTriangle', name: 'Primary Navigation' });
      });
    });

    describe('accessible label attributes', function() {
      beforeEach(async function() {
        element = await fixture<RhNavigationDrawer>(DRAWER);
        element.setAttribute('accessible-label-collapsed', 'Open menu');
        element.setAttribute('accessible-label-expanded', 'Close menu');
      });
      beforeEach(updateComplete);
      beforeEach(nextFrame);

      it('should accept custom accessible labels', function() {
        expect(element.accessibleLabelCollapsed).to.equal('Open menu');
        expect(element.accessibleLabelExpanded).to.equal('Close menu');
      });
    });
  });

  describe('container observation', function() {
    beforeEach(async function() {
      element = await fixture<RhNavigationDrawer>(DRAWER);
      // Create container and set it up
      const container = document.createElement('div');
      container.id = 'test-container';
      document.body.appendChild(container);

      element.setAttribute('container', '#test-container');
    });
    beforeEach(updateComplete);
    beforeEach(nextFrame);

    afterEach(function() {
      // Clean up container
      const container = document.getElementById('test-container');
      if (container) {
        document.body.removeChild(container);
      }
      element.removeAttribute('container');
    });

    it('should accept container selector', function() {
      expect(element.container).to.equal('#test-container');
    });
  });
});
