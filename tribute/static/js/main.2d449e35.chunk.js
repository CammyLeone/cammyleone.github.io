(this["webpackJsonptribute-client"]=this["webpackJsonptribute-client"]||[]).push([[0],{21:function(e,n){e.exports=Buttplug},33:function(e,n,t){e.exports=t.p+"static/media/texture1.de8a4e5d.jpg"},37:function(e,n,t){e.exports=t(49)},42:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var a,r,c,o=t(0),i=t.n(o),u=t(28),l=t.n(u),s=t(20),f=(t(42),t(2)),p=t(3),m=t(34),b=t(5),d=["paypal","cashapp","venmo"],v="venmo",g=(a={},Object(b.a)(a,"paypal",(function(e){return"https://paypal.me/".concat(e)})),Object(b.a)(a,"cashapp",(function(e){return"https://cash.app/".concat(e)})),a),h=(r={},Object(b.a)(r,"paypal","user name"),Object(b.a)(r,"cashapp","$cashtag"),r),j=(c={},Object(b.a)(c,"paypal","PayPal"),Object(b.a)(c,"cashapp","Cash App"),Object(b.a)(c,"venmo","Venmo"),c),w=function(e,n){return g[e](n)},y=function(e){return j[e]};function O(){var e=Object(m.a)(),n=e.register,t=e.handleSubmit,a=e.watch,r=Object(o.useState)(null),c=Object(p.a)(r,2),u=c[0],l=c[1],s=a("platform"),f=s===v;return i.a.createElement("main",null,i.a.createElement("form",{onSubmit:t((function(e){var n=e.platform,t=e.user;l("".concat("https://plug.willyouplease.me/say/#","/").concat(n,"/").concat(t))}))},i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"platform"},"How you want your money:"),i.a.createElement("select",{name:"platform",id:"platform",ref:n},d.map((function(e,n){return i.a.createElement("option",{value:e,key:n},y(e))})))),s&&i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"user"},"Your ",y(s)," ",h[s],":"),i.a.createElement("input",{name:"user",id:"user",type:"text",ref:n,disabled:f})),f&&"Sorry, Venmo isn't doing web payments any more :(",i.a.createElement("div",null,i.a.createElement("input",{type:"submit",value:"Generate a URL"})))),u&&i.a.createElement("section",null,i.a.createElement("a",{href:u},u),i.a.createElement("br",null),i.a.createElement("span",{role:"img","aria-label":"Link above"},"\u261d\ufe0f")," ","send this link to your submissive"))}var E=t(11),x=t(12),k=t(29),C=t.n(k),S=t(52),_=t(1),F=t.n(_),M=t(8),V=t(21);var B=function(e){var n=e.initiateConnection;return i.a.createElement("button",{onClick:n},"Connect a Toy")},T=function(e){var n=e.stopConnecting;return i.a.createElement("button",{onClick:n},"Stop Connecting")},D=function(){return i.a.createElement("span",null,"Connected!")};function R(e){var n=e.clickToStart,t=void 0===n?B:n,a=e.clickToStop,r=void 0===a?T:a,c=e.connected,i=void 0===c?D:c,u=e.onNewDevice,l=Object(o.useState)(!1),s=Object(p.a)(l,2),f=s[0],m=s[1],b=Object(o.useState)(!1),d=Object(p.a)(b,2),v=d[0],g=d[1];return function(e,n){var t=Object(o.useRef)(null),a=Object(o.useState)([]),r=Object(p.a)(a,2),c=r[0],i=r[1],u=Object(o.useState)(!1),l=Object(p.a)(u,2),s=l[0],f=l[1];Object(o.useEffect)((function(){function a(){return(a=Object(M.a)(F.a.mark((function e(){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=new V.ButtplugEmbeddedClientConnector,e.next=4,t.current.Connect(n);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return");case 10:return e.next=12,t.current.StartScanning();case 12:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}t.current&&!e&&(t.current=null),!t.current&&e&&(t.current=new V.ButtplugClient("Cammy"),t.current.addListener("deviceadded",(function(e){i(e),f(!0),n(e)})),function(){a.apply(this,arguments)}())}),[e])}(f,(function(e){g(!0),u(e)})),v?i():f?f?r({stopConnecting:function(){return m(!1)}}):null:t({initiateConnection:function(){return m(!0)}})}var W=function(e,n){return Math.sqrt(Math.pow(e,2)+Math.pow(n,2))},Y=function(e){var n=e.getBoundingClientRect();return{x:n.left+(n.right-n.left)/2,y:n.top+(n.bottom-n.top)/2}};function H(){var e=Object(E.a)(["\n  cursor: pointer;\n  display: block;\n  text-decoration: none;\n  text-transform: uppercase;\n\n  line-height: 1.4em;\n  padding: 10px 50px;\n\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.1);\n  border: solid 2px;\n  border-color: rgba(255, 255, 255, 0.3);\n\n  transition: background-color 0.4s ease 0s;\n  transition: border-color 0.4s ease 0s;\n\n  ",";\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.3);\n    border-color: #fff;\n  }\n"]);return H=function(){return e},e}function L(){var e=Object(E.a)(["\n  animation: "," infinite;\n"]);return L=function(){return e},e}function P(){var e=Object(E.a)(["\n  0% {\n    box-shadow: 0 0 30px #FFF;\n  }\n  100% {\n    box-shadow: 0 0 0px #FFF;\n  }\n"]);return P=function(){return e},e}var X=S.a().exponent(.8).clamp(!0).domain([1,0]).range([.1,2]),q=Object(x.c)(P()),A=Object(x.a)(L(),q),J=x.b.a.attrs((function(e){return{style:{animationDuration:"".concat((n=e.intensity,X(n)),"s")}};var n}))(H(),(function(e){return e.glow&&A})),N=t(33),$=t.n(N);function z(){var e=Object(E.a)(["\n  ",";\n  background-size: cover;\n  min-height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return z=function(){return e},e}function G(){var e=Object(E.a)(["\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n      url(https://static.wixstatic.com/media/5f397a_0fd6ca9520fa4e148efa5c7b1eacfbea~mv2.jpg/v1/fill/w_980,h_920,al_c,q_85,usm_0.66_1.00_0.01/5f397a_0fd6ca9520fa4e148efa5c7b1eacfbea~mv2.webp);\n  "]);return G=function(){return e},e}function I(){var e=Object(E.a)(["\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n    url(",");\n"]);return I=function(){return e},e}var U=Object(x.a)(I(),$.a),K={SensateArts:Object(x.a)(G())},Q=x.b.main(z(),(function(e){return K[e.user]||U}));var Z=function(e){var n=e.platform,t=e.user,a=Object(o.useState)(null),r=Object(p.a)(a,2),c=r[0],u=r[1],l=Object(o.useRef)(null),s=Object(o.useState)(0),f=Object(p.a)(s,2),m=f[0],b=f[1],d=Object(o.useCallback)(C()((function(e){var n=e.clientX,t=e.clientY;if(c){var a=function(e,n,t){var a=Y(e);return W(n-a.x,t-a.y)}(l.current,n,t),r=function(e){var n=Y(e);return Math.max(W(n.x,n.y),W(window.innerWidth-n.x,n.y),W(n.x,window.innerHeight-n.y),W(window.innerWidth-n.x,window.innerHeight-n.y))}(l.current),o=S.a().exponent(.8).clamp(!0).domain([r,0]).range([0,1]);b(o(a))}}),600));return function(e,n){Object(o.useEffect)((function(){function t(){return(t=Object(M.a)(F.a.mark((function t(){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("startVibrate()"),e.SendVibrateCmd(n),console.log("startVibrate() over");case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function a(){return(a=Object(M.a)(F.a.mark((function n(){return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("stopVibrate()"),n.next=3,e.SendStopDeviceCmd();case 3:console.log("stopVibrate() over");case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}e&&(console.log("vibrateEffect: ".concat(n)),n>0?function(){t.apply(this,arguments)}():function(){a.apply(this,arguments)}())}),[e,n])}(c,m),i.a.createElement(Q,{user:t,onMouseMove:function(e){var n=e.clientX,t=e.clientY;return d({clientX:n,clientY:t})}},i.a.createElement(R,{clickToStart:function(e){var n=e.initiateConnection;return i.a.createElement(J,{glow:!0,intensity:.5,onClick:n},"Connect a Toy")},clickToStop:function(e){var n=e.stopConnecting;return i.a.createElement(J,{onClick:n},"Stop Connecting")},connected:function(){return null},onNewDevice:function(e){return u(e)}}),c&&i.a.createElement(J,{as:"a",href:w(n,t),ref:l,glow:!0,intensity:m},"Pay Me"))};function ee(){var e=Object(f.g)(),n=e.platform,t=e.user;return i.a.createElement(Z,{platform:n,user:t})}var ne=function(){return i.a.createElement(f.d,null,i.a.createElement(f.b,{path:"/new",component:O}),i.a.createElement(f.b,{path:"/:platform/:user",component:ee}),i.a.createElement(f.a,{from:"/",to:"/new"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(s.a,null,i.a.createElement(ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.2d449e35.chunk.js.map