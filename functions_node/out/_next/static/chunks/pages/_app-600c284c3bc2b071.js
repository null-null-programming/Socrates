(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8036:function(e,t,n){"use strict";n.d(t,{ET:function(){return un},hJ:function(){return lr},JU:function(){return li},QT:function(){return l3},PL:function(){return l8},ad:function(){return ll},cf:function(){return ur},Xo:function(){return lW},IO:function(){return lq},i3:function(){return uh},Bt:function(){return uc},pl:function(){return ue},TQ:function(){return lX},r7:function(){return ut},ar:function(){return lH},qs:function(){return ud}});var r,i,s,a,o,l,u,h=n(2238),c=n(8463),d=n(3333),f=n(4444),p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},m={},g=g||{},y=p||self;function v(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function w(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function _(e,t,n){return e.call.apply(e.bind,arguments)}function b(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function T(e,t,n){return(T=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_:b).apply(null,arguments)}function E(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function S(){this.s=this.s,this.o=this.o}S.prototype.s=!1,S.prototype.sa=function(){this.s||(this.s=!0,this.N())},S.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let A=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return -1};function C(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function k(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(v(n)){let t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function R(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};y.addEventListener("test",e,t),y.removeEventListener("test",e,t)}catch(e){}return e}();function P(e){return/^[\s\xa0]*$/.test(e)}function D(){var e=y.navigator;return e&&(e=e.userAgent)?e:""}function N(e){return -1!=D().indexOf(e)}function O(e){return O[" "](e),e}O[" "]=function(){};var L=N("Opera"),M=N("Trident")||N("MSIE"),V=N("Edge"),U=V||M,F=N("Gecko")&&!(-1!=D().toLowerCase().indexOf("webkit")&&!N("Edge"))&&!(N("Trident")||N("MSIE"))&&!N("Edge"),j=-1!=D().toLowerCase().indexOf("webkit")&&!N("Edge");function B(){var e=y.document;return e?e.documentMode:void 0}e:{var $,q="",z=($=D(),F?/rv:([^\);]+)(\)|;)/.exec($):V?/Edge\/([\d\.]+)/.exec($):M?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($):j?/WebKit\/(\S+)/.exec($):L?/(?:Version)[ \/]?(\S+)/.exec($):void 0);if(z&&(q=z?z[1]:""),M){var H=B();if(null!=H&&H>parseFloat(q)){i=String(H);break e}}i=q}var K=y.document&&M&&(B()||parseInt(i,10))||void 0;function G(e,t){if(R.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(F){e:{try{O(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:W[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&G.$.h.call(this)}}I(G,R);var W={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Q="closure_listenable_"+(1e6*Math.random()|0),X=0;function J(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++X,this.fa=this.ia=!1}function Y(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Z(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function ee(e){let t={};for(let n in e)t[n]=e[n];return t}let et="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function en(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t])e[n]=r[n];for(let t=0;t<et.length;t++)n=et[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function er(e){this.src=e,this.g={},this.h=0}function ei(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=A(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Y(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function es(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&!!n==s.capture&&s.la==r)return i}return -1}er.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=es(e,t,r,i);return -1<a?(t=e[a],n||(t.ia=!1)):((t=new J(t,this.src,s,!!r,i)).ia=n,e.push(t)),t};var ea="closure_lm_"+(1e6*Math.random()|0),eo={};function el(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=w(i)?!!i.capture:!!i,o=ed(e);if(o||(e[ea]=o=new er(e)),(n=o.add(t,n,r,a,s)).proxy)return n;if(r=function e(t){return ec.call(e.src,e.listener,t)},n.proxy=r,r.src=e,r.listener=n,e.addEventListener)x||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(eh(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eu(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Q])ei(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(eh(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ed(t))?(ei(n,e),0==n.h&&(n.src=null,t[ea]=null)):Y(e)}}}function eh(e){return e in eo?eo[e]:eo[e]="on"+e}function ec(e,t){if(e.fa)e=!0;else{t=new G(t,this);var n=e.listener,r=e.la||e.src;e.ia&&eu(e),e=n.call(r,t)}return e}function ed(e){return(e=e[ea])instanceof er?e:null}var ef="__closure_events_fn_"+(1e9*Math.random()>>>0);function ep(e){return"function"==typeof e?e:(e[ef]||(e[ef]=function(t){return e.handleEvent(t)}),e[ef])}function em(){S.call(this),this.i=new er(this),this.S=this,this.J=null}function eg(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new R(t,e);else if(t instanceof R)t.target=t.target||e;else{var i=t;en(t=new R(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=ey(a,r,!0,t)&&i}if(i=ey(a=t.g=e,r,!0,t)&&i,i=ey(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ey(a=t.g=n[s],r,!1,t)&&i}function ey(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.fa&&a.capture==n){var o=a.listener,l=a.la||a.src;a.ia&&ei(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}I(em,S),em.prototype[Q]=!0,em.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);else(i=w(i)?!!i.capture:!!i,r=ep(r),t&&t[Q])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=es(a=t.g[n],r,i,s))&&(Y(a[r]),Array.prototype.splice.call(a,r,1),0==a.length&&(delete t.g[n],t.h--))):t&&(t=ed(t))&&(n=t.g[n.toString()],t=-1,n&&(t=es(n,r,i,s)),(r=-1<t?n[t]:null)&&eu(r))}(this,e,t,n,r)},em.prototype.N=function(){if(em.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Y(n[r]);delete t.g[e],t.h--}}this.J=null},em.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},em.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var ev=y.JSON.stringify;class ew{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}class e_{constructor(){this.h=this.g=null}add(e,t){let n=eb.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var eb=new ew(()=>new eT,e=>e.reset());class eT{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let eE,eI=!1,eS=new e_,eA=()=>{let e=y.Promise.resolve(void 0);eE=()=>{e.then(eC)}};var eC=()=>{let e;for(var t;e=null,eS.g&&(e=eS.g,eS.g=eS.g.next,eS.g||(eS.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){y.setTimeout(()=>{throw e},0)}(e)}eb.j(t),100>eb.h&&(eb.h++,t.next=eb.g,eb.g=t)}eI=!1};function ek(e,t){em.call(this),this.h=e||1,this.g=t||y,this.j=T(this.qb,this),this.l=Date.now()}function eR(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function ex(e,t,n){if("function"==typeof e)n&&(e=T(e,n));else if(e&&"function"==typeof e.handleEvent)e=T(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:y.setTimeout(e,t||0)}I(ek,em),(u=ek.prototype).ga=!1,u.T=null,u.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),eg(this,"tick"),this.ga&&(eR(this),this.start()))}},u.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},u.N=function(){ek.$.N.call(this),eR(this),delete this.g};class eP extends S{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=ex(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eD(e){S.call(this),this.h=e,this.g={}}I(eD,S);var eN=[];function eO(e,t,n,r){Array.isArray(n)||(n&&(eN[0]=n.toString()),n=eN);for(var i=0;i<n.length;i++){var s=function e(t,n,r,i,s){if(i&&i.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=ep(r),t&&t[Q]?t.P(n,r,w(i)?!!i.capture:!!i,s):el(t,n,r,!0,i,s)}(t,n,r,i,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=ep(r),t&&t[Q]?t.O(n,r,w(i)?!!i.capture:!!i,s):el(t,n,r,!1,i,s)}(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function eL(e){Z(e.g,function(e,t){this.g.hasOwnProperty(t)&&eu(e)},e),e.g={}}function eM(){this.g=!0}function eV(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}}return ev(n)}catch(e){return t}}(e,n)+(r?" "+r:"")})}eD.prototype.N=function(){eD.$.N.call(this),eL(this)},eD.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},eM.prototype.Ea=function(){this.g=!1},eM.prototype.info=function(){};var eU={},eF=null;function ej(){return eF=eF||new em}function eB(e){R.call(this,eU.Ta,e)}function e$(e){let t=ej();eg(t,new eB(t))}function eq(e,t){R.call(this,eU.STAT_EVENT,e),this.stat=t}function ez(e){let t=ej();eg(t,new eq(t,e))}function eH(e,t){R.call(this,eU.Ua,e),this.size=t}function eK(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){e()},t)}eU.Ta="serverreachability",I(eB,R),eU.STAT_EVENT="statevent",I(eq,R),eU.Ua="timingevent",I(eH,R);var eG={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},eW={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function eQ(){}function eX(e){return e.h||(e.h=e.i())}function eJ(){}eQ.prototype.h=null;var eY={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function eZ(){R.call(this,"d")}function e0(){R.call(this,"c")}function e1(){}function e2(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new eD(this),this.P=e9,e=U?125:void 0,this.V=new ek(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new e4}function e4(){this.i=null,this.g="",this.h=!1}I(eZ,R),I(e0,R),I(e1,eQ),e1.prototype.g=function(){return new XMLHttpRequest},e1.prototype.i=function(){return{}},a=new e1;var e9=45e3,e6={},e5={};function e3(e,t,n){e.L=1,e.A=tm(th(t)),e.u=n,e.S=!0,e7(e,null)}function e7(e,t){e.G=Date.now(),tt(e),e.B=th(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),tk(n.i,"t",r),e.o=0,n=e.l.J,e.h=new e4,e.g=ny(e.l,n?t:null,!e.u),0<e.O&&(e.M=new eP(T(e.Pa,e,e.g),e.O)),eO(e.U,e.g,"readystatechange",e.nb),t=e.I?ee(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),e$(),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");a=2<=c.length&&"type"==c[1]?a+(h+"=")+u+"&":a+(h+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a})}(e.j,e.v,e.B,e.m,e.W,e.u)}function e8(e){return!!e.g&&"GET"==e.v&&2!=e.L&&e.l.Ha}function te(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if((i=function(e,t){var n=e.o,r=t.indexOf("\n",n);return -1==r?e5:isNaN(n=Number(t.substring(n,r)))?e6:(r+=1)+n>t.length?e5:(t=t.slice(r,r+n),e.o=r+n,t)}(e,n))==e5){4==t&&(e.s=4,ez(14),r=!1),eV(e.j,e.m,null,"[Incomplete Response]");break}else if(i==e6){e.s=4,ez(15),eV(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else eV(e.j,e.m,i,null),ta(e,i);e8(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=n.length||e.h.h||(e.s=1,ez(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nu(t),t.M=!0,ez(11))):(eV(e.j,e.m,n,"[Invalid Chunked Response]"),ts(e),ti(e))}function tt(e){e.Y=Date.now()+e.P,tn(e,e.P)}function tn(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=eK(T(e.lb,e),t)}function tr(e){e.C&&(y.clearTimeout(e.C),e.C=null)}function ti(e){0==e.l.H||e.J||nd(e.l,e)}function ts(e){tr(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,eR(e.V),eL(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ta(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||tL(n.i,e))){if(!e.K&&tL(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(n.g.G+3e3<e.G)nc(n),nt(n);else break e}nl(n),ez(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=eK(T(n.ib,n),6e3));if(1>=tO(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else np(n,11)}else if((e.K||n.g==e)&&nc(n),!P(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let o=i[t];if(n.V=o[0],o=o[1],2==n.H){if("c"==o[0]){n.K=o[1],n.pa=o[2];let t=o[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));let i=o[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(tM(s,s.h),s.h=null))}if(r.F){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,tp(r.I,r.F,e))}}if(n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),(r=n).wa=ng(r,r.J?r.pa:null,r.Y),e.K){tV(r.i,e);var a=r.L;a&&e.setTimeout(a),e.C&&(tr(e),tt(e)),r.g=e}else no(r);0<n.j.length&&nr(n)}else"stop"!=o[0]&&"close"!=o[0]||np(n,7)}else 3==n.H&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?np(n,7):ne(n):"noop"!=o[0]&&n.h&&n.h.Aa(o),n.A=0)}}e$(4)}catch(e){}}function to(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(v(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(v(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(v(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(u=e2.prototype).setTimeout=function(e){this.P=e},u.nb=function(e){e=e.target;let t=this.M;t&&3==t9(e)?t.l():this.Pa(e)},u.Pa=function(e){try{if(e==this.g)e:{let h=t9(this.g);var t=this.g.Ia();let c=this.g.da();if(!(3>h)&&(3!=h||U||this.g&&(this.h.h||this.g.ja()||t6(this.g)))){this.J||4!=h||7==t||(8==t||0>=c?e$(3):e$(2)),tr(this);var n=this.g.da();this.ca=n;t:if(e8(this)){var r=t6(this.g);e="";var i=r.length,s=4==t9(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ts(this),ti(this);var a="";break t}this.h.i=new y.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,a=this.h.g}else a=this.g.ja();if(this.i=200==n,function(e,t,n,r,i,s,a){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.j,this.v,this.B,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(o)){var u=o;break t}}u=null}if(n=u)eV(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ta(this,n);else{this.i=!1,this.s=3,ez(12),ts(this),ti(this);break e}}this.S?(te(this,h,a),U&&this.i&&3==h&&(eO(this.U,this.V,"tick",this.mb),this.V.start())):(eV(this.j,this.m,a,null),ta(this,a)),4==h&&ts(this),this.i&&!this.J&&(4==h?nd(this.l,this):(this.i=!1,tt(this)))}else(function(e){let t={};e=(e.g&&2<=t9(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(P(e[r]))continue;var n=function(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}(e[r]);let i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(let n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,ez(12)):(this.s=0,ez(13)),ts(this),ti(this)}}}catch(e){}finally{}},u.mb=function(){if(this.g){var e=t9(this.g),t=this.g.ja();this.o<t.length&&(tr(this),te(this,e,t),this.i&&4!=e&&tt(this))}},u.cancel=function(){this.J=!0,ts(this)},u.lb=function(){this.C=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.B),2!=this.L&&(e$(),ez(17)),ts(this),this.s=2,ti(this)):tn(this,this.Y-e)};var tl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tu(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof tu){this.h=e.h,tc(this,e.j),this.s=e.s,this.g=e.g,td(this,e.m),this.l=e.l;var t=e.i,n=new tI;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),tf(this,n),this.o=e.o}else e&&(t=String(e).match(tl))?(this.h=!1,tc(this,t[1]||"",!0),this.s=tg(t[2]||""),this.g=tg(t[3]||"",!0),td(this,t[4]),this.l=tg(t[5]||"",!0),tf(this,t[6]||"",!0),this.o=tg(t[7]||"")):(this.h=!1,this.i=new tI(null,this.h))}function th(e){return new tu(e)}function tc(e,t,n){e.j=n?tg(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function td(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function tf(e,t,n){var r,i;t instanceof tI?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(tS(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(tA(this,t),tk(this,n,e))},r)),r.j=i):(n||(t=ty(t,tT)),e.i=new tI(t,e.h))}function tp(e,t,n){e.i.set(t,n)}function tm(e){return tp(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function tg(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ty(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,tv),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tv(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}tu.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ty(t,tw,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(ty(t,tw,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ty(n,"/"==n.charAt(0)?tb:t_,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ty(n,tE)),e.join("")};var tw=/[#\/\?@]/g,t_=/[#\?:]/g,tb=/[#\?]/g,tT=/[#\?@]/g,tE=/#/g;function tI(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tS(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function tA(e,t){tS(e),t=tR(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tC(e,t){return tS(e),t=tR(e,t),e.g.has(t)}function tk(e,t,n){tA(e,t),0<n.length&&(e.i=null,e.g.set(tR(e,t),C(n)),e.h+=n.length)}function tR(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(u=tI.prototype).add=function(e,t){tS(this),this.i=null,e=tR(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},u.forEach=function(e,t){tS(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},u.ta=function(){tS(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},u.Z=function(e){tS(this);let t=[];if("string"==typeof e)tC(this,e)&&(t=t.concat(this.g.get(tR(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},u.set=function(e,t){return tS(this),this.i=null,tC(this,e=tR(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},u.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},u.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let s=encodeURIComponent(String(r)),a=this.Z(r);for(r=0;r<a.length;r++){var i=s;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")};var tx=class{constructor(e,t){this.g=e,this.map=t}};function tP(e){this.l=e||tD,e=y.PerformanceNavigationTiming?0<(e=y.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(y.g&&y.g.Ka&&y.g.Ka()&&y.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tD=10;function tN(e){return!!e.h||!!e.g&&e.g.size>=e.j}function tO(e){return e.h?1:e.g?e.g.size:0}function tL(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tM(e,t){e.g?e.g.add(t):e.h=t}function tV(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tU(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.F);return t}return C(e.i)}tP.prototype.cancel=function(){if(this.i=tU(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var tF=class{stringify(e){return y.JSON.stringify(e,void 0)}parse(e){return y.JSON.parse(e,void 0)}};function tj(){this.g=new tF}function tB(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function t$(e){this.l=e.ec||null,this.j=e.ob||!1}function tq(e,t){em.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=tz,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}I(t$,eQ),t$.prototype.g=function(){return new tq(this.l,this.j)},t$.prototype.i=(r={},function(){return r}),I(tq,em);var tz=0;function tH(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function tK(e){e.readyState=4,e.l=null,e.j=null,e.A=null,tG(e)}function tG(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(u=tq.prototype).open=function(e,t){if(this.readyState!=tz)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,tG(this)},u.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||y).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},u.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tK(this)),this.readyState=tz},u.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tG(this)),this.g&&(this.readyState=3,tG(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==y.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tH(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},u.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tK(this):tG(this),3==this.readyState&&tH(this)}},u.Za=function(e){this.g&&(this.response=this.responseText=e,tK(this))},u.Ya=function(e){this.g&&(this.response=e,tK(this))},u.ka=function(){this.g&&tK(this)},u.setRequestHeader=function(e,t){this.v.append(e,t)},u.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},u.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(tq.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var tW=y.JSON.parse;function tQ(e){em.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tX,this.L=this.M=!1}I(tQ,em);var tX="",tJ=/^https?$/i,tY=["POST","PUT"];function tZ(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,t0(e),t2(e)}function t0(e){e.F||(e.F=!0,eg(e,"complete"),eg(e,"error"))}function t1(e){if(e.h&&void 0!==g&&(!e.C[1]||4!=t9(e)||2!=e.da())){if(e.v&&4==t9(e))ex(e.La,0,e);else if(eg(e,"readystatechange"),4==t9(e)){e.h=!1;try{let a=e.da();switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,r=!0;break;default:r=!1}if(!(t=r)){if(n=0===a){var i=String(e.I).match(tl)[1]||null;!i&&y.self&&y.self.location&&(i=y.self.location.protocol.slice(0,-1)),n=!tJ.test(i?i.toLowerCase():"")}t=n}if(t)eg(e,"complete"),eg(e,"success");else{e.m=6;try{var s=2<t9(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",t0(e)}}finally{t2(e)}}}}function t2(e,t){if(e.g){t4(e);let n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||eg(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function t4(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(y.clearTimeout(e.A),e.A=null)}function t9(e){return e.g?e.g.readyState:0}function t6(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case tX:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function t5(e){let t="";return Z(e,function(e,n){t+=n+":"+e+"\r\n"}),t}function t3(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=t5(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):tp(e,t,n))}function t7(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function t8(e){this.Ga=0,this.j=[],this.l=new eM,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=t7("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=t7("baseRetryDelayMs",5e3,e),this.hb=t7("retryDelaySeedMs",1e4,e),this.eb=t7("forwardChannelMaxRetries",2,e),this.xa=t7("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new tP(e&&e.concurrentRequestLimit),this.Ja=new tj,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function ne(e){if(nn(e),3==e.H){var t=e.W++,n=th(e.I);if(tp(n,"SID",e.K),tp(n,"RID",t),tp(n,"TYPE","terminate"),ns(e,n),(t=new e2(e,e.l,t)).L=2,t.A=tm(th(n)),n=!1,y.navigator&&y.navigator.sendBeacon)try{n=y.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!n&&y.Image&&((new Image).src=t.A,n=!0),n||(t.g=ny(t.l,null),t.g.ha(t.A)),t.G=Date.now(),tt(t)}nm(e)}function nt(e){e.g&&(nu(e),e.g.cancel(),e.g=null)}function nn(e){nt(e),e.u&&(y.clearTimeout(e.u),e.u=null),nc(e),e.i.cancel(),e.m&&("number"==typeof e.m&&y.clearTimeout(e.m),e.m=null)}function nr(e){if(!tN(e.i)&&!e.m){e.m=!0;var t=e.Na;eE||eA(),eI||(eE(),eI=!0),eS.add(t,e),e.C=0}}function ni(e,t){var n;n=t?t.m:e.W++;let r=th(e.I);tp(r,"SID",e.K),tp(r,"RID",n),tp(r,"AID",e.V),ns(e,r),e.o&&e.s&&t3(r,e.o,e.s),n=new e2(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=na(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),tM(e.i,n),e3(n,r,t)}function ns(e,t){e.na&&Z(e.na,function(e,n){tp(t,n,e)}),e.h&&to({},function(e,n){tp(t,n,e)})}function na(e,t,n){n=Math.min(e.j.length,n);var r=e.h?T(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=i[a].g,o=i[a].map;if(0>(n-=t))t=Math.max(0,i[a].g-100),s=!1;else try{!function(e,t,n){let r=n||"";try{to(e,function(e,n){let i=e;w(e)&&(i=ev(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+n+"_")}catch(e){r&&r(o)}}if(s){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function no(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;eE||eA(),eI||(eE(),eI=!0),eS.add(t,e),e.A=0}}function nl(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=eK(T(e.Ma,e),nf(e,e.A)),e.A++,!0)}function nu(e){null!=e.B&&(y.clearTimeout(e.B),e.B=null)}function nh(e){e.g=new e2(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=th(e.wa);tp(t,"RID","rpc"),tp(t,"SID",e.K),tp(t,"AID",e.V),tp(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&tp(t,"TO",e.qa),tp(t,"TYPE","xmlhttp"),ns(e,t),e.o&&e.s&&t3(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=tm(th(t)),n.u=null,n.S=!0,e7(n,e)}function nc(e){null!=e.v&&(y.clearTimeout(e.v),e.v=null)}function nd(e,t){var n=null;if(e.g==t){nc(e),nu(e),e.g=null;var r=2}else{if(!tL(e.i,t))return;n=t.F,tV(e.i,t),r=1}if(0!=e.H){if(t.i){if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.G;var i,s=e.C;eg(r=ej(),new eH(r,n)),nr(e)}else no(e)}else if(3==(s=t.s)||0==s&&0<t.ca||!(1==r&&(i=t,!(tO(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=i.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=eK(T(e.Na,e,i),nf(e,e.C)),e.C++,!0)))||2==r&&nl(e)))switch(n&&0<n.length&&((t=e.i).i=t.i.concat(n)),s){case 1:np(e,5);break;case 4:np(e,10);break;case 3:np(e,6);break;default:np(e,2)}}}function nf(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function np(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=T(e.pb,e);n||(n=new tu("//www.google.com/images/cleardot.gif"),y.location&&"http"==y.location.protocol||tc(n,"https"),tm(n)),function(e,t){let n=new eM;if(y.Image){let r=new Image;r.onload=E(tB,n,r,"TestLoadImage: loaded",!0,t),r.onerror=E(tB,n,r,"TestLoadImage: error",!1,t),r.onabort=E(tB,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=E(tB,n,r,"TestLoadImage: timeout",!1,t),y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(n.toString(),r)}else ez(2);e.H=0,e.h&&e.h.za(t),nm(e),nn(e)}function nm(e){if(e.H=0,e.ma=[],e.h){let t=tU(e.i);(0!=t.length||0!=e.j.length)&&(k(e.ma,t),k(e.ma,e.j),e.i.i.length=0,C(e.j),e.j.length=0),e.h.ya()}}function ng(e,t,n){var r=n instanceof tu?th(n):new tu(n);if(""!=r.g)t&&(r.g=t+"."+r.g),td(r,r.m);else{var i=y.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new tu(null);r&&tc(s,r),t&&(s.g=t),i&&td(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&tp(r,n,t),tp(r,"VER",e.ra),ns(e,r),r}function ny(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tQ(e.Ha&&!e.va?new t$({ob:n}):e.va)).Oa(e.J),t}function nv(){}function nw(){if(M&&!(10<=Number(K)))throw Error("Environmental error: no available transport.")}function n_(e,t){em.call(this),this.g=new t8(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!P(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!P(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new nE(this)}function nb(e){eZ.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function nT(){e0.call(this),this.status=1}function nE(e){this.g=e}function nI(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function nS(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^n&(i^s))+r[0]+3614090360&4294967295;a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[1]+3905402710&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[2]+606105819&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[3]+3250441966&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[4]+4118548399&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[5]+1200080426&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[6]+2821735955&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[7]+4249261313&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[8]+1770035416&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[9]+2336552879&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[10]+4294925233&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[11]+2304563134&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[12]+1804603682&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[13]+4254626195&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[14]+2792965006&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[15]+1236535329&4294967295,n=i+(a<<22&4294967295|a>>>10),a=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[12]+2368359562&4294967295,a=t+((n=i+(a<<20&4294967295|a>>>12))^i^s)+r[5]+4294588738&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[8]+2272392833&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[11]+1839030562&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[14]+4259657740&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[1]+2763975236&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[4]+1272893353&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[7]+4139469664&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[10]+3200236656&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[13]+681279174&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[0]+3936430074&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[3]+3572445317&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[6]+76029189&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[9]+3654602809&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[12]+3873151461&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[15]+530742520&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[2]+3299628645&4294967295,n=i+(a<<23&4294967295|a>>>9),a=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function nA(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}(u=tQ.prototype).Oa=function(e){this.M=e},u.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():a.g(),this.C=this.u?eX(this.u):eX(a),this.g.onreadystatechange=T(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){tZ(this,e);return}if(e=n||"",n=new Map(this.headers),r){if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if("function"==typeof r.keys&&"function"==typeof r.get)for(let e of r.keys())n.set(e,r.get(e));else throw Error("Unknown input type for opt_headers: "+String(r))}for(let[s,a]of(r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=y.FormData&&e instanceof y.FormData,!(0<=A(tY,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;t4(this),0<this.B&&((this.L=(s=this.g,M&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=T(this.ua,this)):this.A=ex(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){tZ(this,e)}},u.ua=function(){void 0!==g&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,eg(this,"timeout"),this.abort(8))},u.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,eg(this,"complete"),eg(this,"abort"),t2(this))},u.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),t2(this,!0)),tQ.$.N.call(this)},u.La=function(){this.s||(this.G||this.v||this.l?t1(this):this.kb())},u.kb=function(){t1(this)},u.isActive=function(){return!!this.g},u.da=function(){try{return 2<t9(this)?this.g.status:-1}catch(e){return -1}},u.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},u.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),tW(t)}},u.Ia=function(){return this.m},u.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(u=t8.prototype).ra=8,u.H=1,u.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let i=new e2(this,this.l,e),s=this.s;if(this.U&&(s?en(s=ee(s),this.U):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&"string"==typeof(r=r.map.__data__)){r=r.length;break t}r=void 0}if(void 0===r)break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=na(this,i,t),tp(n=th(this.I),"RID",e),tp(n,"CVER",22),this.F&&tp(n,"X-HTTP-Session-Id",this.F),ns(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(t5(s)))+"&"+t:this.o&&t3(n,this.o,s)),tM(this.i,i),this.bb&&tp(n,"TYPE","init"),this.P?(tp(n,"$req",t),tp(n,"SID","null"),i.aa=!0,e3(i,n,null)):e3(i,n,t),this.H=2}}else 3==this.H&&(e?ni(this,e):0==this.j.length||tN(this.i)||ni(this))}},u.Ma=function(){if(this.u=null,nh(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=eK(T(this.jb,this),e)}},u.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ez(10),nt(this),nh(this))},u.ib=function(){null!=this.v&&(this.v=null,nt(this),nl(this),ez(19))},u.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ez(2)):(this.l.info("Failed to ping google.com"),ez(1))},u.isActive=function(){return!!this.h&&this.h.isActive(this)},(u=nv.prototype).Ba=function(){},u.Aa=function(){},u.za=function(){},u.ya=function(){},u.isActive=function(){return!0},u.Va=function(){},nw.prototype.g=function(e,t){return new n_(e,t)},I(n_,em),n_.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ez(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=ng(e,null,e.Y),nr(e)},n_.prototype.close=function(){ne(this.g)},n_.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=ev(e),e=n);t.j.push(new tx(t.fb++,e)),3==t.H&&nr(t)},n_.prototype.N=function(){this.g.h=null,delete this.j,ne(this.g),delete this.g,n_.$.N.call(this)},I(nb,eZ),I(nT,e0),I(nE,nv),nE.prototype.Ba=function(){eg(this.g,"a")},nE.prototype.Aa=function(e){eg(this.g,new nb(e))},nE.prototype.za=function(e){eg(this.g,new nT)},nE.prototype.ya=function(){eg(this.g,"b")},I(nI,function(){this.blockSize=-1}),nI.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},nI.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)nS(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){nS(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){nS(this,r),i=0;break}}this.h=i,this.i+=t},nI.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var nC={};function nk(e){return -128<=e&&128>e?Object.prototype.hasOwnProperty.call(nC,e)?nC[e]:nC[e]=new nA([0|e],0>e?-1:0):new nA([0|e],0>e?-1:0)}function nR(e){if(isNaN(e)||!isFinite(e))return nP;if(0>e)return nM(nR(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=nx;return new nA(t,0)}var nx=4294967296,nP=nk(0),nD=nk(1),nN=nk(16777216);function nO(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function nL(e){return -1==e.h}function nM(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new nA(n,~e.h).add(nD)}function nV(e,t){return e.add(nM(t))}function nU(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function nF(e,t){this.g=e,this.h=t}function nj(e,t){if(nO(t))throw Error("division by zero");if(nO(e))return new nF(nP,nP);if(nL(e))return t=nj(nM(e),t),new nF(nM(t.g),nM(t.h));if(nL(t))return t=nj(e,nM(t)),new nF(nM(t.g),t.h);if(30<e.g.length){if(nL(e)||nL(t))throw Error("slowDivide_ only works with positive integers.");for(var n=nD,r=t;0>=r.X(e);)n=nB(n),r=nB(r);var i=n$(n,1),s=n$(r,1);for(r=n$(r,2),n=n$(n,2);!nO(r);){var a=s.add(r);0>=a.X(e)&&(i=i.add(n),s=a),r=n$(r,1),n=n$(n,1)}return t=nV(e,i.R(t)),new nF(i,t)}for(i=nP;0<=e.X(t);){for(r=48>=(r=Math.ceil(Math.log(n=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,r-48),a=(s=nR(n)).R(t);nL(a)||0<a.X(e);)n-=r,a=(s=nR(n)).R(t);nO(s)&&(s=nD),i=i.add(s),e=nV(e,a)}return new nF(i,e)}function nB(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new nA(n,e.h)}function n$(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new nA(i,e.h)}(u=nA.prototype).ea=function(){if(nL(this))return-nM(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:nx+r)*t,t*=nx}return e},u.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(nO(this))return"0";if(nL(this))return"-"+nM(this).toString(e);for(var t=nR(Math.pow(e,6)),n=this,r="";;){var i=nj(n,t).g,s=((0<(n=nV(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(nO(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},u.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},u.X=function(e){return nL(e=nV(this,e))?-1:nO(e)?0:1},u.abs=function(){return nL(this)?nM(this):this},u.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),a=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=a>>>16,s&=65535,a&=65535,n[i]=a<<16|s}return new nA(n,-2147483648&n[n.length-1]?-1:0)},u.R=function(e){if(nO(this)||nO(e))return nP;if(nL(this))return nL(e)?nM(this).R(nM(e)):nM(nM(this).R(e));if(nL(e))return nM(this.R(nM(e)));if(0>this.X(nN)&&0>e.X(nN))return nR(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,a=65535&this.D(r),o=e.D(i)>>>16,l=65535&e.D(i);n[2*r+2*i]+=a*l,nU(n,2*r+2*i),n[2*r+2*i+1]+=s*l,nU(n,2*r+2*i+1),n[2*r+2*i+1]+=a*o,nU(n,2*r+2*i+1),n[2*r+2*i+2]+=s*o,nU(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new nA(n,0)},u.gb=function(e){return nj(this,e).h},u.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new nA(n,this.h&e.h)},u.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new nA(n,this.h|e.h)},u.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new nA(n,this.h^e.h)},nw.prototype.createWebChannel=nw.prototype.g,n_.prototype.send=n_.prototype.u,n_.prototype.open=n_.prototype.m,n_.prototype.close=n_.prototype.close,eG.NO_ERROR=0,eG.TIMEOUT=8,eG.HTTP_ERROR=6,eW.COMPLETE="complete",eJ.EventType=eY,eY.OPEN="a",eY.CLOSE="b",eY.ERROR="c",eY.MESSAGE="d",em.prototype.listen=em.prototype.O,tQ.prototype.listenOnce=tQ.prototype.P,tQ.prototype.getLastError=tQ.prototype.Sa,tQ.prototype.getLastErrorCode=tQ.prototype.Ia,tQ.prototype.getStatus=tQ.prototype.da,tQ.prototype.getResponseJson=tQ.prototype.Wa,tQ.prototype.getResponseText=tQ.prototype.ja,tQ.prototype.send=tQ.prototype.ha,tQ.prototype.setWithCredentials=tQ.prototype.Oa,nI.prototype.digest=nI.prototype.l,nI.prototype.reset=nI.prototype.reset,nI.prototype.update=nI.prototype.j,nA.prototype.add=nA.prototype.add,nA.prototype.multiply=nA.prototype.R,nA.prototype.modulo=nA.prototype.gb,nA.prototype.compare=nA.prototype.X,nA.prototype.toNumber=nA.prototype.ea,nA.prototype.toString=nA.prototype.toString,nA.prototype.getBits=nA.prototype.D,nA.fromNumber=nR,nA.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return nM(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=nR(Math.pow(n,8)),i=nP,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+a),n);8>a?(a=nR(Math.pow(n,a)),i=i.R(a).add(nR(o))):i=(i=i.R(r)).add(nR(o))}return i};var nq=m.createWebChannelTransport=function(){return new nw},nz=m.getStatEventTarget=function(){return ej()},nH=m.ErrorCode=eG,nK=m.EventType=eW,nG=m.Event=eU,nW=m.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20};m.FetchXmlHttpFactory=t$;var nQ=m.WebChannel=eJ,nX=m.XhrIo=tQ,nJ=m.Md5=nI,nY=m.Integer=nA,nZ=n(3454);let n0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}n1.UNAUTHENTICATED=new n1(null),n1.GOOGLE_CREDENTIALS=new n1("google-credentials-uid"),n1.FIRST_PARTY=new n1("first-party-uid"),n1.MOCK_USER=new n1("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n2="10.8.0",n4=new d.Yd("@firebase/firestore");function n9(){return n4.logLevel}function n6(e,...t){if(n4.logLevel<=d.in.DEBUG){let n=t.map(n7);n4.debug(`Firestore (${n2}): ${e}`,...n)}}function n5(e,...t){if(n4.logLevel<=d.in.ERROR){let n=t.map(n7);n4.error(`Firestore (${n2}): ${e}`,...n)}}function n3(e,...t){if(n4.logLevel<=d.in.WARN){let n=t.map(n7);n4.warn(`Firestore (${n2}): ${e}`,...n)}}function n7(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n8(e="Unexpected state"){let t=`FIRESTORE (${n2}) INTERNAL ASSERTION FAILED: `+e;throw n5(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let re={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class rt extends f.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ri{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(n1.UNAUTHENTICATED))}shutdown(){}}class rs{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ra{constructor(e){this.t=e,this.currentUser=n1.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new rn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rn,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{n6("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(n6("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rn)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(n6("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||n8(),new rr(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||n8(),new n1(e)}}class ro{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=n1.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class rl{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new ro(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(n1.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ru{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rh{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let n=e=>{null!=e.error&&n6("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,n6("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{n6("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):n6("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||n8(),this.R=e.token,new ru(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function rd(e,t){return e<t?-1:e>t?1:0}function rf(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new rt(re.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new rt(re.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rp.fromMillis(Date.now())}static fromDate(e){return rp.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new rp(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?rd(this.nanoseconds,e.nanoseconds):rd(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.timestamp=e}static fromTimestamp(e){return new rm(e)}static min(){return new rm(new rp(0,0))}static max(){return new rm(new rp(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t,n){void 0===t?t=0:t>e.length&&n8(),void 0===n?n=e.length-t:n>e.length-t&&n8(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===rg.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof rg?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ry extends rg{construct(e,t,n){return new ry(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new rt(re.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new ry(t)}static emptyPath(){return new ry([])}}let rv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rw extends rg{construct(e,t,n){return new rw(e,t,n)}static isValidIdentifier(e){return rv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rw.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new rw(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new rt(re.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new rt(re.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new rt(re.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new rt(re.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rw(t)}static emptyPath(){return new rw([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.path=e}static fromPath(e){return new r_(ry.fromString(e))}static fromName(e){return new r_(ry.fromString(e).popFirst(5))}static empty(){return new r_(ry.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ry.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ry.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new r_(new ry(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}rb.UNKNOWN_ID=-1;class rT{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new rT(rm.min(),r_.empty(),-1)}static max(){return new rT(rm.max(),r_.empty(),-1)}}class rE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI(e){if(e.code!==re.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;n6("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&n8(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new rS((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof rS?t:rS.resolve(t)}catch(e){return rS.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):rS.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):rS.reject(t)}static resolve(e){return new rS((t,n)=>{t(e)})}static reject(e){return new rS((t,n)=>{n(e)})}static waitFor(e){return new rS((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=rS.resolve(!1);for(let n of e)t=t.next(e=>e?rS.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new rS((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new rS((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new rn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new rR(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{let n=rO(t.target.error);this.V.reject(new rR(e,n))}}static open(e,t,n,r){try{return new rA(t,e.transaction(r,n))}catch(e){throw new rR(t,e)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(n6("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){return new rP(this.transaction.objectStore(e))}}class rC{constructor(e,t,n){this.name=e,this.version=t,this.p=n,12.2===rC.S((0,f.z$)())&&n5("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return n6("SimpleDb","Removing database:",e),rD(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,f.hl)())return!1;if(rC.C())return!0;let e=(0,f.z$)(),t=rC.S(e),n=rC.v(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static C(){var e;return void 0!==nZ&&"YES"===(null===(e=nZ.__PRIVATE_env)||void 0===e?void 0:e.F)}static M(e,t){return e.store(t)}static S(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i);return Number(t?t[1].split("_").slice(0,2).join("."):"-1")}static v(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}async O(e){return this.db||(n6("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{let r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{t(e.target.result)},r.onblocked=()=>{n(new rR(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{let r=t.target.error;"VersionError"===r.name?n(new rt(re.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new rt(re.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new rR(e,r))},r.onupgradeneeded=e=>{n6("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.p.N(t,r.transaction,e.oldVersion,this.version).next(()=>{n6("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.O(e);let t=rA.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.g(),e)).catch(e=>(t.abort(e),rS.reject(e))).toPromise();return s.catch(()=>{}),await t.m,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(n6("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class rk{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return rD(this.k.delete())}}class rR extends rt{constructor(e,t){super(re.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function rx(e){return"IndexedDbTransactionError"===e.name}class rP{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(n6("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(n6("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),rD(n)}add(e){return n6("SimpleDb","ADD",this.store.name,e,e),rD(this.store.add(e))}get(e){return rD(this.store.get(e)).next(t=>(void 0===t&&(t=null),n6("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return n6("SimpleDb","DELETE",this.store.name,e),rD(this.store.delete(e))}count(){return n6("SimpleDb","COUNT",this.store.name),rD(this.store.count())}W(e,t){let n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){let e=r.getAll(n.range);return new rS((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{let e=this.cursor(n),t=[];return this.G(e,(e,n)=>{t.push(n)}).next(()=>t)}}j(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new rS((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}H(e,t){n6("SimpleDb","DELETE ALL",this.store.name);let n=this.options(e,t);n.J=!1;let r=this.cursor(n);return this.G(r,(e,t,n)=>n.delete())}Y(e,t){let n;t?n=e:(n={},t=e);let r=this.cursor(n);return this.G(r,t)}Z(e){let t=this.cursor({});return new rS((n,r)=>{t.onerror=e=>{r(rO(e.target.error))},t.onsuccess=t=>{let r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}G(e,t){let n=[];return new rS((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void r();let s=new rk(i),a=t(i.primaryKey,i.value,s);if(a instanceof rS){let e=a.catch(e=>(s.done(),rS.reject(e)));n.push(e)}s.isDone?r():null===s.$?i.continue():i.continue(s.$)}}).next(()=>rS.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.J?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function rD(e){return new rS((t,n)=>{e.onsuccess=e=>{t(e.target.result)},e.onerror=e=>{n(rO(e.target.error))}})}let rN=!1;function rO(e){let t=rC.S((0,f.z$)());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new rt("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return rN||(rN=!0,setTimeout(()=>{throw e},0)),e}}return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.oe&&this.oe(e),e}}function rM(e){return null==e}function rV(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rU(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function rF(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function rj(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}rL._e=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(e,t){this.comparator=e,this.root=t||rq.EMPTY}insert(e,t){return new rB(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rq.BLACK,null,null))}remove(e){return new rB(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rq.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new r$(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new r$(this.root,e,this.comparator,!1)}getReverseIterator(){return new r$(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new r$(this.root,e,this.comparator,!0)}}class r${constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rq{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:rq.RED,this.left=null!=r?r:rq.EMPTY,this.right=null!=i?i:rq.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new rq(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return rq.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return rq.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,rq.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,rq.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw n8();let e=this.left.check();if(e!==this.right.check())throw n8();return e+(this.isRed()?0:1)}}rq.EMPTY=null,rq.RED=!0,rq.BLACK=!1,rq.EMPTY=new class{constructor(){this.size=0}get key(){throw n8()}get value(){throw n8()}get color(){throw n8()}get left(){throw n8()}get right(){throw n8()}copy(e,t,n,r,i){return this}insert(e,t,n){return new rq(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rz{constructor(e){this.comparator=e,this.data=new rB(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rH(this.data.getIterator())}getIteratorFrom(e){return new rH(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof rz)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new rz(this.comparator);return t.data=e,t}}class rH{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rK{constructor(e){this.fields=e,e.sort(rw.comparator)}static empty(){return new rK([])}unionWith(e){let t=new rz(rw.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new rK(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rf(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rG extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rW{constructor(e){this.binaryString=e}static fromBase64String(e){return new rW(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new rG("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new rW(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return rd(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rW.EMPTY_BYTE_STRING=new rW("");let rQ=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rX(e){if(e||n8(),"string"==typeof e){let t=0,n=rQ.exec(e);if(n||n8(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:rJ(e.seconds),nanos:rJ(e.nanos)}}function rJ(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function rY(e){return"string"==typeof e?rW.fromBase64String(e):rW.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rZ(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function r0(e){let t=e.mapValue.fields.__previous_value__;return rZ(t)?r0(t):t}function r1(e){let t=rX(e.mapValue.fields.__local_write_time__.timestampValue);return new rp(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class r4{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new r4("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof r4&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r9={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function r6(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rZ(e)?4:iu(e)?9007199254740991:10:n8()}function r5(e,t){if(e===t)return!0;let n=r6(e);if(n!==r6(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return r1(e).isEqual(r1(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=rX(e.timestampValue),r=rX(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return rY(e.bytesValue).isEqual(rY(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return rJ(e.geoPointValue.latitude)===rJ(t.geoPointValue.latitude)&&rJ(e.geoPointValue.longitude)===rJ(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return rJ(e.integerValue)===rJ(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=rJ(e.doubleValue),r=rJ(t.doubleValue);return n===r?rV(n)===rV(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return rf(e.arrayValue.values||[],t.arrayValue.values||[],r5);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(rU(n)!==rU(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!r5(n[e],r[e])))return!1;return!0}(e,t);default:return n8()}}function r3(e,t){return void 0!==(e.values||[]).find(e=>r5(e,t))}function r7(e,t){if(e===t)return 0;let n=r6(e),r=r6(t);if(n!==r)return rd(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return rd(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=rJ(e.integerValue||e.doubleValue),r=rJ(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return r8(e.timestampValue,t.timestampValue);case 4:return r8(r1(e),r1(t));case 5:return rd(e.stringValue,t.stringValue);case 6:return function(e,t){let n=rY(e),r=rY(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=rd(n[e],r[e]);if(0!==t)return t}return rd(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=rd(rJ(e.latitude),rJ(t.latitude));return 0!==n?n:rd(rJ(e.longitude),rJ(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=r7(n[e],r[e]);if(t)return t}return rd(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===r9.mapValue&&t===r9.mapValue)return 0;if(e===r9.mapValue)return 1;if(t===r9.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=rd(r[e],s[e]);if(0!==t)return t;let a=r7(n[r[e]],i[s[e]]);if(0!==a)return a}return rd(r.length,s.length)}(e.mapValue,t.mapValue);default:throw n8()}}function r8(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return rd(e,t);let n=rX(e),r=rX(t),i=rd(n.seconds,r.seconds);return 0!==i?i:rd(n.nanos,r.nanos)}function ie(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=rX(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?rY(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,r_.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=ie(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${ie(e.fields[i])}`;return n+"}"}(e.mapValue):n8()}function it(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ir(e){return!!e&&"integerValue"in e}function ii(e){return!!e&&"arrayValue"in e}function is(e){return!!e&&"nullValue"in e}function ia(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function io(e){return!!e&&"mapValue"in e}function il(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return rF(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=il(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=il(e.arrayValue.values[n]);return t}return Object.assign({},e)}function iu(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this.value=e}static empty(){return new ih({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!io(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=il(t)}setAll(e){let t=rw.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=il(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());io(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return r5(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];io(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(rF(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new ih(il(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new ic(e,0,rm.min(),rm.min(),rm.min(),ih.empty(),0)}static newFoundDocument(e,t,n,r){return new ic(e,1,t,rm.min(),n,r,0)}static newNoDocument(e,t){return new ic(e,2,t,rm.min(),rm.min(),ih.empty(),0)}static newUnknownDocument(e,t){return new ic(e,3,t,rm.min(),rm.min(),ih.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(rm.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ih.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ih.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rm.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ic&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ic(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,t){this.position=e,this.inclusive=t}}function ip(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?r_.comparator(r_.fromName(a.referenceValue),n.key):r7(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function im(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!r5(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{}class iv extends iy{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new iT(e,t,n):"array-contains"===t?new iA(e,n):"in"===t?new iC(e,n):"not-in"===t?new ik(e,n):"array-contains-any"===t?new iR(e,n):new iv(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new iE(e,n):new iI(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(r7(t,this.value)):null!==t&&r6(this.value)===r6(t)&&this.matchesComparison(r7(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return n8()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class iw extends iy{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new iw(e,t)}matches(e){return i_(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function i_(e){return"and"===e.op}function ib(e){for(let t of e.filters)if(t instanceof iw)return!1;return!0}class iT extends iv{constructor(e,t,n){super(e,t,n),this.key=r_.fromName(n.referenceValue)}matches(e){let t=r_.comparator(e.key,this.key);return this.matchesComparison(t)}}class iE extends iv{constructor(e,t){super(e,"in",t),this.keys=iS("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class iI extends iv{constructor(e,t){super(e,"not-in",t),this.keys=iS("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function iS(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>r_.fromName(e.referenceValue))}class iA extends iv{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return ii(t)&&r3(t.arrayValue,this.value)}}class iC extends iv{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&r3(this.value.arrayValue,t)}}class ik extends iv{constructor(e,t){super(e,"not-in",t)}matches(e){if(r3(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!r3(this.value.arrayValue,t)}}class iR extends iv{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!ii(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>r3(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ce=null}}function iP(e,t=null,n=[],r=[],i=null,s=null,a=null){return new ix(e,t,n,r,i,s,a)}function iD(e){if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof iv)return t.field.canonicalString()+t.op.toString()+ie(t.value);if(ib(t)&&i_(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),rM(e.limit)||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>ie(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>ie(e)).join(",")),e.ce=t}return e.ce}function iN(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof iv?n instanceof iv&&t.op===n.op&&t.field.isEqual(n.field)&&r5(t.value,n.value):t instanceof iw?n instanceof iw&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void n8()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!im(e.startAt,t.startAt)&&im(e.endAt,t.endAt)}function iO(e){return r_.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function iM(e){return new iL(e)}function iV(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function iU(e){return null!==e.collectionGroup}function iF(e){if(null===e.le){let t;e.le=[];let n=new Set;for(let t of e.explicitOrderBy)e.le.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new rz(rw.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.le.push(new ig(t,r))}),n.has(rw.keyField().canonicalString())||e.le.push(new ig(rw.keyField(),r))}return e.le}function ij(e){return e.he||(e.he=function(e,t){if("F"===e.limitType)return iP(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new ig(e.field,t)});let n=e.endAt?new id(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new id(e.startAt.position,e.startAt.inclusive):null;return iP(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,iF(e))),e.he}function iB(e,t){let n=e.filters.concat([t]);return new iL(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function i$(e,t,n){return new iL(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function iq(e,t){return iN(ij(e),ij(t))&&e.limitType===t.limitType}function iz(e){return`${iD(ij(e))}|lt:${e.limitType}`}function iH(e){var t;let n;return`Query(target=${n=(t=ij(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof iv?`${t.field.canonicalString()} ${t.op} ${ie(t.value)}`:t instanceof iw?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),rM(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>ie(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>ie(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function iK(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):r_.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of iF(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=ip(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,iF(e),t))&&(!e.endAt||!!function(e,t,n){let r=ip(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,iF(e),t))}function iG(e){return(t,n)=>{let r=!1;for(let i of iF(e)){let e=function(e,t,n){let r=e.field.isKeyField()?r_.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?r7(r,i):n8()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return n8()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iW{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){rF(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return rj(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iQ=new rB(r_.comparator),iX=new rB(r_.comparator);function iJ(...e){let t=iX;for(let n of e)t=t.insert(n.key,n);return t}function iY(e){let t=iX;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function iZ(){return new iW(e=>e.toString(),(e,t)=>e.isEqual(t))}let i0=new rB(r_.comparator),i1=new rz(r_.comparator);function i2(...e){let t=i1;for(let n of e)t=t.add(n);return t}let i4=new rz(rd);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i9(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rV(t)?"-0":t}}function i6(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(){this._=void 0}}function i3(e,t){return e instanceof sr?ir(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class i7 extends i5{}class i8 extends i5{constructor(e){super(),this.elements=e}}function se(e,t){let n=ss(t);for(let t of e.elements)n.some(e=>r5(e,t))||n.push(t);return{arrayValue:{values:n}}}class st extends i5{constructor(e){super(),this.elements=e}}function sn(e,t){let n=ss(t);for(let t of e.elements)n=n.filter(e=>!r5(e,t));return{arrayValue:{values:n}}}class sr extends i5{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function si(e){return rJ(e.integerValue||e.doubleValue)}function ss(e){return ii(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t){this.field=e,this.transform=t}}class so{constructor(e,t){this.version=e,this.transformResults=t}}class sl{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new sl}static exists(e){return new sl(void 0,e)}static updateTime(e){return new sl(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function su(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class sh{}function sc(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new sw(e.key,sl.none()):new sp(e.key,e.data,sl.none());{let n=e.data,r=ih.empty(),i=new rz(rw.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new sm(e.key,r,new rK(i.toArray()),sl.none())}}function sd(e,t,n,r){return e instanceof sp?function(e,t,n,r){if(!su(e.precondition,t))return n;let i=e.value.clone(),s=sv(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof sm?function(e,t,n,r){if(!su(e.precondition,t))return n;let i=sv(e.fieldTransforms,r,t),s=t.data;return(s.setAll(sg(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):su(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function sf(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&rf(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof i8&&r instanceof i8||n instanceof st&&r instanceof st?rf(n.elements,r.elements,r5):n instanceof sr&&r instanceof sr?r5(n.Ie,r.Ie):n instanceof i7&&r instanceof i7)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class sp extends sh{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class sm extends sh{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sg(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function sy(e,t,n){var r;let i=new Map;e.length===n.length||n8();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof i8?se(o,l):o instanceof st?sn(o,l):r))}return i}function sv(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof i7?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&rZ(t)&&(t=r0(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof i8?se(e,s):e instanceof st?sn(e,s):function(e,t){let n=i3(e,t),r=si(n)+si(e.Ie);return ir(n)&&ir(e.Ie)?i6(r):i9(e.serializer,r)}(e,s))}return r}class sw extends sh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class s_ extends sh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof sp?function(e,t,n){let r=e.value.clone(),i=sy(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof sm?function(e,t,n){if(!su(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=sy(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(sg(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=sd(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=sd(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=iZ();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=sc(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(rm.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),i2())}isEqual(e){return this.batchId===e.batchId&&rf(this.mutations,e.mutations,(e,t)=>sf(e,t))&&rf(this.baseMutations,e.baseMutations,(e,t)=>sf(e,t))}}class sT{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||n8();let r=i0,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new sT(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t){this.count=e,this.unchangedNames=t}}function sS(e){switch(e){default:return n8();case re.CANCELLED:case re.UNKNOWN:case re.DEADLINE_EXCEEDED:case re.RESOURCE_EXHAUSTED:case re.INTERNAL:case re.UNAVAILABLE:case re.UNAUTHENTICATED:return!1;case re.INVALID_ARGUMENT:case re.NOT_FOUND:case re.ALREADY_EXISTS:case re.PERMISSION_DENIED:case re.FAILED_PRECONDITION:case re.ABORTED:case re.OUT_OF_RANGE:case re.UNIMPLEMENTED:case re.DATA_LOSS:return!0}}function sA(e){if(void 0===e)return n5("GRPC error has no .code"),re.UNKNOWN;switch(e){case o.OK:return re.OK;case o.CANCELLED:return re.CANCELLED;case o.UNKNOWN:return re.UNKNOWN;case o.DEADLINE_EXCEEDED:return re.DEADLINE_EXCEEDED;case o.RESOURCE_EXHAUSTED:return re.RESOURCE_EXHAUSTED;case o.INTERNAL:return re.INTERNAL;case o.UNAVAILABLE:return re.UNAVAILABLE;case o.UNAUTHENTICATED:return re.UNAUTHENTICATED;case o.INVALID_ARGUMENT:return re.INVALID_ARGUMENT;case o.NOT_FOUND:return re.NOT_FOUND;case o.ALREADY_EXISTS:return re.ALREADY_EXISTS;case o.PERMISSION_DENIED:return re.PERMISSION_DENIED;case o.FAILED_PRECONDITION:return re.FAILED_PRECONDITION;case o.ABORTED:return re.ABORTED;case o.OUT_OF_RANGE:return re.OUT_OF_RANGE;case o.UNIMPLEMENTED:return re.UNIMPLEMENTED;case o.DATA_LOSS:return re.DATA_LOSS;default:return n8()}}(l=o||(o={}))[l.OK=0]="OK",l[l.CANCELLED=1]="CANCELLED",l[l.UNKNOWN=2]="UNKNOWN",l[l.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",l[l.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",l[l.NOT_FOUND=5]="NOT_FOUND",l[l.ALREADY_EXISTS=6]="ALREADY_EXISTS",l[l.PERMISSION_DENIED=7]="PERMISSION_DENIED",l[l.UNAUTHENTICATED=16]="UNAUTHENTICATED",l[l.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",l[l.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",l[l.ABORTED=10]="ABORTED",l[l.OUT_OF_RANGE=11]="OUT_OF_RANGE",l[l.UNIMPLEMENTED=12]="UNIMPLEMENTED",l[l.INTERNAL=13]="INTERNAL",l[l.UNAVAILABLE=14]="UNAVAILABLE",l[l.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sC=new nY([4294967295,4294967295],0);function sk(e){let t=(new TextEncoder).encode(e),n=new nJ;return n.update(t),new Uint8Array(n.digest())}function sR(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new nY([n,r],0),new nY([i,s],0)]}class sx{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new sP(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new sP(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new sP(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=nY.fromNumber(this.Te)}de(e,t,n){let r=e.add(t.multiply(nY.fromNumber(n)));return 1===r.compare(sC)&&(r=new nY([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let[t,n]=sR(sk(e));for(let e=0;e<this.hashCount;e++){let r=this.de(t,n,e);if(!this.Ae(r))return!1}return!0}static create(e,t,n){let r=new sx(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Te)return;let[t,n]=sR(sk(e));for(let e=0;e<this.hashCount;e++){let r=this.de(t,n,e);this.Re(r)}}Re(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class sP extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,sN.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new sD(rm.min(),r,new rB(rd),iQ,i2())}}class sN{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new sN(n,t,i2(),i2(),i2())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e,t,n,r){this.Ve=e,this.removedTargetIds=t,this.key=n,this.me=r}}class sL{constructor(e,t){this.targetId=e,this.fe=t}}class sM{constructor(e,t,n=rW.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class sV{constructor(){this.ge=0,this.pe=sj(),this.ye=rW.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=i2(),t=i2(),n=i2();return this.pe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:n8()}}),new sN(this.ye,this.we,e,t,n)}Fe(){this.Se=!1,this.pe=sj()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,this.ge>=0||n8()}Be(){this.Se=!0,this.we=!0}}class sU{constructor(e){this.Le=e,this.ke=new Map,this.qe=iQ,this.Qe=sF(),this.Ke=new rB(rd)}$e(e){for(let t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(let t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{let n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.Ce(e.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(e.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(t);break;case 3:this.je(t)&&(n.Be(),n.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.Ce(e.resumeToken));break;default:n8()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((e,n)=>{this.je(n)&&t(n)})}Je(e){let t=e.targetId,n=e.fe.count,r=this.Ye(t);if(r){let i=r.target;if(iO(i)){if(0===n){let e=new r_(i.path);this.We(t,e,ic.newNoDocument(e,rm.min()))}else 1===n||n8()}else{let r=this.Ze(t);if(r!==n){let n=this.Xe(e),i=n?this.et(n,e,r):1;0!==i&&(this.He(t),this.Ke=this.Ke.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(e){let t,n;let r=e.fe.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=rY(i).toUint8Array()}catch(e){if(e instanceof rG)return n3("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new sx(t,s,a)}catch(e){return n3(e instanceof sP?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Te?null:n}et(e,t,n){return t.fe.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){let n=this.Le.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Le.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.We(t,n,null),r++)}),r}it(e){let t=new Map;this.ke.forEach((n,r)=>{let i=this.Ye(r);if(i){if(n.current&&iO(i.target)){let t=new r_(i.target.path);null!==this.qe.get(t)||this.st(r,t)||this.We(r,t,ic.newNoDocument(t,e))}n.De&&(t.set(r,n.ve()),n.Fe())}});let n=i2();this.Qe.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.qe.forEach((t,n)=>n.setReadTime(e));let r=new sD(e,t,this.Ke,this.qe,n);return this.qe=iQ,this.Qe=sF(),this.Ke=new rB(rd),r}Ue(e,t){if(!this.je(e))return;let n=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,n),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,n){if(!this.je(e))return;let r=this.ze(e);this.st(e,t)?r.Me(t,1):r.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),n&&(this.qe=this.qe.insert(t,n))}removeTarget(e){this.ke.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new sV,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new rz(rd),this.Qe=this.Qe.insert(e,t)),t}je(e){let t=null!==this.Ye(e);return t||n6("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new sV),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function sF(){return new rB(r_.comparator)}function sj(){return new rB(r_.comparator)}let sB={asc:"ASCENDING",desc:"DESCENDING"},s$={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sq={and:"AND",or:"OR"};class sz{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sH(e,t){return e.useProto3Json||rM(t)?t:{value:t}}function sK(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sG(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function sW(e){return e||n8(),rm.fromTimestamp(function(e){let t=rX(e);return new rp(t.seconds,t.nanos)}(e))}function sQ(e,t){return sX(e,t).canonicalString()}function sX(e,t){let n=new ry(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function sJ(e){let t=ry.fromString(e);return s3(t)||n8(),t}function sY(e,t){return sQ(e.databaseId,t.path)}function sZ(e,t){let n=sJ(t);if(n.get(1)!==e.databaseId.projectId)throw new rt(re.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new rt(re.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new r_(s2(n))}function s0(e,t){return sQ(e.databaseId,t)}function s1(e){return new ry(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function s2(e){return e.length>4&&"documents"===e.get(4)||n8(),e.popFirst(5)}function s4(e,t,n){return{name:sY(e,t),fields:n.value.mapValue.fields}}function s9(e,t){var n;let r;if(t instanceof sp)r={update:s4(e,t.key,t.value)};else if(t instanceof sw)r={delete:sY(e,t.key)};else if(t instanceof sm)r={update:s4(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof s_))return n8();r={verify:sY(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof i7)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof i8)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof st)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof sr)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw n8()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:sK(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:n8()),r}function s6(e){return{fieldPath:e.canonicalString()}}function s5(e){return rw.fromServerFormat(e.fieldPath)}function s3(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s7{constructor(e,t,n,r,i=rm.min(),s=rm.min(),a=rW.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new s7(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new s7(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new s7(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new s7(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s8{constructor(e){this.ct=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(rJ(e.integerValue));else if("doubleValue"in e){let n=rJ(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),rV(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Et(t,20),"string"==typeof n?t.At(n):(t.At(`${n.seconds||""}`),t.dt(n.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(rY(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?iu(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):n8()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){let n=e.fields||{};for(let e of(this.Et(t,55),Object.keys(n)))this.Rt(e,t),this.It(n[e],t)}wt(e,t){let n=e.values||[];for(let e of(this.Et(t,50),n))this.It(e,t)}gt(e,t){this.Et(t,37),r_.fromName(e).path.forEach(e=>{this.Et(t,60),this.St(e,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}ae.bt=new ae;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this._n=new an}addToCollectionParentIndex(e,t){return this._n.add(t),rS.resolve()}getCollectionParents(e,t){return rS.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return rS.resolve()}deleteFieldIndex(e,t){return rS.resolve()}deleteAllFieldIndexes(e){return rS.resolve()}createTargetIndexes(e,t){return rS.resolve()}getDocumentsMatchingTarget(e,t){return rS.resolve(null)}getIndexType(e,t){return rS.resolve(0)}getFieldIndexes(e,t){return rS.resolve([])}getNextCollectionGroupToUpdate(e){return rS.resolve(null)}getMinOffset(e,t){return rS.resolve(rT.min())}getMinOffsetFromCollectionGroup(e,t){return rS.resolve(rT.min())}updateCollectionGroup(e,t,n){return rS.resolve()}updateIndexEntries(e,t){return rS.resolve()}}class an{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new rz(ry.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new rz(ry.comparator)).toArray()}}new Uint8Array(0);class ar{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new ar(e,ar.DEFAULT_COLLECTION_PERCENTILE,ar.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ar.DEFAULT_COLLECTION_PERCENTILE=10,ar.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ar.DEFAULT=new ar(41943040,ar.DEFAULT_COLLECTION_PERCENTILE,ar.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ar.DISABLED=new ar(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ai(0)}static Bn(){return new ai(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.changes=new iW(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ic.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?rS.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&sd(n.mutation,e,rK.empty(),rp.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,i2()).next(()=>t))}getLocalViewOfDocuments(e,t,n=i2()){let r=iZ();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=iJ();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=iZ();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,i2()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=iQ,s=iZ(),a=iZ();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof sm)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),sd(a.mutation,t,a.mutation.getFieldMask(),rp.now())):s.set(t.key,rK.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new aa(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=iZ(),r=new rB((e,t)=>e-t),i=i2();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||rK.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||i2()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=iZ();l.forEach(e=>{if(!i.has(e)){let r=sc(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return rS.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return r_.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):iU(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):rS.resolve(iZ()),a=-1,o=i;return s.next(t=>rS.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?rS.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,i2())).next(e=>({batchId:a,changes:iY(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new r_(t)).next(e=>{let t=iJ();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=iJ();return this.indexManager.getCollectionParents(e,i).next(a=>rS.forEach(a,a=>{let o=new iL(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,ic.newInvalidDocument(r)))});let n=iJ();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&sd(s.mutation,r,rK.empty(),rp.now()),iK(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return rS.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,{id:t.id,version:t.version,createTime:sW(t.createTime)}),rS.resolve()}getNamedQuery(e,t){return rS.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=sJ(e);return 4===t.length?ry.emptyPath():s2(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||n8();let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=s5(e.unaryFilter.field);return iv.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=s5(e.unaryFilter.field);return iv.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=s5(e.unaryFilter.field);return iv.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=s5(e.unaryFilter.field);return iv.create(i,"!=",{nullValue:"NULL_VALUE"});default:return n8()}}(t):void 0!==t.fieldFilter?iv.create(s5(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return n8()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?iw.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return n8()}}(t.compositeFilter.op)):n8()}(e);return n instanceof iw&&ib(t=n)&&i_(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new ig(s5(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=rM(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let h=null;i.startAt&&(h=function(e){let t=!!e.before;return new id(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new id(e.values||[],t)}(i.endAt)),new iL(r,a,l,o,u,"F",h,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?i$(t,t.limit,"L"):t}(t.bundledQuery),readTime:sW(t.readTime)}),rS.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){this.overlays=new rB(r_.comparator),this.hr=new Map}getOverlay(e,t){return rS.resolve(this.overlays.get(t))}getOverlays(e,t){let n=iZ();return rS.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ht(e,t,r)}),rS.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.hr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.hr.delete(n)),rS.resolve()}getOverlaysForCollection(e,t,n){let r=iZ(),i=t.length+1,s=new r_(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return rS.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new rB((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=iZ(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=iZ(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return rS.resolve(a)}ht(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.hr.get(r.largestBatchId).delete(n.key);this.hr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new sE(t,n));let i=this.hr.get(t);void 0===i&&(i=i2(),this.hr.set(t,i)),this.hr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(){this.Pr=new rz(ac.Ir),this.Tr=new rz(ac.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){let n=new ac(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Ar(new ac(e,t))}Rr(e,t){e.forEach(e=>this.removeReference(e,t))}Vr(e){let t=new r_(new ry([])),n=new ac(t,e),r=new ac(t,e+1),i=[];return this.Tr.forEachInRange([n,r],e=>{this.Ar(e),i.push(e.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){let t=new r_(new ry([])),n=new ac(t,e),r=new ac(t,e+1),i=i2();return this.Tr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new ac(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ac{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return r_.comparator(e.key,t.key)||rd(e.pr,t.pr)}static Er(e,t){return rd(e.pr,t.pr)||r_.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new rz(ac.Ir)}checkEmpty(e){return rS.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new sb(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.wr=this.wr.add(new ac(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return rS.resolve(s)}lookupMutationBatch(e,t){return rS.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.br(t+1),r=n<0?0:n;return rS.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return rS.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return rS.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new ac(t,0),r=new ac(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,r],e=>{let t=this.Sr(e.pr);i.push(t)}),rS.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new rz(rd);return t.forEach(e=>{let t=new ac(e,0),r=new ac(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,r],e=>{n=n.add(e.pr)})}),rS.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;r_.isDocumentKey(i)||(i=i.child(""));let s=new ac(new r_(i),0),a=new rz(rd);return this.wr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.pr)),!0)},s),rS.resolve(this.Dr(a))}Dr(e){let t=[];return e.forEach(e=>{let n=this.Sr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Cr(t.batchId,"removed")||n8(),this.mutationQueue.shift();let n=this.wr;return rS.forEach(t.mutations,r=>{let i=new ac(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.wr=n})}Mn(e){}containsKey(e,t){let n=new ac(t,0),r=this.wr.firstAfterOrEqual(n);return rS.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,rS.resolve()}Cr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){let t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){this.vr=e,this.docs=new rB(r_.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return rS.resolve(n?n.document.mutableCopy():ic.newInvalidDocument(t))}getEntries(e,t){let n=iQ;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ic.newInvalidDocument(e))}),rS.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=iQ,s=t.path,a=new r_(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=r_.comparator(e.documentKey,t.documentKey))?n:rd(e.largestBatchId,t.largestBatchId)}(new rT(a.readTime,a.key,-1),n)||(r.has(a.key)||iK(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return rS.resolve(i)}getAllFromCollectionGroup(e,t,n,r){n8()}Fr(e,t){return rS.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new ap(this)}getSize(e){return rS.resolve(this.size)}}class ap extends as{constructor(e){super(),this.ar=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.ar.addEntry(e,r)):this.ar.removeEntry(n)}),rS.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this.persistence=e,this.Mr=new iW(e=>iD(e),iN),this.lastRemoteSnapshotVersion=rm.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ah,this.targetCount=0,this.Br=ai.Nn()}forEachTarget(e,t){return this.Mr.forEach((e,n)=>t(n)),rS.resolve()}getLastRemoteSnapshotVersion(e){return rS.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return rS.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),rS.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),rS.resolve()}qn(e){this.Mr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Br=new ai(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,rS.resolve()}updateTargetData(e,t){return this.qn(t),rS.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,rS.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Mr.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Mr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),rS.waitFor(i).next(()=>r)}getTargetCount(e){return rS.resolve(this.targetCount)}getTargetData(e,t){let n=this.Mr.get(t)||null;return rS.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),rS.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),rS.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),rS.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Nr.gr(t);return rS.resolve(n)}containsKey(e,t){return rS.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,t){this.Lr={},this.overlays={},this.kr=new rL(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new am(this),this.indexManager=new at,this.remoteDocumentCache=new af(e=>this.referenceDelegate.Kr(e)),this.serializer=new s8(t),this.$r=new al(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new au,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Lr[e.toKey()];return n||(n=new ad(t,this.referenceDelegate),this.Lr[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){n6("MemoryPersistence","Starting transaction:",e);let r=new ay(this.kr.next());return this.referenceDelegate.Ur(),n(r).next(e=>this.referenceDelegate.Wr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Gr(e,t){return rS.or(Object.values(this.Lr).map(n=>()=>n.containsKey(e,t)))}}class ay extends rE{constructor(e){super(),this.currentSequenceNumber=e}}class av{constructor(e){this.persistence=e,this.zr=new ah,this.jr=null}static Hr(e){return new av(e)}get Jr(){if(this.jr)return this.jr;throw n8()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),rS.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),rS.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),rS.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(e=>this.Jr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Jr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rS.forEach(this.Jr,n=>{let r=r_.fromPath(n);return this.Yr(e,r).next(e=>{e||t.removeEntry(r,rm.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return rS.or([()=>rS.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=r}static Ki(e,t){let n=i2(),r=i2();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new aw(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=(0,f.G6)()?8:rC.v((0,f.z$)())>0?6:4}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.ji(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.Hi(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new a_;return this.Ji(e,t,n).next(r=>{if(i.result=r,this.Ui)return this.Yi(e,t,n,r.size)})}).next(()=>i.result)}Yi(e,t,n,r){return n.documentReadCount<this.Wi?(n9()<=d.in.DEBUG&&n6("QueryEngine","SDK will not create cache indexes for query:",iH(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),rS.resolve()):(n9()<=d.in.DEBUG&&n6("QueryEngine","Query:",iH(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Gi*r?(n9()<=d.in.DEBUG&&n6("QueryEngine","The SDK decides to create cache indexes for query:",iH(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ij(t))):rS.resolve())}ji(e,t){if(iV(t))return rS.resolve(null);let n=ij(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=ij(t=i$(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=i2(...r);return this.zi.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Zi(t,r);return this.Xi(t,s,i,n.readTime)?this.ji(e,i$(t,null,"F")):this.es(e,s,t,n)}))})))}Hi(e,t,n,r){return iV(t)||r.isEqual(rm.min())?rS.resolve(null):this.zi.getDocuments(e,n).next(i=>{let s=this.Zi(t,i);return this.Xi(t,s,n,r)?rS.resolve(null):(n9()<=d.in.DEBUG&&n6("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),iH(t)),this.es(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new rT(rm.fromTimestamp(1e9===r?new rp(n+1,0):new rp(n,r)),r_.empty(),-1)}(r,0)).next(e=>e))})}Zi(e,t){let n=new rz(iG(e));return t.forEach((t,r)=>{iK(e,r)&&(n=n.add(r))}),n}Xi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ji(e,t,n){return n9()<=d.in.DEBUG&&n6("QueryEngine","Using full collection scan to execute query:",iH(t)),this.zi.getDocumentsMatchingQuery(e,t,rT.min(),n)}es(e,t,n,r){return this.zi.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,t,n,r){this.persistence=e,this.ts=t,this.serializer=r,this.ns=new rB(rd),this.rs=new iW(e=>iD(e),iN),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ao(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}async function aE(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e._s(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=i2();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({us:e,removedBatchIds:i,addedBatchIds:s}))})})}function aI(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}async function aS(e,t,n){let r=e.ns.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!rx(e))throw e;n6("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.ns=e.ns.remove(t),e.rs.delete(r.target)}function aA(e,t,n){let r=rm.min(),i=i2();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.rs.get(n);return void 0!==r?rS.resolve(e.ns.get(r)):e.Qr.getTargetData(t,n)})(e,s,ij(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Qr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.ts.getDocumentsMatchingQuery(s,t,n?r:rm.min(),n?i:i2())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.ss.get(r)||rm.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.ss.set(r,s),{documents:n,hs:i}}))}class aC{constructor(){this.activeTargetIds=i4}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class ak{constructor(){this.no=new aC,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new aC,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){for(let e of(n6("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.uo))e(0)}ao(){for(let e of(n6("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.uo))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aP=null;function aD(){return null===aP?aP=268435456+Math.round(2147483648*Math.random()):aP++,"0x"+aP.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aL="WebChannelConnection";class aM extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.fo=t+"://"+e.host,this.po=`projects/${n}/databases/${r}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get wo(){return!1}So(e,t,n,r,i){let s=aD(),a=this.bo(e,t.toUriEncodedString());n6("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(o,r,i),this.Co(e,a,o,n).then(t=>(n6("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw n3("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}vo(e,t,n,r,i,s){return this.So(e,t,n,r,i)}Do(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+n2}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}bo(e,t){let n=aN[e];return`${this.fo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,n,r){let i=aD();return new Promise((s,a)=>{let o=new nX;o.setWithCredentials(!0),o.listenOnce(nK.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case nH.NO_ERROR:let t=o.getResponseJson();n6(aL,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case nH.TIMEOUT:n6(aL,`RPC '${e}' ${i} timed out`),a(new rt(re.DEADLINE_EXCEEDED,"Request time out"));break;case nH.HTTP_ERROR:let n=o.getStatus();if(n6(aL,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(re).indexOf(t)>=0?t:re.UNKNOWN}(t.status);a(new rt(e,t.message))}else a(new rt(re.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new rt(re.UNAVAILABLE,"Connection failed."));break;default:n8()}}finally{n6(aL,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);n6(aL,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}Fo(e,t,n){let r=aD(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=nq(),a=nz(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let h=i.join("");n6(aL,`Creating RPC '${e}' stream ${r}: ${h}`,l);let c=s.createWebChannel(h,l),d=!1,f=!1,p=new aO({lo:t=>{f?n6(aL,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(n6(aL,`Opening RPC '${e}' stream ${r} transport.`),c.open(),d=!0),n6(aL,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},ho:()=>c.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(c,nQ.EventType.OPEN,()=>{f||n6(aL,`RPC '${e}' stream ${r} transport opened.`)}),m(c,nQ.EventType.CLOSE,()=>{f||(f=!0,n6(aL,`RPC '${e}' stream ${r} transport closed`),p.Vo())}),m(c,nQ.EventType.ERROR,t=>{f||(f=!0,n3(aL,`RPC '${e}' stream ${r} transport errored:`,t),p.Vo(new rt(re.UNAVAILABLE,"The operation could not be completed")))}),m(c,nQ.EventType.MESSAGE,t=>{var n;if(!f){let i=t.data[0];i||n8();let s=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(s){n6(aL,`RPC '${e}' stream ${r} received error:`,s);let t=s.status,n=function(e){let t=o[e];if(void 0!==t)return sA(t)}(t),i=s.message;void 0===n&&(n=re.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),f=!0,p.Vo(new rt(n,i)),c.close()}else n6(aL,`RPC '${e}' stream ${r} received:`,i),p.mo(i)}}),m(a,nG.STAT_EVENT,t=>{t.stat===nW.PROXY?n6(aL,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===nW.NOPROXY&&n6(aL,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.Ro()},0),p}}function aV(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aU(e){return new sz(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aF{constructor(e,t,n=1e3,r=1.5,i=6e4){this.oi=e,this.timerId=t,this.Mo=n,this.xo=r,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();let t=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Lo),r=Math.max(0,t-n);r>0&&n6("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,r,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Bo&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){null!==this.Bo&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aj{constructor(e,t,n,r,i,s,a,o){this.oi=e,this.$o=n,this.Uo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new aF(e,t)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==e?this.jo.reset():t&&t.code===re.RESOURCE_EXHAUSTED?(n5(t.toString()),n5("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===re.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;let e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Wo===t&&this.o_(e,n)},t=>{e(()=>{let e=new rt(re.UNKNOWN,"Fetching auth token failed: "+t.message);return this.__(e)})})}o_(e,t){let n=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po(()=>{n(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(e=>{n(()=>this.__(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return n6("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget(()=>this.Wo===e?t():(n6("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aB extends aj{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:n8(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||n8(),rW.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||n8(),rW.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new sM(s,a,o,l&&new rt(void 0===l.code?re.UNKNOWN:sA(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=sZ(e,r.document.name),s=sW(r.document.updateTime),a=r.document.createTime?sW(r.document.createTime):rm.min(),o=new ih({mapValue:{fields:r.document.fields}}),l=ic.newFoundDocument(i,s,a,o);n=new sO(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=sZ(e,r.document),s=r.readTime?sW(r.readTime):rm.min(),a=ic.newNoDocument(i,s);n=new sO([],r.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=sZ(e,r.document);n=new sO([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return n8();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new sI(r,i);n=new sL(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return rm.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?rm.min():t.readTime?sW(t.readTime):rm.min()}(e);return this.listener.u_(t,n)}c_(e){let t={};t.database=s1(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=iO(r)?{documents:{documents:[s0(e,r.path)]}}:{query:function(e,t){var n,r;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=s0(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof iv?function(e){if("=="===e.op){if(ia(e.value))return{unaryFilter:{field:s6(e.field),op:"IS_NAN"}};if(is(e.value))return{unaryFilter:{field:s6(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ia(e.value))return{unaryFilter:{field:s6(e.field),op:"IS_NOT_NAN"}};if(is(e.value))return{unaryFilter:{field:s6(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:s6(e.field),op:s$[e.op],value:e.value}}}(t):t instanceof iw?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:sq[t.op],filters:n}}}(t):n8()}(iw.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:s6(e.field),direction:sB[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=sH(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{ut:s,parent:i}}(e,r).ut}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=sG(e,t.resumeToken);let r=sH(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(rm.min())>0){n.readTime=sK(e,t.snapshotVersion.toTimestamp());let r=sH(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return n8()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.t_(t)}l_(e){let t={};t.database=s1(this.serializer),t.removeTarget=e,this.t_(t)}}class a$ extends aj{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,t){return this.connection.Fo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||n8(),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||n8(),t.map(e=>{let t;return(t=e.updateTime?sW(e.updateTime):sW(n)).isEqual(rm.min())&&(t=sW(n)),new so(t,e.transformResults||[])})):[]),i=sW(e.commitTime);return this.listener.T_(i,r)}return e.writeResults&&0!==e.writeResults.length&&n8(),this.h_=!0,this.listener.E_()}d_(){let e={};e.database=s1(this.serializer),this.t_(e)}I_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>s9(this.serializer,e))};this.t_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aq extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.A_=!1}R_(){if(this.A_)throw new rt(re.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(e,sX(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===re.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new rt(re.UNKNOWN,e.toString())})}vo(e,t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.vo(e,sX(t,n),r,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===re.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new rt(re.UNKNOWN,e.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class az{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,"Online"===e&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(n5(t),this.g_=!1):n6("OnlineStateTracker",t)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aH{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(e=>{n.enqueueAndForget(async()=>{a0(this)&&(n6("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.v_.add(4),await aG(e),e.x_.set("Unknown"),e.v_.delete(4),await aK(e)}(this))})}),this.x_=new az(n,r)}}async function aK(e){if(a0(e))for(let t of e.F_)await t(!0)}async function aG(e){for(let t of e.F_)await t(!1)}function aW(e,t){e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),aZ(e)?aY(e):os(e).Jo()&&aX(e,t))}function aQ(e,t){let n=os(e);e.C_.delete(t),n.Jo()&&aJ(e,t),0===e.C_.size&&(n.Jo()?n.Xo():a0(e)&&e.x_.set("Unknown"))}function aX(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(rm.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}os(e).c_(t)}function aJ(e,t){e.O_.Oe(t),os(e).l_(t)}function aY(e){e.O_=new sU({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),os(e).start(),e.x_.p_()}function aZ(e){return a0(e)&&!os(e).Ho()&&e.C_.size>0}function a0(e){return 0===e.v_.size}async function a1(e){e.C_.forEach((t,n)=>{aX(e,t)})}async function a2(e,t){e.O_=void 0,aZ(e)?(e.x_.S_(t),aY(e)):e.x_.set("Unknown")}async function a4(e,t,n){if(e.x_.set("Online"),t instanceof sM&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.C_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.C_.delete(r),e.O_.removeTarget(r))}(e,t)}catch(n){n6("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await a9(e,n)}else if(t instanceof sO?e.O_.$e(t):t instanceof sL?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(rm.min()))try{let t=await aI(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.O_.it(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.C_.get(r);i&&e.C_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.C_.get(t);if(!r)return;e.C_.set(t,r.withResumeToken(rW.EMPTY_BYTE_STRING,r.snapshotVersion)),aJ(e,t);let i=new s7(r.target,t,n,r.sequenceNumber);aX(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){n6("RemoteStore","Failed to raise snapshot:",t),await a9(e,t)}}async function a9(e,t,n){if(!rx(t))throw t;e.v_.add(1),await aG(e),e.x_.set("Offline"),n||(n=()=>aI(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{n6("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await aK(e)})}function a6(e,t){return t().catch(n=>a9(e,n,t))}async function a5(e){let t=oa(e),n=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;a0(e)&&e.D_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.D_.length&&t.Xo();break}n=r.batchId,function(e,t){e.D_.push(t);let n=oa(e);n.Jo()&&n.P_&&n.I_(t.mutations)}(e,r)}catch(t){await a9(e,t)}a3(e)&&a7(e)}function a3(e){return a0(e)&&!oa(e).Ho()&&e.D_.length>0}function a7(e){oa(e).start()}async function a8(e){oa(e).d_()}async function oe(e){let t=oa(e);for(let n of e.D_)t.I_(n.mutations)}async function ot(e,t,n){let r=e.D_.shift(),i=sT.from(r,t,n);await a6(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await a5(e)}async function on(e,t){t&&oa(e).P_&&await async function(e,t){var n;if(sS(n=t.code)&&n!==re.ABORTED){let n=e.D_.shift();oa(e).Zo(),await a6(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await a5(e)}}(e,t),a3(e)&&a7(e)}async function or(e,t){e.asyncQueue.verifyOperationInProgress(),n6("RemoteStore","RemoteStore received new credentials");let n=a0(e);e.v_.add(3),await aG(e),n&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await aK(e)}async function oi(e,t){t?(e.v_.delete(2),await aK(e)):t||(e.v_.add(2),await aG(e),e.x_.set("Unknown"))}function os(e){var t,n,r;return e.N_||(e.N_=(t=e.datastore,n=e.asyncQueue,r={Po:a1.bind(null,e),To:a2.bind(null,e),u_:a4.bind(null,e)},t.R_(),new aB(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.F_.push(async t=>{t?(e.N_.Zo(),aZ(e)?aY(e):e.x_.set("Unknown")):(await e.N_.stop(),e.O_=void 0)})),e.N_}function oa(e){var t,n,r;return e.B_||(e.B_=(t=e.datastore,n=e.asyncQueue,r={Po:a8.bind(null,e),To:on.bind(null,e),E_:oe.bind(null,e),T_:ot.bind(null,e)},t.R_(),new a$(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.F_.push(async t=>{t?(e.B_.Zo(),await a5(e)):(await e.B_.stop(),e.D_.length>0&&(n6("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new oo(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new rt(re.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ol(e,t){if(n5("AsyncQueue",`${t}: ${e}`),rx(e))return new rt(re.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e){this.comparator=e?(t,n)=>e(t,n)||r_.comparator(t.key,n.key):(e,t)=>r_.comparator(e.key,t.key),this.keyedMap=iJ(),this.sortedSet=new rB(this.comparator)}static emptySet(e){return new ou(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ou)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new ou;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this.L_=new rB(r_.comparator)}track(e){let t=e.doc.key,n=this.L_.get(t);n?0!==e.type&&3===n.type?this.L_=this.L_.insert(t,e):3===e.type&&1!==n.type?this.L_=this.L_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.L_=this.L_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.L_=this.L_.remove(t):1===e.type&&2===n.type?this.L_=this.L_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):n8():this.L_=this.L_.insert(t,e)}k_(){let e=[];return this.L_.inorderTraversal((t,n)=>{e.push(n)}),e}}class oc{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new oc(e,t,ou.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&iq(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.q_=void 0,this.Q_=[]}}class of{constructor(){this.queries=new iW(e=>iz(e),iq),this.onlineState="Unknown",this.K_=new Set}}async function op(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new od),r)try{i.q_=await e.onListen(n)}catch(n){let e=ol(n,`Initialization of query '${iH(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.Q_.push(t),t.U_(e.onlineState),i.q_&&t.W_(i.q_)&&ov(e)}async function om(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let e=i.Q_.indexOf(t);e>=0&&(i.Q_.splice(e,1),r=0===i.Q_.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function og(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.Q_)e.W_(r)&&(n=!0);i.q_=r}}n&&ov(e)}function oy(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.Q_)e.onError(n);e.queries.delete(t)}function ov(e){e.K_.forEach(e=>{e.next()})}class ow{constructor(e,t,n){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=n||{}}W_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new oc(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){return!e.fromCache||(!this.options.Z_||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}H_(e){if(e.docChanges.length>0)return!0;let t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Y_(e){e=oc.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.key=e}}class ob{constructor(e){this.key=e}}class oT{constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=i2(),this.mutatedKeys=i2(),this.ua=iG(e),this.ca=new ou(this.ua)}get la(){return this.oa}ha(e,t){let n=t?t.Pa:new oh,r=t?t.ca:this.ca,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=iK(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),f=!0):this.Ia(u,h)||(n.track({type:2,doc:h}),f=!0,(o&&this.ua(h,o)>0||l&&0>this.ua(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ca:s,Pa:n,Xi:a,mutatedKeys:i}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;let s=e.Pa.k_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return n8()}};return n(e)-n(t)})(e.type,t.type)||this.ua(e.doc,t.doc)),this.Ta(n),r=null!=r&&r;let a=t&&!r?this.Ea():[],o=0===this.aa.size&&this.current&&!r?1:0,l=o!==this._a;return(this._a=o,0!==s.length||l)?{snapshot:new oc(this.query,e.ca,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new oh,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=e.current)}Ea(){if(!this.current)return[];let e=this.aa;this.aa=i2(),this.ca.forEach(e=>{this.Aa(e.key)&&(this.aa=this.aa.add(e.key))});let t=[];return e.forEach(e=>{this.aa.has(e)||t.push(new ob(e))}),this.aa.forEach(n=>{e.has(n)||t.push(new o_(n))}),t}Ra(e){this.oa=e.hs,this.aa=i2();let t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return oc.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}class oE{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class oI{constructor(e){this.key=e,this.ma=!1}}class oS{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new iW(e=>iz(e),iq),this.pa=new Map,this.ya=new Set,this.wa=new rB(r_.comparator),this.Sa=new Map,this.ba=new ah,this.Da={},this.Ca=new Map,this.va=ai.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function oA(e,t){var n,r;let i,s;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=ox.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oq.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oD.bind(null,e),e.fa.u_=og.bind(null,e.eventManager),e.fa.xa=oy.bind(null,e.eventManager),e),o=a.ga.get(t);if(o)i=o.targetId,a.sharedClientState.addLocalQueryTarget(i),s=o.view.Va();else{let e=await (n=a.localStore,r=ij(t),n.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return n.Qr.getTargetData(e,r).next(i=>i?(t=i,rS.resolve(t)):n.Qr.allocateTargetId(e).next(i=>(t=new s7(r,i,"TargetPurposeListen",e.currentSequenceNumber),n.Qr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=n.ns.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(n.ns=n.ns.insert(e.targetId,e),n.rs.set(r,e.targetId)),e})),o=a.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await oC(a,t,i,"current"===o,e.resumeToken),a.isPrimaryClient&&aW(a.remoteStore,e)}return s}async function oC(e,t,n,r,i){e.Ma=(t,n,r)=>(async function(e,t,n,r){let i=t.view.ha(n);i.Xi&&(i=await aA(e.localStore,t.query,!1).then(({documents:e})=>t.view.ha(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return oF(e,t.targetId,o.da),o.snapshot})(e,t,n,r);let s=await aA(e.localStore,t,!0),a=new oT(t,s.hs),o=a.ha(s.documents),l=sN.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);oF(e,n,u.da);let h=new oE(t,n,a);return e.ga.set(t,h),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),u.snapshot}async function ok(e,t){let n=e.ga.get(t),r=e.pa.get(n.targetId);if(r.length>1)return e.pa.set(n.targetId,r.filter(e=>!iq(e,t))),void e.ga.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await aS(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),aQ(e.remoteStore,n.targetId),oV(e,n.targetId)}).catch(rI)):(oV(e,n.targetId),await aS(e.localStore,n.targetId,!0))}async function oR(e,t,n){var r;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=oN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oO.bind(null,e),e);try{let e;let s=await function(e,t){let n,r;let i=rp.now(),s=t.reduce((e,t)=>e.add(t.key),i2());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=iQ,l=i2();return e.os.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=i3(r.transform,e||null);null!=i&&(null===n&&(n=ih.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new sm(e.key,t,function e(t){let n=[];return rF(t.fields,(t,r)=>{let i=new rw([t]);if(io(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new rK(n)}(t.value.mapValue),sl.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:iY(n)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),r=s.batchId,(e=i.Da[i.currentUser.toKey()])||(e=new rB(rd)),e=e.insert(r,n),i.Da[i.currentUser.toKey()]=e,await oB(i,s.changes),await a5(i.remoteStore)}catch(t){let e=ol(t,"Failed to persist write");n.reject(e)}}async function ox(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.os.newChangeBuffer({trackRemovals:!0});r=e.ns;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=r.get(a);if(!l)return;u.push(e.Qr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Qr.addMatchingKeys(i,s.addedDocuments,a)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(rW.EMPTY_BYTE_STRING,rm.min()).withLastLimboFreeSnapshotVersion(rm.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,n)),r=r.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Qr.updateTargetData(i,h))});let h=iQ,c=i2();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),u.push((s=t.documentUpdates,a=i2(),o=i2(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=iQ;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(rm.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):n6("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{cs:t,ls:o}})).next(e=>{h=e.cs,c=e.ls})),!n.isEqual(rm.min())){let t=e.Qr.getLastRemoteSnapshotVersion(i).next(t=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(t)}return rS.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(t=>(e.ns=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Sa.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||n8(),t.addedDocuments.size>0?r.ma=!0:t.modifiedDocuments.size>0?r.ma||n8():t.removedDocuments.size>0&&(r.ma||n8(),r.ma=!1))}),await oB(e,n,t)}catch(e){await rI(e)}}function oP(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.ga.forEach((e,n)=>{let r=n.view.U_(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.Q_)e.U_(t)&&(n=!0)}),n&&ov(r),i.length&&e.fa.u_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function oD(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Sa.get(t),i=r&&r.key;if(i){let n=new rB(r_.comparator);n=n.insert(i,ic.newNoDocument(i,rm.min()));let r=i2().add(i),s=new sD(rm.min(),new Map,new rB(rd),n,r);await ox(e,s),e.wa=e.wa.remove(i),e.Sa.delete(t),oj(e)}else await aS(e.localStore,t,!1).then(()=>oV(e,t,n)).catch(rI)}async function oN(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=rS.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||n8(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=i2();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});oM(e,r,null),oL(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await oB(e,i)}catch(e){await rI(e)}}async function oO(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||n8(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});oM(e,t,n),oL(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await oB(e,i)}catch(e){await rI(e)}}function oL(e,t){(e.Ca.get(t)||[]).forEach(e=>{e.resolve()}),e.Ca.delete(t)}function oM(e,t,n){let r=e.Da[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Da[e.currentUser.toKey()]=r}}function oV(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.pa.get(t)))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach(t=>{e.ba.containsKey(t)||oU(e,t)})}function oU(e,t){e.ya.delete(t.path.canonicalString());let n=e.wa.get(t);null!==n&&(aQ(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),oj(e))}function oF(e,t,n){for(let r of n)r instanceof o_?(e.ba.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(n6("SyncEngine","New document in limbo: "+n),e.ya.add(r),oj(e))}(e,r)):r instanceof ob?(n6("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||oU(e,r.key)):n8()}function oj(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){let t=e.ya.values().next().value;e.ya.delete(t);let n=new r_(ry.fromString(t)),r=e.va.next();e.Sa.set(r,new oI(n)),e.wa=e.wa.insert(n,r),aW(e.remoteStore,new s7(ij(iM(n.path)),r,"TargetPurposeLimboResolution",rL._e))}}async function oB(e,t,n){let r=[],i=[],s=[];e.ga.isEmpty()||(e.ga.forEach((a,o)=>{s.push(e.Ma(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=aw.Ki(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.fa.u_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>rS.forEach(t,t=>rS.forEach(t.qi,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>rS.forEach(t.Qi,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!rx(e))throw e;n6("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.ns.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.ns=e.ns.insert(t,i)}}}(e.localStore,i))}async function o$(e,t){if(!e.currentUser.isEqual(t)){n6("SyncEngine","User change. New user:",t.toKey());let n=await aE(e.localStore,t);e.currentUser=t,e.Ca.forEach(e=>{e.forEach(e=>{e.reject(new rt(re.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Ca.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await oB(e,n.us)}}function oq(e,t){let n=e.Sa.get(t);if(n&&n.ma)return i2().add(n.key);{let n=i2(),r=e.pa.get(t);if(!r)return n;for(let t of r){let r=e.ga.get(t);n=n.unionWith(r.view.la)}return n}}class oz{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=aU(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t;return t=this.persistence,new aT(t,new ab,e.initialUser,this.serializer)}createPersistence(e){return new ag(av.Hr,this.serializer)}createSharedClientState(e){return new ak}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oH{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>oP(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=o$.bind(null,this.syncEngine),await oi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new of}createDatastore(e){let t=aU(e.databaseInfo.databaseId),n=new aM(e.databaseInfo);return new aq(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new aH(t,this.datastore,e.asyncQueue,e=>oP(this.syncEngine,e,0),ax.D()?new ax:new aR)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new oS(e,t,n,r,i,s);return a&&(o.Fa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){n6("RemoteStore","RemoteStore shutting down."),e.v_.add(5),await aG(e),e.M_.shutdown(),e.x_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oK{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):n5("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oG{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new rt(re.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;let t=await async function(e,t){let n={documents:t.map(t=>sY(e.serializer,t))},r=await e.vo("BatchGetDocuments",e.serializer.databaseId,ry.emptyPath(),n,t.length),i=new Map;r.forEach(t=>{var n;let r=(n=e.serializer,"found"in t?function(e,t){t.found||n8(),t.found.name,t.found.updateTime;let n=sZ(e,t.found.name),r=sW(t.found.updateTime),i=t.found.createTime?sW(t.found.createTime):rm.min(),s=new ih({mapValue:{fields:t.found.fields}});return ic.newFoundDocument(n,r,i,s)}(n,t):"missing"in t?function(e,t){t.missing||n8(),t.readTime||n8();let n=sZ(e,t.missing),r=sW(t.readTime);return ic.newNoDocument(n,r)}(n,t):n8());i.set(r.key.toString(),r)});let s=[];return t.forEach(e=>{let t=i.get(e.toString());t||n8(),s.push(t)}),s}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastTransactionError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new sw(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{let n=r_.fromPath(t);this.mutations.push(new s_(n,this.precondition(n)))}),await async function(e,t){let n={writes:t.map(t=>s9(e.serializer,t))};await e.So("Commit",e.serializer.databaseId,ry.emptyPath(),n)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw n8();t=rm.min()}let n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new rt(re.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(rm.min())?sl.exists(!1):sl.updateTime(t):sl.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(rm.min()))throw new rt(re.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return sl.updateTime(t)}return sl.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oW{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.za=n.maxAttempts,this.jo=new aF(this.asyncQueue,"transaction_retry")}ja(){this.za-=1,this.Ha()}Ha(){this.jo.qo(async()=>{let e=new oG(this.datastore),t=this.Ja(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Ya(e)}))}).catch(e=>{this.Ya(e)})})}Ja(e){try{let t=this.updateFunction(e);return!rM(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Ya(e){this.za>0&&this.Za(e)?(this.za-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ha(),Promise.resolve()))):this.deferred.reject(e)}Za(e){if("FirebaseError"===e.name){let t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!sS(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oQ{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=n1.UNAUTHENTICATED,this.clientId=rc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{n6("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(n6("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new rt(re.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=ol(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function oX(e,t){e.asyncQueue.verifyOperationInProgress(),n6("FirestoreClient","Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await aE(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function oJ(e,t){e.asyncQueue.verifyOperationInProgress();let n=await oY(e);n6("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>or(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>or(t.remoteStore,n)),e._onlineComponents=t}async function oY(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){n6("FirestoreClient","Using user provided OfflineComponentProvider");try{await oX(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===re.FAILED_PRECONDITION||t.code===re.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;n3("Error using user provided cache. Falling back to memory cache: "+t),await oX(e,new oz)}}else n6("FirestoreClient","Using default OfflineComponentProvider"),await oX(e,new oz)}return e._offlineComponents}async function oZ(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(n6("FirestoreClient","Using user provided OnlineComponentProvider"),await oJ(e,e._uninitializedComponentsProvider._online)):(n6("FirestoreClient","Using default OnlineComponentProvider"),await oJ(e,new oH))),e._onlineComponents}async function o0(e){let t=await oZ(e),n=t.eventManager;return n.onListen=oA.bind(null,t.syncEngine),n.onUnlisten=ok.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o2=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o4(e,t,n){if(!n)throw new rt(re.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function o9(e){if(!r_.isDocumentKey(e))throw new rt(re.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function o6(e){if(r_.isDocumentKey(e))throw new rt(re.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function o5(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":n8()}function o3(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new rt(re.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=o5(e);throw new rt(re.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o7{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new rt(re.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new rt(re.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new rt(re.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=o1(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new rt(re.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new rt(re.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new rt(re.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class o8{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new o7({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new rt(re.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new rt(re.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new o7(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ri;switch(e.type){case"firstParty":return new rl(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new rt(re.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=o2.get(e);t&&(n6("ComponentProvider","Removing Datastore"),o2.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new le(this.firestore,e,this._query)}}class lt{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}}class ln extends le{constructor(e,t,n){super(e,t,iM(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new r_(e))}withConverter(e){return new ln(this.firestore,e,this._path)}}function lr(e,t,...n){if(e=(0,f.m9)(e),o4("collection","path",t),e instanceof o8){let r=ry.fromString(t,...n);return o6(r),new ln(e,null,r)}{if(!(e instanceof lt||e instanceof ln))throw new rt(re.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(ry.fromString(t,...n));return o6(r),new ln(e.firestore,null,r)}}function li(e,t,...n){if(e=(0,f.m9)(e),1==arguments.length&&(t=rc.newId()),o4("doc","path",t),e instanceof o8){let r=ry.fromString(t,...n);return o9(r),new lt(e,null,new r_(r))}{if(!(e instanceof lt||e instanceof ln))throw new rt(re.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(ry.fromString(t,...n));return o9(r),new lt(e.firestore,e instanceof ln?e.converter:null,new r_(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new aF(this,"async_queue_retry"),this._u=()=>{let e=aV();e&&n6("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};let e=aV();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;let t=aV();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});let t=new rn;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(0!==this.eu.length){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!rx(e))throw e;n6("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){let t=this.Xa.then(()=>(this.iu=!0,e().catch(e=>{let t;throw this.ru=e,this.iu=!1,n5("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.iu=!1,e))));return this.Xa=t,t}enqueueAfterDelay(e,t,n){this.au(),this.ou.indexOf(e)>-1&&(t=0);let r=oo.createAndSchedule(this,e,t,n,e=>this.lu(e));return this.nu.push(r),r}au(){this.ru&&n8()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(let t of this.nu)if(t.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{for(let t of(this.nu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.nu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){let t=this.nu.indexOf(e);this.nu.splice(t,1)}}function la(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class lo extends o8{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new ls,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lh(this),this._firestoreClient.terminate()}}function ll(e,t){let n="object"==typeof e?e:(0,h.Mq)(),r=(0,h.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let e=(0,f.P0)("firestore");e&&function(e,t,n,r={}){var i;let s=(e=o3(e,o8))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&n3("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=n1.MOCK_USER;else{t=(0,f.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new rt(re.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new n1(s)}e._authCredentials=new rs(new rr(t,n))}}(r,...e)}return r}function lu(e){return e._firestoreClient||lh(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function lh(e){var t,n,r,i;let s=e._freezeSettings(),a=(i=e._databaseId,new r2(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,o1(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new oQ(e._authCredentials,e._appCheckCredentials,e._queue,a),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lc(rW.fromBase64String(e))}catch(e){throw new rt(re.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new lc(rW.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new rt(re.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rw(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new rt(re.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new rt(re.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return rd(this._lat,e._lat)||rd(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lm=/^__.*__$/;class lg{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new sm(e,this.data,this.fieldMask,t,this.fieldTransforms):new sp(e,this.data,t,this.fieldTransforms)}}class ly{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new sm(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function lv(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw n8()}}class lw{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new lw(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Au({path:n,Vu:!1});return r.mu(e),r}fu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Au({path:n,Vu:!1});return r.Eu(),r}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return lL(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(0===e.length)throw this.pu("Document fields must not be empty");if(lv(this.du)&&lm.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class l_{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||aU(e)}Su(e,t,n,r=!1){return new lw({du:e,methodName:t,wu:n,path:rw.emptyPath(),Vu:!1,yu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lb(e){let t=e._freezeSettings(),n=aU(e._databaseId);return new l_(e._databaseId,!!t.ignoreUndefinedProperties,n)}function lT(e,t,n,r,i,s={}){let a,o;let l=e.Su(s.merge||s.mergeFields?2:0,t,n,i);lP("Data must be an object, but it was:",l,r);let u=lR(r,l);if(s.merge)a=new rK(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=lD(t,r,n);if(!l.contains(i))throw new rt(re.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);lM(e,i)||e.push(i)}a=new rK(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new lg(new ih(u),a,o)}class lE extends lf{_toFieldTransform(e){if(2!==e.du)throw 1===e.du?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lE}}class lI extends lf{_toFieldTransform(e){return new sa(e.path,new i7)}isEqual(e){return e instanceof lI}}function lS(e,t,n,r){let i=e.Su(1,t,n);lP("Data must be an object, but it was:",i,r);let s=[],a=ih.empty();return rF(r,(e,r)=>{let o=lO(t,e,n);r=(0,f.m9)(r);let l=i.fu(o);if(r instanceof lE)s.push(o);else{let e=lk(r,l);null!=e&&(s.push(o),a.set(o,e))}}),new ly(a,new rK(s),i.fieldTransforms)}function lA(e,t,n,r,i,s){let a=e.Su(1,t,n),o=[lD(t,r,n)],l=[i];if(s.length%2!=0)throw new rt(re.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(lD(t,s[e])),l.push(s[e+1]);let u=[],h=ih.empty();for(let e=o.length-1;e>=0;--e)if(!lM(u,o[e])){let t=o[e],n=l[e];n=(0,f.m9)(n);let r=a.fu(t);if(n instanceof lE)u.push(t);else{let e=lk(n,r);null!=e&&(u.push(t),h.set(t,e))}}return new ly(h,new rK(u),a.fieldTransforms)}function lC(e,t,n,r=!1){return lk(n,e.Su(r?4:3,t))}function lk(e,t){if(lx(e=(0,f.m9)(e)))return lP("Unsupported field value:",t,e),lR(e,t);if(e instanceof lf)return function(e,t){if(!lv(t.du))throw t.pu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.pu(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Vu&&4!==t.du)throw t.pu("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=lk(i,t.gu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,f.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,i;return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!rV(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?i6(r):i9(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=rp.fromDate(e);return{timestampValue:sK(t.serializer,n)}}if(e instanceof rp){let n=new rp(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:sK(t.serializer,n)}}if(e instanceof lp)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof lc)return{bytesValue:sG(t.serializer,e._byteString)};if(e instanceof lt){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.pu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:sQ(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.pu(`Unsupported field value: ${o5(e)}`)}(e,t)}function lR(e,t){let n={};return rj(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):rF(e,(e,r)=>{let i=lk(r,t.Ru(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function lx(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof rp||e instanceof lp||e instanceof lc||e instanceof lt||e instanceof lf)}function lP(e,t,n){if(!lx(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=o5(n);throw"an object"===r?t.pu(e+" a custom object"):t.pu(e+" "+r)}}function lD(e,t,n){if((t=(0,f.m9)(t))instanceof ld)return t._internalPath;if("string"==typeof t)return lO(e,t);throw lL("Field path arguments must be of type string or ",e,!1,void 0,n)}let lN=RegExp("[~\\*/\\[\\]]");function lO(e,t,n){if(t.search(lN)>=0)throw lL(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ld(...t.split("."))._internalPath}catch(r){throw lL(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function lL(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new rt(re.INVALID_ARGUMENT,o+e+l)}function lM(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new lU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(lF("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class lU extends lV{data(){return super.data()}}function lF(e,t){return"string"==typeof t?lO(e,t):t instanceof ld?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lj(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new rt(re.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lB{}class l$ extends lB{}function lq(e,t,...n){let r=[];for(let i of(t instanceof lB&&r.push(t),function(e){let t=e.filter(e=>e instanceof lK).length,n=e.filter(e=>e instanceof lz).length;if(t>1||t>0&&n>0)throw new rt(re.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}class lz extends l${constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new lz(e,t,n)}_apply(e){let t=this._parse(e);return lZ(e._query,t),new le(e.firestore,e.converter,iB(e._query,t))}_parse(e){let t=lb(e.firestore);return function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new rt(re.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){lY(a,s);let t=[];for(let n of a)t.push(lJ(r,e,n));o={arrayValue:{values:t}}}else o=lJ(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||lY(a,s),o=lC(n,t,a,"in"===s||"not-in"===s);return iv.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function lH(e,t,n){let r=lF("where",e);return lz._create(r,t,n)}class lK extends lB{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new lK(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:iw.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;for(let e of t.getFlattenedFilters())lZ(n,e),n=iB(n,e)}(e._query,t),new le(e.firestore,e.converter,iB(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class lG extends l${constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new lG(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new rt(re.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new rt(re.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ig(t,n)}(e._query,this._field,this._direction);return new le(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new iL(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function lW(e,t="asc"){let n=lF("orderBy",e);return lG._create(n,t)}class lQ extends l${constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new lQ(e,t,n)}_apply(e){var t;let n=function(e,t,n,r){if(n[0]=(0,f.m9)(n[0]),n[0]instanceof lV)return function(e,t,n,r,i){if(!r)throw new rt(re.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);let s=[];for(let n of iF(e))if(n.field.isKeyField())s.push(it(t,r.key));else{let e=r.data.field(n.field);if(rZ(e))throw new rt(re.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){let e=n.field.canonicalString();throw new rt(re.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new id(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{let i=lb(e.firestore);return function(e,t,n,r,i,s){let a=e.explicitOrderBy;if(i.length>a.length)throw new rt(re.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let o=[];for(let s=0;s<i.length;s++){let l=i[s];if(a[s].field.isKeyField()){if("string"!=typeof l)throw new rt(re.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof l}`);if(!iU(e)&&-1!==l.indexOf("/"))throw new rt(re.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${l}' contains a slash.`);let n=e.path.child(ry.fromString(l));if(!r_.isDocumentKey(n))throw new rt(re.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);let i=new r_(n);o.push(it(t,i))}else{let e=lC(n,r,l);o.push(e)}}return new id(o,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}(e,this.type,this._docOrFields,this._inclusive);return new le(e.firestore,e.converter,new iL((t=e._query).path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,n,t.endAt))}}function lX(...e){return lQ._create("startAfter",e,!1)}function lJ(e,t,n){if("string"==typeof(n=(0,f.m9)(n))){if(""===n)throw new rt(re.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iU(t)&&-1!==n.indexOf("/"))throw new rt(re.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(ry.fromString(n));if(!r_.isDocumentKey(r))throw new rt(re.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return it(e,new r_(r))}if(n instanceof lt)return it(e,n._key);throw new rt(re.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${o5(n)}.`)}function lY(e,t){if(!Array.isArray(e)||0===e.length)throw new rt(re.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function lZ(e,t){let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new rt(re.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new rt(re.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class l0{convertValue(e,t="none"){switch(r6(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rJ(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rY(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw n8()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return rF(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new lp(rJ(e.latitude),rJ(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=r0(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(r1(e));default:return null}}convertTimestamp(e){let t=rX(e);return new rp(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=ry.fromString(e);s3(n)||n8();let r=new r4(n.get(1),n.get(3)),i=new r_(n.popFirst(5));return r.isEqual(t)||n5(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}class l2 extends l0{constructor(e){super(),this.firestore=e}convertBytes(e){return new lc(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class l9 extends lV{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new l6(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(lF("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class l6 extends l9{data(e={}){return super.data(e)}}class l5{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new l4(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new l6(this._firestore,this._userDataWriter,n.key,n,new l4(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new rt(re.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new l6(e._firestore,e._userDataWriter,n.doc.key,n.doc,new l4(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new l6(e._firestore,e._userDataWriter,t.doc.key,t.doc,new l4(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return n8()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l3(e){e=o3(e,lt);let t=o3(e.firestore,lo);return(function(e,t,n={}){let r=new rn;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new oK({next:s=>{t.enqueueAndForget(()=>om(e,a));let o=s.docs.has(n);!o&&s.fromCache?i.reject(new rt(re.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&r&&"server"===r.source?i.reject(new rt(re.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new ow(iM(n.path),s,{includeMetadataChanges:!0,Z_:!0});return op(e,a)})(await o0(e),e.asyncQueue,t,n,r)),r.promise})(lu(t),e._key).then(n=>us(t,e,n))}class l7 extends l0{constructor(e){super(),this.firestore=e}convertBytes(e){return new lc(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,t)}}function l8(e){e=o3(e,le);let t=o3(e.firestore,lo),n=lu(t),r=new l7(t);return lj(e._query),(function(e,t,n={}){let r=new rn;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new ow(n,new oK({next:n=>{t.enqueueAndForget(()=>om(e,s)),n.fromCache&&"server"===r.source?i.reject(new rt(re.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),{includeMetadataChanges:!0,Z_:!0});return op(e,s)})(await o0(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new l5(t,r,e,n))}function ue(e,t,n){e=o3(e,lt);let r=o3(e.firestore,lo),i=l1(e.converter,t,n);return ui(r,[lT(lb(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,sl.none())])}function ut(e,t,n,...r){e=o3(e,lt);let i=o3(e.firestore,lo),s=lb(i);return ui(i,[("string"==typeof(t=(0,f.m9)(t))||t instanceof ld?lA(s,"updateDoc",e._key,t,n,r):lS(s,"updateDoc",e._key,t)).toMutation(e._key,sl.exists(!0))])}function un(e,t){let n=o3(e.firestore,lo),r=li(e),i=l1(e.converter,t);return ui(n,[lT(lb(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,sl.exists(!1))]).then(()=>r)}function ur(e,...t){var n,r,i;let s,a,o;e=(0,f.m9)(e);let l={includeMetadataChanges:!1},u=0;"object"!=typeof t[0]||la(t[u])||(l=t[u],u++);let h={includeMetadataChanges:l.includeMetadataChanges};if(la(t[u])){let e=t[u];t[u]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[u+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[u+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof lt)a=o3(e.firestore,lo),o=iM(e._key.path),s={next:n=>{t[u]&&t[u](us(a,e,n))},error:t[u+1],complete:t[u+2]};else{let n=o3(e,le);a=o3(n.firestore,lo),o=n._query;let r=new l7(a);s={next:e=>{t[u]&&t[u](new l5(a,r,n,e))},error:t[u+1],complete:t[u+2]},lj(e._query)}return function(e,t,n,r){let i=new oK(r),s=new ow(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>op(await o0(e),s)),()=>{i.La(),e.asyncQueue.enqueueAndForget(async()=>om(await o0(e),s))}}(lu(a),o,h,s)}function ui(e,t){return function(e,t){let n=new rn;return e.asyncQueue.enqueueAndForget(async()=>oR(await oZ(e).then(e=>e.syncEngine),t,n)),n.promise}(lu(e),t)}function us(e,t,n){let r=n.docs.get(t._key),i=new l7(e);return new l9(e,i,t._key,r,new l4(n.hasPendingWrites,n.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=lb(e)}set(e,t,n){this._verifyNotCommitted();let r=ul(e,this._firestore),i=l1(r.converter,t,n),s=lT(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,sl.none())),this}update(e,t,n,...r){let i;this._verifyNotCommitted();let s=ul(e,this._firestore);return i="string"==typeof(t=(0,f.m9)(t))||t instanceof ld?lA(this._dataReader,"WriteBatch.update",s._key,t,n,r):lS(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,sl.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=ul(e,this._firestore);return this._mutations=this._mutations.concat(new sw(t._key,sl.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new rt(re.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ul(e,t){if((e=(0,f.m9)(e)).firestore!==t)throw new rt(re.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=lb(e)}get(e){let t=ul(e,this._firestore),n=new l2(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return n8();let r=e[0];if(r.isFoundDocument())return new lV(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new lV(this._firestore,n,t._key,null,t.converter);throw n8()})}set(e,t,n){let r=ul(e,this._firestore),i=l1(r.converter,t,n),s=lT(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){let i;let s=ul(e,this._firestore);return i="string"==typeof(t=(0,f.m9)(t))||t instanceof ld?lA(this._dataReader,"Transaction.update",s._key,t,n,r):lS(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){let t=ul(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=ul(e,this._firestore),n=new l7(this._firestore);return super.get(e).then(e=>new l9(this._firestore,n,t._key,e._document,new l4(!1,!1),t.converter))}}function uh(e,t,n){e=o3(e,lo);let r=Object.assign(Object.assign({},ua),n);return!function(e){if(e.maxAttempts<1)throw new rt(re.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){let r=new rn;return e.asyncQueue.enqueueAndForget(async()=>{let i=await oZ(e).then(e=>e.datastore);new oW(e.asyncQueue,i,n,t,r).ja()}),r.promise}(lu(e),n=>t(new uu(e,n)),r)}function uc(){return new lI("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(e){return lu(e=o3(e,lo)),new uo(e,t=>ui(e,t))}new WeakMap,function(e=!0){n2=h.Jn,(0,h.Xd)(new c.wA("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new lo(new ra(t.getProvider("auth-internal")),new rh(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new rt(re.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new r4(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,h.KN)(n0,"4.4.2",void 0),(0,h.KN)(n0,"4.4.2","esm2017")}()},4444:function(e,t,n){"use strict";n.d(t,{$s:function(){return B},BH:function(){return w},G6:function(){return A},L:function(){return u},LL:function(){return P},P0:function(){return g},Pz:function(){return v},Sg:function(){return _},ZR:function(){return x},aH:function(){return y},b$:function(){return I},eu:function(){return k},hl:function(){return C},m9:function(){return $},ne:function(){return U},pd:function(){return V},q4:function(){return m},ru:function(){return E},tV:function(){return h},uI:function(){return T},vZ:function(){return function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let s of r){if(!i.includes(s))return!1;let r=t[s],a=n[s];if(O(r)&&O(a)){if(!e(r,a))return!1}else if(r!==a)return!1}for(let e of i)if(!r.includes(e))return!1;return!0}},w1:function(){return S},xO:function(){return L},xb:function(){return N},z$:function(){return b},zI:function(){return R},zd:function(){return M}});var r=n(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:((64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},s=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{let s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,u=i>>2,h=(3&i)<<4|a>>4,c=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(c=64)),r.push(n[u],n[h],n[c],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,a=++t<e.length?n[e.charAt(t)]:64,l=++t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==a||null==l)throw new o;let u=i<<2|s>>4;if(r.push(u),64!==a){let e=s<<4&240|a>>2;if(r.push(e),64!==l){let e=a<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let l=function(e){let t=i(e);return a.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},h=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},c=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,d=()=>{if(void 0===r||void 0===r.env)return;let e=r.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},f=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&h(e[1]);return t&&JSON.parse(t)},p=()=>{try{return c()||d()||f()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},m=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},g=e=>{let t=m(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},y=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function T(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function E(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function I(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function S(){let e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function A(){return!function(){var e;let t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function C(){try{return"object"==typeof indexedDB}catch(e){return!1}}function k(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function R(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class x extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(D,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new x(r,a,n)}}let D=/\{\$([^}]+)}/g;function N(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function O(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function M(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function V(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function U(e,t){let n=new F(e,t);return n.subscribe.bind(n)}class F{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(r.next=j),void 0===r.error&&(r.error=j),void 0===r.complete&&(r.complete=j);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function j(){}function B(e,t=1e3,n=2){let r=t*Math.pow(n,e);return Math.min(144e5,r+Math.round(.5*r*(Math.random()-.5)*2))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){return e&&e._delegate?e._delegate:e}},3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8302)}])},8604:function(e,t,n){"use strict";n.d(t,{H:function(){return u},a:function(){return h}});var r=n(5893),i=n(8464),s=n(8036),a=n(6718),o=n(7294);let l=(0,o.createContext)({user:null,token:null}),u=e=>{let{children:t}=e,[n,u]=(0,o.useState)(null),[h,c]=(0,o.useState)(null);return(0,o.useEffect)(()=>{let e=(0,a.Aj)(i.I8,async e=>{if(e){try{let t=await e.getIdToken();c(t)}catch(e){console.error("トークンの取得に失敗しました",e),c(null)}let t=(0,s.JU)(i.db,"users/".concat(e.uid)),n=await (0,s.QT)(t);if(n.exists())u(n.data());else{let n={id:e.uid,name:e.displayName};await (0,s.pl)(t,n),u(n)}}else u(null),c(null)});return()=>e()},[]),(0,r.jsx)(l.Provider,{value:{user:n,token:h},children:t})},h=()=>(0,o.useContext)(l)},8464:function(e,t,n){"use strict";let r;n.d(t,{co:function(){return r},I8:function(){return c},db:function(){return d},wk:function(){return f}});var i=n(3059),s=n(2238);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,s.KN)("firebase","10.8.0","app");var a=n(6718),o=n(9828),l=n(7004),u=n(6650);let h=(0,s.ZF)({apiKey:"AIzaSyA_PsPUUCJi7m8_wAbV7K9HEgzRr-cgxWA",authDomain:"socrates-413218.firebaseapp.com",projectId:"socrates-413218",storageBucket:"socrates-413218.appspot.com",messagingSenderId:"963652110063",appId:"1:963652110063:web:1c2a8ffe0b3a2972a0bd1a",measurementId:"G-JJCYHR1MDN"});r=(0,i.IH)(h);let c=(0,a.v0)(h),d=(0,o.ad)(h);(0,u.cF)(h);let f=(0,l.$C)(h)},8302:function(e,t,n){"use strict";let r,i;n.r(t),n.d(t,{default:function(){return sc}});var s,a,o=n(5893),l=n(8036),u=n(1163),h=n.n(u),c=n(7294),d=n(8464),f=e=>{let[t,n]=(0,c.useState)(null),r=(0,u.useRouter)(),i=(0,c.useRef)(!1);(0,c.useEffect)(()=>{if(!e)return;let t=(0,l.cf)((0,l.JU)(d.db,"users",e),e=>{let t=e.data();n((null==t?void 0:t.sessionId)||null)});return()=>t()},[e]);let s=async(e,t)=>{let n=(0,l.JU)(d.db,"users",e),r=(0,l.JU)(d.db,"sessions",t);try{await (0,l.i3)(d.db,async e=>{e.update(n,{sessionId:null}),e.update(r,{isActive:!1})}),console.log("セッションから正常に抜けました。")}catch(e){console.error("セッションから抜ける際にエラーが発生しました:",e)}};return(0,c.useEffect)(()=>{let n=async n=>{!i.current&&t&&r.asPath.includes("/session/".concat(t))&&!n.includes("/session/".concat(t))&&(i.current=!0,confirm("セッションから抜けますか？")?await s(e,t):r.push("/session/".concat(t)),i.current=!1)};return r.events.on("routeChangeStart",n),()=>{r.events.off("routeChangeStart",n)}},[t,e,r]),{sessionId:t}},p=n(8604),m=n(3059);let g=(0,c.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),y=(0,c.createContext)({}),v=(0,c.createContext)(null),w="undefined"!=typeof document,_=w?c.useLayoutEffect:c.useEffect,b=(0,c.createContext)({strict:!1}),T=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),E="data-"+T("framerAppearId"),I={skipAnimations:!1,useManualTiming:!1};class S{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){let t=this.order.indexOf(e);-1!==t&&(this.order.splice(t,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}let A=["prepare","read","update","preRender","render","postRender"];function C(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},s=A.reduce((e,t)=>(e[t]=function(e){let t=new S,n=new S,r=0,i=!1,s=!1,a=new WeakSet,o={schedule:(e,s=!1,o=!1)=>{let l=o&&i,u=l?t:n;return s&&a.add(e),u.add(e)&&l&&i&&(r=t.order.length),e},cancel:e=>{n.remove(e),a.delete(e)},process:l=>{if(i){s=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length)for(let n=0;n<r;n++){let r=t.order[n];a.has(r)&&(o.schedule(r),e()),r(l)}i=!1,s&&(s=!1,o.process(l))}};return o}(()=>n=!0),e),{}),a=e=>{s[e].process(i)},o=()=>{let s=I.useManualTiming?i.timestamp:performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(s-i.timestamp,40),1),i.timestamp=s,i.isProcessing=!0,A.forEach(a),i.isProcessing=!1,n&&t&&(r=!1,e(o))},l=()=>{n=!0,r=!0,i.isProcessing||e(o)};return{schedule:A.reduce((e,t)=>{let r=s[t];return e[t]=(e,t=!1,i=!1)=>(n||l(),r.schedule(e,t,i)),e},{}),cancel:e=>A.forEach(t=>s[t].cancel(e)),state:i,steps:s}}let{schedule:k,cancel:R}=C(queueMicrotask,!1);function x(e){return e&&"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function P(e){return"string"==typeof e||Array.isArray(e)}function D(e){return null!==e&&"object"==typeof e&&"function"==typeof e.start}let N=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],O=["initial",...N];function L(e){return D(e.animate)||O.some(t=>P(e[t]))}function M(e){return!!(L(e)||e.variants)}function V(e){return Array.isArray(e)?e.join(" "):e}let U={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},F={};for(let e in U)F[e]={isEnabled:t=>U[e].some(e=>!!t[e])};let j=(0,c.createContext)({}),B=(0,c.createContext)({}),$=Symbol.for("motionComponentSymbol"),q=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function z(e){if("string"!=typeof e||e.includes("-"));else if(q.indexOf(e)>-1||/[A-Z]/.test(e))return!0;return!1}let H={},K=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],G=new Set(K);function W(e,{layout:t,layoutId:n}){return G.has(e)||e.startsWith("origin")||(t||void 0!==n)&&(!!H[e]||"opacity"===e)}let Q=e=>!!(e&&e.getVelocity),X={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},J=K.length,Y=e=>t=>"string"==typeof t&&t.startsWith(e),Z=Y("--"),ee=Y("var(--"),et=(e,t)=>t&&"number"==typeof e?t.transform(e):e,en=(e,t,n)=>Math.min(Math.max(n,e),t),er={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},ei={...er,transform:e=>en(0,1,e)},es={...er,default:1},ea=e=>Math.round(1e5*e)/1e5,eo=/(-)?([\d]*\.?[\d])+/g,el=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,eu=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function eh(e){return"string"==typeof e}let ec=e=>({test:t=>eh(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),ed=ec("deg"),ef=ec("%"),ep=ec("px"),em=ec("vh"),eg=ec("vw"),ey={...ef,parse:e=>ef.parse(e)/100,transform:e=>ef.transform(100*e)},ev={...er,transform:Math.round},ew={borderWidth:ep,borderTopWidth:ep,borderRightWidth:ep,borderBottomWidth:ep,borderLeftWidth:ep,borderRadius:ep,radius:ep,borderTopLeftRadius:ep,borderTopRightRadius:ep,borderBottomRightRadius:ep,borderBottomLeftRadius:ep,width:ep,maxWidth:ep,height:ep,maxHeight:ep,size:ep,top:ep,right:ep,bottom:ep,left:ep,padding:ep,paddingTop:ep,paddingRight:ep,paddingBottom:ep,paddingLeft:ep,margin:ep,marginTop:ep,marginRight:ep,marginBottom:ep,marginLeft:ep,rotate:ed,rotateX:ed,rotateY:ed,rotateZ:ed,scale:es,scaleX:es,scaleY:es,scaleZ:es,skew:ed,skewX:ed,skewY:ed,distance:ep,translateX:ep,translateY:ep,translateZ:ep,x:ep,y:ep,z:ep,perspective:ep,transformPerspective:ep,opacity:ei,originX:ey,originY:ey,originZ:ep,zIndex:ev,fillOpacity:ei,strokeOpacity:ei,numOctaves:ev};function e_(e,t,n,r){let{style:i,vars:s,transform:a,transformOrigin:o}=e,l=!1,u=!1,h=!0;for(let e in t){let n=t[e];if(Z(e)){s[e]=n;continue}let r=ew[e],c=et(n,r);if(G.has(e)){if(l=!0,a[e]=c,!h)continue;n!==(r.default||0)&&(h=!1)}else e.startsWith("origin")?(u=!0,o[e]=c):i[e]=c}if(!t.transform&&(l||r?i.transform=function(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let s="";for(let t=0;t<J;t++){let n=K[t];if(void 0!==e[n]){let t=X[n]||n;s+=`${t}(${e[n]}) `}}return t&&!e.z&&(s+="translateZ(0)"),s=s.trim(),i?s=i(e,r?"":s):n&&r&&(s="none"),s}(e.transform,n,h,r):i.transform&&(i.transform="none")),u){let{originX:e="50%",originY:t="50%",originZ:n=0}=o;i.transformOrigin=`${e} ${t} ${n}`}}let eb=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function eT(e,t,n){for(let r in t)Q(t[r])||W(r,n)||(e[r]=t[r])}let eE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function eI(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||eE.has(e)}let eS=e=>!eI(e);try{(s=require("@emotion/is-prop-valid").default)&&(eS=e=>e.startsWith("on")?!eI(e):s(e))}catch(e){}function eA(e,t,n){return"string"==typeof e?e:ep.transform(t+n*e)}let eC={offset:"stroke-dashoffset",array:"stroke-dasharray"},ek={offset:"strokeDashoffset",array:"strokeDasharray"};function eR(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:a,pathSpacing:o=1,pathOffset:l=0,...u},h,c,d){if(e_(e,u,h,d),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:f,style:p,dimensions:m}=e;f.transform&&(m&&(p.transform=f.transform),delete f.transform),m&&(void 0!==i||void 0!==s||p.transform)&&(p.transformOrigin=function(e,t,n){let r=eA(t,e.x,e.width),i=eA(n,e.y,e.height);return`${r} ${i}`}(m,void 0!==i?i:.5,void 0!==s?s:.5)),void 0!==t&&(f.x=t),void 0!==n&&(f.y=n),void 0!==r&&(f.scale=r),void 0!==a&&function(e,t,n=1,r=0,i=!0){e.pathLength=1;let s=i?eC:ek;e[s.offset]=ep.transform(-r);let a=ep.transform(t),o=ep.transform(n);e[s.array]=`${a} ${o}`}(f,a,o,l,!1)}let ex=()=>({...eb(),attrs:{}}),eP=e=>"string"==typeof e&&"svg"===e.toLowerCase();function eD(e,{style:t,vars:n},r,i){for(let s in Object.assign(e.style,t,i&&i.getProjectionStyles(r)),n)e.style.setProperty(s,n[s])}let eN=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function eO(e,t,n,r){for(let n in eD(e,t,void 0,r),t.attrs)e.setAttribute(eN.has(n)?n:T(n),t.attrs[n])}function eL(e,t){let{style:n}=e,r={};for(let i in n)(Q(n[i])||t.style&&Q(t.style[i])||W(i,e))&&(r[i]=n[i]);return r}function eM(e,t){let n=eL(e,t);for(let r in e)(Q(e[r])||Q(t[r]))&&(n[-1!==K.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=e[r]);return n}function eV(e,t,n,r={},i={}){return"function"==typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),"string"==typeof t&&(t=e.variants&&e.variants[t]),"function"==typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),t}function eU(e){let t=(0,c.useRef)(null);return null===t.current&&(t.current=e()),t.current}let eF=e=>Array.isArray(e),ej=e=>!!(e&&"object"==typeof e&&e.mix&&e.toValue),eB=e=>eF(e)?e[e.length-1]||0:e;function e$(e){let t=Q(e)?e.get():e;return ej(t)?t.toValue():t}let eq=e=>(t,n)=>{let r=(0,c.useContext)(y),i=(0,c.useContext)(v),s=()=>(function({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,s){let a={latestValues:function(e,t,n,r){let i={},s=r(e,{});for(let e in s)i[e]=e$(s[e]);let{initial:a,animate:o}=e,l=L(e),u=M(e);t&&u&&!l&&!1!==e.inherit&&(void 0===a&&(a=t.initial),void 0===o&&(o=t.animate));let h=!!n&&!1===n.initial,c=(h=h||!1===a)?o:a;return c&&"boolean"!=typeof c&&!D(c)&&(Array.isArray(c)?c:[c]).forEach(t=>{let n=eV(e,t);if(!n)return;let{transitionEnd:r,transition:s,...a}=n;for(let e in a){let t=a[e];if(Array.isArray(t)){let e=h?t.length-1:0;t=t[e]}null!==t&&(i[e]=t)}for(let e in r)i[e]=r[e]}),i}(r,i,s,e),renderState:t()};return n&&(a.mount=e=>n(r,e,a)),a})(e,t,r,i);return n?s():eU(s)},ez=e=>e,{schedule:eH,cancel:eK,state:eG,steps:eW}=C("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:ez,!0),eQ={useVisualState:eq({scrapeMotionValuesFromProps:eM,createRenderState:ex,onMount:(e,t,{renderState:n,latestValues:r})=>{eH.read(()=>{try{n.dimensions="function"==typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(e){n.dimensions={x:0,y:0,width:0,height:0}}}),eH.render(()=>{eR(n,r,{enableHardwareAcceleration:!1},eP(t.tagName),e.transformTemplate),eO(t,n)})}})},eX={useVisualState:eq({scrapeMotionValuesFromProps:eL,createRenderState:eb})};function eJ(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}let eY=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:!1!==e.isPrimary;function eZ(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}let e0=e=>t=>eY(t)&&e(t,eZ(t));function e1(e,t,n,r){return eJ(e,t,e0(n),r)}let e2=(e,t)=>n=>t(e(n)),e4=(...e)=>e.reduce(e2);function e9(e){let t=null;return()=>null===t&&(t=e,()=>{t=null})}let e6=e9("dragHorizontal"),e5=e9("dragVertical");function e3(e){let t=!1;if("y"===e)t=e5();else if("x"===e)t=e6();else{let e=e6(),n=e5();e&&n?t=()=>{e(),n()}:(e&&e(),n&&n())}return t}function e7(){let e=e3(!0);return!e||(e(),!1)}class e8{constructor(e){this.isMounted=!1,this.node=e}update(){}}function te(e,t){let n="onHover"+(t?"Start":"End");return e1(e.current,"pointer"+(t?"enter":"leave"),(r,i)=>{if("touch"===r.pointerType||e7())return;let s=e.getProps();e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",t),s[n]&&eH.update(()=>s[n](r,i))},{passive:!e.getProps()[n]})}class tt extends e8{mount(){this.unmount=e4(te(this.node,!0),te(this.node,!1))}unmount(){}}class tn extends e8{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=e4(eJ(this.node.current,"focus",()=>this.onFocus()),eJ(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}let tr=(e,t)=>!!t&&(e===t||tr(e,t.parentElement));function ti(e,t){if(!t)return;let n=new PointerEvent("pointer"+e);t(n,eZ(n))}class ts extends e8{constructor(){super(...arguments),this.removeStartListeners=ez,this.removeEndListeners=ez,this.removeAccessibleListeners=ez,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();let n=this.node.getProps(),r=e1(window,"pointerup",(e,t)=>{if(!this.checkPressEnd())return;let{onTap:n,onTapCancel:r,globalTapTarget:i}=this.node.getProps();eH.update(()=>{i||tr(this.node.current,e.target)?n&&n(e,t):r&&r(e,t)})},{passive:!(n.onTap||n.onPointerUp)}),i=e1(window,"pointercancel",(e,t)=>this.cancelPress(e,t),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=e4(r,i),this.startPress(e,t)},this.startAccessiblePress=()=>{let e=eJ(this.node.current,"keydown",e=>{"Enter"!==e.key||this.isPressing||(this.removeEndListeners(),this.removeEndListeners=eJ(this.node.current,"keyup",e=>{"Enter"===e.key&&this.checkPressEnd()&&ti("up",(e,t)=>{let{onTap:n}=this.node.getProps();n&&eH.update(()=>n(e,t))})}),ti("down",(e,t)=>{this.startPress(e,t)}))}),t=eJ(this.node.current,"blur",()=>{this.isPressing&&ti("cancel",(e,t)=>this.cancelPress(e,t))});this.removeAccessibleListeners=e4(e,t)}}startPress(e,t){this.isPressing=!0;let{onTapStart:n,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&eH.update(()=>n(e,t))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!e7()}cancelPress(e,t){if(!this.checkPressEnd())return;let{onTapCancel:n}=this.node.getProps();n&&eH.update(()=>n(e,t))}mount(){let e=this.node.getProps(),t=e1(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=eJ(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=e4(t,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}let ta=new WeakMap,to=new WeakMap,tl=e=>{let t=ta.get(e.target);t&&t(e)},tu=e=>{e.forEach(tl)},th={some:0,all:1};class tc extends e8{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,s={root:t?t.current:void 0,rootMargin:n,threshold:"number"==typeof r?r:th[r]};return function(e,t,n){let r=function({root:e,...t}){let n=e||document;to.has(n)||to.set(n,{});let r=to.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(tu,{root:e,...t})),r[i]}(t);return ta.set(e,n),r.observe(e),()=>{ta.delete(e),r.unobserve(e)}}(this.node.current,s,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),s=t?n:r;s&&s(e)})}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;let{props:e,prevProps:t}=this.node;["amount","margin","root"].some(function({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}(e,t))&&this.startObserver()}unmount(){}}function td(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function tf(e,t,n){let r=e.getProps();return eV(r,t,void 0!==n?n:r.custom,function(e){let t={};return e.values.forEach((e,n)=>t[n]=e.get()),t}(e),function(e){let t={};return e.values.forEach((e,n)=>t[n]=e.getVelocity()),t}(e))}let tp=e=>1e3*e,tm=e=>e/1e3,tg={current:!1},ty=e=>Array.isArray(e)&&"number"==typeof e[0],tv=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,tw={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:tv([0,.65,.55,1]),circOut:tv([.55,0,1,.45]),backIn:tv([.31,.01,.66,-.59]),backOut:tv([.33,1.53,.69,.99])},t_=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function tb(e,t,n,r){if(e===t&&n===r)return ez;let i=t=>(function(e,t,n,r,i){let s,a;let o=0;do(s=t_(a=t+(n-t)/2,r,i)-e)>0?n=a:t=a;while(Math.abs(s)>1e-7&&++o<12);return a})(t,0,1,e,n);return e=>0===e||1===e?e:t_(i(e),t,r)}let tT=tb(.42,0,1,1),tE=tb(0,0,.58,1),tI=tb(.42,0,.58,1),tS=e=>Array.isArray(e)&&"number"!=typeof e[0],tA=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,tC=e=>t=>1-e(1-t),tk=e=>1-Math.sin(Math.acos(e)),tR=tC(tk),tx=tA(tk),tP=tb(.33,1.53,.69,.99),tD=tC(tP),tN=tA(tD),tO={linear:ez,easeIn:tT,easeInOut:tI,easeOut:tE,circIn:tk,circInOut:tx,circOut:tR,backIn:tD,backInOut:tN,backOut:tP,anticipate:e=>(e*=2)<1?.5*tD(e):.5*(2-Math.pow(2,-10*(e-1)))},tL=e=>{if(Array.isArray(e)){ez(4===e.length,"Cubic bezier arrays must contain four numerical values.");let[t,n,r,i]=e;return tb(t,n,r,i)}return"string"==typeof e?(ez(void 0!==tO[e],`Invalid easing type '${e}'`),tO[e]):e},tM=(e,t)=>n=>!!(eh(n)&&eu.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),tV=(e,t,n)=>r=>{if(!eh(r))return r;let[i,s,a,o]=r.match(eo);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(a),alpha:void 0!==o?parseFloat(o):1}},tU=e=>en(0,255,e),tF={...er,transform:e=>Math.round(tU(e))},tj={test:tM("rgb","red"),parse:tV("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+tF.transform(e)+", "+tF.transform(t)+", "+tF.transform(n)+", "+ea(ei.transform(r))+")"},tB={test:tM("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:tj.transform},t$={test:tM("hsl","hue"),parse:tV("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ef.transform(ea(t))+", "+ef.transform(ea(n))+", "+ea(ei.transform(r))+")"},tq={test:e=>tj.test(e)||tB.test(e)||t$.test(e),parse:e=>tj.test(e)?tj.parse(e):t$.test(e)?t$.parse(e):tB.parse(e),transform:e=>eh(e)?e:e.hasOwnProperty("red")?tj.transform(e):t$.transform(e)},tz=(e,t,n)=>-n*e+n*t+e;function tH(e,t,n){return(n<0&&(n+=1),n>1&&(n-=1),n<1/6)?e+(t-e)*6*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}let tK=(e,t,n)=>{let r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},tG=[tB,tj,t$],tW=e=>tG.find(t=>t.test(e));function tQ(e){let t=tW(e);ez(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`);let n=t.parse(e);return t===t$&&(n=function({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,n/=100;let i=0,s=0,a=0;if(t/=100){let r=n<.5?n*(1+t):n+t-n*t,o=2*n-r;i=tH(o,r,e+1/3),s=tH(o,r,e),a=tH(o,r,e-1/3)}else i=s=a=n;return{red:Math.round(255*i),green:Math.round(255*s),blue:Math.round(255*a),alpha:r}}(n)),n}let tX=(e,t)=>{let n=tQ(e),r=tQ(t),i={...n};return e=>(i.red=tK(n.red,r.red,e),i.green=tK(n.green,r.green,e),i.blue=tK(n.blue,r.blue,e),i.alpha=tz(n.alpha,r.alpha,e),tj.transform(i))},tJ={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:ez},tY={regex:el,countKey:"Colors",token:"${c}",parse:tq.parse},tZ={regex:eo,countKey:"Numbers",token:"${n}",parse:er.parse};function t0(e,{regex:t,countKey:n,token:r,parse:i}){let s=e.tokenised.match(t);s&&(e["num"+n]=s.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...s.map(i)))}function t1(e){let t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&t0(n,tJ),t0(n,tY),t0(n,tZ),n}function t2(e){return t1(e).values}function t4(e){let{values:t,numColors:n,numVars:r,tokenised:i}=t1(e),s=t.length;return e=>{let t=i;for(let i=0;i<s;i++)t=i<r?t.replace(tJ.token,e[i]):i<r+n?t.replace(tY.token,tq.transform(e[i])):t.replace(tZ.token,ea(e[i]));return t}}let t9=e=>"number"==typeof e?0:e,t6={test:function(e){var t,n;return isNaN(e)&&eh(e)&&((null===(t=e.match(eo))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(el))||void 0===n?void 0:n.length)||0)>0},parse:t2,createTransformer:t4,getAnimatableNone:function(e){let t=t2(e);return t4(e)(t.map(t9))}},t5=(e,t)=>n=>`${n>0?t:e}`;function t3(e,t){return"number"==typeof e?n=>tz(e,t,n):tq.test(e)?tX(e,t):e.startsWith("var(")?t5(e,t):ne(e,t)}let t7=(e,t)=>{let n=[...e],r=n.length,i=e.map((e,n)=>t3(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}},t8=(e,t)=>{let n={...e,...t},r={};for(let i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=t3(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}},ne=(e,t)=>{let n=t6.createTransformer(t),r=t1(e),i=t1(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?e4(t7(r.values,i.values),n):(ez(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),t5(e,t))},nt=(e,t,n)=>{let r=t-e;return 0===r?1:(n-e)/r},nn=(e,t)=>n=>tz(e,t,n);function nr(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let s=e.length;if(ez(s===t.length,"Both input and output ranges must be the same length"),1===s)return()=>t[0];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());let a=function(e,t,n){let r=[],i=n||function(e){if("number"==typeof e);else if("string"==typeof e)return tq.test(e)?tX:ne;else if(Array.isArray(e))return t7;else if("object"==typeof e)return t8;return nn}(e[0]),s=e.length-1;for(let n=0;n<s;n++){let s=i(e[n],e[n+1]);t&&(s=e4(Array.isArray(t)?t[n]||ez:t,s)),r.push(s)}return r}(t,r,i),o=a.length,l=t=>{let n=0;if(o>1)for(;n<e.length-2&&!(t<e[n+1]);n++);let r=nt(e[n],e[n+1],t);return a[n](r)};return n?t=>l(en(e[0],e[s-1],t)):l}function ni({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){let i=tS(r)?r.map(tL):tL(r),s={done:!1,value:t[0]},a=nr((n&&n.length===t.length?n:function(e){let t=[0];return function(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=nt(0,t,r);e.push(tz(n,1,i))}}(t,e.length-1),t}(t)).map(t=>t*e),t,{ease:Array.isArray(i)?i:t.map(()=>i||tI).splice(0,t.length-1)});return{calculatedDuration:e,next:t=>(s.value=a(t),s.done=t>=e,s)}}function ns(e,t,n){var r,i;let s=Math.max(t-5,0);return r=n-e(s),(i=t-s)?1e3/i*r:0}function na(e,t){return e*Math.sqrt(1-t*t)}let no=["duration","bounce"],nl=["stiffness","damping","mass"];function nu(e,t){return t.some(t=>void 0!==e[t])}function nh({keyframes:e,restDelta:t,restSpeed:n,...r}){let i;let s=e[0],a=e[e.length-1],o={done:!1,value:s},{stiffness:l,damping:u,mass:h,duration:c,velocity:d,isResolvedFromDuration:f}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!nu(e,nl)&&nu(e,no)){let n=function({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,s;ez(e<=tp(10),"Spring duration must be 10 seconds or less");let a=1-t;a=en(.05,1,a),e=en(.01,10,tm(e)),a<1?(i=t=>{let r=t*a,i=r*e;return .001-(r-n)/na(t,a)*Math.exp(-i)},s=t=>{let r=t*a*e,s=Math.pow(a,2)*Math.pow(t,2)*e,o=na(Math.pow(t,2),a);return(r*n+n-s)*Math.exp(-r)*(-i(t)+.001>0?-1:1)/o}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),s=t=>e*e*(n-t)*Math.exp(-t*e));let o=function(e,t,n){let r=n;for(let n=1;n<12;n++)r-=e(r)/t(r);return r}(i,s,5/e);if(e=tp(e),isNaN(o))return{stiffness:100,damping:10,duration:e};{let t=Math.pow(o,2)*r;return{stiffness:t,damping:2*a*Math.sqrt(r*t),duration:e}}}(e);(t={...t,...n,mass:1}).isResolvedFromDuration=!0}return t}({...r,velocity:-tm(r.velocity||0)}),p=d||0,m=u/(2*Math.sqrt(l*h)),g=a-s,y=tm(Math.sqrt(l/h)),v=5>Math.abs(g);if(n||(n=v?.01:2),t||(t=v?.005:.5),m<1){let e=na(y,m);i=t=>a-Math.exp(-m*y*t)*((p+m*y*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}else if(1===m)i=e=>a-Math.exp(-y*e)*(g+(p+y*g)*e);else{let e=y*Math.sqrt(m*m-1);i=t=>{let n=Math.exp(-m*y*t),r=Math.min(e*t,300);return a-n*((p+m*y*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}return{calculatedDuration:f&&c||null,next:e=>{let r=i(e);if(f)o.done=e>=c;else{let s=p;0!==e&&(s=m<1?ns(i,e,r):0);let l=Math.abs(s)<=n,u=Math.abs(a-r)<=t;o.done=l&&u}return o.value=o.done?a:r,o}}}function nc({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:u=.5,restSpeed:h}){let c,d;let f=e[0],p={done:!1,value:f},m=e=>void 0!==o&&e<o||void 0!==l&&e>l,g=e=>void 0===o?l:void 0===l?o:Math.abs(o-e)<Math.abs(l-e)?o:l,y=n*t,v=f+y,w=void 0===a?v:a(v);w!==v&&(y=w-f);let _=e=>-y*Math.exp(-e/r),b=e=>w+_(e),T=e=>{let t=_(e),n=b(e);p.done=Math.abs(t)<=u,p.value=p.done?w:n},E=e=>{m(p.value)&&(c=e,d=nh({keyframes:[p.value,g(p.value)],velocity:ns(b,e,p.value),damping:i,stiffness:s,restDelta:u,restSpeed:h}))};return E(0),{calculatedDuration:null,next:e=>{let t=!1;return(d||void 0!==c||(t=!0,T(e),E(e)),void 0!==c&&e>c)?d.next(e-c):(t||T(e),p)}}}function nd(){r=void 0}let nf={now:()=>(void 0===r&&nf.set(eG.isProcessing||I.useManualTiming?eG.timestamp:performance.now()),r),set:e=>{r=e,queueMicrotask(nd)}},np=e=>{let t=({timestamp:t})=>e(t);return{start:()=>eH.update(t,!0),stop:()=>eK(t),now:()=>eG.isProcessing?eG.timestamp:nf.now()}};function nm(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}let ng={decay:nc,inertia:nc,tween:ni,keyframes:ni,spring:nh};function ny({autoplay:e=!0,delay:t=0,driver:n=np,keyframes:r,type:i="keyframes",repeat:s=0,repeatDelay:a=0,repeatType:o="loop",onPlay:l,onStop:u,onComplete:h,onUpdate:c,...d}){let f,p,m,g,y,v=1,w=!1,_=()=>{p=new Promise(e=>{f=e})};_();let b=ng[i]||ni;b!==ni&&"number"!=typeof r[0]&&(g=nr([0,100],r,{clamp:!1}),r=[0,100]);let T=b({...d,keyframes:r});"mirror"===o&&(y=b({...d,keyframes:[...r].reverse(),velocity:-(d.velocity||0)}));let E="idle",I=null,S=null,A=null;null===T.calculatedDuration&&s&&(T.calculatedDuration=nm(T));let{calculatedDuration:C}=T,k=1/0,R=1/0;null!==C&&(R=(k=C+a)*(s+1)-a);let x=0,P=e=>{if(null===S)return;v>0&&(S=Math.min(S,e)),v<0&&(S=Math.min(e-R/v,S));let n=(x=null!==I?I:Math.round(e-S)*v)-t*(v>=0?1:-1),i=v>=0?n<0:n>R;x=Math.max(n,0),"finished"===E&&null===I&&(x=R);let l=x,u=T;if(s){let e=Math.min(x,R)/k,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,(t=Math.min(t,s+1))%2&&("reverse"===o?(n=1-n,a&&(n-=a/k)):"mirror"===o&&(u=y)),l=en(0,1,n)*k}let h=i?{done:!1,value:r[0]}:u.next(l);g&&(h.value=g(h.value));let{done:d}=h;i||null===C||(d=v>=0?x>=R:x<=0);let f=null===I&&("finished"===E||"running"===E&&d);return c&&c(h.value),f&&O(),h},D=()=>{m&&m.stop(),m=void 0},N=()=>{E="idle",D(),f(),_(),S=A=null},O=()=>{E="finished",h&&h(),D(),f()},L=()=>{if(w)return;m||(m=n(P));let e=m.now();l&&l(),null!==I?S=e-I:S&&"finished"!==E||(S=e),"finished"===E&&_(),A=S,I=null,E="running",m.start()};e&&L();let M={then:(e,t)=>p.then(e,t),get time(){return tm(x)},set time(newTime){x=newTime=tp(newTime),null===I&&m&&0!==v?S=m.now()-newTime/v:I=newTime},get duration(){return tm(null===T.calculatedDuration?nm(T):T.calculatedDuration)},get speed(){return v},set speed(newSpeed){if(newSpeed===v||!m)return;v=newSpeed,M.time=tm(x)},get state(){return E},play:L,pause:()=>{E="paused",I=x},stop:()=>{w=!0,"idle"!==E&&(E="idle",u&&u(),N())},cancel:()=>{null!==A&&P(A),N()},complete:()=>{E="finished"},sample:e=>(S=0,P(e))};return M}let nv=(a=()=>Object.hasOwnProperty.call(Element.prototype,"animate"),()=>(void 0===i&&(i=a()),i)),nw=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),n_=(e,t)=>"spring"===t.type||"backgroundColor"===e||!function e(t){return!!(!t||"string"==typeof t&&tw[t]||ty(t)||Array.isArray(t)&&t.every(e))}(t.ease),nb={type:"spring",stiffness:500,damping:25,restSpeed:10},nT=e=>({type:"spring",stiffness:550,damping:0===e?2*Math.sqrt(550):30,restSpeed:10}),nE={type:"keyframes",duration:.8},nI={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},nS=(e,{keyframes:t})=>t.length>2?nE:G.has(e)?e.startsWith("scale")?nT(t[1]):nb:nI,nA=(e,t)=>"zIndex"!==e&&!!("number"==typeof t||Array.isArray(t)||"string"==typeof t&&(t6.test(t)||"0"===t)&&!t.startsWith("url(")),nC=new Set(["brightness","contrast","saturate","opacity"]);function nk(e){let[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;let[r]=n.match(eo)||[];if(!r)return e;let i=n.replace(r,""),s=nC.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}let nR=/([a-z-]*)\(.*?\)/g,nx={...t6,getAnimatableNone:e=>{let t=e.match(nR);return t?t.map(nk).join(" "):e}},nP={...ew,color:tq,backgroundColor:tq,outlineColor:tq,fill:tq,stroke:tq,borderColor:tq,borderTopColor:tq,borderRightColor:tq,borderBottomColor:tq,borderLeftColor:tq,filter:nx,WebkitFilter:nx},nD=e=>nP[e];function nN(e,t){let n=nD(e);return n!==nx&&(n=t6),n.getAnimatableNone?n.getAnimatableNone(t):void 0}let nO=e=>/^0[^.\s]+$/.test(e);function nL(e,t){return e[t]||e.default||e}let nM=(e,t,n,r={})=>i=>{let s=nL(r,e)||{},a=s.delay||r.delay||0,{elapsed:o=0}=r;o-=tp(a);let l=function(e,t,n,r){let i,s;let a=nA(t,n);i=Array.isArray(n)?[...n]:[null,n];let o=void 0!==r.from?r.from:e.get(),l=[];for(let e=0;e<i.length;e++){var u;null===i[e]&&(i[e]=0===e?o:i[e-1]),("number"==typeof(u=i[e])?0===u:null!==u?"none"===u||"0"===u||nO(u):void 0)&&l.push(e),"string"==typeof i[e]&&"none"!==i[e]&&"0"!==i[e]&&(s=i[e])}if(a&&l.length&&s)for(let e=0;e<l.length;e++)i[l[e]]=nN(t,s);return i}(t,e,n,s),u=l[0],h=l[l.length-1],c=nA(e,u),d=nA(e,h);ez(c===d,`You are trying to animate ${e} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`);let f={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...s,delay:-o,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if(!function({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:a,repeatDelay:o,from:l,elapsed:u,...h}){return!!Object.keys(h).length}(s)&&(f={...f,...nS(e,f)}),f.duration&&(f.duration=tp(f.duration)),f.repeatDelay&&(f.repeatDelay=tp(f.repeatDelay)),!c||!d||tg.current||!1===s.type||I.skipAnimations)return function({keyframes:e,delay:t,onUpdate:n,onComplete:r}){let i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:ez,pause:ez,stop:ez,then:e=>(e(),Promise.resolve()),cancel:ez,complete:ez});return t?ny({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}(tg.current?{...f,delay:0}:f);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){let n=function(e,t,{onUpdate:n,onComplete:r,...i}){let s,a;if(!(nv()&&nw.has(t)&&!i.repeatDelay&&"mirror"!==i.repeatType&&0!==i.damping&&"inertia"!==i.type))return!1;let o=!1,l=!1,u=()=>{a=new Promise(e=>{s=e})};u();let{keyframes:h,duration:c=300,ease:d,times:f}=i;if(n_(t,i)){let e=ny({...i,repeat:0,delay:0}),t={done:!1,value:h[0]},n=[],r=0;for(;!t.done&&r<2e4;)t=e.sample(r),n.push(t.value),r+=10;f=void 0,h=n,c=r-10,d="linear"}let p=function(e,t,n,{delay:r=0,duration:i,repeat:s=0,repeatType:a="loop",ease:o,times:l}={}){let u={[t]:n};l&&(u.offset=l);let h=function e(t){if(t)return ty(t)?tv(t):Array.isArray(t)?t.map(e):tw[t]}(o);return Array.isArray(h)&&(u.easing=h),e.animate(u,{delay:r,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:"reverse"===a?"alternate":"normal"})}(e.owner.current,t,h,{...i,duration:c,ease:d,times:f}),m=()=>{l=!1,p.cancel()},g=()=>{l=!0,eH.update(m),s(),u()};return p.onfinish=()=>{l||(e.set(function(e,{repeat:t,repeatType:n="loop"}){let r=t&&"loop"!==n&&t%2==1?0:e.length-1;return e[r]}(h,i)),r&&r(),g())},{then:(e,t)=>a.then(e,t),attachTimeline:e=>(p.timeline=e,p.onfinish=null,ez),get time(){return tm(p.currentTime||0)},set time(newTime){p.currentTime=tp(newTime)},get speed(){return p.playbackRate},set speed(newSpeed){p.playbackRate=newSpeed},get duration(){return tm(c)},play:()=>{o||(p.play(),eK(m))},pause:()=>p.pause(),stop:()=>{if(o=!0,"idle"===p.playState)return;let{currentTime:t}=p;if(t){let n=ny({...i,autoplay:!1});e.setWithVelocity(n.sample(t-10).value,n.sample(t).value,10)}g()},complete:()=>{l||p.finish()},cancel:g}}(t,e,f);if(n)return n}return ny(f)};function nV(e){return!!(Q(e)&&e.add)}let nU=e=>/^\-?\d*\.?\d+$/.test(e);function nF(e,t){-1===e.indexOf(t)&&e.push(t)}function nj(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}class nB{constructor(){this.subscriptions=[]}add(e){return nF(this.subscriptions,e),()=>nj(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}let n$=e=>!isNaN(parseFloat(e)),nq={current:void 0};class nz{constructor(e,t={}){this.version="11.0.3",this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(e,t=!0)=>{let n=nf.now();this.updatedAt!==n&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),t&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.canTrackVelocity=n$(this.current),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=nf.now()}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new nB);let n=this.events[e].add(t);return"change"===e?()=>{n(),eH.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return nq.current&&nq.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){var e;let t=nf.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||t-this.updatedAt>30)return 0;let n=Math.min(this.updatedAt-this.prevUpdatedAt,30);return e=parseFloat(this.current)-parseFloat(this.prevFrameValue),n?1e3/n*e:0}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function nH(e,t){return new nz(e,t)}let nK=e=>t=>t.test(e),nG=[er,ep,ef,ed,eg,em,{test:e=>"auto"===e,parse:e=>e}],nW=e=>nG.find(nK(e)),nQ=[...nG,tq,t6],nX=e=>nQ.find(nK(e));function nJ(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:a,...o}=e.makeTargetAnimatable(t),l=e.getValue("willChange");r&&(s=r);let u=[],h=i&&e.animationState&&e.animationState.getState()[i];for(let t in o){let r=e.getValue(t),i=o[t];if(!r||void 0===i||h&&function({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&!0!==t[n];return t[n]=!1,r}(h,t))continue;let a={delay:n,elapsed:0,...nL(s||{},t)};if(window.HandoffAppearAnimations){let n=e.getProps()[E];if(n){let e=window.HandoffAppearAnimations(n,t,r,eH);null!==e&&(a.elapsed=e,a.isHandoff=!0)}}let c=!a.isHandoff&&!function(e,t){let n=e.get();if(!Array.isArray(t))return n!==t;for(let e=0;e<t.length;e++)if(t[e]!==n)return!0}(r,i);if("spring"===a.type&&(r.getVelocity()||a.velocity)&&(c=!1),r.animation&&(c=!1),c)continue;r.start(nM(t,r,i,e.shouldReduceMotion&&G.has(t)?{type:!1}:a));let d=r.animation;nV(l)&&(l.add(t),d.then(()=>l.remove(t))),u.push(d)}return a&&Promise.all(u).then(()=>{a&&function(e,t){let n=tf(e,t),{transitionEnd:r={},transition:i={},...s}=n?e.makeTargetAnimatable(n,!1):{};for(let t in s={...s,...r}){let n=eB(s[t]);e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,nH(n))}}(e,a)}),u}function nY(e,t,n={}){let r=tf(e,t,n.custom),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let s=r?()=>Promise.all(nJ(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:s=0,staggerChildren:a,staggerDirection:o}=i;return function(e,t,n=0,r=0,i=1,s){let a=[],o=(e.variantChildren.size-1)*r,l=1===i?(e=0)=>e*r:(e=0)=>o-e*r;return Array.from(e.variantChildren).sort(nZ).forEach((e,r)=>{e.notify("AnimationStart",t),a.push(nY(e,t,{...s,delay:n+l(r)}).then(()=>e.notify("AnimationComplete",t)))}),Promise.all(a)}(e,t,s+r,a,o,n)}:()=>Promise.resolve(),{when:o}=i;if(!o)return Promise.all([s(),a(n.delay)]);{let[e,t]="beforeChildren"===o?[s,a]:[a,s];return e().then(()=>t())}}function nZ(e,t){return e.sortNodePosition(t)}let n0=[...N].reverse(),n1=N.length;function n2(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}class n4 extends e8{constructor(e){super(e),e.animationState||(e.animationState=function(e){let t=t=>Promise.all(t.map(({animation:t,options:n})=>(function(e,t,n={}){let r;if(e.notify("AnimationStart",t),Array.isArray(t))r=Promise.all(t.map(t=>nY(e,t,n)));else if("string"==typeof t)r=nY(e,t,n);else{let i="function"==typeof t?tf(e,t,n.custom):t;r=Promise.all(nJ(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))})(e,t,n))),n={animate:n2(!0),whileInView:n2(),whileHover:n2(),whileTap:n2(),whileDrag:n2(),whileFocus:n2(),exit:n2()},r=!0,i=(t,n)=>{let r=tf(e,n);if(r){let{transition:e,transitionEnd:n,...i}=r;t={...t,...i,...n}}return t};function s(s,a){let o=e.getProps(),l=e.getVariantContext(!0)||{},u=[],h=new Set,c={},d=1/0;for(let t=0;t<n1;t++){var f;let p=n0[t],m=n[p],g=void 0!==o[p]?o[p]:l[p],y=P(g),v=p===a?m.isActive:null;!1===v&&(d=t);let w=g===l[p]&&g!==o[p]&&y;if(w&&r&&e.manuallyAnimateOnMount&&(w=!1),m.protectedKeys={...c},!m.isActive&&null===v||!g&&!m.prevProp||D(g)||"boolean"==typeof g)continue;let _=(f=m.prevProp,("string"==typeof g?g!==f:!!Array.isArray(g)&&!td(g,f))||p===a&&m.isActive&&!w&&y||t>d&&y),b=!1,T=Array.isArray(g)?g:[g],E=T.reduce(i,{});!1===v&&(E={});let{prevResolvedValues:I={}}=m,S={...I,...E},A=e=>{_=!0,h.has(e)&&(b=!0,h.delete(e)),m.needsAnimating[e]=!0};for(let e in S){let t=E[e],n=I[e];if(!c.hasOwnProperty(e))(eF(t)&&eF(n)?td(t,n):t===n)?void 0!==t&&h.has(e)?A(e):m.protectedKeys[e]=!0:void 0!==t?A(e):h.add(e)}m.prevProp=g,m.prevResolvedValues=E,m.isActive&&(c={...c,...E}),r&&e.blockInitialAnimation&&(_=!1),_&&(!w||b)&&u.push(...T.map(e=>({animation:e,options:{type:p,...s}})))}if(h.size){let t={};h.forEach(n=>{let r=e.getBaseTarget(n);void 0!==r&&(t[n]=r)}),u.push({animation:t})}let p=!!u.length;return r&&(!1===o.initial||o.initial===o.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,p?t(u):Promise.resolve()}return{animateChanges:s,setActive:function(t,r,i){var a;if(n[t].isActive===r)return Promise.resolve();null===(a=e.variantChildren)||void 0===a||a.forEach(e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,r)}),n[t].isActive=r;let o=s(i,t);for(let e in n)n[e].protectedKeys={};return o},setAnimateFunction:function(n){t=n(e)},getState:()=>n}}(e))}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();this.unmount(),D(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}let n9=0;class n6 extends e8{constructor(){super(...arguments),this.id=n9++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t,custom:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;let i=this.node.animationState.setActive("exit",!e,{custom:null!=n?n:this.node.getProps().custom});t&&!e&&i.then(()=>t(this.id))}mount(){let{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}let n5=(e,t)=>Math.abs(e-t);class n3{constructor(e,t,{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:i=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{var e,t;if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let n=re(this.lastMoveEventInfo,this.history),r=null!==this.startEvent,i=(e=n.offset,t={x:0,y:0},Math.sqrt(n5(e.x,t.x)**2+n5(e.y,t.y)**2)>=3);if(!r&&!i)return;let{point:s}=n,{timestamp:a}=eG;this.history.push({...s,timestamp:a});let{onStart:o,onMove:l}=this.handlers;r||(o&&o(this.lastMoveEvent,n),this.startEvent=this.lastMoveEvent),l&&l(this.lastMoveEvent,n)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=n7(t,this.transformPagePoint),eH.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let s=re("pointercancel"===e.type?this.lastMoveEventInfo:n7(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,s),r&&r(e,s)},!eY(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;let s=n7(eZ(e),this.transformPagePoint),{point:a}=s,{timestamp:o}=eG;this.history=[{...a,timestamp:o}];let{onSessionStart:l}=t;l&&l(e,re(s,this.history)),this.removeListeners=e4(e1(this.contextWindow,"pointermove",this.handlePointerMove),e1(this.contextWindow,"pointerup",this.handlePointerUp),e1(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),eK(this.updatePoint)}}function n7(e,t){return t?{point:t(e.point)}:e}function n8(e,t){return{x:e.x-t.x,y:e.y-t.y}}function re({point:e},t){return{point:e,delta:n8(e,rt(t)),offset:n8(e,t[0]),velocity:function(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=rt(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>tp(.1)));)n--;if(!r)return{x:0,y:0};let s=tm(i.timestamp-r.timestamp);if(0===s)return{x:0,y:0};let a={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}(t,0)}}function rt(e){return e[e.length-1]}function rn(e){return e.max-e.min}function rr(e,t=0,n=.01){return Math.abs(e-t)<=n}function ri(e,t,n,r=.5){e.origin=r,e.originPoint=tz(t.min,t.max,e.origin),e.scale=rn(n)/rn(t),(rr(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=tz(n.min,n.max,e.origin)-e.originPoint,(rr(e.translate)||isNaN(e.translate))&&(e.translate=0)}function rs(e,t,n,r){ri(e.x,t.x,n.x,r?r.originX:void 0),ri(e.y,t.y,n.y,r?r.originY:void 0)}function ra(e,t,n){e.min=n.min+t.min,e.max=e.min+rn(t)}function ro(e,t,n){e.min=t.min-n.min,e.max=e.min+rn(t)}function rl(e,t,n){ro(e.x,t.x,n.x),ro(e.y,t.y,n.y)}function ru(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function rh(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function rc(e,t,n){return{min:rd(e,t),max:rd(e,n)}}function rd(e,t){return"number"==typeof e?e:e[t]||0}let rf=()=>({translate:0,scale:1,origin:0,originPoint:0}),rp=()=>({x:rf(),y:rf()}),rm=()=>({min:0,max:0}),rg=()=>({x:rm(),y:rm()});function ry(e){return[e("x"),e("y")]}function rv({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function rw(e){return void 0===e||1===e}function r_({scale:e,scaleX:t,scaleY:n}){return!rw(e)||!rw(t)||!rw(n)}function rb(e){return r_(e)||rT(e)||e.z||e.rotate||e.rotateX||e.rotateY}function rT(e){var t,n;return(t=e.x)&&"0%"!==t||(n=e.y)&&"0%"!==n}function rE(e,t,n,r,i){return void 0!==i&&(e=r+i*(e-r)),r+n*(e-r)+t}function rI(e,t=0,n=1,r,i){e.min=rE(e.min,t,n,r,i),e.max=rE(e.max,t,n,r,i)}function rS(e,{x:t,y:n}){rI(e.x,t.translate,t.scale,t.originPoint),rI(e.y,n.translate,n.scale,n.originPoint)}function rA(e){return Number.isInteger(e)?e:e>1.0000000000001||e<.999999999999?e:1}function rC(e,t){e.min=e.min+t,e.max=e.max+t}function rk(e,t,[n,r,i]){let s=void 0!==t[i]?t[i]:.5,a=tz(e.min,e.max,s);rI(e,t[n],t[r],a,t.scale)}let rR=["x","scaleX","originX"],rx=["y","scaleY","originY"];function rP(e,t){rk(e.x,t,rR),rk(e.y,t,rx)}function rD(e,t){return rv(function(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}let rN=({current:e})=>e?e.ownerDocument.defaultView:null,rO=new WeakMap;class rL{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=rg(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){let{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;let{dragSnapToOrigin:r}=this.getProps();this.panSession=new n3(e,{onSessionStart:e=>{let{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(eZ(e,"page").point)},onStart:(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=e3(n),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ry(e=>{let t=this.getAxisMotionValue(e).get()||0;if(ef.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];if(r){let e=rn(r);t=parseFloat(t)/100*e}}}this.originPoint[e]=t}),i&&eH.update(()=>i(e,t),!1,!0);let{animationState:s}=this.visualElement;s&&s.setActive("whileDrag",!0)},onMove:(e,t)=>{let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:s}=this.getProps();if(!n&&!this.openGlobalLock)return;let{offset:a}=t;if(r&&null===this.currentDirection){this.currentDirection=function(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}(a),null!==this.currentDirection&&i&&i(this.currentDirection);return}this.updateAxis("x",t.point,a),this.updateAxis("y",t.point,a),this.visualElement.render(),s&&s(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>ry(e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())})},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:rN(this.visualElement)})}stop(e,t){let n=this.isDragging;if(this.cancel(),!n)return;let{velocity:r}=t;this.startAnimation(r);let{onDragEnd:i}=this.getProps();i&&eH.update(()=>i(e,t))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;let{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!rM(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),s=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(s=function(e,{min:t,max:n},r){return void 0!==t&&e<t?e=r?tz(t,e,r.min):Math.max(e,t):void 0!==n&&e>n&&(e=r?tz(n,e,r.max):Math.min(e,n)),e}(s,this.constraints[e],this.elastic[e])),i.set(s)}resolveConstraints(){var e;let{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,i=this.constraints;t&&x(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=function(e,{top:t,left:n,bottom:r,right:i}){return{x:ru(e.x,n,i),y:ru(e.y,t,r)}}(r.layoutBox,t):this.constraints=!1,this.elastic=function(e=.35){return!1===e?e=0:!0===e&&(e=.35),{x:rc(e,"left","right"),y:rc(e,"top","bottom")}}(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&ry(e=>{this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){let n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(r.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){var e;let{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!x(t))return!1;let r=t.current;ez(null!==r,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");let{projection:i}=this.visualElement;if(!i||!i.layout)return!1;let s=function(e,t,n){let r=rD(e,n),{scroll:i}=t;return i&&(rC(r.x,i.offset.x),rC(r.y,i.offset.y)),r}(r,i.root,this.visualElement.getTransformPagePoint()),a={x:rh((e=i.layout.layoutBox).x,s.x),y:rh(e.y,s.y)};if(n){let e=n(function({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=rv(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),o=this.constraints||{};return Promise.all(ry(a=>{if(!rM(a,t,this.currentDirection))return;let l=o&&o[a]||{};s&&(l={min:0,max:0});let u={type:"inertia",velocity:n?e[a]:0,bounceStiffness:r?200:1e6,bounceDamping:r?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(a,u)})).then(a)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return n.start(nM(e,n,0,t))}stopAnimation(){ry(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ry(e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()})}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){let t="_drag"+e.toUpperCase(),n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){ry(t=>{let{drag:n}=this.getProps();if(!rM(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:s}=r.layout.layoutBox[t];i.set(e[t]-tz(n,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!x(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};ry(e=>{let t=this.getAxisMotionValue(e);if(t){let n=t.get();r[e]=function(e,t){let n=.5,r=rn(e),i=rn(t);return i>r?n=nt(t.min,t.max-r,e.min):r>i&&(n=nt(e.min,e.max-i,t.min)),en(0,1,n)}({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),ry(t=>{if(!rM(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:s}=this.constraints[t];n.set(tz(i,s,r[t]))})}addListeners(){if(!this.visualElement.current)return;rO.set(this.visualElement,this);let e=e1(this.visualElement.current,"pointerdown",e=>{let{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)}),t=()=>{let{dragConstraints:e}=this.getProps();x(e)&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),t();let i=eJ(window,"resize",()=>this.scalePositionWithinConstraints()),s=n.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(ry(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())});return()=>{i(),e(),r(),s&&s()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:s=.35,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:s,dragMomentum:a}}}function rM(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}class rV extends e8{constructor(e){super(e),this.removeGroupControls=ez,this.removeListeners=ez,this.controls=new rL(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ez}unmount(){this.removeGroupControls(),this.removeListeners()}}let rU=e=>(t,n)=>{e&&eH.update(()=>e(t,n))};class rF extends e8{constructor(){super(...arguments),this.removePointerDownListener=ez}onPointerDown(e){this.session=new n3(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:rN(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:rU(e),onStart:rU(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&eH.update(()=>r(e,t))}}}mount(){this.removePointerDownListener=e1(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let rj={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function rB(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}let r$={correct:(e,t)=>{if(!t.target)return e;if("string"==typeof e){if(!ep.test(e))return e;e=parseFloat(e)}let n=rB(e,t.target.x),r=rB(e,t.target.y);return`${n}% ${r}%`}};class rq extends c.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;Object.assign(H,rH),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),rj.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,s=n.projection;return s&&(s.isPresent=i,r||e.layoutDependency!==t||void 0===t?s.willUpdate():this.safeToRemove(),e.isPresent===i||(i?s.promote():s.relegate()||eH.postRender(()=>{let e=s.getStack();e&&e.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),k.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}}function rz(e){let[t,n]=function(){let e=(0,c.useContext)(v);if(null===e)return[!0,null];let{isPresent:t,onExitComplete:n,register:r}=e,i=(0,c.useId)();return(0,c.useEffect)(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}(),r=(0,c.useContext)(j);return c.createElement(rq,{...e,layoutGroup:r,switchLayoutGroup:(0,c.useContext)(B),isPresent:t,safeToRemove:n})}let rH={borderRadius:{...r$,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:r$,borderTopRightRadius:r$,borderBottomLeftRadius:r$,borderBottomRightRadius:r$,boxShadow:{correct:(e,{treeScale:t,projectionDelta:n})=>{let r=t6.parse(e);if(r.length>5)return e;let i=t6.createTransformer(e),s="number"!=typeof r[0]?1:0,a=n.x.scale*t.x,o=n.y.scale*t.y;r[0+s]/=a,r[1+s]/=o;let l=tz(a,o,.5);return"number"==typeof r[2+s]&&(r[2+s]/=l),"number"==typeof r[3+s]&&(r[3+s]/=l),i(r)}}},rK=["TopLeft","TopRight","BottomLeft","BottomRight"],rG=rK.length,rW=e=>"string"==typeof e?parseFloat(e):e,rQ=e=>"number"==typeof e||ep.test(e);function rX(e,t){return void 0!==e[t]?e[t]:e.borderRadius}let rJ=rZ(0,.5,tR),rY=rZ(.5,.95,ez);function rZ(e,t,n){return r=>r<e?0:r>t?1:n(nt(e,t,r))}function r0(e,t){e.min=t.min,e.max=t.max}function r1(e,t){r0(e.x,t.x),r0(e.y,t.y)}function r2(e,t,n,r,i){return e-=t,e=r+1/n*(e-r),void 0!==i&&(e=r+1/i*(e-r)),e}function r4(e,t,[n,r,i],s,a){!function(e,t=0,n=1,r=.5,i,s=e,a=e){if(ef.test(t)&&(t=parseFloat(t),t=tz(a.min,a.max,t/100)-a.min),"number"!=typeof t)return;let o=tz(s.min,s.max,r);e===s&&(o-=t),e.min=r2(e.min,t,n,o,i),e.max=r2(e.max,t,n,o,i)}(e,t[n],t[r],t[i],t.scale,s,a)}let r9=["x","scaleX","originX"],r6=["y","scaleY","originY"];function r5(e,t,n,r){r4(e.x,t,r9,n?n.x:void 0,r?r.x:void 0),r4(e.y,t,r6,n?n.y:void 0,r?r.y:void 0)}function r3(e){return 0===e.translate&&1===e.scale}function r7(e){return r3(e.x)&&r3(e.y)}function r8(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function ie(e){return rn(e.x)/rn(e.y)}class it{constructor(){this.members=[]}add(e){nF(this.members,e),e.scheduleRender()}remove(e){if(nj(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t;let n=this.members.findIndex(t=>e===t);if(0===n)return!1;for(let e=n;e>=0;e--){let n=this.members[e];if(!1!==n.isPresent){t=n;break}}return!!t&&(this.promote(t),!0)}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);let{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function ir(e,t,n){let r="",i=e.x.translate/t.x,s=e.y.translate/t.y;if((i||s)&&(r=`translate3d(${i}px, ${s}px, 0) `),(1!==t.x||1!==t.y)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{rotate:e,rotateX:t,rotateY:i}=n;e&&(r+=`rotate(${e}deg) `),t&&(r+=`rotateX(${t}deg) `),i&&(r+=`rotateY(${i}deg) `)}let a=e.x.scale*t.x,o=e.y.scale*t.y;return(1!==a||1!==o)&&(r+=`scale(${a}, ${o})`),r||"none"}let ii=(e,t)=>e.depth-t.depth;class is{constructor(){this.children=[],this.isDirty=!1}add(e){nF(this.children,e),this.isDirty=!0}remove(e){nj(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ii),this.isDirty=!1,this.children.forEach(e)}}let ia=["","X","Y","Z"],io={visibility:"hidden"},il=0,iu={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function ih({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=null==t?void 0:t()){this.id=il++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,iu.totalNodes=iu.resolvedTargetDeltas=iu.recalculatedProjection=0,this.nodes.forEach(ip),this.nodes.forEach(ib),this.nodes.forEach(iT),this.nodes.forEach(im),window.MotionDebug&&window.MotionDebug.record(iu)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new is)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new nB),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t,n=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=t instanceof SVGElement&&"svg"!==t.tagName,this.instance=t;let{layoutId:r,layout:i,visualElement:s}=this.options;if(s&&!s.current&&s.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(i||r)&&(this.isLayoutDirty=!0),e){let n;let r=()=>this.root.updateBlockedByResize=!1;e(t,()=>{this.root.updateBlockedByResize=!0,n&&n(),n=function(e,t){let n=nf.now(),r=({timestamp:i})=>{let s=i-n;s>=t&&(eK(r),e(s-t))};return eH.read(r,!0),()=>eK(r)}(r,250),rj.hasAnimatedSinceResize&&(rj.hasAnimatedSinceResize=!1,this.nodes.forEach(i_))})}r&&this.root.registerSharedNode(r,this),!1!==this.options.animate&&s&&(r||i)&&this.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t,hasRelativeTargetChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let i=this.options.transition||s.getDefaultTransition()||ik,{onLayoutAnimationStart:a,onLayoutAnimationComplete:o}=s.getProps(),l=!this.targetLayout||!r8(this.targetLayout,r)||n,u=!t&&n;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||t&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(e,u);let t={...nL(i,"layout"),onPlay:a,onComplete:o};(s.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t)}else t||i_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,eK(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){!this.isUpdateBlocked()&&(this.isUpdating=!0,this.nodes&&this.nodes.forEach(iE),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(this.root.isUpdating||this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll("snapshot"),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(iy);return}this.isUpdating||this.nodes.forEach(iv),this.isUpdating=!1,this.nodes.forEach(iw),this.nodes.forEach(ic),this.nodes.forEach(id),this.clearAllSnapshots();let e=nf.now();eG.delta=en(0,1e3/60,e-eG.timestamp),eG.timestamp=e,eG.isProcessing=!0,eW.update.process(eG),eW.preRender.process(eG),eW.render.process(eG),eG.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,k.read(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(ig),this.sharedNodes.forEach(iI)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,eH.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){eH.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutCorrected=rg(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e="measure"){let t=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&(this.scroll={animationId:this.root.animationId,phase:e,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform,t=this.projectionDelta&&!r7(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,s=r!==this.prevTransformTemplateValue;e&&(t||rb(this.latestValues)||s)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){var t;let n=this.measurePageBox(),r=this.removeElementScroll(n);return e&&(r=this.removeTransform(r)),iP((t=r).x),iP(t.y),{animationId:this.root.animationId,measuredBox:n,layoutBox:r,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return rg();let t=e.measureViewportBox(),{scroll:n}=this.root;return n&&(rC(t.x,n.offset.x),rC(t.y,n.offset.y)),t}removeElementScroll(e){let t=rg();r1(t,e);for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:s}=r;if(r!==this.root&&i&&s.layoutScroll){if(i.isRoot){r1(t,e);let{scroll:n}=this.root;n&&(rC(t.x,-n.offset.x),rC(t.y,-n.offset.y))}rC(t.x,i.offset.x),rC(t.y,i.offset.y)}}return t}applyTransform(e,t=!1){let n=rg();r1(n,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&rP(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),rb(r.latestValues)&&rP(n,r.latestValues)}return rb(this.latestValues)&&rP(n,this.latestValues),n}removeTransform(e){let t=rg();r1(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!n.instance||!rb(n.latestValues))continue;r_(n.latestValues)&&n.updateSnapshot();let r=rg();r1(r,n.measurePageBox()),r5(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,r)}return rb(this.latestValues)&&r5(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==eG.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){var t,n,r,i;let s=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=s.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=s.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=s.isSharedProjectionDirty);let a=!!this.resumingFrom||this!==s;if(!(e||a&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget))return;let{layout:o,layoutId:l}=this.options;if(this.layout&&(o||l)){if(this.resolvedRelativeTargetAt=eG.timestamp,!this.targetDelta&&!this.relativeTarget){let e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=rg(),this.relativeTargetOrigin=rg(),rl(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),r1(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){if((this.target||(this.target=rg(),this.targetWithTransforms=rg()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target)?(this.forceRelativeParentToResolveTarget(),n=this.target,r=this.relativeTarget,i=this.relativeParent.target,ra(n.x,r.x,i.x),ra(n.y,r.y,i.y)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):r1(this.target,this.layout.layoutBox),rS(this.target,this.targetDelta)):r1(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;let e=this.getClosestProjectingParent();e&&!!e.resumingFrom==!!this.resumingFrom&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=rg(),this.relativeTargetOrigin=rg(),rl(this.relativeTargetOrigin,this.target,e.target),r1(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}iu.resolvedTargetDeltas++}}}getClosestProjectingParent(){return!this.parent||r_(this.parent.latestValues)||rT(this.parent.latestValues)?void 0:this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;let t=this.getLead(),n=!!this.resumingFrom||this!==t,r=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(r=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===eG.timestamp&&(r=!1),r)return;let{layout:i,layoutId:s}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(i||s))return;r1(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;!function(e,t,n,r=!1){let i,s;let a=n.length;if(a){t.x=t.y=1;for(let o=0;o<a;o++){s=(i=n[o]).projectionDelta;let a=i.instance;(!a||!a.style||"contents"!==a.style.display)&&(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&rP(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,rS(e,s)),r&&rb(i.latestValues)&&rP(e,i.latestValues))}t.x=rA(t.x),t.y=rA(t.y)}}(this.layoutCorrected,this.treeScale,this.path,n),t.layout&&!t.target&&(1!==this.treeScale.x||1!==this.treeScale.y)&&(t.target=t.layout.layoutBox,t.targetWithTransforms=rg());let{target:l}=t;if(!l){this.projectionTransform&&(this.projectionDelta=rp(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=rp(),this.projectionDeltaWithTransform=rp());let u=this.projectionTransform;rs(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=ir(this.projectionDelta,this.treeScale),(this.projectionTransform!==u||this.treeScale.x!==a||this.treeScale.y!==o)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),iu.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(e,t=!1){let n;let r=this.snapshot,i=r?r.latestValues:{},s={...this.latestValues},a=rp();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=rg(),l=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),u=this.getStack(),h=!u||u.members.length<=1,c=!!(l&&!h&&!0===this.options.crossfade&&!this.path.some(iC));this.animationProgress=0,this.mixTargetDelta=t=>{let r=t/1e3;if(iS(a.x,e.x,r),iS(a.y,e.y,r),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout){var u,d,f,p;rl(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),f=this.relativeTarget,p=this.relativeTargetOrigin,iA(f.x,p.x,o.x,r),iA(f.y,p.y,o.y,r),n&&(u=this.relativeTarget,d=n,u.x.min===d.x.min&&u.x.max===d.x.max&&u.y.min===d.y.min&&u.y.max===d.y.max)&&(this.isProjectionDirty=!1),n||(n=rg()),r1(n,this.relativeTarget)}l&&(this.animationValues=s,function(e,t,n,r,i,s){i?(e.opacity=tz(0,void 0!==n.opacity?n.opacity:1,rJ(r)),e.opacityExit=tz(void 0!==t.opacity?t.opacity:1,0,rY(r))):s&&(e.opacity=tz(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,r));for(let i=0;i<rG;i++){let s=`border${rK[i]}Radius`,a=rX(t,s),o=rX(n,s);(void 0!==a||void 0!==o)&&(a||(a=0),o||(o=0),0===a||0===o||rQ(a)===rQ(o)?(e[s]=Math.max(tz(rW(a),rW(o),r),0),(ef.test(o)||ef.test(a))&&(e[s]+="%")):e[s]=o)}(t.rotate||n.rotate)&&(e.rotate=tz(t.rotate||0,n.rotate||0,r))}(s,i,this.latestValues,r,c,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=r},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(eK(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=eH.update(()=>{rj.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,n){let r=Q(e)?e:nH(e);return r.start(nM("",r,1e3,n)),r.animation}(0,0,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&iD(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||rg();let t=rn(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=rn(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}r1(t,n),rP(t,i),rs(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new it),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){var e;let{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;let{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return!!e&&e.relegate(this)}resetRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.rotate||n.rotateX||n.rotateY||n.rotateZ)&&(t=!0),!t)return;let r={};for(let t=0;t<ia.length;t++){let i="rotate"+ia[t];n[i]&&(r[i]=n[i],e.setStaticValue(i,0))}for(let t in e.render(),r)e.setStaticValue(t,r[t]);e.scheduleRender()}getProjectionStyles(e){var t,n;if(!this.instance||this.isSVG)return;if(!this.isVisible)return io;let r={visibility:""},i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,r.opacity="",r.pointerEvents=e$(null==e?void 0:e.pointerEvents)||"",r.transform=i?i(this.latestValues,""):"none",r;let s=this.getLead();if(!this.projectionDelta||!this.layout||!s.target){let t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=e$(null==e?void 0:e.pointerEvents)||""),this.hasProjected&&!rb(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}let a=s.animationValues||s.latestValues;this.applyTransformsToTarget(),r.transform=ir(this.projectionDeltaWithTransform,this.treeScale,a),i&&(r.transform=i(a,r.transform));let{x:o,y:l}=this.projectionDelta;for(let e in r.transformOrigin=`${100*o.origin}% ${100*l.origin}% 0`,s.animationValues?r.opacity=s===this?null!==(n=null!==(t=a.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:a.opacityExit:r.opacity=s===this?void 0!==a.opacity?a.opacity:"":void 0!==a.opacityExit?a.opacityExit:0,H){if(void 0===a[e])continue;let{correct:t,applyTo:n}=H[e],i="none"===r.transform?a[e]:t(a[e],s);if(n){let e=n.length;for(let t=0;t<e;t++)r[n[t]]=i}else r[e]=i}return this.options.layoutId&&(r.pointerEvents=s===this?e$(null==e?void 0:e.pointerEvents)||"":"none"),r}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()}),this.root.nodes.forEach(iy),this.root.sharedNodes.clear()}}}function ic(e){e.updateLayout()}function id(e){var t;let n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){let{layoutBox:t,measuredBox:r}=e.layout,{animationType:i}=e.options,s=n.source!==e.layout.source;"size"===i?ry(e=>{let r=s?n.measuredBox[e]:n.layoutBox[e],i=rn(r);r.min=t[e].min,r.max=r.min+i}):iD(i,n.layoutBox,t)&&ry(r=>{let i=s?n.measuredBox[r]:n.layoutBox[r],a=rn(t[r]);i.max=i.min+a,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+a)});let a=rp();rs(a,t,n.layoutBox);let o=rp();s?rs(o,e.applyTransform(r,!0),n.measuredBox):rs(o,t,n.layoutBox);let l=!r7(a),u=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:s}=r;if(i&&s){let a=rg();rl(a,n.layoutBox,i.layoutBox);let o=rg();rl(o,t,s.layoutBox),r8(a,o)||(u=!0),r.options.layoutRoot&&(e.relativeTarget=o,e.relativeTargetOrigin=a,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:o,layoutDelta:a,hasLayoutChanged:l,hasRelativeTargetChanged:u})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function ip(e){iu.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function im(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function ig(e){e.clearSnapshot()}function iy(e){e.clearMeasurements()}function iv(e){e.isLayoutDirty=!1}function iw(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function i_(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function ib(e){e.resolveTargetDelta()}function iT(e){e.calcProjection()}function iE(e){e.resetRotation()}function iI(e){e.removeLeadSnapshot()}function iS(e,t,n){e.translate=tz(t.translate,0,n),e.scale=tz(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function iA(e,t,n,r){e.min=tz(t.min,n.min,r),e.max=tz(t.max,n.max,r)}function iC(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}let ik={duration:.45,ease:[.4,0,.1,1]},iR=e=>"undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().includes(e),ix=iR("applewebkit/")&&!iR("chrome/")?Math.round:ez;function iP(e){e.min=ix(e.min),e.max=ix(e.max)}function iD(e,t,n){return"position"===e||"preserve-aspect"===e&&!rr(ie(t),ie(n),.2)}let iN=ih({attachResizeListener:(e,t)=>eJ(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),iO={current:void 0},iL=ih({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!iO.current){let e=new iN({});e.mount(window),e.setOptions({layoutScroll:!0}),iO.current=e}return iO.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>"fixed"===window.getComputedStyle(e).position}),iM=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function iV(e,t,n=1){ez(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);let[r,i]=function(e){let t=iM.exec(e);if(!t)return[,];let[,n,r]=t;return[n,r]}(e);if(!r)return;let s=window.getComputedStyle(t).getPropertyValue(r);if(s){let e=s.trim();return nU(e)?parseFloat(e):e}return ee(i)?iV(i,t,n+1):i}let iU=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),iF=e=>iU.has(e),ij=e=>Object.keys(e).some(iF),iB=e=>e===er||e===ep,i$=(e,t)=>parseFloat(e.split(", ")[t]),iq=(e,t)=>(n,{transform:r})=>{if("none"===r||!r)return 0;let i=r.match(/^matrix3d\((.+)\)$/);if(i)return i$(i[1],t);{let t=r.match(/^matrix\((.+)\)$/);return t?i$(t[1],e):0}},iz=new Set(["x","y","z"]),iH=K.filter(e=>!iz.has(e)),iK={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:iq(4,13),y:iq(5,14)};iK.translateX=iK.x,iK.translateY=iK.y;let iG=(e,t,n)=>{let r=t.measureViewportBox(),i=t.current,s=getComputedStyle(i),{display:a}=s,o={};"none"===a&&t.setStaticValue("display",e.display||"block"),n.forEach(e=>{o[e]=iK[e](r,s)}),t.render();let l=t.measureViewportBox();return n.forEach(n=>{let r=t.getValue(n);r&&r.jump(o[n]),e[n]=iK[n](l,s)}),e},iW=(e,t,n={},r={})=>{t={...t},r={...r};let i=Object.keys(t).filter(iF),s=[],a=!1,o=[];if(i.forEach(i=>{let l;let u=e.getValue(i);if(!e.hasValue(i))return;let h=n[i],c=nW(h),d=t[i];if(eF(d)){let e=d.length,t=null===d[0]?1:0;c=nW(h=d[t]);for(let n=t;n<e&&null!==d[n];n++)l?ez(nW(d[n])===l,"All keyframes must be of the same type"):ez((l=nW(d[n]))===c||iB(c)&&iB(l),"Keyframes must be of the same dimension as the current value")}else l=nW(d);if(c!==l){if(iB(c)&&iB(l)){let e=u.get();"string"==typeof e&&u.set(parseFloat(e)),"string"==typeof d?t[i]=parseFloat(d):Array.isArray(d)&&l===ep&&(t[i]=d.map(parseFloat))}else(null==c?void 0:c.transform)&&(null==l?void 0:l.transform)&&(0===h||0===d)?0===h?u.set(l.transform(h)):t[i]=c.transform(d):(a||(s=function(e){let t=[];return iH.forEach(n=>{let r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}(e),a=!0),o.push(i),r[i]=void 0!==r[i]?r[i]:t[i],u.jump(d))}}),!o.length)return{target:t,transitionEnd:r};{let n=o.indexOf("height")>=0?window.pageYOffset:null,i=iG(t,e,o);return s.length&&s.forEach(([t,n])=>{e.getValue(t).set(n)}),e.render(),w&&null!==n&&window.scrollTo({top:n}),{target:i,transitionEnd:r}}},iQ=(e,t,n,r)=>{var i,s;let a=function(e,{...t},n){let r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};for(let i in n&&(n={...n}),e.values.forEach(e=>{let t=e.get();if(!ee(t))return;let n=iV(t,r);n&&e.set(n)}),t){let e=t[i];if(!ee(e))continue;let s=iV(e,r);s&&(t[i]=s,n||(n={}),void 0===n[i]&&(n[i]=e))}return{target:t,transitionEnd:n}}(e,t,r);return t=a.target,r=a.transitionEnd,i=t,s=r,ij(i)?iW(e,i,n,s):{target:i,transitionEnd:s}},iX={current:null},iJ={current:!1},iY=new WeakMap,iZ=Object.keys(F),i0=iZ.length,i1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],i2=O.length;class i4{constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,visualState:i},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>eH.render(this.render,!1,!0);let{latestValues:a,renderState:o}=i;this.latestValues=a,this.baseTarget={...a},this.initialValues=t.initial?{...a}:{},this.renderState=o,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=s,this.isControllingVariants=L(t),this.isVariantNode=M(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:l,...u}=this.scrapeMotionValuesFromProps(t,{});for(let e in u){let t=u[e];void 0!==a[e]&&Q(t)&&(t.set(a[e],!1),nV(l)&&l.add(e))}}scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,iY.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),iJ.current||function(){if(iJ.current=!0,w){if(window.matchMedia){let e=window.matchMedia("(prefers-reduced-motion)"),t=()=>iX.current=e.matches;e.addListener(t),t()}else iX.current=!1}}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||iX.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in iY.delete(this.current),this.projection&&this.projection.unmount(),eK(this.notifyUpdate),eK(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this),this.events)this.events[e].clear();for(let e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){let n=G.has(e),r=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&eH.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)}),i=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),i()})}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}loadFeatures({children:e,...t},n,r,i){let s,a;for(let e=0;e<i0;e++){let n=iZ[e],{isEnabled:r,Feature:i,ProjectionNode:o,MeasureLayout:l}=F[n];o&&(s=o),r(t)&&(!this.features[n]&&i&&(this.features[n]=new i(this)),l&&(a=l))}if(("html"===this.type||"svg"===this.type)&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);let{layoutId:e,layout:n,drag:r,dragConstraints:a,layoutScroll:o,layoutRoot:l}=t;this.projection.setOptions({layoutId:e,layout:n,alwaysMeasureLayout:!!r||a&&x(a),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:"string"==typeof n?n:"both",initialPromotionConfig:i,layoutScroll:o,layoutRoot:l})}return a}updateFeatures(){for(let e in this.features){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):rg()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}makeTargetAnimatable(e,t=!0){return this.makeTargetAnimatableFromInstance(e,t)}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<i1.length;t++){let n=i1[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e["on"+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=function(e,t,n){let{willChange:r}=t;for(let i in t){let s=t[i],a=n[i];if(Q(s))e.addValue(i,s),nV(r)&&r.add(i);else if(Q(a))e.addValue(i,nH(s,{owner:e})),nV(r)&&r.remove(i);else if(a!==s){if(e.hasValue(i)){let t=e.getValue(i);t.hasAnimated||t.set(s)}else{let t=e.getStaticValue(i);e.addValue(i,nH(void 0!==t?t:s,{owner:e}))}}}for(let r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){let e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}let t={};for(let e=0;e<i2;e++){let n=O[e],r=this.props[n];(P(r)||!1===r)&&(t[n]=r)}return t}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=nH(t,{owner:this}),this.addValue(e,n)),n}readValue(e){var t;return void 0===this.latestValues[e]&&this.current?null!==(t=this.getBaseTargetFromProps(this.props,e))&&void 0!==t?t:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e]}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;let{initial:n}=this.props,r="string"==typeof n||"object"==typeof n?null===(t=eV(this.props,n))||void 0===t?void 0:t[e]:void 0;if(n&&void 0!==r)return r;let i=this.getBaseTargetFromProps(this.props,e);return void 0===i||Q(i)?void 0!==this.initialValues[e]&&void 0===r?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new nB),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class i9 extends i4{sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:t,...n},r){let i=function(e,t,n){let r={};for(let i in e){let e=function(e,t){if(t)return(t[e]||t.default||t).from}(i,t);if(void 0!==e)r[i]=e;else{let e=n.getValue(i);e&&(r[i]=e.get())}}return r}(n,e||{},this);if(r){!function(e,t,n){var r,i;let s=Object.keys(t).filter(t=>!e.hasValue(t)),a=s.length;if(a)for(let o=0;o<a;o++){let a=s[o],l=t[a],u=null;Array.isArray(l)&&(u=l[0]),null===u&&(u=null!==(i=null!==(r=n[a])&&void 0!==r?r:e.readValue(a))&&void 0!==i?i:t[a]),null!=u&&("string"==typeof u&&(nU(u)||nO(u))?u=parseFloat(u):!nX(u)&&t6.test(l)&&(u=nN(a,l)),e.addValue(a,nH(u,{owner:e})),void 0===n[a]&&(n[a]=u),null!==u&&e.setBaseTarget(a,u))}}(this,n,i);let e=iQ(this,n,i,t);t=e.transitionEnd,n=e.target}return{transition:e,transitionEnd:t,...n}}}class i6 extends i9{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,t){if(G.has(t)){let e=nD(t);return e&&e.default||0}{let n=window.getComputedStyle(e),r=(Z(t)?n.getPropertyValue(t):n[t])||0;return"string"==typeof r?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return rD(e,t)}build(e,t,n,r){e_(e,t,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,t){return eL(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Q(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}renderInstance(e,t,n,r){eD(e,t,n,r)}}class i5 extends i9{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(G.has(t)){let e=nD(t);return e&&e.default||0}return t=eN.has(t)?t:T(t),e.getAttribute(t)}measureInstanceViewportBox(){return rg()}scrapeMotionValuesFromProps(e,t){return eM(e,t)}build(e,t,n,r){eR(e,t,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,n,r){eO(e,t,n,r)}mount(e){this.isSVGTag=eP(e.tagName),super.mount(e)}}let i3=(e,t)=>z(e)?new i5(t,{enableHardwareAcceleration:!1}):new i6(t,{enableHardwareAcceleration:!0}),i7={animation:{Feature:n4},exit:{Feature:n6},inView:{Feature:tc},tap:{Feature:ts},focus:{Feature:tn},hover:{Feature:tt},pan:{Feature:rF},drag:{Feature:rV,ProjectionNode:iL,MeasureLayout:rz},layout:{ProjectionNode:iL,MeasureLayout:rz}},i8=function(e){function t(t,n={}){return function({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&function(e){for(let t in e)F[t]={...F[t],...e[t]}}(e);let s=(0,c.forwardRef)(function(s,a){var o;let l;let u={...(0,c.useContext)(g),...s,layoutId:function({layoutId:e}){let t=(0,c.useContext)(j).id;return t&&void 0!==e?t+"-"+e:e}(s)},{isStatic:h}=u,d=function(e){let{initial:t,animate:n}=function(e,t){if(L(e)){let{initial:t,animate:n}=e;return{initial:!1===t||P(t)?t:void 0,animate:P(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,c.useContext)(y));return(0,c.useMemo)(()=>({initial:t,animate:n}),[V(t),V(n)])}(s),f=r(s,h);if(!h&&w){d.visualElement=function(e,t,n,r){let{visualElement:i}=(0,c.useContext)(y),s=(0,c.useContext)(b),a=(0,c.useContext)(v),o=(0,c.useContext)(g).reducedMotion,l=(0,c.useRef)();r=r||s.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:a,blockInitialAnimation:!!a&&!1===a.initial,reducedMotionConfig:o}));let u=l.current;(0,c.useInsertionEffect)(()=>{u&&u.update(n,a)});let h=(0,c.useRef)(!!(n[E]&&!window.HandoffComplete));return _(()=>{u&&(k.postRender(u.render),h.current&&u.animationState&&u.animationState.animateChanges())}),(0,c.useEffect)(()=>{u&&(u.updateFeatures(),!h.current&&u.animationState&&u.animationState.animateChanges(),h.current&&(h.current=!1,window.HandoffComplete=!0))}),u}(i,f,u,t);let n=(0,c.useContext)(B),r=(0,c.useContext)(b).strict;d.visualElement&&(l=d.visualElement.loadFeatures(u,r,e,n))}return c.createElement(y.Provider,{value:d},l&&d.visualElement?c.createElement(l,{visualElement:d.visualElement,...u}):null,n(i,s,(o=d.visualElement,(0,c.useCallback)(e=>{e&&f.mount&&f.mount(e),o&&(e?o.mount(e):o.unmount()),a&&("function"==typeof a?a(e):x(a)&&(a.current=e))},[o])),f,h,d.visualElement))});return s[$]=i,s}(e(t,n))}if("undefined"==typeof Proxy)return t;let n=new Map;return new Proxy(t,{get:(e,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}((e,t)=>(function(e,{forwardMotionProps:t=!1},n,r){return{...z(e)?eQ:eX,preloadedFeatures:n,useRender:function(e=!1){return(t,n,r,{latestValues:i},s)=>{let a=(z(t)?function(e,t,n,r){let i=(0,c.useMemo)(()=>{let n=ex();return eR(n,t,{enableHardwareAcceleration:!1},eP(r),e.transformTemplate),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};eT(t,e.style,e),i.style={...t,...i.style}}return i}:function(e,t,n){let r={},i=function(e,t,n){let r=e.style||{},i={};return eT(i,r,e),Object.assign(i,function({transformTemplate:e},t,n){return(0,c.useMemo)(()=>{let r=eb();return e_(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}(e,t,n)),i}(e,t,n);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===e.drag?"none":`pan-${"x"===e.drag?"y":"x"}`),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r})(n,i,s,t),o={...function(e,t,n){let r={};for(let i in e)("values"!==i||"object"!=typeof e.values)&&(eS(i)||!0===n&&eI(i)||!t&&!eI(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(n,"string"==typeof t,e),...a,ref:r},{children:l}=n,u=(0,c.useMemo)(()=>Q(l)?l.get():l,[l]);return(0,c.createElement)(t,{...o,children:u})}}(t),createVisualElement:r,Component:e}})(e,t,i7,i3));function se(){let e=(0,c.useRef)(!1);return _(()=>(e.current=!0,()=>{e.current=!1}),[]),e}class st extends c.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function sn({children:e,isPresent:t}){let n=(0,c.useId)(),r=(0,c.useRef)(null),i=(0,c.useRef)({width:0,height:0,top:0,left:0});return(0,c.useInsertionEffect)(()=>{let{width:e,height:s,top:a,left:o}=i.current;if(t||!r.current||!e||!s)return;r.current.dataset.motionPopId=n;let l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${o}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[t]),c.createElement(st,{isPresent:t,childRef:r,sizeRef:i},c.cloneElement(e,{ref:r}))}let sr=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:a})=>{let o=eU(si),l=(0,c.useId)(),u=(0,c.useMemo)(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:e=>{for(let t of(o.set(e,!0),o.values()))if(!t)return;r&&r()},register:e=>(o.set(e,!1),()=>o.delete(e))}),s?void 0:[n]);return(0,c.useMemo)(()=>{o.forEach((e,t)=>o.set(t,!1))},[n]),c.useEffect(()=>{n||o.size||!r||r()},[n]),"popLayout"===a&&(e=c.createElement(sn,{isPresent:n},e)),c.createElement(v.Provider,{value:u},e)};function si(){return new Map}let ss=e=>e.key||"",sa=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:s=!0,mode:a="sync"})=>{var o;ez(!i,"Replace exitBeforeEnter with mode='wait'");let l=(0,c.useContext)(j).forceRender||function(){let e=se(),[t,n]=(0,c.useState)(0),r=(0,c.useCallback)(()=>{e.current&&n(t+1)},[t]);return[(0,c.useCallback)(()=>eH.postRender(r),[r]),t]}()[0],u=se(),h=function(e){let t=[];return c.Children.forEach(e,e=>{(0,c.isValidElement)(e)&&t.push(e)}),t}(e),d=h,f=(0,c.useRef)(new Map).current,p=(0,c.useRef)(d),m=(0,c.useRef)(new Map).current,g=(0,c.useRef)(!0);if(_(()=>{g.current=!1,function(e,t){e.forEach(e=>{let n=ss(e);t.set(n,e)})}(h,m),p.current=d}),o=()=>{g.current=!0,m.clear(),f.clear()},(0,c.useEffect)(()=>()=>o(),[]),g.current)return c.createElement(c.Fragment,null,d.map(e=>c.createElement(sr,{key:ss(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:s,mode:a},e)));d=[...d];let y=p.current.map(ss),v=h.map(ss),w=y.length;for(let e=0;e<w;e++){let t=y[e];-1!==v.indexOf(t)||f.has(t)||f.set(t,void 0)}return"wait"===a&&f.size&&(d=[]),f.forEach((e,n)=>{if(-1!==v.indexOf(n))return;let i=m.get(n);if(!i)return;let o=y.indexOf(n),g=e;g||(g=c.createElement(sr,{key:ss(i),isPresent:!1,onExitComplete:()=>{f.delete(n);let e=Array.from(m.keys()).filter(e=>!v.includes(e));if(e.forEach(e=>m.delete(e)),p.current=h.filter(t=>{let r=ss(t);return r===n||e.includes(r)}),!f.size){if(!1===u.current)return;l(),r&&r()}},custom:t,presenceAffectsLayout:s,mode:a},i),f.set(n,g)),d.splice(o,0,g)}),d=d.map(e=>{let t=e.key;return f.has(t)?e:c.createElement(sr,{key:ss(e),isPresent:!0,presenceAffectsLayout:s,mode:a},e)}),c.createElement(c.Fragment,null,f.size?d:d.map(e=>(0,c.cloneElement)(e)))};var so=n(9008),sl=n.n(so);function su(e){let{children:t}=e,{user:n}=(0,p.a)();return f(null==n?void 0:n.id),(0,o.jsx)(o.Fragment,{children:t})}n(3465);let sh=e=>{let{children:t}=e;return(0,o.jsx)(i8.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:1}},transition:{duration:1},children:t})};function sc(e){let{Component:t,pageProps:n}=e,r=(0,u.useRouter)();return(0,c.useEffect)(()=>{let e=()=>{d.co&&(0,m.Kz)(d.co,"page_view",{page_path:window.location.pathname})};return e(),h().events.on("routeChangeComplete",e),()=>{h().events.off("routeChangeComplete",e)}},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(sl(),{children:(0,o.jsx)("link",{rel:"icon",href:"/favicon.png"})}),(0,o.jsx)(sa,{children:(0,o.jsx)(p.H,{children:(0,o.jsx)(su,{children:(0,o.jsx)(sh,{children:(0,o.jsx)(t,{...n})},r.route)})})})]})}},3465:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var l=[],u=!1,h=-1;function c(){u&&r&&(u=!1,r.length?l=r.concat(l):h=-1,l.length&&d())}function d(){if(!u){var e=o(c);u=!0;for(var t=l.length;t;){for(r=l,l=[];++h<t;)r&&r[h].run();h=-1,t=l.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||o(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}},a=!0;try{t[e](s,s.exports,r),a=!1}finally{a&&delete n[e]}return s.exports}r.ab="//";var i=r(229);e.exports=i}()},9008:function(e,t,n){e.exports=n(6665)},1163:function(e,t,n){e.exports=n(3035)},2238:function(e,t,n){"use strict";n.d(t,{Jn:function(){return w},KN:function(){return T},Mq:function(){return b},Xd:function(){return m},ZF:function(){return _},qX:function(){return g}});var r=n(8463),i=n(3333),s=n(4444),a=n(6531);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let l="@firebase/app",u="0.9.27",h=new i.Yd("@firebase/app"),c="[DEFAULT]",d={[l]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},f=new Map,p=new Map;function m(e){let t=e.name;if(p.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(p.set(t,e),f.values()))!function(e,t){try{e.container.addComponent(t)}catch(n){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}function g(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let y=new s.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw y.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let w="10.8.0";function _(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let i=Object.assign({name:c,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw y.create("bad-app-name",{appName:String(a)});if(n||(n=(0,s.aH)()),!n)throw y.create("no-options");let o=f.get(a);if(o){if((0,s.vZ)(n,o.options)&&(0,s.vZ)(i,o.config))return o;throw y.create("duplicate-app",{appName:a})}let l=new r.H0(a);for(let e of p.values())l.addComponent(e);let u=new v(n,i,l);return f.set(a,u),u}function b(e=c){let t=f.get(e);if(!t&&e===c&&(0,s.aH)())return _();if(!t)throw y.create("no-app",{appName:e});return t}function T(e,t,n){var i;let s=null!==(i=d[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);let a=s.match(/\s|\//),o=t.match(/\s|\//);if(a||o){let e=[`Unable to register library "${s}" with version "${t}":`];a&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),h.warn(e.join(" "));return}m(new r.wA(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}let E="firebase-heartbeat-store",I=null;function S(){return I||(I=(0,a.X3)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(E)}catch(e){console.warn(e)}}}).catch(e=>{throw y.create("idb-open",{originalErrorMessage:e.message})})),I}async function A(e){try{let t=(await S()).transaction(E),n=await t.objectStore(E).get(k(e));return await t.done,n}catch(e){if(e instanceof s.ZR)h.warn(e.message);else{let t=y.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}async function C(e,t){try{let n=(await S()).transaction(E,"readwrite"),r=n.objectStore(E);await r.put(t,k(e)),await n.done}catch(e){if(e instanceof s.ZR)h.warn(e.message);else{let t=y.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}function k(e){return`${e.name}!${e.options.appId}`}class R{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new P(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=x();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=x(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),D(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),D(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function x(){return new Date().toISOString().substring(0,10)}class P{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await A(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return C(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return C(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function D(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}m(new r.wA("platform-logger",e=>new o(e),"PRIVATE")),m(new r.wA("heartbeat",e=>new R(e),"PRIVATE")),T(l,u,""),T(l,u,"esm2017"),T("fire-js","")},8463:function(e,t,n){"use strict";n.d(t,{H0:function(){return o},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===s?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";var r,i;n.d(t,{Yd:function(){return h},in:function(){return r}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let a={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=l[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class h{constructor(e){this.name=e,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},3059:function(e,t,n){"use strict";let r,i,s,a;n.d(t,{IH:function(){return eT},Kz:function(){return eE}});var o=n(2238),l=n(3333),u=n(4444),h=n(8463),c=n(6531);let d="@firebase/installations",f="0.6.5",p=`w:${f}`,m="FIS_v2",g=new u.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function y(e){return e instanceof u.ZR&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function w(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function _(e,t){let n=(await t.json()).error;return g.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function b({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function T(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let r=v(e),i=b(e),s=t.getImmediate({optional:!0});if(s){let e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let a={method:"POST",headers:i,body:JSON.stringify({fid:n,authVersion:m,appId:e.appId,sdkVersion:p})},o=await T(()=>fetch(r,a));if(o.ok){let e=await o.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:w(e.authToken)}}throw await _("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C=new Map;function k(e,t){let n=A(e);R(n,t),function(e,t){let n=(!x&&"BroadcastChannel"in self&&((x=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{R(e.data.key,e.data.fid)}),x);n&&n.postMessage({key:e,fid:t}),0===C.size&&x&&(x.close(),x=null)}(n,t)}function R(e,t){let n=C.get(e);if(n)for(let e of n)e(t)}let x=null,P="firebase-installations-store",D=null;function N(){return D||(D=(0,c.X3)("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(P)}})),D}async function O(e,t){let n=A(e),r=(await N()).transaction(P,"readwrite"),i=r.objectStore(P),s=await i.get(n);return await i.put(t,n),await r.done,s&&s.fid===t.fid||k(e,t.fid),t}async function L(e){let t=A(e),n=(await N()).transaction(P,"readwrite");await n.objectStore(P).delete(t),await n.done}async function M(e,t){let n=A(e),r=(await N()).transaction(P,"readwrite"),i=r.objectStore(P),s=await i.get(n),a=t(s);return void 0===a?await i.delete(n):await i.put(a,n),await r.done,a&&(!s||s.fid!==a.fid)&&k(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e){let t;let n=await M(e.appConfig,n=>{let r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(g.create("app-offline"))};let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=U(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:F(e)}:{installationEntry:t}}(e,B(n||{fid:function(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let t=btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22);return S.test(t)?t:""}catch(e){return""}}(),registrationStatus:0}));return t=r.registrationPromise,r.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function U(e,t){try{let n=await E(e,t);return O(e.appConfig,n)}catch(n){throw y(n)&&409===n.customData.serverCode?await L(e.appConfig):await O(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function F(e){let t=await j(e.appConfig);for(;1===t.registrationStatus;)await I(100),t=await j(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:n}=await V(e);return n||t}return t}function j(e){return M(e,e=>{if(!e)throw g.create("installation-not-found");return B(e)})}function B(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $({appConfig:e,heartbeatServiceProvider:t},n){let r=function(e,{fid:t}){return`${v(e)}/${t}/authTokens:generate`}(e,n),i=function(e,{refreshToken:t}){let n=b(e);return n.append("Authorization",`${m} ${t}`),n}(e,n),s=t.getImmediate({optional:!0});if(s){let e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let a={method:"POST",headers:i,body:JSON.stringify({installation:{sdkVersion:p,appId:e.appId}})},o=await T(()=>fetch(r,a));if(o.ok)return w(await o.json());throw await _("Generate Auth Token",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t=!1){let n;let r=await M(e.appConfig,r=>{var i;if(!G(r))throw g.create("not-registered");let s=r.authToken;if(!t&&2===(i=s).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i))return r;if(1===s.requestStatus)return n=z(e,t),r;{if(!navigator.onLine)throw g.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=K(e,t),t}});return n?await n:r.authToken}async function z(e,t){let n=await H(e.appConfig);for(;1===n.authToken.requestStatus;)await I(100),n=await H(e.appConfig);let r=n.authToken;return 0===r.requestStatus?q(e,t):r}function H(e){return M(e,e=>{var t;if(!G(e))throw g.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function K(e,t){try{let n=await $(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await O(e.appConfig,r),n}catch(n){if(y(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await L(e.appConfig);else{let n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await O(e.appConfig,n)}throw n}}function G(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e){let{installationEntry:t,registrationPromise:n}=await V(e);return n?n.catch(console.error):q(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t=!1){return await X(e),(await q(e,t)).token}async function X(e){let{registrationPromise:t}=await V(e);t&&await t}function J(e){return g.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Y="installations";(0,o.Xd)(new h.wA(Y,e=>{let t=e.getProvider("app").getImmediate(),n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw J("App Configuration");if(!e.name)throw J("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw J(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),r=(0,o.qX)(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},"PUBLIC")),(0,o.Xd)(new h.wA("installations-internal",e=>{let t=e.getProvider("app").getImmediate(),n=(0,o.qX)(t,Y).getImmediate();return{getId:()=>W(n),getToken:e=>Q(n,e)}},"PRIVATE")),(0,o.KN)(d,f),(0,o.KN)(d,f,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z="analytics",ee="https://www.googletagmanager.com/gtag/js",et=new l.Yd("@firebase/analytics"),en=new u.LL("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e){if(!e.startsWith(ee)){let t=en.create("invalid-gtag-resource",{gtagURL:e});return et.warn(t.message),""}return e}function ei(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function es(e,t,n,r,i,s){let a=r[i];try{if(a)await t[a];else{let e=(await ei(n)).find(e=>e.measurementId===i);e&&await t[e.appId]}}catch(e){et.error(e)}e("config",i,s)}async function ea(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);let r=await ei(n);for(let n of e){let e=r.find(e=>e.measurementId===n),i=e&&t[e.appId];if(i)s.push(i);else{s=[];break}}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(e){et.error(e)}}class eo{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}let el=new eo;async function eu(e){var t;let{appId:n,apiKey:r}=e,i={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":r})},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),a=await fetch(s,i);if(200!==a.status&&304!==a.status){let e="";try{let n=await a.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw en.create("config-fetch-failed",{httpStatus:a.status,responseMessage:e})}return a.json()}async function eh(e,t=el,n){let{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw en.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw en.create("no-api-key")}let a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new ed;return setTimeout(async()=>{o.abort()},void 0!==n?n:6e4),ec({appId:r,apiKey:i,measurementId:s},a,o,t)}async function ec(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=el){var s;let{appId:a,measurementId:o}=e;try{await new Promise((e,n)=>{let i=setTimeout(e,Math.max(t-Date.now(),0));r.addEventListener(()=>{clearTimeout(i),n(en.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}catch(e){if(o)return et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:a,measurementId:o};throw e}try{let t=await eu(e);return i.deleteThrottleMetadata(a),t}catch(h){if(!function(e){if(!(e instanceof u.ZR)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(h)){if(i.deleteThrottleMetadata(a),o)return et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==h?void 0:h.message}]`),{appId:a,measurementId:o};throw h}let t=503===Number(null===(s=null==h?void 0:h.customData)||void 0===s?void 0:s.httpStatus)?(0,u.$s)(n,i.intervalMillis,30):(0,u.$s)(n,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+t,backoffCount:n+1};return i.setThrottleMetadata(a,l),et.debug(`Calling attemptFetch again in ${t} millis`),ec(e,l,r,i)}}class ed{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ef(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}{let i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(){if(!(0,u.hl)())return et.warn(en.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await (0,u.eu)()}catch(e){return et.warn(en.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function em(e,t,n,s,a,o,l){var u;let h=eh(e);h.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&et.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>et.error(e)),t.push(h);let c=ep().then(e=>e?s.getId():void 0),[d,f]=await Promise.all([h,c]);!function(e){for(let t of Object.values(window.document.getElementsByTagName("script")))if(t.src&&t.src.includes(ee)&&t.src.includes(e))return t;return null}(o)&&function(e,t){let n;let r=(window.trustedTypes&&(n=window.trustedTypes.createPolicy("firebase-js-sdk-policy",{createScriptURL:er})),n),i=document.createElement("script"),s=`${ee}?l=${e}&id=${t}`;i.src=r?null==r?void 0:r.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}(o,d.measurementId),i&&(a("consent","default",i),i=void 0),a("js",new Date);let p=null!==(u=null==l?void 0:l.config)&&void 0!==u?u:{};return p.origin="firebase",p.update=!0,null!=f&&(p.firebase_id=f),a("config",d.measurementId,p),r&&(a("set",r),r=void 0),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.app=e}_delete(){return delete ey[this.app.options.appId],Promise.resolve()}}let ey={},ev=[],ew={},e_="dataLayer",eb=!1;function eT(e=(0,o.Mq)()){e=(0,u.m9)(e);let t=(0,o.qX)(e,Z);return t.isInitialized()?t.getImmediate():function(e,t={}){let n=(0,o.qX)(e,Z);if(n.isInitialized()){let e=n.getImmediate();if((0,u.vZ)(t,n.getOptions()))return e;throw en.create("already-initialized")}return n.initialize({options:t})}(e)}function eE(e,t,n,r){e=(0,u.m9)(e),ef(a,ey[e.app.options.appId],t,n,r).catch(e=>et.error(e))}let eI="@firebase/analytics",eS="0.10.1";(0,o.Xd)(new h.wA(Z,(e,{options:t})=>(function(e,t,n){!function(){let e=[];if((0,u.ru)()&&e.push("This is a browser extension environment."),(0,u.zI)()||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=en.create("invalid-analytics-context",{errorInfo:t});et.warn(n.message)}}();let r=e.options.appId;if(!r)throw en.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw en.create("no-api-key")}if(null!=ey[r])throw en.create("already-exists",{id:r});if(!eb){var i,o;let e,t;e=[],Array.isArray(window[e_])?e=window[e_]:window[e_]=e;let{wrappedGtag:n,gtagCore:r}=(i="gtag",t=function(...e){window[e_].push(arguments)},window[i]&&"function"==typeof window[i]&&(t=window[i]),window[i]=(o=t,async function(e,...t){try{if("event"===e){let[e,n]=t;await ea(o,ey,ev,e,n)}else if("config"===e){let[e,n]=t;await es(o,ey,ev,ew,e,n)}else if("consent"===e){let[e]=t;o("consent","update",e)}else if("get"===e){let[e,n,r]=t;o("get",e,n,r)}else if("set"===e){let[e]=t;o("set",e)}else o(e,...t)}catch(e){et.error(e)}}),{gtagCore:t,wrappedGtag:window[i]});a=n,s=r,eb=!0}return ey[r]=em(e,ev,ew,t,s,e_,n),new eg(e)})(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),(0,o.Xd)(new h.wA("analytics-internal",function(e){try{let t=e.getProvider(Z).getImmediate();return{logEvent:(e,n,r)=>eE(t,e,n,r)}}catch(e){throw en.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),(0,o.KN)(eI,eS),(0,o.KN)(eI,eS,"esm2017")},6718:function(e,t,n){"use strict";n.d(t,{hJ:function(){return eK},v0:function(){return t8},Aj:function(){return e2},rh:function(){return tE},w7:function(){return e4}});var r,i=n(4444),s=n(2238),a=n(3333);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}"function"==typeof SuppressedError&&SuppressedError;var l=n(8463);function u(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let h=new i.LL("auth","Firebase",u()),c=new a.Yd("@firebase/auth");function d(e,...t){c.logLevel<=a.in.ERROR&&c.error(`Auth (${s.Jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){let r=Object.assign(Object.assign({},u()),{[t]:n});return new i.LL("auth","Firebase",r).create(t,{appName:e.name})}function g(e,...t){if("string"!=typeof e){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return h.create(e,...t)}function y(e,t,...n){if(!e)throw g(t,...n)}function v(e){let t="INTERNAL ASSERTION FAILED: "+e;throw d(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function _(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||v("Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===_()||"https:"===_()||(0,i.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t){e.emulator||v("Emulator should always be set here");let{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},S=new b(3e4,6e4);function A(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function C(e,t,n,r,s={}){return k(e,s,async()=>{let s={},a={};r&&("GET"===t?a=r:s={body:JSON.stringify(r)});let o=(0,i.xO)(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),E.fetch()(x(e,e.config.apiHost,n,o),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function k(e,t,n){e._canInitEmulator=!1;let r=Object.assign(Object.assign({},I),t);try{let t=new P(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();let s=await i.json();if("needConfirmation"in s)throw D(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{let[t,n]=(i.ok?s.errorMessage:s.error.message).split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw D(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw D(e,"email-already-in-use",s);if("USER_DISABLED"===t)throw D(e,"user-disabled",s);let a=r[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(n)throw m(e,a,n);f(e,a)}}catch(t){if(t instanceof i.ZR)throw t;f(e,"network-request-failed",{message:String(t)})}}async function R(e,t,n,r,i={}){let s=await C(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function x(e,t,n,r){let i=`${t}${n}?${r}`;return e.config.emulator?T(e.config,i):`${e.config.apiScheme}://${i}`}class P{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),S.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function D(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=p(e,t,r);return i.customData._tokenResponse=n,i}function N(e){return void 0!==e&&void 0!==e.enterprise}class O{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}async function L(e,t){return C(e,"GET","/v2/recaptchaConfig",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M(e,t){return C(e,"POST","/v1/accounts:delete",t)}async function V(e,t){return C(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function F(e,t=!1){let n=(0,i.m9)(e),r=await n.getIdToken(t),s=B(r);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");let a="object"==typeof s.firebase?s.firebase:void 0,o=null==a?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:U(j(s.auth_time)),issuedAtTime:U(j(s.iat)),expirationTime:U(j(s.exp)),signInProvider:o||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}function j(e){return 1e3*Number(e)}function B(e){let[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,i.tV)(n);if(!e)return d("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return d("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof i.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(!e)return this.errorBackoff=3e4,Math.max(0,(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5);{let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e){var t;let n=e.auth,r=await e.getIdToken(),i=await $(e,V(n,{idToken:r}));y(null==i?void 0:i.users.length,n,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[],l=[...e.providerData.filter(e=>!a.some(t=>t.providerId===e.providerId)),...a],u=e.isAnonymous,h=!(e.email&&s.passwordHash)&&!(null==l?void 0:l.length);Object.assign(e,{uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new z(s.createdAt,s.lastLoginAt),isAnonymous:!!u&&h})}async function K(e){let t=(0,i.m9)(e);await H(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t){let n=await k(e,{},async()=>{let n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,a=x(e,r,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",E.fetch()(a,{method:"POST",headers:o,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function W(e,t){return C(e,"POST","/v2/accounts:revokeToken",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(void 0!==e.idToken,"internal-error"),y(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=B(e);return y(t,"internal-error"),y(void 0!==t.exp,"internal-error"),y(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await G(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){let{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Q;return n&&(y("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(y("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(y("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Q,this.toJSON())}_performRefresh(){return v("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e,t){y("string"==typeof e||void 0===e,"internal-error",{appName:t})}class J{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new z(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await $(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return F(this,e)}reload(){return K(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new J(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await H(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await $(this,M(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,a,o,l,u;let h=null!==(n=t.displayName)&&void 0!==n?n:void 0,c=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:_,isAnonymous:b,providerData:T,stsTokenManager:E}=t;y(w&&E,e,"internal-error");let I=Q.fromJSON(this.name,E);y("string"==typeof w,e,"internal-error"),X(h,e.name),X(c,e.name),y("boolean"==typeof _,e,"internal-error"),y("boolean"==typeof b,e,"internal-error"),X(d,e.name),X(f,e.name),X(p,e.name),X(m,e.name),X(g,e.name),X(v,e.name);let S=new J({uid:w,auth:e,email:c,emailVerified:_,displayName:h,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:v});return T&&Array.isArray(T)&&(S.providerData=T.map(e=>Object.assign({},e))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){let r=new Q;r.updateFromServerResponse(t);let i=new J({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await H(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Y=new Map;function Z(e){e instanceof Function||v("Expected a class definition");let t=Y.get(e);return t?t instanceof e||v("Instance stored in cache mismatched with class"):(t=new e,Y.set(e,t)),t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e,t,n){return`firebase:${e}:${t}:${n}`}ee.type="NONE";class en{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=et(this.userKey,r.apiKey,i),this.fullPersistenceKey=et("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?J._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new en(Z(ee),e,n);let r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=r[0]||Z(ee),s=et(n,e.config.apiKey,e.name),a=null;for(let n of t)try{let t=await n._get(s);if(t){let r=J._fromJSON(e,t);n!==i&&(a=r),i=n;break}}catch(e){}let o=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&o.length&&(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new en(i,e,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(eo(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(ei(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(eu(t))return"Blackberry";if(eh(t))return"Webos";if(es(t))return"Safari";if((t.includes("chrome/")||ea(t))&&!t.includes("edge/"))return"Chrome";if(el(t))return"Android";let n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==n?void 0:n.length)===2)return n[1]}return"Other"}function ei(e=(0,i.z$)()){return/firefox\//i.test(e)}function es(e=(0,i.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ea(e=(0,i.z$)()){return/crios\//i.test(e)}function eo(e=(0,i.z$)()){return/iemobile/i.test(e)}function el(e=(0,i.z$)()){return/android/i.test(e)}function eu(e=(0,i.z$)()){return/blackberry/i.test(e)}function eh(e=(0,i.z$)()){return/webos/i.test(e)}function ec(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ed(e=(0,i.z$)()){return ec(e)||el(e)||eh(e)||eu(e)||/windows phone/i.test(e)||eo(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(e,t=[]){let n;switch(e){case"Browser":n=er((0,i.z$)());break;case"Worker":n=`${er((0,i.z$)())}-${e}`;break;default:n=e}let r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.Jn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise((n,r)=>{try{let r=e(t);n(r)}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(e,t={}){return C(e,"GET","/v2/passwordPolicy",A(e,t))}class eg{constructor(e){var t,n,r,i;let s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,a;let o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(n=o.meetsMaxPasswordLength)||void 0===n||n),o.isValid&&(o.isValid=null===(r=o.containsLowercaseLetter)||void 0===r||r),o.isValid&&(o.isValid=null===(i=o.containsUppercaseLetter)||void 0===i||i),o.isValid&&(o.isValid=null===(s=o.containsNumericCharacter)||void 0===s||s),o.isValid&&(o.isValid=null===(a=o.containsNonAlphanumericCharacter)||void 0===a||a),o}validatePasswordLengthOptions(e,t){let n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ew(this),this.idTokenSubscription=new ew(this),this.beforeStateQueue=new ep(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Z(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await en.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser(),r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!n||n===s)&&(null==a?void 0:a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return(y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId)?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await H(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,i.m9)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Z(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new eg(await em(this));null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await W(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&Z(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await en.create(this,[Z(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(a,this,"internal-error"),a.then(()=>{s||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{let n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ef(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let n=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);let r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){c.logLevel<=a.in.WARN&&c.warn(`Auth (${s.Jn}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function ev(e){return(0,i.m9)(e)}class ew{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)(e=>this.observer=e)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e_={async loadJS(){throw Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eb(e){return`__${e}${Math.floor(1e6*Math.random())}`}class eT{constructor(e){this.type="recaptcha-enterprise",this.auth=ev(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{L(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0===r.recaptchaKey)n(Error("recaptcha Enterprise site key undefined"));else{let n=new O(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}}).catch(e=>{n(e)})})}function r(t,n,r){let i=window.grecaptcha;N(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n("NO_RECAPTCHA")})}):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{n(this.auth).then(n=>{if(!t&&N(window.grecaptcha))r(n,e,i);else{var s;if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}let t=e_.recaptchaEnterpriseScript;0!==t.length&&(t+=n),(s=t,e_.loadJS(s)).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function eE(e,t,n,r=!1){let i;let s=new eT(e);try{i=await s.verify(n)}catch(e){i=await s.verify(n,!0)}let a=Object.assign({},t);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function eI(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i||!i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return r(e,t).catch(async i=>{if("auth/missing-recaptcha-token"!==i.code)return Promise.reject(i);{console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await eE(e,t,n,"getOobCode"===n);return r(e,i)}});{let i=await eE(e,t,n,"getOobCode"===n);return r(e,i)}}function eS(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function eA(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}async function ek(e,t){return C(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(e,t){return R(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex(e,t){return R(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}async function eP(e,t){return R(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD extends eC{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new eD(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new eD(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return eI(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",eR);case"emailLink":return ex(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return eI(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ek);case"emailLink":return eP(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(e,t){return R(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}class eO extends eC{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new eO(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;let s=new eO(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return eN(e,this.buildRequest())}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,eN(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,eN(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.xO)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eL(e,t){return C(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}async function eM(e,t){return R(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}async function eV(e,t){let n=await R(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(n.temporaryProof)throw D(e,"account-exists-with-different-credential",n);return n}let eU={USER_NOT_FOUND:"user-not-found"};async function eF(e,t){return R(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),eU)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej extends eC{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ej({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ej({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return eM(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return eV(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return eF(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ej({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}class eB{constructor(e){var t,n,r,s,a,o;let l=(0,i.zd)((0,i.pd)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,h=null!==(n=l.oobCode)&&void 0!==n?n:null,c=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=l.mode)&&void 0!==r?r:null);y(u&&h&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=h,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(a=l.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(o=l.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=(0,i.zd)((0,i.pd)(e)).link,n=t?(0,i.zd)((0,i.pd)(t)).deep_link_id:null,r=(0,i.zd)((0,i.pd)(e)).deep_link_id;return(r?(0,i.zd)((0,i.pd)(r)).link:null)||r||n||t||e}(e);try{return new eB(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e${constructor(){this.providerId=e$.PROVIDER_ID}static credential(e,t){return eD._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=eB.parseLink(t);return y(n,"argument-error"),eD._fromEmailAndCode(e,n.code,n.tenantId)}}e$.PROVIDER_ID="password",e$.EMAIL_PASSWORD_SIGN_IN_METHOD="password",e$.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eq{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ez extends eq{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eH extends ez{constructor(){super("facebook.com")}static credential(e){return eO._fromParams({providerId:eH.PROVIDER_ID,signInMethod:eH.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eH.credentialFromTaggedObject(e)}static credentialFromError(e){return eH.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eH.credential(e.oauthAccessToken)}catch(e){return null}}}eH.FACEBOOK_SIGN_IN_METHOD="facebook.com",eH.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eK extends ez{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eO._fromParams({providerId:eK.PROVIDER_ID,signInMethod:eK.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return eK.credentialFromTaggedObject(e)}static credentialFromError(e){return eK.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return eK.credential(t,n)}catch(e){return null}}}eK.GOOGLE_SIGN_IN_METHOD="google.com",eK.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eG extends ez{constructor(){super("github.com")}static credential(e){return eO._fromParams({providerId:eG.PROVIDER_ID,signInMethod:eG.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eG.credentialFromTaggedObject(e)}static credentialFromError(e){return eG.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eG.credential(e.oauthAccessToken)}catch(e){return null}}}eG.GITHUB_SIGN_IN_METHOD="github.com",eG.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eW extends ez{constructor(){super("twitter.com")}static credential(e,t){return eO._fromParams({providerId:eW.PROVIDER_ID,signInMethod:eW.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return eW.credentialFromTaggedObject(e)}static credentialFromError(e){return eW.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return eW.credential(t,n)}catch(e){return null}}}eW.TWITTER_SIGN_IN_METHOD="twitter.com",eW.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eQ{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){return new eQ({user:await J._fromIdTokenResponse(e,n,r),providerId:eX(n),_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){return await e._updateTokensIfNecessary(n,!0),new eQ({user:e,providerId:eX(n),_tokenResponse:n,operationType:t})}}function eX(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,eJ.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new eJ(e,t,n,r)}}function eY(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw eJ._fromErrorAndOperation(e,n,t,r);throw n})}async function eZ(e,t,n=!1){let r=await $(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return eQ._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(e,t,n=!1){let{auth:r}=e,i="reauthenticate";try{let s=await $(e,eY(r,i,t,e),n);y(s.idToken,r,"internal-error");let a=B(s.idToken);y(a,r,"internal-error");let{sub:o}=a;return y(e.uid===o,r,"user-mismatch"),eQ._forOperation(e,i,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&f(r,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(e,t,n=!1){let r="signIn",i=await eY(e,r,t),s=await eQ._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function e2(e,t,n,r){return(0,i.m9)(e).onAuthStateChanged(t,n,r)}function e4(e){return(0,i.m9)(e).signOut()}new WeakMap;let e9="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(e9,"1"),this.storage.removeItem(e9),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class e5 extends e6{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=(0,i.z$)();return es(e)||ec(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=ed(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}let r=()=>{let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);(0,i.w1)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}e5.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3 extends e6{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}e3.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e7{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let n=new e7(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:n,data:r}=e.data,i=this.handlersMap[n];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:n});let s=Array.from(i).map(async t=>t(e.origin,r)),a=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e8(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}e7.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let r,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((a,o)=>{let l=e8("",20);s.port1.start();let u=setTimeout(()=>{o(Error("unsupported_event"))},n);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{o(Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(e.data.response);break;default:clearTimeout(u),clearTimeout(r),o(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return void 0!==tt().WorkerGlobalScope&&"function"==typeof tt().importScripts}async function tr(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti="firebaseLocalStorageDb",ts="firebaseLocalStorage",ta="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tl(e,t){return e.transaction([ts],t?"readwrite":"readonly").objectStore(ts)}function tu(){let e=indexedDB.open(ti,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(ts,{keyPath:ta})}catch(e){n(e)}}),e.addEventListener("success",async()=>{let n=e.result;n.objectStoreNames.contains(ts)?t(n):(n.close(),await new to(indexedDB.deleteDatabase(ti)).toPromise(),t(await tu()))})})}async function th(e,t,n){return new to(tl(e,!0).put({[ta]:t,value:n})).toPromise()}async function tc(e,t){let n=tl(e,!1).get(t),r=await new to(n).toPromise();return void 0===r?null:r.value}function td(e,t){return new to(tl(e,!0).delete(t)).toPromise()}class tf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await tu()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=e7._getInstance(tn()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await tr(),!this.activeServiceWorker)return;this.sender=new te(this.activeServiceWorker);let n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await tu();return await th(e,e9,"1"),await td(e,e9),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>th(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>tc(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>td(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>new to(tl(e,!1).getAll()).toPromise());if(!e||0!==this.pendingWrites)return[];let t=[],n=new Set;if(0!==e.length)for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}async function tp(e,t,n){var r,i,s;let a=await n.verify();try{let o;if(y("string"==typeof a,e,"argument-error"),y("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){let t=o.session;if("phoneNumber"in o)return y("enroll"===t.type,e,"internal-error"),(await (i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:a}},C(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,i)))).phoneSessionInfo.sessionInfo;{y("signin"===t.type,e,"internal-error");let n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;return y(n,e,"missing-multi-factor-info"),(await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:a}},C(e,"POST","/v2/accounts/mfaSignIn:start",A(e,s)))).phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await eL(e,{phoneNumber:o.phoneNumber,recaptchaToken:a});return t}}finally{n._reset()}}tf.type="LOCAL",eb("rcb"),new b(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.providerId=tm.PROVIDER_ID,this.auth=ev(e)}verifyPhoneNumber(e,t){return tp(this.auth,e,(0,i.m9)(t))}static credential(e,t){return ej._fromVerification(e,t)}static credentialFromResult(e){return tm.credentialFromTaggedObject(e)}static credentialFromError(e){return tm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?ej._fromTokenResponse(t,n):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(e,t){return t?Z(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}tm.PROVIDER_ID="phone",tm.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty extends eC{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eN(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eN(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eN(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tv(e){return e1(e.auth,new ty(e),e.bypassAuthState)}function tw(e){let{auth:t,user:n}=e;return y(n,t,"internal-error"),e0(n,new ty(e),e.bypassAuthState)}async function t_(e){let{auth:t,user:n}=e;return y(n,t,"internal-error"),eZ(n,new ty(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:a}=e;if(s){this.reject(s);return}let o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tv;case"linkViaPopup":case"linkViaRedirect":return t_;case"reauthViaPopup":case"reauthViaRedirect":return tw;default:f(this.auth,"internal-error")}}resolve(e){this.pendingPromise||v("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||v("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tT=new b(2e3,1e4);async function tE(e,t,n){let r=ev(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&f(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,eq);let i=tg(r,n);return new tI(r,"signInViaPopup",t,i).executeNotNull()}class tI extends tb{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,tI.currentPopupAction&&tI.currentPopupAction.cancel(),tI.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||v("Popup operations only handle one event");let e=e8();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tI.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tT.get())};e()}}tI.currentPopupAction=null;let tS=new Map;class tA extends tb{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=tS.get(this.auth._key());if(!e){try{let t=await tC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}tS.set(this.auth._key(),e)}return this.bypassAuthState||tS.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tC(e,t){let n=et("pendingRedirect",t.config.apiKey,t.name),r=Z(e._redirectPersistence);if(!await r._isAvailable())return!1;let i=await r._get(n)==="true";return await r._remove(n),i}function tk(e,t){tS.set(e._key(),t)}async function tR(e,t,n=!1){let r=ev(e),i=tg(r,t),s=new tA(r,i,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}class tx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tD(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!tD(e)){let r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(tP(e))}saveEventToCache(e){this.cachedEventUids.add(tP(e)),this.lastProcessedEventTime=Date.now()}}function tP(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function tD({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(e,t={}){return C(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tL=/^https?/;async function tM(e){if(e.config.emulator)return;let{authorizedDomains:t}=await tN(e);for(let e of t)try{if(function(e){let t=w(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!tL.test(n))return!1;if(tO.test(e))return r===e;let i=e.replace(/\./g,"\\.");return RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}(e))return}catch(e){}f(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tV=new b(3e4,6e4);function tU(){let e=tt().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let tF=null,tj=new b(5e3,15e3),tB={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t$=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function tq(e){let t=await (tF=tF||new Promise((t,n)=>{var r,i,s,a;function o(){tU(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tU(),n(p(e,"network-request-failed"))},timeout:tV.get()})}if(null===(i=null===(r=tt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=tt().gapi)||void 0===s?void 0:s.load)o();else{let t=eb("iframefcb");return tt()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},(a=`${e_.gapiScript}?onload=${t}`,e_.loadJS(a)).catch(e=>n(e))}}).catch(e=>{throw tF=null,e})),n=tt().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;y(t.authDomain,e,"auth-domain-config-required");let n=t.emulator?T(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:s.Jn},a=t$.get(e.config.apiHost);a&&(r.eid=a);let o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tB,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});let i=p(e,"network-request-failed"),s=tt().setTimeout(()=>{r(i)},tj.get());function a(){tt().clearTimeout(s),n(t)}t.ping(a).then(a,()=>{r(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tz={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class tH{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}let tK=encodeURIComponent("fac");async function tG(e,t,n,r,a,o){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.Jn,eventId:a};if(t instanceof eq)for(let[n,r]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(o||{})))l[n]=r;if(t instanceof ez){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}for(let t of(e.tenantId&&(l.tid=e.tenantId),Object.keys(l)))void 0===l[t]&&delete l[t];let u=await e._getAppCheckToken(),h=u?`#${tK}=${encodeURIComponent(u)}`:"";return`${function({config:e}){return e.emulator?T(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,i.xO)(l).slice(1)}${h}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tW="webStorageSupport";class tQ{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e3,this._completeRedirectFn=tR,this._overrideRedirectResult=tk}async _openPopup(e,t,n,r){var s;(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager)||v("_initialize() not called before _openPopup()");let a=await tG(e,t,n,w(),r);return function(e,t,n,r=500,s=600){let a=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),l="",u=Object.assign(Object.assign({},tz),{width:r.toString(),height:s.toString(),top:a,left:o}),h=(0,i.z$)().toLowerCase();n&&(l=ea(h)?"_blank":n),ei(h)&&(t=t||"http://localhost",u.scrollbars="yes");let c=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=(0,i.z$)()){var t;return ec(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==l)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",l),new tH(null);let d=window.open(t||"",l,c);y(d,e,"popup-blocked");try{d.focus()}catch(e){}return new tH(d)}(e,a,e8())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=await tG(e,t,n,w(),r),tt().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(n||v("If manager is not set, promise should be"),n)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await tq(e),n=new tx(e);return t.register("authEvent",t=>(y(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(tW,{type:tW},n=>{var r;let i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[tW];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tM(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ed()||es()||ec()}}class tX{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return v("unexpected MultiFactorSessionType")}}}class tJ extends tX{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new tJ(e)}_finalizeEnroll(e,t,n){return C(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return C(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class tY{constructor(){}static assertion(e){return tJ._fromCredential(e)}}tY.FACTOR_ID="phone";class tZ{static assertionForEnrollment(e,t){return t0._fromSecret(e,t)}static assertionForSignIn(e,t){return t0._fromEnrollmentId(e,t)}static async generateSecret(e){var t,n;y(void 0!==(null===(t=e.user)||void 0===t?void 0:t.auth),"internal-error");let r=await C(n=e.user.auth,"POST","/v2/accounts/mfaEnrollment:start",A(n,{idToken:e.credential,totpEnrollmentInfo:{}}));return t1._fromStartTotpMfaEnrollmentResponse(r,e.user.auth)}}tZ.FACTOR_ID="totp";class t0 extends tX{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new t0(t,void 0,e)}static _fromEnrollmentId(e,t){return new t0(t,e)}async _finalizeEnroll(e,t,n){return y(void 0!==this.secret,e,"argument-error"),C(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){y(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let n={verificationCode:this.otp};return C(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n}))}}class t1{constructor(e,t,n,r,i,s,a){this.sessionInfo=s,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new t1(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(t2(e)||t2(t))&&(r=!0),r&&(t2(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),t2(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function t2(e){return void 0===e||(null==e?void 0:e.length)===0}var t4="@firebase/auth",t9="1.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let t5=(0,i.Pz)("authIdTokenMaxAge")||300,t3=null,t7=e=>async t=>{let n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>t5)return;let i=null==n?void 0:n.token;t3!==i&&(t3=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function t8(e=(0,s.Mq)()){let t=(0,s.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let n=(0,s.qX)(e,"auth");if(n.isInitialized()){let e=n.getImmediate(),r=n.getOptions();if((0,i.vZ)(r,null!=t?t:{}))return e;f(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:tQ,persistence:[tf,e5,e3]}),r=(0,i.Pz)("authTokenSyncURL");if(r){let e=t7(r);(0,i.m9)(n).beforeAuthStateChanged(e,()=>e(n.currentUser)),(0,i.m9)(n).onIdTokenChanged(t=>e(t),void 0,void 0)}let a=(0,i.q4)("auth");return a&&function(e,t,n){let r=ev(e);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");let i=!!(null==n?void 0:n.disableWarnings),s=eS(t),{host:a,port:o}=function(e){let t=eS(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let e=i[1];return{host:e,port:eA(r.substr(e.length+1))}}{let[e,t]=r.split(":");return{host:e,port:eA(t)}}}(t),l=null===o?"":`:${o}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(n,`http://${a}`),n}e_={loadJS:e=>new Promise((t,n)=>{var r,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=p("internal-error");t.customData=e,n(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(s)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},r="Browser",(0,s.Xd)(new l.wA("auth",(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=n.options;y(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});let l=new ey(n,i,s,{apiKey:a,authDomain:o,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ef(r)});return function(e,t){let n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Z);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),(0,s.Xd)(new l.wA("auth-internal",e=>new t6(ev(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(t4,t9,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(r)),(0,s.KN)(t4,t9,"esm2017")},9828:function(e,t,n){"use strict";n.d(t,{Bt:function(){return r.Bt},ET:function(){return r.ET},IO:function(){return r.IO},JU:function(){return r.JU},PL:function(){return r.PL},QT:function(){return r.QT},TQ:function(){return r.TQ},Xo:function(){return r.Xo},ad:function(){return r.ad},ar:function(){return r.ar},cf:function(){return r.cf},hJ:function(){return r.hJ},qs:function(){return r.qs},r7:function(){return r.r7}});var r=n(8036)},7004:function(e,t,n){"use strict";n.d(t,{$C:function(){return w},V1:function(){return _}});var r,i=n(2238),s=n(4444),a=n(8463);function o(e,t){let n={};for(let r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function l(e){if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":{let t=Number(e.value);if(isNaN(t))throw Error("Data cannot be decoded from JSON: "+e);return t}default:throw Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(e=>l(e)):"function"==typeof e||"object"==typeof e?o(e,e=>l(e)):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u="functions",h={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class c extends s.ZR{constructor(e,t,n){super(`${u}/${e}`,t||""),this.details=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(e,t,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(e=>this.auth=e,()=>{}),this.messaging||t.get().then(e=>this.messaging=e,()=>{}),this.appCheck||n.get().then(e=>this.appCheck=e,()=>{})}async getAuthToken(){if(this.auth)try{let e=await this.auth.getToken();return null==e?void 0:e.accessToken}catch(e){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(e){return}}async getAppCheckToken(e){if(this.appCheck){let t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken(e)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f="us-central1";class p{constructor(e,t,n,r,i=f,s){this.app=e,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new d(t,n,r),this.cancelAllRequests=new Promise(e=>{this.deleteService=()=>Promise.resolve(e())});try{let e=new URL(i);this.customDomain=e.origin,this.region=f}catch(e){this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){let t=this.app.options.projectId;if(null!==this.emulatorOrigin){let n=this.emulatorOrigin;return`${n}/${t}/${this.region}/${e}`}return null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}async function m(e,t,n,r){let i;n["Content-Type"]="application/json";try{i=await r(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch(e){return{status:0,json:null}}let s=null;try{s=await i.json()}catch(e){}return{status:i.status,json:s}}async function g(e,t,n,r){var i;let s;let a={data:n=function e(t){if(null==t)return null;if(t instanceof Number&&(t=t.valueOf()),"number"==typeof t&&isFinite(t)||!0===t||!1===t||"[object String]"===Object.prototype.toString.call(t))return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(t=>e(t));if("function"==typeof t||"object"==typeof t)return o(t,t=>e(t));throw Error("Data cannot be encoded in JSON: "+t)}(n)},u={},d=await e.contextProvider.getContext(r.limitedUseAppCheckTokens);d.authToken&&(u.Authorization="Bearer "+d.authToken),d.messagingToken&&(u["Firebase-Instance-ID-Token"]=d.messagingToken),null!==d.appCheckToken&&(u["X-Firebase-AppCheck"]=d.appCheckToken);let f=(i=r.timeout||7e4,s=null,{promise:new Promise((e,t)=>{s=setTimeout(()=>{t(new c("deadline-exceeded","deadline-exceeded"))},i)}),cancel:()=>{s&&clearTimeout(s)}}),p=await Promise.race([m(t,a,u,e.fetchImpl),f.promise,e.cancelAllRequests]);if(f.cancel(),!p)throw new c("cancelled","Firebase Functions instance was deleted.");let g=function(e,t){let n,r=function(e){if(e>=200&&e<300)return"ok";switch(e){case 0:case 500:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),i=r;try{let e=t&&t.error;if(e){let t=e.status;if("string"==typeof t){if(!h[t])return new c("internal","internal");r=h[t],i=t}let s=e.message;"string"==typeof s&&(i=s),n=e.details,void 0!==n&&(n=l(n))}}catch(e){}return"ok"===r?null:new c(r,i,n)}(p.status,p.json);if(g)throw g;if(!p.json)throw new c("internal","Response is not valid JSON object.");let y=p.json.data;if(void 0===y&&(y=p.json.result),void 0===y)throw new c("internal","Response is missing data field.");return{data:l(y)}}let y="@firebase/functions",v="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e=(0,i.Mq)(),t=f){let n=(0,i.qX)((0,s.m9)(e),u).getImmediate({identifier:t}),r=(0,s.P0)("functions");return r&&function(e,t,n){(0,s.m9)(e).emulatorOrigin=`http://${t}:${n}`}(n,...r),n}function _(e,t,n){var r;return r=(0,s.m9)(e),e=>(function(e,t,n,r){let i=e._url(t);return g(e,i,n,r)})(r,t,e,n||{})}r=fetch.bind(self),(0,i.Xd)(new a.wA(u,(e,{instanceIdentifier:t})=>{let n=e.getProvider("app").getImmediate();return new p(n,e.getProvider("auth-internal"),e.getProvider("messaging-internal"),e.getProvider("app-check-internal"),t,r)},"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(y,v,void 0),(0,i.KN)(y,v,"esm2017")},6650:function(e,t,n){"use strict";n.d(t,{Jt:function(){return ey},cF:function(){return ew},iH:function(){return ev},B0:function(){return eg}});var r,i,s,a,o=n(2238),l=n(4444),u=n(8463);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h="firebasestorage.googleapis.com",c="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d extends l.ZR{constructor(e,t,n=0){super(f(e),`Firebase Storage: ${t} (${f(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return f(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function f(e){return"storage/"+e}function p(){return new d(s.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function m(){return new d(s.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function g(){return new d(s.CANCELED,"User canceled the upload/download.")}function y(){return new d(s.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function v(e){return new d(s.INVALID_ARGUMENT,e)}function w(){return new d(s.APP_DELETED,"The Firebase app was deleted.")}function _(e,t){return new d(s.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function b(e){throw new d(s.INTERNAL_ERROR,"Internal error: "+e)}(r=s||(s={})).UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=T.makeFromUrl(e,t)}catch(t){return new T(e,"")}if(""===n.path)return n;throw new d(s.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null,r="([A-Za-z0-9.\\-_]+)",i=RegExp("^gs://"+r+"(/(.*))?$","i");function a(e){e.path_=decodeURIComponent(e.path)}let o=t.replace(/[.]/g,"\\."),l=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:a},{regex:RegExp(`^https?://${t===h?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:a}];for(let t=0;t<l.length;t++){let r=l[t],i=r.regex.exec(e);if(i){let e=i[r.indices.bucket],t=i[r.indices.path];t||(t=""),n=new T(e,t),r.postModify(n);break}}if(null==n)throw new d(s.INVALID_URL,"Invalid URL '"+e+"'.");return n}}class E{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function I(e){return"string"==typeof e||e instanceof String}function S(e){return A()&&e instanceof Blob}function A(){return"undefined"!=typeof Blob}function C(e,t,n,r){if(r<t)throw v(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw v(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function R(e){let t=encodeURIComponent,n="?";for(let r in e)e.hasOwnProperty(r)&&(n=n+(t(r)+"=")+t(e[r])+"&");return n.slice(0,-1)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){let n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return n||r||i}(i=a||(a={}))[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t,n,r,i,s,a,o,l,u,h,c=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=o,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{let n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(i,i.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==i){let e=p();e.serverResponse=i.getErrorText(),r(this.errorCallback_?this.errorCallback_(i,e):e)}else r(t.canceled?this.appDelete_?w():g():m())};this.canceled_?e(!1,new D(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,n){let r=1,i=null,s=null,a=!1,o=0,l=!1;function u(...e){l||(l=!0,t.apply(null,e))}function h(t){i=setTimeout(()=>{i=null,e(d,2===o)},t)}function c(){s&&clearTimeout(s)}function d(e,...t){let n;if(l){c();return}if(e||2===o||a){c(),u.call(null,e,...t);return}r<64&&(r*=2),1===o?(o=2,n=0):n=(r+Math.random())*1e3,h(n)}let f=!1;function p(e){!f&&(f=!0,c(),!l&&(null!==i?(e||(o=2),clearTimeout(i),h(0)):e||(o=1)))}return h(0),s=setTimeout(()=>{a=!0,p(!0)},n),p}((e,t)=>{if(t){e(!1,new D(!1,null,!0));return}let n=this.connectionFactory_();this.pendingConnection_=n;let r=e=>{let t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;let t=n.getErrorCode()===a.NO_ERROR,i=n.getStatus();if(!t||x(i,this.additionalRetryCodes_)&&this.retry){e(!1,new D(!1,null,n.getErrorCode()===a.ABORT));return}e(!0,new D(-1!==this.successCodes_.indexOf(i),n))})},e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class D{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function N(...e){let t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){let n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(A())return new Blob(e);throw new d(s.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let O={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class L{constructor(e,t){this.data=e,this.contentType=t||null}}function M(e){let t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<=127?t.push(r):r<=2047?t.push(192|r>>6,128|63&r):(64512&r)==55296?n<e.length-1&&(64512&e.charCodeAt(n+1))==56320?(r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)):t.push(239,191,189):(64512&r)==56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function V(e,t){let n;switch(e){case O.BASE64:{let n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r)throw _(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case O.BASE64URL:{let n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r)throw _(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}try{n=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("undefined"==typeof atob)throw new d(s.UNSUPPORTED_ENVIRONMENT,"base-64 is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.");return atob(e)}(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw _(e,"Invalid character found")}let r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class U{constructor(e){var t;this.base64=!1,this.contentType=null;let n=e.match(/^data:([^,]+)?,/);if(null===n)throw _(O.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let r=n[1]||null;null!=r&&(this.base64=(t=";base64",r.length>=t.length&&r.substring(r.length-t.length)===t),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t){let n=0,r="";S(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(!S(this.data_))return new F(new Uint8Array(this.data_.buffer,e,t-e),!0);{var n;let r=(n=this.data_).webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null;return null===r?null:new F(r)}}static getBlob(...e){if(A()){let t=e.map(e=>e instanceof F?e.data_:e);return new F(N.apply(null,t))}{let t=e.map(e=>I(e)?function(e,t){switch(e){case O.RAW:return new L(M(t));case O.BASE64:case O.BASE64URL:return new L(V(e,t));case O.DATA_URL:return new L(function(e){let t=new U(e);return t.base64?V(O.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw _(O.DATA_URL,"Malformed data URL.")}return M(t)}(t.rest)}(t),new U(t).contentType)}throw p()}(O.RAW,e).data:e.data_),n=0;t.forEach(e=>{n+=e.byteLength});let r=new Uint8Array(n),i=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]}),new F(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){var t;let n;try{n=JSON.parse(e)}catch(e){return null}return"object"!=typeof(t=n)||Array.isArray(t)?null:n}function B(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e,t){return t}class q{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||$}}let z=null;function H(){if(z)return z;let e=[];e.push(new q("bucket")),e.push(new q("generation")),e.push(new q("metageneration")),e.push(new q("name","fullPath",!0));let t=new q("name");t.xform=function(e,t){return!I(t)||t.length<2?t:B(t)},e.push(t);let n=new q("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new q("timeCreated")),e.push(new q("updated")),e.push(new q("md5Hash",null,!0)),e.push(new q("cacheControl",null,!0)),e.push(new q("contentDisposition",null,!0)),e.push(new q("contentEncoding",null,!0)),e.push(new q("contentLanguage",null,!0)),e.push(new q("contentType",null,!0)),e.push(new q("metadata","customMetadata",!0)),z=e}function K(e,t,n){let r=j(t);return null===r?null:function(e,t,n){let r={};r.type="file";let i=n.length;for(let e=0;e<i;e++){let i=n[e];r[i.local]=i.xform(r,t[i.server])}return Object.defineProperty(r,"ref",{get:function(){let t=new T(r.bucket,r.fullPath);return e._makeStorageReference(t)}}),r}(e,r,n)}function G(e,t){let n={},r=t.length;for(let i=0;i<r;i++){let r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}class W{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){if(!e)throw p()}function X(e,t){return function(n,r){let i=K(e,r,t);return Q(null!==i),i}}function J(e){return function(t,n){var r,i;let a;return 401===t.getStatus()?a=t.getErrorText().includes("Firebase App Check token is invalid")?new d(s.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new d(s.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(r=e.bucket,a=new d(s.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,a=new d(s.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")):a=n,a.status=t.getStatus(),a.serverResponse=n.serverResponse,a}}function Y(e){let t=J(e);return function(n,r){let i=t(n,r);if(404===n.getStatus()){var a;a=e.path,i=new d(s.OBJECT_NOT_FOUND,"Object '"+a+"' does not exist.")}return i.serverResponse=r.serverResponse,i}}function Z(e,t,n){let r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),!r.contentType&&(r.contentType=t&&t.type()||"application/octet-stream"),r}class ee{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function et(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){Q(!1)}return Q(!!n&&-1!==(t||["active"]).indexOf(n)),n}let en={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function er(e){switch(e){case"running":case"pausing":case"canceling":return en.RUNNING;case"paused":return en.PAUSED;case"success":return en.SUCCESS;case"canceled":return en.CANCELED;default:return en.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t,n){"function"==typeof e||null!=t||null!=n?(this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0):(this.next=e.next,this.error=e.error,this.complete=e.complete)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class ea{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=a.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=a.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=a.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r){if(this.sent_)throw b("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(let e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw b("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw b("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw b("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw b("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class eo extends ea{initXhr(){this.xhr_.responseType="text"}}function el(){return new eo}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=H(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(s.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{let t=this.isExponentialBackoffExpired();if(x(e.status,[])){if(t)e=m();else{this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,this.completeTransitions_();return}}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(s.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){let e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((e,t)=>{let n=function(e,t,n,r,i){let s=t.bucketOnlyServerUrl(),a=Z(t,r,i),o={name:a.fullPath},l=k(s,e.host,e._protocol),u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},h=G(a,n),c=new W(l,"POST",function(e){let t;et(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){Q(!1)}return Q(I(t)),t},e.maxUploadRetryTime);return c.urlParams=o,c.headers=u,c.body=h,c.errorHandler=J(t),c}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,el,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let e=this._uploadUrl;this._resolveToken((t,n)=>{let r=function(e,t,n,r){let i=new W(n,"POST",function(e){let t=et(e,["active","final"]),n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){Q(!1)}n||Q(!1);let i=Number(n);return Q(!isNaN(i)),new ee(i,r.size(),"final"===t)},e.maxUploadRetryTime);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=J(t),i}(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,el,t,n);this._request=i,i.getPromise().then(e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let e=262144*this._chunkMultiplier,t=new ee(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((r,i)=>{let a;try{a=function(e,t,n,r,i,a,o,l){let u=new ee(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw new d(s.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");let h=u.total-u.current,c=h;i>0&&(c=Math.min(c,i));let f=u.current,p=f+c,m={"X-Goog-Upload-Command":0===c?"finalize":h===c?"upload, finalize":"upload","X-Goog-Upload-Offset":`${u.current}`},g=r.slice(f,p);if(null===g)throw y();let v=new W(n,"POST",function(e,n){let i;let s=et(e,["active","final"]),o=u.current+c,l=r.size();return i="final"===s?X(t,a)(e,n):null,new ee(o,l,"final"===s,i)},t.maxUploadRetryTime);return v.headers=m,v.body=g.uploadData(),v.progressCallback=l||null,v.errorHandler=J(e),v}(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){this._error=e,this._transition("error");return}let o=this._ref.storage._makeRequest(a,el,r,i,!1);this._request=o,o.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){262144*this._chunkMultiplier*2<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{let n=function(e,t,n){let r=k(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new W(r,"GET",X(e,n),i);return s.errorHandler=Y(t),s}(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,el,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{let n=function(e,t,n,r,i){let s=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},o=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+o;let l=Z(t,r,i),u="--"+o+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+G(l,n)+"\r\n--"+o+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",h=F.getBlob(u,r,"\r\n--"+o+"--");if(null===h)throw y();let c={name:l.fullPath},d=k(s,e.host,e._protocol),f=e.maxUploadRetryTime,p=new W(d,"POST",X(e,n),f);return p.urlParams=c,p.headers=a,p.body=h.uploadData(),p.errorHandler=J(t),p}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,el,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){let t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":let t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=g(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){let e=er(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){let i=new ei(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){let t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(er(this._state)){case en.SUCCESS:es(this._resolve.bind(null,this.snapshot))();break;case en.CANCELED:case en.ERROR:es(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(er(this._state)){case en.RUNNING:case en.PAUSED:e.next&&es(e.next.bind(e,this.snapshot))();break;case en.SUCCESS:e.complete&&es(e.complete.bind(e))();break;case en.CANCELED:case en.ERROR:default:e.error&&es(e.error.bind(e,this._error))()}}resume(){let e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){let e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){let e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t){this._service=e,t instanceof T?this._location=t:this._location=T.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new eh(e,t)}get root(){let e=new T(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return B(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");return -1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;let t=new T(this._location.bucket,e);return new eh(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw new d(s.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}function ec(e,t){let n=null==t?void 0:t[c];return null==n?null:T.makeFromBucketSpec(n,e)}class ed{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=h,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=r?this._bucket=T.makeFromBucketSpec(r,this._host):this._bucket=ec(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=T.makeFromBucketSpec(this._url,e):this._bucket=ec(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){C("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){C("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new eh(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new E(w());{let s=function(e,t,n,r,i,s,a=!0){let o=R(e.urlParams),l=e.url+o,u=Object.assign({},e.headers);return t&&(u["X-Firebase-GMPID"]=t),null!==n&&n.length>0&&(u.Authorization="Firebase "+n),u["X-Firebase-Storage-Version"]="webjs/"+(null!=s?s:"AppManager"),null!==r&&(u["X-Firebase-AppCheck"]=r),new P(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,a)}(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){let[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}let ef="@firebase/storage",ep="0.12.1",em="storage";function eg(e,t,n){var r;return(r=e=(0,l.m9)(e))._throwIfRoot("uploadBytesResumable"),new eu(r,new F(t),n)}function ey(e){return function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,n){let r=new W(k(t.fullServerUrl(),e.host,e._protocol),"GET",function(t,r){let i=K(e,r,n);return Q(null!==i),function(e,t,n,r){let i=j(t);if(null===i||!I(i.downloadTokens))return null;let s=i.downloadTokens;if(0===s.length)return null;let a=encodeURIComponent;return s.split(",").map(t=>{let i=e.bucket,s=e.fullPath;return k("/b/"+a(i)+"/o/"+a(s),n,r)+R({alt:"media",token:t})})[0]}(i,r,e.host,e._protocol)},e.maxOperationRetryTime);return r.errorHandler=Y(t),r}(e.storage,e._location,H());return e.storage.makeRequestWithTokens(t,el).then(e=>{if(null===e)throw new d(s.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})}(e=(0,l.m9)(e))}function ev(e,t){return function(e,t){if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return function e(t,n){if(t instanceof ed){if(null==t._bucket)throw new d(s.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+c+"' property when initializing the app?");let r=new eh(t,t._bucket);return null!=n?e(r,n):r}return void 0!==n?function(e,t){let n=function(e,t){let n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new T(e._location.bucket,n);return new eh(e.storage,r)}(t,n):t}(e,t);if(e instanceof ed)return new eh(e,t);throw v("To use ref(service, url), the first argument must be a Storage instance.")}(e=(0,l.m9)(e),t)}function ew(e=(0,o.Mq)(),t){e=(0,l.m9)(e);let n=(0,o.qX)(e,em).getImmediate({identifier:t}),r=(0,l.P0)("storage");return r&&function(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";let{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"==typeof i?i:(0,l.Sg)(i,e.app.options.projectId))}(e,t,n,r)}(n,...r),n}(0,o.Xd)(new u.wA(em,function(e,{instanceIdentifier:t}){return new ed(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t,o.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(ef,ep,""),(0,o.KN)(ef,ep,"esm2017")},6531:function(e,t,n){"use strict";var r;let i,s;n.d(t,{X3:function(){return m}});let a=(e,t)=>t.some(t=>e instanceof t),o=new WeakMap,l=new WeakMap,u=new WeakMap,h=new WeakMap,c=new WeakMap,d={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("objectStoreNames"===t)return e.objectStoreNames||u.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return f(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function f(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(f(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&o.set(t,e)}).catch(()=>{}),c.set(t,e),t}(e);if(h.has(e))return h.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(p(this),e),f(o.get(this))}:function(...e){return f(t.apply(p(this),e))}:function(e,...n){let r=t.call(p(this),e,...n);return u.set(r,e.sort?e.sort():[e]),f(r)}:(t instanceof IDBTransaction&&function(e){if(l.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});l.set(e,t)}(t),a(t,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,d):t;return n!==e&&(h.set(e,n),c.set(n,e)),n}let p=e=>c.get(e);function m(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(e,t),o=f(a);return r&&a.addEventListener("upgradeneeded",e=>{r(f(a.result),e.oldVersion,e.newVersion,f(a.transaction),e)}),n&&a.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}let g=["get","getKey","getAll","getAllKeys","count"],y=["put","add","delete","clear"],v=new Map;function w(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(v.get(t))return v.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=y.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||g.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return v.set(t,s),s}d={...r=d,get:(e,t,n)=>w(e,t)||r.get(e,t,n),has:(e,t)=>!!w(e,t)||r.has(e,t)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(3035)}),_N_E=e.O()}]);