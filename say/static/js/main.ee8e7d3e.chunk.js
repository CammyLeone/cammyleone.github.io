(this["webpackJsonpsayitagain-client"]=this["webpackJsonpsayitagain-client"]||[]).push([[0],{25:function(e,t){e.exports=Buttplug},37:function(e,t,n){e.exports=n.p+"static/media/chalk.6f562c58.png"},54:function(e,t,n){e.exports=n(69)},59:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(36),o=n.n(c),u=n(24),i=(n(59),n(4)),l=n(21),s=n.n(l),m=n(3),f=n(9),p=n(10),d=n(41),b=n(37),v=n.n(b);function g(){var e=Object(f.a)(["\n  font-size: ",";\n  text-decoration: ",";\n  color: ",";\n"]);return g=function(){return e},e}function E(){var e=Object(f.a)(['\n  font-family: "Gloria Hallelujah";\n  font-size: 2rem;\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.1);\n  border: 1px solid #fff;\n  padding: 1rem;\n  border-radius: 0.25rem;\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.3);\n  }\n\n  &:active {\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n']);return E=function(){return e},e}function h(){var e=Object(f.a)(['\n  position: relative;\n  font-size: 4rem;\n\n  &::after {\n    content: "";\n    display: inline-block;\n    vertical-align: bottom;\n    height: 3rem;\n    width: 3rem;\n    background: url(',");\n    background-size: contain;\n    background-repeat: no-repeat;\n  }\n"]);return h=function(){return e},e}function j(){var e=Object(f.a)(["\n  width: 20%;\n  min-width: 300px;\n  border-left: 2px dotted #fff;\n  display: flex;\n  flex-direction: column;\n\n  & section {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 2rem;\n    border-bottom: 2px dotted #fff;\n    &:last-of-type {\n      border-bottom: 0;\n    }\n  }\n"]);return j=function(){return e},e}function x(){var e=Object(f.a)(["\n  height: 100vh;\n  overflow: scroll;\n  flex-grow: 3;\n  padding: 3rem;\n"]);return x=function(){return e},e}function O(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return O=function(){return e},e}var y=p.a.main(O()),w=p.a.section(x()),k=p.a.section(j()),C=p.a.span(h(),v.a),S=p.a.button(E()),T=p.a.span(g(),(function(e){return e.huge?"4rem":e.large?"2rem":e.normal?"1rem":e.small?"0.5rem":void 0}),(function(e){return e.lineThrough?"line-through":"none"}),(function(e){return e.muted?"rgba(255,255,255, 0.3);":"#FFF"}));function F(){var e=Object(f.a)(["\n  color: #e9658f;\n"]);return F=function(){return e},e}function V(){var e=Object(f.a)(["\n  display: block;\n"]);return V=function(){return e},e}var B=p.a.label(V()),L=p.a.a(F());function z(){var e=Object(d.a)(),t=e.register,n=e.handleSubmit,c=Object(a.useState)(null),o=Object(m.a)(c,2),u=o[0],i=o[1];return r.a.createElement("main",null,r.a.createElement("form",{onSubmit:n((function(e){var t=e.text,n=e.count,a=(e.cashtag,btoa(s.a.stringify({text:t,count:n})));i("".concat("https://plug.willyouplease.me/say","/").concat(a))}))},r.a.createElement("div",null,r.a.createElement(B,{htmlFor:"text"},"Line they should write"),r.a.createElement("textarea",{name:"text",id:"text",ref:t,rows:"5",cols:"80",defaultValue:"I deserve this."})),r.a.createElement("div",null,r.a.createElement(B,{htmlFor:"count"},"Number of times they should write it"),r.a.createElement("input",{name:"count",id:"count",type:"number",ref:t,defaultValue:10})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit"}))),u&&r.a.createElement("p",null,r.a.createElement(T,{large:!0},r.a.createElement(L,{href:u},u)),r.a.createElement(T,{normal:!0,muted:!0},r.a.createElement("span",{role:"img","aria-label":"Link above"},"\u261d\ufe0f")," ","send this link to your submissive")))}var D=n(2);function M(){var e=Object(f.a)(["\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n"]);return M=function(){return e},e}var N=p.a.input(M()),W=function(e){var t=e.onChange,n=e.value,c=Object(a.useRef)(null);return r.a.createElement("div",null,r.a.createElement(N,{autoFocus:!0,ref:c,value:n,type:"text",onChange:function(e){return t(e.target.value)}}),r.a.createElement(C,null,r.a.createElement("span",{onClick:function(){return c.current.focus()}},n)))};var Y=function(e){var t=e.target,n=e.onSuccessfulLine,c=e.onTypo,o=Object(a.useState)(""),u=Object(m.a)(o,2),i=u[0],l=u[1],s=Object(a.useState)(!1),f=Object(m.a)(s,2),p=f[0],d=f[1];return p?r.a.createElement(W,{type:"text",onChange:function(e){e===t?(n(),l("")):t.startsWith(e)?l(e):(c(e),l(""))},value:i}):r.a.createElement(T,{huge:!0,onClick:function(){return d(!0)}},"Click here to start writing...")},G=n(35),I=n(1),J=n.n(I),R=n(8),A=n(25);var H=function(e){var t=e.initiateConnection;return r.a.createElement("button",{onClick:t},"Connect a Toy")},$=function(e){var t=e.stopConnecting;return r.a.createElement("button",{onClick:t},"Stop Connecting")},q=function(){return r.a.createElement("span",null,"Connected!")};function K(e){var t=e.clickToStart,n=void 0===t?H:t,r=e.clickToStop,c=void 0===r?$:r,o=e.connected,u=void 0===o?q:o,i=e.onNewDevice,l=Object(a.useState)(!1),s=Object(m.a)(l,2),f=s[0],p=s[1],d=Object(a.useState)(!1),b=Object(m.a)(d,2),v=b[0],g=b[1];return function(e,t){var n=Object(a.useRef)(null),r=Object(a.useState)([]),c=Object(m.a)(r,2),o=c[0],u=c[1],i=Object(a.useState)(!1),l=Object(m.a)(i,2),s=l[0],f=l[1];Object(a.useEffect)((function(){function a(){return(a=Object(R.a)(J.a.mark((function e(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new A.ButtplugEmbeddedClientConnector,e.next=4,n.current.Connect(t);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return");case 10:return e.next=12,n.current.StartScanning();case 12:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}n.current&&!e&&(n.current=null),!n.current&&e&&(n.current=new A.ButtplugClient("Cammy"),n.current.addListener("deviceadded",(function(e){u(e),f(!0),t(e)})),function(){a.apply(this,arguments)}())}),[e])}(f,(function(e){g(!0),i(e)})),v?u():f?f?c({stopConnecting:function(){return p(!1)}}):null:n({initiateConnection:function(){return p(!0)}})}function P(e){var t=e.current,n=e.max,c=Object(a.useState)(null),o=Object(m.a)(c,2),u=o[0],i=o[1];return function(e,t){Object(a.useEffect)((function(){function n(){return(n=Object(R.a)(J.a.mark((function n(){return J.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("startVibrate()"),n.next=3,e.SendVibrateCmd(t);case 3:console.log("startVibrate() over");case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function a(){return(a=Object(R.a)(J.a.mark((function t(){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("stopVibrate()"),t.next=3,e.SendStopDeviceCmd();case 3:console.log("stopVibrate() over");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e&&(console.log("vibrateEffect: ".concat(t)),t>0?function(){n.apply(this,arguments)}():function(){a.apply(this,arguments)}())}),[e,t])}(u,G.a().clamp(!0).domain([0,n]).range([0,1])(t)),r.a.createElement(K,{onNewDevice:i,clickToStart:function(e){var t=e.initiateConnection;return r.a.createElement(S,{onClick:t},"Connect Your Toy")},clickToStop:function(e){var t=e.stopConnecting;return r.a.createElement(S,{onClick:t},"Stop Connecting")},connected:function(){return r.a.createElement(S,{disabled:!0},"Connected")}})}var Q=function(e){var t=e.lines;return r.a.createElement(a.Fragment,null,t.map((function(e,t){var n=e.status,a=e.content;return r.a.createElement(T,{as:"p",large:!0,muted:!0,lineThrough:"typo"===n,key:t},a)})))},U=function(e){var t=e.text,n=e.count;return r.a.createElement(a.Fragment,null,r.a.createElement(T,{large:!0},"Assignment:"),r.a.createElement(T,{normal:!0},"You are to write"),r.a.createElement(T,{large:!0},'"',t,'"'),r.a.createElement(T,{normal:!0},n," times."))},X=function(e){var t=e.current,n=e.total;return r.a.createElement(a.Fragment,null,r.a.createElement(T,{normal:!0}," You have "),r.a.createElement(T,{large:!0},Math.max(0,n-t)),r.a.createElement(T,{normal:!0},"lines to go."))},Z=function(e){var t=e.text,n=e.count,c=Object(a.useState)([]),o=Object(m.a)(c,2),u=o[0],i=o[1],l=Object(a.useState)(0),s=Object(m.a)(l,2),f=s[0],p=s[1];return r.a.createElement(y,null,r.a.createElement(w,null,r.a.createElement(Y,{target:t,onSuccessfulLine:function(){i([].concat(Object(D.a)(u),[{status:"success",content:t}])),p(f+1)},onTypo:function(e){i([].concat(Object(D.a)(u),[{status:"typo",content:e}])),p(0)}}),r.a.createElement(Q,{lines:Object(D.a)(u).reverse()})),r.a.createElement(k,null,r.a.createElement("section",null,r.a.createElement(U,{text:t,count:n})),r.a.createElement("section",null,r.a.createElement(X,{current:f,total:n})),r.a.createElement("section",null,r.a.createElement(P,{current:f,max:n}))))};var _=function(){return r.a.createElement(Z,{text:"Mr. Grey is a True Dominant",count:5})};function ee(){var e=Object(i.f)().encoded,t=atob(e),n=s.a.parse(t);return r.a.createElement(Z,{text:n.text,count:n.count})}var te=function(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/new",component:z}),r.a.createElement(i.a,{path:"/:encoded",component:ee}),r.a.createElement(i.a,{path:"/",component:_}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement(te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.ee8e7d3e.chunk.js.map