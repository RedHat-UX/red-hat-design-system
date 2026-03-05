import type { RhTabs } from 'elements/rh-tabs/rh-tabs.js';
import { LitElement, render, type PropertyValues } from 'lit';

function isLitElement(e: Element): e is LitElement {
  return 'updateComplete' in e;
}

function isRhTabs(e: Element): e is RhTabs {
  return e.localName === 'rh-tabs';
}

async function forceProperty(e: LitElement, key: PropertyKey) {
  if (key === 'activeIndex' && isRhTabs(e)) {
    await e.updateComplete;
    const i = e.activeIndex;
    e.activeIndex = -1;
    await e.updateComplete;
    e.activeIndex = i;
  }
  e.requestUpdate(key, Symbol());
  await e.updateComplete;
  e.requestUpdate(key, Symbol());
}

async function forceUpdate(e: LitElement) {
  e.requestUpdate();
  await e.updateComplete;
  for (const [key] of (e.constructor as typeof LitElement).elementProperties) {
    forceProperty(e, key);
  }
}

function forceRender(e: LitElement) {
  render(
    // @ts-expect-error: this is a workaround for SSR failures
    e.render(),
    e.renderRoot,
    e.renderOptions,
  );
}

function forceHydration(node: Element) {
  for (const e of node.shadowRoot?.querySelectorAll('*') ?? []) {
    e.removeAttribute('defer-hydration');
    forceHydration(e);
    if (isLitElement(e)) {
      forceUpdate(e);
    }
  }
}

export class SSRFailureRecoverableElement extends LitElement {
  update(changed: PropertyValues<this>) {
    try {
      super.update(changed);
    } catch (e) {
      if (e instanceof Error && e.message.startsWith('Hydration')) {
        // eslint-disable-next-line no-console
        console.warn(e);
        forceRender(this);
        forceHydration(this);
      } else {
        throw e;
      }
    }
  }
}
