/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class s{get value(){return this.o}set value(s){this.setValue(s)}setValue(s,t=!1){const i=t||!Object.is(s,this.o);this.o=s,i&&this.updateObservers()}constructor(s){this.subscriptions=new Map,this.updateObservers=()=>{for(const[s,{disposer:t}]of this.subscriptions)s(this.o,t)},void 0!==s&&(this.value=s)}addCallback(s,t,i){if(!i)return void s(this.value);this.subscriptions.has(s)||this.subscriptions.set(s,{disposer:()=>{this.subscriptions.delete(s)},consumerHost:t});const{disposer:h}=this.subscriptions.get(s);s(this.value,h)}clearCallbacks(){this.subscriptions.clear()}}export{s as ValueNotifier};
//# sourceMappingURL=value-notifier.js.map
