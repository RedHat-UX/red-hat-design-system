import { expect, html, fixture } from '@open-wc/testing';
import { RhTooltip } from '../rh-tooltip.js';
import { setViewport, sendMouse } from '@web/test-runner-commands';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';

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

    it('passes the a11y audit', async function() {
      await Promise.resolve(expect(element).to.be.accessible());
    });
  });

  describe('with invoker and content', function() {
    let element: RhTooltip;
    const content = `I am the very model of a modern major general`;
    beforeEach(async function() {
      element = await fixture<RhTooltip>(html`
        <rh-tooltip position="left">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512">
            <path
              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z">
            </path>
          </svg>
          <div slot="content">${content}</div>
        </rh-tooltip>
      `);
    });

    it('content should not be available to assistive technology', async function() {
      const snapshot = await a11ySnapshot();
      expect(snapshot.children).to.not.be.ok;
    });

    describe('then clicking the invoker', function() {
      beforeEach(() => sendMouseToTooltip(element));
      it('content should be available to assistive technology', async function() {
        await sendMouseToTooltip(element);
        const snapshot = await a11ySnapshot();
        expect(snapshot.children?.length).to.equal(1);
        expect(snapshot.children?.at(0)?.role).to.equal('text');
        expect(snapshot.children?.at(0)?.name).to.equal(content);
      });
    });
  });
});
