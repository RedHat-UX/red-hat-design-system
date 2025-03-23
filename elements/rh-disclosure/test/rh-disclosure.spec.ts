import { expect, html, nextFrame } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { sendKeys } from '@web/test-runner-commands';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
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

  describe('with attribute summary', function() {
    let element: RhDisclosure;

    const SUMMARY = 'Summary title';
    const CONTENT = 'Details content goes here.';
    beforeEach(async function() {
      element = await createFixture<RhDisclosure>(html`
        <rh-disclosure summary="${SUMMARY}">
          <p>${CONTENT}</p>
        </rh-disclosure>
      `);
    });

    it('should be accessible', async function() {
      await expect(element).to.be.accessible();
    });

    it('exposes the summary to AT', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainQuery({ role: 'DisclosureTriangle', name: SUMMARY });
    });
  });

  describe('with slotted summary', function() {
    let element: RhDisclosure;
    let summary;

    const updateComplete = () => element.updateComplete;

    const SUMMARY = 'Summary title';
    const CONTENT = 'Details content goes here.';
    beforeEach(async function() {
      element = await createFixture<RhDisclosure>(html`
        <rh-disclosure>
          <span slot="summary">${SUMMARY}</span>
          <p>${CONTENT}</p>
        </rh-disclosure>
      `);
      summary = element.shadowRoot!.querySelector<HTMLElement>('summary');
    });

    it('should be accessible', async function() {
      await expect(element).to.be.accessible();
    });

    it('exposes the summary to AT', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot).to.axContainQuery({ role: 'DisclosureTriangle', name: SUMMARY });
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
      it('shows content to AT', async function() {
        const snapshot = await a11ySnapshot();
        expect(snapshot).to.axContainName(CONTENT);
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
        it('hides content from AT', async function() {
          const snapshot = await a11ySnapshot();
          expect(snapshot).to.not.axContainName(CONTENT);
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
