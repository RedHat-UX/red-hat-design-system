import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';

import { RhAnnouncement } from '@rhds/elements/rh-announcement/rh-announcement.js';

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

describe('when the element loads', function() {
  let element: RhAnnouncement;
  beforeEach(async function() {
    element = await createFixture<RhAnnouncement>(html`
      <rh-announcement>
        <svg slot="image"
             width="80"
             height="48"
             role="img"
             aria-label="Sample image">
          <rect fill="var(--rh-color-border-interactive-on-light, #0066cc)"
            fill-opacity="0.1"
            stroke="var(--rh-color-border-interactive-on-light, #0066cc)"
            stroke-width="2px"
            width="100%"
            height="100%"
            stroke-dasharray="4 4">
          </rect>
          <text x="17"
                y="30"
                style="font-family: var(--rh-font-family-code, RedHatMono, 'Red Hat Mono', 'Courier New', Courier, monospace); font-size: var(--rh-font-size-body-text-md, 1rem);"
                fill="var(--rh-color-blue-50, #0066CC)">
                  Image
          </text>
        </svg>
        <p>Main content</p>
        <rh-cta slot="cta">
          <a href="#">CTA Text</a>
        </rh-cta>
      </rh-announcement>
    `);
    await element.updateComplete;
  });

  it('should be accessible', async function() {
    await expect(element)
        .to.be.accessible();
  });
});
