/// <reference types="mocha" />
import { expect, html, nextFrame } from '@open-wc/testing';
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

    it('forwards aria-controls to the internal button', function() {
      expect(button.getAttribute('aria-controls')).to.equal('drawer-panel');
    });

    it('forwards aria-describedby to the internal button', function() {
      expect(button.getAttribute('aria-describedby')).to.equal('drawer-desc');
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
  });

  describe('aria-labelledby', function() {
    it('uses the referenced element as the accessible name', async function() {
      const element = await createFixture<RhButton>(html`
        <rh-button aria-labelledby="ask-label">ignored</rh-button>
        <span id="ask-label">Ask AI</span>
      `);
      const button = internalButton(element);
      expect(element.hasAttribute('aria-labelledby')).to.equal(false);
      expect(button.getAttribute('aria-labelledby')).to.equal('ask-label');
      expect(button.getAttribute('aria-label')).to.equal('Ask AI');
      expect(await a11ySnapshot()).to.axContainQuery({ role: 'button', name: 'Ask AI' });
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
    expect(internalButton(element).getAttribute('aria-controls')).to.equal('late-panel');
  });
});
