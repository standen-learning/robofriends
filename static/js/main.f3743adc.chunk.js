(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(24)},21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),i=n(1),s=n(3),l=n(10),u=(n(21),function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))}),d=function(e){var t=e.robots;return a.a.createElement("div",null,t.map(function(e,n){return a.a.createElement(u,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},h=function(e){e.searchfield;var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},f=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},b=n(7),g=n(8),p=n(11),E=n(9),m=n(12),v=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(p.a)(this,Object(E.a)(t).call(this,e))).state={hasError:!1},n}return Object(m.a)(t,e),Object(g.a)(t,[{key:"compnentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Ooop. That is not good."):this.props.children}}]),t}(r.Component),w=(n(22),function(e){return{type:"CHANGE_SEARCH_FIELD",payload:e}}),O=function(){return function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})}};var y=Object(i.b)()(function(e){e.props;var t=Object(i.d)(function(e){return e.requestRobots}),n=t.robots,o=t.isPending,c=t.error,s=Object(i.d)(function(e){return e.searchRobots.searchField}),l=Object(i.c)();Object(r.useEffect)(function(){l(O())},[l]);var u=n.filter(function(e){return e.name.toLowerCase().includes(s.toLowerCase())});return o?a.a.createElement("h1",null,"Loading"):c?a.a.createElement("div",null,a.a.createElement("h1",null,"There was an error loading the robots."),a.a.createElement("p",null,"Please refresh the page to try again.")):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f2"},"RoboFriends"),a.a.createElement(h,{searchChange:function(e){return l(w(e.target.value))}}),a.a.createElement(f,null,a.a.createElement(v,null,a.a.createElement(d,{robots:u}))))}),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var j={searchField:""},C={isPending:!1,robots:[],error:""},T=(n(23),Object(s.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}})),_=Object(s.c)(T,Object(s.a)(l.a));c.a.render(a.a.createElement(i.a,{store:_},a.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/robofriends","/service-worker.js");S?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):R(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):R(t,e)})}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.f3743adc.chunk.js.map