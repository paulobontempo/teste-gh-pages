(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{rUSN:function(l,n,u){"use strict";u.r(n);var o=u("Mlb/"),a=u("bb6g"),s=u("QZuW"),t=u("9a/b"),i=u("FJRG"),e=u("PFdk"),r=u("2dxs");class b{constructor(l,n,u){this.changePasswordGql=l,this.loadingCtrl=n,this.navCtrl=u}ngOnInit(){this.form=new s.f({oldPassword:new s.d("",[s.r.required]),password:new s.d("",[s.r.required,s.r.minLength(8)]),passwordConfirmation:new s.d("",[s.r.required])},[r.d("password","passwordConfirmation")])}submit(){return a.b(this,void 0,void 0,(function*(){if(this.form.invalid)return void(this.form.controls.oldPassword.invalid?this.oldPasswordField.setFocus():this.form.controls.password.invalid?this.passwordField.setFocus():this.form.controls.passwordConfirmation.invalid&&this.passwordConfirmationField.setFocus());let l=this.form.value,n=yield this.loadingCtrl.create();n.present();try{let u=yield this.changePasswordGql.mutate({oldPassword:l.oldPassword,newPassword:l.password}).toPromise();if(n.dismiss(),!u.data)return void Object(e.a)(this.navCtrl,u,"change-password");if(!u.data.op.success)return void Object(e.a)(this.navCtrl,u.data.op,"change-password");this.navCtrl.pop()}catch(u){n.dismiss(),Object(e.a)(this.navCtrl,u,"change-password")}}))}}class d{}var c=u("fYis"),g=u("wLPr"),p=u("XI/K"),m=u("80Dv"),h=u("JC8e"),w=u("4E43"),f=[[""]],C=o.Eb({encapsulation:0,styles:f,data:{}});function v(l){return o.bc(2,[o.Xb(402653184,1,{oldPasswordField:0}),o.Xb(402653184,2,{passwordField:0}),o.Xb(402653184,3,{passwordConfirmationField:0}),(l()(),o.Gb(3,0,null,null,11,"ion-header",[["no-border",""]],null,null,null,g.J,g.h)),o.Fb(4,49152,null,0,t.C,[o.j,o.q,o.J],null,null),(l()(),o.Gb(5,0,null,0,9,"ion-toolbar",[],null,null,null,g.db,g.B)),o.Fb(6,49152,null,0,t.Db,[o.j,o.q,o.J],null,null),(l()(),o.Gb(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,g.F,g.d)),o.Fb(8,49152,null,0,t.m,[o.j,o.q,o.J],null,null),(l()(),o.Gb(9,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var a=!0;"click"===n&&(a=!1!==o.Sb(l,11).onClick(u)&&a);return a}),g.D,g.b)),o.Fb(10,49152,null,0,t.h,[o.j,o.q,o.J],null,null),o.Fb(11,16384,null,0,t.i,[[2,t.jb],t.Jb],null,null),(l()(),o.Gb(12,0,null,0,2,"ion-title",[],null,null,null,g.cb,g.A)),o.Fb(13,49152,null,0,t.Bb,[o.j,o.q,o.J],null,null),(l()(),o.Zb(-1,0,["Alterar Senha"])),(l()(),o.Gb(15,0,null,null,53,"ion-content",[],null,null,null,g.H,g.f)),o.Fb(16,49152,null,0,t.v,[o.j,o.q,o.J],{forceOverscroll:[0,"forceOverscroll"]},null),(l()(),o.Gb(17,0,null,0,49,"form",[["class","p-5"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var a=!0;"submit"===n&&(a=!1!==o.Sb(l,19).onSubmit(u)&&a);"reset"===n&&(a=!1!==o.Sb(l,19).onReset()&&a);return a}),null,null)),o.Fb(18,16384,null,0,s.v,[],null,null),o.Fb(19,540672,null,0,s.g,[[8,null],[8,null]],{form:[0,"form"]},null),o.Wb(2048,null,s.a,null,[s.g]),o.Fb(21,16384,null,0,s.n,[[4,s.a]],null,null),(l()(),o.Gb(22,0,null,null,13,"ion-item",[["class","mb-5"]],null,null,null,g.M,g.k)),o.Fb(23,49152,null,0,t.I,[o.j,o.q,o.J],null,null),(l()(),o.Gb(24,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,g.N,g.l)),o.Fb(25,49152,null,0,t.O,[o.j,o.q,o.J],{position:[0,"position"]},null),(l()(),o.Zb(-1,0,["Senha atual"])),(l()(),o.Gb(27,0,null,0,6,"ion-input",[["formControlName","oldPassword"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keydown.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var a=!0;"ionBlur"===n&&(a=!1!==o.Sb(l,28)._handleBlurEvent(u.target)&&a);"ionChange"===n&&(a=!1!==o.Sb(l,28)._handleInputEvent(u.target)&&a);"keydown.enter"===n&&(a=!1!==o.Sb(l,47).setFocus()&&a);return a}),g.L,g.j)),o.Fb(28,16384,null,0,t.Qb,[o.q],null,null),o.Wb(1024,null,s.k,(function(l){return[l]}),[t.Qb]),o.Fb(30,671744,null,0,s.e,[[3,s.a],[8,null],[8,null],[6,s.k],[2,s.u]],{name:[0,"name"]},null),o.Wb(2048,null,s.l,null,[s.e]),o.Fb(32,16384,null,0,s.m,[[4,s.l]],null,null),o.Fb(33,49152,[[1,4],["oldPassword",4]],0,t.H,[o.j,o.q,o.J],{type:[0,"type"]},null),(l()(),o.Gb(34,0,null,0,1,"dn-validation",[["name","oldPassword"]],null,null,null,p.b,p.a)),o.Fb(35,4374528,null,0,m.a,[[2,s.a],o.q],{name:[0,"name"]},null),(l()(),o.Gb(36,0,null,null,13,"ion-item",[],null,null,null,g.M,g.k)),o.Fb(37,49152,null,0,t.I,[o.j,o.q,o.J],null,null),(l()(),o.Gb(38,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,g.N,g.l)),o.Fb(39,49152,null,0,t.O,[o.j,o.q,o.J],{position:[0,"position"]},null),(l()(),o.Zb(-1,0,["Criar nova senha"])),(l()(),o.Gb(41,0,null,0,6,"ion-input",[["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keydown.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var a=!0;"ionBlur"===n&&(a=!1!==o.Sb(l,42)._handleBlurEvent(u.target)&&a);"ionChange"===n&&(a=!1!==o.Sb(l,42)._handleInputEvent(u.target)&&a);"keydown.enter"===n&&(a=!1!==o.Sb(l,61).setFocus()&&a);return a}),g.L,g.j)),o.Fb(42,16384,null,0,t.Qb,[o.q],null,null),o.Wb(1024,null,s.k,(function(l){return[l]}),[t.Qb]),o.Fb(44,671744,null,0,s.e,[[3,s.a],[8,null],[8,null],[6,s.k],[2,s.u]],{name:[0,"name"]},null),o.Wb(2048,null,s.l,null,[s.e]),o.Fb(46,16384,null,0,s.m,[[4,s.l]],null,null),o.Fb(47,49152,[[2,4],["password",4]],0,t.H,[o.j,o.q,o.J],{type:[0,"type"]},null),(l()(),o.Gb(48,0,null,0,1,"dn-validation",[["name","password"]],null,null,null,p.b,p.a)),o.Fb(49,4374528,null,0,m.a,[[2,s.a],o.q],{name:[0,"name"]},null),(l()(),o.Gb(50,0,null,null,13,"ion-item",[],null,null,null,g.M,g.k)),o.Fb(51,49152,null,0,t.I,[o.j,o.q,o.J],null,null),(l()(),o.Gb(52,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,g.N,g.l)),o.Fb(53,49152,null,0,t.O,[o.j,o.q,o.J],{position:[0,"position"]},null),(l()(),o.Zb(-1,0,["Confirmar nova senha"])),(l()(),o.Gb(55,0,null,0,6,"ion-input",[["formControlName","passwordConfirmation"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keydown.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var a=!0,s=l.component;"ionBlur"===n&&(a=!1!==o.Sb(l,56)._handleBlurEvent(u.target)&&a);"ionChange"===n&&(a=!1!==o.Sb(l,56)._handleInputEvent(u.target)&&a);"keydown.enter"===n&&(a=!1!==s.submit()&&a);return a}),g.L,g.j)),o.Fb(56,16384,null,0,t.Qb,[o.q],null,null),o.Wb(1024,null,s.k,(function(l){return[l]}),[t.Qb]),o.Fb(58,671744,null,0,s.e,[[3,s.a],[8,null],[8,null],[6,s.k],[2,s.u]],{name:[0,"name"]},null),o.Wb(2048,null,s.l,null,[s.e]),o.Fb(60,16384,null,0,s.m,[[4,s.l]],null,null),o.Fb(61,49152,[[3,4],["passwordConfirmation",4]],0,t.H,[o.j,o.q,o.J],{type:[0,"type"]},null),(l()(),o.Gb(62,0,null,0,1,"dn-validation",[["name","passwordConfirmation"]],null,null,null,p.b,p.a)),o.Fb(63,4374528,null,0,m.a,[[2,s.a],o.q],{name:[0,"name"]},null),(l()(),o.Gb(64,0,null,null,2,"ion-button",[["class","dn-button mt-8"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var o=!0,a=l.component;"click"===n&&(o=!1!==a.submit()&&o);return o}),g.E,g.c)),o.Fb(65,49152,null,0,t.l,[o.j,o.q,o.J],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(l()(),o.Zb(-1,0,["Salvar"])),(l()(),o.Gb(67,0,null,0,1,"dn-keyboard-placeholder",[["class","pb-safe"]],null,null,null,h.o,h.h)),o.Fb(68,245760,null,0,w.H,[o.q,w.I,t.Lb],null,null)],(function(l,n){var u=n.component;l(n,16,0,!1),l(n,19,0,u.form);l(n,25,0,"floating");l(n,30,0,"oldPassword");l(n,33,0,"password");l(n,35,0,"oldPassword");l(n,39,0,"floating");l(n,44,0,"password");l(n,47,0,"password");l(n,49,0,"password");l(n,53,0,"floating");l(n,58,0,"passwordConfirmation");l(n,61,0,"password");l(n,63,0,"passwordConfirmation");l(n,65,0,u.form.invalid,"block"),l(n,68,0)}),(function(l,n){l(n,17,0,o.Sb(n,21).ngClassUntouched,o.Sb(n,21).ngClassTouched,o.Sb(n,21).ngClassPristine,o.Sb(n,21).ngClassDirty,o.Sb(n,21).ngClassValid,o.Sb(n,21).ngClassInvalid,o.Sb(n,21).ngClassPending),l(n,27,0,o.Sb(n,32).ngClassUntouched,o.Sb(n,32).ngClassTouched,o.Sb(n,32).ngClassPristine,o.Sb(n,32).ngClassDirty,o.Sb(n,32).ngClassValid,o.Sb(n,32).ngClassInvalid,o.Sb(n,32).ngClassPending),l(n,41,0,o.Sb(n,46).ngClassUntouched,o.Sb(n,46).ngClassTouched,o.Sb(n,46).ngClassPristine,o.Sb(n,46).ngClassDirty,o.Sb(n,46).ngClassValid,o.Sb(n,46).ngClassInvalid,o.Sb(n,46).ngClassPending),l(n,55,0,o.Sb(n,60).ngClassUntouched,o.Sb(n,60).ngClassTouched,o.Sb(n,60).ngClassPristine,o.Sb(n,60).ngClassDirty,o.Sb(n,60).ngClassValid,o.Sb(n,60).ngClassInvalid,o.Sb(n,60).ngClassPending)}))}var F=o.Cb("ng-component",b,(function(l){return o.bc(0,[(l()(),o.Gb(0,0,null,null,1,"ng-component",[],null,null,null,v,C)),o.Fb(1,114688,null,0,b,[i.f,t.Hb,t.Jb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),S=u("vk2e"),k=u("qk26"),y=u("8yKR");u.d(n,"ChangePasswordPageModuleNgFactory",(function(){return q}));var q=o.Db(d,[],(function(l){return o.Pb([o.Qb(512,o.m,o.pb,[[8,[c.a,F]],[3,o.m],o.H]),o.Qb(4608,S.p,S.o,[o.D,[2,S.F]]),o.Qb(4608,s.t,s.t,[]),o.Qb(4608,s.c,s.c,[]),o.Qb(4608,t.b,t.b,[o.J,o.g]),o.Qb(4608,t.Ib,t.Ib,[t.b,o.m,o.z]),o.Qb(4608,t.Mb,t.Mb,[t.b,o.m,o.z]),o.Qb(1073742336,S.c,S.c,[]),o.Qb(1073742336,w.f,w.f,[]),o.Qb(1073742336,s.s,s.s,[]),o.Qb(1073742336,s.h,s.h,[]),o.Qb(1073742336,s.p,s.p,[]),o.Qb(1073742336,t.Fb,t.Fb,[]),o.Qb(1073742336,k.o,k.o,[[2,k.t],[2,k.m]]),o.Qb(1073742336,y.a,y.a,[]),o.Qb(1073742336,d,d,[]),o.Qb(1024,k.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);