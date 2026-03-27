import { expect, fixture, nextFrame } from '@open-wc/testing';
import { sendKeys, setViewport } from '@web/test-runner-commands';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { html } from 'lit';

import { RhDrawer } from '@rhds/elements/rh-drawer/rh-drawer.js';

function press(key: string) {
  return async function() {
    await sendKeys({ press: key });
  };
}

const DRAWER_COLLAPSIBLE = html`
  <rh-drawer open>
    <h3 slot="header">Panel Header</h3>
    <nav slot="body">Panel Body</nav>
    <p slot="footer">Panel Footer</p>
    <div>
      <h3>Page Content</h3>
      <p>Main page text</p>
    </div>
  </rh-drawer>
`;

const DRAWER_WITH_EXPAND = html`
  <rh-drawer open expand="full-viewport">
    <h3 slot="header">Panel Header</h3>
    <nav slot="body">Panel Body</nav>
    <p slot="footer">Panel Footer</p>
    <div>
      <h3>Page Content</h3>
    </div>
  </rh-drawer>
`;

const DRAWER_WITH_TRIGGER = html`
  <div>
    <button id="trigger" aria-controls="drawer">Toggle Drawer</button>
    <rh-drawer id="drawer" variant="fixed" trigger-id="trigger">
      <h3 slot="header">Panel Header</h3>
      <nav slot="body">Panel Body</nav>
      <p slot="footer">Panel Footer</p>
    </rh-drawer>
  </div>
`;

let element: RhDrawer;

describe('<rh-drawer>', function() {
  describe('simply instantiating', function() {
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-drawer')).to.be.an.instanceof(RhDrawer);
    });

    it('should upgrade', async function() {
      element = await fixture<RhDrawer>(DRAWER_COLLAPSIBLE);
      const klass = customElements.get('rh-drawer');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhDrawer);
    });
  });

  describe('accessibility', function() {
    describe('default collapsible variant', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(DRAWER_COLLAPSIBLE);
      });
      beforeEach(async () => await element.updateComplete);

      it('is accessible', async function() {
        await expect(element).to.be.accessible();
      });
    });

    describe('with expand="full-viewport"', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(DRAWER_WITH_EXPAND);
      });
      beforeEach(async () => await element.updateComplete);

      it('is accessible', async function() {
        await expect(element).to.be.accessible();
      });

      it('should expose expand label', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Enter full viewport' });
      });
    });

    describe('fixed variant with external trigger', function() {
      let container: HTMLDivElement;

      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(DRAWER_WITH_TRIGGER);
        element = container.querySelector('rh-drawer')!;
      });
      beforeEach(async () => await element.updateComplete);

      it('is accessible', async function() {
        await expect(element).to.be.accessible();
      });
    });

    describe('position inline-end', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(DRAWER_COLLAPSIBLE);
        element.position = 'inline-end';
      });
      beforeEach(async () => await element.updateComplete);

      it('is accessible', async function() {
        await expect(element).to.be.accessible();
      });
    });

    describe('variant changes preserve accessibility', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(DRAWER_COLLAPSIBLE);
      });
      beforeEach(async () => await element.updateComplete);

      it('overlay is accessible', async function() {
        element.variant = 'overlay';
        await element.updateComplete;
        await expect(element).to.be.accessible();
      });
    });
  });

  describe('collapsible toggle dispatches events', function() {
    beforeEach(async function() {
      element = await fixture<RhDrawer>(DRAWER_COLLAPSIBLE);
    });
    beforeEach(async () => await element.updateComplete);

    describe('closing via collapse toggle', function() {
      beforeEach(press('Tab'));
      beforeEach(press('Enter'));
      beforeEach(async () => await element.updateComplete);

      it('should show expand label', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Expand panel' });
        expect(snapshot).to.not.have.axQuery({ name: 'Collapse panel' });
      });
    });

    describe('reopening via collapse toggle', function() {
      beforeEach(async function() {
        element.open = false;
        await element.updateComplete;
      });
      beforeEach(press('Tab'));
      beforeEach(press('Enter'));
      beforeEach(async () => await element.updateComplete);

      it('should show collapse label', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Collapse panel' });
        expect(snapshot).to.not.have.axQuery({ name: 'Expand panel' });
      });
    });
  });

  describe('keyboard interaction', function() {
    describe('pressing Escape when panel role is dialog', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(html`
          <rh-drawer variant="overlay" open trigger-id="none">
            <h3 slot="header">Header</h3>
            <nav slot="body">Body</nav>
          </rh-drawer>
        `);
      });
      beforeEach(async () => await element.updateComplete);
      beforeEach(press('Tab'));
      beforeEach(press('Escape'));
      beforeEach(async () => await element.updateComplete);
      beforeEach(async () => await element.updateComplete);

      it('should close the drawer', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.not.have.axQuery({ name: 'Close drawer' });
      });
    });
  });

  describe('public API dispatches events', function() {
    beforeEach(async function() {
      element = await fixture<RhDrawer>(DRAWER_COLLAPSIBLE);
    });
    beforeEach(async () => await element.updateComplete);

    describe('show()', function() {
      beforeEach(async function() {
        element.open = false;
        await element.updateComplete;
        element.show();
        await element.updateComplete;
      });

      it('should show collapse label', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Collapse panel' });
      });
    });

    describe('close()', function() {
      beforeEach(async function() {
        element.close();
        await element.updateComplete;
      });

      it('should show expand label', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Expand panel' });
        expect(snapshot).to.not.have.axQuery({ name: 'Collapse panel' });
      });
    });

    describe('toggle()', function() {
      describe('when open', function() {
        beforeEach(async function() {
          element.toggle();
          await element.updateComplete;
        });

        it('should show expand label', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).to.have.axQuery({ name: 'Expand panel' });
        });
      });

      describe('when closed', function() {
        beforeEach(async function() {
          element.open = false;
          await element.updateComplete;
          element.toggle();
          await element.updateComplete;
        });

        it('should show collapse label', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).to.have.axQuery({ name: 'Collapse panel' });
        });
      });
    });
  });

  describe('closed by default', function() {
    beforeEach(async function() {
      element = await fixture<RhDrawer>(html`
        <rh-drawer>
          <h3 slot="header">Header</h3>
          <nav slot="body">Body</nav>
          <div><p>Page content</p></div>
        </rh-drawer>
      `);
    });
    beforeEach(async () => await element.updateComplete);

    it('should not be open', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.have.axQuery({ name: 'Expand panel' });
      expect(snapshot).to.not.have.axQuery({ name: 'Collapse panel' });
    });

    it('is accessible', async function() {
      await expect(element).to.be.accessible();
    });
  });

  describe('fixed variant with trigger', function() {
    let container: HTMLDivElement;

    beforeEach(async function() {
      container = await fixture<HTMLDivElement>(DRAWER_WITH_TRIGGER);
      element = container.querySelector('rh-drawer')!;
    });
    beforeEach(async () => await element.updateComplete);

    it('should not show panel content when closed', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.not.have.axQuery({ name: 'Collapse panel' });
      expect(snapshot).to.not.have.axQuery({ name: 'Close drawer' });
    });

    describe('opening via external trigger', function() {
      beforeEach(press('Tab'));
      beforeEach(press('Enter'));
      beforeEach(async () => await element.updateComplete);
      beforeEach(async () => await element.updateComplete);

      it('should move focus to close button', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Close drawer', focused: true });
      });

      it('should not show collapse toggle', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.not.have.axQuery({ name: 'Collapse panel' });
      });
    });
  });

  describe('overlay variant with close button', function() {
    beforeEach(async function() {
      element = await fixture<RhDrawer>(html`
        <rh-drawer variant="overlay" open trigger-id="none">
          <h3 slot="header">Panel Header</h3>
          <nav slot="body">Panel Body</nav>
        </rh-drawer>
      `);
    });
    beforeEach(async () => await element.updateComplete);

    it('should show close button in a11y tree', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.have.axQuery({ name: 'Close drawer' });
    });

    it('should not show collapse toggle', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.not.have.axQuery({ name: 'Collapse panel' });
    });

    describe('closing via close button', function() {
      beforeEach(press('Tab'));
      beforeEach(press('Enter'));
      beforeEach(async () => await element.updateComplete);
      beforeEach(async () => await element.updateComplete);

      it('should hide close button', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.not.have.axQuery({ name: 'Close drawer' });
      });
    });
  });

  describe('collapsible with expand', function() {
    beforeEach(async function() {
      element = await fixture<RhDrawer>(DRAWER_WITH_EXPAND);
    });
    beforeEach(async () => await element.updateComplete);

    it('should expose both collapse toggle and expand button', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.have.axQuery({ name: 'Collapse panel' });
      expect(snapshot).to.have.axQuery({ name: 'Enter full viewport' });
    });

    describe('closing the drawer', function() {
      beforeEach(press('Tab'));
      beforeEach(press('Tab'));
      beforeEach(press('Enter'));
      beforeEach(async () => await element.updateComplete);

      it('should change collapse label to Expand panel', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Expand panel' });
        expect(snapshot).to.not.have.axQuery({ name: 'Collapse panel' });
      });
    });
  });

  describe('full-viewport mode', function() {
    beforeEach(async function() {
      element = await fixture<RhDrawer>(DRAWER_WITH_EXPAND);
    });
    beforeEach(async () => await element.updateComplete);

    describe('activating expand button', function() {
      beforeEach(press('Tab'));
      beforeEach(press('Enter'));
      beforeEach(async () => await element.updateComplete);

      it('should have focus on exit full viewport button', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Exit full viewport', focused: true });
      });

      it('should show Exit full viewport label', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Exit full viewport' });
        expect(snapshot).to.not.have.axQuery({ name: 'Enter full viewport' });
      });

      describe('deactivating full viewport', function() {
        beforeEach(press('Enter'));
        beforeEach(async () => await element.updateComplete);

        it('should have focus on enter full viewport button', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).to.have.axQuery({ name: 'Enter full viewport', focused: true });
        });

        it('should restore Enter full viewport label', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).to.have.axQuery({ name: 'Enter full viewport' });
          expect(snapshot).to.not.have.axQuery({ name: 'Exit full viewport' });
        });
      });
    });
  });

  describe('resizable is noop for auto', function() {
    it('should not expose resize handle for auto variant', async function() {
      element = await fixture<RhDrawer>(html`
        <rh-drawer variant="auto" panel="resizable" open>
          <h3 slot="header">Header</h3>
          <nav slot="body">Body</nav>
          <div><p>Content</p></div>
        </rh-drawer>
      `);
      await element.updateComplete;
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.not.have.axQuery({ name: 'Resize panel' });
    });

    it('should expose resize handle for overlay variant', async function() {
      element = await fixture<RhDrawer>(html`
        <rh-drawer variant="overlay" panel="resizable" open trigger-id="none">
          <h3 slot="header">Header</h3>
          <nav slot="body">Body</nav>
        </rh-drawer>
      `);
      await element.updateComplete;
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.have.axQuery({ name: 'Resize panel' });
    });
  });

  describe('fixed resizable with close button', function() {
    let container: HTMLDivElement;

    beforeEach(async function() {
      container = await fixture<HTMLDivElement>(html`
        <div>
          <button id="trigger" aria-controls="drawer">Toggle</button>
          <rh-drawer id="drawer" variant="fixed" panel="resizable"
                     trigger-id="trigger" open>
            <h3 slot="header">Header</h3>
            <nav slot="body">Body</nav>
          </rh-drawer>
        </div>
      `);
      element = container.querySelector('rh-drawer')!;
    });
    beforeEach(async () => await element.updateComplete);

    it('should expose both close button and resize handle', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.have.axQuery({ name: 'Close drawer' });
      expect(snapshot).to.have.axQuery({ name: 'Resize panel' });
    });

    describe('closing via close button', function() {
      beforeEach(press('Tab'));
      beforeEach(press('Enter'));
      beforeEach(async () => await element.updateComplete);
      beforeEach(async () => await element.updateComplete);

      it('should hide close button', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.not.have.axQuery({ name: 'Close drawer' });
      });
    });
  });

  describe('overlay resizable variant', function() {
    beforeEach(async function() {
      element = await fixture<RhDrawer>(html`
        <rh-drawer variant="overlay" panel="resizable" open trigger-id="none">
          <h3 slot="header">Panel Header</h3>
          <nav slot="body">Panel Body</nav>
        </rh-drawer>
      `);
    });
    beforeEach(async () => await element.updateComplete);

    it('is accessible', async function() {
      await expect(element).to.be.accessible();
    });

    it('should expose resize handle in a11y tree', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.have.axQuery({ name: 'Resize panel', role: 'separator' });
    });

    it('should show close button alongside resize handle', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.have.axQuery({ name: 'Close drawer' });
      expect(snapshot).to.have.axQuery({ name: 'Resize panel' });
    });

    describe('closing via close button', function() {
      beforeEach(press('Tab'));
      beforeEach(press('Enter'));
      beforeEach(async () => await element.updateComplete);
      beforeEach(async () => await element.updateComplete);

      it('should hide close button', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.not.have.axQuery({ name: 'Close drawer' });
      });
    });
  });

  // Resize handle keyboard tests are skipped because sendKeys for
  // ArrowRight/Home on a fixed-position panel conflicts with the
  // test runner's browser automation.
  describe.skip('resize handle keyboard interaction', function() {
    let container: HTMLDivElement;

    beforeEach(async function() {
      container = await fixture<HTMLDivElement>(html`
        <div>
          <button id="trigger" aria-controls="drawer">Toggle</button>
          <rh-drawer id="drawer" variant="fixed" panel="resizable"
                     trigger-id="trigger" open>
            <h3 slot="header">Header</h3>
            <nav slot="body">Body</nav>
          </rh-drawer>
        </div>
      `);
      element = container.querySelector('rh-drawer')!;
    });
    beforeEach(async () => await element.updateComplete);

    describe('tabbing to resize handle', function() {
      beforeEach(press('Tab'));
      beforeEach(press('Tab'));
      beforeEach(press('Tab'));

      it('should allow resize handle to receive focus', function() {
        const handle = element.shadowRoot?.querySelector('#resize-handle');
        expect(element.shadowRoot?.activeElement).to.equal(handle);
      });

      describe('pressing ArrowRight', function() {
        beforeEach(press('ArrowRight'));
        beforeEach(async () => await element.updateComplete);

        it('should increase panel width', function() {
          const width = element.shadowRoot?.querySelector('#panel')?.getBoundingClientRect().width ?? 0;
          expect(width).to.be.greaterThan(RhDrawer.minPanelWidth);
        });

        describe('pressing ArrowLeft', function() {
          beforeEach(press('ArrowLeft'));
          beforeEach(async () => await element.updateComplete);

          it('should decrease panel width', function() {
            const width = element.shadowRoot?.querySelector('#panel')?.getBoundingClientRect().width ?? 0;
            expect(width).to.be.at.most(RhDrawer.minPanelWidth);
          });
        });
      });

      describe('pressing Home', function() {
        beforeEach(press('Home'));
        beforeEach(async () => await element.updateComplete);

        it('should set minimum width', function() {
          const width = element.shadowRoot?.querySelector('#panel')?.getBoundingClientRect().width ?? 0;
          expect(width).to.be.at.most(RhDrawer.minPanelWidth + 1);
        });
      });

      describe('pressing Enter', function() {
        beforeEach(press('Enter'));
        beforeEach(async () => await element.updateComplete);

        it('should close the drawer', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).to.not.have.axQuery({ name: 'Close drawer' });
        });
      });
    });
  });

  // Chrome's a11y tree does not consistently surface dialog/complementary
  // roles on shadow DOM elements, so panel role is verified via DOM attribute.
  describe('panel ARIA role', function() {
    describe('fixed variant', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(html`
          <rh-drawer variant="fixed" open trigger-id="none">
            <nav slot="body">Body</nav>
          </rh-drawer>
        `);
      });
      beforeEach(async () => await element.updateComplete);

      it('should have role dialog', function() {
        const panel = element.shadowRoot?.querySelector('#panel');
        expect(panel?.getAttribute('role')).to.equal('dialog');
      });
    });

    describe('overlay variant', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(html`
          <rh-drawer variant="overlay" open>
            <nav slot="body">Body</nav>
            <div><p>Content</p></div>
          </rh-drawer>
        `);
      });
      beforeEach(async () => await element.updateComplete);

      it('should have role dialog', function() {
        const panel = element.shadowRoot?.querySelector('#panel');
        expect(panel?.getAttribute('role')).to.equal('dialog');
      });
    });

    describe('switching variant at runtime', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(html`
          <rh-drawer variant="overlay" open>
            <nav slot="body">Body</nav>
            <div><p>Content</p></div>
          </rh-drawer>
        `);
      });
      beforeEach(async () => await element.updateComplete);

      it('should switch to dialog for fixed variant', async function() {
        element.variant = 'fixed';
        await element.updateComplete;
        const panel = element.shadowRoot?.querySelector('#panel');
        expect(panel?.getAttribute('role')).to.equal('dialog');
      });
    });
  });

  describe('narrow mode behavior', function() {
    describe('auto variant in narrow container', function() {
      let container: HTMLDivElement;

      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(html`
          <div style="inline-size: 500px;">
            <rh-drawer variant="auto" open>
              <h3 slot="header">Header</h3>
              <nav slot="body">Body</nav>
              <div><p>Content</p></div>
            </rh-drawer>
          </div>
        `);
        element = container.querySelector('rh-drawer')!;
        await element.updateComplete;
        await element.updateComplete;
      });

      it('should show narrow toggle with correct label', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Collapse panel' });
        expect(element.shadowRoot?.querySelector('#collapse-toggle')).to.be.null;
      });

      it('should show close button in panel', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Close drawer' });
      });

      describe('activating narrow toggle', function() {
        beforeEach(press('Tab'));
        beforeEach(press('Tab'));
        beforeEach(press('Enter'));
        beforeEach(async () => await element.updateComplete);

        it('should hide close button', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).to.not.have.axQuery({ name: 'Close drawer' });
        });
      });
    });

    describe('overlay variant in narrow container', function() {
      let container: HTMLDivElement;

      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(html`
          <div style="inline-size: 500px;">
            <rh-drawer variant="overlay" open>
              <h3 slot="header">Header</h3>
              <nav slot="body">Body</nav>
              <div><p>Content</p></div>
            </rh-drawer>
          </div>
        `);
        element = container.querySelector('rh-drawer')!;
        await element.updateComplete;
        await element.updateComplete;
      });

      it('should show narrow toggle with correct label', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Collapse panel' });
        expect(element.shadowRoot?.querySelector('#collapse-toggle')).to.be.null;
      });

      it('should show close button in panel', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Close drawer' });
      });
    });
  });

  describe('storage-key persistence', function() {
    const STORAGE_KEY = 'test-drawer';

    afterEach(function() {
      sessionStorage.removeItem(`${STORAGE_KEY}:open`);
      sessionStorage.removeItem(`${STORAGE_KEY}:panel`);
      sessionStorage.removeItem(`${STORAGE_KEY}:panelWidth`);
    });

    describe('persisting open state', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(html`
          <rh-drawer storage-key="${STORAGE_KEY}" open>
            <nav slot="body">Body</nav>
            <div><p>Content</p></div>
          </rh-drawer>
        `);
      });
      beforeEach(async () => await element.updateComplete);
      beforeEach(async function() {
        element.close();
        await element.updateComplete;
      });
      beforeEach(nextFrame);

      it('should write false to sessionStorage', function() {
        expect(sessionStorage.getItem(`${STORAGE_KEY}:open`)).to.equal('false');
      });
    });

    describe('restoring open state', function() {
      beforeEach(function() {
        sessionStorage.setItem(`${STORAGE_KEY}:open`, 'true');
      });
      beforeEach(async function() {
        element = await fixture<RhDrawer>(html`
          <rh-drawer storage-key="${STORAGE_KEY}">
            <nav slot="body">Body</nav>
            <div><p>Content</p></div>
          </rh-drawer>
        `);
      });
      beforeEach(async () => await element.updateComplete);
      beforeEach(async () => await element.updateComplete);

      it('should restore as open', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Collapse panel' });
      });
    });

    describe('restoring invalid panel value', function() {
      beforeEach(function() {
        sessionStorage.setItem(`${STORAGE_KEY}:panel`, 'banana');
      });
      beforeEach(async function() {
        element = await fixture<RhDrawer>(html`
          <rh-drawer storage-key="${STORAGE_KEY}" open>
            <nav slot="body">Body</nav>
            <div><p>Content</p></div>
          </rh-drawer>
        `);
      });
      beforeEach(async () => await element.updateComplete);

      it('should not apply invalid panel value', function() {
        expect(element.panel).to.not.equal('banana');
      });
    });

    describe('restoring NaN panelWidth', function() {
      beforeEach(function() {
        sessionStorage.setItem(`${STORAGE_KEY}:panelWidth`, 'notanumber');
      });
      beforeEach(async function() {
        element = await fixture<RhDrawer>(html`
          <rh-drawer storage-key="${STORAGE_KEY}" variant="fixed" panel="resizable"
                     trigger-id="none" open>
            <nav slot="body">Body</nav>
          </rh-drawer>
        `);
      });
      beforeEach(async () => await element.updateComplete);

      it('should not set panel width', function() {
        const panel = element.shadowRoot?.querySelector('#panel') as HTMLElement;
        expect(panel?.style.getPropertyValue('--_panel-width')).to.equal('');
      });
    });

    describe('restoring panelWidth below minimum', function() {
      beforeEach(function() {
        sessionStorage.setItem(`${STORAGE_KEY}:panelWidth`, '100');
      });
      beforeEach(async function() {
        element = await fixture<RhDrawer>(html`
          <rh-drawer storage-key="${STORAGE_KEY}" variant="fixed" panel="resizable"
                     trigger-id="none" open>
            <nav slot="body">Body</nav>
          </rh-drawer>
        `);
      });
      beforeEach(async () => await element.updateComplete);

      it('should not set panel width', function() {
        const panel = element.shadowRoot?.querySelector('#panel') as HTMLElement;
        expect(panel?.style.getPropertyValue('--_panel-width')).to.equal('');
      });
    });
  });

  describe('RTL behavior', function() {
    describe('auto variant in RTL', function() {
      let container: HTMLDivElement;

      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(html`
          <div dir="rtl">
            <rh-drawer open>
              <h3 slot="header">Header</h3>
              <nav slot="body">Body</nav>
              <div><p>Content</p></div>
            </rh-drawer>
          </div>
        `);
        element = container.querySelector('rh-drawer')!;
      });
      beforeEach(async () => await element.updateComplete);

      it('is accessible in RTL', async function() {
        await expect(element).to.be.accessible();
      });

      it('should have panel role', function() {
        const panel = element.shadowRoot?.querySelector('#panel');
        expect(panel?.getAttribute('role')).to.be.oneOf(['dialog', 'complementary']);
      });
    });

    describe('position inline-end in RTL', function() {
      let container: HTMLDivElement;

      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(html`
          <div dir="rtl">
            <rh-drawer position="inline-end" open>
              <h3 slot="header">Header</h3>
              <nav slot="body">Body</nav>
              <div><p>Content</p></div>
            </rh-drawer>
          </div>
        `);
        element = container.querySelector('rh-drawer')!;
      });
      beforeEach(async () => await element.updateComplete);

      it('is accessible in RTL with inline-end', async function() {
        await expect(element).to.be.accessible();
      });
    });
  });

  describe('flow variant with overlay-threshold', function() {
    beforeEach(async function() {
      element = await fixture<RhDrawer>(html`
        <rh-drawer variant="flow" overlay-threshold="xl"
                   trigger-id="none" open>
          <nav slot="body">Body</nav>
        </rh-drawer>
      `);
    });
    beforeEach(async () => await element.updateComplete);

    describe('below threshold', function() {
      beforeEach(async function() {
        await setViewport({ width: 1200, height: 800 });
      });
      beforeEach(async () => await element.updateComplete);
      beforeEach(nextFrame);

      it('should have role dialog', function() {
        const panel = element.shadowRoot?.querySelector('#panel');
        expect(panel?.getAttribute('role')).to.equal('dialog');
      });

      it('should not have flow-wide class', function() {
        const container = element.shadowRoot?.querySelector('#container');
        expect(container?.classList.contains('flow-wide')).to.be.false;
      });
    });

    describe('at or above threshold', function() {
      beforeEach(async function() {
        await setViewport({ width: 1440, height: 800 });
      });
      beforeEach(async () => await element.updateComplete);
      beforeEach(nextFrame);

      it('should have role complementary', function() {
        const panel = element.shadowRoot?.querySelector('#panel');
        expect(panel?.getAttribute('role')).to.equal('complementary');
      });

      it('should have flow-wide class', function() {
        const container = element.shadowRoot?.querySelector('#container');
        expect(container?.classList.contains('flow-wide')).to.be.true;
      });
    });
  });
});
