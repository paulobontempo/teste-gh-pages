function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function asyncGeneratorStep(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(s){return void r(s)}u.done?t(c):Promise.resolve(c).then(n,o)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){asyncGeneratorStep(a,n,o,i,u,"next",e)}function u(e){asyncGeneratorStep(a,n,o,i,u,"throw",e)}i(void 0)}))}}function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,a=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){i=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(i)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{eQ6Z:function(e,t,r){"use strict";r.r(t),r.d(t,"ion_route",(function(){return i})),r.d(t,"ion_route_redirect",(function(){return u})),r.d(t,"ion_router",(function(){return O})),r.d(t,"ion_router_link",(function(){return x}));var n=r("6kEz"),o=(r("eL6f"),r("zzCX")),a=r("UK3Z"),i=function(){function e(t){_classCallCheck(this,e),Object(n.l)(this,t),this.url="",this.ionRouteDataChanged=Object(n.d)(this,"ionRouteDataChanged",7)}return _createClass(e,[{key:"onUpdate",value:function(e){this.ionRouteDataChanged.emit(e)}},{key:"onComponentProps",value:function(e,t){if(e!==t){var r=e?Object.keys(e):[],n=t?Object.keys(t):[];if(r.length===n.length){var o,a=_createForOfIteratorHelper(r);try{for(a.s();!(o=a.n()).done;){var i=o.value;if(e[i]!==t[i])return void this.onUpdate(e)}}catch(u){a.e(u)}finally{a.f()}}else this.onUpdate(e)}}},{key:"connectedCallback",value:function(){this.ionRouteDataChanged.emit()}}],[{key:"watchers",get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}}]),e}(),u=function(){function e(t){_classCallCheck(this,e),Object(n.l)(this,t),this.ionRouteRedirectChanged=Object(n.d)(this,"ionRouteRedirectChanged",7)}return _createClass(e,[{key:"propDidChange",value:function(){this.ionRouteRedirectChanged.emit()}},{key:"connectedCallback",value:function(){this.ionRouteRedirectChanged.emit()}}],[{key:"watchers",get:function(){return{from:["propDidChange"],to:["propDidChange"]}}}]),e}(),c=function(e){return"/"+e.filter((function(e){return e.length>0})).join("/")},s=function(e){if(null==e)return[""];var t=e.split("/").map((function(e){return e.trim()})).filter((function(e){return e.length>0}));return 0===t.length?[""]:t},l=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r,n,o){var a,i,u,c,s=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=s.length>4&&void 0!==s[4]&&s[4],e.prev=1,i=f(t),!(o>=r.length)&&i){e.next=5;break}return e.abrupt("return",a);case 5:return e.next=7,i.componentOnReady();case 7:return u=r[o],e.next=10,i.setRouteId(u.id,u.params,n);case 10:return(c=e.sent).changed&&(n="root",a=!0),e.next=14,l(c.element,r,n,o+1,a);case 14:if(a=e.sent,e.t0=c.markVisible,!e.t0){e.next=19;break}return e.next=19,c.markVisible();case 19:return e.abrupt("return",a);case 22:return e.prev=22,e.t1=e.catch(1),e.abrupt("return",(console.error(e.t1),!1));case 25:case"end":return e.stop()}}),e,null,[[1,22]])})));return function(t,r,n,o){return e.apply(this,arguments)}}(),h=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",f=function(e){if(e)return e.matches(h)?e:e.querySelector(h)||void 0},p=function(e,t){return t.find((function(t){return function(e,t){var r=t.from;if(void 0===t.to)return!1;if(r.length>e.length)return!1;for(var n=0;n<r.length;n++){var o=r[n];if("*"===o)return!0;if(o!==e[n])return!1}return r.length===e.length}(e,t)}))},d=function(e,t){for(var r=Math.min(e.length,t.length),n=0;n<r&&e[n].toLowerCase()===t[n].id;n++);return n},v=function(e,t){for(var r,n=new b(e),o=!1,a=0;a<t.length;a++){var i=t[a].path;if(""===i[0])o=!0;else{var u,c=_createForOfIteratorHelper(i);try{for(c.s();!(u=c.n()).done;){var s=u.value,l=n.next();if(":"===s[0]){if(""===l)return null;((r=r||[])[a]||(r[a]={}))[s.slice(1)]=l}else if(l!==s)return null}}catch(h){c.e(h)}finally{c.f()}o=!1}}return o&&o!==(""===n.next())?null:r?t.map((function(e,t){return{id:e.id,path:e.path,params:y(e.params,r[t])}})):t},y=function(e,t){return!e&&t?t:e&&!t?e:e&&t?Object.assign(Object.assign({},e),t):void 0},g=function(e){var t,r=1,n=1,o=_createForOfIteratorHelper(e);try{for(o.s();!(t=o.n()).done;){var a,i=_createForOfIteratorHelper(t.value.path);try{for(i.s();!(a=i.n()).done;){var u=a.value;":"===u[0]?r+=Math.pow(1,n):""!==u&&(r+=Math.pow(2,n)),n++}}catch(c){i.e(c)}finally{i.f()}}}catch(c){o.e(c)}finally{o.f()}return r},b=function(){function e(t){_classCallCheck(this,e),this.path=t.slice()}return _createClass(e,[{key:"next",value:function(){return this.path.length>0?this.path.shift():""}}]),e}(),m=function(e){return Array.from(e.children).filter((function(e){return"ION-ROUTE-REDIRECT"===e.tagName})).map((function(e){var t=R(e,"to");return{from:s(R(e,"from")),to:null==t?void 0:s(t)}}))},w=function(e){return C(k(e))},k=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return Array.from(r.children).filter((function(e){return"ION-ROUTE"===e.tagName&&e.component})).map((function(r){var n=R(r,"component");if(null==n)throw new Error("component missing in ion-route");return{path:s(R(r,"url")),id:n.toLowerCase(),params:r.componentProps,children:e(t,r)}}))},R=function(e,t){return t in e?e[t]:e.hasAttribute(t)?e.getAttribute(t):null},C=function(e){var t,r=[],n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;_([],r,o)}}catch(a){n.e(a)}finally{n.f()}return r},_=function e(t,r,n){var o=t.slice();if(o.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length){var a,i=_createForOfIteratorHelper(n.children);try{for(i.s();!(a=i.n()).done;){e(o,r,a.value)}}catch(u){i.e(u)}finally{i.f()}}else r.push(o)},O=function(){function e(t){_classCallCheck(this,e),Object(n.l)(this,t),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0,this.ionRouteWillChange=Object(n.d)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(n.d)(this,"ionRouteDidChange",7)}var t,r,a,i,u,h,b;return _createClass(e,[{key:"componentWillLoad",value:(b=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.debug("[ion-router] router will load"),e.next=3,f(document.body)?Promise.resolve():new Promise((function(e){window.addEventListener("ionNavWillLoad",e,{once:!0})}));case 3:return console.debug("[ion-router] found nav"),e.next=6,this.onRoutesChanged();case 6:case"end":return e.stop()}}),e,this)}))),function(){return b.apply(this,arguments)})},{key:"componentDidLoad",value:function(){window.addEventListener("ionRouteRedirectChanged",Object(o.e)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(o.e)(this.onRoutesChanged.bind(this),100))}},{key:"onPopState",value:function(){var e=this.historyDirection(),t=this.getPath();return console.debug("[ion-router] URL changed -> update nav",t,e),this.writeNavStateRoot(t,e)}},{key:"onBackButton",value:function(e){var t=this;e.detail.register(0,(function(){return t.back()}))}},{key:"push",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"forward";e.startsWith(".")&&(e=new URL(e,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",e,t);var r=s(e);return this.setPath(r,t),this.writeNavStateRoot(r,t)}},{key:"back",value:function(){return window.history.back(),Promise.resolve(this.waitPromise)}},{key:"printDebug",value:(h=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),function(e){console.group("[ion-core] ROUTES[".concat(e.length,"]"));var t,r=_createForOfIteratorHelper(e);try{var n=function(){var e=t.value,r=[];e.forEach((function(e){return r.push.apply(r,_toConsumableArray(e.path))}));var n=e.map((function(e){return e.id}));console.debug("%c ".concat(c(r)),"font-weight: bold; padding-left: 20px","=>\t","(".concat(n.join(", "),")"))};for(r.s();!(t=r.n()).done;)n()}catch(o){r.e(o)}finally{r.f()}console.groupEnd()}(w(this.el)),function(e){console.group("[ion-core] REDIRECTS[".concat(e.length,"]"));var t,r=_createForOfIteratorHelper(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;n.to&&console.debug("FROM: ","$c ".concat(c(n.from)),"font-weight: bold"," TO: ","$c ".concat(c(n.to)),"font-weight: bold")}}catch(o){r.e(o)}finally{r.f()}console.groupEnd()}(m(this.el));case 1:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)})},{key:"navChanged",value:(u=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,n,o,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.busy){e.next=2;break}return e.abrupt("return",(console.warn("[ion-router] router is busy, navChanged was cancelled"),!1));case 2:return e.next=4,function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,n,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],o=t;case 2:if(!(n=f(o))){e.next=11;break}return e.next=5,n.getRouteId();case 5:if(a=e.sent){e.next=8;break}return e.abrupt("break",11);case 8:o=a.element,a.element=void 0,r.push(a);case 9:e.next=2;break;case 11:return e.abrupt("return",{ids:r,outlet:n});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(window.document.body);case 4:if(r=e.sent,n=r.ids,o=r.outlet,a=function(e,t){var r,n=null,o=0,a=e.map((function(e){return e.id})),i=_createForOfIteratorHelper(t);try{for(i.s();!(r=i.n()).done;){var u=r.value,c=d(a,u);c>o&&(n=u,o=c)}}catch(s){i.e(s)}finally{i.f()}return n?n.map((function(t,r){return{id:t.id,path:t.path,params:y(t.params,e[r]&&e[r].params)}})):null}(n,w(this.el))){e.next=10;break}return e.abrupt("return",(console.warn("[ion-router] no matching URL for ",n.map((function(e){return e.id}))),!1));case 10:if(!(i=function(e){var t,r=[],n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){var o,a=t.value,i=_createForOfIteratorHelper(a.path);try{for(i.s();!(o=i.n()).done;){var u=o.value;if(":"===u[0]){var c=a.params&&a.params[u.slice(1)];if(!c)return null;r.push(c)}else""!==u&&r.push(u)}}catch(s){i.e(s)}finally{i.f()}}}catch(s){n.e(s)}finally{n.f()}return r}(a))){e.next=19;break}return console.debug("[ion-router] nav changed -> update URL",n,i),this.setPath(i,t),e.next=16,this.safeWriteNavState(o,a,"root",i,null,n.length);case 16:e.t0=!0,e.next=20;break;case 19:e.t0=(console.warn("[ion-router] router could not match path because some required param is missing"),!1);case 20:return e.abrupt("return",e.t0);case 21:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"onRedirectChanged",value:function(){var e=this.getPath();e&&p(e,m(this.el))&&this.writeNavStateRoot(e,"root")}},{key:"onRoutesChanged",value:function(){return this.writeNavStateRoot(this.getPath(),"root")}},{key:"historyDirection",value:function(){var e=window;null===e.history.state&&(this.state++,e.history.replaceState(this.state,e.document.title,e.document.location&&e.document.location.href));var t=e.history.state,r=this.lastState;return this.lastState=t,t>r?"forward":t<r?"back":"root"}},{key:"writeNavStateRoot",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r){var n,o,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",(console.error("[ion-router] URL is not part of the routing set"),!1));case 2:return n=m(this.el),o=p(t,n),a=null,o&&(this.setPath(o.to,r),a=o.from,t=o.to),i=function(e,t){var r,n=null,o=0,a=_createForOfIteratorHelper(t);try{for(a.s();!(r=a.n()).done;){var i=r.value,u=v(e,i);if(null!==u){var c=g(u);c>o&&(o=c,n=u)}}}catch(s){a.e(s)}finally{a.f()}return n}(t,w(this.el)),e.abrupt("return",i?this.safeWriteNavState(document.body,i,r,t,a):(console.error("[ion-router] the path does not match any route"),!1));case 7:case"end":return e.stop()}}),e,this)}))),function(e,t){return i.apply(this,arguments)})},{key:"safeWriteNavState",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r,n,o,a){var i,u,c,s=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=s.length>5&&void 0!==s[5]?s[5]:0,e.next=3,this.lock();case 3:return u=e.sent,c=!1,e.prev=5,e.next=8,this.writeNavState(t,r,n,o,a,i);case 8:c=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),console.error(e.t0);case 14:return e.abrupt("return",(u(),c));case 15:case"end":return e.stop()}}),e,this,[[5,11]])}))),function(e,t,r,n,o){return a.apply(this,arguments)})},{key:"lock",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.waitPromise,this.waitPromise=new Promise((function(e){return r=e})),e.t0=void 0!==t,!e.t0){e.next=6;break}return e.next=6,t;case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"writeNavState",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r,n,o,a){var i,u,c,s=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=s.length>5&&void 0!==s[5]?s[5]:0,!this.busy){e.next=3;break}return e.abrupt("return",(console.warn("[ion-router] router is busy, transition was cancelled"),!1));case 3:return this.busy=!0,(u=this.routeChangeEvent(o,a))&&this.ionRouteWillChange.emit(u),e.next=8,l(t,r,n,i);case 8:return c=e.sent,e.abrupt("return",(this.busy=!1,c&&console.debug("[ion-router] route changed",o),u&&this.ionRouteDidChange.emit(u),c));case 10:case"end":return e.stop()}}),e,this)}))),function(e,r,n,o,a){return t.apply(this,arguments)})},{key:"setPath",value:function(e,t){this.state++,function(e,t,r,n,o,a){var i=c([].concat(_toConsumableArray(s(t)),_toConsumableArray(n)));r&&(i="#"+i),"forward"===o?e.pushState(a,"",i):e.replaceState(a,"",i)}(window.history,this.root,this.useHash,e,t,this.state)}},{key:"getPath",value:function(){return function(e,t,r){var n=e.pathname;if(r){var o=e.hash;n="#"===o[0]?o.slice(1):""}return function(e,t){if(e.length>t.length)return null;if(e.length<=1&&""===e[0])return t;for(var r=0;r<e.length;r++)if(e[r].length>0&&e[r]!==t[r])return null;return t.length===e.length?[""]:t.slice(e.length)}(s(t),s(n))}(window.location,this.root,this.useHash)}},{key:"routeChangeEvent",value:function(e,t){var r=this.previousPath,n=c(e);return this.previousPath=n,n===r?null:{from:r,redirectedFrom:t?c(t):null,to:n}}},{key:"el",get:function(){return Object(n.f)(this)}}]),e}(),x=function(){function e(t){var r=this;_classCallCheck(this,e),Object(n.l)(this,t),this.routerDirection="forward",this.onClick=function(e){Object(a.d)(r.href,e,r.routerDirection)}}return _createClass(e,[{key:"render",value:function(){var e,t=Object(n.e)(this),r={href:this.href,rel:this.rel,target:this.target};return Object(n.i)(n.a,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(a.a)(this.color)),(e={},_defineProperty(e,t,!0),_defineProperty(e,"ion-activatable",!0),e))},Object(n.i)("a",Object.assign({},r),Object(n.i)("slot",null)))}}],[{key:"style",get:function(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}]),e}()}}]);