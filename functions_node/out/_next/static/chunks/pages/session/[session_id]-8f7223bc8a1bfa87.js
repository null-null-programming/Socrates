(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[640],{489:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/session/[session_id]",function(){return s(2419)}])},221:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var n=s(5893),r=s(8604),a=s(6718),l=s(8464);let i=()=>{let e=new a.hJ;return(0,a.rh)(l.I8,e)},o=()=>(0,a.w7)(l.I8);var c=s(1664),d=s.n(c),h=s(7294),u=()=>{let[e,t]=(0,h.useState)(!1),{user:s}=(0,r.a)(),[a,l]=(0,h.useState)(!1),c=()=>{l(!0),i().catch(e=>{console.error(null==e?void 0:e.code)}).finally(()=>{l(!1)})};return(0,n.jsxs)("div",{className:"apply-font",children:[(0,n.jsx)("div",{className:"page-background"}),(0,n.jsxs)("nav",{className:"px-5 py-0text-[#F0E3E3]",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)(d(),{href:"/",scroll:!1,children:(0,n.jsx)("b",{className:"font-semibold text-6xl cursor-pointer",children:"Socrates"})}),(0,n.jsx)("button",{onClick:()=>t(!e),className:"text-3xl md:hidden focus:outline-none",children:"☰"}),(0,n.jsxs)("div",{className:"hidden md:flex text-4xl",children:[(0,n.jsx)(d(),{href:"/",scroll:!1,children:(0,n.jsx)("b",{className:"mr-4 cursor-pointer",children:"Home"})}),s&&(0,n.jsx)(d(),{href:"/create",scroll:!1,children:(0,n.jsx)("b",{className:"mr-4 cursor-pointer",children:"Create"})}),s&&(0,n.jsx)(d(),{href:"/room",scroll:!1,children:(0,n.jsx)("b",{className:"mr-4 cursor-pointer",children:"Room"})}),s&&(0,n.jsx)(d(),{href:"/ranking",scroll:!1,children:(0,n.jsx)("b",{className:"mr-4 cursor-pointer",children:"Ranking"})}),s&&(0,n.jsx)(d(),{href:"/profile",scroll:!1,children:(0,n.jsx)("b",{className:"mr-4 cursor-pointer",children:"Profile"})}),(0,n.jsx)("div",{onClick:()=>t(!1),className:"cursor-pointer pl-4",children:null===s&&!a&&(0,n.jsx)("button",{onClick:c,children:(0,n.jsx)("b",{children:"Login"})})}),(0,n.jsx)("div",{onClick:()=>t(!1),className:"cursor-pointer ",children:s&&(0,n.jsx)("button",{onClick:o,children:(0,n.jsx)("b",{children:"Logout"})})})]})]}),(0,n.jsxs)("div",{className:"fixed inset-0 z-20 p-10 text-lg md:hidden ".concat(e?"opacity-100":"opacity-0 pointer-events-none"," transition-opacity duration-500 ease-in-out transform ").concat(e?"translate-y-0":"translate3d(0, -10px, 0)"),style:{backgroundColor:"rgba(25, 24, 37, 0.95)",willChange:"opacity, transform"},children:[(0,n.jsx)("button",{onClick:()=>t(!1),className:"absolute top-5 right-5 text-8xl cursor-pointer focus:outline-none transition-transform duration-300 ease-out",style:{transform:e?"rotate(0)":"rotate(90deg)",willChange:"transform"},children:"\xd7"}),(0,n.jsxs)("ul",{className:"space-y-8 ".concat(e?"translate-y-0":"-translate-y-10"," transition-transform duration-500 ease-in-out"),children:[(0,n.jsx)("li",{children:(0,n.jsx)(d(),{href:"/",scroll:!1,children:(0,n.jsx)("b",{onClick:()=>t(!1),className:"cursor-pointer text-7xl",children:"Home"})})}),s&&(0,n.jsx)("li",{children:(0,n.jsx)(d(),{href:"/create",scroll:!1,children:(0,n.jsx)("b",{onClick:()=>t(!1),className:"cursor-pointer text-7xl",children:"Create"})})}),s&&(0,n.jsx)("li",{children:(0,n.jsx)(d(),{href:"/room",scroll:!1,children:(0,n.jsx)("b",{onClick:()=>t(!1),className:"cursor-pointer text-7xl",children:"Room"})})}),s&&(0,n.jsx)("li",{children:(0,n.jsx)(d(),{href:"/ranking",scroll:!1,children:(0,n.jsx)("b",{onClick:()=>t(!1),className:"cursor-pointer text-7xl",children:"Ranking"})})}),s&&(0,n.jsx)("li",{children:(0,n.jsx)(d(),{href:"/profile",scroll:!1,children:(0,n.jsx)("b",{onClick:()=>t(!1),className:"cursor-pointer text-7xl",children:"Profile"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{onClick:()=>t(!1),className:"cursor-pointer text-7xl",children:null===s&&!a&&(0,n.jsx)("button",{onClick:c,children:(0,n.jsx)("b",{children:"Login"})})})}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{onClick:()=>t(!1),className:"cursor-pointer text-7xl",children:s&&(0,n.jsx)("button",{onClick:o,children:(0,n.jsx)("b",{children:"Logout"})})})})]})]})]})]})}},2738:function(e,t,s){"use strict";var n=s(9828),r=s(8464);let a=async e=>{if(!e)return null;let t=(0,n.JU)(r.db,"users",e);try{let e=await (0,n.QT)(t);if(e.exists())return{user_name:e.data().user_name||"Anonymous",imgUrl:e.data().img_url||"https://firebasestorage.googleapis.com/v0/b/socrates-413218.appspot.com/o/util%2Fanonymous.png?alt=media&token=b433ffba-46b8-47cb-8699-6c2780814c34",rate:e.data().rate||1500};return console.log("No such document!"),null}catch(e){return console.error("Error fetching user data:",e),null}};t.Z=a},2419:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return b}});var n=s(5893),r=s(9828),a=s(1163),l=s(7294),i=s(221),o=s(8604),c=s(8464),d=s(5675),h=s.n(d),u=s(2738),x=(e,t)=>{let[s,n]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{(async()=>{let s=(0,r.JU)(c.db,"sessions",e);try{let e=await (0,r.QT)(s);if(e.exists()){let s=e.data().participants;n(s[0]===t)}else console.log("No such session!")}catch(e){console.error("Error fetching session participants:",e)}})()},[e,t]),s},f=(e,t)=>{let[s,n]=(0,l.useState)(null);return(0,l.useEffect)(()=>{let s=async()=>{let s=(0,r.JU)(c.db,"sessions",e);try{let e=await (0,r.QT)(s);if(e.exists()){let s=e.data().participants.find(e=>e!==t);n(s)}else console.log("No such session!")}catch(e){console.error("Failed to fetch session data:",e)}};e&&t&&s()},[e,t]),s};let m=()=>{let[e,t]=(0,l.useState)(window.innerWidth);(0,l.useEffect)(()=>{let e=()=>{t(window.innerWidth)};return window.addEventListener("resize",e),document.body.style.overflow="hidden",()=>{window.removeEventListener("resize",e),document.body.style.overflow="visible"}},[e])};var p=e=>{let{sessionId:t}=e;m();let[s,d]=(0,l.useState)("debate"),[p,b]=(0,l.useState)(""),[j,g]=(0,l.useState)(""),[w,N]=(0,l.useState)([]),[y,v]=(0,l.useState)(300),[C,E]=(0,l.useState)({user_name:"Anonymous",imgUrl:"https://firebasestorage.googleapis.com/v0/b/socrates-413218.appspot.com/o/util%2Fanonymous.png?alt=media&token=b433ffba-46b8-47cb-8699-6c2780814c34",rate:1500}),{user:k,token:_}=(0,o.a)(),[S,I]=(0,l.useState)(!1),[T,D]=(0,l.useState)(null),[U,F]=(0,l.useState)(500),J=x(t,null==k?void 0:k.id),P=f(t,null==k?void 0:k.id),L=(0,a.useRouter)();(0,l.useEffect)(()=>{k&&(async()=>{let e=(0,r.JU)(c.db,"sessions",t);try{let t=await (0,r.QT)(e);if(t.exists()){let e=t.data().topic;D(e)}else console.log("No such session!")}catch(e){console.error("Error getting session topic:",e)}})()},[t,k]),(0,l.useEffect)(()=>{k&&(async()=>{let e=await (0,u.Z)(k.id);e&&E(e)})()},[k]);let O=(0,l.useCallback)(()=>{let e=0;w.forEach(t=>{t.senderId!==(null==k?void 0:k.id)||t.isChat||(e+=t.text.length,t.timestamp)});let t=500-e;F(t>0?t:0)},[w,null==k?void 0:k.id]);(0,l.useEffect)(()=>{k&&(async()=>{let e=(0,r.JU)(c.db,"sessions",t),s=await (0,r.QT)(e);if(s.exists()){let e=s.data().startTime.toDate(),t=300-Math.floor((new Date().getTime()-e.getTime())/1e3);v(t=t>0?t:0)}else console.log("No such session!")})()},[t,k]),(0,l.useEffect)(()=>{if(!k)return;let e=w[w.length-1];e&&"system"===e.senderName&&I(!1)},[w,k]),(0,l.useEffect)(()=>{k&&O()},[w,p,k,O]),(0,l.useEffect)(()=>{let e=()=>{};if(k){let s=(0,r.JU)(c.db,"users",k.id);e=(0,r.cf)(s,async e=>{if(e.exists()){let s=e.data();if(C&&s&&s.rate!==C.rate){let e="".concat(C.user_name," : ");C.rate<s.rate?e+="WIN\n":C.rate==s.rate?e+="DRAW\n":e+="LOSE\n";let n={senderId:"system",senderName:"system",isChat:!0,text:e+="Rating update: ".concat(C.rate," -> ").concat(s.rate),timestamp:(0,r.Bt)()};try{await (0,r.ET)((0,r.hJ)(c.db,"sessions",t,"debate"),n)}catch(e){console.error("Failed to add rate change message to the debate history",e)}}}})}return()=>e()},[k,C,t]),(0,l.useEffect)(()=>{if(!k)return;let e=setInterval(()=>{v(t=>t>0?t-1:(clearInterval(e),0))},1e3);return()=>clearInterval(e)},[k]),(0,l.useEffect)(()=>{if(!k)return;let e=(0,r.hJ)(c.db,"sessions",t,"debate"),s=(0,r.IO)(e,(0,r.Xo)("timestamp")),n=(0,r.cf)(s,e=>{let t=[];e.forEach(e=>{t.push({id:e.id,...e.data()})}),N(t)});return()=>n()},[t,k]);let R=(0,l.useCallback)(async e=>{let s=e.result,n=[],a="";for(let[e,t]of Object.entries(s))if("round"!==e&&(a+="UserName: ".concat(e,"\n\n"),t)){for(let[e,s]of Object.entries(t))"得点"===e?a+="".concat(e,"\n合計 ").concat(s["合計"],"\n"):a+="".concat(e,"\n得点 ").concat(s["得点"],"\n該当箇所: ").concat(s["該当箇所"],"\n\n");n.push({senderId:"system",senderName:"system",senderImgUrl:null,isChat:!0,text:a,isProponent:null,timestamp:(0,r.Bt)()}),a=""}let l=n.map(e=>(0,r.ET)((0,r.hJ)(c.db,"sessions",t,"debate"),e));await Promise.all(l)},[t]),W=(0,l.useCallback)(async()=>{let e=w.filter(e=>!e.isChat).map(e=>{let t=e.isProponent?"(賛成派)":"(反対派)";return"".concat(e.senderName," ").concat(t," : ").concat(e.text,"\n")}).join("");console.log(e);let s="http://localhost:8000/session/".concat(t,"/eval");try{let t=await fetch(s,{method:"POST",headers:{Authorization:"Bearer ".concat(_),"Content-Type":"application/json"},body:JSON.stringify({debate:e,my_debater_name:C.user_name,opponent_uid:P})});if(!t.ok){let e=await t.json();throw alert(e.detail),Error("Failed to perform evaluation")}let n=await t.json();R(n)}catch(e){console.error("Evaluation failed:",e)}},[R,w,P,t,_,C.user_name]);(0,l.useEffect)(()=>{if(k&&0===y){let e=w.filter(e=>!e.isChat).pop(),t=w.filter(e=>e.isChat).pop();if(!e){L.push("/");return}!t&&(I(!0),e&&e.senderId===(null==k?void 0:k.id)&&W())}},[y,k,w,W,L]);let Q=async e=>{if(!k){alert("ログインしてください。");return}try{let s=e?p:j;if(!s.trim())return;await (0,r.ET)((0,r.hJ)(c.db,"sessions",t,"debate"),{text:s,senderId:k.id,senderName:C.user_name||"Anonymous",senderImgUrl:C.imgUrl||"https://firebasestorage.googleapis.com/v0/b/socrates-413218.appspot.com/o/util%2Fanonymous.png?alt=media&token=b433ffba-46b8-47cb-8699-6c2780814c34",isChat:!1,isProponent:J,timestamp:(0,r.Bt)()}),b("")}catch(e){console.error("メッセージの送信に失敗しました。",e),alert("メッセージの送信に失敗しました。")}};return(0,n.jsxs)("div",{className:"flex flex-col min-h-screen text-white p-1",children:[(0,n.jsx)(i.Z,{}),(0,n.jsxs)("div",{className:"flex md:hidden justify-around p-4 apply-font text-4xl",children:[(0,n.jsx)("button",{className:"flex-1 ".concat("debate"===s?"bg-[#08D9D6]":""," p-2"),onClick:()=>d("debate"),children:"Debate"}),(0,n.jsx)("button",{className:"flex-1 ".concat("chat"===s?"bg-[#FF2E63]":""," p-2"),onClick:()=>d("chat"),children:"Info"})]}),(0,n.jsx)("div",{className:"flex flex-grow position: sticky",children:(0,n.jsx)("div",{className:"flex flex-col w-full",style:{paddingTop:"5%"},children:(0,n.jsxs)("div",{className:"flex-grow flex md:flex-row",children:[("debate"===s||window.innerWidth>=768)&&(0,n.jsxs)("div",{className:"w-full md:w-1/2 overflow-auto",style:{height:"".concat(window.innerHeight/2,"px")},children:[(0,n.jsx)("h2",{className:"text-5xl apply-font",children:"Messages"}),(0,n.jsx)("div",{className:"h-full",children:w.filter(e=>!e.isChat).map(e=>(0,n.jsxs)("div",{className:"py-3",children:[(0,n.jsxs)("div",{className:"flex item-center",children:[(0,n.jsx)(h(),{src:e.senderImgUrl,alt:"sender image",width:100,height:100}),(0,n.jsx)("h1",{className:"p-6",children:e.senderName})]}),(0,n.jsx)("pre",{className:"\n                                    p-2 rounded my-2 text-white whitespace-pre-wrap bg-[#191825]\n                                    ".concat(e.senderId===(null==k?void 0:k.id)?"border border-[#08D9D6]":"border border-[#FF2E63]","\n                                  "),children:e.text})]},e.id))})]}),("chat"===s||window.innerWidth>=768)&&(0,n.jsx)("div",{className:"w-full md:w-1/2 overflow-auto",style:{height:"".concat(window.innerHeight/2,"px")},children:(0,n.jsx)("div",{className:" text-white p-4 rounded-lg shadow-lg flex items-center justify-between",children:(0,n.jsxs)("div",{children:[y>0&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"p-6",children:[(0,n.jsx)("h2",{className:"text-5xl font-semibold apply-font",children:"Topic"}),(0,n.jsx)("p",{className:"text-xl font-bold flex items-center japanese-font",children:T})]}),(0,n.jsxs)("div",{className:"p-6",children:[(0,n.jsx)("h2",{className:"text-5xl font-semibold apply-font",children:"Position"}),(0,n.jsxs)("p",{className:"text-xl font-bold flex items-center japanese-font",children:["あなたは ",J?"賛成派":"反対派"," ","の意見を述べてください。"]})]}),(0,n.jsxs)("div",{className:"p-6",children:[(0,n.jsx)("h2",{className:"text-5xl font-semibold apply-font",children:"Information"}),(0,n.jsxs)("p",{className:"text-xl font-bold flex items-center japanese-font",children:[(0,n.jsx)("i",{className:"fas fa-characters mr-2"}),"残り文字数: ",U,"文字"]}),(0,n.jsxs)("p",{className:"text-xl font-bold flex items-center japanese-font",children:[(0,n.jsx)("i",{className:"fas fa-hourglass-end mr-2"}),"残り時間: ",(e=>{let t=e%60;return"".concat(Math.floor(e/60),":").concat(t<10?"0".concat(t):t)})(y)]})]})]}),0===y&&(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{className:"text-5xl apply-font",children:"RESULT"}),w.filter(e=>e.isChat).map(e=>(0,n.jsx)("div",{className:"p-2",children:(0,n.jsx)("pre",{className:"p-2 rounded my-2 text-white whitespace-pre-wrap bg-[#191825] border border-[#EBF400]",children:e.text})},e.id))]})]})})})]})})}),(0,n.jsx)("div",{className:"fixed bottom-0 w-full",children:(0,n.jsxs)("div",{className:"flex flex-wrap",children:[("debate"===s||window.innerWidth>=768)&&(0,n.jsxs)("div",{className:"w-full md:w-1/2 p-3",children:[(0,n.jsx)("textarea",{className:"border bg-[#191825] border-[#08D9D6] p-4 text-white w-full",style:{height:"".concat(window.innerHeight/7,"px")},placeholder:"Your debate message",value:p,onChange:e=>b(e.target.value)}),(0,n.jsx)("button",{className:"mt-4 px-6 py-3 border border-[#08D9D6] text-white font-bold rounded-lg shadow-lg hover:bg-[#08D9D6] transition duration-300 ease-in-out",onClick:()=>Q(!0),children:"Send Debate"})]}),("chat"===s||window.innerWidth>=768)&&(0,n.jsx)("div",{className:"w-full md:w-1/2 p-3"})]})}),S&&(0,n.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10",children:(0,n.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"})})]})},b=()=>{let e=(0,a.useRouter)().query.session_id,[t,s]=(0,l.useState)(null),[i,o]=(0,l.useState)("");return((0,l.useEffect)(()=>{if(!e)return;let t=(0,r.JU)(c.db,"sessions/".concat(e));(0,r.QT)(t).then(e=>{e.exists()?s(e.data()):o("Session not found")});let n=(0,r.IO)((0,r.hJ)(c.db,"sessions/".concat(e,"/debate")),(0,r.Xo)("timestamp")),a=(0,r.cf)(n,e=>{let t=[];e.forEach(e=>{t.push(e.data())}),s(e=>({...e,messages:t}))},e=>{o("Failed to fetch session messages"),console.error(e)});return()=>a()},[e]),i)?(0,n.jsx)("p",{children:i}):t?(0,n.jsx)(p,{sessionId:e}):(0,n.jsx)("p",{children:"Loading..."})}}},function(e){e.O(0,[664,675,888,774,179],function(){return e(e.s=489)}),_N_E=e.O()}]);