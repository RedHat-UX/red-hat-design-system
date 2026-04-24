import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSchemeToggle, SchemeChangedEvent } from '@rhds/elements/rh-scheme-toggle/rh-scheme-toggle.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { sendKeys } from '@web/test-runner-commands';

function press(key: string) {
  return async function() {
    await sendKeys({ press: key });
  };
}

/**
 * Simulates a user selecting a radio option by checking the matching
 * input and dispatching a native `change` event on the fieldset.
 * @param element - the rh-scheme-toggle instance
 * @param value - the option value to select (e.g. 'light', 'dark', 'light dark')
 */
function selectScheme(element: RhSchemeToggle, value: string) {
  const radio = element.shadowRoot!.querySelector<HTMLInputElement>(
    `input[type="radio"][value="${value}"]`
  )!;
  radio.checked = true;
  radio.dispatchEvent(new Event('change', { bubbles: true }));
}

describe('<rh-scheme-toggle>', function() {
  describe('simply instantiating', function() {
    let element: RhSchemeToggle;

    beforeEach(async function() {
      element = await createFixture<RhSchemeToggle>(
        html`<rh-scheme-toggle></rh-scheme-toggle>`
      );
      await element.updateComplete;
    });

    it('imperatively instantiates', function() {
      expect(document.createElement('rh-scheme-toggle')).to.be.an.instanceof(
        RhSchemeToggle
      );
    });

    it('should upgrade', async function() {
      const klass = customElements.get('rh-scheme-toggle');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and.to.be.an.instanceOf(RhSchemeToggle);
    });

    it('should be accessible', async function() {
      await expect(element).to.be.accessible();
    });
  });
  describe('keyboard navigation', function() {
    let element: RhSchemeToggle;

    beforeEach(async function() {
      element = await createFixture<RhSchemeToggle>(
        html`<rh-scheme-toggle></rh-scheme-toggle>`
      );
    });
    beforeEach(async () => await element.updateComplete);

    describe('Tab', function() {
      beforeEach(press('Tab'));

      it('should focus and check the System radio input', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'System', focused: true, checked: true });
      });

      describe('Right Arrow', function() {
        beforeEach(press('ArrowRight'));

        it('should focus and check the light mode radio input', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).to.have.axQuery({ name: 'Light', focused: true, checked: true });
        });
      });

      describe('Right Arrow again ', function() {
        beforeEach(press('ArrowRight'));

        it('should focus and check the dark mode radio input', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).to.have.axQuery({ name: 'Dark', focused: true, checked: true });
        });
      });
    });

    describe('local storage', function() {
      describe('with empty localStorage', function() {
        beforeEach(function() {
          localStorage.clear();
        });

        describe('with stored scheme set to `light dark`', function() {
          beforeEach(async function() {
            localStorage.setItem('rhdsColorScheme', 'light dark');
          });

          describe('adding basic toggle element', function() {
            let element: RhSchemeToggle;
            beforeEach(async function() {
              element = await createFixture<RhSchemeToggle>(html`<rh-scheme-toggle></rh-scheme-toggle>`);
            });
            it('uses the stored scheme', async function() {
              expect(element.scheme).to.equal('light dark');
            });
          });
        });

        describe('with stored scheme set to `light`', function() {
          beforeEach(async function() {
            localStorage.setItem('rhdsColorScheme', 'light');
          });

          describe('adding basic toggle element', function() {
            let element: RhSchemeToggle;
            beforeEach(async function() {
              element = await createFixture<RhSchemeToggle>(html`<rh-scheme-toggle></rh-scheme-toggle>`);
            });
            it('uses the stored scheme', async function() {
              expect(element.scheme).to.equal('light');
            });
          });
        });
      });

      describe('with stored scheme set to `dark`', function() {
        beforeEach(async function() {
          localStorage.setItem('rhdsColorScheme', 'dark');
        });

        describe('adding basic toggle element', function() {
          let element: RhSchemeToggle;
          beforeEach(async function() {
            element = await createFixture<RhSchemeToggle>(html`<rh-scheme-toggle></rh-scheme-toggle>`);
          });
          it('uses the stored scheme', async function() {
            expect(element.scheme).to.equal('dark');
          });
        });
      });
    });
  });

  describe('scheme-changed event', function() {
    let element: RhSchemeToggle;

    beforeEach(async function() {
      localStorage.removeItem('rhdsColorScheme');
      element = await createFixture<RhSchemeToggle>(
        html`<rh-scheme-toggle></rh-scheme-toggle>`
      );
      await element.updateComplete;
    });

    afterEach(function() {
      localStorage.removeItem('rhdsColorScheme');
      document.body.style.removeProperty('color-scheme');
    });

    it('fires on user interaction via radio', async function() {
      const events: SchemeChangedEvent[] = [];
      element.addEventListener('scheme-changed', e => events.push(e as SchemeChangedEvent));

      selectScheme(element, 'dark');
      await element.updateComplete;

      expect(events).to.have.length(1);
      expect(events[0].scheme).to.equal('dark');
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

      // Listen on document BEFORE fixture — composed event would reach here
      const handler = (e: Event) => events.push(e as SchemeChangedEvent);
      document.addEventListener('scheme-changed', handler);

      const el = await createFixture<RhSchemeToggle>(
        html`<rh-scheme-toggle></rh-scheme-toggle>`
      );
      await el.updateComplete;

      document.removeEventListener('scheme-changed', handler);
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

  describe('radio checked state after programmatic scheme change', function() {
    let element: RhSchemeToggle;

    /** Returns the checked radio's value, or null if none checked. */
    function checkedValue(): string | null {
      const radio = element.shadowRoot!.querySelector<HTMLInputElement>(
        'input[type="radio"]:checked'
      );
      return radio?.value ?? null;
    }

    beforeEach(async function() {
      localStorage.removeItem('rhdsColorScheme');
      element = await createFixture<RhSchemeToggle>(
        html`<rh-scheme-toggle></rh-scheme-toggle>`
      );
      await element.updateComplete;
    });

    afterEach(function() {
      localStorage.removeItem('rhdsColorScheme');
      document.body.style.removeProperty('color-scheme');
    });

    it('checks the light radio after setting scheme to "light"', async function() {
      element.scheme = 'light';
      await element.updateComplete;
      expect(checkedValue()).to.equal('light');
    });

    it('checks the dark radio after setting scheme to "dark"', async function() {
      element.scheme = 'dark';
      await element.updateComplete;
      expect(checkedValue()).to.equal('dark');
    });

    it('checks the system radio after setting scheme to "light dark"', async function() {
      element.scheme = 'light dark';
      await element.updateComplete;
      expect(checkedValue()).to.equal('light dark');
    });

    it('updates checked radio across sequential changes', async function() {
      element.scheme = 'dark';
      await element.updateComplete;
      expect(checkedValue()).to.equal('dark');

      element.scheme = 'light';
      await element.updateComplete;
      expect(checkedValue()).to.equal('light');

      element.scheme = 'light dark';
      await element.updateComplete;
      expect(checkedValue()).to.equal('light dark');
    });
  });
});
