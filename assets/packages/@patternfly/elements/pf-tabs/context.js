import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';
export class TabExpandEvent extends Event {
    constructor(tab) {
        super('expand', { bubbles: true, cancelable: true });
        this.tab = tab;
    }
}
export const context = createContextWithRoot(Symbol('pf-tabs-context'));
//# sourceMappingURL=context.js.map