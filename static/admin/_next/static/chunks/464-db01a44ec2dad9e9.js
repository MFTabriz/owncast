"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[464],{82911:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(1413),a=t(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 00-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"}}]},name:"question-circle",theme:"filled"},i=t(42135),s=function(e,n){return a.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:o}))};s.displayName="QuestionCircleFilled";var c=a.forwardRef(s)},84674:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(1413),a=t(67294),o={icon:function(e,n){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm288.5 682.8L277.7 224C258 240 240 258 224 277.7l522.8 522.8C682.8 852.7 601 884 512 884c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372c0 89-31.3 170.8-83.5 234.8z",fill:e}},{tag:"path",attrs:{d:"M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372c89 0 170.8-31.3 234.8-83.5L224 277.7c16-19.7 34-37.7 53.7-53.7l522.8 522.8C852.7 682.8 884 601 884 512c0-205.4-166.6-372-372-372z",fill:n}}]}},name:"stop",theme:"twotone"},i=t(42135),s=function(e,n){return a.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:o}))};s.displayName="StopTwoTone";var c=a.forwardRef(s)},27049:function(e,n,t){var r=t(87462),a=t(4942),o=t(67294),i=t(94184),s=t.n(i),c=t(59844),l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t};n.Z=function(e){return o.createElement(c.C,null,(function(n){var t,i=n.getPrefixCls,c=n.direction,u=e.prefixCls,d=e.type,f=void 0===d?"horizontal":d,m=e.orientation,h=void 0===m?"center":m,p=e.orientationMargin,v=e.className,x=e.children,y=e.dashed,b=e.plain,g=l(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),j=i("divider",u),Z=h.length>0?"-".concat(h):h,w=!!x,C="left"===h&&null!=p,k="right"===h&&null!=p,N=s()(j,"".concat(j,"-").concat(f),(t={},(0,a.Z)(t,"".concat(j,"-with-text"),w),(0,a.Z)(t,"".concat(j,"-with-text").concat(Z),w),(0,a.Z)(t,"".concat(j,"-dashed"),!!y),(0,a.Z)(t,"".concat(j,"-plain"),!!b),(0,a.Z)(t,"".concat(j,"-rtl"),"rtl"===c),(0,a.Z)(t,"".concat(j,"-no-default-orientation-margin-left"),C),(0,a.Z)(t,"".concat(j,"-no-default-orientation-margin-right"),k),t),v),A=(0,r.Z)((0,r.Z)({},C&&{marginLeft:p}),k&&{marginRight:p});return o.createElement("div",(0,r.Z)({className:N},g,{role:"separator"}),x&&o.createElement("span",{className:"".concat(j,"-inner-text"),style:A},x))}))}},66192:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(34051),a=t.n(r),o=t(85893),i=t(80414),s=t(71577),c=t(21640),l=t(82911),u=t(84674),d=t(58827);function f(e,n,t,r,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,a)}function m(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){f(o,r,a,i,s,"next",e)}function s(e){f(o,r,a,i,s,"throw",e)}i(void 0)}))}}function h(e){var n=e.user,t=e.isEnabled,r=e.label,f=e.onClick;function h(){return(h=m(a().mark((function e(n){var r,o,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.id,o={userId:r,enabled:!t},e.prev=2,e.next=5,(0,d.rQ)(d.NM,{data:o,method:"POST",auth:!0});case 5:return i=e.sent,e.abrupt("return",i.success);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:return e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}var p=t?"ban":"unban",v=t?(0,o.jsx)(c.Z,{style:{color:"var(--ant-error)"}}):(0,o.jsx)(l.Z,{style:{color:"var(--ant-warning)"}}),x=(0,o.jsxs)(o.Fragment,{children:["Are you sure you want to ",p," ",(0,o.jsx)("strong",{children:n.displayName}),t?" and remove their messages?":"?"]});return(0,o.jsx)(s.Z,{onClick:function(){i.Z.confirm({title:"Confirm ".concat(p),content:x,onCancel:function(){},onOk:function(){return new Promise((function(e,t){var r=function(e){return h.apply(this,arguments)}(n);r?setTimeout((function(){e(r),null===f||void 0===f||f()}),3e3):t()}))},okType:"danger",okText:t?"Absolutely":null,icon:v})},size:"small",icon:t?(0,o.jsx)(u.Z,{twoToneColor:"#ff4d4f"}):null,className:"block-user-button",children:r||p})}h.defaultProps={label:"",onClick:null}},31386:function(e,n,t){t.d(n,{Z:function(){return D}});var r=t(85893),a=t(67294),o=t(56266),i=t(80414),s=t(84485),c=t(25968),l=t(6226),u=t(27049),d=t(26713),f=t(85533),m=t(58091),h=t(96486),p=t(66192),v=t(34051),x=t.n(v),y=t(71577),b=t(21640),g=t(82911),j=t(84674),Z=t(1413),w={icon:function(e,n){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6z",fill:e}},{tag:"path",attrs:{d:"M214 226.7v427.6l298 232.2 298-232.2V226.7L512 125.1 214 226.7zM632.8 328H688c6.5 0 10.3 7.4 6.5 12.7L481.9 633.4a16.1 16.1 0 01-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.2 0 10 2.5 13 6.6l64.7 89.1 150.9-207.8c3-4.1 7.9-6.6 13-6.6z",fill:n}},{tag:"path",attrs:{d:"M404.2 453.3c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0026 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z",fill:e}}]}},name:"safety-certificate",theme:"twotone"},C=t(42135),k=function(e,n){return a.createElement(C.Z,(0,Z.Z)((0,Z.Z)({},e),{},{ref:n,icon:w}))};k.displayName="SafetyCertificateTwoTone";var N=a.forwardRef(k),A=t(58827);function T(e,n,t,r,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,a)}function O(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){T(o,r,a,i,s,"next",e)}function s(e){T(o,r,a,i,s,"throw",e)}i(void 0)}))}}function P(e){var n,t=e.user,a=e.onClick;function o(){return(o=O(x().mark((function e(n,t){var r,a,o;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.id,a={userId:r,isModerator:t},e.prev=2,e.next=5,(0,A.rQ)(A.jr,{data:a,method:"POST",auth:!0});case 5:return o=e.sent,e.abrupt("return",o.success);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:return e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}var s=null===(n=t.scopes)||void 0===n?void 0:n.includes("MODERATOR"),c=s?"remove moderator":"add moderator",l=s?(0,r.jsx)(b.Z,{style:{color:"var(--ant-error)"}}):(0,r.jsx)(g.Z,{style:{color:"var(--ant-warning)"}}),u=(0,r.jsxs)(r.Fragment,{children:["Are you sure you want to ",c," ",(0,r.jsx)("strong",{children:t.displayName}),"?"]});return(0,r.jsx)(y.Z,{onClick:function(){i.Z.confirm({title:"Confirm ".concat(c),content:u,onCancel:function(){},onOk:function(){return new Promise((function(e,n){var r=function(e,n){return o.apply(this,arguments)}(t,!s);r?setTimeout((function(){e(r),null===a||void 0===a||a()}),3e3):n()}))},okType:"danger",okText:s?"Yup!":null,icon:l})},size:"small",icon:s?(0,r.jsx)(j.Z,{twoToneColor:"#ff4d4f"}):(0,r.jsx)(N,{twoToneColor:"#22bb44"}),className:"block-user-button",children:c})}P.defaultProps={onClick:null};var M=t(20643),S=t(2766);function z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function E(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return z(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e){var n=e.user,t=e.connectionInfo,v=e.children,x=(0,a.useState)(!1),y=x[0],b=x[1],g=function(){b(!1)},j=n.displayName,Z=n.createdAt,w=n.previousNames,C=n.nameChangedAt,k=n.disabledAt,N=t||{},A=N.connectedAt,T=N.messageCount,O=N.userAgent,z=null,D=w&&E(w);w&&w.length>1&&C&&(z=new Date(C),D.reverse());var L=new Date(Z),I=(0,m.Z)(L,"PP pp"),B=z?(0,f.Z)(z):null;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{title:(0,r.jsxs)(r.Fragment,{children:["Created at: ",I,".",(0,r.jsx)("br",{})," Click for more info."]}),placement:"bottomLeft",children:(0,r.jsx)("button",{type:"button","aria-label":"Display more details about this user",className:"user-item-container",onClick:function(){b(!0)},children:v})}),(0,r.jsx)(i.Z,{destroyOnClose:!0,width:600,cancelText:"Close",okButtonProps:{style:{display:"none"}},title:"User details: ".concat(j),visible:y,onOk:g,onCancel:g,children:(0,r.jsxs)("div",{className:"user-details",children:[(0,r.jsx)(s.Z.Title,{level:4,children:j}),(0,r.jsxs)("p",{className:"created-at",children:["User created at ",I,"."]}),(0,r.jsxs)(c.Z,{gutter:16,children:[t&&(0,r.jsxs)(l.Z,{md:z?12:24,children:[(0,r.jsx)(s.Z.Title,{level:5,children:"This user is currently connected to Chat."}),(0,r.jsxs)("ul",{className:"connection-info",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Active for:"})," ",(0,f.Z)(new Date(A))]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Messages sent:"})," ",T]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"User Agent:"}),(0,r.jsx)("br",{}),(0,S.AB)(O)]})]})]}),z&&(0,r.jsxs)(l.Z,{md:t?12:24,children:[(0,r.jsx)(s.Z.Title,{level:5,children:"This user is also seen as:"}),(0,r.jsx)("ul",{className:"previous-names-list",children:(0,h.uniq)(D).map((function(e,n){return(0,r.jsxs)("li",{className:0===n?"latest":"",children:[(0,r.jsx)("span",{className:"user-name-item",children:e}),0===n?" (Changed ".concat(B," ago)"):""]})}))})]})]}),(0,r.jsx)(u.Z,{}),(0,r.jsxs)(d.Z,{direction:"horizontal",children:[k?(0,r.jsxs)(r.Fragment,{children:["This user was banned on ",(0,r.jsx)("code",{children:(0,M.u)(k)}),".",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(p.Z,{label:"Unban this user",user:n,isEnabled:!1,onClick:g})]}):(0,r.jsx)(p.Z,{label:"Ban this user",user:n,isEnabled:!0,onClick:g}),(0,r.jsx)(P,{user:n,onClick:g})]})]})})]})}D.defaultProps={connectionInfo:null}},20643:function(e,n,t){t.d(n,{u:function(){return c},Z:function(){return l}});var r=t(85893),a=t(15193),o=t(58091),i=t(31386),s=t(66192);function c(e){return(0,o.Z)(new Date(e),"MMM d H:mma")}function l(e){var n=e.data,t=[{title:"Last Known Display Name",dataIndex:"displayName",key:"displayName",render:function(e,n){return(0,r.jsx)(i.Z,{user:n,children:(0,r.jsx)("span",{className:"display-name",children:e})})}},{title:"Created",dataIndex:"createdAt",key:"createdAt",render:function(e){return c(e)},sorter:function(e,n){return new Date(e.createdAt).getTime()-new Date(n.createdAt).getTime()},sortDirections:["descend","ascend"]},{title:"Disabled at",dataIndex:"disabledAt",key:"disabledAt",defaultSortOrder:"descend",render:function(e){return e?c(e):null},sorter:function(e,n){return new Date(e.disabledAt).getTime()-new Date(n.disabledAt).getTime()},sortDirections:["descend","ascend"]},{title:"",key:"block",className:"actions-col",render:function(e,n){return(0,r.jsx)(s.Z,{user:n,isEnabled:!n.disabledAt})}}];return(0,r.jsx)(a.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:t,dataSource:n,size:"small",rowKey:"id"})}}}]);