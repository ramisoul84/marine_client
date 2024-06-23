import{Aa as N,Ba as j,Ea as I,Fa as A,Ha as x,Ia as H,ea as b,fa as V,ga as P,h as g,ha as B,i as G,ia as O,ka as h,ma as r,oa as v,pa as M,sa as y,ua as C,va as E,wa as F,xa as S,za as T}from"./chunk-HEBGFAH3.js";import{Fb as u,Hc as R,Pb as o,Qb as D,Ta as d,Ua as f,_ as w,eb as q,ia as c,ja as _,mb as L,nb as p,wb as i,xb as e,yb as s}from"./chunk-KLT6BQMW.js";var J=(()=>{let t=class t{constructor(l){this.fb=l,this.hide=q(!0),this.loginForm=this.fb.group({email:this.fb.control("",[r.required,r.email]),password:this.fb.control("",[r.required,r.minLength(8)])})}clickEvent(l){this.hide.set(!this.hide),l.stopPropagation()}onSubmit(){console.log(this.loginForm.value)}};t.\u0275fac=function(m){return new(m||t)(f(S))},t.\u0275cmp=c({type:t,selectors:[["app-login"]],decls:18,vars:6,consts:[[3,"formGroup"],["matInput","","placeholder","ivan92@mail.ru","required","","formControlName","email"],["matInput","","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["mat-raised-button","","color","primary",1,"submit",3,"click","disabled"],["routerLink","/register"]],template:function(m,a){m&1&&(i(0,"form",0)(1,"mat-form-field")(2,"mat-label"),o(3,"Enter your email"),e(),s(4,"input",1),e(),i(5,"mat-form-field")(6,"mat-label"),o(7,"Enter your password"),e(),s(8,"input",2),i(9,"button",3),u("click",function(Q){return a.clickEvent(Q)}),i(10,"mat-icon"),o(11),e()()(),i(12,"button",4),u("click",function(){return a.onSubmit()}),o(13," Login "),e(),i(14,"span"),o(15,"Dont have an account! "),i(16,"a",5),o(17,"register"),e()()()),m&2&&(p("formGroup",a.loginForm),d(8),p("type",a.hide()?"password":"text"),d(),L("aria-label","Hide password")("aria-pressed",a.hide()),d(2),D(a.hide()?"visibility_off":"visibility"),d(),p("disabled",a.loginForm.invalid))},dependencies:[g,y,h,v,M,F,C,E,b,V,I,N,j,B,x],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:4rem;margin:0 auto}mat-form-field[_ngcontent-%COMP%]{min-width:18rem}.submit[_ngcontent-%COMP%]{min-width:18rem;margin-bottom:1rem}"]});let n=t;return n})();var K=(()=>{let t=class t{constructor(l){this.fb=l,this.registerForm=this.fb.group({firstName:this.fb.control("",[r.required]),lastName:this.fb.control("",[r.required]),email:this.fb.control("",[r.required,r.email]),password:this.fb.control("",[r.required,r.minLength(8)])})}onSubmit(){console.log(this.registerForm.value)}};t.\u0275fac=function(m){return new(m||t)(f(S))},t.\u0275cmp=c({type:t,selectors:[["app-register"]],decls:23,vars:2,consts:[[3,"formGroup"],["matInput","","placeholder","Ivan","required","","formControlName","firstName"],["matInput","","placeholder","Ivanov","required","","formControlName","lastName"],["matInput","","placeholder","ivan92@mail.ru","required","","formControlName","email"],["matInput","","type","password","required","","formControlName","lastName"],["mat-raised-button","","color","primary",1,"submit",3,"click","disabled"],["routerLink","/login"]],template:function(m,a){m&1&&(i(0,"form",0)(1,"mat-form-field")(2,"mat-label"),o(3,"Enter your name"),e(),s(4,"input",1),e(),i(5,"mat-form-field")(6,"mat-label"),o(7,"Enter your last name"),e(),s(8,"input",2),e(),i(9,"mat-form-field")(10,"mat-label"),o(11,"Enter your email"),e(),s(12,"input",3),e(),i(13,"mat-form-field")(14,"mat-label"),o(15,"Enter your password"),e(),s(16,"input",4),e(),i(17,"button",5),u("click",function(){return a.onSubmit()}),o(18," Register "),e(),i(19,"span"),o(20,"Already have an account! "),i(21,"a",6),o(22,"login"),e()()()),m&2&&(p("formGroup",a.registerForm),d(17),p("disabled",a.registerForm.invalid))},dependencies:[g,y,h,v,M,F,C,E,b,I,N,x],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:4rem;margin:0 auto}mat-form-field[_ngcontent-%COMP%]{min-width:18rem}.submit[_ngcontent-%COMP%]{min-width:18rem;margin-bottom:1rem}"]});let n=t;return n})();var $=[P,A,O,H],tt=[{path:"login",component:J},{path:"register",component:K}],ht=(()=>{let t=class t{};t.\u0275fac=function(m){return new(m||t)},t.\u0275mod=_({type:t}),t.\u0275inj=w({imports:[G.forChild(tt),R,T,$]});let n=t;return n})();export{ht as AccountModule};