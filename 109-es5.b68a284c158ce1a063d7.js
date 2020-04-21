function _defineProperties(l,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{Gc5z:function(l,n,e){"use strict";e.r(n);var t=e("Mlb/"),u=function l(){_classCallCheck(this,l)},i=e("fYis"),o=e("JC8e"),r=e("N6yu"),a=e("kyVH"),s=e("bJ5R"),c=e("UOGB"),b=e("DggY"),d=e("qdk2"),f=e("QTrT"),g=e("eJcW"),v=e("1g1I"),h=e("6Xac"),p=e("qjkM"),m=e("m7QX"),y=e("PCte"),k=e("8Vpt"),x=e("wLPr"),C=e("9a/b"),M=e("vk2e"),P=e("qk26"),G=e("bb6g"),O=e("Ed9Z"),w=e("vPWC"),Q=e("qIlG"),_=e("h6Sq"),S=e("vQW0"),q=e("flj8"),j=e("QjhX"),E=function(){function l(n,e,t,u,i,o,r){_classCallCheck(this,l),this.navCtrl=n,this.sessionSvc=e,this.accountSvc=t,this.cd=u,this.depositModal=i,this.paymentMethodPicker=o,this.transferModal=r,this.name=this.accountSvc.name,this.balance=this.accountSvc.balance,this.foto="./assets/images/avatar.png",this.stripeTimeline=O.a.timeline({paused:!0}),O.a.registerPlugin(w.a)}return _createClass(l,[{key:"ngAfterViewInit",value:function(){var l=this;this.subscription=this.balance.subscribe((function(n){l.balanceNumber=n,l.cd.markForCheck()})),O.a.set(this.stripeLine.nativeElement,{transformOrigin:"50% 50%",drawSVG:"102%"}),O.a.set(this.stripe.nativeElement,{transformOrigin:"100% 50%",scaleY:0,opacity:0}),O.a.set(this.balanceElt.nativeElement,{visibility:"inherit",opacity:1}),this.stripeTimeline.to(this.stripeLine.nativeElement,.2,{drawSVG:"44% 52%"}).to(this.stripeEye.nativeElement,.2,{right:8},"-=.2").to(this.balanceElt.nativeElement,.2,{opacity:0},"-=.2").to(this.balanceElt.nativeElement,.01,{visibility:"hidden"}).to(this.stripe.nativeElement,.2,{scaleY:1,opacity:1},"-=.1");var n=!0;this.accountSvc.hideValues.subscribe((function(e){if(n)return l.stripeTimeline.pause(e?1:0),void(n=!1);e?l.stripeTimeline.play():l.stripeTimeline.reverse()}))}},{key:"toggleHideValues",value:function(){this.accountSvc.toggleHideValues()}},{key:"deposit",value:function(l){return G.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.accountSvc.account.pipe(Object(Q.a)()).toPromise();case 2:e=n.sent,this.depositModal.open(Object.assign({depositMethods:e.depositMethods},l));case 4:case"end":return n.stop()}}),n,this)})))}},{key:"transfer",value:function(){this.transferModal.open()}},{key:"choosePaymentMethod",value:function(){return G.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n,e;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.accountSvc.account.pipe(Object(Q.a)()).toPromise();case 2:return n=l.sent,l.next=5,this.paymentMethodPicker.open({showCancelButton:!0,paymentMethods:n.depositMethods});case 5:(e=l.sent)&&this.deposit({selectedMethod:e});case 7:case"end":return l.stop()}}),l,this)})))}},{key:"refresh",value:function(l){this.accountSvc.refresh().then((function(){l.complete()}),(function(){l.complete()}))}},{key:"bankAccount",value:function(){console.log("bankAccount()")}},{key:"faq",value:function(){console.log("faq()")}},{key:"logout",value:function(){this.sessionSvc.logout(),this.navCtrl.navigateRoot("/login",{animated:!0,animationDirection:"back"})}},{key:"termsPrivacy",value:function(){console.log("termsPrivacy()")}},{key:"balanceWhole",get:function(){return Math.floor(this.balanceNumber)}},{key:"balanceCents",get:function(){return Math.round(100*+this.balanceNumber%100)}},{key:"hasBalance",get:function(){return this.balanceNumber>0}}]),l}(),F=e("4E43"),J=t.Eb({encapsulation:0,styles:[["[_nghost-%COMP%]{background:var(--ion-color-primary)}ion-refresher[_ngcontent-%COMP%]{--ion-text-color:#fff}.ion-activatable.-mx-5.activated[_ngcontent-%COMP%]{background-color:var(--ion-color-light-tint)}.text-custom[_ngcontent-%COMP%]{font-size:12px}.hide-values[_ngcontent-%COMP%]   .hide-values\\[_ngcontent-%COMP%]:invisible{visibility:hidden}.hide-values[_ngcontent-%COMP%]   .hide-values\\[_ngcontent-%COMP%]:visible{visibility:inherit}.hide-values[_ngcontent-%COMP%]   .hide-values\\[_ngcontent-%COMP%]:opacity-0{opacity:0}.hide-values--concealer[_ngcontent-%COMP%]{transform:translateX(100%);transition-property:transform,visibility;transition-duration:.2s;transition-timing-function:ease;border-radius:4px}.hide-values[_ngcontent-%COMP%]   .hide-values--concealer[_ngcontent-%COMP%]{transform:translateX(0);transition-duration:.4s;transition-timing-function:ease-out}.dn-see-through--active[_nghost-%COMP%]   .hide-values--concealer[_ngcontent-%COMP%], .dn-see-through--active   [_nghost-%COMP%]   .hide-values--concealer[_ngcontent-%COMP%]{transition-duration:0}.hide-values--fade[_ngcontent-%COMP%]{transition-property:opacity,visibility;transition-duration:.3s;transition-delay:.1s}.dn-see-through--active[_nghost-%COMP%]   .hide-values--fade[_ngcontent-%COMP%], .dn-see-through--active   [_nghost-%COMP%]   .hide-values--fade[_ngcontent-%COMP%]{transition-duration:0}.big-button[_ngcontent-%COMP%]{border:1px solid var(--ion-color-light);background-color:#fff;color:#000;position:relative}.big-button.activated[_ngcontent-%COMP%]{background-color:var(--ion-color-light-tint)}.big-button-label[_ngcontent-%COMP%]{position:absolute;left:12px;top:10px}.big-button[_ngcontent-%COMP%], .credit-card-add-button[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:center;border-radius:10px;font-size:.875rem;height:125px}"]],data:{}});function A(l){return t.bc(0,[(l()(),t.Gb(0,0,null,null,10,null,null,null,null,null,null,null)),(l()(),t.Gb(1,0,null,null,4,"div",[["class","big-button ion-activatable"],["role","button"]],null,[[null,"click"]],(function(l,n,e){var t=!0,u=l.component;return"click"===n&&(t=!1!==u.deposit()&&t),t}),null,null)),(l()(),t.Gb(2,0,null,null,1,"div",[["class","big-button-label"]],null,null,null,null,null)),(l()(),t.Zb(-1,null,["Carregar"])),(l()(),t.Gb(4,0,null,null,1,"ion-icon",[["class","iconsize"],["src","assets/images/deposit.svg"]],null,null,null,x.K,x.i)),t.Fb(5,49152,null,0,C.D,[t.j,t.q,t.J],{src:[0,"src"]},null),(l()(),t.Gb(6,0,null,null,4,"div",[["class","big-button ml-2 ion-activatable"],["role","button"]],null,[[null,"click"]],(function(l,n,e){var t=!0,u=l.component;return"click"===n&&(t=!1!==u.transfer()&&t),t}),null,null)),(l()(),t.Gb(7,0,null,null,1,"div",[["class","big-button-label"]],null,null,null,null,null)),(l()(),t.Zb(-1,null,["Transferir"])),(l()(),t.Gb(9,0,null,null,1,"ion-icon",[["class","iconsize"],["src","assets/images/transfer.svg"]],null,null,null,x.K,x.i)),t.Fb(10,49152,null,0,C.D,[t.j,t.q,t.J],{src:[0,"src"]},null)],(function(l,n){l(n,5,0,"assets/images/deposit.svg"),l(n,10,0,"assets/images/transfer.svg")}),null)}function z(l){return t.bc(0,[(l()(),t.Gb(0,0,null,null,4,"div",[["class","credit-card-add-button flex flex-col bg-grey-lighter text-grey-dark text-sm"],["role","button"]],null,[[null,"click"]],(function(l,n,e){var t=!0,u=l.component;return"click"===n&&(t=!1!==u.choosePaymentMethod()&&t),t}),null,null)),(l()(),t.Gb(1,0,null,null,1,"div",[["class","text-center"],["style","max-width: 12em"]],null,null,null,null,null)),(l()(),t.Zb(-1,null,["Cadastre aqui o seu cart\xe3o ou\xa0carregue por boleto"])),(l()(),t.Gb(3,0,null,null,1,"ion-icon",[["class","iconsize mt-2"],["src","assets/images/credit-card-add.svg"]],null,null,null,x.K,x.i)),t.Fb(4,49152,null,0,C.D,[t.j,t.q,t.J],{src:[0,"src"]},null)],(function(l,n){l(n,4,0,"assets/images/credit-card-add.svg")}),null)}function D(l){return t.bc(2,[t.Ub(0,M.g,[t.D]),t.Xb(402653184,1,{balanceElt:0}),t.Xb(402653184,2,{stripe:0}),t.Xb(402653184,3,{stripeEye:0}),t.Xb(402653184,4,{stripeLine:0}),(l()(),t.Gb(5,0,null,null,1,"ion-header",[["class","pt-safe"],["no-border",""]],null,null,null,x.J,x.h)),t.Fb(6,49152,null,0,C.C,[t.j,t.q,t.J],null,null),(l()(),t.Gb(7,0,null,null,50,"ion-content",[["color","primary"]],null,null,null,x.H,x.f)),t.Fb(8,49152,null,0,C.v,[t.j,t.q,t.J],{color:[0,"color"],forceOverscroll:[1,"forceOverscroll"]},null),(l()(),t.Gb(9,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,e){var t=!0,u=l.component;return"ionRefresh"===n&&(t=!1!==u.refresh(e.target)&&t),t}),x.S,x.p)),t.Fb(10,49152,null,0,C.eb,[t.j,t.q,t.J],null,null),(l()(),t.Gb(11,0,null,0,1,"ion-refresher-content",[["refreshing-spinner","crescent"],["refreshing-text","Atualizando..."]],null,null,null,x.R,x.q)),t.Fb(12,49152,null,0,C.fb,[t.j,t.q,t.J],null,null),(l()(),t.Gb(13,0,null,0,44,"div",[["class","px-5 bg-white text-black rounded-t min-h-full"]],null,null,null,null,null)),(l()(),t.Gb(14,0,null,null,4,"div",[["class","flex items-center justify-between pt-10"]],null,null,null,null,null)),(l()(),t.Gb(15,0,null,null,2,"div",[["class","pr-5 flex-1 font-display font-bold"]],null,null,null,null,null)),(l()(),t.Zb(16,null,[" "," "])),t.Ub(131072,M.b,[t.j]),(l()(),t.Gb(18,0,null,null,0,"div",[["class","rounded-full overflow-hidden-respect"],["style","width: 65px; height: 65px; background-size: cover; background-position: center;"]],[[4,"background-image",null]],null,null,null,null)),(l()(),t.Gb(19,0,null,null,1,"div",[["class","font-display font-bold text-grey-light"]],null,null,null,null,null)),(l()(),t.Zb(-1,null,[" Saldo "])),(l()(),t.Gb(21,0,null,null,13,"div",[["class","flex items-center justify-between mt-1 relative"]],null,null,null,null,null)),(l()(),t.Gb(22,0,[[1,0],["balanceElt",1]],null,5,"div",[["class","font-display font-bold text-5xl"]],null,null,null,null,null)),(l()(),t.Zb(23,null,[" R$ ",""])),t.Vb(24,1),(l()(),t.Gb(25,0,null,null,2,"span",[["class","text-base"]],null,null,null,null,null)),(l()(),t.Zb(26,null,[",",""])),t.Vb(27,2),(l()(),t.Gb(28,0,[[2,0],["stripe",1]],null,0,"div",[["class","z-40 absolute bg-grey-lighter border-1 border-solid border-grey-lighter rounded-xs h-full w-full"]],null,[[null,"click"]],(function(l,n,e){var t=!0,u=l.component;return"click"===n&&(t=!1!==u.toggleHideValues()&&t),t}),null,null)),(l()(),t.Gb(29,0,[[3,0],["stripeEye",1]],null,5,"div",[["aria-label","Ocultar valores"],["class","z-50 flex justify-center items-center ml-2 text-grey-light h-full relative"],["role","button"]],null,[[null,"click"]],(function(l,n,e){var t=!0,u=l.component;return"click"===n&&(t=!1!==u.toggleHideValues()&&t),t}),null,null)),(l()(),t.Gb(30,0,null,null,4,":svg:svg",[["height","26"],["width","26"]],null,null,null,null,null)),(l()(),t.Gb(31,0,null,null,3,":svg:g",[["fill","none"],["fill-rule","evenodd"],["stroke","currentColor"],["stroke-width","2"]],null,null,null,null,null)),(l()(),t.Gb(32,0,null,null,0,":svg:path",[["d","M1.92 13c1.848 4.803 6.195 8 11.08 8s9.232-3.197 11.08-8C22.232 8.197 17.885 5 13 5S3.768 8.197 1.92 13z"]],null,null,null,null,null)),(l()(),t.Gb(33,0,null,null,0,":svg:circle",[["cx","13"],["cy","13"],["r","4"]],null,null,null,null,null)),(l()(),t.Gb(34,0,[[4,0],["stripeLine",1]],null,0,":svg:path",[["d","M3 22.998L22.998 3"]],null,null,null,null,null)),(l()(),t.Gb(35,0,null,null,3,"div",[["class","flex flex-row mt-3 mb-5"]],null,null,null,null,null)),(l()(),t.wb(16777216,null,null,1,null,A)),t.Fb(37,16384,null,0,M.n,[t.cb,t.Y],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.wb(0,[["noBalance",2]],null,0,null,z)),(l()(),t.Gb(39,0,null,null,15,"div",[["class","mt-5 mb-12 font-display font-bold text-custom"]],null,null,null,null,null)),(l()(),t.Gb(40,0,null,null,0,"div",[["class","border-0 border-b border-solid border-ion-light"]],null,null,null,null,null)),(l()(),t.Gb(41,0,null,null,5,"div",[["class","ion-activatable -mx-5 px-5 py-8 flex justify-between items-center"],["role","button"],["routerLink","/profile"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Sb(l,42).onClick()&&u),"click"===n&&(u=!1!==t.Sb(l,43).onClick(e)&&u),u}),null,null)),t.Fb(42,16384,null,0,P.n,[P.m,P.a,[8,null],t.P,t.q],{routerLink:[0,"routerLink"]},null),t.Fb(43,737280,null,0,C.Ob,[M.k,C.Jb,t.q,P.m,[2,P.n]],null,null),(l()(),t.Zb(-1,null,[" DADOS PESSOAIS "])),(l()(),t.Gb(45,0,null,null,1,"ion-icon",[["class","-mr-2 mt-1 text-grey-dark text-lg"],["slot","icon-only"],["src","layout/arrow.svg"]],null,null,null,x.K,x.i)),t.Fb(46,49152,null,0,C.D,[t.j,t.q,t.J],{src:[0,"src"]},null),(l()(),t.Gb(47,0,null,null,0,"div",[["class","border-0 border-b border-solid border-ion-light"]],null,null,null,null,null)),(l()(),t.Gb(48,0,null,null,5,"div",[["class","ion-activatable -mx-5 px-5 py-8 flex justify-between items-center"],["role","button"],["routerLink","/payment-methods"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Sb(l,49).onClick()&&u),"click"===n&&(u=!1!==t.Sb(l,50).onClick(e)&&u),u}),null,null)),t.Fb(49,16384,null,0,P.n,[P.m,P.a,[8,null],t.P,t.q],{routerLink:[0,"routerLink"]},null),t.Fb(50,737280,null,0,C.Ob,[M.k,C.Jb,t.q,P.m,[2,P.n]],null,null),(l()(),t.Zb(-1,null,[" FORMAS DE PAGAMENTO "])),(l()(),t.Gb(52,0,null,null,1,"ion-icon",[["class","-mr-2 mt-1 text-grey-dark text-lg"],["slot","icon-only"],["src","layout/arrow.svg"]],null,null,null,x.K,x.i)),t.Fb(53,49152,null,0,C.D,[t.j,t.q,t.J],{src:[0,"src"]},null),(l()(),t.Gb(54,0,null,null,0,"div",[["class","border-0 border-b border-solid border-ion-light"]],null,null,null,null,null)),(l()(),t.Gb(55,0,null,null,2,"ion-button",[["aria-label","Sair da conta"],["class","dn-button"],["expand","block"]],null,[[null,"click"]],(function(l,n,e){var t=!0,u=l.component;return"click"===n&&(t=!1!==u.logout()&&t),t}),x.E,x.c)),t.Fb(56,49152,null,0,C.l,[t.j,t.q,t.J],{expand:[0,"expand"]},null),(l()(),t.Zb(-1,0,[" SAIR DA CONTA "]))],(function(l,n){var e=n.component;l(n,8,0,"primary",!1),l(n,37,0,e.hasBalance,t.Sb(n,38)),l(n,42,0,"/profile"),l(n,43,0),l(n,46,0,"layout/arrow.svg"),l(n,49,0,"/payment-methods"),l(n,50,0),l(n,53,0,"layout/arrow.svg"),l(n,56,0,"block")}),(function(l,n){var e=n.component;l(n,16,0,t.ac(n,16,0,t.Sb(n,17).transform(e.name))),l(n,18,0,"url("+e.foto+")");var u=t.ac(n,23,0,l(n,24,0,t.Sb(n,0),e.balanceWhole));l(n,23,0,u);var i=t.ac(n,26,0,l(n,27,0,t.Sb(n,0),e.balanceCents,"2.0"));l(n,26,0,i)}))}var L=t.Cb("ng-component",E,(function(l){return t.bc(0,[(l()(),t.Gb(0,0,null,null,1,"ng-component",[],null,null,null,D,J)),t.Fb(1,4243456,null,0,E,[C.Jb,F.z,q.a,t.j,_.a,S.a,j.a],null,null)],null,null)}),{},{},[]),R=e("QZuW"),T=e("mN0T"),Z=e("8yKR"),V=e("KJAm"),I=e("j/rZ"),N=e("gL1s"),X=e("fx87"),W=e("4WAM"),H=e("uqTW"),K=e("pOrc");e.d(n,"AccountPageModuleNgFactory",(function(){return B}));var B=t.Db(u,[],(function(l){return t.Pb([t.Qb(512,t.m,t.pb,[[8,[i.a,o.a,o.p,r.a,a.a,s.a,c.a,b.a,d.a,f.a,g.a,v.a,o.q,o.r,h.a,p.a,m.a,y.a,k.a,L]],[3,t.m],t.H]),t.Qb(4608,M.p,M.o,[t.D,[2,M.F]]),t.Qb(4608,C.b,C.b,[t.J,t.g]),t.Qb(4608,C.Ib,C.Ib,[C.b,t.m,t.z]),t.Qb(4608,C.Mb,C.Mb,[C.b,t.m,t.z]),t.Qb(4608,R.t,R.t,[]),t.Qb(4608,R.c,R.c,[]),t.Qb(5120,"virtual-scroller-default-options",T.a,[]),t.Qb(1073742336,M.c,M.c,[]),t.Qb(1073742336,C.Fb,C.Fb,[]),t.Qb(1073742336,R.s,R.s,[]),t.Qb(1073742336,R.h,R.h,[]),t.Qb(1073742336,P.o,P.o,[[2,P.t],[2,P.m]]),t.Qb(1073742336,F.f,F.f,[]),t.Qb(1073742336,R.p,R.p,[]),t.Qb(1073742336,F.k,F.k,[]),t.Qb(1073742336,Z.a,Z.a,[]),t.Qb(1073742336,F.d,F.d,[]),t.Qb(1073742336,F.q,F.q,[]),t.Qb(1073742336,V.a,V.a,[]),t.Qb(1073742336,I.a,I.a,[]),t.Qb(1073742336,F.s,F.s,[]),t.Qb(1073742336,N.a,N.a,[]),t.Qb(1073742336,X.a,X.a,[]),t.Qb(1073742336,T.c,T.c,[]),t.Qb(1073742336,W.b,W.b,[]),t.Qb(1073742336,F.u,F.u,[]),t.Qb(1073742336,H.a,H.a,[]),t.Qb(1073742336,u,u,[]),t.Qb(256,K.a,K.b,[]),t.Qb(1024,P.k,(function(){return[[{path:"",component:E}]]}),[])])}))}}]);