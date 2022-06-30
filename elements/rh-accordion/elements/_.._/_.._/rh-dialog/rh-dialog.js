"use strict";

// ../rh-dialog/rh-dialog.js
import { html } from "lit";
import { customElement as customElement2, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { observed } from "@patternfly/pfe-core/decorators/observed.js";
import { PfeModal } from "@patternfly/pfe-modal";
import { unsafeCSS } from "lit";
import { ReactiveElement } from "lit";
import { customElement } from "lit/decorators.js";
import { ColorContextProvider } from "@patternfly/pfe-core/controllers/color-context.js";
import { css } from "lit";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var yt_api_exports = {};
__export(yt_api_exports, {
  pauseVideo: () => pauseVideo
});
async function getPlayer(iframe) {
  return new Promise((r) => {
    let player = players.get(iframe);
    if (!player) {
      players.set(iframe, new window.YT.Player(iframe, {
        events: {
          onReady() {
            player = players.get(iframe);
            r(player);
          }
        }
      }));
    } else {
      requestAnimationFrame(() => r(player));
    }
  });
}
async function pauseVideo(iframe) {
  if (!iframe.src.match(/enablejsapi=1/)) {
    console.warn("Cannot pause video, please add `enablejsapi=1` to iframe url.");
    return;
  }
  if (!window.YT) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const [firstScriptTag] = document.getElementsByTagName("script");
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    const orig = window.onYouTubeIframeAPIReady;
    await new Promise((r) => {
      window.onYouTubeIframeAPIReady = function() {
        r(void 0);
      };
    });
    window.onYouTubeIframeAPIReady = orig;
  }
  const player = await getPlayer(iframe);
  player?.pauseVideo();
}
var players;
var init_yt_api = __esm({
  "elements/rh-dialog/yt-api.ts"() {
    "use strict";
    players = /* @__PURE__ */ new WeakMap();
  }
});
var mobileBreakpoint = unsafeCSS`700px`;
var mobileXlBreakpoint = unsafeCSS`1008px`;
var desktopLargeBreakpoint = unsafeCSS`1368px`;
var desktopSmallBreakpoint = unsafeCSS`1200px`;
var tabletLandscapeBreakpoint = unsafeCSS`992px`;
var tabletPortaitBreakpoint = unsafeCSS`768px`;
var mobileLandscapeBreakpoint = unsafeCSS`576px`;
var mobilePortraitBreakpoint = unsafeCSS`320px`;
var _RHDSScreenSizeController = class {
  constructor(host) {
    this.host = host;
    this.mobile = _RHDSScreenSizeController.queries.get("mobile")?.matches ?? false;
    this.host.addController(this);
    this.size = "mobilePortrait";
    for (const [key, list] of _RHDSScreenSizeController.queries) {
      if (key !== "mobile" && list.matches) {
        this.size = key;
      }
    }
  }
  hostConnected() {
    _RHDSScreenSizeController.instances.add(this);
  }
  hostDisconnected() {
    _RHDSScreenSizeController.instances.delete(this);
  }
};
var RHDSScreenSizeController = _RHDSScreenSizeController;
RHDSScreenSizeController.instances = /* @__PURE__ */ new Set();
RHDSScreenSizeController.queries = /* @__PURE__ */ new Map([
  ["mobile", matchMedia(`screen and (max-width: ${mobileBreakpoint})`)],
  ["mobilePortrait", matchMedia(`screen and (max-width: ${mobilePortraitBreakpoint})`)],
  ["mobileLandscape", matchMedia(`screen and (max-width: ${mobileLandscapeBreakpoint})`)],
  ["tabletPortait", matchMedia(`screen and (max-width: ${tabletPortaitBreakpoint})`)],
  ["tabletLandscape", matchMedia(`screen and (max-width: ${tabletLandscapeBreakpoint})`)],
  ["mobileXl", matchMedia(`screen and (max-width: ${mobileXlBreakpoint})`)],
  ["desktopSmall", matchMedia(`screen and (min-width: ${mobileXlBreakpoint}) and (max-width: ${desktopSmallBreakpoint})`)],
  ["desktopLarge", matchMedia(`screen and (min-width: ${desktopLargeBreakpoint})`)]
]);
for (const [key, list] of RHDSScreenSizeController.queries) {
  if (key === "mobile") {
    list.addEventListener("change", (event) => {
      for (const instance of RHDSScreenSizeController.instances) {
        instance.mobile = event.matches;
        instance.host.requestUpdate();
      }
    });
  } else {
    list.addEventListener("change", (event) => {
      for (const instance of RHDSScreenSizeController.instances) {
        if (event.matches) {
          instance.size = key;
          instance.host.requestUpdate();
        }
      }
    });
  }
}
var RhContextProvider = class extends ReactiveElement {
  constructor() {
    super(...arguments);
    this.provider = new ColorContextProvider(this);
  }
  connectedCallback() {
    super.connectedCallback();
    this.renderRoot.append(document.createElement("slot"));
  }
  firstUpdated() {
    this.provider.update(null);
  }
};
RhContextProvider = __decorateClass([
  customElement("rh-context-provider")
], RhContextProvider);
var styles = css`#rhds-wrapper{display:contents;font-family:"Red Hat Text",RedHatText,Overpass,Helvetica,sans-serif;--offset:calc(-1 * var(--rh-space-md, 32px));--offset-top:var(--offset);--offset-right:var(--offset)}header ::slotted(:is(h1,h2,h3,h4,h5,h6)[slot="header"]){font-family:'Red Hat Display',RedHatDisplay,Overpass,Helvetica,sans-serif}[part=dialog]{background-color:var(--rh-color-surface-lightest,#fff);max-width:min(90%,1140px);border-radius:var(--rh-border-radius-default,0.1875rem);color:var(--rh-color-text-primary-on-light,var(--rh-color-black-900,#151515));font-family:inherit}[part=content]{border-radius:var(--rh-border-radius-default,0.1875rem)}[part=close-button]{color:var(--rh-dialog-close-button-color,#6a6e73)}[part=close-button]:is(:hover,:focus-within,:focus-visible) svg:is(svg,:hover){fill:var(--rh-color-black-900,#151515)}:host([type=video]){--rh-dialog-close-button-color:white}:host([type=video]) [part=close-button]{top:var(--offset-top);right:var(--offset-right);padding:var(--rh-space-sm,8px);color:var(--rh-dialog-close-button-color,#6a6e73)}:host([type=video]) [part=content]{overflow:hidden}:host([type=video][open]) [part=overlay]{background-color:#151515;opacity:.65}:host([type=video][open]) [part=dialog]{--_aspect-ratio:var(--rh-modal-video-aspect-ratio,16/9);aspect-ratio:var(--_aspect-ratio);max-width:min(90%,calc(90vh * var(--_aspect-ratio) + var(--offset-top)));padding:0;margin:0}:host([type=video]) #rhds-wrapper.mobile [part=close-button]{--offset-right:calc(-1 * var(--rh-space-sm, -8px))}:host([type=video]) #container,:host([type=video]) [part=content],:host([type=video]) ::slotted(:not([slot])){aspect-ratio:var(--rh-modal-video-aspect-ratio,16/9);width:calc(100% + 1px);position:absolute;inset:0;max-height:none}`;
var rh_dialog_default = styles;
var _screenSize;
var RhDialog = class extends PfeModal {
  constructor() {
    super(...arguments);
    __privateAdd(this, _screenSize, new RHDSScreenSizeController(this));
    this.open = false;
  }
  render() {
    const { mobile } = __privateGet(this, _screenSize);
    return html`
      <div id="rhds-wrapper" class=${classMap({ mobile })}>
        ${super.render()}
      </div>
    `;
  }
  async _openChanged(oldValue, newValue) {
    super._openChanged(oldValue, newValue);
    if (this.type === "video" && oldValue === true && newValue === false) {
      this.querySelector("video")?.pause?.();
      const iframe = this.querySelector("iframe");
      if (iframe?.src.match(/youtube/)) {
        const { pauseVideo: pauseVideo2 } = await Promise.resolve().then(() => (init_yt_api(), yt_api_exports));
        pauseVideo2(iframe);
      }
    }
  }
};
_screenSize = /* @__PURE__ */ new WeakMap();
RhDialog.version = "{{version}}";
RhDialog.styles = [...PfeModal.styles, rh_dialog_default];
RhDialog.closeOnOutsideClick = true;
__decorateClass([
  property({ reflect: true })
], RhDialog.prototype, "type", 2);
__decorateClass([
  observed,
  property({ reflect: true, type: Boolean })
], RhDialog.prototype, "open", 2);
RhDialog = __decorateClass([
  customElement2("rh-dialog")
], RhDialog);
export {
  RhDialog
};
//# sourceMappingURL=rh-dialog.js.map
