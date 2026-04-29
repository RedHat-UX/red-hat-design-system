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

describe('<rh-scheme-toggle>', function() {
  describe('simply instantiating', function() {
    let element: RhSchemeToggle;

    beforeEach(async function() {
      element = await createFixture<RhSchemeToggle>(
        html`<rh-scheme-toggle></rh-scheme-toggle>`
      );
      await element.updateComplete;
    });

    afterEach(function() {
      localStorage.removeItem('rhdsColorScheme');
      document.body.style.removeProperty('color-scheme');
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

    afterEach(function() {
      localStorage.removeItem('rhdsColorScheme');
      document.body.style.removeProperty('color-scheme');
    });

    describe('Tab', function() {
      beforeEach(press('Tab'));

      it('focuses and checks System', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.have.axQuery({ name: 'System', focused: true, checked: true });
      });

      describe('Right Arrow', function() {
        beforeEach(press('ArrowRight'));

        it('focuses and checks Light', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).to.have.axQuery({ name: 'Light', focused: true, checked: true });
        });

        describe('Right Arrow again ', function() {
          beforeEach(press('ArrowRight'));

          it('focuses and checks Dark', async function() {
            const snapshot = await a11ySnapshot();
            expect(snapshot).to.have.axQuery({ name: 'Dark', focused: true, checked: true });
          });
        });
      });

      describe('Left Arrow', function() {
        beforeEach(press('ArrowLeft'));

        it('focuses and checks Dark', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).to.have.axQuery({ name: 'Dark', focused: true, checked: true });
        });
      });
    });
  });

  describe('localStorage', function() {
    let element: RhSchemeToggle;

    afterEach(function() {
      localStorage.removeItem('rhdsColorScheme');
      document.body.style.removeProperty('color-scheme');
    });

    for (const scheme of ['light dark', 'light', 'dark'] as const) {
      describe(`with stored scheme "${scheme}"`, function() {
        beforeEach(async function() {
          localStorage.setItem('rhdsColorScheme', scheme);
          element = await createFixture<RhSchemeToggle>(
            html`<rh-scheme-toggle></rh-scheme-toggle>`
          );
        });
        it('uses the stored scheme', function() {
          expect(element.scheme).to.equal(scheme);
        });
      });
    }
  });

  describe('scheme-changed event', function() {
    let element: RhSchemeToggle;
    const events: SchemeChangedEvent[] = [];

    beforeEach(async function() {
      events.length = 0;
      localStorage.removeItem('rhdsColorScheme');
      element = await createFixture<RhSchemeToggle>(
        html`<rh-scheme-toggle @scheme-changed="${(e: SchemeChangedEvent) => events.push(e)}"></rh-scheme-toggle>`
      );
      await element.updateComplete;
    });

    afterEach(function() {
      localStorage.removeItem('rhdsColorScheme');
      document.body.style.removeProperty('color-scheme');
    });

    it('fires on user interaction via radio', async function() {
      await sendKeys({ press: 'Tab' });
      await sendKeys({ press: 'ArrowLeft' });
      await element.updateComplete;

      expect(events).to.have.length(1);
      expect(events[0].scheme).to.equal('dark');
    });

    it('fires on programmatic property change', async function() {
      element.scheme = 'dark';
      await element.updateComplete;

      expect(events).to.have.length(1);
      expect(events[0].scheme).to.equal('dark');
    });

    it('does not fire on initial load from localStorage', async function() {
      const initEvents: SchemeChangedEvent[] = [];
      localStorage.setItem('rhdsColorScheme', 'dark');

      const el = await createFixture<RhSchemeToggle>(
        html`<rh-scheme-toggle @scheme-changed="${(e: SchemeChangedEvent) => initEvents.push(e)}"></rh-scheme-toggle>`
      );
      await el.updateComplete;

      expect(initEvents).to.have.length(0);
    });

    it('has bubbles and composed set to true', async function() {
      element.scheme = 'light';
      await element.updateComplete;

      expect(events[0]).to.exist;
      expect(events[0].bubbles).to.be.true;
      expect(events[0].composed).to.be.true;
    });

    it('carries the correct scheme for each value', async function() {
      element.scheme = 'dark';
      await element.updateComplete;
      element.scheme = 'light dark';
      await element.updateComplete;
      element.scheme = 'light';
      await element.updateComplete;

      expect(events.map(e => e.scheme)).to.deep.equal(['dark', 'light dark', 'light']);
    });
  });

  describe('programmatic scheme change', function() {
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

    it('checks the Light radio after setting scheme to "light"', async function() {
      element.scheme = 'light';
      await element.updateComplete;
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.have.axQuery({ name: 'Light', checked: true });
    });

    it('checks the Dark radio after setting scheme to "dark"', async function() {
      element.scheme = 'dark';
      await element.updateComplete;
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.have.axQuery({ name: 'Dark', checked: true });
    });

    it('checks the System radio after setting scheme to "light dark"', async function() {
      element.scheme = 'light dark';
      await element.updateComplete;
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.have.axQuery({ name: 'System', checked: true });
    });
  });
});
