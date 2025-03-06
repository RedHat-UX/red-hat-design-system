import{ContextRequestEvent as t}from"../context-request-event.js";import{ValueNotifier as s}from"../value-notifier.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends Event{constructor(t,s){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=s}}class i extends s{constructor(s,e,i){super(void 0!==e.context?e.initialValue:i),this.onContextRequest=t=>{if(t.context!==this.context)return;const s=t.contextTarget??t.composedPath()[0];s!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,s,t.subscribe))},this.onProviderRequest=s=>{if(s.context!==this.context)return;if((s.contextTarget??s.composedPath()[0])===this.host)return;const e=new Set;for(const[s,{consumerHost:i}]of this.subscriptions)e.has(s)||(e.add(s),i.dispatchEvent(new t(this.context,i,s,!0)));s.stopPropagation()},this.host=s,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new e(this.context,this.host))}}export{i as ContextProvider,e as ContextProviderEvent};
//# sourceMappingURL=context-provider.js.map
