import { expect, html, oneEvent } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
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

  describe('with icon="hat" and fallback content', function() {
    let event: undefined | Promise<Event>;
    beforeEach(async function() {
      element = await createFixture(html`
        <rh-icon icon="hat">fallback</rh-icon>
      `);
    });
    beforeEach(() => event = oneEvent(element, 'load'));
    afterEach(() => event = undefined);
    it('does not display fallback content', async function() {
      expect(await a11ySnapshot()).to.not.axContainName('fallback');
    });
    it('fires "load"', async function() {
      expect((await event)?.type).to.equal('load');
    });
  });

  describe('with icon="invalid-icon-name" and fallback content', function() {
    let event: undefined | Promise<Event>;
    beforeEach(async function() {
      element = await createFixture<RhIcon>(html`
        <rh-icon icon="invalid-icon-name">fallback</rh-icon>
      `);
    });
    afterEach(() => event = undefined);
    beforeEach(() => event = oneEvent(element, 'error'));
    it('fires "error"', async function() {
      expect((await event)?.type).to.equal('error');
    });
    it('displays fallback content', async function() {
      expect(await a11ySnapshot()).to.axContainName('fallback');
    });
  });
});
