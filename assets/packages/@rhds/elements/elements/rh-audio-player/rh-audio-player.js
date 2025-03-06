var _RhAudioPlayer_instances, _a, _RhAudioPlayer_duration_get, _RhAudioPlayer_readyState_get, _RhAudioPlayer_isMobileSafari, _RhAudioPlayer_paused, _RhAudioPlayer_unmutedVolume, _RhAudioPlayer_styles, _RhAudioPlayer_headings, _RhAudioPlayer_mediaElement, _RhAudioPlayer_lastMediaElement, _RhAudioPlayer_dir, _RhAudioPlayer_width, _RhAudioPlayer_resizeObserver, _RhAudioPlayer_translation, _RhAudioPlayer_menufloat, _RhAudioPlayer_listeners, _RhAudioPlayer_isMini_get, _RhAudioPlayer_isFull_get, _RhAudioPlayer_isCompact_get, _RhAudioPlayer_panels_get, _RhAudioPlayer_hasMenu_get, _RhAudioPlayer_menuOpen_get, _RhAudioPlayer_menuOpen_set, _RhAudioPlayer_mediaEnd_get, _RhAudioPlayer_mediaStart_get, _RhAudioPlayer_elapsedText_get, _RhAudioPlayer_transcript_get, _RhAudioPlayer_about_get, _RhAudioPlayer_subscribe_get, _RhAudioPlayer_loadLanguage, _RhAudioPlayer_getMenuItems, _RhAudioPlayer_updateMenuLabels, _RhAudioPlayer_updateTranscriptLabels, _RhAudioPlayer_cleanUpListeners, _RhAudioPlayer_initMediaElement, _RhAudioPlayer_onCanplay, _RhAudioPlayer_onCanplaythrough, _RhAudioPlayer_onCueseek, _RhAudioPlayer_onDurationchange, _RhAudioPlayer_onEnded, _RhAudioPlayer_onLoadeddata, _RhAudioPlayer_onLoadedmetadata, _RhAudioPlayer_onMuteButton, _RhAudioPlayer_onPause, _RhAudioPlayer_onPlay, _RhAudioPlayer_onPlaybackRateChange, _RhAudioPlayer_onPlaybackRateSelect, _RhAudioPlayer_onPlayClick, _RhAudioPlayer_onPlayFocus, _RhAudioPlayer_onPlaying, _RhAudioPlayer_onSeeked, _RhAudioPlayer_onSeeking, _RhAudioPlayer_onTimeSlider, _RhAudioPlayer_onTimeupdate, _RhAudioPlayer_onMenuToggle, _RhAudioPlayer_onPanelChange, _RhAudioPlayer_onTitleChange, _RhAudioPlayer_onVolumechange, _RhAudioPlayer_onVolumeSlider, _RhAudioPlayer_selectOpenPanel, _RhAudioPlayer_lastActiveMenuItem, _RhAudioPlayer_onCloseKeydown, _RhAudioPlayer_onMenuKeydown, _RhAudioPlayer_onMenuFocusout, _RhAudioPlayer_positionMenu, _RhAudioPlayer_showMenu, _RhAudioPlayer_unsetTabindexFromMenuItems, _RhAudioPlayer_hideMenu, _RhAudioPlayer_onTranscriptDownload, _RhAudioPlayer_onWindowClick;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { FloatingDOMController } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import { DirController } from '../../lib/DirController.js';
import { HeadingLevelContextProvider } from '../../lib/context/headings/provider.js';
import { I18nController } from '../../lib/I18nController.js';
import { RhMenu } from '../rh-menu/rh-menu.js';
import { RhCue, getFormattedTime } from './rh-cue.js';
import { RhAudioPlayerAbout } from './rh-audio-player-about.js';
import { RhAudioPlayerRateSelectEvent } from './rh-audio-player-rate-stepper.js';
import { RhAudioPlayerSubscribe } from './rh-audio-player-subscribe.js';
import { RhTranscript } from './rh-transcript.js';
import { RhAudioPlayerScrollingTextOverflow } from './rh-audio-player-scrolling-text-overflow.js';
import { css } from "lit";
const buttonStyles = css `:host{--_button-size:40px;--rh-icon-size:var(--rh-size-icon-03,32px)}#container{--_outline:var(--rh-border-width-md,2px) solid var(--rh-color-border-interactive)}rh-tooltip{display:flex;height:var(--_button-size);width:var(--_button-size);margin-inline:var(--_icon-margin);--_icon-margin:calc(var(--_icon-gap)/2 - var(--_icon-padding));--_icon-padding:calc((var(--_button-size) - var(--rh-icon-size))/2)}button{border:none;background:#0000;height:var(--_button-size,40px);min-width:var(--_button-size,40px);padding:0}rh-tooltip *{outline:none}button:focus,select:focus{outline:var(--_outline)}button[disabled],select[disabled]{filter:grayscale(1);opacity:.5;cursor:not-allowed;border:none}`;
const rangeStyles = css `input[type=range]{display:inline-flex;align-items:center;justify-content:center;margin:0;padding:0;color:var(--_thumb-color);background:#0000;overflow:hidden;width:100%;--_box-fill-color:var(--_progress-color);--_track-fill-color:var(--_track-color);--_thumb-height:var(--rh-length-lg,16px);--_thumb-radius:calc(var(--_thumb-height, 16px)*0.5 - 1px);--_clip-edges:0.125em;--_track-height:var(--rh-length-xs,4px);--_thumb-disabled-color:#00000080;--_track-color:#00000080;--_interactive-color:var(--rh-color-border-interactive);--_accent-color:var(--rh-color-accent-brand);--_outline:var(--rh-border-width-md,2px) solid var(--_interactive-color);--_thumb-color:var(--rh-audio-player-range-thumb-color,var(--_accent-color));--_progress-color:var(--rh-audio-player-range-progress-color,var(--_accent-color))}input[type=range][hidden]{display:none!important}.rtl input[type=range]{--_box-fill-color:var(--_track-color);--_track-fill-color:var(--_progress-color)}.dark input[type=range]{--_thumb-disabled-color:#ffffff80;--_track-color:#ffffff80;--_interactive-color:var(--rh-color-border-interactive);--_accent-color:var(--rh-color-accent-brand)}input[type=range]:focus{outline:var(--_outline)}input[disabled],input[type=range]:disabled{filter:grayscale(1);opacity:.5;cursor:not-allowed}input[type=range],input[type=range]::-webkit-slider-runnable-track,input[type=range]::-webkit-slider-thumb{height:var(--_thumb-height);-webkit-appearance:none}input[type=range]::-webkit-slider-runnable-track,input[type=range]::-webkit-slider-thumb{position:relative}input[type=range]::-webkit-slider-thumb{width:var(--_thumb-width,var(--_thumb-height));background:var(--_thumb-color,currentcolor);box-shadow:var(--box-fill);border-radius:var(--_thumb-width,var(--_thumb-height));--_clip-top:calc((var(--_thumb-height) - var(--_track-height))*0.5 - 0.5px);--_clip-bottom:calc(var(--_thumb-height) - var(--_clip-top));--_clip-further:calc(100% + 1px);--box-fill:calc(-100vmax - var(--_thumb-width, var(--_thumb-height))) 0 0 100vmax var(--_box-fill-color,currentcolor);clip-path:polygon(100% -1px,var(--_clip-edges) -1px,0 var(--_clip-top),-100vmax var(--_clip-top),-100vmax var(--_clip-bottom),0 var(--_clip-bottom),var(--_clip-edges) 100%,var(--_clip-further) var(--_clip-further))}input[type=range]:disabled::-webkit-slider-thumb{cursor:not-allowed}input[type=range]::-webkit-slider-runnable-track{border-radius:3px;background:linear-gradient(var(--_track-fill-color) 0 0) scroll no-repeat 50% /100% calc(var(--_track-height) + 1px)}input[type=range],input[type=range]::-moz-range-thumb,input[type=range]::-moz-range-track{appearance:none;height:var(--_thumb-height)}input[type=range]::-moz-range-progress,input[type=range]::-moz-range-thumb,input[type=range]::-moz-range-track{background:var(--_track-color)}input[type=range]::-moz-range-thumb{background:var(--_thumb-color,currentcolor);border:0;width:var(--_thumb-width,var(--_thumb-height));border-radius:var(--_thumb-width,var(--_thumb-height))}input[type=range]::-moz-range-track{width:100%;background:var(--_track-color)}input[type=range]::-moz-range-progress{appearance:none;background:var(--_progress-color,currentcolor)}input[type=range]::-moz-range-progress,input[type=range]::-moz-range-track{height:calc(var(--_track-height) + 1px);border-radius:var(--_track-height)}input[type=range]:disabled::-moz-range-thumb{cursor:not-allowed}`;
const styles = css `:host{line-height:var(--rh-line-height-body-text,1.5);font-weight:var(--rh-font-weight-body-text-regular,400);font-size:var(--rh-font-size-code-md,1rem);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif)}[hidden]{display:none!important;border-radius:var(--rh-border-radius-default,3px)}rh-icon{color:inherit}#container,button{color:var(--_text-color)}#container{display:flex;flex-direction:column;align-items:stretch;background-color:initial;border-radius:var(--rh-border-radius-default,3px);width:var(--_player-width,304px);--_player-width:328px;--_poster-size:40px;--_player-padding:var(--rh-space-lg,16px);--_icon-gap:var(--rh-space-xl,24px);--_time-slider-base:159px;--_time-slider-width:159px;--_time-slider-extension:0px;--_about-mediatitle-display:none;--_about-heading-display:flex;--_box-shadow:var(--rh-box-shadow-md,0 4px 6px 1px #15151540);--_secondary-opacity:var(--rh-audio-player-secondary-opacity,1);--_text-color:var(--rh-audio-player-text-color,var(--rh-color-text-primary));--_border-color:var(--rh-color-border-subtle);--_surface-color:var(--rh-audio-player-background-color,var(--rh-color-surface-lightest,#fff));--_secondary-text-color:var(--rh-audio-player-secondary-text-color,var(--rh-color-text-secondary));--_static-border-color:var(--rh-color-border-subtle);--_static-text-color:var(--rh-color-text-primary);--_static-highlight-color:var(--rh-color-interactive-primary-hover);--_static-undeline-color:var(--rh-color-border-subtle);--_static-surface-color:var(--rh-color-surface-lightest,#fff);--_static-surface-focus-color:var(--rh-color-surface-light,#e0e0e0);--rh-tooltip-content-padding-block-start:var(--rh-space-md,8px);--rh-tooltip-content-padding-block-end:var(--rh-space-md,8px);--rh-tooltip-content-padding-inline-start:var(--rh-space-md,8px);--rh-tooltip-content-padding-inline-end:var(--rh-space-md,8px);--rh-audio-player-scrolling-text-overflow-background-color:var(--_surface-color)}#container.dark{--_surface-color:var(--rh-audio-player-background-color,var(--rh-color-surface-darkest,#151515));--_box-shadow:none;--_static-highlight-color:var(--rh-color-surface-dark,#383838);--_static-surface-color:var(--rh-color-surface-darkest,#151515);--_static-surface-focus-color:var(--rh-color-surface-dark,#383838)}#container.dark.has-accent-color{--_static-highlight-color:var(--rh-color-interactive-primary-hover);--_static-surface-color:var(--rh-color-surface-lightest,#fff);--_static-surface-focus-color:var(--rh-color-surface-light,#e0e0e0);--_border-color:#ffffff80;--_secondary-opacity:var(--rh-audio-player-secondary-opacity,0.75)}#container.mobile-safari{--_time-slider-extension:calc(var(--_button-size, 40px) + var(--_icon-gap,\n        var(--rh-space-xl, 24px)))}#container.has-accent-color{--_border-color:#00000080;--_secondary-text-color:var(--rh-audio-player-secondary-text-color,var(--rh-color-text-primary));--_range-track-color:#ffffff80;--_secondary-opacity:var(--rh-audio-player-secondary-opacity,0.75);--_static-border-color:#0000;--_static-overlay-focus-color:#50505080;--_static-overlay-color:#00000080}#container.show-menu{--_time-slider-base:128px}#container .rtl button,#container.rtl{text-align:right}#container.mediatitle{--_about-mediatitle-display:block;--_about-heading-display:none}rh-audio-player-rate-stepper{margin-inline:10px 2px;width:auto}svg.scrubber{fill:var(--_text-color);height:var(--_svg-size);width:var(--_svg-size);padding:var(--_icon-padding)}#mini-playback-rate{margin-inline:auto}::slotted(rh-audio-player-about),::slotted(rh-audio-player-subscribe),::slotted(rh-audio-player-transcript){background-color:var(--_static-surface-color)}::slotted([slot=series]){letter-spacing:var(--rh-letter-spacing-body-text,.0125rem)!important;font-size:var(--rh-font-size-body-text-xs,.75rem)!important;font-weight:var(--rh-font-weight-heading-medium,500)!important;margin:0 0 var(--rh-space-md,8px)!important;padding:0!important}::slotted([slot=title]){font-size:var(--rh-font-size-body-text-xl,1.25rem)!important;font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif)!important;font-weight:var(--rh-font-weight-heading-medium,500)!important;line-height:var(--rh-line-height-heading,1.3)!important;margin:0 0 var(--rh-space-lg,16px)!important;padding:0!important}#mediatitle{font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-heading-xs,1.25rem);font-weight:var(--rh-font-weight-heading-medium,500);height:26px;line-height:1}#mediaseries{font-size:var(--rh-font-size-body-text-sm,.875rem);height:18px;line-height:1;font-weight:var(--rh-font-weight-body-text-regular,400);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);letter-spacing:var(--rh-letter-spacing-body-text,.0125rem);margin:0 0 var(--rh-space-md,8px);color:var(--_secondary-text-color);opacity:var(--_secondary-opacity,1)}:host(:focus-within){z-index:2}:host(:hover){z-index:3}#media,.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;clip-path:inset(50%);border:0}#media{padding:0;border:none;display:block}#toolbar{position:relative;display:flex;align-items:center;padding-inline-end:var(--rh-space-md,8px);width:max-content}#panel,#toolbar{background-color:var(--_surface-color);border:1px solid var(--_border-color);border-radius:var(--rh-border-radius-default,3px);padding:var(--_player-padding)}#panel{width:calc(var(--_player-width) - var(--_player-padding)*2 - 2)}#panel ::slotted(*){color:var(--_text-color)!important}.has-accent-color #panel,.has-accent-color #toolbar{border:none}rh-tooltip{display:flex}rh-tooltip>*{min-height:40px}rh-tooltip>label{display:contents}#container>*{--_time-slider-width:calc(var(--_time-slider-base) + var(--_time-slider-extension, 0px))}#close-tooltip,#current,#duration,#forward-tooltip,#full-current,#full-play-tooltip,#full-title,#rewind-tooltip,#volume-tooltip{display:none}#forward,#rewind{display:grid;place-items:center}#mediaseries,#mediatitle{text-overflow:ellipsis;white-space:nowrap}::slotted([slot=series]),::slotted([slot=title]){margin:0}#poster{display:none}#poster,#poster>img{height:var(--_poster-size)}#poster>img{width:var(--_poster-size);margin-inline-end:var(--_icon-gap)}input[type=range]{margin:2px 0;display:flex}#time-tooltip{flex:0 0 var(--_time-slider-width);margin-inline:16px 0}#time,#time-tooltip{width:var(--_time-slider-width)}.spacer{width:var(--rh-space-xl,24px);height:var(--_button-size);border-inline-end:1px solid var(--_border-color);margin-inline-end:var(--rh-space-lg,16px)}.full-spacer{display:none;width:1px;flex:1 0 3px}.show-menu .spacer{width:0;border-inline-start:none;border-inline-end:none}#current{margin-inline-start:calc(var(--_icon-gap)/2)}#current,#duration,#full-current{color:var(--_secondary-text-color);opacity:var(--_secondary-opacity,1);font-family:var(--rh-font-family-code,RedHatMono,"Red Hat Mono","Courier New",Courier,monospace);font-size:var(--rh-font-size-code-xs,.75rem);line-height:var(--rh-line-height-code,1.5)}.rtl #mute rh-icon{rotate:180deg}#volume-tooltip{width:auto;margin-inline:0 calc(var(--_icon-gap)/2)}#play-tooltip{margin:0;--_icon-gap:16px;--rh-icon-size:18px}#full-play-tooltip{--_button-size:56px;--_icon-padding:calc((var(--_button-size) - var(--rh-icon-size))/2);--_icon-margin:calc(var(--_icon-gap)/2)}#close-tooltip,#full-play-tooltip,#menu-tooltip,#mute-tooltip{--rh-icon-size:var(--rh-size-icon-02,24px)}#menu-button{display:inline-block;position:relative;width:max-content}.expanded #menu-tooltip{display:none}.expanded #close-tooltip,:not(.expanded) #menu-tooltip{display:inline-block}#close,#menu-button{height:var(--_button-size)}rh-menu{position:absolute;display:block;left:0;top:0;z-index:2}rh-menu[aria-hidden=true],rh-menu[aria-hidden=true]>*,rh-menu[inert]{z-index:-1}rh-menu::part(menu){opacity:0;pointer-events:none;z-index:10000;transition:opacity .3s cubic-bezier(.54,1.5,.38,1.11) 0s;translate:var(--_floating-content-translate);max-width:calc(100vw - 10px);max-height:calc(100vh - 10px);width:max-content;will-change:opacity;background:var(--rh-audio-player-background-color,var(--_static-surface-color));border:1px solid var(--_border-color);box-shadow:var(--_static-box-shadow)}#container.dark rh-menu::part(menu){border:none}rh-menu:not([inert])::part(menu),rh-menu[aria-hidden=false]::part(menu){opacity:1;pointer-events:all}rh-menu>button{padding:var(--rh-space-md,8px) var(--rh-space-lg,16px);display:block;text-align:left;max-width:200px;color:var(--_static-text-color);background-color:var(--_static-overlay-color);font-size:var(--rh-font-size-body-text-md,1rem);line-height:var(--rh-line-height-body-text,1.5);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif)}rh-menu>button:hover{background:var(--_static-overlay-focus-color,var(--_static-surface-focus-color))}rh-menu>button:focus{z-index:2}#container.has-accent-color rh-menu>button{color:var(--rh-color-text-primary)}#container.rtl rh-menu>button{text-align:right}#full-play,#play{border-radius:50%;background-color:var(--_surface-color);color:var(--rh-audio-player-icon-background-color,var(--_text-color))}.expanded #toolbar{border-block-end:0;border-radius:var(--rh-border-radius-default,3px) var(--rh-border-radius-default,3px) 0 0}.expanded #panel{border-block-start:0;padding-block-start:0;border-radius:0 0 var(--rh-border-radius-default,3px) var(--rh-border-radius-default,3px)}.expanded #panel slot{display:block}@media (min-width:360px){#container{--_player-width:360px;--_time-slider-base:191px}#container.show-menu{--_time-slider-base:160px}}@media (min-width:576px){#container{--_player-width:503px;--_time-slider-base:334px}#container.show-menu{--_time-slider-base:303px}#container:is(.compact,.compact-wide){--_player-width:576px;--_time-slider-base:256px;padding-inline-end:var(--_player-padding)}#container:is(.compact,.compact-wide) #volume{width:80px}#container.show-menu:is(.compact,.compact-wide){--_time-slider-base:225px}#container.mobile-safari:is(.compact,.compact-wide){--_time-slider-extension:calc(80px + var(--_button-size, 40px) + var(--_icon-gap,\n            var(--rh-space-xl, 24px))*1.5)}#container.compact-wide{width:100%}#container.compact-wide.expanded #panel{padding:0}#container.compact-wide.expanded #panel slot{width:calc(var(--_player-width) - var(--_player-padding)*2);margin:0 auto}#container.compact-wide #toolbar{justify-content:center;width:auto;padding:var(--_player-padding) calc(50% - var(--_player-width)/2 - 1px)}#container.compact-wide #time,#container.compact-wide #time-tooltip{width:var(--_time-slider-width);flex:0 0 var(--_time-slider-width);margin-inline-start:var(--rh-space-md,8px)}#container.compact #toolbar{padding-inline-end:var(--_player-padding)}#container:not(.mini) #mute-tooltip{--rh-icon-size:var(--rh-size-icon-02,24px)}#container.full{--_player-width:504px;--_icon-gap:var(--rh-space-xl,24px);--_player-padding:var(--rh-space-xl,24px);--_time-slider-base:314px}#container.full #toolbar{padding-inline-end:var(--_player-padding);width:calc(var(--_player-width) - var(--_poster-size) - var(--_icon-gap)*3)}#container.full.expanded #toolbar{width:auto}#container.full #time-tooltip{margin-inline:0 calc(var(--_icon-gap)/2)}#container.full #duration,#container.full #full-current{flex:0 0 calc(var(--_time-slider-width)/2);margin:-4px 0 var(--rh-length-lg,16px)}#container.full #duration{flex:0 0 calc(var(--_time-slider-width)/2);justify-content:flex-end;margin-inline-end:140px}#container.full #mute-tooltip{margin-inline-start:var(--_icon-margin)}#container.full #volume-tooltip{flex:0 0 80px;margin-inline-end:0}#container.full #volume{width:80px}#container.full rh-audio-player-rate-stepper{flex:0 0 auto;text-align:right;margin:0 var(--_icon-margin) 0 -6px}#container.full #menu{flex:0 0 auto}#container.full #full-title{display:block;flex:0 0 454px}#container.full #panel{padding-block-start:var(--rh-length-md,8px)}#container.full.mobile-safari{--_time-slider-extension:calc(80px + var(--_button-size, 40px) + var(--_icon-gap,\n            var(--rh-space-xl, 24px)))}#container.full.mobile-safari #duration{margin-inline-end:-4px}#container.full.mediatitle{--_about-mediatitle-display:none;--_about-heading-display:flex}#container.full:not(.expanded) #toolbar{flex-wrap:wrap;height:184px}#container.full.rtl #duration{justify-content:flex-start}#container.full.expanded #close-tooltip,#container.full.expanded #menu{margin:0}#container.full.expanded #full-title{flex:0 0 calc(100% - 112px);overflow:hidden;margin:0 var(--rh-length-lg,16px)}#container.full #current,#container.full.expanded #mute-tooltip,#container.full.expanded #time-tooltip,#container.full:not(.expanded) #play-tooltip,#container:not(.mini) .spacer{display:none}#container.full:not(.expanded) .full-spacer,#container:is(.compact,.compact-wide) #current{display:inline-block}#container.full:not(.expanded) #duration,#container.full:not(.expanded) #forward-tooltip,#container.full:not(.expanded) #full-current,#container.full:not(.expanded) #full-play-tooltip,#container.full:not(.expanded) #rewind-tooltip,#container.full:not(.expanded) #volume-tooltip,#container:is(.compact,.compact-wide) #volume-tooltip{display:flex}}@media (min-width:768px){#container:is(.compact,.compact-wide){--_time-slider-base:221px;--_player-width:650px}#container.show-menu:is(.compact,.compact-wide){--_time-slider-base:190px}#container.poster:is(.compact,.compact-wide){--_player-width:714px}#container.poster:is(.compact,.compact-wide) #poster{display:inline-block}#container.full.poster{--_player-width:712px;--_time-slider-base:314px}#container.full.poster:not(.expanded){--_poster-size:184px}#container.full.poster:not(.expanded) #toolbar{padding-inline-start:calc(var(--_player-padding)*2 + var(--_poster-size))}#container.full.poster:not(.expanded) #poster{position:relative;overflow:visible;display:block;height:0;flex:0 0 100%}#container.full.poster:not(.expanded) #poster>img{position:absolute;left:calc(-184px - var(--_player-padding))}#container.full.poster.expanded #poster{display:inline-block;padding-inline-end:var(--rh-length-lg,16px)}#container.full.poster.expanded #poster>img{margin-inline-end:0}#container.full.poster.expanded #full-title{flex:0 0 calc(100% - 168px)}#container.full.poster.expanded.rtl #poster>img{right:calc(-184px - var(--_player-padding));left:unset}}`;
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * An audio player plays audio clips in the browser and includes other features.
 * @summary Plays audio clips and includes other features
 * @slot series - optional, name of podcast series
 * @slot title - optional, title of episode
 * @slot media - html `audio` element
 * @slot about - optional `rh-audio-player-about` panel with attribution
 * @slot subscribe - optional `rh-audio-player-subscribe` panel with links to subscribe
 * @slot transcript - optional `rh-transcript` panel with `rh-cue` elements
 * @cssprop [--rh-audio-player-background-color=var(--rh-color-surface-lightest, #ffffff)] - color of player background -
 * @cssprop [--rh-audio-player-icon-background-color=var(--rh-audio-player-background-color)]
 * @cssprop [--rh-audio-player-border-color=var(--rh-color-border-subtle-on-light, #d2d2d2)] - color of player border -
 * @cssprop [--rh-audio-player-secondary-text-color=var(--rh-color-text-secondary-on-light, #6a6e73)] - player secondary text color -
 * @cssprop [--rh-audio-player-secondary-opacity=0.75] - player secondary opacity used for partially faded elements -
 * @cssprop [--rh-audio-player-range-thumb-color=var(--rh-color-accent-brand-on-light, #ee0000)] - color of time and volume range slider thumb -
 * @cssprop [--rh-tooltip-content-padding-block-start=var(--rh-space-md, 8px)] - padding top on tooltips -
 * @cssprop [--rh-tooltip-content-padding-block-end=var(--rh-space-md, 8px)] - padding bottom on tooltips -
 * @cssprop [--rh-tooltip-content-padding-inline-start=var(--rh-space-md, 8px)] - padding left on tooltips -
 * @cssprop [--rh-tooltip-content-padding-inline-end=var(--rh-space-md, 8px)] - padding right on tooltips -
 * @csspart panel - expandable panel
 * @csspart toolbar - main controls
 * @csspart about - about the episode panel
 * @csspart subscribe - subscribe panel
 * @csspart transcript - transcript panel
 */
export class RhAudioPlayer extends LitElement {
    constructor() {
        super(...arguments);
        _RhAudioPlayer_instances.add(this);
        _RhAudioPlayer_isMobileSafari.set(this, window.navigator.userAgent.match(/(iPhone|iPad|Mobile).*(AppleWebkit|Safari)/i));
        _RhAudioPlayer_paused.set(this, true);
        _RhAudioPlayer_unmutedVolume.set(this, this.volume);
        _RhAudioPlayer_styles.set(this, void 0);
        // this is used inasmuch as children receive the context,
        // but it doesn't need to be accessed outside the class
        // eslint-disable-next-line no-unused-private-class-members
        _RhAudioPlayer_headings.set(this, new HeadingLevelContextProvider(this));
        _RhAudioPlayer_mediaElement.set(this, void 0);
        _RhAudioPlayer_lastMediaElement.set(this, void 0);
        _RhAudioPlayer_dir.set(this, new DirController(this));
        _RhAudioPlayer_width.set(this, this.offsetWidth);
        _RhAudioPlayer_resizeObserver.set(this, new ResizeObserver(() => {
            if (__classPrivateFieldGet(this, _RhAudioPlayer_width, "f") !== this.offsetWidth) {
                __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_positionMenu).call(this);
            }
        }));
        _RhAudioPlayer_translation.set(this, new I18nController(this, {
            'en': {
                ..._a.enUS,
            },
            'en-US': {
                ..._a.enUS,
            }, ...this.microcopy ?? {},
        }));
        _RhAudioPlayer_menufloat.set(this, new FloatingDOMController(this, {
            content: () => this.shadowRoot?.getElementById('menu'),
            invoker: () => this.shadowRoot?.getElementById('menu-button'),
        }));
        /** Added to media element in light DOM. Bound so they can be cleaned up later */
        _RhAudioPlayer_listeners.set(this, new Map(Object.entries({
            canplay: __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onCanplay).bind(this),
            canplaythrough: __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onCanplaythrough).bind(this),
            durationchange: __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onDurationchange).bind(this),
            loadedmetadata: __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onLoadedmetadata).bind(this),
            loadeddata: __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onLoadeddata).bind(this),
            ended: __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onEnded).bind(this),
            pause: __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onPause).bind(this),
            play: __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onPlay).bind(this),
            playing: __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onPlaying).bind(this),
            ratechange: __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onPlaybackRateChange).bind(this),
            seeked: __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onSeeked).bind(this),
            seeking: __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onSeeking).bind(this),
            timeupdate: __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onTimeupdate).bind(this),
            volumechange: __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onVolumechange).bind(this),
        })));
        _RhAudioPlayer_lastActiveMenuItem.set(this, void 0);
        _RhAudioPlayer_onWindowClick.set(this, (event) => {
            const menu = this.shadowRoot?.getElementById('menu-button');
            const path = event.composedPath();
            if (!menu || !path.includes(menu) && !path.some(x => x instanceof RhMenu)) {
                __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_hideMenu).call(this);
            }
        });
        /**
         * Layout:
         *   - `mini` (default): minimal controls: play/pause, range; volume and other controls hidden behind menu
         *   - `compact`: artwork and more controls: time, skip, volume
         *   - `compact-wide`: like compact but full width
         *   - `full`: maximal controls and artwork
         */
        this.layout = 'mini';
        /** Playback volume */
        this.volume = 0.5;
        /** Playback rate */
        this.playbackRate = 1;
        this.expanded = false;
        this.microcopy = {};
    }
    get _mediaseries() {
        return this.renderRoot?.querySelector(`slot[name=series]`)?.assignedElements() ?? [];
    }
    get _mediatitle() {
        return this.renderRoot?.querySelector(`slot[name=title]`)?.assignedElements() ?? [];
    }
    get _transcripts() {
        return this.renderRoot?.querySelector(`slot[name=transcript]`)?.assignedElements()?.filter(node => node.matches('rh-transcript')) ?? [];
    }
    get _abouts() {
        return this.renderRoot?.querySelector(`slot[name=about]`)?.assignedElements()?.filter(node => node.matches('rh-audio-player-about')) ?? [];
    }
    get _subscribe() {
        return this.renderRoot?.querySelector(`slot[name=subscribe]`)?.assignedElements()?.filter(node => node.matches('rh-audio-player-subscribe')) ?? [];
    }
    /** elapsed time in seconds */
    get currentTime() {
        return __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")?.currentTime ?? 0;
    }
    set currentTime(seconds) {
        if (__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")) {
            __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f").currentTime = seconds;
        }
    }
    /** total time in seconds */
    get duration() {
        return __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_duration_get);
    }
    /** whether audio is muted */
    get muted() {
        return this.volume === 0;
    }
    /** whether media is paused */
    get paused() {
        return !__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f") || !!__classPrivateFieldGet(this, _RhAudioPlayer_paused, "f");
    }
    /** media status */
    get readyState() {
        return __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_readyState_get) || 0;
    }
    async getUpdateComplete() {
        return Promise.all([
            super.getUpdateComplete(),
            ...Array.from(this.shadowRoot?.querySelectorAll('rh-menu') ?? [], x => x.updateComplete),
        ]).then(xs => xs.every(Boolean));
    }
    connectedCallback() {
        super.connectedCallback();
        _a.instances.add(this);
        this.addEventListener('cueseek', __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onCueseek));
        __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_initMediaElement).call(this);
        __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_loadLanguage).call(this);
        __classPrivateFieldSet(this, _RhAudioPlayer_styles, __classPrivateFieldGet(this, _RhAudioPlayer_styles, "f") ?? window.getComputedStyle?.(this), "f");
    }
    disconnectedCallback() {
        __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_cleanUpListeners).call(this);
        _a.instances.delete(this);
        super.disconnectedCallback();
    }
    render() {
        const { expanded, mediatitle, on = 'light', layout, poster } = this;
        const { dir } = __classPrivateFieldGet(this, _RhAudioPlayer_dir, "f");
        const { open, styles = {} } = __classPrivateFieldGet(this, _RhAudioPlayer_menufloat, "f");
        const showMenu = __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_hasMenu_get);
        const mutelabel = !this.muted ? __classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('mute') : __classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('unmute');
        const rewinddisabled = !__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")
            || __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_readyState_get) < 1
            || this.currentTime === 0
            || !__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_mediaEnd_get);
        const forwarddisabled = !__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")
            || __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_readyState_get) < 1
            || this.currentTime === this.duration
            || !__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_mediaEnd_get);
        const playlabel = !this.paused ? __classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('pause')
            : __classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('play');
        const playdisabled = __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_readyState_get) < 3 && this.duration < 1;
        const currentTimeQ = (this.currentTime / this.duration);
        const currentTimePct = (Number.isNaN(currentTimeQ) ? 0 : currentTimeQ) * 100;
        const accentColor = !!__classPrivateFieldGet(this, _RhAudioPlayer_styles, "f")?.getPropertyValue('--rh-audio-player-background-color');
        return html `
      <rh-surface id="container"
          color-palette="${ifDefined(this.colorPalette)}"
          class="${classMap({
            [on]: true,
            [dir]: true,
            [layout]: true,
            expanded,
            'on': true,
            'mediatitle': mediatitle !== undefined,
            'poster': poster !== undefined,
            'show-menu': showMenu,
            'has-accent-color': accentColor,
            'mobile-safari': !!__classPrivateFieldGet(this, _RhAudioPlayer_isMobileSafari, "f"),
        })}">
        <input type="hidden" value=${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_readyState_get)}>
        <slot id="media" name="media" @slotchange="${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_initMediaElement)}"></slot>
        <div id="toolbar"
             class="${this.expanded ? 'expanded' : ''}"
             part="toolbar"
             aria-controls="media"
             aria-label="Media Controls">${!poster ? '' : html `
          <div id="poster"><img .src="${poster}" aria-hidden="true"></div>`}
          <rh-tooltip id="play-tooltip">
            <button id="play"
                    aria-label="${playlabel}"
                    class="toolbar-button"
                    ?disabled=${!__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f") || playdisabled}
                    @click=${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onPlayClick)}
                    @focus=${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onPlayFocus)}>
              <rh-icon set="ui" icon="${this.paused ? 'play-fill' : 'pause-fill'}"></rh-icon>
            </button>
            <span slot="content">${playlabel}</span>
          </rh-tooltip>

          <div id="full-title">
            <rh-audio-player-scrolling-text-overflow id="mediaseries" ?hidden=${!this.mediaseries}>
              <slot name="series" @slotchange=${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onTitleChange)}>${this.mediaseries}</slot>
            </rh-audio-player-scrolling-text-overflow>
            <rh-audio-player-scrolling-text-overflow id="mediatitle" ?hidden=${!this.mediatitle}>
              <slot name="title" @slotchange=${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onTitleChange)}>${this.mediatitle}</slot>
            </rh-audio-player-scrolling-text-overflow>
          </div>

          <rh-tooltip id="time-tooltip">
            <input id="time"
                   class="toolbar-button"
                   aria-label="${__classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('seek')}"
                   min="0"
                   max="100"
                   step="1"
                   type="range"
                   value="${currentTimePct}"
                   ?disabled="${this.duration === 0}"
                   @input=${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onTimeSlider)}>
            <span slot="content">${__classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('seek')}</span>
          </rh-tooltip>

          <span id="current">${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_elapsedText_get)}</span>

          <div class="spacer"></div>

          <rh-audio-player-rate-stepper id="playback-rate"
                                        @playback-rate-select="${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onPlaybackRateSelect)}"
                                        ?hidden="${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_isFull_get) || __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_isMini_get)}"
                                        .disabled="${!__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")}"
                                        .playbackRate="${this.playbackRate}"
                                        .label="${__classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('speed')}"></rh-audio-player-rate-stepper>

          ${__classPrivateFieldGet(this, _RhAudioPlayer_isMobileSafari, "f") ? '' : html `

          <rh-tooltip id="mute-tooltip">
            <button id="mute"
                    aria-label="${mutelabel}"
                    class="toolbar-button"
                    ?disabled=${!__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")}
                    @click=${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onMuteButton)}>
              <rh-icon set="ui" icon="${this.muted ? 'mute-fill' : 'volume-up-fill'}"></rh-icon>
            </button>
            <span slot="content">${mutelabel}</span>
          </rh-tooltip>${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_isMini_get) ? '' : html `

          <rh-tooltip id="volume-tooltip">
            <span slot="content">${__classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('volume')}</span>
            <input id="volume"
                      class="toolbar-button"
                      aria-label="${__classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('volume')}"
                      min=0
                      max=${!__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f") ? 0 : 100}
                      step=1
                      type="range"
                      value=${this.volume * 100}
                      ?disabled="${!__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")}"
                      @input=${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onVolumeSlider)}>
            </rh-tooltip>
          `}
          `}${!__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_isFull_get) ? '' : html `

          <span id="full-current">${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_elapsedText_get)}</span>

          <span id="duration">
            <span class="sr-only">/</span>${getFormattedTime(this.duration)}
          </span>

          <div class="full-spacer"></div>

          <rh-audio-player-rate-stepper id="full-playback-rate"
                                        @playback-rate-select="${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onPlaybackRateSelect)}"
                                        ?hidden="${this.expanded || !__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_isFull_get)}"
                                        .disabled="${!__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")}"
                                        .playbackRate="${this.playbackRate}"
                                        .label="${__classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('speed')}"></rh-audio-player-rate-stepper>

          <rh-tooltip id="rewind-tooltip">
            <button id="rewind"
                    aria-label="${__classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('rewind')}"
                    class="toolbar-button"
                    ?disabled=${rewinddisabled}
                    @click=${() => this.rewind()}>
              <svg xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 32 32"
                   class="scrubber"
                   role="presentation">
                <path d="M10.4,19.5h1.8v-5l-1.8,0.8v-1l2.2-0.9h0.7v6.2h1.9v1h-4.8V19.5z"/>
                <path d="M16.4,19.6l0.7-0.8c0.6,0.5,1.2,0.8,1.9,0.8c0.9,0,1.5-0.6,1.5-1.4c0-0.8-0.6-1.3-1.5-1.3 c-0.5,0-0.9,0.1-1.4,0.4L16.8,17l0.2-3.7h4.3v1h-3.3l-0.1,2c0.5-0.2,1-0.3,1.5-0.3c1.4,0,2.4,0.9,2.4,2.1c0,1.4-1.1,2.4-2.7,2.4 C18,20.5,17.1,20.2,16.4,19.6z"/>
                <path d="M4,6.6L9.5,2v3.7h7.4c6.1,0,11.1,5,11.1,11.1c0,6.1-5,11.1-11.1,11.1H9.5V26h1.8h5.5 c5.1,0,9.2-4.1,9.2-9.2c0-5.1-4.1-9.2-9.2-9.2h-5.5H9.5v3.7L4,6.6z"/>
              </svg>
            </button>
            <span slot="content">${__classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('rewind')}</span>
          </rh-tooltip>

          <rh-tooltip id="full-play-tooltip">
            <button id="full-play"
                    aria-label="${playlabel}"
                    class="toolbar-button"
                    ?disabled=${!__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f") || playdisabled}
                    @click=${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onPlayClick)}
                    @focus=${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onPlayFocus)}>
              <rh-icon set="ui" icon="${this.paused ? 'play-fill' : 'pause-fill'}"></rh-icon>
            </button>
            <span slot="content">${playlabel}</span>
          </rh-tooltip>

          <rh-tooltip id="forward-tooltip">
            <button id="forward"
                    aria-label="${__classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('advance')}"
                    class="toolbar-button"
                    ?disabled=${forwarddisabled}
                    @click=${() => this.forward()}>
              <svg xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 32 32"
                   class="scrubber"
                   role="presentation">
                <path d="M10.4,19.5h1.8v-5l-1.8,0.8v-1l2.2-0.9h0.7v6.2h1.9v1h-4.8V19.5z"/>
                <path d="M16.4,19.6l0.7-0.8c0.6,0.5,1.2,0.8,1.9,0.8c0.9,0,1.5-0.6,1.5-1.4c0-0.8-0.6-1.3-1.5-1.3 c-0.5,0-0.9,0.1-1.4,0.4L16.8,17l0.2-3.7h4.3v1h-3.3l-0.1,2c0.5-0.2,1-0.3,1.5-0.3c1.4,0,2.4,0.9,2.4,2.1c0,1.4-1.1,2.4-2.7,2.4 C18,20.5,17.1,20.2,16.4,19.6z"/>
                <path d="M28,6.6L22.4,2v3.7h-7.4C9,5.7,4,10.6,4,16.7c0,6.1,5,11.1,11.1,11.1h7.4V26h-1.8h-5.5c-5.1,0-9.2-4.1-9.2-9.2 c0-5.1,4.1-9.2,9.2-9.2h5.5h1.8v3.7L28,6.6z"/>
              </svg>
            </button>
            <span slot="content">${__classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('advance')}</span>
          </rh-tooltip>`}${!__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_hasMenu_get) ? '' : html `

          <rh-tooltip id="menu-tooltip"
                      slot="button"
                      position="${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_menuOpen_get) ? 'left' : 'top'}">
            <button id="menu-button"
                    class="toolbar-button"
                    aria-label="${__classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('menu')}"
                    aria-controls="menu"
                    aria-haspopup="true"
                    @click="${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onMenuToggle)}">
              <rh-icon set="ui" icon="ellipsis-horizontal-fill"></rh-icon>
            </button>
            <span slot="content">${__classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('menu')}</span>
          </rh-tooltip>

          <rh-menu id="menu"
                   aria-labelledby="menu-button"
                   ?inert="${!__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_menuOpen_get)}"
                   style="${styleMap(styles)}"
                   class="${classMap({ open })}"
                   .getItems="${(items) => __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_getMenuItems).call(this, items)}"
                   @keydown="${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onMenuKeydown)}"
                   @focusout="${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onMenuFocusout)}">${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_panels_get).map(x => !x.panel ? '' : html `
            <button id="${x.id}-menu-item"
                    aria-label="${x.panel.menuLabel}"
                    aria-controls="panel"
                    @click="${() => __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_selectOpenPanel).call(this, x.panel)}">
              ${x.panel.menuLabel}
            </button>`)}
            <rh-audio-player-rate-stepper id="mini-playback-rate"
                                          @playback-rate-select="${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onPlaybackRateSelect)}"
                                          ?hidden="${!__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_isMini_get)}"
                                          .disabled="${!__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")}"
                                          .playbackRate="${this.playbackRate}"
                                          .label="${__classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('speed')}"></rh-audio-player-rate-stepper>
          </rh-menu>`}
          <rh-tooltip id="close-tooltip">
            <button id="close"
                    aria-label="${__classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('close')}"
                    class="toolbar-button"
                    ?disabled="${!__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")}"
                    aria-controls="panel"
                    @click="${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_selectOpenPanel)}"
                    @keydown="${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onCloseKeydown)}">
              <rh-icon set="ui" icon="close"></rh-icon>
            </button>
            <span slot="content">${__classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('close')}</span>
          </rh-tooltip>
          <div class="full-spacer"></div>
        </div>

        <div id="panel"
             role="dialog"
             aria-live="polite"
             aria-labelledby="about-menu-item"
             part="panel"
             ?hidden=${!this.expanded || !__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_hasMenu_get)}>
          <slot id="about-slot"
                name="about"
                part="about"
                @slotchange=${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onPanelChange)}>
            <rh-audio-player-about></rh-audio-player-about>
          </slot>
          <slot id="subscribe-slot"
                name="subscribe"
                part="subscribe"
                @slotchange=${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onPanelChange)}>
          </slot>
          <slot id="transcribe-slot"
                name="transcript"
                part="transcript"
                @slotchange=${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onPanelChange)}
                @transcriptdownload=${__classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onTranscriptDownload)}>
          </slot>
        </div>
      </rh-surface>
    `;
    }
    async firstUpdated() {
        // waiting for next render so that rh-menu is present in shadow root
        await this.updateComplete;
        __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_unsetTabindexFromMenuItems).call(this);
    }
    updated(changedProperties) {
        if (changedProperties.has('volume')
            && !!__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")
            && this.volume !== __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f").volume) {
            __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f").volume = this.volume;
        }
        if (changedProperties.has('lang')) {
            __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_loadLanguage).call(this);
        }
    }
    /**
     * Mutes media volume
     */
    mute() {
        if (__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")) {
            __classPrivateFieldSet(this, _RhAudioPlayer_unmutedVolume, Math.max(0.1, __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")?.volume), "f");
            __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f").volume = 0;
        }
    }
    /**
     * Unmutes media volume
     */
    unmute() {
        if (__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")) {
            __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f").volume = Math.max(__classPrivateFieldGet(this, _RhAudioPlayer_unmutedVolume, "f"), 0.1);
        }
    }
    /**
     * Pauses playback
     */
    pause() {
        return __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")?.pause?.();
    }
    /**
     * Starts or resumes playback
     */
    async play() {
        return await __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")?.play?.();
    }
    /**
     * Seeks media to a given point in seconds
     */
    seek(seconds) {
        __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")?.setAttribute('seekable', 'seekable');
        if (__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")) {
            const time = __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_mediaEnd_get) ?
                Math.max(__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_mediaStart_get), Math.min(seconds, __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_mediaEnd_get)))
                : -1;
            if (time >= 0) {
                __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f").currentTime = time;
                this.requestUpdate();
            }
        }
    }
    /**
     * Seeks media a given number of secons from current elapsed time
     */
    seekFromCurrentTime(seconds = 0) {
        const currentTime = __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")?.currentTime || 0;
        const time = currentTime + seconds;
        this.seek(time);
    }
    /**
     * Rewinds media by 15 seconds (default)
     * @param by number of seconds to rewind
     */
    rewind(by = 15) {
        this.seekFromCurrentTime(-by);
    }
    /**
     * Advances media by 15 seconds (default)
     * @param by number of seconds to advance
     */
    forward(by = 15) {
        this.seekFromCurrentTime(by);
    }
}
_a = RhAudioPlayer, _RhAudioPlayer_isMobileSafari = new WeakMap(), _RhAudioPlayer_paused = new WeakMap(), _RhAudioPlayer_unmutedVolume = new WeakMap(), _RhAudioPlayer_styles = new WeakMap(), _RhAudioPlayer_headings = new WeakMap(), _RhAudioPlayer_mediaElement = new WeakMap(), _RhAudioPlayer_lastMediaElement = new WeakMap(), _RhAudioPlayer_dir = new WeakMap(), _RhAudioPlayer_width = new WeakMap(), _RhAudioPlayer_resizeObserver = new WeakMap(), _RhAudioPlayer_translation = new WeakMap(), _RhAudioPlayer_menufloat = new WeakMap(), _RhAudioPlayer_listeners = new WeakMap(), _RhAudioPlayer_lastActiveMenuItem = new WeakMap(), _RhAudioPlayer_onWindowClick = new WeakMap(), _RhAudioPlayer_instances = new WeakSet(), _RhAudioPlayer_duration_get = function _RhAudioPlayer_duration_get() {
    return __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")?.duration ?? 0;
}, _RhAudioPlayer_readyState_get = function _RhAudioPlayer_readyState_get() {
    return __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")?.readyState ?? 0;
}, _RhAudioPlayer_isMini_get = function _RhAudioPlayer_isMini_get() {
    return !__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_isFull_get) && !__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_isCompact_get);
}, _RhAudioPlayer_isFull_get = function _RhAudioPlayer_isFull_get() {
    return this.layout === 'full';
}, _RhAudioPlayer_isCompact_get = function _RhAudioPlayer_isCompact_get() {
    return !!this.layout?.startsWith('compact');
}, _RhAudioPlayer_panels_get = function _RhAudioPlayer_panels_get() {
    return [
        { id: 'about', panel: __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_about_get) },
        { id: 'subscribe', panel: __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_subscribe_get) },
        { id: 'transcript', panel: __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_transcript_get) },
    ].filter(x => !!x.panel);
}, _RhAudioPlayer_hasMenu_get = function _RhAudioPlayer_hasMenu_get() {
    return (__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_panels_get).length > 1
        || !!this.mediaseries
        || !!this.mediatitle
        || (this._abouts?.length ?? 0) > 0);
}, _RhAudioPlayer_menuOpen_get = function _RhAudioPlayer_menuOpen_get() {
    return __classPrivateFieldGet(this, _RhAudioPlayer_menufloat, "f").open;
}, _RhAudioPlayer_menuOpen_set = function _RhAudioPlayer_menuOpen_set(open) {
    if (open) {
        __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_showMenu).call(this);
        __classPrivateFieldSet(this, _RhAudioPlayer_width, this.offsetWidth, "f");
        __classPrivateFieldGet(this, _RhAudioPlayer_resizeObserver, "f").observe(this);
    }
    else {
        __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_hideMenu).call(this);
        __classPrivateFieldGet(this, _RhAudioPlayer_resizeObserver, "f").unobserve(this);
    }
}, _RhAudioPlayer_mediaEnd_get = function _RhAudioPlayer_mediaEnd_get() {
    return (__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")?.seekable?.end?.length || -1) > 0
        && __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")?.seekable?.end(0) ?
        __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")?.seekable?.end(0)
        : false;
}, _RhAudioPlayer_mediaStart_get = function _RhAudioPlayer_mediaStart_get() {
    return __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")?.seekable?.start(0) ?
        __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")?.seekable?.start(0)
        : 0;
}, _RhAudioPlayer_elapsedText_get = function _RhAudioPlayer_elapsedText_get() {
    return getFormattedTime(this.currentTime || 0);
}, _RhAudioPlayer_transcript_get = function _RhAudioPlayer_transcript_get() {
    const [t] = this._transcripts ?? [];
    return t ?? this.shadowRoot?.querySelector('rh-transcript');
}, _RhAudioPlayer_about_get = function _RhAudioPlayer_about_get() {
    const [a = this.shadowRoot?.querySelector('rh-audio-player-about')] = this._abouts ?? [];
    return a;
}, _RhAudioPlayer_subscribe_get = function _RhAudioPlayer_subscribe_get() {
    return this._subscribe?.[0];
}, _RhAudioPlayer_loadLanguage = async function _RhAudioPlayer_loadLanguage(lang = __classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").language) {
    const url = new URL(`./i18n/${lang}.json`, import.meta.url);
    await __classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").loadTranslation(url, lang);
    __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_updateMenuLabels).call(this);
    __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_updateTranscriptLabels).call(this);
}, _RhAudioPlayer_getMenuItems = function _RhAudioPlayer_getMenuItems(items) {
    const ministepperid = 'mini-playback-rate';
    if (__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_isMini_get)) {
        return [
            ...items.filter(x => x.id !== ministepperid),
            ...this.shadowRoot
                ?.getElementById(ministepperid)
                ?.shadowRoot
                ?.querySelectorAll('.tabbable') ?? [],
        ];
    }
    else {
        return items;
    }
}, _RhAudioPlayer_updateMenuLabels = function _RhAudioPlayer_updateMenuLabels() {
    if (__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_about_get)?.menuLabel) {
        __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_about_get).menuLabel = __classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('about');
    }
    if (__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_subscribe_get)?.menuLabel) {
        __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_subscribe_get).menuLabel = __classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('subscribe');
    }
    if (__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_transcript_get)?.menuLabel) {
        __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_transcript_get).menuLabel = __classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('transcript');
    }
}, _RhAudioPlayer_updateTranscriptLabels = function _RhAudioPlayer_updateTranscriptLabels() {
    if (__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_transcript_get)?.autoscrollLabel) {
        __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_transcript_get).autoscrollLabel = __classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('autoscroll');
    }
    if (__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_transcript_get)?.downloadLabel) {
        __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_transcript_get).downloadLabel = __classPrivateFieldGet(this, _RhAudioPlayer_translation, "f").get('download');
    }
}, _RhAudioPlayer_cleanUpListeners = function _RhAudioPlayer_cleanUpListeners() {
    for (const [event, listener] of __classPrivateFieldGet(this, _RhAudioPlayer_listeners, "f")) {
        __classPrivateFieldGet(this, _RhAudioPlayer_lastMediaElement, "f")?.removeEventListener(event, listener);
    }
}, _RhAudioPlayer_initMediaElement = function _RhAudioPlayer_initMediaElement(slotchangeevent) {
    if (slotchangeevent) {
        __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_cleanUpListeners).call(this);
        __classPrivateFieldSet(this, _RhAudioPlayer_lastMediaElement, this.querySelector('audio') ?? undefined, "f");
    }
    __classPrivateFieldSet(this, _RhAudioPlayer_mediaElement, this.querySelector('audio') ?? undefined, "f");
    if (__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")) {
        __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f").removeAttribute('controls');
        __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f").setAttribute('seekable', 'seekable');
        this.volume = __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f").volume || 0.5;
        for (const [event, listener] of __classPrivateFieldGet(this, _RhAudioPlayer_listeners, "f")) {
            __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f").addEventListener(event, listener);
        }
    }
}, _RhAudioPlayer_onCanplay = function _RhAudioPlayer_onCanplay() {
    this.volume = __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")?.volume || 0.5;
}, _RhAudioPlayer_onCanplaythrough = function _RhAudioPlayer_onCanplaythrough() {
    this.requestUpdate();
}, _RhAudioPlayer_onCueseek = function _RhAudioPlayer_onCueseek(event) {
    const target = event.target;
    const cue = target;
    const start = cue?.startTime;
    if (start) {
        this.seek(start);
    }
    __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onTimeupdate).call(this);
}, _RhAudioPlayer_onDurationchange = function _RhAudioPlayer_onDurationchange() {
    this.requestUpdate();
    __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_transcript_get)?.setDuration(this.duration);
}, _RhAudioPlayer_onEnded = function _RhAudioPlayer_onEnded() {
    __classPrivateFieldSet(this, _RhAudioPlayer_paused, true, "f");
}, _RhAudioPlayer_onLoadeddata = function _RhAudioPlayer_onLoadeddata() {
    this.requestUpdate();
}, _RhAudioPlayer_onLoadedmetadata = function _RhAudioPlayer_onLoadedmetadata() {
    this.requestUpdate();
}, _RhAudioPlayer_onMuteButton = function _RhAudioPlayer_onMuteButton() {
    return !this.muted ? this.mute() : this.unmute();
}, _RhAudioPlayer_onPause = function _RhAudioPlayer_onPause() {
    __classPrivateFieldSet(this, _RhAudioPlayer_paused, true, "f");
    this.requestUpdate();
}, _RhAudioPlayer_onPlay = function _RhAudioPlayer_onPlay() {
    __classPrivateFieldSet(this, _RhAudioPlayer_paused, false, "f");
    this.requestUpdate();
}, _RhAudioPlayer_onPlaybackRateChange = function _RhAudioPlayer_onPlaybackRateChange() {
    if (!__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f") || this.playbackRate !== __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f").playbackRate) {
        this.playbackRate = __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")?.playbackRate || 1;
    }
}, _RhAudioPlayer_onPlaybackRateSelect = function _RhAudioPlayer_onPlaybackRateSelect(event) {
    if (event instanceof RhAudioPlayerRateSelectEvent && __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")) {
        this.playbackRate = event.playbackRate;
        __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f").playbackRate = event.playbackRate;
    }
}, _RhAudioPlayer_onPlayClick = 
/**
 * handles play button click by toggling play / pause
 */
async function _RhAudioPlayer_onPlayClick(event) {
    const target = event?.target;
    const tooltip = target?.parentElement?.closest('rh-tooltip');
    for (const instance of _a.instances) {
        if (instance !== this) {
            instance.pause();
        }
    }
    if (__classPrivateFieldGet(this, _RhAudioPlayer_paused, "f")) {
        this.play();
    }
    else {
        this.pause();
    }
    setTimeout(() => tooltip?.show(), 10);
}, _RhAudioPlayer_onPlayFocus = function _RhAudioPlayer_onPlayFocus() {
    for (const id of ['mediaseries', 'mediatitle']) {
        const scroller = this.shadowRoot?.querySelector(`#${id}`);
        scroller?.startScrolling();
    }
}, _RhAudioPlayer_onPlaying = function _RhAudioPlayer_onPlaying() {
    __classPrivateFieldSet(this, _RhAudioPlayer_paused, false, "f");
    this.requestUpdate();
}, _RhAudioPlayer_onSeeked = function _RhAudioPlayer_onSeeked() {
    this.requestUpdate();
}, _RhAudioPlayer_onSeeking = function _RhAudioPlayer_onSeeking() {
    this.requestUpdate();
}, _RhAudioPlayer_onTimeSlider = function _RhAudioPlayer_onTimeSlider(event) {
    if (__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_mediaEnd_get)) {
        const percent = parseFloat(event.target.value) ?? 0;
        const seconds = this.duration * (percent / 100);
        this.seek(seconds);
    }
}, _RhAudioPlayer_onTimeupdate = function _RhAudioPlayer_onTimeupdate() {
    __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_transcript_get)?.setActiveCues(this.currentTime);
    this.requestUpdate();
}, _RhAudioPlayer_onMenuToggle = function _RhAudioPlayer_onMenuToggle(event) {
    event.preventDefault();
    __classPrivateFieldSet(this, _RhAudioPlayer_instances, !__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_menuOpen_get), "a", _RhAudioPlayer_menuOpen_set);
    event.stopPropagation();
}, _RhAudioPlayer_onPanelChange = function _RhAudioPlayer_onPanelChange() {
    __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_updateMenuLabels).call(this);
    __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_updateTranscriptLabels).call(this);
    __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_onTitleChange).call(this);
}, _RhAudioPlayer_onTitleChange = function _RhAudioPlayer_onTitleChange() {
    const mediatitle = this._mediatitle?.[0]?.textContent ?? '';
    const mediaseries = this._mediaseries?.[0]?.textContent ?? '';
    if (mediatitle.length > 0) {
        this.mediatitle || (this.mediatitle = mediatitle);
    }
    if (mediaseries.length > 0) {
        this.mediaseries || (this.mediaseries = mediaseries);
    }
    if (__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_about_get) && this.mediaseries) {
        __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_about_get).mediaseries = this.mediaseries;
    }
    if (__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_about_get) && this.mediatitle) {
        __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_about_get).mediatitle = this.mediatitle;
    }
}, _RhAudioPlayer_onVolumechange = function _RhAudioPlayer_onVolumechange() {
    if (__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")) {
        const { volume } = __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f");
        if (volume > 0) {
            __classPrivateFieldSet(this, _RhAudioPlayer_unmutedVolume, __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f").volume, "f");
        }
        this.volume = Math.max(0, Math.min(10, __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f").volume));
    }
}, _RhAudioPlayer_onVolumeSlider = function _RhAudioPlayer_onVolumeSlider(event) {
    const level = parseFloat(event.target.value || '-1');
    if (__classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f")) {
        __classPrivateFieldGet(this, _RhAudioPlayer_mediaElement, "f").volume = Math.max(0, Math.min(10, level / 100));
    }
}, _RhAudioPlayer_selectOpenPanel = function _RhAudioPlayer_selectOpenPanel(panel) {
    const panels = [__classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_about_get), __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_subscribe_get), __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_transcript_get)];
    panels.forEach(item => item?.toggleAttribute('hidden', panel !== item));
    this.expanded = !!panel && panels.includes(panel);
    const focusElement = this.expanded ?
        this.shadowRoot?.getElementById('close')
        : this.shadowRoot?.getElementById('menu-button');
    setTimeout(() => {
        setTimeout(() => {
            focusElement?.focus();
            if (panel === __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_transcript_get)) {
                __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_transcript_get)?.setActiveCues(this.currentTime);
            }
        }, 1);
        setTimeout(() => {
            if (panel?.scrollText) {
                panel.scrollText();
            }
        }, 1000);
    }, 1);
}, _RhAudioPlayer_onCloseKeydown = 
/**
 * hides panel with Escape key
 * @param event {KeyboardEvent}
 */
async function _RhAudioPlayer_onCloseKeydown(event) {
    if (event.key === 'Escape') {
        __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_selectOpenPanel).call(this);
    }
}, _RhAudioPlayer_onMenuKeydown = 
/**
 * hides menu with Escape key
 */
async function _RhAudioPlayer_onMenuKeydown(event) {
    if (event.key === 'Escape') {
        await __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_hideMenu).call(this);
        this.shadowRoot?.querySelector('#menu-button')?.focus();
    }
}, _RhAudioPlayer_onMenuFocusout = function _RhAudioPlayer_onMenuFocusout(event) {
    const { relatedTarget } = event;
    if (relatedTarget instanceof HTMLElement
        && relatedTarget.closest('rh-menu') !== this.shadowRoot?.getElementById('menu')) {
        setTimeout(() => __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_hideMenu).call(this), 300);
    }
}, _RhAudioPlayer_positionMenu = async function _RhAudioPlayer_positionMenu() {
    await this.updateComplete;
    const placement = 'bottom-start';
    const mainAxis = 0;
    const offset = { mainAxis: mainAxis, alignmentAxis: 0 };
    await __classPrivateFieldGet(this, _RhAudioPlayer_menufloat, "f").show({ offset: offset, placement: placement });
}, _RhAudioPlayer_showMenu = async function _RhAudioPlayer_showMenu() {
    const menu = this.shadowRoot?.getElementById('menu');
    const button = this.shadowRoot?.getElementById('menu-button');
    if (!menu || !button) {
        return;
    }
    await __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_positionMenu).call(this);
    await this.updateComplete;
    if (__classPrivateFieldGet(this, _RhAudioPlayer_lastActiveMenuItem, "f")) {
        menu.activateItem(__classPrivateFieldGet(this, _RhAudioPlayer_lastActiveMenuItem, "f"));
    }
    window.addEventListener('click', __classPrivateFieldGet(this, _RhAudioPlayer_onWindowClick, "f"));
}, _RhAudioPlayer_unsetTabindexFromMenuItems = function _RhAudioPlayer_unsetTabindexFromMenuItems() {
    const menu = this.shadowRoot?.getElementById('menu');
    __classPrivateFieldSet(this, _RhAudioPlayer_lastActiveMenuItem, menu?.activeItem, "f");
    for (const item of menu?.querySelectorAll('[tabindex]') ?? []) {
        item.tabIndex = -1;
    }
}, _RhAudioPlayer_hideMenu = async function _RhAudioPlayer_hideMenu() {
    __classPrivateFieldGet(this, _RhAudioPlayer_instances, "m", _RhAudioPlayer_unsetTabindexFromMenuItems).call(this);
    window.removeEventListener('click', __classPrivateFieldGet(this, _RhAudioPlayer_onWindowClick, "f"));
    await __classPrivateFieldGet(this, _RhAudioPlayer_menufloat, "f").hide();
}, _RhAudioPlayer_onTranscriptDownload = function _RhAudioPlayer_onTranscriptDownload() {
    const transcript = __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_transcript_get)?.downloadText;
    const label = __classPrivateFieldGet(this, _RhAudioPlayer_instances, "a", _RhAudioPlayer_transcript_get)?.label;
    const a = document.createElement('a');
    const title = [this.mediaseries, this.mediatitle, label].join(' ');
    const filename = (this.mediatitle
        || this.mediaseries
        || label
        || 'transcript').replace(/[^\w^\d^-]/g, '');
    const contents = `${title}\n${transcript}`;
    a.setAttribute('href', `data:text/plain;charset=UTF-8,${encodeURIComponent(contents)}`);
    a.setAttribute('download', `${filename}.txt`);
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
RhAudioPlayer.properties = {
    mediaseries: { reflect: true },
    mediatitle: { reflect: true },
    layout: { reflect: true },
    poster: { reflect: true },
    volume: { reflect: true, type: Number },
    playbackRate: { reflect: true, type: Number },
    expanded: { reflect: true, type: Boolean },
    lang: { reflect: true },
    microcopy: { attribute: false },
    colorPalette: { reflect: true, attribute: 'color-palette' }
};
RhAudioPlayer.styles = [buttonStyles, styles, rangeStyles];
RhAudioPlayer.instances = new Set();
RhAudioPlayer.enUS = {
    'play': 'Play',
    'pause': 'Pause',
    'seek': 'Seek',
    'rewind': 'Rewind 15 seconds',
    'advance': 'Advance 15 seconds',
    'speed': 'Speed',
    'mute': 'Mute',
    'unmute': 'Unmute',
    'volume': 'Volume',
    'menu': 'More options',
    'close': 'Close',
    'about': 'About the episode',
    'subscribe': 'Subscribe',
    'transcript': 'Transcript',
    'autoscroll': 'Autoscroll',
    'download': 'Download',
};
__decorate([
    colorContextConsumer()
], RhAudioPlayer.prototype, "on", void 0);
customElements.define("rh-audio-player", RhAudioPlayer);
//# sourceMappingURL=rh-audio-player.js.map