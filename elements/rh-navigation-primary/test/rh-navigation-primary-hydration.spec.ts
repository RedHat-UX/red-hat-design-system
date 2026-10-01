// Hydration support must load before LitElement, including through the test helpers.
import '@lit-labs/ssr-client/lit-element-hydrate-support.js';

import { expect } from '@open-wc/testing';
import { executeServerCommand } from '@web/test-runner-commands';
import { hydrateShadowRoots } from '@webcomponents/template-shadowroot/template-shadowroot.js';

import type { RhNavigationPrimary } from '../rh-navigation-primary.js';
import '../rh-navigation-primary.js';

describe('<rh-navigation-primary> hydration', function() {
  for (const populated of [false, true]) {
    describe(populated ? 'with navigation items' : 'without navigation items', function() {
      let markup: string;
      let fixture: HTMLDivElement;

      before(async function() {
        markup = await executeServerCommand('render-ssr-fixture', {
          html: `
            <rh-navigation-primary defer-hydration>
              ${populated ? `
                <rh-navigation-primary-item>
                  <a href="#example">Example</a>
                </rh-navigation-primary-item>
              ` : ''}
            </rh-navigation-primary>
          `,
          importSpecifiers: ['@rhds/elements/rh-navigation-primary/rh-navigation-primary.js'],
        });
      });

      afterEach(function() {
        fixture?.remove();
      });

      for (const width of [1199, 1200, 1600]) {
        it(`reconciles the layout after deferred hydration at ${width}px`, async function() {
          fixture = document.createElement('div');
          fixture.style.width = `${width}px`;
          fixture.innerHTML = markup;
          // Attach the server-rendered shadow roots before connecting the elements.
          hydrateShadowRoots(fixture);
          document.body.append(fixture);

          const element = fixture.querySelector<RhNavigationPrimary>('rh-navigation-primary')!;
          const container = element.shadowRoot!.querySelector('#container')!;

          // Allow the component's native ResizeObserver to run while hydration is deferred.
          await new Promise<void>(resolve => {
            const observer = new ResizeObserver(() => {
              observer.disconnect();
              resolve();
            });
            observer.observe(element);
          });

          expect(element.hasUpdated).to.be.false;
          expect(element.compact).to.equal(width < 1200);
          expect(element.linksCompact).to.equal(width < 1440);
          expect(container.classList.contains('compact')).to.be.true;
          expect(container.classList.contains('dehydrated')).to.be.true;

          element.removeAttribute('defer-hydration');
          await element.updateComplete;
          await element.updateComplete;

          // Hydration must reuse the SSR DOM and bring its classes into line with the measured width.
          expect(element.shadowRoot!.querySelector('#container')).to.equal(container);
          expect(element.hasUpdated).to.be.true;
          expect(container.classList.contains('compact')).to.equal(width < 1200);
          expect(container.classList.contains('dehydrated')).to.be.false;
        });
      }
    });
  }
});
