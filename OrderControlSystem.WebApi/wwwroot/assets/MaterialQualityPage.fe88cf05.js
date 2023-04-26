import{a5 as x,b as m,w as A,D as _,R as L,o as g,c as h,k as c,e as l,f as a,l as w,h as T,S as U,a as K,i as n,s as D,Q as S,p as F,d as N,a0 as P,a1 as B,j as E,P as M,m as b,E as C,G as I,a6 as $,n as G,F as R,a4 as z,v as O}from"./index.aafe1f7a.js";const H={class:"p-grid p-fluid"},j={class:"p-field p-col-12"},Y=c("label",{for:"code"},"Kalite Kodu",-1),q={key:0,class:"p-error"},J={class:"p-field p-col-12"},W=c("label",{for:"Name"},"Kalite Ad\u0131",-1),X={key:0,class:"p-error"},Z={class:"p-field p-col-12"},ee=c("label",{for:"remark"},"Kalite A\xE7\u0131klamas\u0131",-1),ae={key:0,class:"p-error"},le={__name:"MaterialQualityForm",props:["dialogType","matQId"],emits:["closeDialog"],setup(k,{expose:u,emit:r}){const o=k,t=x(),p=m(!1),e=m({});A(()=>o.dialogType,async()=>{o.dialogType==_.ADD&&(e.value={}),o.dialogType==_.UPD&&(e.value=(await t.getMaterialQuality(o.matQId))[0])},{immediate:!0}),u({saveMatQ:v});async function v(){Q()!=!0&&(e.value.updatedDatetime=L(Date.now()),console.log(e.value.updatedDatetime),o.dialogType==_.ADD&&await t.AddMaterialQuality(e.value),o.dialogType==_.UPD&&await t.updateMaterialQuality(e.value),r("closeDialog",!1))}function Q(){return!e.value.name||!e.value.remark||!e.value.code?(p.value=!0,!0):!1}return(V,f)=>(g(),h("div",H,[c("div",j,[Y,l(a(w),{modelValue:e.value.code,"onUpdate:modelValue":f[0]||(f[0]=s=>e.value.code=s)},null,8,["modelValue"]),p.value&&!e.value.code?(g(),h("small",q,"L\xFCtfen De\u011Fer Giriniz")):T("",!0)]),c("div",J,[W,l(a(w),{modelValue:e.value.name,"onUpdate:modelValue":f[1]||(f[1]=s=>e.value.name=s)},null,8,["modelValue"]),p.value&&!e.value.name?(g(),h("small",X,"L\xFCtfen De\u011Fer Giriniz")):T("",!0)]),c("div",Z,[ee,l(U,{modelValue:e.value.remark,"onUpdate:modelValue":f[2]||(f[2]=s=>e.value.remark=s)},null,8,["modelValue"]),p.value&&!e.value.remark?(g(),h("small",ae,"L\xFCtfen De\u011Fer Giriniz")):T("",!0)])]))}},te={__name:"MaterialQualityDialog",props:["modelValue","matQDialogShow","dialogType","matQId"],emits:["update:modelValue","refresh"],setup(k,{emit:u}){const r=k,o=m(),t=m(!1);A(t,()=>{u("update:modelValue",t.value)}),A(()=>r.modelValue,()=>{t.value=r.modelValue,u("update:modelValue",t.value)});function p(){o.value.saveMatQ(),u("refresh",!0)}function e(v){t.value=!1,u("refresh",!0)}return(v,Q)=>(g(),K(a(S),{visible:t.value,"onUpdate:visible":Q[0]||(Q[0]=V=>t.value=V),header:"Kalite",modal:!1,position:"middle",breakpoints:{"960px":"75vw","640px":"90vw"},style:{width:"40vw"}},{footer:n(()=>[l(a(D),{label:"Vazge\xE7",icon:"pi pi-times",onClick:e,class:"p-button-text"}),l(a(D),{label:"Kaydet",icon:"pi pi-save",onClick:p})]),default:n(()=>[l(le,{ref_key:"materialQualityFormComponent",ref:o,dialogType:r.dialogType,matQId:r.matQId,onCloseDialog:e},null,8,["dialogType","matQId"])]),_:1},8,["visible"]))}},oe=c("h3",null,"Kaliteler",-1),ie={class:"p-input-icon-left"},se=c("i",{class:"pi pi-search"},null,-1),ue={__name:"MaterialQualityTable",setup(k){const u=x(),r=m([]),o=m(_.ADD),t=m(!1),p=m([]),e=m({global:{value:"",matchMode:F.CONTAINS}});async function v(s){r.value=await u.getMaterialQualities()}N(()=>{v()});function Q(){o.value=_.ADD,t.value=!0}function V(s){p.value=s,o.value=_.UPD,t.value=!0}function f(s){z(s.name+" Adl\u0131 Kalite Silinecek",async()=>{await u.deleteMaterialQuality(s.materialQualityId),v()})}return(s,d)=>(g(),h(R,null,[l(a(P)),l(G,null,{default:n(()=>[l(a(B),{class:"mb-4"},{start:n(()=>[]),_:1}),l(a(E),{loading:a(u).materialQualityLoading.value,class:"dataTable",value:r.value,responsiveLayout:"scroll",paginator:!0,rows:20,paginatorPosition:"top",stripedRows:"",filters:e.value,"onUpdate:filters":d[3]||(d[3]=i=>e.value=i),globalFilterFields:["code","name","createdDatetime"],dataKey:"materialQualityId"},{paginatorstart:n(()=>[oe]),paginatorend:n(()=>[l(a(D),{label:"Kalite Ekle",icon:a(M).PLUS,class:"p-button-success p-button-rounded mr-2",onClick:d[0]||(d[0]=i=>Q())},null,8,["icon"]),c("span",ie,[se,l(a(w),{modelValue:e.value.global.value,"onUpdate:modelValue":d[1]||(d[1]=i=>e.value.global.value=i),placeholder:"Ara..."},null,8,["modelValue"])]),l(a(D),{icon:a(M).REFRESH,class:"p-button-rounded p-button-outlined mx-2",onClick:d[2]||(d[2]=i=>v())},null,8,["icon"])]),default:n(()=>[l(a(b),{field:"code",header:"Kalite Kodu"}),l(a(b),{field:"name",header:"Ad\u0131"}),l(a(b),{field:"remark",header:"A\xE7\u0131klamas\u0131"}),l(a(b),{field:"createdDatetime",header:"Olu\u015Fturma Tarihi"},{body:n(i=>{var y;return[C(I(a($)((y=i.data)==null?void 0:y.createdDatetime)),1)]}),_:1}),l(a(b),{field:"updatedDatetime",header:"G\xFCncelleme Tarihi"},{body:n(i=>{var y;return[C(I(a($)((y=i.data)==null?void 0:y.updatedDatetime)),1)]}),_:1}),l(a(b),{exportable:!1,style:{"min-width":"8rem"}},{body:n(i=>[l(a(D),{icon:a(M).PENCIL,class:"p-button-primary p-button-rounded p-button-outlined mr-2",onClick:y=>V(i.data)},null,8,["icon","onClick"]),l(a(D),{icon:a(M).TRASH,class:"p-button-rounded p-button-danger p-button-outlined mr-2",onClick:y=>f(i.data)},null,8,["icon","onClick"])]),_:1})]),_:1},8,["loading","value","filters"])]),_:1}),l(te,{modelValue:t.value,"onUpdate:modelValue":d[4]||(d[4]=i=>t.value=i),dialogType:o.value,matQId:p.value.materialQualityId,onRefresh:v},null,8,["modelValue","dialogType","matQId"])],64))}},re={__name:"MaterialQualityPage",setup(k){return(u,r)=>{const o=O("AppBaseLayout");return g(),K(o,null,{default:n(()=>[l(ue)]),_:1})}}};export{re as default};
