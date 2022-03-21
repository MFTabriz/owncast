(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[480],{1481:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/federation/followers",function(){return n(38403)}])},38403:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var r=n(34051),a=n.n(r),c=n(85893),i=n(67294),o=n(87462),s=n(4942),l=n(71002),u=n(97685),d=n(94184),f=n.n(d),p=n(48555),m=n(17799),h=n(59844),v=n(11941),g=n(24308),y=n(25378),x=i.createContext("default"),w=function(e){var t=e.children,n=e.size;return i.createElement(x.Consumer,null,(function(e){return i.createElement(x.Provider,{value:n||e},t)}))},k=x,b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},j=function(e,t){var n,r,a=i.useContext(k),c=i.useState(1),d=(0,u.Z)(c,2),x=d[0],w=d[1],j=i.useState(!1),Z=(0,u.Z)(j,2),S=Z[0],E=Z[1],C=i.useState(!0),O=(0,u.Z)(C,2),P=O[0],z=O[1],T=i.useRef(),A=i.useRef(),N=(0,m.sQ)(t,T),I=i.useContext(h.E_).getPrefixCls,_=function(){if(A.current&&T.current){var t=A.current.offsetWidth,n=T.current.offsetWidth;if(0!==t&&0!==n){var r=e.gap,a=void 0===r?4:r;2*a<n&&w(n-2*a<t?(n-2*a)/t:1)}}};i.useEffect((function(){E(!0)}),[]),i.useEffect((function(){z(!0),w(1)}),[e.src]),i.useEffect((function(){_()}),[e.gap]);var D=e.prefixCls,R=e.shape,Q=e.size,M=e.src,F=e.srcSet,q=e.icon,H=e.className,B=e.alt,U=e.draggable,W=e.children,X=e.crossOrigin,K=b(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),Y="default"===Q?a:Q,G=Object.keys("object"===(0,l.Z)(Y)&&Y||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),L=(0,y.Z)(G),V=i.useMemo((function(){if("object"!==(0,l.Z)(Y))return{};var e=g.c4.find((function(e){return L[e]})),t=Y[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:q?t/2:18}:{}}),[L,Y]);(0,v.Z)(!("string"===typeof q&&q.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(q,"` at https://ant.design/components/icon"));var $,J=I("avatar",D),ee=f()((n={},(0,s.Z)(n,"".concat(J,"-lg"),"large"===Y),(0,s.Z)(n,"".concat(J,"-sm"),"small"===Y),n)),te=i.isValidElement(M),ne=f()(J,ee,(r={},(0,s.Z)(r,"".concat(J,"-").concat(R),!!R),(0,s.Z)(r,"".concat(J,"-image"),te||M&&P),(0,s.Z)(r,"".concat(J,"-icon"),!!q),r),H),re="number"===typeof Y?{width:Y,height:Y,lineHeight:"".concat(Y,"px"),fontSize:q?Y/2:18}:{};if("string"===typeof M&&P)$=i.createElement("img",{src:M,draggable:U,srcSet:F,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&z(!1)},alt:B,crossOrigin:X});else if(te)$=M;else if(q)$=q;else if(S||1!==x){var ae="scale(".concat(x,") translateX(-50%)"),ce={msTransform:ae,WebkitTransform:ae,transform:ae},ie="number"===typeof Y?{lineHeight:"".concat(Y,"px")}:{};$=i.createElement(p.default,{onResize:_},i.createElement("span",{className:"".concat(J,"-string"),ref:function(e){A.current=e},style:(0,o.Z)((0,o.Z)({},ie),ce)},W))}else $=i.createElement("span",{className:"".concat(J,"-string"),style:{opacity:0},ref:function(e){A.current=e}},W);return delete K.onError,delete K.gap,i.createElement("span",(0,o.Z)({},K,{style:(0,o.Z)((0,o.Z)((0,o.Z)({},re),V),K.style),className:ne,ref:N}),$)},Z=i.forwardRef(j);Z.displayName="Avatar",Z.defaultProps={shape:"circle",size:"default"};var S=Z,E=n(37419),C=n(96159),O=n(55241),P=function(e){var t=i.useContext(h.E_),n=t.getPrefixCls,r=t.direction,a=e.prefixCls,c=e.className,o=void 0===c?"":c,l=e.maxCount,u=e.maxStyle,d=e.size,p=n("avatar-group",a),m=f()(p,(0,s.Z)({},"".concat(p,"-rtl"),"rtl"===r),o),v=e.children,g=e.maxPopoverPlacement,y=void 0===g?"top":g,x=e.maxPopoverTrigger,k=void 0===x?"hover":x,b=(0,E.Z)(v).map((function(e,t){return(0,C.Tm)(e,{key:"avatar-key-".concat(t)})})),j=b.length;if(l&&l<j){var Z=b.slice(0,l),P=b.slice(l,j);return Z.push(i.createElement(O.Z,{key:"avatar-popover-key",content:P,trigger:k,placement:y,overlayClassName:"".concat(p,"-popover")},i.createElement(S,{style:u},"+".concat(j-l)))),i.createElement(w,{size:d},i.createElement("div",{className:m,style:e.style},Z))}return i.createElement(w,{size:d},i.createElement("div",{className:m,style:e.style},b))},z=S;z.Group=P;var T=z,A=n(87961),N=n(17962),I=n(71577),_=n(58091),D=n(1413),R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-add",theme:"outlined"},Q=n(42922),M=function(e,t){return i.createElement(Q.Z,(0,D.Z)((0,D.Z)({},e),{},{ref:t,icon:R}))};M.displayName="UserAddOutlined";var F=i.forwardRef(M),q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 655.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 518 759.6 444.7 759.6 362c0-137-110.8-248-247.5-248S264.7 225 264.7 362c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 901.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 641.2 432.2 610 512.2 610c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 534c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 362c0-45.9 17.9-89.1 50.3-121.6S466.3 190 512.2 190s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 362c0 45.9-17.9 89.1-50.3 121.6C601.1 516.1 558 534 512.2 534zM880 772H640c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-delete",theme:"outlined"},H=function(e,t){return i.createElement(Q.Z,(0,D.Z)((0,D.Z)({},e),{},{ref:t,icon:q}))};H.displayName="UserDeleteOutlined";var B=i.forwardRef(H),U=n(35159),W=n(58827),X=n(2766);function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Y(e,t,n,r,a,c,i){try{var o=e[c](i),s=o.value}catch(l){return void n(l)}o.done?t(s):Promise.resolve(s).then(r,a)}function G(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function i(e){Y(c,r,a,i,o,"next",e)}function o(e){Y(c,r,a,i,o,"throw",e)}i(void 0)}))}}function L(e){return function(e){if(Array.isArray(e))return K(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var V=A.Z.TabPane;function $(){var e=function(e,t){return(0,c.jsx)(N.Z,{dataSource:e,columns:t,size:"small",rowKey:function(e){return e.link},pagination:{pageSize:50,hideOnSinglePage:!0,showSizeChanger:!1,total:m},onChange:function(e){var t=e.current;y(t)}})},t=(0,i.useState)([]),n=t[0],r=t[1],o=(0,i.useState)([]),s=o[0],l=o[1],u=(0,i.useState)([]),d=u[0],f=u[1],p=(0,i.useState)(0),m=p[0],h=p[1],v=(0,i.useState)(0),g=v[0],y=v[1],x=((0,i.useContext)(U.aC)||{}).serverConfig.federation.isPrivate,w=function(){var e=G(a().mark((function e(){var t,n,c,i,o,u,d;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,50,t=50*g,n="".concat(W.HP,"?offset=").concat(t,"&limit=").concat(50),e.next=6,(0,W.rQ)(n,{auth:!0});case 6:return c=e.sent,i=c.results,o=c.total,(0,X.Qr)(i)?f([]):(h(o),f(i)),e.next=11,(0,W.rQ)(W.E8,{auth:!0});case 11:return u=e.sent,(0,X.Qr)(u)?r([]):r(u),e.next=15,(0,W.rQ)(W.Y9,{auth:!0});case 15:d=e.sent,(0,X.Qr)(s)?l([]):l(d),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log("==== error",e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){w()}),[]);var k=[{title:"",dataIndex:"image",key:"image",width:90,render:function(e){return(0,c.jsx)(T,{size:40,src:e||"/img/logo.svg"})}},{title:"Name",dataIndex:"name",key:"name",render:function(e,t){return(0,c.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:t.name||t.username})}},{title:"URL",dataIndex:"link",key:"link",render:function(e,t){return(0,c.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:t.link})}}];function b(e){return j.apply(this,arguments)}function j(){return(j=G(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,W.rQ)(W.kb,{auth:!0,method:"POST",data:{actorIRI:t.link,approved:!0}});case 3:w(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function Z(e){return S.apply(this,arguments)}function S(){return(S=G(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,W.rQ)(W.kb,{auth:!0,method:"POST",data:{actorIRI:t.link,approved:!1}});case 3:w(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var E=L(k);E.unshift({title:"Approve",dataIndex:null,key:null,render:function(e){return(0,c.jsx)(I.Z,{type:"primary",icon:(0,c.jsx)(F,{}),onClick:function(){b(e)}})},width:50},{title:"Reject",dataIndex:null,key:null,render:function(e){return(0,c.jsx)(I.Z,{type:"primary",danger:!0,icon:(0,c.jsx)(B,{}),onClick:function(){Z(e)}})},width:50}),E.push({title:"Requested",dataIndex:"timestamp",key:"requested",width:200,render:function(e){var t=new Date(e);return(0,c.jsx)(c.Fragment,{children:(0,_.Z)(t,"P")})},sorter:function(e,t){return new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime()},sortDirections:["descend","ascend"],defaultSortOrder:"descend"});var C=L(k);C.unshift({title:"Approve",dataIndex:null,key:null,render:function(e){return(0,c.jsx)(I.Z,{type:"primary",icon:(0,c.jsx)(F,{}),size:"large",onClick:function(){b(e)}})},width:50}),C.push({title:"Requested",dataIndex:"timestamp",key:"requested",width:200,render:function(e){var t=new Date(e);return(0,c.jsx)(c.Fragment,{children:(0,_.Z)(t,"P")})},sorter:function(e,t){return new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime()},sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Rejected/Blocked",dataIndex:"timestamp",key:"disabled_at",width:200,render:function(e){var t=new Date(e);return(0,c.jsx)(c.Fragment,{children:(0,_.Z)(t,"P")})},sorter:function(e,t){return new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime()},sortDirections:["descend","ascend"],defaultSortOrder:"descend"});var O=L(k);O.push({title:"Added",dataIndex:"timestamp",key:"timestamp",width:200,render:function(e){var t=new Date(e);return(0,c.jsx)(c.Fragment,{children:(0,_.Z)(t,"P")})},sorter:function(e,t){return new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime()},sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Remove",dataIndex:null,key:null,render:function(e){return(0,c.jsx)(I.Z,{type:"primary",danger:!0,icon:(0,c.jsx)(B,{}),onClick:function(){Z(e)}})},width:50});var P=x&&(0,c.jsxs)(V,{tab:(0,c.jsxs)("span",{children:["Requests ",n.length>0&&"(".concat(n.length,")")]}),children:[(0,c.jsxs)("p",{children:["The following people are requesting to follow your Owncast server on the"," ",(0,c.jsx)("a",{href:"https://en.wikipedia.org/wiki/Fediverse",target:"_blank",rel:"noopener noreferrer",children:"Fediverse"})," ","and be alerted to when you go live. Each must be approved."]}),e(n,E)]},"2");return(0,c.jsx)("div",{className:"followers-section",children:(0,c.jsxs)(A.Z,{defaultActiveKey:"1",children:[(0,c.jsxs)(V,{tab:(0,c.jsxs)("span",{children:["Followers ",d.length>0&&"(".concat(d.length,")")]}),children:[(0,c.jsx)("p",{children:"The following accounts get notified when you go live or send a post."}),e(d,O)," "]},"1"),P,(0,c.jsxs)(V,{tab:(0,c.jsxs)("span",{children:["Blocked ",s.length>0&&"(".concat(s.length,")")]}),children:[(0,c.jsx)("p",{children:"The following people were either rejected or blocked by you. You can approve them as a follower."}),(0,c.jsx)("p",{children:e(s,C)})]},"3")]})})}}},function(e){e.O(0,[962,91,961,774,888,179],(function(){return t=1481,e(e.s=t);var t}));var t=e.O();_N_E=t}]);