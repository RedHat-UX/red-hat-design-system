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
                <rh-navigation-primary-item slot="links">
                  <a href="#links-example">Links example</a>
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

      for (const width of [1199, 1200, 1440, 1600]) {
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
          // Layout state is not applied while hydration is paused: the observer is gated
          // until the first update, so the component reports the SSR defaults here.
          expect(element.compact).to.be.true;
          expect(element.linksCompact).to.be.true;
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

          // On desktop the primary items live inside the hamburger `<details>`, which must be
          // open for them to be visible. The measured state is applied after the first update,
          // so the post-hydration render must commit the `open` attribute.
          const hamburger = element.shadowRoot!.querySelector<HTMLDetailsElement>('#hamburger')!;
          expect(hamburger.open).to.equal(width >= 1200);

          // The links menu is the same `<details>` pattern: its desktop open state must be
          // committed after the first update, when `linksCompact` becomes false.
          const linksMenu = element.shadowRoot!.querySelector<HTMLDetailsElement>('#links-menu')!;
          expect(linksMenu.open).to.equal(width >= 1440);
          if (populated) {
            const item = fixture.querySelector('rh-navigation-primary-item:not([slot])')!;
            expect(getComputedStyle(item).visibility).to.equal(width >= 1200 ? 'visible' : 'hidden');

            // Hydration must not cache a `compact` class that differs from the SSR DOM;
            // classMap would never remove the stale class.
            const itemContainer = item.shadowRoot!.querySelector('#container')!;
            expect(itemContainer.classList.contains('compact')).to.equal(width < 1200);
            expect(itemContainer.classList.contains('dehydrated')).to.be.false;

            const linksItem = fixture.querySelector('rh-navigation-primary-item[slot="links"]')!;
            expect(getComputedStyle(linksItem).visibility).to.equal(width >= 1440 ? 'visible' : 'hidden');
          }
        });
      }
    });
  }
});
