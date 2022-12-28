(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6815],{42072:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config/server/EditStorage",function(){return a(68097)}])},73706:function(e,n,a){"use strict";a.d(n,{Z:function(){return o}});var s=a(85893),l=a(67294),i=a(94594),t=a(41983),c=a(39664),r=a(90745),d=a(99519);let o=e=>{let{apiPath:n,checked:a,reversed:o=!1,configPath:u="",disabled:h=!1,fieldName:f,label:v,tip:m,useSubmit:g,onChange:x}=e,[j,p]=(0,l.useState)(null),N=null,k=(0,l.useContext)(d.aC),{setFieldInConfigState:C}=k||{},b=()=>{p(null),clearTimeout(N),N=null},S=async e=>{if(g){p((0,t.kg)(t.Jk));let a=o?!e:e;await (0,r.Si)({apiPath:n,data:{value:a},onSuccess:()=>{C({fieldName:f,value:a,path:u}),p((0,t.kg)(t.zv))},onError:e=>{p((0,t.kg)(t.Un,"There was an error: ".concat(e)))}}),N=setTimeout(b,r.sI)}x&&x(e)},w=null!==j&&j.type===t.Jk;return(0,s.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[v&&(0,s.jsx)("div",{className:"label-side",children:(0,s.jsx)("span",{className:"formfield-label",children:v})}),(0,s.jsxs)("div",{className:"input-side",children:[(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)(i.Z,{className:"switch field-".concat(f),loading:w,onChange:S,defaultChecked:a,checked:a,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:h}),(0,s.jsx)(c.E,{status:j})]}),(0,s.jsx)("p",{className:"field-tip",children:m})]})]})};o.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},68097:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return j}});var s=a(85893),l=a(54907),i=a(71577),t=a(94184),c=a.n(t),r=a(67294),d=a(99519),o=a(82661),u=a(90745),h=a(41983),f=a(40117),v=a(39664),m=a(37174),g=a(73706);let{Panel:x}=l.Z;function j(){let[e,n]=(0,r.useState)(null),[a,t]=(0,r.useState)(null),[j,p]=(0,r.useState)(!1),N=(0,r.useContext)(d.aC),{serverConfig:k,setFieldInConfigState:C}=N||{},{setMessage:b}=(0,r.useContext)(o.k),{s3:S}=k,{accessKey:w="",acl:E="",bucket:y="",enabled:P=!1,endpoint:_="",region:z="",secret:T="",servingEndpoint:Z="",forcePathStyle:O=!1}=S;if((0,r.useEffect)(()=>{n({accessKey:w,acl:E,bucket:y,enabled:P,endpoint:_,region:z,secret:T,servingEndpoint:Z,forcePathStyle:O}),p(P)},[S]),!e)return null;let U=()=>{t(null),clearTimeout(null)},I=a=>{let{fieldName:s,value:l}=a;n({...e,[s]:l})},J=async()=>{t((0,h.kg)(h.Jk)),await (0,u.Si)({apiPath:u.$w,data:{value:e},onSuccess:()=>{C({fieldName:"s3",value:e,path:""}),t((0,h.kg)(h.zv,"Updated.")),setTimeout(U,u.sI),b("Changing your storage configuration will take place the next time you start a new stream.")},onError:e=>{t((0,h.kg)(h.Un,e)),setTimeout(U,u.sI)}})},K=e=>{p(e),I({fieldName:"enabled",value:e})},F=e=>{I({fieldName:"forcePathStyle",value:e})},X=c()({"edit-storage-container":!0,"form-module":!0,enabled:j}),M=function(e,n){let{endpoint:a,accessKey:s,secret:l,bucket:i,region:t,enabled:c,servingEndpoint:r,acl:d,forcePathStyle:o}=e;if(c){if(a&&(0,m.jv)(a)&&s&&l&&i&&t&&(c!==n.enabled||a!==n.endpoint||s!==n.accessKey||l!==n.secret||i!==n.bucket||t!==n.region||!n.servingEndpoint&&""!==r||n.servingEndpoint&&r!==n.servingEndpoint||!n.acl&&""!==d||n.acl&&d!==n.acl||o!==n.forcePathStyle))return!0}else if(c!==n.enabled)return!0;return!1}(e,S);return(0,s.jsxs)("div",{className:X,children:[(0,s.jsx)("div",{className:"enable-switch",children:(0,s.jsx)(g.Z,{apiPath:"",fieldName:"enabled",label:"Use S3 Storage Provider",checked:e.enabled,onChange:K})}),(0,s.jsxs)("div",{className:"form-fields",children:[(0,s.jsx)("div",{className:"field-container",children:(0,s.jsx)(f.nv,{...u.zm.endpoint,value:e.endpoint,onChange:I})}),(0,s.jsx)("div",{className:"field-container",children:(0,s.jsx)(f.nv,{...u.zm.accessKey,value:e.accessKey,onChange:I})}),(0,s.jsx)("div",{className:"field-container",children:(0,s.jsx)(f.nv,{...u.zm.secret,value:e.secret,onChange:I})}),(0,s.jsx)("div",{className:"field-container",children:(0,s.jsx)(f.nv,{...u.zm.bucket,value:e.bucket,onChange:I})}),(0,s.jsx)("div",{className:"field-container",children:(0,s.jsx)(f.nv,{...u.zm.region,value:e.region,onChange:I})}),(0,s.jsx)(l.Z,{className:"advanced-section",children:(0,s.jsxs)(x,{header:"Optional Settings",children:[(0,s.jsx)("div",{className:"field-container",children:(0,s.jsx)(f.nv,{...u.zm.acl,value:e.acl,onChange:I})}),(0,s.jsx)("div",{className:"field-container",children:(0,s.jsx)(f.nv,{...u.zm.servingEndpoint,value:e.servingEndpoint,onChange:I})}),(0,s.jsx)("div",{className:"enable-switch",children:(0,s.jsx)(g.Z,{...u.zm.forcePathStyle,fieldName:"forcePathStyle",checked:e.forcePathStyle,onChange:F})})]},"1")})]}),(0,s.jsxs)("div",{className:"button-container",children:[(0,s.jsx)(i.Z,{type:"primary",onClick:J,disabled:!M,children:"Save"}),(0,s.jsx)(v.E,{status:a})]})]})}}},function(e){e.O(0,[5473,9774,2888,179],function(){return e(e.s=42072)}),_N_E=e.O()}]);