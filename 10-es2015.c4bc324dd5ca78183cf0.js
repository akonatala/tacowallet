(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0yzY":function(t,e,n){"use strict";n.r(e),n.d(e,"HomePageModule",(function(){return P}));var o=n("mrSG"),i=n("ofXK"),r=n("3Pt+"),a=n("TEn/"),s=n("tyNb"),c=n("fXoL");let u=(()=>{class t{constructor(t,e){this.taquito=t,this.summaryFunc=e,this.destination="tz1PirboZKFVqkfE45hVLpkpXaZtLk3mqC17",this.amount="1"}ngOnInit(){}send(){return Object(o.a)(this,void 0,void 0,(function*(){const t=yield this.taquito;yield t.wallet.transfer({amount:Number(this.amount),to:this.destination}).send()}))}}return t.\u0275fac=function(e){return new(e||t)(c.Jb("Taquito"),c.Jb("SummaryFunc"))},t.\u0275cmp=c.Db({type:t,selectors:[["app-home"]],decls:11,vars:2,consts:[["lines","none"],["position","stacked"],["placeholder","Destination",3,"ngModel","ngModelChange"],["placeholder","Amount",3,"ngModel","ngModelChange"],["expand","block","color","primary",3,"click"]],template:function(t,e){1&t&&(c.Mb(0,"ion-list",0),c.Mb(1,"ion-item"),c.Mb(2,"ion-label",1),c.jc(3,"Destination"),c.Lb(),c.Mb(4,"ion-input",2),c.Ub("ngModelChange",(function(t){return e.destination=t})),c.Lb(),c.Lb(),c.Mb(5,"ion-item"),c.Mb(6,"ion-label",1),c.jc(7,"Amount"),c.Lb(),c.Mb(8,"ion-input",3),c.Ub("ngModelChange",(function(t){return e.amount=t})),c.Lb(),c.Lb(),c.Mb(9,"ion-button",4),c.Ub("click",(function(){return e.send()})),c.jc(10,"Send"),c.Lb(),c.Lb()),2&t&&(c.zb(4),c.bc("ngModel",e.destination),c.zb(4),c.bc("ngModel",e.amount))},directives:[a.k,a.i,a.j,a.h,a.B,r.d,r.e,a.c],styles:["[_nghost-%COMP%]{margin:0 auto;max-width:600px;display:block}"]}),t})();var d=n("w5SX"),l=n("c3o+"),b=n("7OIR"),p=n("SxV6"),m=n("flj8"),h=n("qYoc");class f{constructor(t,e){this.pkh=t,this.opRequest=e}getPKH(){return Object(o.a)(this,void 0,void 0,(function*(){return this.pkh}))}mapTransferParamsToWalletParams(t){return Object(o.a)(this,void 0,void 0,(function*(){return Object(b.e)(t)}))}mapOriginateParamsToWalletParams(t){return Object(o.a)(this,void 0,void 0,(function*(){return Object(b.c)(t)}))}mapDelegateParamsToWalletParams(t){return Object(o.a)(this,void 0,void 0,(function*(){return Object(b.d)(t)}))}sendOperations(t){return Object(o.a)(this,void 0,void 0,(function*(){const e=yield this.opRequest.sendOperationRequest(t,"test"),{hash:n}=yield e.pipe(Object(p.a)()).toPromise();return n}))}}let v=(()=>{class t{constructor(t,e,n){this.opRequest=t,this.account=e,this.modalController=n}getTaquito(t){return Object(o.a)(this,void 0,void 0,(function*(){const t=yield this.account.currentAccount$.pipe(Object(p.a)()).toPromise(),e=new b.b;return e.setProvider({rpc:"https://api.tez.ie/rpc/carthagenet",wallet:new f(yield t.getPKH(),this.opRequest)}),e}))}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(h.a),c.Qb(m.a),c.Qb(a.y))},t.\u0275prov=c.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=n("xJ+R");let y=(()=>{class t{constructor(t){this.taquito=t}getMenu(t){return Object(o.a)(this,void 0,void 0,(function*(){const e=yield this.taquito,n=yield e.tz.getBalance(t);return Promise.resolve([{title:"Tezos",url:"/home",amount:e.format("mutez","tz",n).toFixed(2)+" tz",icon:"wallet"}])}))}}return t.\u0275fac=function(e){return new(e||t)(c.Qb("Taquito"))},t.\u0275prov=c.Fb({token:t,factory:t.\u0275fac}),t})(),P=(()=>{class t{constructor(t,e,n,o,i){t.registerCb(i,o),e.registerService(i,n)}}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)(c.Qb(l.a),c.Qb(g.a),c.Qb(y),c.Qb("SummaryFunc"),c.Qb("APP_ID"))},providers:[{provide:"APP_ID",useValue:"test"},{provide:"Taquito",useFactory:(t,e)=>t.getTaquito(e),deps:[v,"APP_ID"]},{provide:"SummaryFunc",useFactory:t=>e=>Object(o.a)(void 0,void 0,void 0,(function*(){return(yield t.create({component:d.a,componentProps:{op:e}})).present()})),deps:[a.y]},y],imports:[[i.c,r.a,a.v,s.j.forChild([{path:"",component:u}])]]}),t})()}}]);