import type { IconSetName, IconNameFor } from '@rhds/icons';

class ObserverShim {
  observe() {
    void 0;
  }

  disconnect() {
    void 0;
  }
}

class MiniHTMLTemplateElement {
  _innerHTML = '';
  content = { cloneNode: () => this._innerHTML };
  set innerHTML(html: string) {
    this._innerHTML = html;
  };

  constructor(public tagName: string) { }
}

class MiniDocument {
  createElement(tagName: string) {
    return new MiniHTMLTemplateElement(tagName);
  }
}

function ssrGetComputedStyle() {
  return {
    getPropertyPriority() {
      return '';
    },
    getPropertyValue() {
      return '';
    },
  };
}

interface IconSpec<S extends IconSetName> {
  set: S;
  icon: IconNameFor<S>;
}

// @ts-expect-error: this runs in node
globalThis.navigator ??= { userAgent: '' };
// @ts-expect-error: this runs in node
globalThis.window ??= globalThis;
// @ts-expect-error: this runs in node
globalThis.ErrorEvent ??= Event;
// @ts-expect-error: this runs in node
globalThis.IntersectionObserver ??= ObserverShim;
// @ts-expect-error: this runs in node
globalThis.MutationObserver ??= ObserverShim;
// @ts-expect-error: this runs in node
globalThis.document ??= new MiniDocument();
// @ts-expect-error: this runs in node
globalThis.getComputedStyle ??= ssrGetComputedStyle;

/**
 * Load an icon, server side
 * @param spec icon spec
 * @param spec.icon icon name
 * @param spec.set icon set
 * @returns icon string
 */
export async function load<S extends IconSetName>({ set, icon }: IconSpec<S>) {
  const { standard, social, ui, microns } = await import('@rhds/icons');
  switch (set) {
    case 'standard': return standard.get(icon as any);
    case 'social': return social.get(icon as any);
    case 'microns': return microns.get(icon as any);
    case 'ui': return ui.get(icon as any);
    default: return '';
  }
}
