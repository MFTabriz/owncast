(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{24308:function(e,t,n){"use strict";n.d(t,{c4:function(){return i}});var r=n(4942),o=n(87462),i=["xxl","xl","lg","md","sm","xs"],a={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},c=new Map,l=-1,s={},u={matchHandlers:{},dispatch:function(e){return s=e,c.forEach((function(e){return e(s)})),c.size>=1},subscribe:function(e){return c.size||this.register(),l+=1,c.set(l,e),e(s),l},unsubscribe:function(e){c.delete(e),c.size||this.unregister()},unregister:function(){var e=this;Object.keys(a).forEach((function(t){var n=a[t],r=e.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),c.clear()},register:function(){var e=this;Object.keys(a).forEach((function(t){var n=a[t],i=function(n){var i=n.matches;e.dispatch((0,o.Z)((0,o.Z)({},s),(0,r.Z)({},t,i)))},c=window.matchMedia(n);c.addListener(i),e.matchHandlers[n]={mql:c,listener:i},i(c)}))}};t.ZP=u},27561:function(e,t,n){var r=n(67990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},33448:function(e,t,n){var r=n(44239),o=n(37005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},14841:function(e,t,n){var r=n(27561),o=n(13218),i=n(33448),a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=c.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):a.test(e)?NaN:+e}},94194:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hardware-info",function(){return n(61003)}])},89270:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(85893),o=n(31877),i=n(92616),a=n.n(i),c=n(58091),l=n(60727);function s(e){var t={};return e.forEach((function(e){var n=new Date(e.time),r=(0,c.Z)(n,"H:mma");t[r]=e.value})),t}function u(e){var t=e.data,n=e.title,o=e.color,i=e.unit,a=e.dataCollections,c=e.yFlipped,u=e.yLogarithmic,f=[];t&&t.length>0&&f.push({name:n,color:o,data:s(t)}),a.forEach((function(e){f.push({name:e.name,data:s(e.data),color:e.color,dataset:e.options})}));var p={scales:{y:{reverse:!1,type:"linear"},x:{type:"time"}}};return p.scales.y.reverse=c,p.scales.y.type=u?"logarithmic":"linear",(0,r.jsx)("div",{className:"line-chart-container",children:(0,r.jsx)(l.wW,{xtitle:"Time",ytitle:n,suffix:i,legend:"bottom",color:o,data:f,download:n,library:p})})}a().use(o.Z),u.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},34440:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(85893),o=n(84485),i=n(97910),a=n(74763),c=n(97751);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}var u=o.Z.Text,f={title:"",value:0,prefix:null,suffix:null,color:"",progress:!1,centered:!1,formatter:null};function p(e){var t=e.title,n=e.value,o=e.prefix,a=e.suffix,c=e.color,l=n>90?"red":c,s=(0,r.jsxs)("div",{children:[o,(0,r.jsx)("div",{children:(0,r.jsx)(u,{type:"secondary",children:t})}),(0,r.jsx)("div",{children:(0,r.jsxs)(u,{type:"secondary",children:[n,a||"%"]})})]});return(0,r.jsx)(i.Z,{type:"dashboard",percent:n,width:120,strokeColor:{"0%":c,"90%":l},format:function(){return s}})}function d(e){var t=e.title,n=e.value,o=e.prefix,i=e.formatter;return(0,r.jsx)(a.Z,{title:t,value:n,prefix:o,formatter:i})}function v(e){var t=e.progress?p:d,n=e.centered?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,r.jsx)(c.Z,{type:"inner",children:(0,r.jsx)("div",{style:n,children:(0,r.jsx)(t,s({},e))})})}p.defaultProps=f,d.defaultProps=f,v.defaultProps=f},61003:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(34051),o=n.n(r),i=n(85893),a=n(1413),c=n(67294),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M956.9 845.1L896.4 632V168c0-17.7-14.3-32-32-32h-704c-17.7 0-32 14.3-32 32v464L67.9 845.1C60.4 866 75.8 888 98 888h828.8c22.2 0 37.6-22 30.1-42.9zM200.4 208h624v395h-624V208zm228.3 608l8.1-37h150.3l8.1 37H428.7zm224 0l-19.1-86.7c-.8-3.7-4.1-6.3-7.8-6.3H398.2c-3.8 0-7 2.6-7.8 6.3L371.3 816H151l42.3-149h638.2l42.3 149H652.7z"}}]},name:"laptop",theme:"outlined"},s=n(42135),u=function(e,t){return c.createElement(s.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:l}))};u.displayName="LaptopOutlined";var f=c.forwardRef(u),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z"}}]},name:"bulb",theme:"outlined"},d=function(e,t){return c.createElement(s.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:p}))};d.displayName="BulbOutlined";var v=c.forwardRef(d),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"},h=function(e,t){return c.createElement(s.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:m}))};h.displayName="SaveOutlined";var y=c.forwardRef(h),x=n(84485),g=n(25968),b=n(6226),w=n(58827),j=n(89270),Z=n(34440);function O(e,t,n,r,o,i,a){try{var c=e[i](a),l=c.value}catch(s){return void n(s)}c.done?t(l):Promise.resolve(l).then(r,o)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){C(e,t,n[t])}))}return e}function N(){var e,t,n,r=(0,c.useState)({cpu:[],memory:[],disk:[],message:""}),a=r[0],l=r[1],s=function(){var e,t=(e=o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,w.rQ)(w.nx);case 3:t=e.sent,l(P({},t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l(P({},a,{message:e.t0.message}));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){O(i,r,o,a,c,"next",e)}function c(e){O(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();if((0,c.useEffect)((function(){var e;return s(),e=setInterval(s,w.NE),function(){clearInterval(e)}}),[]),!a.cpu)return null;var u=null===(e=a.cpu[a.cpu.length-1])||void 0===e?void 0:e.value,p=null===(t=a.memory[a.memory.length-1])||void 0===t?void 0:t.value,d=null===(n=a.disk[a.disk.length-1])||void 0===n?void 0:n.value,m=[{name:"CPU",color:"#B63FFF",data:a.cpu},{name:"Memory",color:"#2087E2",data:a.memory},{name:"Disk",color:"#FF7700",data:a.disk}];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.Z.Title,{children:"Hardware Info"}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{children:[(0,i.jsxs)(g.Z,{gutter:[16,16],justify:"space-around",children:[(0,i.jsx)(b.Z,{children:(0,i.jsx)(Z.Z,{title:m[0].name,value:"".concat(u||0),prefix:(0,i.jsx)(f,{style:{color:m[0].color}}),color:m[0].color,progress:!0,centered:!0})}),(0,i.jsx)(b.Z,{children:(0,i.jsx)(Z.Z,{title:m[1].name,value:"".concat(p||0),prefix:(0,i.jsx)(v,{style:{color:m[1].color}}),color:m[1].color,progress:!0,centered:!0})}),(0,i.jsx)(b.Z,{children:(0,i.jsx)(Z.Z,{title:m[2].name,value:"".concat(d||0),prefix:(0,i.jsx)(y,{style:{color:m[2].color}}),color:m[2].color,progress:!0,centered:!0})})]}),(0,i.jsx)(j.Z,{title:"% used",dataCollections:m,color:"#FF7700",unit:"%"})]})]})}},56180:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(4942),o=n(1413),i=n(97685),a=n(91),c=n(67294),l=n(82532),s=n(94184),u=n.n(s),f={adjustX:1,adjustY:1},p=[0,0],d={topLeft:{points:["bl","tl"],overflow:f,offset:[0,-4],targetOffset:p},topCenter:{points:["bc","tc"],overflow:f,offset:[0,-4],targetOffset:p},topRight:{points:["br","tr"],overflow:f,offset:[0,-4],targetOffset:p},bottomLeft:{points:["tl","bl"],overflow:f,offset:[0,4],targetOffset:p},bottomCenter:{points:["tc","bc"],overflow:f,offset:[0,4],targetOffset:p},bottomRight:{points:["tr","br"],overflow:f,offset:[0,4],targetOffset:p}},v=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"];function m(e,t){var n=e.arrow,s=void 0!==n&&n,f=e.prefixCls,p=void 0===f?"rc-dropdown":f,m=e.transitionName,h=e.animation,y=e.align,x=e.placement,g=void 0===x?"bottomLeft":x,b=e.placements,w=void 0===b?d:b,j=e.getPopupContainer,Z=e.showAction,O=e.hideAction,C=e.overlayClassName,P=e.overlayStyle,N=e.visible,E=e.trigger,k=void 0===E?["hover"]:E,z=(0,a.Z)(e,v),H=c.useState(),V=(0,i.Z)(H,2),L=V[0],M=V[1],_="visible"in e?N:L,F=c.useRef(null);c.useImperativeHandle(t,(function(){return F.current}));var S=function(){var t=e.overlay;return"function"===typeof t?t():t},A=function(t){var n=e.onOverlayClick,r=S().props;M(!1),n&&n(t),r.onClick&&r.onClick(t)},T=function(){var e=S(),t={prefixCls:"".concat(p,"-menu"),onClick:A};return"string"===typeof e.type&&delete t.prefixCls,c.createElement(c.Fragment,null,s&&c.createElement("div",{className:"".concat(p,"-arrow")}),c.cloneElement(e,t))},R=O;return R||-1===k.indexOf("contextMenu")||(R=["click"]),c.createElement(l.Z,(0,o.Z)((0,o.Z)({builtinPlacements:w},z),{},{prefixCls:p,ref:F,popupClassName:u()(C,(0,r.Z)({},"".concat(p,"-show-arrow"),s)),popupStyle:P,action:k,showAction:Z,hideAction:R||[],popupPlacement:g,popupAlign:y,popupTransitionName:m,popupAnimation:h,popupVisible:_,stretch:function(){var t=e.minOverlayWidthMatchTrigger,n=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!n}()?"minWidth":"",popup:"function"===typeof e.overlay?T:T(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;M(t),"function"===typeof n&&n(t)},getPopupContainer:j}),function(){var t=e.children,n=t.props?t.props:{},r=u()(n.className,function(){var t=e.openClassName;return void 0!==t?t:"".concat(p,"-open")}());return _&&t?c.cloneElement(t,{className:r}):t}())}var h=c.forwardRef(m)}},function(e){e.O(0,[570,91,879,751,763,80,910,774,888,179],(function(){return t=94194,e(e.s=t);var t}));var t=e.O();_N_E=t}]);