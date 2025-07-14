import { expect, html, nextFrame } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhSchemeToggle } from '@rhds/elements/rh-scheme-toggle/rh-scheme-toggle.js';
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

      describe('LeftArrow', function() {
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
});
