import { __decorate } from "tslib";
import { ReactiveElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ColorContextProvider } from '@patternfly/pfe-core/controllers/color-context.js';
let RhContextProvider = class RhContextProvider extends ReactiveElement {
    constructor() {
        super(...arguments);
        this.provider = new ColorContextProvider(this);
    }
    connectedCallback() {
        super.connectedCallback();
        this.renderRoot.append(document.createElement('slot'));
    }
    firstUpdated() {
        this.provider.update(null);
    }
};
RhContextProvider = __decorate([
    customElement('rh-context-provider')
], RhContextProvider);
export { RhContextProvider };
//# sourceMappingURL=rh-context-provider.js.map