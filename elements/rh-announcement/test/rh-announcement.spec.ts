import { expect, html, oneEvent } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';

import { AnnouncementCloseEvent, RhAnnouncement } from '@rhds/elements/rh-announcement/rh-announcement.js';

describe('<rh-announcement>', function() {
  describe('simply instantiating', function() {
    let element: RhAnnouncement;
    it('imperatively instantiates', function() {
      expect(document.createElement('rh-announcement')).to.be.an.instanceof(RhAnnouncement);
    });

    it('should upgrade', async function() {
      element = await createFixture<RhAnnouncement>(html`<rh-announcement></rh-announcement>`);
      const klass = customElements.get('rh-announcement');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhAnnouncement);
    });
  });
});

describe('with `dismissable` and `image-position` attributes, a slotted image, and a slotted cta', function() {
  let element: RhAnnouncement;
  let elementCloseButton: HTMLButtonElement | undefined | null;
  beforeEach(async function() {
    element = await createFixture<RhAnnouncement>(html`
      <rh-announcement dismissable image-position="inline-start">
        <svg slot="image" aria-label="Sample image" height="48" role="img" width="80">
          <rect fill="light-dark(var(--rh-color-surface-dark, #383838), var(--rh-color-surface-light, #e0e0e0))" height="100%" stroke="var(--rh-color-border-subtle)" stroke-dasharray="4 4" stroke-width="2px" width="100%"></rect>
          <text style="font-family: var(--rh-font-family-code, RedHatMono, 'Red Hat Mono', 'Courier New', Courier, monospace); font-size: var(--rh-font-size-body-text-md, 1rem);" fill="light-dark(var(--rh-color-text-primary-on-dark, #ffffff), var(--rh-color-text-primary-on-light, #151515))" x="17" y="30">
            Image
          </text>
        </svg>
        <p>Main content</p>
        <rh-cta slot="cta" href="#">CTA Text</rh-cta>
      </rh-announcement>
    `);
    await element.updateComplete;
    elementCloseButton = element.shadowRoot?.querySelector('#close-button');
  });

  it('should be accessible', async function() {
    await expect(element)
        .to.be.accessible();
  });

  describe('clicking the close button', function() {
    let event: Event;
    beforeEach(async function() {
      const eventPromise = oneEvent(element, 'close');
      elementCloseButton?.click();
      event = await eventPromise;
    });

    it('should send a close event', function() {
      expect(event).to.be.an.instanceOf(AnnouncementCloseEvent);
      expect(event.type).to.equal('close');
    });

    it('should remove the rh-announcement from DOM', function() {
      expect(element.isConnected).to.be.false;
    });
  });
});
