import { expect, fixture, nextFrame } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { html } from 'lit';

import { RhDrawer } from '@rhds/elements/rh-drawer/rh-drawer.js';

function press(key: string) {
  return async function() {
    await sendKeys({ press: key });
  };
}

const INLINE_DRAWER = html`
  <rh-drawer collapsible open>
    <h3>Panel Header</h3>
    <nav>Panel Navigation</nav>
  </rh-drawer>
`;

const STATIC_INLINE_DRAWER = html`
  <div style="container-type: inline-size; width: 1200px;">
    <rh-drawer open>
      <h3>Panel Header</h3>
      <nav>Panel Navigation</nav>
    </rh-drawer>
  </div>
`;

const OVERLAY_DRAWER_WITH_TRIGGER = html`
  <div>
    <button id="trigger" aria-controls="drawer">Toggle Drawer</button>
    <rh-drawer id="drawer" trigger-id="trigger">
      <h3>Panel Header</h3>
      <nav>Panel Navigation</nav>
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
      element = await fixture<RhDrawer>(INLINE_DRAWER);
      const klass = customElements.get('rh-drawer');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhDrawer);
    });
  });

  describe('accessibility', function() {
    describe('inline variant', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(INLINE_DRAWER);
      });
      beforeEach(async () => await element.updateComplete);

      it('is accessible', async function() {
        await expect(element).to.be.accessible();
      });
    });

    describe('overlay variant with external trigger', function() {
      let container: HTMLDivElement;

      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(OVERLAY_DRAWER_WITH_TRIGGER);
        element = container.querySelector('rh-drawer')!;
      });
      beforeEach(async () => await element.updateComplete);

      it('is accessible', async function() {
        await expect(element).to.be.accessible();
      });
    });

    describe('inline end', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(INLINE_DRAWER);
        element.inline = 'end';
      });
      beforeEach(async () => await element.updateComplete);

      it('is accessible', async function() {
        await expect(element).to.be.accessible();
      });
    });

  });

  describe('inline variant behavior', function() {
    beforeEach(async function() {
      element = await fixture<RhDrawer>(INLINE_DRAWER);
    });
    beforeEach(async () => await element.updateComplete);

    it('should show collapse toggle', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.have.axQuery({ name: 'Collapse panel' });
    });

    it('should not show close button', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.not.have.axQuery({ name: 'Close drawer' });
    });

    it('should have role complementary', function() {
      const panel = element.shadowRoot?.querySelector('#panel');
      expect(panel?.getAttribute('role')).to.equal('complementary');
    });

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

  describe('static inline variant (no collapsible)', function() {
    let container: HTMLDivElement;

    beforeEach(async function() {
      container = await fixture<HTMLDivElement>(STATIC_INLINE_DRAWER);
      element = container.querySelector('rh-drawer')!;
    });
    beforeEach(async () => await element.updateComplete);

    it('should not show collapse toggle', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.not.have.axQuery({ name: 'Collapse panel' });
      expect(snapshot).to.not.have.axQuery({ name: 'Expand panel' });
    });

    it('should not show close button', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.not.have.axQuery({ name: 'Close drawer' });
    });

    it('should have role complementary', function() {
      const panel = element.shadowRoot?.querySelector('#panel');
      expect(panel?.getAttribute('role')).to.equal('complementary');
    });

    it('should render slotted content', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.have.axQuery({ name: 'Panel Header' });
    });

    it('is accessible', async function() {
      await expect(element).to.be.accessible();
    });
  });

  describe('overlay variant behavior', function() {
    let container: HTMLDivElement;

    beforeEach(async function() {
      container = await fixture<HTMLDivElement>(html`
        <div>
          <button id="trigger" aria-controls="drawer">Toggle</button>
          <rh-drawer id="drawer" open trigger-id="trigger">
            <h3>Header</h3>
            <nav>Body</nav>
          </rh-drawer>
        </div>
      `);
      element = container.querySelector('rh-drawer')!;
    });
    beforeEach(async () => await element.updateComplete);

    it('should show close button', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.have.axQuery({ name: 'Close drawer' });
    });

    it('should not show collapse toggle', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.not.have.axQuery({ name: 'Collapse panel' });
    });

    it('should have role dialog', function() {
      const panel = element.shadowRoot?.querySelector('#panel');
      expect(panel?.getAttribute('role')).to.equal('dialog');
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

  describe('keyboard interaction', function() {
    describe('pressing Escape on overlay variant', function() {
      let container: HTMLDivElement;

      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(html`
          <div>
            <button id="trigger" aria-controls="drawer">Toggle</button>
            <rh-drawer id="drawer" open trigger-id="trigger">
              <h3>Header</h3>
              <nav>Body</nav>
            </rh-drawer>
          </div>
        `);
        element = container.querySelector('rh-drawer')!;
      });
      beforeEach(async () => await element.updateComplete);
      beforeEach(async function() {
        element.shadowRoot?.querySelector<HTMLElement>('#close-button')?.focus();
      });
      beforeEach(press('Escape'));
      beforeEach(async () => await element.updateComplete);
      beforeEach(async () => await element.updateComplete);

      it('should close the drawer', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.not.have.axQuery({ name: 'Close drawer' });
      });
    });

    describe('pressing Escape on collapsible inline variant', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(INLINE_DRAWER);
      });
      beforeEach(async () => await element.updateComplete);
      beforeEach(async function() {
        element.shadowRoot?.querySelector<HTMLElement>('#collapse-toggle')?.focus();
      });
      beforeEach(press('Escape'));
      beforeEach(async () => await element.updateComplete);

      it('should NOT close the drawer', function() {
        expect(element.open).to.be.true;
      });
    });

    describe('pressing Escape on static inline variant', function() {
      beforeEach(async function() {
        const container = await fixture<HTMLDivElement>(STATIC_INLINE_DRAWER);
        element = container.querySelector('rh-drawer')!;
      });
      beforeEach(async () => await element.updateComplete);
      beforeEach(async function() {
        element.shadowRoot?.querySelector<HTMLElement>('#panel')?.focus();
      });
      beforeEach(press('Escape'));
      beforeEach(async () => await element.updateComplete);

      it('should NOT close the drawer', function() {
        expect(element.open).to.be.true;
      });
    });
  });

  describe('public API dispatches events', function() {
    beforeEach(async function() {
      element = await fixture<RhDrawer>(INLINE_DRAWER);
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
    describe('collapsible inline variant', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(html`
          <rh-drawer collapsible>
            <h3>Header</h3>
            <nav>Body</nav>
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
  });

  describe('overlay variant with trigger', function() {
    let container: HTMLDivElement;

    beforeEach(async function() {
      container = await fixture<HTMLDivElement>(OVERLAY_DRAWER_WITH_TRIGGER);
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

  // Playwright's page.accessibility.snapshot() flattens landmark and dialog
  // roles — their children are promoted directly under WebArea. Widget roles
  // (menu, menuitem, spinbutton) do appear. Because of this, role and
  // aria-modal checks use getAttribute on the shadow DOM #panel element.
  // The collapsible overlap test uses axe-core (`is accessible`) to verify
  // the role/aria-modal combination is valid.
  describe('panel ARIA role', function() {
    describe('overlay variant', function() {
      let container: HTMLDivElement;

      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(html`
          <div>
            <button id="trigger" aria-controls="drawer">Toggle</button>
            <rh-drawer id="drawer" open trigger-id="trigger">
              <nav>Body</nav>
            </rh-drawer>
          </div>
        `);
        element = container.querySelector('rh-drawer')!;
      });
      beforeEach(async () => await element.updateComplete);

      it('should have role dialog', function() {
        const panel = element.shadowRoot?.querySelector('#panel');
        expect(panel?.getAttribute('role')).to.equal('dialog');
      });

      it('should have aria-modal true', function() {
        const panel = element.shadowRoot?.querySelector('#panel');
        expect(panel?.getAttribute('aria-modal')).to.equal('true');
      });
    });

    describe('inline variant', function() {
      let container: HTMLDivElement;

      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(html`
          <div style="container-type: inline-size; width: 1200px;">
            <rh-drawer open>
              <nav>Body</nav>
            </rh-drawer>
          </div>
        `);
        element = container.querySelector('rh-drawer')!;
      });
      beforeEach(async () => await element.updateComplete);

      it('should have role complementary', function() {
        const panel = element.shadowRoot?.querySelector('#panel');
        expect(panel?.getAttribute('role')).to.equal('complementary');
      });

      it('should not have aria-modal', function() {
        const panel = element.shadowRoot?.querySelector('#panel');
        expect(panel?.hasAttribute('aria-modal')).to.be.false;
      });
    });

    describe('collapsible overlap variant', function() {
      let container: HTMLDivElement;

      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(html`
          <div style="container-type: inline-size; width: 600px;">
            <rh-drawer collapsible>
              <nav>Body</nav>
            </rh-drawer>
          </div>
        `);
        element = container.querySelector('rh-drawer')!;
      });
      beforeEach(async () => await element.updateComplete);
      beforeEach(async () => await nextFrame());
      beforeEach(async () => await nextFrame());
      beforeEach(async function() {
        element.show();
        await element.updateComplete;
        await element.updateComplete;
      });

      it('should have role dialog', function() {
        const panel = element.shadowRoot?.querySelector('#panel');
        expect(panel?.getAttribute('role')).to.equal('dialog');
      });

      it('should have aria-modal true', function() {
        const panel = element.shadowRoot?.querySelector('#panel');
        expect(panel?.getAttribute('aria-modal')).to.equal('true');
      });

      it('is accessible', async function() {
        await expect(element).to.be.accessible();
      });
    });
  });

  describe('RTL behavior', function() {
    describe('inline variant in RTL', function() {
      let container: HTMLDivElement;

      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(html`
          <div dir="rtl" style="container-type: inline-size; width: 1200px;">
            <rh-drawer open>
              <h3>Header</h3>
              <nav>Body</nav>
            </rh-drawer>
          </div>
        `);
        element = container.querySelector('rh-drawer')!;
      });
      beforeEach(async () => await element.updateComplete);

      it('is accessible in RTL', async function() {
        await expect(element).to.be.accessible();
      });

      it('should have complementary role', function() {
        const panel = element.shadowRoot?.querySelector('#panel');
        expect(panel?.getAttribute('role')).to.equal('complementary');
      });
    });

    describe('inline end in RTL', function() {
      let container: HTMLDivElement;

      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(html`
          <div dir="rtl" style="container-type: inline-size; width: 1200px;">
            <rh-drawer inline="end" open>
              <h3>Header</h3>
              <nav>Body</nav>
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

  describe('cancelable events', function() {
    beforeEach(async function() {
      element = await fixture<RhDrawer>(html`
        <rh-drawer>
          <nav>Body</nav>
        </rh-drawer>
      `);
    });
    beforeEach(async () => await element.updateComplete);

    it('should prevent opening when open event is cancelled', async function() {
      element.addEventListener('open', (e: Event) => e.preventDefault(), { once: true });
      element.show();
      await element.updateComplete;
      await element.updateComplete;
      expect(element.open).to.be.false;
    });

    it('should prevent closing when close event is cancelled', async function() {
      element.open = true;
      await element.updateComplete;
      await element.updateComplete;
      element.addEventListener('close', (e: Event) => e.preventDefault(), { once: true });
      element.close();
      await element.updateComplete;
      await element.updateComplete;
      expect(element.open).to.be.true;
    });
  });

  describe('scroll lock', function() {
    let container: HTMLDivElement;

    afterEach(function() {
      document.body.style.overflow = '';
    });

    describe('overlay open', function() {
      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(html`
          <div>
            <button id="trigger" aria-controls="drawer">Toggle</button>
            <rh-drawer id="drawer" trigger-id="trigger">
              <nav>Body</nav>
            </rh-drawer>
          </div>
        `);
        element = container.querySelector('rh-drawer')!;
        await element.updateComplete;
        element.show();
        await element.updateComplete;
        await element.updateComplete;
      });

      it('should set overflow hidden on document.body', function() {
        expect(document.body.style.overflow).to.equal('hidden');
      });

      describe('then closing', function() {
        beforeEach(async function() {
          element.close();
          await element.updateComplete;
          await element.updateComplete;
        });

        it('should clear overflow on document.body', function() {
          expect(document.body.style.overflow).to.equal('');
        });
      });
    });

    describe('inline variant', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(INLINE_DRAWER);
      });
      beforeEach(async () => await element.updateComplete);

      it('should not set overflow hidden on document.body', function() {
        expect(document.body.style.overflow).to.not.equal('hidden');
      });
    });

    describe('static inline variant', function() {
      let container: HTMLDivElement;

      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(STATIC_INLINE_DRAWER);
        element = container.querySelector('rh-drawer')!;
      });
      beforeEach(async () => await element.updateComplete);

      it('should not set overflow hidden on document.body', function() {
        expect(document.body.style.overflow).to.not.equal('hidden');
      });
    });

    describe('disconnecting while open', function() {
      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(html`
          <div>
            <button id="trigger" aria-controls="drawer">Toggle</button>
            <rh-drawer id="drawer" trigger-id="trigger">
              <nav>Body</nav>
            </rh-drawer>
          </div>
        `);
        element = container.querySelector('rh-drawer')!;
        await element.updateComplete;
        element.show();
        await element.updateComplete;
        await element.updateComplete;
      });

      it('should clear overflow when element is removed', function() {
        expect(document.body.style.overflow).to.equal('hidden');
        element.remove();
        expect(document.body.style.overflow).to.equal('');
      });
    });
  });

  describe('inert handling', function() {
    let container: HTMLDivElement;

    describe('overlay open', function() {
      let sibling: HTMLDivElement;

      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(html`
          <div>
            <div id="sibling">Sibling content</div>
            <rh-drawer id="drawer">
              <nav>Body</nav>
            </rh-drawer>
          </div>
        `);
        element = container.querySelector('rh-drawer')!;
        sibling = container.querySelector('#sibling')!;
        await element.updateComplete;
        element.show();
        await element.updateComplete;
        await element.updateComplete;
      });

      it('should inert sibling elements', function() {
        expect(sibling.inert).to.be.true;
      });

      describe('then closing', function() {
        beforeEach(async function() {
          element.close();
          await element.updateComplete;
          await element.updateComplete;
        });

        it('should restore sibling elements', function() {
          expect(sibling.inert).to.be.false;
        });
      });
    });

    describe('pre-existing inert siblings', function() {
      let priorInert: HTMLDivElement;
      let normalSibling: HTMLDivElement;

      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(html`
          <div>
            <div id="prior-inert" inert>Already inert</div>
            <div id="normal">Normal sibling</div>
            <rh-drawer id="drawer">
              <nav>Body</nav>
            </rh-drawer>
          </div>
        `);
        element = container.querySelector('rh-drawer')!;
        priorInert = container.querySelector('#prior-inert')!;
        normalSibling = container.querySelector('#normal')!;
        await element.updateComplete;
        element.show();
        await element.updateComplete;
        await element.updateComplete;
      });

      it('should not touch pre-existing inert elements', function() {
        expect(priorInert.inert).to.be.true;
      });

      it('should inert non-inert siblings', function() {
        expect(normalSibling.inert).to.be.true;
      });

      describe('then closing', function() {
        beforeEach(async function() {
          element.close();
          await element.updateComplete;
          await element.updateComplete;
        });

        it('should preserve pre-existing inert', function() {
          expect(priorInert.inert).to.be.true;
        });

        it('should restore non-inert siblings', function() {
          expect(normalSibling.inert).to.be.false;
        });
      });
    });

    describe('inline variant', function() {
      let container: HTMLDivElement;

      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(html`
          <div style="container-type: inline-size; width: 1200px;">
            <div id="sibling">Sibling content</div>
            <rh-drawer open>
              <nav>Body</nav>
            </rh-drawer>
          </div>
        `);
        element = container.querySelector('rh-drawer')!;
      });
      beforeEach(async () => await element.updateComplete);

      it('should not inert siblings', function() {
        const sibling = container.querySelector('#sibling') as HTMLElement;
        expect(sibling.inert).to.be.false;
      });
    });

    describe('disconnecting while open', function() {
      let sibling: HTMLDivElement;

      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(html`
          <div>
            <div id="sibling">Sibling content</div>
            <rh-drawer id="drawer">
              <nav>Body</nav>
            </rh-drawer>
          </div>
        `);
        element = container.querySelector('rh-drawer')!;
        sibling = container.querySelector('#sibling')!;
        await element.updateComplete;
        element.show();
        await element.updateComplete;
        await element.updateComplete;
      });

      it('should restore inert when element is removed', function() {
        expect(sibling.inert).to.be.true;
        element.remove();
        expect(sibling.inert).to.be.false;
      });
    });
  });

  describe('click-outside-to-close', function() {
    let container: HTMLDivElement;

    beforeEach(async function() {
      container = await fixture<HTMLDivElement>(html`
        <div>
          <div id="outside">Outside content</div>
          <rh-drawer id="drawer">
            <nav>Body</nav>
          </rh-drawer>
        </div>
      `);
      element = container.querySelector('rh-drawer')!;
      await element.updateComplete;
      element.show();
      await element.updateComplete;
      await element.updateComplete;
    });

    afterEach(function() {
      document.body.style.overflow = '';
    });

    it('should close when clicking outside the panel', async function() {
      expect(element.open).to.be.true;
      document.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, composed: true }));
      await element.updateComplete;
      await element.updateComplete;
      expect(element.open).to.be.false;
    });

    it('should not close when clicking inside the panel', async function() {
      expect(element.open).to.be.true;
      const panel = element.shadowRoot?.querySelector('#panel')!;
      panel.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, composed: true }));
      await element.updateComplete;
      await element.updateComplete;
      expect(element.open).to.be.true;
    });
  });

  describe('accessible-label attribute', function() {
    describe('default value', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(html`
          <rh-drawer collapsible open>
            <nav>Body</nav>
          </rh-drawer>
        `);
      });
      beforeEach(async () => await element.updateComplete);

      it('should have default aria-label of Panel', function() {
        const panel = element.shadowRoot?.querySelector('#panel');
        expect(panel?.getAttribute('aria-label')).to.equal('Panel');
      });
    });

    describe('custom value', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(html`
          <rh-drawer collapsible open accessible-label="Side Navigation">
            <nav>Body</nav>
          </rh-drawer>
        `);
      });
      beforeEach(async () => await element.updateComplete);

      it('should use custom aria-label', function() {
        const panel = element.shadowRoot?.querySelector('#panel');
        expect(panel?.getAttribute('aria-label')).to.equal('Side Navigation');
      });
    });
  });

  describe('label attributes', function() {
    describe('close-label attribute', function() {
      let container: HTMLDivElement;

      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(html`
          <div>
            <rh-drawer open close-label="Dismiss">
              <nav>Body</nav>
            </rh-drawer>
          </div>
        `);
        element = container.querySelector('rh-drawer')!;
      });
      beforeEach(async () => await element.updateComplete);

      it('should use custom close label', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Dismiss' });
        expect(snapshot).to.not.have.axQuery({ name: 'Close drawer' });
      });
    });

    describe('collapse-label-open attribute', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(html`
          <rh-drawer collapsible open collapse-label-open="Hide drawer">
            <nav>Body</nav>
          </rh-drawer>
        `);
      });
      beforeEach(async () => await element.updateComplete);

      it('should use custom collapse open label', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Hide drawer' });
        expect(snapshot).to.not.have.axQuery({ name: 'Collapse panel' });
      });
    });

    describe('collapse-label-closed attribute', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(html`
          <rh-drawer collapsible collapse-label-closed="Show drawer">
            <nav>Body</nav>
          </rh-drawer>
        `);
      });
      beforeEach(async () => await element.updateComplete);

      it('should use custom collapse closed label', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Show drawer' });
        expect(snapshot).to.not.have.axQuery({ name: 'Expand panel' });
      });
    });
  });

  describe('position="fixed" inert scope', function() {
    let wrapper: HTMLDivElement;
    let outerSibling: HTMLDivElement;
    let innerSibling: HTMLDivElement;

    afterEach(function() {
      document.body.style.overflow = '';
    });

    beforeEach(async function() {
      outerSibling = document.createElement('div');
      outerSibling.id = 'outer-sibling';
      outerSibling.textContent = 'Outer sibling';
      document.body.appendChild(outerSibling);

      wrapper = await fixture<HTMLDivElement>(html`
        <div>
          <div id="inner-sibling">Inner sibling</div>
          <rh-drawer id="drawer" position="fixed">
            <nav>Body</nav>
          </rh-drawer>
        </div>
      `);
      element = wrapper.querySelector('rh-drawer')!;
      innerSibling = wrapper.querySelector('#inner-sibling')!;
      await element.updateComplete;
      element.show();
      await element.updateComplete;
      await element.updateComplete;
    });

    afterEach(function() {
      outerSibling.remove();
    });

    it('should inert document-level siblings', function() {
      expect(outerSibling.inert).to.be.true;
    });

    it('should not inert parent-level siblings', function() {
      expect(innerSibling.inert).to.be.false;
    });

    describe('then closing', function() {
      beforeEach(async function() {
        element.close();
        await element.updateComplete;
        await element.updateComplete;
      });

      it('should restore document-level siblings', function() {
        expect(outerSibling.inert).to.be.false;
      });
    });
  });

  describe('focus restoration', function() {
    let container: HTMLDivElement;
    let trigger: HTMLButtonElement;

    afterEach(function() {
      document.body.style.overflow = '';
    });

    describe('closing overlay with external trigger', function() {
      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(html`
          <div>
            <button id="trigger" aria-controls="drawer">Toggle</button>
            <rh-drawer id="drawer" trigger-id="trigger">
              <nav>Body</nav>
            </rh-drawer>
          </div>
        `);
        element = container.querySelector('rh-drawer')!;
        trigger = container.querySelector('#trigger')!;
        await element.updateComplete;
        trigger.focus();
        trigger.click();
        await element.updateComplete;
        await element.updateComplete;
      });

      it('should return focus to the trigger on close', async function() {
        element.close();
        await element.updateComplete;
        await element.updateComplete;
        expect(document.activeElement).to.equal(trigger);
      });
    });

    describe('opening without trigger', function() {
      beforeEach(async function() {
        container = await fixture<HTMLDivElement>(html`
          <div>
            <rh-drawer id="drawer">
              <nav>Body</nav>
            </rh-drawer>
          </div>
        `);
        element = container.querySelector('rh-drawer')!;
        await element.updateComplete;
        element.show();
        await element.updateComplete;
        await element.updateComplete;
      });

      it('should not throw when closing without a trigger', async function() {
        element.close();
        await element.updateComplete;
        await element.updateComplete;
        expect(element.open).to.be.false;
      });
    });
  });

  describe('default slot content', function() {
    beforeEach(async function() {
      element = await fixture<RhDrawer>(html`
        <rh-drawer open>
          <h3>My Panel Title</h3>
          <p>Some panel content</p>
        </rh-drawer>
      `);
    });
    beforeEach(async () => await element.updateComplete);

    it('should render slotted content', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.have.axQuery({ name: 'My Panel Title' });
    });
  });
});
