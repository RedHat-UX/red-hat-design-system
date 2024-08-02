import { expect, html, oneEvent } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhIcon } from '@rhds/elements/rh-icon/rh-icon.js';

describe('<rh-icon>', function() {
  let element: RhIcon;
  beforeEach(async function() {
    element = await createFixture(html`<rh-icon></rh-icon>`);
  });

  describe('simply instantiating', function() {
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-icon')).to.be.an.instanceof(RhIcon);
    });

    it('should upgrade', async function() {
      const klass = customElements.get('rh-icon');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhIcon);
    });
  });

  describe('when the icon has a fallback content', function() {
    before(async function() {
      element = await createFixture(html`
        <rh-icon icon="no-scrubs">
          <p>Image failed to load.</p>. 
        </rh-icon>`);
      await oneEvent(element, 'error', false);
    });
    it('should display the fallback', function() {
      expect(element.shadowRoot!.querySelector('svg')).to.not.be.ok;
      expect(element).shadowDom.to.equal(`
        <div id="container" class="standard" aria-hidden="true">
          <span part="fallback">
            <slot></slot>
          </span>
        </div>`);
    });
  });
});
