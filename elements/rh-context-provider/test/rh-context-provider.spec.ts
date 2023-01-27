import { expect, fixture, html, nextFrame, aTimeout } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhContextProvider } from '../rh-context-provider.js';

import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { ColorTheme } from '../../../lib/context/types.js';
import { colorContextConsumer, colorContextProvider } from '../../../lib/context/decorators.js';

@customElement('test-context-consumer')
export class ContextConsumer extends LitElement {
  @colorContextConsumer() on?: ColorTheme;
}

describe('<rh-context-provider>', function() {
  it('should upgrade', async function() {
    const el = await createFixture <RhContextProvider>(html`<rh-context-provider></rh-context-provider>`);
    const klass = customElements.get('rh-context-provider');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhContextProvider);
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

  describe('nested, with grandparent value and no parent value', function() {
    let grandparent: RhContextProvider;
    let parent: RhContextProvider;
    let child: ContextConsumer;
    beforeEach(async function() {
      await fixture(html`
        <rh-context-provider id="gp" color-palette="darkest">
          <rh-context-provider id="p">
            <test-context-consumer id="c"></test-context-consumer>
          </rh-context-provider>
        </rh-context-provider>
      `);
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

  describe('nested, with grandparent value and a parent value', function() {
    let grandparent: RhContextProvider;
    let parent: RhContextProvider;
    let child: ContextConsumer;
    beforeEach(async function() {
      await fixture(html`
        <rh-context-provider id="gp" color-palette="darkest">
          <rh-context-provider id="p" color-palette="lightest">
            <test-context-consumer id="c"></test-context-consumer>
          </rh-context-provider>
        </rh-context-provider>
      `);
      grandparent = document.getElementById('gp') as RhContextProvider;
      parent = document.getElementById('p') as RhContextProvider;
      child = document.getElementById('c') as ContextConsumer;
      await nextFrame();
    });
    it('does not set the grandparent context on the child', function() {
      // Parent color context should override the grandparent context
      expect(child.on).to.not.equal('dark');
      expect(child.on).to.equal('light');
    });
    describe('updating the grandparent context', function() {
      beforeEach(async function() {
        grandparent.colorPalette = 'darker';
        await aTimeout(100);
      });
      it('does not update the child context', function() {
        // Parent color context should override the grandparent context
        expect(child.on).to.not.equal('dark');
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
});
