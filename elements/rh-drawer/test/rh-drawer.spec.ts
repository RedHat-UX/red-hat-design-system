import { expect, html, nextFrame } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { sendKeys } from '@web/test-runner-commands';
import { DrawerCloseEvent, DrawerOpenEvent, RhDrawer } from '@rhds/elements/rh-drawer/rh-drawer.js';

function press(key: string) {
  return async function() {
    await sendKeys({ press: key });
  };
}

describe('<rh-drawer>', function() {
  it('should upgrade', async function() {
    const el = await createFixture<RhDrawer>(html`
      <rh-drawer></rh-drawer>
    `);
    const klass = customElements.get('rh-drawer');
    expect(el)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhDrawer);
  });

  describe('default (overlay) variant', function() {
    let element: RhDrawer;

    beforeEach(async function() {
      element = await createFixture<RhDrawer>(html`
        <rh-drawer>
          <h3 slot="header">Header</h3>
          <nav slot="body">Nav content</nav>
          <p slot="footer">Footer</p>
          <p>Page content</p>
        </rh-drawer>
      `);
    });

    it('defaults to closed', function() {
      expect(element.open).to.be.false;
    });

    it('defaults to overlay variant', function() {
      expect(element.variant).to.equal('overlay');
    });

    it('defaults to inline-start position', function() {
      expect(element.position).to.equal('inline-start');
    });

    it('defaults to collapsible for overlay', function() {
      const toggle = element.shadowRoot?.querySelector('[part="collapse-toggle"]');
      expect(toggle).to.not.be.null;
    });

    it('does not render close button when collapsible', function() {
      const closeBtn = element.shadowRoot?.querySelector('[part="close-button"]');
      expect(closeBtn).to.be.null;
    });

    describe('opening via property', function() {
      beforeEach(async function() {
        element.open = true;
        await element.updateComplete;
        await nextFrame();
      });

      it('sets open to true', function() {
        expect(element.open).to.be.true;
      });

      it('reflects open attribute', function() {
        expect(element.hasAttribute('open')).to.be.true;
      });

      describe('closing via property', function() {
        beforeEach(async function() {
          element.open = false;
          await element.updateComplete;
          await nextFrame();
        });

        it('sets open to false', function() {
          expect(element.open).to.be.false;
        });
      });
    });

    describe('opening via show()', function() {
      beforeEach(async function() {
        element.show();
        await element.updateComplete;
        await nextFrame();
      });

      it('opens the drawer', function() {
        expect(element.open).to.be.true;
      });

      describe('closing via close()', function() {
        beforeEach(async function() {
          element.close();
          await element.updateComplete;
          await nextFrame();
        });

        it('closes the drawer', function() {
          expect(element.open).to.be.false;
        });
      });
    });

    describe('toggle()', function() {
      it('opens when closed', async function() {
        element.toggle();
        await element.updateComplete;
        expect(element.open).to.be.true;
      });

      it('closes when open', async function() {
        element.open = true;
        await element.updateComplete;
        element.toggle();
        await element.updateComplete;
        expect(element.open).to.be.false;
      });
    });
  });

  describe('with a trigger and panel="resizable"', function() {
    let element: RhDrawer;
    let trigger: HTMLButtonElement;
    type DrawerEvent = DrawerOpenEvent | DrawerCloseEvent;
    const events = new Map<DrawerEvent['type'], DrawerEvent>();

    const updateComplete = () => element.updateComplete;

    beforeEach(async function() {
      const storeEvent = (event: DrawerEvent) => events.set(event.type, event);
      element = await createFixture(html`
        <rh-drawer trigger-id="drawer-trigger"
                   panel="resizable"
                   @open="${storeEvent}"
                   @close="${storeEvent}">
          <h3 slot="header">Header</h3>
          <p>Content</p>
        </rh-drawer>
        <button id="drawer-trigger">Open Drawer</button>
      `);
      trigger = document.getElementById('drawer-trigger')! as HTMLButtonElement;
    });

    afterEach(function() {
      events.clear();
    });

    it('renders resize handle', function() {
      const handle = element.shadowRoot?.querySelector('[part="resize-handle"]');
      expect(handle).to.not.be.null;
    });

    it('does not render collapse toggle', function() {
      const toggle = element.shadowRoot?.querySelector('[part="collapse-toggle"]');
      expect(toggle).to.be.null;
    });

    it('renders close button', function() {
      const closeBtn = element.shadowRoot?.querySelector('[part="close-button"]');
      expect(closeBtn).to.not.be.null;
    });

    describe('clicking the trigger', function() {
      beforeEach(() => trigger.click());
      beforeEach(updateComplete);
      beforeEach(nextFrame);

      it('opens the drawer', function() {
        expect(element.open).to.be.true;
      });

      it('fires "open" event', function() {
        expect(events.get('open')).to.be.an.instanceof(DrawerOpenEvent);
      });

      describe('Escape key', function() {
        beforeEach(press('Escape'));
        beforeEach(updateComplete);
        beforeEach(nextFrame);

        it('closes the drawer', function() {
          expect(element.open).to.be.false;
        });

        it('fires "close" event', function() {
          expect(events.get('close')).to.be.an.instanceof(DrawerCloseEvent);
        });
      });

      describe('clicking the close button', function() {
        beforeEach(() => element.shadowRoot?.querySelector<HTMLElement>('[part="close-button"]')?.click());
        beforeEach(updateComplete);
        beforeEach(nextFrame);

        it('closes the drawer', function() {
          expect(element.open).to.be.false;
        });

        it('fires "close" event', function() {
          expect(events.get('close')).to.be.an.instanceof(DrawerCloseEvent);
        });
      });
    });
  });

  describe('fixed variant', function() {
    let element: RhDrawer;

    beforeEach(async function() {
      element = await createFixture<RhDrawer>(html`
        <rh-drawer variant="fixed" open>
          <h3 slot="header">Fixed Header</h3>
          <nav slot="body">Nav</nav>
        </rh-drawer>
      `);
    });

    it('has variant set to fixed', function() {
      expect(element.variant).to.equal('fixed');
    });

    it('does not render default content slot', function() {
      const content = element.shadowRoot?.querySelector('#content');
      expect(content).to.be.null;
    });

    it('does not render collapse toggle', function() {
      const toggle = element.shadowRoot?.querySelector('[part="collapse-toggle"]');
      expect(toggle).to.be.null;
    });

    it('renders close button', function() {
      const closeBtn = element.shadowRoot?.querySelector('[part="close-button"]');
      expect(closeBtn).to.not.be.null;
    });
  });

  describe('fixed variant with panel="collapsible"', function() {
    let element: RhDrawer;

    beforeEach(async function() {
      element = await createFixture<RhDrawer>(html`
        <rh-drawer variant="fixed" panel="collapsible" open>
          <h3 slot="header">Fixed Collapsible</h3>
        </rh-drawer>
      `);
    });

    it('does not render the collapse toggle', function() {
      const toggle = element.shadowRoot?.querySelector('[part="collapse-toggle"]');
      expect(toggle).to.be.null;
    });
  });

  describe('flow variant', function() {
    let element: RhDrawer;

    beforeEach(async function() {
      element = await createFixture<RhDrawer>(html`
        <rh-drawer variant="flow" open>
          <h3 slot="header">Flow Header</h3>
          <nav slot="body">Nav</nav>
        </rh-drawer>
      `);
    });

    it('has variant set to flow', function() {
      expect(element.variant).to.equal('flow');
    });

    it('does not render default content slot', function() {
      const content = element.shadowRoot?.querySelector('#content');
      expect(content).to.be.null;
    });

    it('does not render collapse toggle', function() {
      const toggle = element.shadowRoot?.querySelector('[part="collapse-toggle"]');
      expect(toggle).to.be.null;
    });

    it('renders close button', function() {
      const closeBtn = element.shadowRoot?.querySelector('[part="close-button"]');
      expect(closeBtn).to.not.be.null;
    });
  });

  describe('flow variant with panel="collapsible"', function() {
    let element: RhDrawer;

    beforeEach(async function() {
      element = await createFixture<RhDrawer>(html`
        <rh-drawer variant="flow" panel="collapsible" open>
          <h3 slot="header">Flow Collapsible</h3>
        </rh-drawer>
      `);
    });

    it('does not render the collapse toggle', function() {
      const toggle = element.shadowRoot?.querySelector('[part="collapse-toggle"]');
      expect(toggle).to.be.null;
    });
  });

  describe('overlay with default panel (collapsible)', function() {
    let element: RhDrawer;

    beforeEach(async function() {
      element = await createFixture<RhDrawer>(html`
        <rh-drawer variant="overlay" open>
          <h3 slot="header">Overlay Default</h3>
          <p>Content</p>
        </rh-drawer>
      `);
    });

    it('renders the collapse toggle by default', function() {
      const toggle = element.shadowRoot?.querySelector('[part="collapse-toggle"]');
      expect(toggle).to.not.be.null;
    });

    describe('clicking collapse toggle', function() {
      beforeEach(async function() {
        element.shadowRoot?.querySelector<HTMLElement>('[part="collapse-toggle"]')?.click();
        await element.updateComplete;
        await nextFrame();
      });

      it('closes the drawer', function() {
        expect(element.open).to.be.false;
      });

      describe('clicking collapse toggle again', function() {
        beforeEach(async function() {
          element.shadowRoot?.querySelector<HTMLElement>('[part="collapse-toggle"]')?.click();
          await element.updateComplete;
          await nextFrame();
        });

        it('opens the drawer', function() {
          expect(element.open).to.be.true;
        });
      });
    });
  });

  describe('inline with default panel (collapsible)', function() {
    let element: RhDrawer;

    beforeEach(async function() {
      element = await createFixture<RhDrawer>(html`
        <rh-drawer variant="inline" open>
          <h3 slot="header">Inline Default</h3>
          <p>Content</p>
        </rh-drawer>
      `);
    });

    it('renders the collapse toggle by default', function() {
      const toggle = element.shadowRoot?.querySelector('[part="collapse-toggle"]');
      expect(toggle).to.not.be.null;
    });
  });

  describe('fullscreen', function() {
    let element: RhDrawer;

    beforeEach(async function() {
      element = await createFixture<RhDrawer>(html`
        <rh-drawer fullscreen open>
          <h3 slot="header">Fullscreen</h3>
          <p>Content</p>
        </rh-drawer>
      `);
    });

    it('renders the fullscreen toggle', function() {
      const btn = element.shadowRoot?.querySelector('[part="fullscreen-button"]');
      expect(btn).to.not.be.null;
    });

    describe('clicking fullscreen toggle', function() {
      beforeEach(async function() {
        element.shadowRoot?.querySelector<HTMLElement>('[part="fullscreen-button"]')?.click();
        await element.updateComplete;
        await nextFrame();
      });

      it('panel container has fullscreen class', function() {
        const container = element.shadowRoot?.querySelector('#container');
        expect(container?.classList.contains('fullscreen')).to.be.true;
      });
    });
  });

  describe('position inline-end', function() {
    let element: RhDrawer;

    beforeEach(async function() {
      element = await createFixture<RhDrawer>(html`
        <rh-drawer position="inline-end" open>
          <h3 slot="header">Right Side</h3>
          <p>Content</p>
        </rh-drawer>
      `);
    });

    it('reflects position attribute', function() {
      expect(element.getAttribute('position')).to.equal('inline-end');
    });

    it('panel container has inline-end class', function() {
      const container = element.shadowRoot?.querySelector('#container');
      expect(container?.classList.contains('inline-end')).to.be.true;
    });
  });
});
