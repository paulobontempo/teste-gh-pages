(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{RdrQ:function(t,i,e){"use strict";e.r(i),e.d(i,"ion_item_option",(function(){return r})),e.d(i,"ion_item_options",(function(){return a})),e.d(i,"ion_item_sliding",(function(){return l}));var n=e("6kEz"),s=(e("eL6f"),e("zzCX")),o=e("UK3Z");const r=class{constructor(t){Object(n.l)(this,t),this.disabled=!1,this.expandable=!1,this.type="button",this.onClick=t=>{t.target.closest("ion-item-option")&&t.preventDefault()}}render(){const{disabled:t,expandable:i,href:e}=this,s=void 0===e?"button":"a",r=Object(n.e)(this),a="button"===s?{type:this.type}:{download:this.download,href:this.href,target:this.target};return Object(n.i)(n.a,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(o.a)(this.color)),{[r]:!0,"item-option-disabled":t,"item-option-expandable":i,"ion-activatable":!0})},Object(n.i)(s,Object.assign({},a,{class:"button-native",disabled:t}),Object(n.i)("span",{class:"button-inner"},Object(n.i)("slot",{name:"top"}),Object(n.i)("div",{class:"horizontal-wrapper"},Object(n.i)("slot",{name:"start"}),Object(n.i)("slot",{name:"icon-only"}),Object(n.i)("slot",null),Object(n.i)("slot",{name:"end"})),Object(n.i)("slot",{name:"bottom"})),"md"===r&&Object(n.i)("ion-ripple-effect",null)))}get el(){return Object(n.f)(this)}static get style(){return":host{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:.7em;padding-right:.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:.7em;padding-inline-start:.7em;-webkit-padding-end:.7em;padding-inline-end:.7em}}.button-inner{-ms-flex-flow:column nowrap;flex-flow:column nowrap;height:100%}.button-inner,.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}.horizontal-wrapper{-ms-flex-flow:row nowrap;flex-flow:row nowrap}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:.9em;font-size:1.8em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(.65,.05,.36,1);transition-timing-function:cubic-bezier(.65,.05,.36,1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:.5;pointer-events:none}:host{font-size:16px}:host(.activated){background:var(--ion-color-primary-shade,#3171e0)}:host(.ion-color.activated){background:var(--ion-color-shade)}"}},a=class{constructor(t){Object(n.l)(this,t),this.side="end",this.ionSwipe=Object(n.d)(this,"ionSwipe",7)}async fireSwipeEvent(){this.ionSwipe.emit({side:this.side})}render(){const t=Object(n.e)(this),i=Object(s.h)(this.side);return Object(n.i)(n.a,{class:{[t]:!0,[`item-options-${t}`]:!0,"item-options-start":!i,"item-options-end":i}})}get el(){return Object(n.f)(this)}static get style(){return"ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options,[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end),[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start,[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start),.item-sliding-active-slide.item-sliding-active-options-start .item-options-start{width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)))}.item-options-ios.item-options-end{border-bottom-width:.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:.55px}"}};let d;const l=class{constructor(t){Object(n.l)(this,t),this.item=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.state=2,this.disabled=!1,this.ionDrag=Object(n.d)(this,"ionDrag",7)}disabledChanged(){this.gesture&&this.gesture.setDisabled(this.disabled)}async connectedCallback(){this.item=this.el.querySelector("ion-item"),await this.updateOptions(),this.gesture=(await Promise.resolve().then(e.bind(null,"i5Bw"))).createGesture({el:this.el,gestureName:"item-swipe",gesturePriority:100,threshold:5,canStart:()=>this.canStart(),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.disabledChanged()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.item=null,this.leftOptions=this.rightOptions=void 0,d===this.el&&(d=void 0)}getOpenAmount(){return Promise.resolve(this.openAmount)}getSlidingRatio(){return Promise.resolve(this.getSlidingRatioSync())}async open(t){if(null===this.item)return;const i=this.getOptions(t);if(!i)return;void 0===t&&(t=i===this.leftOptions?"start":"end"),t=Object(s.h)(t)?"end":"start";const e=this.openAmount<0,n=this.openAmount>0;e&&i===this.leftOptions||n&&i===this.rightOptions||(this.closeOpened(),this.state=4,requestAnimationFrame(()=>{this.calculateOptsWidth();const i="end"===t?this.optsWidthRightSide:-this.optsWidthLeftSide;d=this.el,this.setOpenAmount(i,!1),this.state="end"===t?8:16}))}async close(){this.setOpenAmount(0,!0)}async closeOpened(){return void 0!==d&&(d.close(),d=void 0,!0)}getOptions(t){return void 0===t?this.leftOptions||this.rightOptions:"start"===t?this.leftOptions:this.rightOptions}async updateOptions(){const t=this.el.querySelectorAll("ion-item-options");let i=0;this.leftOptions=this.rightOptions=void 0;for(let e=0;e<t.length;e++){const n=await t.item(e).componentOnReady();"start"===(Object(s.h)(n.side)?"end":"start")?(this.leftOptions=n,i|=1):(this.rightOptions=n,i|=2)}this.optsDirty=!0,this.sides=i}canStart(){return d&&d!==this.el?(this.closeOpened(),!1):!(!this.rightOptions&&!this.leftOptions)}onStart(){d=this.el,void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")}onMove(t){this.optsDirty&&this.calculateOptsWidth();let i,e=this.initialOpenAmount-t.deltaX;switch(this.sides){case 2:e=Math.max(0,e);break;case 1:e=Math.min(0,e);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}e>this.optsWidthRightSide?(i=this.optsWidthRightSide,e=i+.55*(e-i)):e<-this.optsWidthLeftSide&&(i=-this.optsWidthLeftSide,e=i+.55*(e-i)),this.setOpenAmount(e,!1)}onEnd(t){const i=t.velocityX;let e=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide;const n=this.openAmount>0==!(i<0),s=Math.abs(i)>.3,o=Math.abs(this.openAmount)<Math.abs(e/2);p(n,s,o)&&(e=0);const r=this.state;this.setOpenAmount(e,!0),0!=(32&r)&&this.rightOptions?this.rightOptions.fireSwipeEvent():0!=(64&r)&&this.leftOptions&&this.leftOptions.fireSwipeEvent()}calculateOptsWidth(){this.optsWidthRightSide=0,this.rightOptions&&(this.rightOptions.style.display="flex",this.optsWidthRightSide=this.rightOptions.offsetWidth,this.rightOptions.style.display=""),this.optsWidthLeftSide=0,this.leftOptions&&(this.leftOptions.style.display="flex",this.optsWidthLeftSide=this.leftOptions.offsetWidth,this.leftOptions.style.display=""),this.optsDirty=!1}setOpenAmount(t,i){if(void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),!this.item)return;const e=this.item.style;if(this.openAmount=t,i&&(e.transition=""),t>0)this.state=t>=this.optsWidthRightSide+30?40:8;else{if(!(t<0))return this.tmr=setTimeout(()=>{this.state=2,this.tmr=void 0},600),d=void 0,void(e.transform="");this.state=t<=-this.optsWidthLeftSide-30?80:16}e.transform=`translate3d(${-t}px,0,0)`,this.ionDrag.emit({amount:t,ratio:this.getSlidingRatioSync()})}getSlidingRatioSync(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0}render(){const t=Object(n.e)(this);return Object(n.i)(n.a,{class:{[t]:!0,"item-sliding-active-slide":2!==this.state,"item-sliding-active-options-end":0!=(8&this.state),"item-sliding-active-options-start":0!=(16&this.state),"item-sliding-active-swipe-end":0!=(32&this.state),"item-sliding-active-swipe-start":0!=(64&this.state)}})}get el(){return Object(n.f)(this)}static get watchers(){return{disabled:["disabledChanged"]}}static get style(){return"ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden}ion-item-sliding,ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1),-webkit-transform .5s cubic-bezier(.36,.66,.04,1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-left;transition-property:padding-left}:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable,[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-right;transition-property:padding-right}:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable,[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}"}},p=(t,i,e)=>!i&&e||t&&i}}]);