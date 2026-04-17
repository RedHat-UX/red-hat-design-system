import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSchemeDropdown } from '@rhds/elements/rh-scheme-dropdown/rh-scheme-dropdown.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

/**
 * Dispatches a native `change` event on the shadow <select> after setting
 * its value, simulating a user picking an option from the dropdown.
 * @param element - the rh-scheme-dropdown instance
 * @param value - the option value to select (e.g. 'light', 'dark', 'light dark')
 */
function selectScheme(element: RhSchemeDropdown, value: string) {
  const select = element.shadowRoot!.querySelector('select')!;
  select.value = value;
  select.dispatchEvent(new Event('change', { bubbles: true }));
}

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

    it('renders all three options in the shadow DOM', function() {
      const options = element.shadowRoot!.querySelectorAll('option');
      expect(options).to.have.length(3);
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

    it('the System option is selected in the shadow <select>', function() {
      const select = element.shadowRoot!.querySelector('select')!;
      expect(select.value).to.equal('light dark');
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

  describe('scheme selection via select element interaction', function() {
    let element: RhSchemeDropdown;

    beforeEach(async function() {
      element = await createFixture<RhSchemeDropdown>(
        html`<rh-scheme-dropdown></rh-scheme-dropdown>`
      );
      await element.updateComplete;
    });

    it('selecting "dark" updates the scheme property and side effects', async function() {
      selectScheme(element, 'dark');
      await element.updateComplete;

      expect(element.scheme).to.equal('dark');
      expect(document.body.style.getPropertyValue('color-scheme')).to.equal('dark');
      expect(localStorage.getItem('rhdsColorScheme')).to.equal('dark');
    });

    it('selecting "light" updates the scheme property and side effects', async function() {
      selectScheme(element, 'light');
      await element.updateComplete;

      expect(element.scheme).to.equal('light');
      expect(document.body.style.getPropertyValue('color-scheme')).to.equal('light');
      expect(localStorage.getItem('rhdsColorScheme')).to.equal('light');
    });

    it('selecting "light dark" updates the scheme property and side effects', async function() {
      selectScheme(element, 'light dark');
      await element.updateComplete;

      expect(element.scheme).to.equal('light dark');
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

    it('renders the custom label in the shadow DOM', function() {
      const label = element.shadowRoot!.querySelector('label')!;
      expect(label.textContent).to.include('Tema');
    });

    it('renders custom option text in the shadow DOM', function() {
      const options = element.shadowRoot!.querySelectorAll('option');
      const texts = Array.from(options).map(o => o.textContent?.trim());
      expect(texts.some(t => t?.includes('Sistema'))).to.be.true;
      expect(texts.some(t => t?.includes('Claro'))).to.be.true;
      expect(texts.some(t => t?.includes('Oscuro'))).to.be.true;
    });

    it('should be accessible with custom labels', async function() {
      await expect(element).to.be.accessible();
    });
  });
});
