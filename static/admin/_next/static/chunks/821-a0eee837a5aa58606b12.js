"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{98082:function(e,t,n){var r=n(29439),a=n(67294),c=n(31808);t.Z=function(){var e=a.useState(!1),t=(0,r.Z)(e,2),n=t[0],o=t[1];return a.useEffect((function(){o((0,c.fk)())}),[]),n}},1635:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(4942),a=n(87462),c=n(71002),o=n(67294),s=n(94184),l=n.n(s),i=n(99134),u=n(65632),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var f=["xs","sm","md","lg","xl","xxl"],p=o.forwardRef((function(e,t){var n,s=o.useContext(u.E_),p=s.getPrefixCls,m=s.direction,h=o.useContext(i.Z),x=h.gutter,v=h.wrap,Z=h.supportFlexGap,b=e.prefixCls,y=e.span,g=e.order,j=e.offset,w=e.push,C=e.pull,N=e.className,O=e.children,k=e.flex,A=e.style,E=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),P=p("col",b),T={};f.forEach((function(t){var n,o={},s=e[t];"number"===typeof s?o.span=s:"object"===(0,c.Z)(s)&&(o=s||{}),delete E[t],T=(0,a.Z)((0,a.Z)({},T),(n={},(0,r.Z)(n,"".concat(P,"-").concat(t,"-").concat(o.span),void 0!==o.span),(0,r.Z)(n,"".concat(P,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),(0,r.Z)(n,"".concat(P,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),(0,r.Z)(n,"".concat(P,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),(0,r.Z)(n,"".concat(P,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),(0,r.Z)(n,"".concat(P,"-rtl"),"rtl"===m),n))}));var S=l()(P,(n={},(0,r.Z)(n,"".concat(P,"-").concat(y),void 0!==y),(0,r.Z)(n,"".concat(P,"-order-").concat(g),g),(0,r.Z)(n,"".concat(P,"-offset-").concat(j),j),(0,r.Z)(n,"".concat(P,"-push-").concat(w),w),(0,r.Z)(n,"".concat(P,"-pull-").concat(C),C),n),N,T),D={};if(x&&x[0]>0){var z=x[0]/2;D.paddingLeft=z,D.paddingRight=z}if(x&&x[1]>0&&!Z){var I=x[1]/2;D.paddingTop=I,D.paddingBottom=I}return k&&(D.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(k),"auto"!==k||!1!==v||D.minWidth||(D.minWidth=0)),o.createElement("div",(0,a.Z)({},E,{style:(0,a.Z)((0,a.Z)({},D),A),className:S,ref:t}),O)}));p.displayName="Col";var m=p},27049:function(e,t,n){var r=n(87462),a=n(4942),c=n(67294),o=n(94184),s=n.n(o),l=n(65632),i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.Z=function(e){return c.createElement(l.C,null,(function(t){var n,o=t.getPrefixCls,l=t.direction,u=e.prefixCls,d=e.type,f=void 0===d?"horizontal":d,p=e.orientation,m=void 0===p?"center":p,h=e.className,x=e.children,v=e.dashed,Z=e.plain,b=i(e,["prefixCls","type","orientation","className","children","dashed","plain"]),y=o("divider",u),g=m.length>0?"-".concat(m):m,j=!!x,w=s()(y,"".concat(y,"-").concat(f),(n={},(0,a.Z)(n,"".concat(y,"-with-text"),j),(0,a.Z)(n,"".concat(y,"-with-text").concat(g),j),(0,a.Z)(n,"".concat(y,"-dashed"),!!v),(0,a.Z)(n,"".concat(y,"-plain"),!!Z),(0,a.Z)(n,"".concat(y,"-rtl"),"rtl"===l),n),h);return c.createElement("div",(0,r.Z)({className:w},b,{role:"separator"}),x&&c.createElement("span",{className:"".concat(y,"-inner-text")},x))}))}},99134:function(e,t,n){var r=(0,n(67294).createContext)({});t.Z=r},36725:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(87462),a=n(4942),c=n(71002),o=n(29439),s=n(67294),l=n(94184),i=n.n(l),u=n(65632),d=n(99134),f=n(93355),p=n(24308),m=n(98082),h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},x=((0,f.b)("top","middle","bottom","stretch"),(0,f.b)("start","end","center","space-around","space-between"),s.forwardRef((function(e,t){var n,l=e.prefixCls,f=e.justify,x=e.align,v=e.className,Z=e.style,b=e.children,y=e.gutter,g=void 0===y?0:y,j=e.wrap,w=h(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),C=s.useContext(u.E_),N=C.getPrefixCls,O=C.direction,k=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),A=(0,o.Z)(k,2),E=A[0],P=A[1],T=(0,m.Z)(),S=s.useRef(g);s.useEffect((function(){var e=p.ZP.subscribe((function(e){var t=S.current||0;(!Array.isArray(t)&&"object"===(0,c.Z)(t)||Array.isArray(t)&&("object"===(0,c.Z)(t[0])||"object"===(0,c.Z)(t[1])))&&P(e)}));return function(){return p.ZP.unsubscribe(e)}}),[]);var D=N("row",l),z=function(){var e=[0,0];return(Array.isArray(g)?g:[g,0]).forEach((function(t,n){if("object"===(0,c.Z)(t))for(var r=0;r<p.c4.length;r++){var a=p.c4[r];if(E[a]&&void 0!==t[a]){e[n]=t[a];break}}else e[n]=t||0})),e}(),I=i()(D,(n={},(0,a.Z)(n,"".concat(D,"-no-wrap"),!1===j),(0,a.Z)(n,"".concat(D,"-").concat(f),f),(0,a.Z)(n,"".concat(D,"-").concat(x),x),(0,a.Z)(n,"".concat(D,"-rtl"),"rtl"===O),n),v),M={},R=z[0]>0?z[0]/-2:void 0,B=z[1]>0?z[1]/-2:void 0;if(R&&(M.marginLeft=R,M.marginRight=R),T){var F=(0,o.Z)(z,2);M.rowGap=F[1]}else B&&(M.marginTop=B,M.marginBottom=B);var L=s.useMemo((function(){return{gutter:z,wrap:j,supportFlexGap:T}}),[z,j,T]);return s.createElement(d.Z.Provider,{value:L},s.createElement("div",(0,r.Z)({},w,{className:I,style:(0,r.Z)((0,r.Z)({},M),Z),ref:t}),b))})));x.displayName="Row";var v=x},90978:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(15861),a=n(87757),c=n.n(a),o=n(37614),s=n(71577),l=n(1413),i=n(67294),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 00-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"}}]},name:"question-circle",theme:"filled"},d=n(30076),f=function(e,t){return i.createElement(d.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:u}))};f.displayName="QuestionCircleFilled";var p=i.forwardRef(f),m={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm288.5 682.8L277.7 224C258 240 240 258 224 277.7l522.8 522.8C682.8 852.7 601 884 512 884c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372c0 89-31.3 170.8-83.5 234.8z",fill:e}},{tag:"path",attrs:{d:"M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372c89 0 170.8-31.3 234.8-83.5L224 277.7c16-19.7 34-37.7 53.7-53.7l522.8 522.8C852.7 682.8 884 601 884 512c0-205.4-166.6-372-372-372z",fill:t}}]}},name:"stop",theme:"twotone"},h=function(e,t){return i.createElement(d.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:m}))};h.displayName="StopTwoTone";var x=i.forwardRef(h),v=n(68855),Z=n(94853),b=n(85893);function y(e){var t=e.user,n=e.isEnabled,a=e.label,l=e.onClick;function i(){return(i=(0,r.Z)(c().mark((function e(t){var r,a,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,a={userId:r,enabled:!n},e.prev=2,e.next=5,(0,Z.rQ)(Z.NM,{data:a,method:"POST",auth:!0});case 5:return o=e.sent,e.abrupt("return",o.success);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:return e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}var u=n?"ban":"unban",d=n?(0,b.jsx)(v.Z,{style:{color:"var(--ant-error)"}}):(0,b.jsx)(p,{style:{color:"var(--ant-warning)"}}),f=(0,b.jsxs)(b.Fragment,{children:["Are you sure you want to ",u," ",(0,b.jsx)("strong",{children:t.displayName}),n?" and remove their messages?":"?"]});return(0,b.jsx)(s.Z,{onClick:function(){o.Z.confirm({title:"Confirm ".concat(u),content:f,onCancel:function(){},onOk:function(){return new Promise((function(e,n){var r=function(e){return i.apply(this,arguments)}(t);r?setTimeout((function(){e(r),null===l||void 0===l||l()}),3e3):n()}))},okType:"danger",okText:n?"Absolutely":null,icon:d})},size:"small",icon:n?(0,b.jsx)(x,{twoToneColor:"#ff4d4f"}):null,className:"block-user-button",children:a||u})}y.defaultProps={label:"",onClick:null}},99382:function(e,t,n){n.d(t,{Z:function(){return Z}});var r=n(93433),a=n(67294),c=n(31097),o=n(37614),s=n(4525),l=n(36725),i=n(1635),u=n(27049),d=n(8354),f=n(12924),p=n(96486),m=n(90978),h=n(58416),x=n(9431),v=n(85893);function Z(e){var t=e.user,n=e.connectionInfo,Z=e.children,b=(0,a.useState)(!1),y=b[0],g=b[1],j=function(){g(!1)},w=t.displayName,C=t.createdAt,N=t.previousNames,O=t.nameChangedAt,k=t.disabledAt,A=n||{},E=A.connectedAt,P=A.messageCount,T=A.userAgent,S=null,D=N&&(0,r.Z)(N);N&&N.length>1&&O&&(S=new Date(O),D.reverse());var z=new Date(C),I=(0,f.Z)(z,"PP pp"),M=S?(0,d.Z)(S):null;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c.Z,{title:(0,v.jsxs)(v.Fragment,{children:["Created at: ",I,".",(0,v.jsx)("br",{})," Click for more info."]}),placement:"bottomLeft",children:(0,v.jsx)("button",{type:"button","aria-label":"Display more details about this user",className:"user-item-container",onClick:function(){g(!0)},children:Z})}),(0,v.jsx)(o.Z,{destroyOnClose:!0,width:600,cancelText:"Close",okButtonProps:{style:{display:"none"}},title:"User details: ".concat(w),visible:y,onOk:j,onCancel:j,children:(0,v.jsxs)("div",{className:"user-details",children:[(0,v.jsx)(s.Z.Title,{level:4,children:w}),(0,v.jsxs)("p",{className:"created-at",children:["User created at ",I,"."]}),(0,v.jsxs)(l.Z,{gutter:16,children:[n&&(0,v.jsxs)(i.Z,{md:S?12:24,children:[(0,v.jsx)(s.Z.Title,{level:5,children:"This user is currently connected to Chat."}),(0,v.jsxs)("ul",{className:"connection-info",children:[(0,v.jsxs)("li",{children:[(0,v.jsx)("strong",{children:"Active for:"})," ",(0,d.Z)(new Date(E))]}),(0,v.jsxs)("li",{children:[(0,v.jsx)("strong",{children:"Messages sent:"})," ",P]}),(0,v.jsxs)("li",{children:[(0,v.jsx)("strong",{children:"User Agent:"}),(0,v.jsx)("br",{}),(0,x.AB)(T)]})]})]}),S&&(0,v.jsxs)(i.Z,{md:n?12:24,children:[(0,v.jsx)(s.Z.Title,{level:5,children:"This user is also seen as:"}),(0,v.jsx)("ul",{className:"previous-names-list",children:(0,p.uniq)(D).map((function(e,t){return(0,v.jsxs)("li",{className:0===t?"latest":"",children:[(0,v.jsx)("span",{className:"user-name-item",children:e}),0===t?" (Changed ".concat(M," ago)"):""]})}))})]})]}),(0,v.jsx)(u.Z,{}),k?(0,v.jsxs)(v.Fragment,{children:["This user was banned on ",(0,v.jsx)("code",{children:(0,h.u)(k)}),".",(0,v.jsx)("br",{}),(0,v.jsx)("br",{}),(0,v.jsx)(m.Z,{label:"Unban this user",user:t,isEnabled:!1,onClick:j})]}):(0,v.jsx)(m.Z,{label:"Ban this user",user:t,isEnabled:!0,onClick:j})]})})]})}Z.defaultProps={connectionInfo:null}},58416:function(e,t,n){n.d(t,{u:function(){return l},Z:function(){return i}});var r=n(2023),a=n(12924),c=n(99382),o=n(90978),s=n(85893);function l(e){return(0,a.Z)(new Date(e),"MMM d H:mma")}function i(e){var t=e.data,n=[{title:"Last Known Display Name",dataIndex:"displayName",key:"displayName",render:function(e,t){return(0,s.jsx)(c.Z,{user:t,children:(0,s.jsx)("span",{className:"display-name",children:e})})}},{title:"Created",dataIndex:"createdAt",key:"createdAt",render:function(e){return l(e)},sorter:function(e,t){return new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()},sortDirections:["descend","ascend"]},{title:"Disabled at",dataIndex:"disabledAt",key:"disabledAt",defaultSortOrder:"descend",render:function(e){return e?l(e):null},sorter:function(e,t){return new Date(e.disabledAt).getTime()-new Date(t.disabledAt).getTime()},sortDirections:["descend","ascend"]},{title:"",key:"block",className:"actions-col",render:function(e,t){return(0,s.jsx)(o.Z,{user:t,isEnabled:!t.disabledAt})}}];return(0,s.jsx)(r.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:n,dataSource:t,size:"small",rowKey:"id"})}}}]);