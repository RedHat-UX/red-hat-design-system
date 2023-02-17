import { expect, fixture, html, nextFrame, aTimeout } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhContextProvider } from '../rh-context-provider.js';

import { LitElement, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { colorContextConsumer, type ColorTheme } from '../../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../../lib/context/color/provider.js';

@customElement('test-context-consumer')
export class ContextConsumer extends LitElement {
  @colorContextConsumer() on?: ColorTheme;
}

@customElement('test-context-consumer-provider')
export class ContextConsumerProvider extends LitElement {
  @colorContextConsumer() on?: ColorTheme;
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;
}

@customElement('test-context-provider-consumer')
export class ContextProviderConsumer extends LitElement {
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @colorContextConsumer() on?: ColorTheme;
}

declare global {
  interface HTMLElementTagNameMap {
    'test-context-consumer': ContextConsumer;
    'test-context-consumer-provider': ContextConsumerProvider;
    'test-context-provider-consumer': ContextProviderConsumer;
  }
}

describe('<rh-context-provider>', function() {
  describe('simply instantiating', function() {
    let element: RhContextProvider;
    beforeEach(async function() {
      element = await createFixture<RhContextProvider>(html`<rh-context-provider></rh-context-provider>`);
    });
    it('should upgrade', async function() {
      const klass = customElements.get('rh-context-provider');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhContextProvider);
    });
    describe('setting darkest color palette', function() {
      beforeEach(async function() {
        element.colorPalette = 'darkest';
        await element.updateComplete;
      });
      describe('then imperatively adding children', function() {
        beforeEach(async function() {
          element.append(document.createElement('test-context-consumer'));
        });
        it('should notify the children', function() {
          expect(element.querySelector('test-context-consumer')?.on).to.equal('dark');
        });
      });
    });
  });

  describe('with child', function() {
    let parent: RhContextProvider;
    let child: ContextConsumer;
    beforeEach(async function() {
      await fixture(html`
        <rh-context-provider id="p" color-palette="darkest">
          <test-context-consumer id="c"></test-context-consumer>
        </rh-context-provider>
      `);
      parent = document.getElementById('p') as RhContextProvider;
      child = document.getElementById('c') as ContextConsumer;
      await nextFrame();
    });
    it('sets the parent context on the child', function() {
      expect(child.on).to.equal('dark');
    });
    describe('updating the parent context', function() {
      beforeEach(async function() {
        parent.colorPalette = 'lightest';
        await nextFrame();
      });
      it('updates the child context', function() {
        expect(child.on).to.equal('light');
      });
    });
  });

  describe('with grandparent value', function() {
    describe('and no parent value', function() {
      function describeNestedNoParentValue(title: string, template: TemplateResult) {
        describe(`and nested ${title}`, function() {
          let grandparent: RhContextProvider;
          let parent: RhContextProvider;
          let child: ContextConsumer;
          beforeEach(async function() {
            await fixture(template);
            grandparent = document.getElementById('gp') as RhContextProvider;
            parent = document.getElementById('p') as RhContextProvider;
            child = document.getElementById('c') as ContextConsumer;
            await nextFrame();
          });
          it('sets the grandparent context on the child', function() {
            expect(child.on).to.equal('dark');
          });
          describe('updating the parent context', function() {
            beforeEach(async function() {
              parent.colorPalette = 'lightest';
              await nextFrame();
            });
            it('updates the child context', function() {
              expect(child.on).to.equal('light');
            });
          });
          describe('updating the grandparent context', function() {
            beforeEach(async function() {
              grandparent.colorPalette = 'lightest';
              await aTimeout(100);
            });
            it('updates the child context', function() {
              expect(child.on).to.equal('light');
            });
            describe('then updating the parent context', function() {
              beforeEach(async function() {
                parent.colorPalette = 'darker';
                await aTimeout(100);
              });
              it('updates the child context', function() {
                expect(child.on).to.equal('dark');
              });
            });
          });
        });
      }

      describeNestedNoParentValue('consumer', html`
        <rh-context-provider id="gp" color-palette="darkest">
          <rh-context-provider id="p">
            <test-context-consumer id="c"></test-context-consumer>
          </rh-context-provider>
        </rh-context-provider>
      `);

      describeNestedNoParentValue('consumer/provider', html`
        <rh-context-provider id="gp" color-palette="darkest">
          <rh-context-provider id="p">
            <test-context-consumer-provider id="c"></test-context-consumer-provider>
          </rh-context-provider>
        </rh-context-provider>
      `);

      describeNestedNoParentValue('provider/consumer', html`
        <rh-context-provider id="gp" color-palette="darkest">
          <rh-context-provider id="p">
            <test-context-provider-consumer id="c"></test-context-provider-consumer>
          </rh-context-provider>
        </rh-context-provider>
      `);
    });
    describe('and parent value is set', function() {
      function describeNestedWithParentValue(title: string, template: TemplateResult) {
        describe(`nested ${title}`, function() {
          let grandparent: RhContextProvider;
          let parent: RhContextProvider;
          let child: ContextConsumer;
          beforeEach(async function() {
            await fixture(template);
            grandparent = document.getElementById('gp') as RhContextProvider;
            parent = document.getElementById('p') as RhContextProvider;
            child = document.getElementById('c') as ContextConsumer;
            await Promise.all([grandparent, parent, child].map(x => x.updateComplete));
          });
          it('does not set the grandparent context on the child', function() {
            // Parent color context should override the grandparent context
            expect(child.on).to.not.equal('dark');
            expect(child.on).to.equal('light');
          });
          describe('updating the grandparent context', function() {
            beforeEach(async function() {
              grandparent.colorPalette = 'darker';
              await Promise.all([grandparent, parent, child].map(x => x.updateComplete));
            });
            it('does not update the child context', function() {
              // Parent color context should override the grandparent context
              expect(child.on).to.equal('light');
            });
            describe('then updating the parent context', function() {
              beforeEach(async function() {
                parent.colorPalette = 'darker';
                await aTimeout(100);
              });
              it('updates the child context', function() {
                expect(child.on).to.equal('dark');
              });
            });
          });
        });
      }

      describeNestedWithParentValue('consumer', html`
        <rh-context-provider id="gp" color-palette="darkest">
          <rh-context-provider id="p" color-palette="lightest">
            <test-context-consumer id="c"></test-context-consumer>
          </rh-context-provider>
        </rh-context-provider>
      `);

      describeNestedWithParentValue('consumer/provider', html`
        <rh-context-provider id="gp" color-palette="darkest">
          <rh-context-provider id="p" color-palette="lightest">
            <test-context-consumer id="c"></test-context-consumer>
          </rh-context-provider>
        </rh-context-provider>
      `);

      describeNestedWithParentValue('provider/consumer', html`
        <rh-context-provider id="gp" color-palette="darkest">
          <rh-context-provider id="p" color-palette="lightest">
            <test-context-consumer id="c"></test-context-consumer>
          </rh-context-provider>
        </rh-context-provider>
      `);
    });
  });
});
