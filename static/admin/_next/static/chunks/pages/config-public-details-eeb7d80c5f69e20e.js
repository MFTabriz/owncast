(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[721],{85344:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config-public-details",function(){return t(99928)}])},10063:function(e,n,t){"use strict";t.d(n,{Q:function(){return l},Z:function(){return u}});var a=t(85893),r=t(67294),i=t(17256),s=t(20550),o=t(19363),c=i.Z.Title,l="#5a67d8";function u(e){var n=(0,r.useState)(""),t=n[0],i=n[1],u=e.title,d=e.description,f=e.placeholder,h=e.maxLength,m=e.values,p=e.handleDeleteIndex,v=e.handleCreateString,g=e.submitStatus;return(0,a.jsxs)("div",{className:"edit-string-array-container",children:[(0,a.jsx)(c,{level:3,className:"section-title",children:u}),(0,a.jsx)("p",{className:"description",children:d}),(0,a.jsx)("div",{className:"edit-current-strings",children:m.map((function(e,n){return(0,a.jsx)(s.Z,{closable:!0,onClose:function(){p(n)},color:l,children:e},"tag-".concat(e,"-").concat(n))}))}),(0,a.jsx)("div",{className:"add-new-string-section",children:(0,a.jsx)(o.ZP,{fieldName:"string-input",value:t,onChange:function(e){var n=e.value;i(n)},onPressEnter:function(){var e=t.trim();v(e),i("")},maxLength:h,placeholder:f,status:g})})]})}u.defaultProps={maxLength:50,description:null,submitStatus:null}},15976:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var a=t(35666),r=t.n(a),i=t(85893),s=t(67294),o=t(94594),c=t(83200),l=t(78464),u=t(25964),d=t(35159);function f(e,n,t,a,r,i,s){try{var o=e[i](s),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(a,r)}function h(e){var n,t=(0,s.useState)(null),a=t[0],h=t[1],m=null,p=((0,s.useContext)(d.aC)||{}).setFieldInConfigState,v=e.apiPath,g=e.checked,x=e.reversed,j=void 0!==x&&x,y=e.configPath,w=void 0===y?"":y,b=e.disabled,N=void 0!==b&&b,S=e.fieldName,k=e.label,C=e.tip,P=e.useSubmit,T=e.onChange,Z=function(){h(null),clearTimeout(m),m=null},E=(n=r().mark((function e(n){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!P){e.next=6;break}return h((0,c.kg)(c.Jk)),t=j?!n:n,e.next=5,(0,u.Si)({apiPath:v,data:{value:t},onSuccess:function(){p({fieldName:S,value:t,path:w}),h((0,c.kg)(c.zv))},onError:function(e){h((0,c.kg)(c.Un,"There was an error: ".concat(e)))}});case 5:m=setTimeout(Z,u.sI);case 6:T&&T(n);case 7:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(a,r){var i=n.apply(e,t);function s(e){f(i,a,r,s,o,"next",e)}function o(e){f(i,a,r,s,o,"throw",e)}s(void 0)}))}),_=null!==a&&a.type===c.Jk;return(0,i.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[k&&(0,i.jsx)("div",{className:"label-side",children:(0,i.jsx)("span",{className:"formfield-label",children:k})}),(0,i.jsxs)("div",{className:"input-side",children:[(0,i.jsxs)("div",{className:"input-group",children:[(0,i.jsx)(o.Z,{className:"switch field-".concat(S),loading:_,onChange:E,defaultChecked:g,checked:g,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:N}),(0,i.jsx)(l.Z,{status:a})]}),(0,i.jsx)("p",{className:"field-tip",children:C})]})]})}h.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},99928:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return q}});var a=t(85893),r=t(67294),i=t(17256),s=t(50197),o=t(35159),c=t(25964),l=t(15976),u=t(35666),d=t.n(u),f=t(77916),h=t(71577),m=t(50888),p=t(88484),v=t(78464),g=t(83200),x=t(58827);function j(e,n,t,a,r,i,s){try{var o=e[i](s),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(a,r)}var y=["image/svg+xml","image/png","image/jpeg","image/gif"];function w(){var e,n,t=(0,r.useState)(null),i=t[0],s=t[1],l=(0,r.useState)(!1),u=l[0],w=l[1],b=(0,r.useState)(0),N=b[0],S=b[1],k=(0,r.useContext)(o.aC)||{},C=k.setFieldInConfigState,P=k.serverConfig,T=null===P||void 0===P||null===(e=P.instanceDetails)||void 0===e?void 0:e.logo,Z=(0,r.useState)(null),E=Z[0],_=Z[1],O=null,I=c.ZQ.apiPath,L=c.ZQ.tip,U=function(){_(null),clearTimeout(O),O=null},D=(n=d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i===T){e.next=5;break}return _((0,g.kg)(g.Jk)),e.next=4,(0,c.Si)({apiPath:I,data:{value:i},onSuccess:function(){C({fieldName:"logo",value:i,path:""}),_((0,g.kg)(g.zv)),w(!1),S(Math.floor(100*Math.random()))},onError:function(e){_((0,g.kg)(g.Un,"There was an error: ".concat(e))),w(!1)}});case 4:O=setTimeout(U,c.sI);case 5:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(a,r){var i=n.apply(e,t);function s(e){j(i,a,r,s,o,"next",e)}function o(e){j(i,a,r,s,o,"throw",e)}s(void 0)}))}),A="".concat(x.WB,"logo?random=").concat(N);return(0,a.jsxs)("div",{className:"formfield-container logo-upload-container",children:[(0,a.jsx)("div",{className:"label-side",children:(0,a.jsx)("span",{className:"formfield-label",children:"Logo"})}),(0,a.jsxs)("div",{className:"input-side",children:[(0,a.jsxs)("div",{className:"input-group",children:[(0,a.jsx)("img",{src:A,alt:"avatar",className:"logo-preview"}),(0,a.jsx)(f.Z,{name:"logo",listType:"picture",className:"avatar-uploader",showUploadList:!1,accept:y.join(","),beforeUpload:function(e){return w(!0),new Promise((function(n,t){if(!y.includes(e.type)){var a="File type is not supported: ".concat(e.type);return _((0,g.kg)(g.Un,"There was an error: ".concat(a))),O=setTimeout(U,c.sI),w(!1),t()}!function(e,n){var t=new FileReader;t.addEventListener("load",(function(){return n(t.result)})),t.readAsDataURL(e)}(e,(function(e){return s(e),n()}))}))},customRequest:D,disabled:u,children:u?(0,a.jsx)(m.Z,{style:{color:"white"}}):(0,a.jsx)(h.Z,{icon:(0,a.jsx)(p.Z,{})})})]}),(0,a.jsx)(v.Z,{status:E}),(0,a.jsx)("p",{className:"field-tip",children:L})]})]})}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){b(e,n,t[n])}))}return e}var S=i.Z.Title;function k(){var e=(0,r.useState)(null),n=e[0],t=e[1],i=((0,r.useContext)(o.aC)||{}).serverConfig,u=i.instanceDetails,d=i.yp,f=d.instanceUrl;if((0,r.useEffect)((function(){t(N({},u,d))}),[u,d]),!n)return null;var h=function(e){var a=e.fieldName,r=e.value;t(N({},n,b({},a,r)))},m=""!==f;return(0,a.jsxs)("div",{className:"edit-general-settings",children:[(0,a.jsx)(S,{level:3,className:"section-title",children:"Configure Instance Details"}),(0,a.jsx)("br",{}),(0,a.jsx)(s.ZP,N({fieldName:"name"},c.RE,{value:n.name,initialValue:u.name,onChange:h})),(0,a.jsx)(s.ZP,N({fieldName:"instanceUrl"},c.cj,{value:n.instanceUrl,initialValue:d.instanceUrl,type:s.xA,onChange:h,onSubmit:function(){""===n.instanceUrl&&!0===d.enabled&&(0,c.Si)({apiPath:c.AP,data:{value:!1}})}})),(0,a.jsx)(s.ZP,N({fieldName:"summary"},c.rs,{type:s.Sk,value:n.summary,initialValue:u.summary,onChange:h})),(0,a.jsx)(w,{}),(0,a.jsx)("br",{}),(0,a.jsxs)("p",{className:"description",children:["Increase your audience by appearing in the"," ",(0,a.jsx)("a",{href:"https://directory.owncast.online",target:"_blank",rel:"noreferrer",children:(0,a.jsx)("strong",{children:"Owncast Directory"})}),". This is an external service run by the Owncast project."," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/directory/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn more"}),"."]}),!d.instanceUrl&&(0,a.jsxs)("p",{className:"description",children:["You must set your ",(0,a.jsx)("strong",{children:"Server URL"})," above to enable the directory."]}),(0,a.jsxs)("div",{className:"config-yp-container",children:[(0,a.jsx)(l.Z,N({fieldName:"enabled",useSubmit:!0},c.P,{checked:n.enabled,disabled:!m})),(0,a.jsx)(l.Z,N({fieldName:"nsfw",useSubmit:!0},c.EY,{checked:n.nsfw,disabled:!m}))]})]})}var C=t(20550),P=t(19363),T=t(10063);function Z(e,n,t,a,r,i,s){try{var o=e[i](s),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(a,r)}function E(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var _=i.Z.Title;function O(){var e=(0,r.useState)(""),n=e[0],t=e[1],i=(0,r.useState)(null),s=i[0],l=i[1],u=(0,r.useContext)(o.aC)||{},f=u.serverConfig,h=u.setFieldInConfigState,m=f.instanceDetails.tags,p=void 0===m?[]:m,v=c.y_.apiPath,x=c.y_.maxLength,j=c.y_.placeholder,y=c.y_.configPath,w=null;(0,r.useEffect)((function(){return function(){clearTimeout(w)}}),[]);var b,N=function(){l(null),w=null,clearTimeout(w)},S=(b=d().mark((function e(n){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l((0,g.kg)(g.Jk)),e.next=3,(0,c.Si)({apiPath:v,data:{value:n},onSuccess:function(){h({fieldName:"tags",value:n,path:y}),l((0,g.kg)(g.zv,"Tags updated.")),t(""),w=setTimeout(N,c.sI)},onError:function(e){l((0,g.kg)(g.Un,e)),w=setTimeout(N,c.sI)}});case 3:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(t,a){var r=b.apply(e,n);function i(e){Z(r,t,a,i,s,"next",e)}function s(e){Z(r,t,a,i,s,"throw",e)}i(void 0)}))});return(0,a.jsxs)("div",{className:"tag-editor-container",children:[(0,a.jsx)(_,{level:3,className:"section-title",children:"Add Tags"}),(0,a.jsx)("p",{className:"description",children:"This is a great way to categorize your Owncast server on the Directory!"}),(0,a.jsx)("div",{className:"edit-current-strings",children:p.map((function(e,n){return(0,a.jsx)(C.Z,{closable:!0,onClose:function(){!function(e){N();var n=E(p);n.splice(e,1),S(n)}(n)},color:T.Q,children:e},"tag-".concat(e,"-").concat(n))}))}),(0,a.jsx)("div",{className:"add-new-string-section",children:(0,a.jsx)(P.ZP,{fieldName:"tag-input",value:n,className:"new-tag-input",onChange:function(e){var n=e.value;s||l(null),t(n)},onPressEnter:function(){N();var e=n.trim();if(""!==e)if(p.some((function(n){return n.toLowerCase()===e.toLowerCase()})))l((0,g.kg)(g.dG,"This tag is already used!"));else{var t=E(p).concat([e]);S(t)}else l((0,g.kg)(g.dG,"Please enter a tag"))},maxLength:x,placeholder:j,status:s})})]})}var I=t(91017),L=t(5152),U=t(9980),D=t.n(U);t(69596);function A(e,n,t,a,r,i,s){try{var o=e[i](s),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(a,r)}function F(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var i=e.apply(n,t);function s(e){A(i,a,r,s,o,"next",e)}function o(e){A(i,a,r,s,o,"throw",e)}s(void 0)}))}}var z=new(D()),J=(0,L.default)((function(){return t.e(912).then(t.bind(t,1912))}),{loadableGenerated:{webpack:function(){return[1912]},modules:["../components/config/edit-page-content.tsx -> react-markdown-editor-lite"]},ssr:!1}),R=i.Z.Title;function G(){var e=(0,r.useState)(""),n=e[0],t=e[1],i=(0,r.useState)(null),s=i[0],l=i[1],u=(0,r.useState)(!1),f=u[0],m=u[1],p=(0,r.useContext)(o.aC)||{},x=p.serverConfig,j=p.setFieldInConfigState,y=x.instanceDetails,w=y.extraPageContent,b=null,N=function(){l(null),m(!1),clearTimeout(b),b=null};function S(){return(S=F(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l((0,g.kg)(g.Jk)),e.next=3,(0,c.Si)({apiPath:c.AA,data:{value:n},onSuccess:function(e){j({fieldName:"extraPageContent",value:n,path:"instanceDetails"}),l((0,g.kg)(g.zv,e))},onError:function(e){l((0,g.kg)(g.Un,e))}});case 3:b=setTimeout(N,c.sI);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,r.useEffect)((function(){t(w)}),[y]),(0,a.jsxs)("div",{className:"edit-page-content",children:[(0,a.jsx)(R,{level:3,className:"section-title",children:"Custom Page Content"}),(0,a.jsxs)("p",{className:"description",children:["Edit the content of your page by using simple"," ",(0,a.jsx)("a",{href:"https://www.markdownguide.org/basic-syntax/",target:"_blank",rel:"noopener noreferrer",children:"Markdown syntax"}),"."]}),(0,a.jsx)(J,{style:{height:"30em"},value:n,renderHTML:function(e){return z.render(e)},onChange:function(e){var n=e.text;t(n),n===w||f?n===w&&f&&m(!1):m(!0)},config:{htmlClass:"markdown-editor-preview-pane",markdownClass:"markdown-editor-pane"}}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"page-content-actions",children:[f&&(0,a.jsx)(h.Z,{type:"primary",onClick:function(){return S.apply(this,arguments)},children:"Save"}),(0,a.jsx)(v.Z,{status:s})]})]})}function M(e,n,t,a,r,i,s){try{var o=e[i](s),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(a,r)}function Q(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var i=e.apply(n,t);function s(e){M(i,a,r,s,o,"next",e)}function o(e){M(i,a,r,s,o,"throw",e)}s(void 0)}))}}var V=i.Z.Title;function X(){var e=(0,r.useState)(""),n=e[0],t=e[1],i=(0,r.useState)(null),s=i[0],l=i[1],u=(0,r.useState)(!1),f=u[0],m=u[1],p=(0,r.useContext)(o.aC)||{},x=p.serverConfig,j=p.setFieldInConfigState,y=x.instanceDetails,w=y.customStyles,b=null,N=function(){l(null),m(!1),clearTimeout(b),b=null};function S(){return(S=Q(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l((0,g.kg)(g.Jk)),e.next=3,(0,c.Si)({apiPath:c.d$,data:{value:n},onSuccess:function(e){j({fieldName:"customStyles",value:n,path:"instanceDetails"}),l((0,g.kg)(g.zv,e))},onError:function(e){l((0,g.kg)(g.Un,e))}});case 3:b=setTimeout(N,c.sI);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,r.useEffect)((function(){t(w)}),[y]),(0,a.jsxs)("div",{className:"edit-custom-css",children:[(0,a.jsx)(V,{level:3,className:"section-title",children:"Customize your page styling with CSS"}),(0,a.jsxs)("p",{className:"description",children:["Customize the look and feel of your Owncast instance by overriding the CSS styles of various components on the page. Refer to the"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/website/",rel:"noopener noreferrer",target:"_blank",children:"CSS & Components guide"}),"."]}),(0,a.jsx)("p",{className:"description",children:"Please input plain CSS text, as this will be directly injected onto your page during load."}),(0,a.jsx)(P.ZP,{fieldName:"customStyles",type:P.Sk,value:n,maxLength:null,onChange:function(e){var n=e.value;t(n),n===w||f?n===w&&f&&m(!1):m(!0)},placeholder:"/* Enter custom CSS here */"}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"page-content-actions",children:[f&&(0,a.jsx)(h.Z,{type:"primary",onClick:function(){return S.apply(this,arguments)},children:"Save"}),(0,a.jsx)(v.Z,{status:s})]})]})}var Y=i.Z.Title;function q(){return(0,a.jsxs)("div",{className:"config-public-details-page",children:[(0,a.jsx)(Y,{children:"General Settings"}),(0,a.jsxs)("p",{className:"description",children:["The following are displayed on your site to describe your stream and its content."," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/website/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]}),(0,a.jsxs)("div",{className:"top-container",children:[(0,a.jsx)("div",{className:"form-module instance-details-container",children:(0,a.jsx)(k,{})}),(0,a.jsxs)("div",{className:"form-module social-items-container ",children:[(0,a.jsx)("div",{className:"form-module tags-module",children:(0,a.jsx)(O,{})}),(0,a.jsx)("div",{className:"form-module social-handles-container",children:(0,a.jsx)(I.Z,{})})]})]}),(0,a.jsx)("div",{className:"form-module page-content-module",children:(0,a.jsx)(G,{})}),(0,a.jsx)("div",{className:"form-module page-content-module",children:(0,a.jsx)(X,{})})]})}}},function(e){e.O(0,[774,206,697,8,142,17,888,179],(function(){return n=85344,e(e.s=n);var n}));var n=e.O();_N_E=n}]);