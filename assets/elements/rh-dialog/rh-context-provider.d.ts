import { ReactiveElement } from 'lit';
import { ColorContextProvider } from '@patternfly/pfe-core/controllers/color-context.js';
export declare class RhContextProvider extends ReactiveElement {
    provider: ColorContextProvider;
    connectedCallback(): void;
    firstUpdated(): void;
}
