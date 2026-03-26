import { expect, fixture } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { html } from 'lit';

import { RhDrawer } from '@rhds/elements/rh-drawer/rh-drawer.js';

function oneEvent(el: Element, type: string): Promise<Event> {
  return new Promise(resolve => {
    el.addEventListener(type, resolve, { once: true });
  });
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
  <rh-drawer open expand="full-screen">
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

    describe('with expand="full-screen"', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(DRAWER_WITH_EXPAND);
      });
      beforeEach(async () => await element.updateComplete);

      it('is accessible', async function() {
        await expect(element).to.be.accessible();
      });

      it('should expose expand label', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Enter full screen' });
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

      it('inline is accessible', async function() {
        element.variant = 'inline';
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
      it('should dispatch close event', async function() {
        const event = oneEvent(element, 'close');
        const toggle = element.shadowRoot?.querySelector('#collapse-toggle') as HTMLElement;
        toggle?.click();
        await event;
        expect(element.open).to.be.false;
      });
    });

    describe('reopening via collapse toggle', function() {
      beforeEach(async function() {
        element.open = false;
        await element.updateComplete;
      });

      it('should dispatch open event', async function() {
        const event = oneEvent(element, 'open');
        const toggle = element.shadowRoot?.querySelector('#collapse-toggle') as HTMLElement;
        toggle?.click();
        await event;
        expect(element.open).to.be.true;
      });
    });
  });

  describe('keyboard interaction', function() {
    beforeEach(async function() {
      element = await fixture<RhDrawer>(DRAWER_COLLAPSIBLE);
    });
    beforeEach(async () => await element.updateComplete);

    describe('pressing Escape when open', function() {
      it('should dispatch close event', async function() {
        const toggle = element.shadowRoot?.querySelector('#collapse-toggle') as HTMLElement;
        toggle?.focus();
        const event = oneEvent(element, 'close');
        await sendKeys({ press: 'Escape' });
        await event;
        expect(element.open).to.be.false;
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
      });

      it('should dispatch open event', async function() {
        const event = oneEvent(element, 'open');
        element.show();
        await event;
        expect(element.open).to.be.true;
      });
    });

    describe('close()', function() {
      it('should dispatch close event', async function() {
        const event = oneEvent(element, 'close');
        element.close();
        await event;
        expect(element.open).to.be.false;
      });
    });

    describe('toggle()', function() {
      it('should dispatch close event when open', async function() {
        const event = oneEvent(element, 'close');
        element.toggle();
        await event;
        expect(element.open).to.be.false;
      });

      it('should dispatch open event when closed', async function() {
        element.open = false;
        await element.updateComplete;
        const event = oneEvent(element, 'open');
        element.toggle();
        await event;
        expect(element.open).to.be.true;
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

    it('should not be open', function() {
      expect(element.open).to.be.false;
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

    it('should not show collapse toggle in a11y tree', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.not.have.axQuery({ name: 'Collapse panel' });
      expect(snapshot).to.not.have.axQuery({ name: 'Expand panel' });
    });

    it('should show close button in a11y tree', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.have.axQuery({ name: 'Close drawer' });
    });

    describe('clicking external trigger', function() {
      it('should dispatch open event', async function() {
        const event = oneEvent(element, 'open');
        const trigger = container.querySelector('#trigger') as HTMLElement;
        trigger?.click();
        await event;
        expect(element.open).to.be.true;
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

    describe('clicking close button', function() {
      it('should dispatch close event', async function() {
        const event = oneEvent(element, 'close');
        const closeBtn = element.shadowRoot?.querySelector('#close-button') as HTMLElement;
        closeBtn?.click();
        await event;
        expect(element.open).to.be.false;
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
      expect(snapshot).to.have.axQuery({ name: 'Enter full screen' });
    });

    describe('closing the drawer', function() {
      it('should change collapse label to Expand panel', async function() {
        const event = oneEvent(element, 'close');
        const toggle = element.shadowRoot?.querySelector('#collapse-toggle') as HTMLElement;
        toggle?.click();
        await event;
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'Expand panel' });
        expect(snapshot).to.not.have.axQuery({ name: 'Collapse panel' });
      });
    });
  });

  describe('resizable is noop for inline and auto', function() {
    it('should not expose resize handle for inline variant', async function() {
      element = await fixture<RhDrawer>(html`
        <rh-drawer variant="inline" panel="resizable" open>
          <h3 slot="header">Header</h3>
          <nav slot="body">Body</nav>
          <div><p>Content</p></div>
        </rh-drawer>
      `);
      await element.updateComplete;
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.not.have.axQuery({ name: 'Resize panel' });
    });

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

    describe('clicking close button', function() {
      it('should dispatch close event', async function() {
        const event = oneEvent(element, 'close');
        const closeBtn = element.shadowRoot?.querySelector('#close-button') as HTMLElement;
        closeBtn?.click();
        await event;
        expect(element.open).to.be.false;
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

    describe('clicking close button', function() {
      it('should dispatch close event', async function() {
        const event = oneEvent(element, 'close');
        const closeBtn = element.shadowRoot?.querySelector('#close-button') as HTMLElement;
        closeBtn?.click();
        await event;
        expect(element.open).to.be.false;
      });
    });
  });

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

      it('should have role dialog', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ role: 'dialog' });
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

      it('should have role dialog', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ role: 'dialog' });
      });
    });

    describe('inline variant', function() {
      beforeEach(async function() {
        element = await fixture<RhDrawer>(html`
          <rh-drawer variant="inline" open>
            <nav slot="body">Body</nav>
            <div><p>Content</p></div>
          </rh-drawer>
        `);
      });
      beforeEach(async () => await element.updateComplete);

      it('should have role complementary', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ role: 'complementary' });
      });
    });
  });
});
