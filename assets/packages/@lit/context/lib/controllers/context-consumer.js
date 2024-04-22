import{ContextRequestEvent as t}from"../context-request-event.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s{constructor(t,s,i,h){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,s)=>{this.unsubscribe&&(this.unsubscribe!==s&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,s)),this.unsubscribe=s},this.host=t,void 0!==s.context){const t=s;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=s,this.callback=i,this.subscribe=h??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new t(this.context,this.t,this.subscribe))}}export{s as ContextConsumer};
//# sourceMappingURL=context-consumer.js.map
