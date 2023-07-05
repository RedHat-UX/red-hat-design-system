// pf-modal/pf-modal.js
import type { ReactWebComponent } from '@lit-labs/react';
import type { PfModal } from '@patternfly/elements/pf-modal/pf-modal.js';
export const Modal: ReactWebComponent<PfModal, { onOpen: 'open'; onClose: 'close' }>;