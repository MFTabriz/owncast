(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[721],{39424:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var a=t(93433),s=t(4942),r=t(15861),i=t(87757),l=t.n(i),c=t(67294),o=t(4525),u=t(71577),d=t(4107),f=t(2023),p=t(37614),m=t(73171),h=t(7031),v=t(94853),x=t(95828),g=t(85893);function j(e){var n=e.iconList,t=e.selectedOption,a=e.onSelected,s=""===t?null:t;return(0,g.jsxs)("div",{className:"social-dropdown-container",children:[(0,g.jsx)("p",{className:"description",children:"If you are looking for a platform name not on this list, please select Other and type in your own name. A logo will not be provided."}),(0,g.jsxs)("div",{className:"formfield-container",children:[(0,g.jsx)("div",{className:"label-side",children:(0,g.jsx)("span",{className:"formfield-label",children:"Social Platform"})}),(0,g.jsx)("div",{className:"input-side",children:(0,g.jsxs)(h.Z,{style:{width:240},className:"social-dropdown",placeholder:"Social platform...",defaultValue:s,value:s,onSelect:function(e){a&&a(e)},children:[n.map((function(e){var n=e.platform,t=e.icon,a=e.key,s="".concat(v.WB).concat(t.slice(1));return(0,g.jsxs)(h.Z.Option,{className:"social-option",value:a,children:[(0,g.jsx)("span",{className:"option-icon",children:(0,g.jsx)("img",{src:s,alt:"",className:"option-icon"})}),(0,g.jsx)("span",{className:"option-label",children:n})]},"platform-".concat(a))})),(0,g.jsx)(h.Z.Option,{className:"social-option",value:x.z_,children:"Other..."},"platform-".concat(x.z_))]})})]})]})}var N=t(60293),y=t(31820),b=t(60764),w=t(74071),k=t(91486);function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Z=o.Z.Title;function P(){var e=(0,c.useState)([]),n=e[0],t=e[1],i=(0,c.useState)([]),o=i[0],h=i[1],S=(0,c.useState)(!1),P=S[0],O=S[1],T=(0,c.useState)(!1),E=T[0],_=T[1],D=(0,c.useState)(!1),I=D[0],L=D[1],U=(0,c.useState)(-1),z=U[0],F=U[1],A=(0,c.useState)(x.wC),R=A[0],H=A[1],J=(0,c.useState)(null),Q=J[0],V=J[1],B=(0,c.useContext)(N.aC)||{},G=B.serverConfig,M=B.setFieldInConfigState,W=G.instanceDetails,Y=W.socialHandles,X=null,$=function(){var e=(0,r.Z)(l().mark((function e(){var n,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.rQ)(v.$i,{auth:!1});case 3:n=e.sent,a=Object.keys(n).map((function(e){return C({key:e},n[e])})),t(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),q=function(e){return n.find((function(n){return n.key===e}))||!1},K=""!==R.platform&&!n.find((function(e){return e.key===R.platform}));(0,c.useEffect)((function(){$()}),[]),(0,c.useEffect)((function(){W.socialHandles&&h(Y)}),[W]);var ee=function(){V(null),X=null,clearTimeout(X)},ne=function(){O(!1),F(-1),_(!1),L(!1),H(C({},x.wC))},te=function(){ne()},ae=function(e,n){H(C(C({},R),{},(0,s.Z)({},e,n)))},se=function(){var e=(0,r.Z)(l().mark((function e(n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.Si)({apiPath:x.c9,data:{value:n},onSuccess:function(){M({fieldName:"socialHandles",value:n,path:"instanceDetails"}),L(!1),te(),V((0,w.kg)(w.zv)),X=setTimeout(ee,x.sI)},onError:function(e){V((0,w.kg)(w.Un,"There was an error: ".concat(e))),L(!1),X=setTimeout(ee,x.sI)}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),re=[{title:"Social Link",dataIndex:"",key:"combo",render:function(e,n){var t=n.platform,a=n.url,s=q(t);if(!s)return(0,g.jsx)("div",{className:"social-handle-cell",children:(0,g.jsxs)("p",{className:"option-label",children:[(0,g.jsx)("strong",{children:t}),(0,g.jsx)("span",{className:"handle-url",title:a,children:a})]})});var r=s.icon,i=s.platform,l="".concat(v.WB).concat(r.slice(1));return(0,g.jsxs)("div",{className:"social-handle-cell",children:[(0,g.jsx)("span",{className:"option-icon",children:(0,g.jsx)("img",{src:l,alt:"",className:"option-icon"})}),(0,g.jsxs)("p",{className:"option-label",children:[(0,g.jsx)("strong",{children:i}),(0,g.jsx)("span",{className:"handle-url",title:a,children:a})]})]})}},{title:"",dataIndex:"",key:"edit",render:function(e,n,t){return(0,g.jsxs)("div",{className:"actions",children:[(0,g.jsx)(u.Z,{size:"small",onClick:function(){var e=o[t];F(t),H(C({},e)),O(!0),q(e.platform)||_(!0)},children:"Edit"}),(0,g.jsx)(u.Z,{className:"delete-button",icon:(0,g.jsx)(m.Z,{}),size:"small",onClick:function(){return function(e){var n=(0,a.Z)(o);n.splice(e,1),se(n)}(t)}})]})}}],ie={disabled:!(0,y.Z)(R.url)},le=(0,g.jsxs)("div",{className:"other-field-container formfield-container",children:[(0,g.jsx)("div",{className:"label-side"}),(0,g.jsx)("div",{className:"input-side",children:(0,g.jsx)(d.Z,{placeholder:"Other platform name",defaultValue:R.platform,onChange:function(e){var n=e.target.value;ae("platform",n)}})})]});return(0,g.jsxs)("div",{className:"social-links-edit-container",children:[(0,g.jsx)(Z,{level:3,className:"section-title",children:"Your Social Handles"}),(0,g.jsx)("p",{className:"description",children:"Add all your social media handles and links to your other profiles here."}),(0,g.jsx)(k.Z,{status:Q}),(0,g.jsx)(f.Z,{className:"social-handles-table",pagination:!1,size:"small",rowKey:function(e){return"".concat(e.platform,"-").concat(e.url)},columns:re,dataSource:o}),(0,g.jsx)(p.Z,{title:"Edit Social Handle",visible:P,onOk:function(){L(!0);var e=o.length?(0,a.Z)(o):[];-1===z?e.push(R):e.splice(z,1,R),se(e)},onCancel:te,confirmLoading:I,okButtonProps:ie,children:(0,g.jsxs)("div",{className:"social-handle-modal-content",children:[(0,g.jsx)(j,{iconList:n,selectedOption:K?x.z_:R.platform,onSelected:function(e){e===x.z_?(_(!0),ae("platform","")):(_(!1),ae("platform",e))}}),E&&le,(0,g.jsx)("br",{}),(0,g.jsx)(b.ZP,{fieldName:"social-url",label:"URL",placeholder:{mastodon:"https://mastodon.social/@username",twitter:"https://twitter.com/username"}[R.platform]||"Url to page",value:R.url,onChange:function(e){var n=e.value;ae("url",n)},useTrim:!0,type:"url",pattern:y.a}),(0,g.jsx)(k.Z,{status:Q})]})}),(0,g.jsx)("br",{}),(0,g.jsx)(u.Z,{type:"primary",onClick:function(){ne(),O(!0)},children:"Add a new social link"})]})}},80750:function(e,n,t){"use strict";t.d(n,{Q:function(){return o},Z:function(){return u}});var a=t(67294),s=t(4525),r=t(60331),i=t(60764),l=t(85893),c=s.Z.Title,o="#5a67d8";function u(e){var n=(0,a.useState)(""),t=n[0],s=n[1],u=e.title,d=e.description,f=e.placeholder,p=e.maxLength,m=e.values,h=e.handleDeleteIndex,v=e.handleCreateString,x=e.submitStatus;return(0,l.jsxs)("div",{className:"edit-string-array-container",children:[(0,l.jsx)(c,{level:3,className:"section-title",children:u}),(0,l.jsx)("p",{className:"description",children:d}),(0,l.jsx)("div",{className:"edit-current-strings",children:m.map((function(e,n){return(0,l.jsx)(r.Z,{closable:!0,onClose:function(){h(n)},color:o,children:e},"tag-".concat(e,"-").concat(n))}))}),(0,l.jsx)("div",{className:"add-new-string-section",children:(0,l.jsx)(i.ZP,{fieldName:"string-input",value:t,onChange:function(e){var n=e.value;s(n)},onPressEnter:function(){var e=t.trim();v(e),s("")},maxLength:p,placeholder:f,status:x})})]})}u.defaultProps={maxLength:50,description:null,submitStatus:null}},10610:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var a=t(15861),s=t(87757),r=t.n(s),i=t(67294),l=t(12028),c=t(74071),o=t(91486),u=t(95828),d=t(60293),f=t(85893);function p(e){var n=(0,i.useState)(null),t=n[0],s=n[1],p=null,m=((0,i.useContext)(d.aC)||{}).setFieldInConfigState,h=e.apiPath,v=e.checked,x=e.reversed,g=void 0!==x&&x,j=e.configPath,N=void 0===j?"":j,y=e.disabled,b=void 0!==y&&y,w=e.fieldName,k=e.label,S=e.tip,C=e.useSubmit,Z=e.onChange,P=function(){s(null),clearTimeout(p),p=null},O=function(){var e=(0,a.Z)(r().mark((function e(n){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C){e.next=6;break}return s((0,c.kg)(c.Jk)),t=g?!n:n,e.next=5,(0,u.Si)({apiPath:h,data:{value:t},onSuccess:function(){m({fieldName:w,value:t,path:N}),s((0,c.kg)(c.zv))},onError:function(e){s((0,c.kg)(c.Un,"There was an error: ".concat(e)))}});case 5:p=setTimeout(P,u.sI);case 6:Z&&Z(n);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),T=null!==t&&t.type===c.Jk;return(0,f.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[k&&(0,f.jsx)("div",{className:"label-side",children:(0,f.jsx)("span",{className:"formfield-label",children:k})}),(0,f.jsxs)("div",{className:"input-side",children:[(0,f.jsxs)("div",{className:"input-group",children:[(0,f.jsx)(l.Z,{className:"switch field-".concat(w),loading:T,onChange:O,defaultChecked:v,checked:v,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:b}),(0,f.jsx)(o.Z,{status:t})]}),(0,f.jsx)("p",{className:"field-tip",children:S})]})]})}p.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},37846:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return V}});var a=t(67294),s=t(4525),r=t(4942),i=t(65517),l=t(60293),c=t(95828),o=t(10610),u=t(15861),d=t(87757),f=t.n(d),p=t(94412),m=t(71577),h=t(7085),v=t(84391),x=t(91486),g=t(74071),j=t(94853),N=t(85893),y=["image/svg+xml","image/png","image/jpeg","image/gif"];function b(){var e,n=(0,a.useState)(null),t=n[0],s=n[1],r=(0,a.useState)(!1),i=r[0],o=r[1],d=(0,a.useState)(0),b=d[0],w=d[1],k=(0,a.useContext)(l.aC)||{},S=k.setFieldInConfigState,C=k.serverConfig,Z=null===C||void 0===C||null===(e=C.instanceDetails)||void 0===e?void 0:e.logo,P=(0,a.useState)(null),O=P[0],T=P[1],E=null,_=c.ZQ.apiPath,D=c.ZQ.tip,I=function(){T(null),clearTimeout(E),E=null},L=function(){var e=(0,u.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t===Z){e.next=5;break}return T((0,g.kg)(g.Jk)),e.next=4,(0,c.Si)({apiPath:_,data:{value:t},onSuccess:function(){S({fieldName:"logo",value:t,path:""}),T((0,g.kg)(g.zv)),o(!1),w(Math.floor(100*Math.random()))},onError:function(e){T((0,g.kg)(g.Un,"There was an error: ".concat(e))),o(!1)}});case 4:E=setTimeout(I,c.sI);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U="".concat(j.WB,"logo?random=").concat(b);return(0,N.jsxs)("div",{className:"formfield-container logo-upload-container",children:[(0,N.jsx)("div",{className:"label-side",children:(0,N.jsx)("span",{className:"formfield-label",children:"Logo"})}),(0,N.jsxs)("div",{className:"input-side",children:[(0,N.jsxs)("div",{className:"input-group",children:[(0,N.jsx)("img",{src:U,alt:"avatar",className:"logo-preview"}),(0,N.jsx)(p.Z,{name:"logo",listType:"picture",className:"avatar-uploader",showUploadList:!1,accept:y.join(","),beforeUpload:function(e){return o(!0),new Promise((function(n,t){if(!y.includes(e.type)){var a="File type is not supported: ".concat(e.type);return T((0,g.kg)(g.Un,"There was an error: ".concat(a))),E=setTimeout(I,c.sI),o(!1),t()}!function(e,n){var t=new FileReader;t.addEventListener("load",(function(){return n(t.result)})),t.readAsDataURL(e)}(e,(function(e){return s(e),n()}))}))},customRequest:L,disabled:i,children:i?(0,N.jsx)(h.Z,{style:{color:"white"}}):(0,N.jsx)(m.Z,{icon:(0,N.jsx)(v.Z,{})})})]}),(0,N.jsx)(x.Z,{status:O}),(0,N.jsx)("p",{className:"field-tip",children:D})]})]})}function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var S=s.Z.Title;function C(){var e=(0,a.useState)(null),n=e[0],t=e[1],s=((0,a.useContext)(l.aC)||{}).serverConfig,u=s.instanceDetails,d=s.yp,f=d.instanceUrl;if((0,a.useEffect)((function(){t(k(k({},u),d))}),[u,d]),!n)return null;var p=function(e){var a=e.fieldName,s=e.value;t(k(k({},n),{},(0,r.Z)({},a,s)))},m=""!==f;return(0,N.jsxs)("div",{className:"edit-general-settings",children:[(0,N.jsx)(S,{level:3,className:"section-title",children:"Configure Instance Details"}),(0,N.jsx)("br",{}),(0,N.jsx)(i.ZP,k(k({fieldName:"name"},c.RE),{},{value:n.name,initialValue:u.name,onChange:p})),(0,N.jsx)(i.ZP,k(k({fieldName:"instanceUrl"},c.cj),{},{value:n.instanceUrl,initialValue:d.instanceUrl,type:i.xA,onChange:p,onSubmit:function(){""===n.instanceUrl&&!0===d.enabled&&(0,c.Si)({apiPath:c.AP,data:{value:!1}})}})),(0,N.jsx)(i.ZP,k(k({fieldName:"summary"},c.rs),{},{type:i.Sk,value:n.summary,initialValue:u.summary,onChange:p})),(0,N.jsx)(b,{}),(0,N.jsx)("br",{}),(0,N.jsxs)("p",{className:"description",children:["Increase your audience by appearing in the"," ",(0,N.jsx)("a",{href:"https://directory.owncast.online",target:"_blank",rel:"noreferrer",children:(0,N.jsx)("strong",{children:"Owncast Directory"})}),". This is an external service run by the Owncast project."," ",(0,N.jsx)("a",{href:"https://owncast.online/docs/directory/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn more"}),"."]}),!d.instanceUrl&&(0,N.jsxs)("p",{className:"description",children:["You must set your ",(0,N.jsx)("strong",{children:"Server URL"})," above to enable the directory."]}),(0,N.jsxs)("div",{className:"config-yp-container",children:[(0,N.jsx)(o.Z,k(k({fieldName:"enabled",useSubmit:!0},c.P),{},{checked:n.enabled,disabled:!m})),(0,N.jsx)(o.Z,k(k({fieldName:"nsfw",useSubmit:!0},c.EY),{},{checked:n.nsfw,disabled:!m}))]})]})}var Z=t(93433),P=t(60331),O=t(60764),T=t(80750),E=s.Z.Title;function _(){var e=(0,a.useState)(""),n=e[0],t=e[1],s=(0,a.useState)(null),r=s[0],i=s[1],o=(0,a.useContext)(l.aC)||{},d=o.serverConfig,p=o.setFieldInConfigState,m=d.instanceDetails.tags,h=void 0===m?[]:m,v=c.y_.apiPath,x=c.y_.maxLength,j=c.y_.placeholder,y=c.y_.configPath,b=null;(0,a.useEffect)((function(){return function(){clearTimeout(b)}}),[]);var w=function(){i(null),b=null,clearTimeout(b)},k=function(){var e=(0,u.Z)(f().mark((function e(n){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i((0,g.kg)(g.Jk)),e.next=3,(0,c.Si)({apiPath:v,data:{value:n},onSuccess:function(){p({fieldName:"tags",value:n,path:y}),i((0,g.kg)(g.zv,"Tags updated.")),t(""),b=setTimeout(w,c.sI)},onError:function(e){i((0,g.kg)(g.Un,e)),b=setTimeout(w,c.sI)}});case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,N.jsxs)("div",{className:"tag-editor-container",children:[(0,N.jsx)(E,{level:3,className:"section-title",children:"Add Tags"}),(0,N.jsx)("p",{className:"description",children:"This is a great way to categorize your Owncast server on the Directory!"}),(0,N.jsx)("div",{className:"edit-current-strings",children:h.map((function(e,n){return(0,N.jsx)(P.Z,{closable:!0,onClose:function(){!function(e){w();var n=(0,Z.Z)(h);n.splice(e,1),k(n)}(n)},color:T.Q,children:e},"tag-".concat(e,"-").concat(n))}))}),(0,N.jsx)("div",{className:"add-new-string-section",children:(0,N.jsx)(O.ZP,{fieldName:"tag-input",value:n,className:"new-tag-input",onChange:function(e){var n=e.value;r||i(null),t(n)},onPressEnter:function(){w();var e=n.trim();if(""!==e)if(h.some((function(n){return n.toLowerCase()===e.toLowerCase()})))i((0,g.kg)(g.dG,"This tag is already used!"));else{var t=[].concat((0,Z.Z)(h),[e]);k(t)}else i((0,g.kg)(g.dG,"Please enter a tag"))},maxLength:x,placeholder:j,status:r})})]})}var D=t(39424),I=t(5152),L=t(9980),U=t.n(L),z=(t(24456),new(U())),F=(0,I.default)((function(){return t.e(326).then(t.bind(t,1326))}),{ssr:!1,loadableGenerated:{webpack:function(){return[1326]},modules:["../components/config/edit-page-content.tsx -> react-markdown-editor-lite"]}}),A=s.Z.Title;function R(){var e=(0,a.useState)(""),n=e[0],t=e[1],s=(0,a.useState)(null),r=s[0],i=s[1],o=(0,a.useState)(!1),d=o[0],p=o[1],h=(0,a.useContext)(l.aC)||{},v=h.serverConfig,j=h.setFieldInConfigState,y=v.instanceDetails,b=y.extraPageContent,w=null;var k=function(){i(null),p(!1),clearTimeout(w),w=null};function S(){return(S=(0,u.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i((0,g.kg)(g.Jk)),e.next=3,(0,c.Si)({apiPath:c.AA,data:{value:n},onSuccess:function(e){j({fieldName:"extraPageContent",value:n,path:"instanceDetails"}),i((0,g.kg)(g.zv,e))},onError:function(e){i((0,g.kg)(g.Un,e))}});case 3:w=setTimeout(k,c.sI);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,a.useEffect)((function(){t(b)}),[y]),(0,N.jsxs)("div",{className:"edit-page-content",children:[(0,N.jsx)(A,{level:3,className:"section-title",children:"Custom Page Content"}),(0,N.jsxs)("p",{className:"description",children:["Edit the content of your page by using simple"," ",(0,N.jsx)("a",{href:"https://www.markdownguide.org/basic-syntax/",target:"_blank",rel:"noopener noreferrer",children:"Markdown syntax"}),"."]}),(0,N.jsx)(F,{style:{height:"30em"},value:n,renderHTML:function(e){return z.render(e)},onChange:function(e){var n=e.text;t(n),n===b||d?n===b&&d&&p(!1):p(!0)},config:{htmlClass:"markdown-editor-preview-pane",markdownClass:"markdown-editor-pane"}}),(0,N.jsx)("br",{}),(0,N.jsxs)("div",{className:"page-content-actions",children:[d&&(0,N.jsx)(m.Z,{type:"primary",onClick:function(){return S.apply(this,arguments)},children:"Save"}),(0,N.jsx)(x.Z,{status:r})]})]})}var H=s.Z.Title;function J(){var e=(0,a.useState)(""),n=e[0],t=e[1],s=(0,a.useState)(null),r=s[0],i=s[1],o=(0,a.useState)(!1),d=o[0],p=o[1],h=(0,a.useContext)(l.aC)||{},v=h.serverConfig,j=h.setFieldInConfigState,y=v.instanceDetails,b=y.customStyles,w=null;var k=function(){i(null),p(!1),clearTimeout(w),w=null};function S(){return(S=(0,u.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i((0,g.kg)(g.Jk)),e.next=3,(0,c.Si)({apiPath:c.d$,data:{value:n},onSuccess:function(e){j({fieldName:"customStyles",value:n,path:"instanceDetails"}),i((0,g.kg)(g.zv,e))},onError:function(e){i((0,g.kg)(g.Un,e))}});case 3:w=setTimeout(k,c.sI);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,a.useEffect)((function(){t(b)}),[y]),(0,N.jsxs)("div",{className:"edit-custom-css",children:[(0,N.jsx)(H,{level:3,className:"section-title",children:"Customize your page styling with CSS"}),(0,N.jsxs)("p",{className:"description",children:["Customize the look and feel of your Owncast instance by overriding the CSS styles of various components on the page. Refer to the"," ",(0,N.jsx)("a",{href:"https://owncast.online/docs/website/",rel:"noopener noreferrer",target:"_blank",children:"CSS & Components guide"}),"."]}),(0,N.jsx)("p",{className:"description",children:"Please input plain CSS text, as this will be directly injected onto your page during load."}),(0,N.jsx)(O.ZP,{fieldName:"customStyles",type:O.Sk,value:n,maxLength:null,onChange:function(e){var n=e.value;t(n),n===b||d?n===b&&d&&p(!1):p(!0)},placeholder:"/* Enter custom CSS here */"}),(0,N.jsx)("br",{}),(0,N.jsxs)("div",{className:"page-content-actions",children:[d&&(0,N.jsx)(m.Z,{type:"primary",onClick:function(){return S.apply(this,arguments)},children:"Save"}),(0,N.jsx)(x.Z,{status:r})]})]})}var Q=s.Z.Title;function V(){return(0,N.jsxs)("div",{className:"config-public-details-page",children:[(0,N.jsx)(Q,{children:"General Settings"}),(0,N.jsxs)("p",{className:"description",children:["The following are displayed on your site to describe your stream and its content."," ",(0,N.jsx)("a",{href:"https://owncast.online/docs/website/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]}),(0,N.jsxs)("div",{className:"top-container",children:[(0,N.jsx)("div",{className:"form-module instance-details-container",children:(0,N.jsx)(C,{})}),(0,N.jsxs)("div",{className:"form-module social-items-container ",children:[(0,N.jsx)("div",{className:"form-module tags-module",children:(0,N.jsx)(_,{})}),(0,N.jsx)("div",{className:"form-module social-handles-container",children:(0,N.jsx)(D.Z,{})})]})]}),(0,N.jsx)("div",{className:"form-module page-content-module",children:(0,N.jsx)(R,{})}),(0,N.jsx)("div",{className:"form-module page-content-module",children:(0,N.jsx)(J,{})})]})}},85344:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config-public-details",function(){return t(37846)}])}},function(e){e.O(0,[774,23,614,74,361,888,179],(function(){return n=85344,e(e.s=n);var n}));var n=e.O();_N_E=n}]);