function _classCallCheck(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(i,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}function _createClass(i,t,e){return t&&_defineProperties(i.prototype,t),e&&_defineProperties(i,e),i}(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{C7MG:function(i,t,e){"use strict";e.r(t),e.d(t,"ion_img",(function(){return n}));var o=e("6kEz");e("eL6f");var n=function(){function i(t){var e=this;_classCallCheck(this,i),Object(o.l)(this,t),this.onLoad=function(){e.ionImgDidLoad.emit()},this.onError=function(){e.ionError.emit()},this.ionImgWillLoad=Object(o.d)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(o.d)(this,"ionImgDidLoad",7),this.ionError=Object(o.d)(this,"ionError",7)}return _createClass(i,[{key:"srcChanged",value:function(){this.addIO()}},{key:"componentDidLoad",value:function(){this.addIO()}},{key:"addIO",value:function(){var i=this;void 0!==this.src&&("IntersectionObserver"in window?(this.removeIO(),this.io=new IntersectionObserver((function(t){t[0].isIntersecting&&(i.load(),i.removeIO())})),this.io.observe(this.el)):setTimeout((function(){return i.load()}),200))}},{key:"load",value:function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}},{key:"removeIO",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"render",value:function(){return Object(o.i)(o.a,{class:Object(o.e)(this)},Object(o.i)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError}))}},{key:"el",get:function(){return Object(o.f)(this)}}],[{key:"watchers",get:function(){return{src:["srcChanged"]}}},{key:"style",get:function(){return":host{-o-object-fit:contain;object-fit:contain}:host,img{display:block}img{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]),i}()}}]);