import { expect, html, fixture } from '@open-wc/testing';
import { ifDefined } from 'lit/directives/if-defined.js';
import { RhTooltip } from '../rh-tooltip.js';
import { setViewport, sendMouse } from '@web/test-runner-commands';

const basicElement = html`
<rh-tooltip position="left">
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512">
    <path
      d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z">
    </path>
  </svg>
  <div slot="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Mi eget mauris pharetra et ultrices.
  </div>
</rh-tooltip>
`;

const createElement = async (position: RhTooltip['position']) => {
  const container = await fixture(html`
    <div style="padding:500px;">
      <rh-tooltip position="${position}">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512">
          <path
            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z">
          </path>
        </svg>
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Mi eget mauris pharetra et ultrices.
        </div>
      </rh-tooltip>
    </div>`);

  const element = container.querySelector('rh-tooltip') as RhTooltip;
  return element;
};

const sendMouseToTooltip = async (element: RhTooltip) => {
  const { x, y } = element!.getBoundingClientRect();
  await sendMouse({ position: [x, y], type: 'move' });
  await element.updateComplete;
};

describe('<rh-tooltip>', function() {
  beforeEach(async function() {
    await setViewport({ width: 1000, height: 1000 });
  });
  describe('simply instantiating', function() {
    let element: RhTooltip;
    beforeEach(async function() {
      element = await fixture<RhTooltip>(html`<rh-tooltip></rh-tooltip>`);
    });
    it('should upgrade', function() {
      const klass = customElements.get('rh-tooltip');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhTooltip);
    });
    it.skip('should be accessible', async function() {
      // TODO: fix in pfe. aria-labelledby refers to an aria-hidden element when tooltip is not shown
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  describe('position', function() {
    for (const position of ['left', 'top', 'right', 'bottom'] as const) {
      describe(position, function() {
        let placement: string;
        beforeEach(async function() {
          const element = await createElement(position);
          await sendMouseToTooltip(element);
          placement = element.shadowRoot
            ?.querySelector('#container')
            ?.getAttribute('class');
        });
        it('reflects', function() {
          expect(placement).to.contain(position);
        });
      });
    }
  });

  describe('with invoker and content', function() {
    let element: RhTooltip;
    beforeEach(async function() {
      element = await fixture<RhTooltip>(basicElement);
    });

    it('content should be aria-hidden', function() {
      const ariaHidden = element.shadowRoot
        ?.querySelector('#tooltip')
        ?.getAttribute('aria-hidden');
      expect(ariaHidden).to.equal('true');
    });

    describe('then clicking the invoker', function() {
      it('the content should not be aria-hidden', async function() {
        await sendMouseToTooltip(element);
        const ariaHidden = element.shadowRoot
          ?.querySelector('#tooltip')
          ?.getAttribute('aria-hidden');
        expect(ariaHidden).to.equal('false');
      });
    });
  });
});

