function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function asyncGeneratorStep(e,t,n,i,r,a,o){try{var s=e[a](o),d=s.value}catch(c){return void n(c)}s.done?t(d):Promise.resolve(d).then(i,r)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var a=e.apply(t,n);function o(e){asyncGeneratorStep(a,i,r,o,s,"next",e)}function s(e){asyncGeneratorStep(a,i,r,o,s,"throw",e)}o(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{yTmz:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_modal",(function(){return m}));var i=n("6kEz"),r=(n("eL6f"),n("zzCX"),n("sRGK")),a=(n("QNNX"),n("dGir")),o=n("UK3Z"),s=n("BFSF"),d=n("39Ae"),c=function(e){var t=Object(r.a)(),n=Object(r.a)(),i=Object(r.a)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.4),i.addElement(e.querySelector(".modal-wrapper")).beforeStyles({opacity:1}).fromTo("transform","translateY(100%)","translateY(0%)"),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(400).beforeAddClass("show-modal").addAnimation([n,i])},l=function(e){var t=Object(r.a)(),n=Object(r.a)(),i=Object(r.a)(),a=e.querySelector(".modal-wrapper"),o=a.getBoundingClientRect();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.4,0),i.addElement(a).beforeStyles({opacity:1}).fromTo("transform","translateY(0%)","translateY(".concat(e.ownerDocument.defaultView.innerHeight-o.top,"px)")),t.addElement(e).easing("ease-out").duration(250).addAnimation([n,i])},h=function(e){var t=Object(r.a)(),n=Object(r.a)(),i=Object(r.a)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),i.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").addAnimation([n,i])},u=function(e){var t=Object(r.a)(),n=Object(r.a)(),i=Object(r.a)(),a=e.querySelector(".modal-wrapper");return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0),i.addElement(a).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([n,i])},m=function(){function e(t){var n=this;_classCallCheck(this,e),Object(i.l)(this,t),this.presented=!1,this.mode=Object(i.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.onBackdropTap=function(){n.dismiss(void 0,a.a)},this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),n.dismiss()},this.onLifecycle=function(e){var t=n.usersElement,i=p[e.type];if(t&&i){var r=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(r)}},Object(a.e)(this.el),this.didPresent=Object(i.d)(this,"ionModalDidPresent",7),this.willPresent=Object(i.d)(this,"ionModalWillPresent",7),this.willDismiss=Object(i.d)(this,"ionModalWillDismiss",7),this.didDismiss=Object(i.d)(this,"ionModalDidDismiss",7)}var t,n;return _createClass(e,[{key:"present",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.presented){e.next=2;break}return e.abrupt("return");case 2:if(t=this.el.querySelector(".modal-wrapper")){e.next=5;break}throw new Error("container is undefined");case 5:return n=Object.assign(Object.assign({},this.componentProps),{modal:this.el}),e.next=8,Object(s.a)(this.delegate,t,this.component,["ion-page"],n);case 8:return this.usersElement=e.sent,e.next=11,Object(d.a)(this.usersElement);case 11:return e.abrupt("return",Object(a.f)(this,"modalEnter",c,h));case 12:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"dismiss",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.g)(this,t,n,"modalLeave",l,u);case 2:if(i=e.sent,e.t0=i,!e.t0){e.next=7;break}return e.next=7,Object(s.b)(this.delegate,this.usersElement);case 7:return e.abrupt("return",i);case 8:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})},{key:"onDidDismiss",value:function(){return Object(a.h)(this.el,"ionModalDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(a.h)(this.el,"ionModalWillDismiss")}},{key:"render",value:function(){var e=Object(i.e)(this);return Object(i.i)(i.a,{"no-router":!0,"aria-modal":"true",class:Object.assign(_defineProperty({},e,!0),Object(o.b)(this.cssClass)),style:{zIndex:"".concat(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},Object(i.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(i.i)("div",{role:"dialog",class:_defineProperty({"modal-wrapper":!0},e,!0)}))}},{key:"el",get:function(){return Object(i.f)(this)}}],[{key:"style",get:function(){return".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}"}}]),e}(),p={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"}}}]);