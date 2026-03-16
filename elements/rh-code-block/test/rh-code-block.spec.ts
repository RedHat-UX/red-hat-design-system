import { expect, html, aTimeout } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { sendMouse } from '@web/test-runner-commands';
import { spy, type SinonSpy } from 'sinon';

import { RhCodeBlock } from '../rh-code-block.js';

import { allUpdates, clickElementAtCenter } from '@patternfly/pfe-tools/test/utils.js';

interface TooltipLike extends HTMLElement {
  show(): Promise<void>;
  hide(): Promise<void>;
}

async function getCopyTooltip(element: RhCodeBlock): Promise<TooltipLike> {
  // rh-tooltip is lazy-imported, so wait for it to be defined
  await customElements.whenDefined('rh-tooltip');
  await allUpdates(element);
  return element.shadowRoot!.querySelector<TooltipLike>('rh-tooltip')!;
}

function getCopyButton(element: RhCodeBlock): HTMLButtonElement {
  return element.shadowRoot!.querySelector<HTMLButtonElement>('#action-copy')!;
}

/** Move the mouse to an empty area far from the element */
async function moveMouseAway() {
  await sendMouse({ position: [0, 0], type: 'move' });
}

describe('<rh-code-block>', function() {
  describe('simply instantiating', function() {
    let element: RhCodeBlock;
    beforeEach(async function() {
      element = await createFixture<RhCodeBlock>(html`<rh-code-block></rh-code-block>`);
    });
    it('should upgrade', function() {
      const klass = customElements.get('rh-code-block');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhCodeBlock);
    });
  });

  describe('with copy action', function() {
    let element: RhCodeBlock;
    let tooltip: TooltipLike;
    let button: HTMLButtonElement;
    let showSpy: SinonSpy;
    let hideSpy: SinonSpy;

    beforeEach(async function() {
      element = await createFixture<RhCodeBlock>(html`
        <rh-code-block actions="copy">
          <script type="text/css">body { color: red; }</script>
        </rh-code-block>
      `);
      await allUpdates(element);
      tooltip = await getCopyTooltip(element);
      button = getCopyButton(element);
      showSpy = spy(tooltip, 'show');
      hideSpy = spy(tooltip, 'hide');
    });

    afterEach(function() {
      showSpy?.restore();
      hideSpy?.restore();
    });

    describe('clicking the copy button', function() {
      beforeEach(async function() {
        await moveMouseAway();
        await clickElementAtCenter(button);
      });

      it('should show the tooltip with "Copied!" feedback', async function() {
        // The tooltip should be shown after clicking to display the "Copied!" message
        expect(showSpy.called).to.be.true;
      });

      describe('after the 5-second feedback timeout', function() {
        beforeEach(async function(this: Mocha.Context) {
          this.timeout(10_000);
          await aTimeout(5200);
        });

        it('should not show the tooltip when the mouse is not hovering', async function() {
          // After the feedback period ends, the tooltip should be hidden
          // and should NOT be re-shown since the mouse is not over the button.
          // This is the bug from issue #2854: the tooltip was re-appearing
          // after the 5-second delay even without user interaction.
          const tooltipContainer = tooltip.shadowRoot!.querySelector('#container');
          expect(tooltipContainer?.classList.contains('open')).to.be.false;
        });
      });

      describe('immediately after the feedback timeout (during fade-out)', function() {
        beforeEach(async function(this: Mocha.Context) {
          this.timeout(10_000);
          // Wait just past the 5s feedback period, but not long enough
          // for the 300ms CSS opacity transition to complete
          await aTimeout(5050);
        });

        it('should still show the "Copied!" label, not "Copy to Clipboard"', async function() {
          // During the tooltip's fade-out transition, the label text should
          // remain "Copied!" to avoid a visible flash of "Copy to Clipboard"
          const copiedLabel = element.shadowRoot!.querySelector('#copied-label');
          const defaultLabel = element.shadowRoot!.querySelector('#copy-to-clipboard-label');
          expect(copiedLabel).to.not.have.attribute('hidden');
          expect(defaultLabel).to.have.attribute('hidden');
        });
      });
    });

    describe('clicking the copy button multiple times rapidly', function() {
      beforeEach(async function(this: Mocha.Context) {
        this.timeout(15_000);
        await moveMouseAway();
        await clickElementAtCenter(button);
        await aTimeout(100);
        await clickElementAtCenter(button);
      });

      describe('after the feedback timeout from the last click', function() {
        beforeEach(async function(this: Mocha.Context) {
          this.timeout(10_000);
          await aTimeout(5300);
        });

        it('should not show the tooltip when the mouse is not hovering', async function() {
          // After rapid clicks, only the last copy invocation's timer should
          // be in effect. The tooltip should not reappear from stale timers.
          const tooltipContainer = tooltip.shadowRoot!.querySelector('#container');
          expect(tooltipContainer?.classList.contains('open')).to.be.false;
        });
      });
    });
  });
});
