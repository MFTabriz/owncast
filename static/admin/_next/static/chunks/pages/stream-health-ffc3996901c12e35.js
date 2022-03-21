(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[632],{24019:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(1413),i=r(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"},o=r(42922),s=function(e,t){return i.createElement(o.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:a}))};s.displayName="ClockCircleOutlined";var l=i.forwardRef(s)},24308:function(e,t,r){"use strict";r.d(t,{c4:function(){return a}});var n=r(4942),i=r(87462),a=["xxl","xl","lg","md","sm","xs"],o={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},s=new Map,l=-1,c={},u={matchHandlers:{},dispatch:function(e){return c=e,s.forEach((function(e){return e(c)})),s.size>=1},subscribe:function(e){return s.size||this.register(),l+=1,s.set(l,e),e(c),l},unsubscribe:function(e){s.delete(e),s.size||this.unregister()},unregister:function(){var e=this;Object.keys(o).forEach((function(t){var r=o[t],n=e.matchHandlers[r];null===n||void 0===n||n.mql.removeListener(null===n||void 0===n?void 0:n.listener)})),s.clear()},register:function(){var e=this;Object.keys(o).forEach((function(t){var r=o[t],a=function(r){var a=r.matches;e.dispatch((0,i.Z)((0,i.Z)({},c),(0,n.Z)({},t,a)))},s=window.matchMedia(r);s.addListener(a),e.matchHandlers[r]={mql:s,listener:a},a(s)}))}};t.ZP=u},27561:function(e,t,r){var n=r(67990),i=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(i,""):e}},67990:function(e){var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},33448:function(e,t,r){var n=r(44239),i=r(37005);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==n(e)}},14841:function(e,t,r){var n=r(27561),i=r(13218),a=r(33448),o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=s.test(e);return r||l.test(e)?c(e.slice(2),r?2:8):o.test(e)?NaN:+e}},86401:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stream-health",function(){return r(26102)}])},89270:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(85893),i=r(31877),a=r(92616),o=r.n(a),s=r(58091),l=r(60727);function c(e){var t={};return e.forEach((function(e){var r=new Date(e.time),n=(0,s.Z)(r,"H:mma");t[n]=e.value})),t}function u(e){var t=e.data,r=e.title,i=e.color,a=e.unit,o=e.dataCollections,s=e.yFlipped,u=e.yLogarithmic,d=[];t&&t.length>0&&d.push({name:r,color:i,data:c(t)}),o.forEach((function(e){d.push({name:e.name,data:c(e.data),color:e.color,dataset:e.options})}));var h={scales:{y:{reverse:!1,type:"linear"},x:{type:"time"}}};return h.scales.y.reverse=s,h.scales.y.type=u?"logarithmic":"linear",(0,n.jsx)("div",{className:"line-chart-container",children:(0,n.jsx)(l.wW,{xtitle:"Time",ytitle:r,suffix:a,legend:"bottom",color:i,data:d,download:r,library:h})})}o().use(i.Z),u.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},26102:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var n=r(34051),i=r.n(n),a=r(85893),o=r(86789),s=r(26713),l=r(25968),c=r(6226),u=r(97751),d=r(74763),h=r(14670),f=r(67294),m=r(1413),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M723 620.5C666.8 571.6 593.4 542 513 542s-153.8 29.6-210.1 78.6a8.1 8.1 0 00-.8 11.2l36 42.9c2.9 3.4 8 3.8 11.4.9C393.1 637.2 450.3 614 513 614s119.9 23.2 163.5 61.5c3.4 2.9 8.5 2.5 11.4-.9l36-42.9c2.8-3.3 2.4-8.3-.9-11.2zm117.4-140.1C751.7 406.5 637.6 362 513 362s-238.7 44.5-327.5 118.4a8.05 8.05 0 00-1 11.3l36 42.9c2.8 3.4 7.9 3.8 11.2 1C308 472.2 406.1 434 513 434s205 38.2 281.2 101.6c3.4 2.8 8.4 2.4 11.2-1l36-42.9c2.8-3.4 2.4-8.5-1-11.3zm116.7-139C835.7 241.8 680.3 182 511 182c-168.2 0-322.6 59-443.7 157.4a8 8 0 00-1.1 11.4l36 42.9c2.8 3.3 7.8 3.8 11.1 1.1C222 306.7 360.3 254 511 254c151.8 0 291 53.5 400 142.7 3.4 2.8 8.4 2.3 11.2-1.1l36-42.9c2.9-3.4 2.4-8.5-1.1-11.3zM448 778a64 64 0 10128 0 64 64 0 10-128 0z"}}]},name:"wifi",theme:"outlined"},v=r(42922),y=function(e,t){return f.createElement(v.Z,(0,m.Z)((0,m.Z)({},e),{},{ref:t,icon:p}))};y.displayName="WifiOutlined";var g=f.forwardRef(y),x=r(24019),w=r(28058),b=r(58827),j=r(89270);function F(e,t,r,n,i,a,o){try{var s=e[a](o),l=s.value}catch(c){return void r(c)}s.done?t(l):Promise.resolve(l).then(n,i)}function Z(e){var t=e.title,r=e.description;return(0,a.jsxs)("div",{className:"description-box",children:[(0,a.jsx)(o.Z.Title,{children:t}),(0,a.jsx)(o.Z.Paragraph,{children:r})]})}function S(){var e,t,r,n,m,p,v,y=(0,f.useState)([]),S=y[0],k=y[1],C=(0,f.useState)([]),P=C[0],N=C[1],E=(0,f.useState)(),L=E[0],D=E[1],q=(0,f.useState)(),M=q[0],B=q[1],I=(0,f.useState)([]),O=I[0],T=I[1],_=(0,f.useState)([]),z=_[0],R=_[1],V=(0,f.useState)([]),H=V[0],A=V[1],Q=(0,f.useState)([]),$=Q[0],W=Q[1],X=(0,f.useState)([]),Y=X[0],G=X[1],J=(0,f.useState)([]),K=J[0],U=J[1],ee=(0,f.useState)([]),te=ee[0],re=ee[1],ne=(0,f.useState)([]),ie=ne[0],ae=ne[1],oe=(0,f.useState)(0),se=oe[0],le=oe[1],ce=function(){var e,t=(e=i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.rQ)(b.N$);case 3:t=e.sent,k(t.errors),N(t.qualityVariantChanges),B(t.highestLatency),D(t.lowestLatency),T(t.medianLatency),R(t.medianSegmentDownloadDuration),A(t.maximumSegmentDownloadDuration),W(t.minimumSegmentDownloadDuration),G(t.minPlayerBitrate),U(t.medianPlayerBitrate),re(t.maxPlayerBitrate),ae(t.availableBitrates),le(t.segmentLength-.3),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.error(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})),function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function o(e){F(a,n,i,o,s,"next",e)}function s(e){F(a,n,i,o,s,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();(0,f.useEffect)((function(){var e;return ce(),e=setInterval(ce,b.NE),function(){clearInterval(e)}}),[]);var ue=(0,a.jsxs)("div",{children:[(0,a.jsx)(o.Z.Title,{children:"Stream Performance"}),(0,a.jsx)(o.Z.Paragraph,{children:"Data has not yet been collected. Once a stream has begun and viewers are watching this page will be available."})]});if(!(null===S||void 0===S?void 0:S.length))return ue;if(!(null===O||void 0===O?void 0:O.length))return ue;if(!(null===z||void 0===z?void 0:z.length))return ue;var de=[{name:"Errors",color:"#B63FFF",options:{radius:3},data:S},{name:"Quality changes",color:"#2087E2",options:{radius:2},data:P}],he=[{name:"Median stream latency",color:"#00FFFF",options:{radius:2},data:O},{name:"Lowest stream latency",color:"#02FD0D",options:{radius:2},data:L},{name:"Highest stream latency",color:"#B63FFF",options:{radius:2},data:M}],fe=[{name:"Median download duration",color:"#00FFFF",options:{radius:2},data:z},{name:"Max download duration",color:"#B63FFF",options:{radius:2},data:H},{name:"Min download duration",color:"#02FD0D",options:{radius:2},data:$},{name:"Approximate limit",color:"#003FFF",data:z.map((function(e){return{time:e.time,value:se}})),options:{radius:0}}],me=[{name:"Lowest viewer bitrate",color:"#B63FFF",data:Y,options:{radius:2}},{name:"Median viewer bitrate",color:"#00FFFF",data:K,options:{radius:2}},{name:"Maximum viewer bitrate",color:"#02FD0D",data:te,options:{radius:2}}];ie.forEach((function(e){me.push({name:"".concat(e," kbps stream"),color:"#003FFF",data:Y.map((function(e){return{time:e.time,value:1200}})),options:{radius:0}})}));var pe=null===(t=null===(e=me[0])||void 0===e?void 0:e.data[me[0].data.length-1])||void 0===t?void 0:t.value,ve=null===(r=z[z.length-1])||void 0===r?void 0:r.value,ye=ie[0],ge=(null===(n=O[O.length-1])||void 0===n?void 0:n.value)||0,xe=(null===(m=M[M.length-1])||void 0===m?void 0:m.value)||0,we=(null===(p=L[L.length-1])||void 0===p?void 0:p.value)||0,be=(Number(xe)+Number(we)+Number(ge))/3,je=0;((null===(v=de[0])||void 0===v?void 0:v.data.length)||0)>5?je=de[0].data.slice(-5).reduce((function(e,t){return e+Number(t.value)}),0):je=de[0].data.reduce((function(e,t){return e+Number(t.value)}),0);var Fe=pe>0||ve>0||je>0,Ze=null,Se=null;0!==pe&&pe<ye&&(Ze="At least one of your viewers is playing your stream at ".concat(pe,"kbps, slower than ").concat(ye,"kbps, the lowest quality you made available, experiencing buffering. Consider adding a lower quality with a lower bitrate if the errors over time warrant this.")),ve>se&&(Se="Your viewers may be consuming your video slower than required. This may be due to slow networks or your latency configuration. Consider adding a lower quality with a lower bitrate or experiment with increasing the latency buffer setting.");var ke=je>0?"#B63FFF":"#FFFFFF",Ce={display:"flex",alignItems:"center",justifyContent:"center",height:"80px"};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z.Title,{children:"Stream Performance"}),(0,a.jsx)(o.Z.Paragraph,{children:"This tool hopes to help you identify and troubleshoot problems you may be experiencing with your stream. It aims to aggregate experiences across your viewers, meaning one viewer with an exceptionally bad experience may throw off numbers for the whole, especially with a low number of viewers."}),(0,a.jsx)(o.Z.Paragraph,{children:"The data is only collected by those using the Owncast web interface and is unable to gain insight into external players people may be using such as VLC, MPV, QuickTime, etc."}),(0,a.jsxs)(s.Z,{direction:"vertical",size:"middle",children:[(0,a.jsxs)(l.Z,{gutter:[16,16],justify:"space-around",style:{display:Fe?"flex":"none"},children:[(0,a.jsx)(c.Z,{children:(0,a.jsx)(u.Z,{type:"inner",children:(0,a.jsx)("div",{style:Ce,children:(0,a.jsx)(d.Z,{title:"Viewer Playback Speed",value:"".concat(pe),prefix:(0,a.jsx)(g,{style:{marginRight:"5px"}}),precision:0,suffix:"kbps"})})})}),(0,a.jsx)(c.Z,{children:(0,a.jsx)(u.Z,{type:"inner",children:(0,a.jsx)("div",{style:Ce,children:(0,a.jsx)(d.Z,{title:"Viewer Latency",value:"".concat(be),prefix:(0,a.jsx)(x.Z,{style:{marginRight:"5px"}}),precision:0,suffix:"seconds"})})})}),(0,a.jsx)(c.Z,{children:(0,a.jsx)(u.Z,{type:"inner",children:(0,a.jsxs)("div",{style:Ce,children:[(0,a.jsx)(d.Z,{title:"Recent Playback Errors",value:"".concat(je||0),valueStyle:{color:ke},prefix:(0,a.jsx)(w.Z,{style:{marginRight:"5px"}}),suffix:""})," "]})})})]}),(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(Z,{title:"Video Segment Download",description:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z.Paragraph,{children:"Once a video segment takes too long to download a viewer will experience buffering. If you see slow downloads you should offer a lower quality for your viewers, or find other ways, possibly an external storage provider, a CDN or a faster network, to improve your stream quality. Increasing your latency buffer can also help for some viewers."}),(0,a.jsx)(o.Z.Paragraph,{children:"In short, once the pink line consistently gets near the blue line, your stream is likely experiencing problems for viewers."})]})}),Se&&(0,a.jsx)(h.Z,{message:"Slow downloads",description:Se,type:"error",showIcon:!0}),(0,a.jsx)(j.Z,{title:"Seconds",dataCollections:fe,color:"#FF7700",unit:"s",yLogarithmic:!0})]}),(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(Z,{title:"Player Network Speed",description:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z.Paragraph,{children:"The playback bitrate of your viewers. Once somebody's bitrate drops below the lowest video variant bitrate they will experience buffering. If you see viewers with slow connections trying to play your video you should consider offering an additional, lower quality."}),(0,a.jsx)(o.Z.Paragraph,{children:"In short, once the pink line gets near the lowest blue line, your stream is likely experiencing problems for at least one of your viewers."})]})}),Ze&&(0,a.jsx)(h.Z,{message:"Low bandwidth viewers",description:Ze,type:"error",showIcon:!0}),(0,a.jsx)(j.Z,{title:"Lowest Player Bitrate",dataCollections:me,color:"#FF7700",unit:"kbps",yLogarithmic:!0})]}),(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(Z,{title:"Errors and Quality Changes",description:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z.Paragraph,{children:"Recent number of errors, including buffering, and quality changes from across all your viewers. Errors can occur for many reasons, including browser issues, plugins, wifi problems, and they don't all represent fatal issues or something you have control over."}),"A quality change is not necessarily a negative thing, but if it's excessive and coinciding with errors you should consider adding another quality variant.",(0,a.jsx)(o.Z.Paragraph,{})]})}),(0,a.jsx)(j.Z,{title:"#",dataCollections:de,color:"#FF7700",unit:""})]}),(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(Z,{title:"Viewer Latency",description:"An approximate number of seconds that your viewers are behind your live video. The more people buffer the further behind they will be. High latency itself is not a problem, but some people care about this more than others."}),(0,a.jsx)(j.Z,{title:"Seconds",dataCollections:he,color:"#FF7700",unit:"s"})]})]})]})}},21770:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(97685),i=r(67294);function a(e,t){var r=t||{},a=r.defaultValue,o=r.value,s=r.onChange,l=r.postState,c=i.useState((function(){return void 0!==o?o:void 0!==a?"function"===typeof a?a():a:"function"===typeof e?e():e})),u=(0,n.Z)(c,2),d=u[0],h=u[1],f=void 0!==o?o:d;l&&(f=l(f));var m=i.useRef(s);m.current=s;var p=i.useCallback((function(e){h(e),f!==e&&m.current&&m.current(e,f)}),[f,m]),v=i.useRef(!0);return i.useEffect((function(){v.current?v.current=!1:void 0===o&&h(o)}),[o]),[f,p]}}},function(e){e.O(0,[570,91,694,751,763,80,774,888,179],(function(){return t=86401,e(e.s=t);var t}));var t=e.O();_N_E=t}]);