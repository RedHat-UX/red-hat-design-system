import type { TemplateResult } from 'lit';

import { expect, fixture, html, nextFrame, aTimeout } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';

import { RhSurface } from '@rhds/elements/rh-surface/rh-surface.js';

import {
  ContextConsumer,
  ContextConsumerProvider,
  ContextProviderConsumer,
} from './elements.js';

declare global {
  interface HTMLElementTagNameMap {
    'test-context-consumer': ContextConsumer;
    'test-context-consumer-provider': ContextConsumerProvider;
    'test-context-provider-consumer': ContextProviderConsumer;
  }
}

describe('<rh-surface>', function() {
  describe('simply instantiating', function() {
    let element: RhSurface;
    let consumer: ContextConsumer;
    const updateComplete = () => Promise.all([element.updateComplete, consumer?.updateComplete]);
    beforeEach(async function() {
      element = await createFixture<RhSurface>(html`<rh-surface></rh-surface>`);
    });
    it('should upgrade', async function() {
      const klass = customElements.get('rh-surface');
      expect(element)
          .to.be.an.instanceOf(klass)
          .and
          .to.be.an.instanceOf(RhSurface);
    });
    describe('setting darkest color palette', function() {
      beforeEach(function() {
        element.colorPalette = 'darkest';
      });
      beforeEach(updateComplete);
      describe('then imperatively adding children', function() {
        beforeEach(function() {
          consumer = document.createElement('test-context-consumer');
          element.append(consumer);
        });
        beforeEach(updateComplete);
        it('should notify the children', function() {
          expect(consumer.on).to.equal('dark');
        });
      });
    });
  });

  describe('with child', function() {
    let parent: RhSurface;
    let child: ContextConsumer;
    beforeEach(async function() {
      await fixture(html`
        <rh-surface id="p" color-palette="darkest">
          <test-context-consumer id="c"></test-context-consumer>
        </rh-surface>
      `);
      parent = document.getElementById('p') as RhSurface;
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
          let grandparent: RhSurface;
          let parent: RhSurface;
          let child: ContextConsumer;
          beforeEach(async function() {
            await fixture(template);
            grandparent = document.getElementById('gp') as RhSurface;
            parent = document.getElementById('p') as RhSurface;
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
        <rh-surface id="gp" color-palette="darkest">
          <rh-surface id="p">
            <test-context-consumer id="c"></test-context-consumer>
          </rh-surface>
        </rh-surface>
      `);

      describeNestedNoParentValue('consumer/provider', html`
        <rh-surface id="gp" color-palette="darkest">
          <rh-surface id="p">
            <test-context-consumer-provider id="c"></test-context-consumer-provider>
          </rh-surface>
        </rh-surface>
      `);

      describeNestedNoParentValue('provider/consumer', html`
        <rh-surface id="gp" color-palette="darkest">
          <rh-surface id="p">
            <test-context-provider-consumer id="c"></test-context-provider-consumer>
          </rh-surface>
        </rh-surface>
      `);
    });
    describe('and parent value is set', function() {
      function describeNestedWithParentValue(title: string, template: TemplateResult) {
        describe(`nested ${title}`, function() {
          let grandparent: RhSurface;
          let parent: RhSurface;
          let child: ContextConsumer;
          beforeEach(async function() {
            await fixture(template);
            grandparent = document.getElementById('gp') as RhSurface;
            parent = document.getElementById('p') as RhSurface;
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
        <rh-surface id="gp" color-palette="darkest">
          <rh-surface id="p" color-palette="lightest">
            <test-context-consumer id="c"></test-context-consumer>
          </rh-surface>
        </rh-surface>
      `);

      describeNestedWithParentValue('consumer/provider', html`
        <rh-surface id="gp" color-palette="darkest">
          <rh-surface id="p" color-palette="lightest">
            <test-context-consumer id="c"></test-context-consumer>
          </rh-surface>
        </rh-surface>
      `);

      describeNestedWithParentValue('provider/consumer', html`
        <rh-surface id="gp" color-palette="darkest">
          <rh-surface id="p" color-palette="lightest">
            <test-context-consumer id="c"></test-context-consumer>
          </rh-surface>
        </rh-surface>
      `);
    });
  });
});
