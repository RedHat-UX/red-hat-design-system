import { LitElement } from 'lit';
function isLitElement(e) {
    return 'updateComplete' in e;
}
function isRhTabs(e) {
    return e.localName === 'rh-tabs';
}
async function forceProperty(e, key) {
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
async function forceUpdate(e) {
    e.requestUpdate();
    await e.updateComplete;
    for (const [key] of e.constructor.elementProperties) {
        forceProperty(e, key);
    }
}
function forceHydration(node) {
    for (const e of node.shadowRoot?.querySelectorAll('*') ?? []) {
        e.removeAttribute('defer-hydration');
        forceHydration(e);
        if (isLitElement(e)) {
            forceUpdate(e);
        }
    }
}
export class SSRFailureRecoverableElement extends LitElement {
    update(changed) {
        try {
            super.update(changed);
        }
        catch (e) {
            if (e instanceof Error && e.message.startsWith('Hydration')) {
                // eslint-disable-next-line no-console
                console.warn(e);
                forceHydration(this);
            }
            else {
                throw e;
            }
        }
    }
}
//# sourceMappingURL=ssr-failure-recoverable.js.map