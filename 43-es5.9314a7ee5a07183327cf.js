function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{ELbf:function(e,t,i){"use strict";i.r(t),i.d(t,"ion_checkbox",(function(){return c}));var n=i("6kEz"),o=(i("eL6f"),i("zzCX")),r=i("UK3Z"),c=function(){function e(t){var i=this;_classCallCheck(this,e),Object(n.l)(this,t),this.inputId="ion-cb-".concat(a++),this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onClick=function(){i.setFocus(),i.checked=!i.checked,i.indeterminate=!1},this.onFocus=function(){i.ionFocus.emit()},this.onBlur=function(){i.ionBlur.emit()},this.ionChange=Object(n.d)(this,"ionChange",7),this.ionFocus=Object(n.d)(this,"ionFocus",7),this.ionBlur=Object(n.d)(this,"ionBlur",7),this.ionStyle=Object(n.d)(this,"ionStyle",7)}return _createClass(e,[{key:"componentWillLoad",value:function(){this.emitStyle()}},{key:"checkedChanged",value:function(e){this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()}},{key:"disabledChanged",value:function(){this.emitStyle()}},{key:"emitStyle",value:function(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})}},{key:"setFocus",value:function(){this.buttonEl&&this.buttonEl.focus()}},{key:"render",value:function(){var e,t=this,i=this.inputId,c=this.indeterminate,a=this.disabled,s=this.checked,h=this.value,l=this.color,d=this.el,b=i+"-lbl",u=Object(n.e)(this),k=Object(o.f)(d);k&&(k.id=b),Object(o.a)(!0,d,this.name,s?h:"",a);var p=c?Object(n.i)("path",{d:"M6 12L18 12"}):Object(n.i)("path",{d:"M5.9,12.5l3.8,3.8l8.8-8.8"});return"md"===u&&(p=c?Object(n.i)("path",{d:"M2 12H22"}):Object(n.i)("path",{d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),Object(n.i)(n.a,{onClick:this.onClick,role:"checkbox","aria-disabled":a?"true":null,"aria-checked":"".concat(s),"aria-labelledby":b,class:Object.assign(Object.assign({},Object(r.a)(l)),(e={},_defineProperty(e,u,!0),_defineProperty(e,"in-item",Object(r.c)("ion-item",d)),_defineProperty(e,"checkbox-checked",s),_defineProperty(e,"checkbox-disabled",a),_defineProperty(e,"checkbox-indeterminate",c),_defineProperty(e,"interactive",!0),e))},Object(n.i)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24"},p),Object(n.i)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:function(e){return t.buttonEl=e}}))}},{key:"el",get:function(){return Object(n.f)(this)}}],[{key:"watchers",get:function(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}},{key:"style",get:function(){return":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb,0,0,0),0.23);--background:var(--ion-item-background,var(--ion-background-color,#fff));--size:26px;width:var(--size);height:var(--size)}:host(.checkbox-disabled){opacity:.3}:host(.in-item){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item[slot=start]){margin-left:2px;margin-right:16px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:16px;margin-inline-end:16px}}"}}]),e}(),a=0}}]);