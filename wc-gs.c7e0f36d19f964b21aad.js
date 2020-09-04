/*! For license information please see wc-gs.c7e0f36d19f964b21aad.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5,9],{102:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(2),o=a(29),c=a(77),l=a(78),u=a(4),i=a(69),m=a(70),d=a(74),p=a(87),b=a(86),h=a(89),f=a(82),g=a(83),w=a(90),j=a(85),E=a(84),k=a(103);const v=o(r.c`
  background-color: #c0e0c0;
`);function O(e){const t=e.map(e=>l(e));return{currentPotNum:0,selectedTeam:null,pickedGroup:null,hungPot:t[0],pots:t,groups:e[0].map(()=>[])}}t.default=Object(s.memo)(({season:e,pots:t})=>{const[a,r]=Object(i.a)(),[o,l]=Object(m.a)(),[{currentPotNum:y,selectedTeam:P,pickedGroup:T,hungPot:G,pots:x,groups:N},A]=Object(s.useState)(()=>O(t));Object(s.useEffect)(()=>{A(O(t))},[t,a]);const[,S]=Object(u.a)(),[C]=Object(d.a)(),I=Object(p.a)(k.default),M=Object(s.useRef)(null),W=Object(s.useCallback)(e=>{if(P)return;const t=x[y][e];if(!t)return;const a=x.slice();a[y]=a[y].filter((t,a)=>a!==e),A({currentPotNum:y,hungPot:G,selectedTeam:t,pickedGroup:null,pots:a,groups:N})},[x,N,y,G,P]);Object(s.useEffect)(()=>{P&&(async()=>{if(!P)throw new Error("no selected team");let t;try{t=(await I({season:e,pots:x,groups:N,selectedTeam:P})).pickedGroup}catch(e){return console.error(e),void S({error:"Could not determine the group"})}const a=N.slice();a[t]=[...a[t],P];const s=x[y].length>0?y:y+1;A({selectedTeam:null,pickedGroup:t,hungPot:x[s],currentPotNum:s,pots:x,groups:a})})()},[P]),Object(s.useEffect)(()=>{const e=x[y].findIndex(e=>e.host);W(e)},[a]);const R=y>=x.length;Object(s.useEffect)(()=>{const e=null==G?void 0:G.length;if(o&&e){const t=c(e-1);W(t)}},[o,G]),Object(s.useEffect)(()=>{R&&o&&l(!1)},[R,o]);const $=N.length;return n.a.createElement(E.a,null,n.a.createElement(f.a,null,n.a.createElement(b.a,{selectedTeams:P&&[P],initialPots:t,pots:x,currentPotNum:y}),n.a.createElement(h.a,{ref:M,maxTeams:x.length,currentPotNum:y,groups:N,possibleGroups:null,getGroupHeaderStyles:v})),n.a.createElement(g.a,null,!o&&n.a.createElement(w.a,{forceNoSelect:!!P,display:!R,displayTeams:C,selectedTeam:P,pot:G,onPick:W}),n.a.createElement(j.a,{long:!0,completed:R,selectedTeam:P,pickedGroup:T,possibleGroups:null,isDisplayPossibleGroupsText:!!P,numGroups:$,groupsElement:M,reset:r})))})},103:function(e,t,a){"use strict";a.r(t),t.default=function(){return new Worker(a.p+"worker.52a7325acc01b336c0d3.worker.js")}},87:function(e,t,a){"use strict";var s=a(0);Object.create;Object.create;function n(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function r(e,t,a){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,a),a}var o=class{constructor(){this.callbacks=new Map}add(e,t){this.callbacks.set(e,t)}addAndGetId(e){const t=Math.random().toString(36).slice(2);return this.add(t,e),t}resolve(e,t){this.getCallbackAndDelete(e)(null,t)}reject(e,t){this.getCallbackAndDelete(e)(t)}getCallbackAndDelete(e){const t=this.callbacks.get(e);if(!t)throw new Error("no resolver with id = "+e);return this.callbacks.delete(e),t}};const c=(e,t)=>(a,s)=>{a?t(a):e(s)};var l,u,i,m=class{constructor(){this.manager=new o}getPromise(e){return new Promise(async(t,a)=>{const s=c(t,a);this.manager.add(e,s)})}getPromiseWithId(e){return new Promise(async(t,a)=>{const s=c(t,a),n=this.manager.addAndGetId(s);e&&e(n)})}resolve(e,t){this.manager.resolve(e,t)}reject(e,t){this.manager.reject(e,t)}},d=a(91),p=a.n(d);l=new WeakMap,u=new WeakMap,i=new WeakMap;var b=class{constructor(e,t){l.set(this,void 0),u.set(this,new m),i.set(this,void 0),r(this,i,t),r(this,l,e),n(this,l).onmessage=e=>{const{messageId:t,data:a}=e.data;n(this,u).resolve(t,a)}}sendAndReceive(e){const t=n(this,u).getPromiseWithId(t=>{n(this,l).postMessage({messageId:t,data:e})});return void 0===n(this,i)?t:p()(t,n(this,i))}terminate(){n(this,l).terminate()}};t.a=e=>{const t=Object(s.useMemo)(()=>new b(new e,12e4),[]);return Object(s.useEffect)(()=>()=>{t.terminate()},[]),Object(s.useCallback)(t.sendAndReceive.bind(t),[t])}},89:function(e,t,a){"use strict";var s=a(0),n=a.n(s),r=a(2),o=a(73),c=a(67),l=a(71),u=a(96),i=a(68),m=a(66),d=a(79),p=a(80),b=a(72),h=a(81),f=a(88);const g=r.e`
  from {
    background-color: white;
    box-shadow: 0 0 20px #08f;
  }
  to {}
`,w=r.e`
  from {
    background-color: rgba(255, 255, 0, 0.5);
  }
  to {}
`,j=r.c`
  position: relative; /* enables glow */
  animation: ${g} 1s ease;
  box-shadow: 0 0 5px #6af;
`,E=r.c`
  animation: ${w} 3s ease-out normal forwards;
`;var k=Object(r.d)(m.a)`
  ${e=>e.possible&&j}
  ${e=>e.hasTeam&&E}
`;var v=Object(s.memo)(({team:e,possible:t})=>{var a;const r=Object(d.a)(e),[o,c]=Object(s.useState)(e),l=Object(s.useRef)(null),u=Object(s.useCallback)(()=>{c(e)},[e]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(k,{hasTeam:!!o,possible:t},o?n.a.createElement(b.a,{country:Object(p.a)(o)},null!==(a=o.shortName)&&void 0!==a?a:o.name):n.a.createElement(h.a,{ref:l})),e&&e!==r&&n.a.createElement(f.a,{from:`[data-cellid='${e.id}']`,to:l,duration:350,data:e,onAnimationEnd:u}))});var O=Object(s.memo)(({maxTeams:e,groupLetter:t,teams:a,potNum:s,possible:r,headerStyles:o})=>n.a.createElement(l.a,null,n.a.createElement("thead",null,n.a.createElement(i.a,null,n.a.createElement(m.a,null,n.a.createElement(u.a,{styles:o},"Group"," ",t)))),n.a.createElement("tbody",null,c(e).map(e=>n.a.createElement(i.a,{key:e},n.a.createElement(v,{team:a[e],possible:e===s&&r}))))));const y=r.d.div`
  display: flex;
  flex-flow: row wrap;

  & > * {
    flex: 1;
    flex-basis: 22%;
  }
`,P=Object(s.forwardRef)(({maxTeams:e,currentPotNum:t,groups:a,possibleGroups:s,getGroupHeaderStyles:r},c)=>n.a.createElement(y,{ref:c},null==a?void 0:a.map((a,c)=>{const l=Object(o.a)(c),u=null==r?void 0:r(c);return n.a.createElement(O,{key:l,maxTeams:e,groupLetter:l,teams:a,potNum:t,possible:!!(null==s?void 0:s.includes(c)),headerStyles:u})})));t.a=Object(s.memo)(P)}},0,[80]]);