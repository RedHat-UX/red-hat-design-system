import{ContextRequestEvent as e}from"./context-request-event.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class t{constructor(){this.pendingContextRequests=new Map,this.onContextProvider=t=>{const s=this.pendingContextRequests.get(t.context);if(void 0===s)return;this.pendingContextRequests.delete(t.context);const{requests:o}=s;for(const{elementRef:s,callbackRef:n}of o){const o=s.deref(),c=n.deref();void 0===o||void 0===c||o.dispatchEvent(new e(t.context,c,!0))}},this.onContextRequest=e=>{if(!0!==e.subscribe)return;const t=e.composedPath()[0],s=e.callback;let o=this.pendingContextRequests.get(e.context);void 0===o&&this.pendingContextRequests.set(e.context,o={callbacks:new WeakMap,requests:[]});let n=o.callbacks.get(t);void 0===n&&o.callbacks.set(t,n=new WeakSet),n.has(s)||(n.add(s),o.requests.push({elementRef:new WeakRef(t),callbackRef:new WeakRef(s)}))}}attach(e){e.addEventListener("context-request",this.onContextRequest),e.addEventListener("context-provider",this.onContextProvider)}detach(e){e.removeEventListener("context-request",this.onContextRequest),e.removeEventListener("context-provider",this.onContextProvider)}}export{t as ContextRoot};
//# sourceMappingURL=context-root.js.map
