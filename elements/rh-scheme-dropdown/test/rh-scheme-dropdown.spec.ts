import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSchemeDropdown, SchemeChangedEvent } from '@rhds/elements/rh-scheme-dropdown/rh-scheme-dropdown.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

describe('<rh-scheme-dropdown>', function() {
  afterEach(function() {
    localStorage.removeItem('rhdsColorScheme'); // Clear between tests
    document.body.style.removeProperty('color-scheme');
  });

  describe('simply instantiating', function() {
    let element: RhSchemeDropdown;

    beforeEach(async function() {
      element = await createFixture<RhSchemeDropdown>(
        html`<rh-scheme-dropdown></rh-scheme-dropdown>`
      );
      await element.updateComplete;
    });

    it('imperatively instantiates', function() {
      expect(document.createElement('rh-scheme-dropdown')).to.be.an.instanceof(
        RhSchemeDropdown
      );
    });

    it('should upgrade', async function() {
      const klass = customElements.get('rh-scheme-dropdown');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and.to.be.an.instanceOf(RhSchemeDropdown);
    });
  });

  describe('accessibility', function() {
    let element: RhSchemeDropdown;

    beforeEach(async function() {
      element = await createFixture<RhSchemeDropdown>(
        html`<rh-scheme-dropdown></rh-scheme-dropdown>`
      );
      await element.updateComplete;
    });

    it('should be accessible', async function() {
      await expect(element).to.be.accessible();
    });

    it('has a combobox with the default label text', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainQuery({ role: 'combobox', name: /Color scheme/ });
    });

    it('exposes all three options in the ax tree', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot)
          .to.axContainQuery({ role: 'option', name: /System/ }).and
          .to.axContainQuery({ role: 'option', name: /Light/ }).and
          .to.axContainQuery({ role: 'option', name: /Dark/ });
    });
  });

  describe('default state', function() {
    let element: RhSchemeDropdown;

    beforeEach(async function() {
      localStorage.removeItem('rhdsColorScheme');
      element = await createFixture<RhSchemeDropdown>(
        html`<rh-scheme-dropdown></rh-scheme-dropdown>`
      );
      await element.updateComplete;
    });

    it('scheme is undefined when localStorage is empty', function() {
      expect(element.scheme).to.be.undefined;
    });

    it('the System option is selected by default', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainQuery({ role: 'combobox', value: /System/ });
    });

    it('does not set color-scheme on document.body', function() {
      const value = document.body.style.getPropertyValue('color-scheme');
      expect(value).to.equal('');
    });
  });

  describe('scheme selection via property', function() {
    let element: RhSchemeDropdown;

    beforeEach(async function() {
      element = await createFixture<RhSchemeDropdown>(
        html`<rh-scheme-dropdown></rh-scheme-dropdown>`
      );
      await element.updateComplete;
    });

    it('setting scheme to "light" reflects attribute and updates side effects', async function() {
      element.scheme = 'light';
      await element.updateComplete;

      expect(element.getAttribute('scheme')).to.equal('light');
      expect(document.body.style.getPropertyValue('color-scheme')).to.equal('light');
      expect(localStorage.getItem('rhdsColorScheme')).to.equal('light');
    });

    it('setting scheme to "dark" reflects attribute and updates side effects', async function() {
      element.scheme = 'dark';
      await element.updateComplete;

      expect(element.getAttribute('scheme')).to.equal('dark');
      expect(document.body.style.getPropertyValue('color-scheme')).to.equal('dark');
      expect(localStorage.getItem('rhdsColorScheme')).to.equal('dark');
    });

    it('setting scheme to "light dark" reflects attribute and updates side effects', async function() {
      element.scheme = 'light dark';
      await element.updateComplete;

      expect(element.getAttribute('scheme')).to.equal('light dark');
      expect(document.body.style.getPropertyValue('color-scheme')).to.equal('light dark');
      expect(localStorage.getItem('rhdsColorScheme')).to.equal('light dark');
    });
  });

  describe('localStorage persistence', function() {
    describe('reads stored "light dark" on init', function() {
      let element: RhSchemeDropdown;

      beforeEach(async function() {
        localStorage.setItem('rhdsColorScheme', 'light dark');
        element = await createFixture<RhSchemeDropdown>(
          html`<rh-scheme-dropdown></rh-scheme-dropdown>`
        );
        await element.updateComplete;
      });

      it('initializes scheme from localStorage', function() {
        expect(element.scheme).to.equal('light dark');
      });
    });

    describe('reads stored "light" on init', function() {
      let element: RhSchemeDropdown;

      beforeEach(async function() {
        localStorage.setItem('rhdsColorScheme', 'light');
        element = await createFixture<RhSchemeDropdown>(
          html`<rh-scheme-dropdown></rh-scheme-dropdown>`
        );
        await element.updateComplete;
      });

      it('initializes scheme from localStorage', function() {
        expect(element.scheme).to.equal('light');
      });
    });

    describe('reads stored "dark" on init', function() {
      let element: RhSchemeDropdown;

      beforeEach(async function() {
        localStorage.setItem('rhdsColorScheme', 'dark');
        element = await createFixture<RhSchemeDropdown>(
          html`<rh-scheme-dropdown></rh-scheme-dropdown>`
        );
        await element.updateComplete;
      });

      it('initializes scheme from localStorage', function() {
        expect(element.scheme).to.equal('dark');
      });
    });

    describe('writes to localStorage on change', function() {
      let element: RhSchemeDropdown;

      beforeEach(async function() {
        element = await createFixture<RhSchemeDropdown>(
          html`<rh-scheme-dropdown></rh-scheme-dropdown>`
        );
        await element.updateComplete;
      });

      it('persists scheme to localStorage when property changes', async function() {
        element.scheme = 'dark';
        await element.updateComplete;
        expect(localStorage.getItem('rhdsColorScheme')).to.equal('dark');

        element.scheme = 'light';
        await element.updateComplete;
        expect(localStorage.getItem('rhdsColorScheme')).to.equal('light');
      });
    });
  });

  describe('document.body color-scheme side effect', function() {
    let element: RhSchemeDropdown;

    beforeEach(async function() {
      element = await createFixture<RhSchemeDropdown>(
        html`<rh-scheme-dropdown></rh-scheme-dropdown>`
      );
      await element.updateComplete;
    });

    it('applies "dark" to document.body', async function() {
      element.scheme = 'dark';
      await element.updateComplete;
      expect(document.body.style.getPropertyValue('color-scheme')).to.equal('dark');
    });

    it('applies "light" to document.body', async function() {
      element.scheme = 'light';
      await element.updateComplete;
      expect(document.body.style.getPropertyValue('color-scheme')).to.equal('light');
    });

    it('applies "light dark" to document.body', async function() {
      element.scheme = 'light dark';
      await element.updateComplete;
      expect(document.body.style.getPropertyValue('color-scheme')).to.equal('light dark');
    });
  });

  describe('custom text attributes', function() {
    let element: RhSchemeDropdown;

    beforeEach(async function() {
      element = await createFixture<RhSchemeDropdown>(html`
        <rh-scheme-dropdown
          label-text="Tema"
          light-text="Claro"
          dark-text="Oscuro"
          system-text="Sistema"
        ></rh-scheme-dropdown>
      `);
      await element.updateComplete;
    });

    it('reflects label-text to the labelText property', function() {
      expect(element.labelText).to.equal('Tema');
    });

    it('reflects light-text to the lightText property', function() {
      expect(element.lightText).to.equal('Claro');
    });

    it('reflects dark-text to the darkText property', function() {
      expect(element.darkText).to.equal('Oscuro');
    });

    it('reflects system-text to the systemText property', function() {
      expect(element.systemText).to.equal('Sistema');
    });

    it('renders the custom label', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainQuery({ role: 'combobox', name: /Tema/ });
    });

    it('exposes custom option text in the ax tree', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot)
          .to.axContainQuery({ role: 'option', name: /Sistema/ }).and
          .to.axContainQuery({ role: 'option', name: /Claro/ }).and
          .to.axContainQuery({ role: 'option', name: /Oscuro/ });
    });

    it('should be accessible with custom labels', async function() {
      await expect(element).to.be.accessible();
    });
  });

  describe('scheme-changed event', function() {
    let element: RhSchemeDropdown;

    beforeEach(async function() {
      localStorage.removeItem('rhdsColorScheme');
      element = await createFixture<RhSchemeDropdown>(
        html`<rh-scheme-dropdown></rh-scheme-dropdown>`
      );
      await element.updateComplete;
    });

    it('fires on programmatic property change', async function() {
      const events: SchemeChangedEvent[] = [];
      element.addEventListener('scheme-changed', e => events.push(e as SchemeChangedEvent));

      element.scheme = 'dark';
      await element.updateComplete;

      expect(events).to.have.length(1);
      expect(events[0].scheme).to.equal('dark');
    });

    it('does not fire on initial load from localStorage', async function() {
      const events: SchemeChangedEvent[] = [];
      localStorage.setItem('rhdsColorScheme', 'dark');

      const el = await createFixture<RhSchemeDropdown>(
        html`<rh-scheme-dropdown></rh-scheme-dropdown>`
      );
      el.addEventListener('scheme-changed', e => events.push(e as SchemeChangedEvent));
      await el.updateComplete;

      expect(events).to.have.length(0);
    });

    it('has bubbles and composed set to true', async function() {
      let event: SchemeChangedEvent | undefined;
      element.addEventListener('scheme-changed', e => {
        event = e as SchemeChangedEvent;
      });

      element.scheme = 'light';
      await element.updateComplete;

      expect(event).to.exist;
      expect(event!.bubbles).to.be.true;
      expect(event!.composed).to.be.true;
    });

    it('carries the correct scheme for each value', async function() {
      const schemes: string[] = [];
      element.addEventListener('scheme-changed', e => {
        schemes.push((e as SchemeChangedEvent).scheme);
      });

      element.scheme = 'dark';
      await element.updateComplete;
      element.scheme = 'light dark';
      await element.updateComplete;
      element.scheme = 'light';
      await element.updateComplete;

      expect(schemes).to.deep.equal(['dark', 'light dark', 'light']);
    });
  });
});
