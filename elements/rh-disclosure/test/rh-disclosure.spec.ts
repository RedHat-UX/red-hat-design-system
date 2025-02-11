import { expect, html, nextFrame } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { sendKeys } from '@web/test-runner-commands';
import { RhDisclosure } from '@rhds/elements/rh-disclosure/rh-disclosure.js';

function press(key: string) {
  return async function() {
    await sendKeys({ press: key });
  };
}

describe('<rh-disclosure>', function() {
  describe('simply instantiating', function() {
    let element: RhDisclosure;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-disclosure')).to.be.an.instanceof(RhDisclosure);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhDisclosure>(html`<rh-disclosure></rh-disclosure>`);
      const klass = customElements.get('rh-disclosure');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhDisclosure);
    });
  });

  describe('when the element loads', function() {
    let element: RhDisclosure;
    let summary;

    const updateComplete = () => element.updateComplete;

    beforeEach(async function() {
      element = await createFixture<RhDisclosure>(html`
        <rh-disclosure>
          <span slot="summary">Summary title</span>
          <p>Details content goes here.</p>
        </rh-disclosure>
      `);
      summary = element.shadowRoot!.querySelector<HTMLElement>('summary');
      await element.updateComplete;
    });

    it('should be accessible', async function() {
      await expect(element).to.be.accessible();
    });

    it('should be closed by default', function() {
      expect(element.open).to.be.false;
      const details = element.shadowRoot!.querySelector<HTMLDetailsElement>('details');
      expect(details?.open).to.be.false;
    });

    describe('clicking the summary', function() {
      beforeEach(function() {
        summary?.click();
      });
      beforeEach(updateComplete);
      beforeEach(nextFrame);

      it('opens the disclosure', function() {
        expect(element.open).to.be.true;
      });

      describe('clicking summary again', function() {
        beforeEach(function() {
          summary?.click();
        });
        beforeEach(updateComplete);
        beforeEach(nextFrame);

        it('closes the disclosure', function() {
          expect(element.open).to.be.false;
        });
      });
    });

    describe('keyboard interaction', function() {
      describe('pressing Escape with preventEscElements focused', function() {
        beforeEach(async function() {
          element = await createFixture<RhDisclosure>(html`
            <rh-disclosure open>
              <span slot="summary">Summary title</span>
              <input type="text" />
            </rh-disclosure>
          `);
          await element.updateComplete;
          const input = element.querySelector<HTMLInputElement>('input');
          input?.focus();
        });
        beforeEach(press('Escape'));
        beforeEach(updateComplete);
        beforeEach(nextFrame);

        it('does not close the disclosure', function() {
          expect(element.open).to.be.true;
        });
      });
    });
  });
});
