/// <reference types="mocha" />
import '@lit-labs/ssr-client/lit-element-hydrate-support.js';

import { expect, html, nextFrame } from '@open-wc/testing';
import { executeServerCommand } from '@web/test-runner-commands';
import { hydrateShadowRoots } from '@webcomponents/template-shadowroot/template-shadowroot.js';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { a11ySnapshot } from '@patternfly/pfe-tools/test/a11y-snapshot.js';
import { RhButton } from '../rh-button.js';

function internalButton(element: RhButton): HTMLButtonElement {
  const button = element.shadowRoot?.querySelector('button');
  if (!button) {
    throw new Error('internal button was not rendered');
  }
  return button;
}

const template = html`
  <rh-button></rh-button>
`;

describe('<rh-button>', function() {
  it('should upgrade', async function() {
    const element = await createFixture<RhButton>(template);
    const klass = customElements.get('rh-button');
    expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(RhButton);
  });

  it('uses accessible-label as the button accessible name', async function() {
    const element = await createFixture<RhButton>(html`
      <rh-button accessible-label="Search">Search</rh-button>
    `);
    const button = element.shadowRoot?.querySelector('button');
    const text = element.shadowRoot?.querySelector('#text')?.parentElement;

    expect(button?.getAttribute('aria-label')).to.equal('Search');
    expect(text?.getAttribute('aria-hidden')).to.equal('true');
  });

  it('does not use the deprecated label attribute', async function() {
    const element = await createFixture<RhButton>(html`
      <rh-button label="Search">Search</rh-button>
    `);
    const button = element.shadowRoot?.querySelector('button');
    const text = element.shadowRoot?.querySelector('#text')?.parentElement;

    expect(button?.hasAttribute('aria-label')).to.equal(false);
    expect(text?.getAttribute('aria-hidden')).to.equal('false');
  });

  it('names the internal button from slotted text', async function() {
    await createFixture<RhButton>(html`<rh-button>Save</rh-button>`);
    expect(await a11ySnapshot()).to.axContainQuery({ role: 'button', name: 'Save' });
  });

  it('omits empty id reference attributes', async function() {
    const element = await createFixture<RhButton>(html`<rh-button>Save</rh-button>`);
    const button = internalButton(element);
    expect(button.hasAttribute('aria-controls')).to.equal(false);
    expect(button.hasAttribute('aria-labelledby')).to.equal(false);
    expect(button.hasAttribute('aria-describedby')).to.equal(false);
  });

  describe('ARIA on the host', function() {
    let element: RhButton;
    let button: HTMLButtonElement;

    beforeEach(async function() {
      element = await createFixture<RhButton>(html`
        <rh-button variant="primary"
                   aria-expanded="false"
                   aria-controls="drawer-panel"
                   aria-pressed="false"
                   aria-haspopup="dialog"
                   aria-label="Ask AI"
                   aria-describedby="drawer-desc">Ask AI</rh-button>
        <div id="drawer-panel">Panel content</div>
        <span id="drawer-desc">Opens the assistant</span>
      `);
      button = internalButton(element);
    });

    it('forwards state to the internal button and removes it from the host', function() {
      expect(button.getAttribute('aria-expanded')).to.equal('false');
      expect(button.getAttribute('aria-pressed')).to.equal('false');
      expect(button.getAttribute('aria-haspopup')).to.equal('dialog');
      expect(button.getAttribute('aria-label')).to.equal('Ask AI');
      expect(element.getAttribute('aria-expanded')).to.equal(null);
      expect(element.getAttribute('aria-controls')).to.equal(null);
      expect(element.getAttribute('aria-label')).to.equal(null);
      expect(element.ariaExpanded).to.equal('false');
      expect(element.ariaControls).to.equal('drawer-panel');
      expect(element.ariaLabel).to.equal('Ask AI');
    });

    it('hides slotted text from assistive technology when aria-label is set', function() {
      expect(element.shadowRoot?.querySelector('#text')?.parentElement?.getAttribute('aria-hidden'))
          .to.equal('true');
    });

    it('exposes the accessible name', async function() {
      expect(await a11ySnapshot()).to.axContainQuery({
        role: 'button',
        name: 'Ask AI',
      });
    });

    it('passes automated accessibility checks', async function() {
      await expect(element).to.be.accessible();
    });

    it('links aria-controls to the internal button', function() {
      const panel = document.getElementById('drawer-panel');
      expect(panel).to.not.equal(null);
      expect(element.ariaControls).to.equal('drawer-panel');
      if ('ariaControlsElements' in Element.prototype) {
        expect(button.ariaControlsElements?.[0]).to.equal(panel);
      } else {
        expect(button.getAttribute('aria-controls')).to.equal('drawer-panel');
      }
    });

    it('uses aria-describedby text as the description', function() {
      expect(button.hasAttribute('aria-describedby')).to.equal(false);
      expect(button.getAttribute('aria-description')).to.equal('Opens the assistant');
    });

    it('updates the internal button when the expanded state changes', async function() {
      element.ariaExpanded = 'true';
      await element.updateComplete;
      expect(button.getAttribute('aria-expanded')).to.equal('true');
      expect(element.hasAttribute('aria-expanded')).to.equal(false);
      expect(await a11ySnapshot()).to.axContainQuery({
        role: 'button',
        name: 'Ask AI',
        expanded: true,
      });
    });

    it('clears the expanded state when the property is cleared', async function() {
      element.ariaExpanded = null;
      await element.updateComplete;
      expect(button.hasAttribute('aria-expanded')).to.equal(false);
    });

    it('accepts a later attribute change', async function() {
      element.setAttribute('aria-expanded', 'true');
      await element.updateComplete;
      expect(element.ariaExpanded).to.equal('true');
      expect(element.hasAttribute('aria-expanded')).to.equal(false);
      expect(button.getAttribute('aria-expanded')).to.equal('true');
    });

    it('drops a repeated attribute value from the host', function() {
      element.setAttribute('aria-expanded', 'false');
      expect(element.hasAttribute('aria-expanded')).to.equal(false);
      expect(element.ariaExpanded).to.equal('false');
      expect(button.getAttribute('aria-expanded')).to.equal('false');
    });

    it('prefers accessible-label over aria-label', async function() {
      element.accessibleLabel = 'Search';
      await element.updateComplete;
      expect(button.getAttribute('aria-label')).to.equal('Search');
    });

    it('prefers aria-labelledby text over aria-label', async function() {
      const labelled = await createFixture<RhButton>(html`
        <rh-button aria-labelledby="precedence-label" aria-label="Literal">Slotted</rh-button>
        <span id="precedence-label">Referenced</span>
      `);
      expect(internalButton(labelled).getAttribute('aria-label')).to.equal('Referenced');
    });

    it('prefers aria-describedby text over aria-description', async function() {
      const described = await createFixture<RhButton>(html`
        <rh-button aria-describedby="precedence-desc"
                   aria-description="Literal">Slotted</rh-button>
        <span id="precedence-desc">Referenced</span>
      `);
      expect(internalButton(described).getAttribute('aria-description')).to.equal('Referenced');
    });
  });

  describe('when element reflection is supported', function() {
    const supportsReflection = typeof Element !== 'undefined'
      && 'ariaLabelledByElements' in Element.prototype;

    (supportsReflection ? it : it.skip)('reflects the referenced label element', async function() {
      const element = await createFixture<RhButton>(html`
        <rh-button aria-labelledby="reflected-label"></rh-button>
        <span id="reflected-label">Ask AI</span>
      `);
      expect(internalButton(element).ariaLabelledByElements?.[0])
          .to.equal(document.getElementById('reflected-label'));
    });

    (supportsReflection ? it : it.skip)('reflects the referenced description element', async function() {
      const element = await createFixture<RhButton>(html`
        <rh-button aria-describedby="reflected-desc">Save</rh-button>
        <span id="reflected-desc">Opens the assistant</span>
      `);
      expect(internalButton(element).ariaDescribedByElements?.[0])
          .to.equal(document.getElementById('reflected-desc'));
    });

    (supportsReflection ? it : it.skip)('gives accessible-label precedence over reflected labels', async function() {
      const element = await createFixture<RhButton>(html`
        <rh-button aria-labelledby="reflected-override" accessible-label="Search"></rh-button>
        <span id="reflected-override">Ask AI</span>
      `);
      expect(internalButton(element).ariaLabelledByElements).to.equal(null);
      expect(internalButton(element).getAttribute('aria-label')).to.equal('Search');
    });
  });

  describe('aria-labelledby', function() {
    it('uses the referenced element as the accessible name', async function() {
      const element = await createFixture<RhButton>(html`
        <rh-button aria-labelledby="ask-label">ignored</rh-button>
        <span id="ask-label">Ask AI</span>
      `);
      const button = internalButton(element);
      expect(element.hasAttribute('aria-labelledby')).to.equal(false);
      expect(button.hasAttribute('aria-labelledby')).to.equal(false);
      expect(button.getAttribute('aria-label')).to.equal('Ask AI');
      expect(await a11ySnapshot()).to.axContainQuery({ role: 'button', name: 'Ask AI' });
    });
  });

  describe('referenced text', function() {
    it('excludes aria-hidden descendants from a referenced label', async function() {
      const element = await createFixture<RhButton>(html`
        <rh-button aria-labelledby="hidden-label"></rh-button>
        <span id="hidden-label">Ask AI <span aria-hidden="true">hidden</span></span>
      `);
      expect(internalButton(element).getAttribute('aria-label')).to.equal('Ask AI');
      expect(await a11ySnapshot()).to.axContainQuery({ role: 'button', name: 'Ask AI' });
    });

    it('excludes hidden descendants from a referenced description', async function() {
      const element = await createFixture<RhButton>(html`
        <rh-button aria-describedby="hidden-desc">Save</rh-button>
        <span id="hidden-desc">Visible <span hidden>hidden</span></span>
      `);
      expect(internalButton(element).getAttribute('aria-description')).to.equal('Visible');
    });

    it('names the button from an SVG label', async function() {
      const element = await createFixture<RhButton>(html`
        <rh-button aria-labelledby="svg-label"></rh-button>
        <svg id="svg-label" aria-label="SVG name"></svg>
      `);
      expect(internalButton(element).getAttribute('aria-label')).to.equal('SVG name');
    });
  });

  describe('references across shadow roots', function() {
    it('follows a label inserted in an ancestor root', async function() {
      const outer = document.createElement('div');
      document.body.append(outer);
      const outerRoot = outer.attachShadow({ mode: 'open' });
      outerRoot.innerHTML = '<div id="inner-host"></div>';
      const innerHost = outerRoot.querySelector<HTMLElement>('#inner-host')!;
      const innerRoot = innerHost.attachShadow({ mode: 'open' });
      innerRoot.innerHTML = '<rh-button aria-labelledby="outer-late"></rh-button>';
      const element = innerRoot.querySelector<RhButton>('rh-button')!;
      await element.updateComplete;

      const label = document.createElement('span');
      label.id = 'outer-late';
      label.textContent = 'Outer late';
      document.body.append(label);
      await nextFrame();
      await element.updateComplete;
      expect(internalButton(element).getAttribute('aria-label')).to.equal('Outer late');

      label.textContent = 'Outer changed';
      await nextFrame();
      await element.updateComplete;
      expect(internalButton(element).getAttribute('aria-label')).to.equal('Outer changed');
      outer.remove();
      label.remove();
    });

    it('keeps following references after the button is moved', async function() {
      const element = await createFixture<RhButton>(html`
        <rh-button aria-labelledby="moved-label"></rh-button>
        <span id="moved-label">First</span>
      `);
      const label = document.getElementById('moved-label')!;
      element.remove();
      document.body.append(element);
      await element.updateComplete;

      label.textContent = 'Second';
      await nextFrame();
      await element.updateComplete;
      expect(internalButton(element).getAttribute('aria-label')).to.equal('Second');
      element.remove();
    });
  });

  describe('when element reflection does not stick', function() {
    const properties = ['ariaLabelledByElements', 'ariaDescribedByElements'] as const;
    const descriptors = new Map<string, PropertyDescriptor | undefined>();

    beforeEach(function() {
      for (const property of properties) {
        descriptors.set(property, Object.getOwnPropertyDescriptor(Element.prototype, property));
        Object.defineProperty(Element.prototype, property, {
          configurable: true,
          get: () => null,
          set() {
            // Ignore assignment so the button falls back to the referenced text.
          },
        });
      }
    });

    afterEach(function() {
      for (const property of properties) {
        const descriptor = descriptors.get(property);
        if (descriptor) {
          Object.defineProperty(Element.prototype, property, descriptor);
        } else {
          delete Element.prototype[property as keyof Element];
        }
      }
    });

    it('falls back to the text of the referenced elements', async function() {
      const element = await createFixture<RhButton>(html`
        <rh-button aria-labelledby="ask-label" aria-describedby="ask-desc"></rh-button>
        <span id="ask-label">Ask AI</span>
        <span id="ask-desc">Opens the assistant</span>
      `);
      const button = internalButton(element);
      expect(button.getAttribute('aria-label')).to.equal('Ask AI');
      expect(button.getAttribute('aria-description')).to.equal('Opens the assistant');
      expect(await a11ySnapshot()).to.axContainQuery({ role: 'button', name: 'Ask AI' });
    });
  });

  it('resolves aria-controls when the target is parsed after the button', async function() {
    const element = await createFixture<RhButton>(html`
      <rh-button aria-controls="late-panel" aria-label="Ask AI"></rh-button>
    `);
    const panel = document.createElement('div');
    panel.id = 'late-panel';
    element.after(panel);
    await nextFrame();
    await element.updateComplete;
    expect(element.ariaControls).to.equal('late-panel');
    expect(element.hasAttribute('aria-controls')).to.equal(false);
    expect(internalButton(element).getAttribute('aria-controls')).to.equal(panel.id);
  });

  it('names the button from an external element whose id matches an internal slot', async function() {
    const element = await createFixture<RhButton>(html`
      <rh-button aria-labelledby="text"></rh-button>
      <span id="text">External name</span>
    `);
    const button = internalButton(element);
    expect(button.hasAttribute('aria-labelledby')).to.equal(false);
    expect(button.getAttribute('aria-label')).to.equal('External name');
    expect(await a11ySnapshot()).to.axContainQuery({ role: 'button', name: 'External name' });
  });

  it('describes the button from an external element whose id matches an internal slot', async function() {
    const element = await createFixture<RhButton>(html`
      <rh-button aria-describedby="icon">Save</rh-button>
      <span id="icon">More detail</span>
    `);
    const button = internalButton(element);
    expect(button.hasAttribute('aria-describedby')).to.equal(false);
    expect(button.getAttribute('aria-description')).to.equal('More detail');
  });

  it('reads a label inserted after several frames and a later text change', async function() {
    const element = await createFixture<RhButton>(html`
      <rh-button aria-labelledby="late-label"></rh-button>
    `);
    await nextFrame();
    await nextFrame();
    const label = document.createElement('span');
    label.id = 'late-label';
    label.textContent = 'Ask AI';
    element.after(label);
    await nextFrame();
    await element.updateComplete;
    expect(internalButton(element).getAttribute('aria-label')).to.equal('Ask AI');

    label.textContent = 'Search';
    await nextFrame();
    await element.updateComplete;
    expect(internalButton(element).getAttribute('aria-label')).to.equal('Search');
  });

  it('follows a changed aria-controls id', async function() {
    const element = await createFixture<RhButton>(html`
      <rh-button aria-controls="first-panel" aria-label="Ask AI"></rh-button>
      <div id="first-panel"></div>
      <div id="second-panel"></div>
    `);
    element.ariaControls = 'second-panel';
    await element.updateComplete;
    expect(internalButton(element).getAttribute('aria-controls')).to.equal('second-panel');
  });

  it('keeps aria-controls when the target leaves the tree', async function() {
    const element = await createFixture<RhButton>(html`
      <rh-button aria-controls="gone-panel" aria-label="Ask AI"></rh-button>
      <div id="gone-panel"></div>
    `);
    document.getElementById('gone-panel')?.remove();
    await nextFrame();
    await element.updateComplete;
    expect(internalButton(element).getAttribute('aria-controls')).to.equal('gone-panel');
  });

  describe('server rendering', function() {
    it('uses slotted text when aria-labelledby cannot be resolved', async function() {
      const markup = await executeServerCommand('render-ssr-fixture', {
        html: `<rh-button aria-labelledby="ext-name">Save</rh-button><span id="ext-name">External</span>`,
        importSpecifiers: ['@rhds/elements/rh-button/rh-button.js'],
      }) as string;
      const fixture = document.createElement('div');
      fixture.innerHTML = markup;
      hydrateShadowRoots(fixture);
      const button = fixture.querySelector('rh-button')?.shadowRoot?.querySelector('button');
      const text = button?.querySelector('#text')?.parentElement;
      expect(button?.hasAttribute('aria-labelledby')).to.equal(false);
      // Lit SSR renders light DOM after the shadow template, so the name is the
      // projected slot text until hydration can resolve the external id.
      const namedByLabel = button?.getAttribute('aria-label') === 'Save';
      const namedBySlot = text?.getAttribute('aria-hidden') !== 'true' && markup.includes('Save');
      expect(namedByLabel || namedBySlot).to.equal(true);

      document.body.append(fixture);
      const element = fixture.querySelector<RhButton>('rh-button')!;
      element.removeAttribute('defer-hydration');
      await element.updateComplete;
      await element.updateComplete;
      expect(internalButton(element).getAttribute('aria-label')).to.equal('External');
      fixture.remove();
    });

    it('keeps aria-controls in server markup', async function() {
      const markup = await executeServerCommand('render-ssr-fixture', {
        html: `<rh-button aria-controls="drawer-panel" aria-label="Ask AI"></rh-button>`,
        importSpecifiers: ['@rhds/elements/rh-button/rh-button.js'],
      }) as string;
      expect(markup).to.include('aria-controls="drawer-panel"');
    });

    it('keeps accessible-label on an icon button named by an unresolved reference', async function() {
      const markup = await executeServerCommand('render-ssr-fixture', {
        html: `<rh-button icon="close" aria-labelledby="ext-name" accessible-label="Close"></rh-button>`,
        importSpecifiers: ['@rhds/elements/rh-button/rh-button.js'],
      }) as string;
      expect(markup).to.include('aria-label="Close"');
    });
  });
});
