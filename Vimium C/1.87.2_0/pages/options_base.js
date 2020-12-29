"use strict";var t,u,s,p,w,y,x,O,R,N,S,_,J;t=function(t){return document.querySelector(t)},u=chrome.extension.getBackgroundPage(),s=chrome.i18n.getMessage,p=function(t,n){return(n||document).querySelectorAll(t)},(w=chrome.i18n.getMessage("lang1"))&&(function(){var n,i,e,o,u,r,c=navigator.language||s("lang2"),a=s("keyMappingsP"),f=t("#keyMappings");for(a&&f&&(f.placeholder=a),n=0,i=p("[data-i-t]");n<i.length;n++)(a=s((f=i[n]).dataset.iT))&&(f.title=a);if(c&&("zh"!==w||"zh-CN"!==c))for(e=0,o=p("input[type=text], textarea");e<o.length;e++)(f=o[e]).lang=c;for(u=0,r=p("[data-i]");u<r.length;u++)((a=s((f=r[u]).dataset.i))||f.dataset.iE)&&(f.innerText=a);document.documentElement.lang="zh"===w?"zh-CN":w})(),y=function(t,n){var i=function(){this.constructor=t};i.prototype=n.prototype,t.prototype=new i},x=(function(){var t=[],n=function(){var i,e,o=t.length;for(i=0,e=t;i<e.length;i++)(0,e[i])();t.length>o?(t.splice(0,o),Promise.resolve().then(n)):t.length=0};return function(i,e){t.length<=0&&Promise.resolve().then(n),9===e?t.unshift(i):t.push(e?i.bind(null,e):i)}})(),O=function(t,n,i,e){var o,u=0,r=function(){var s=Date.now()-o;if(!(s<n-4&&s>=0))return u=0,o!==e?t.call(i):void 0;u=setTimeout(r,n-s)};return e=e?1:0,function(){if(o=Date.now(),!u)return u=setTimeout(r,n),e?(e=o,t.call(i)):void 0}},R=u.f,N=u.l,S=(function(){function t(t,n){this.p=t,this.fo=t.id,this.ho=this.vo=null,this.wo=false,this.fo in N.un&&(n=this.yo.bind(this,n)),this.vo=O(n,330,this,1)}return t.prototype.xo=function(){},t.prototype.ko=function(){this.wo=true,this.ho=N.on(this.fo),t.Oo||this.bo(this.ho)},t.prototype.Ro=function(t,n,i){var e=this.No;return n?(i=e||!i?JSON.stringify(e?e.So(t):t):i,u.JSON.parse(i)):e?e.So(t):t},t.prototype._o=function(){return true},t.prototype.Jo=function(){var n=this.zo(),i="object"==typeof n,e=i?JSON.stringify(this.ho):this.ho,o=i?JSON.stringify(n):n;o!==e&&(e=o,n=this.Ro(n,i,i?o:""),i&&(o=JSON.stringify(n))===JSON.stringify(N.rn[this.fo])&&(n=N.rn[this.fo]),N.in(this.fo,n),this.ho=n=N.on(this.fo),this.wo=true,(e!==(i?JSON.stringify(n):n)||this.Ao(n))&&this.bo(n,true),this.fo in N.un&&t.Po.push(this.fo),this.xo())},t.prototype.Ao=function(){return false},t.$o=function(t,n){return JSON.stringify(t)===JSON.stringify(n)},t.Oo=true,t})(),_=(function(n){function i(e,o){var u,r,c,a,f,l,h=n.call(this,e,o)||this;if(h.Lo=S.$o,h.o=e.querySelector("#exclusionTemplate").content.querySelector(".exclusionRule"),w){for(u=void 0,r=void 0,c=0,a=p("[data-i]",e);c<a.length;c++)(r=s((u=a[c]).dataset.i))&&(u.innerText=r);for(f=0,l=p("[title]",h.o);f<l.length;f++)(r=(u=l[f]).title)?(r=s(r))&&(u.title=r):(r=s(u.getAttribute("title")))&&u.setAttribute("title",r)}return h.jo=e.querySelector("tbody"),h._r=[],h.jo.addEventListener("input",i.Ko),h.jo.addEventListener("input",h.vo),h.jo.addEventListener("click",function(t){return h.Do(t)}),t("#exclusionAddButton").onclick=function(){return h.Uo("")},S.Po&&(h.o.draggable=true),x(function(){return h.Co&&h.Co()}),h}return y(i,n),i.prototype.Eo=function(){},i.Ko=function(t){var n=t.target.vnode;n&&(n.Mo=true)},i.prototype.Uo=function(t,n){this.Wo(this.jo,{pattern:t,passKeys:""});var i=this._r[this._r.length-1];false!==n&&x(function(){return i.Zo.focus()}),t&&this.vo(),this.Eo(1)},i.prototype.bo=function(t){if(this.jo.textContent="",this._r=[],t.length<=0);else if(1===t.length)this.Wo(this.jo,t[0]);else{var n=document.createDocumentFragment();t.forEach(this.Wo.bind(this,n)),this.jo.appendChild(n)}return this.Eo(t.length)},i.prototype.Bo=function(){return true},i.prototype.Wo=function(t,n){var i,e,o,u,r,s=n.pattern,c=n.passKeys,a={qo:{pattern:s,passKeys:c},Mo:false,Si:false,Zo:null,Fo:null};this.Bo(s)?(e=(i=document.importNode(this.o,true)).querySelector(".pattern"),o=i.querySelector(".passKeys"),u=c.trimRight(),e.value=s,s&&(e.placeholder=""),o.value=u,u&&(o.placeholder=""),(r=a).Si=true,r.Zo=e,r.Fo=o,e.vnode=r,o.vnode=r,this._r.push(r),t.appendChild(i)):this._r.push(a)},i.Go=function(t){t.qo.pattern&&t.Fo.placeholder&&(t.Fo.placeholder="")},i.prototype.Do=function(t){var n,i=t.target;if("path"===i.localName&&(i=i.parentElement),i.classList.contains("remove"))return(i=i.parentNode.parentNode).classList.contains("exclusionRule")?(n=i.querySelector(".pattern").vnode,i.remove(),this._r.splice(this._r.indexOf(n),1),this.vo(),this.Eo(0)):void 0},i.Ho=function(t,n,i){var e=i.toLowerCase();return i!==e?"<"+n+"s-"+e+">":t},i.Io=function(t){return t&&t.replace(/<(?!<)((?:[acm]-){0,3})([^a-z\d][\dA-Z]*)>/g,i.Ho)},i.prototype.zo=function(t){var n,e,o,u,r,s,c,a,f,l,h=[];for(t=true===t,n=0,e=this._r;n<e.length;n++)o=e[n],t&&!o.Si||(o.Mo?(u=o.Zo.value.trim(),r=false,s=o.Fo.value,u?((c=u.startsWith(":")?0:u.indexOf("://"))&&(/^[\^*]|[^\\][$()*+?\[\]{|}]/.test(u)?u.startsWith("^")||(r=!u.includes("/",c+3),u=(c<0?"^https?://":"^")+(u.startsWith("*")&&"."!==u[1]?"[^/]"+u:(u=u.replace(/\./g,"\\.")).startsWith("*")?u.replace("*\\.","(?:[^./]+\\.)*?"):u.replace("://*\\.","://(?:[^./]+\\.)*?"))):(r=!u.includes("/",c+3)&&!u.startsWith("vimium:"),u=(c<0?":http://":":")+(u=u.replace(/\\(.)/g,"$1")))),r&&(u+="/"),s&&((a=(s=i.Io(s)).match(/<(?!<)(?:a-)?(?:c-)?(?:m-)?(?:s-)?(?:[a-z][\da-z]+|[^\sA-Z])>|\S/g))&&((f="^"===a[0]&&a.length>1)&&a.shift(),a.sort(),f?a.unshift("^"):"^"===a[0]&&(a.shift(),a.push("^"))),s=(s=a?a.join(" ")+" ":"").replace(/<escape>/gi,"<esc>")),o.Fo.title!==(l=s?s.length>1&&"^"===s[0]?"only hook such keys":"pass through such keys":"completely disabled")&&(o.Fo.title=l),this.Qo(o,u,s),h.push(o.qo)):this.Qo(o,"",s)):o.qo.pattern&&h.push(o.qo));return h},i.prototype.Qo=function(t,n,e){var o=!t.qo.passKeys&&!!e;t.qo={pattern:n,passKeys:e},t.Mo=false,o&&i.Go(t)},i.prototype.xo=function(){var t,n,i,e;for(t=0,n=this._r;t<n.length;t++)(i=n[t]).Si&&(i.Zo.value!==i.qo.pattern&&(i.Zo.value=i.qo.pattern),e=i.qo.passKeys.trim(),i.Fo.value!==e&&(i.Fo.value=e))},i})(S),J=R<48||devicePixelRatio<2&&R>=61?function(){var t=document.createElement("style"),n=devicePixelRatio,i=R>=61&&n>=1,e=i||R>=48?1/n:1;e=(""+(e+=999e-8)).slice(0,7).replace(/\.?0+$/,""),t.textContent=i?"html { --tiny: "+e+"px; }":"* { border-width: "+e+"px !important; }",document.head.appendChild(t)}:null,location.pathname.toLowerCase().includes("/popup.html")&&Promise.resolve((u.r.Fe(1),N.Rn&&N.Rn())).then((function(t){return function(){chrome.tabs.query({currentWindow:true,active:true},t)}})(function(n){function i(t){var n,i,e=3===$,o=e?m.tt(R,p):m.it(R,p,W.zo(true));o&&(o=(function(t){var n,i,e,o;for((n=(t=t.trim()).length>2&&t.startsWith("^"))&&(t=t.slice(1).trimLeft()),i=Object.create(null),e=0,o=t.split(" ");e<o.length;e++)i[o[e]]=1;return(n?"^ ":"")+Object.keys(i).sort().join(" ")})(o)),t&&(A=$>=2?o:null),$=2,n=o===A,i=!!o&&o.length>2&&"^"===o[0],g.textContent=(e?o?s("o137")+s(i?"o138":"o139"):s("o140"):s(n?"o141":"o142")+s(o?i?"o138":"o139":n?"o143":"o143_2")).replace(" to be","")+s("colon")+(o?s("NS"):""),O.className=o?"code":"fixed-width",O.textContent=o?i?o.slice(2):o:s(null!==o?"o144":"o145")+s("o146"),b.textContent=E&&!e&&n?s("o147",[s(0!==P?"o144":"o145")]):E?s("o148"):"",k.disabled=n,k.firstChild.data=s(n?"o115":"o115_2")}function e(){if(!k.disabled){var t=m.Vn;u.a.ht("reset silent",p.t),W.Jo(),setTimeout(function(){m.Vn=t,setTimeout(M,150)},50),$=3,i(true),k.firstChild.data=s("o115_3"),k.disabled=true,T=true}}function o(t,n){n&&n.preventDefault(),u.a.ht(t.toLowerCase(),p.t),window.close()}var r,c,a,f,l,h,d,v,m,p,w,g,k,O,b,R,z,T,A,P,$,L,j,K,D,U,C,E,M,W,Z=n[0],B=Z.url,q=u.a.gn(Z.id),F=t("#blocked-msg"),G=!(q||Z&&B&&"loading"===Z.status&&/^(ht|s?f)tp/.test(B));if(G?(r=document.body,c=document.documentElement,r.innerText="",F.style.display="",F.querySelector(".version").textContent=N.E.En,a=F.querySelector("#refresh-after-install"),Z&&B&&/^(ht|s?f)tp/i.test(B)||a.remove(),r.style.width="auto",r.appendChild(F),null==(l=(f=B.startsWith(location.protocol)&&!B.startsWith(location.origin)?new URL(B).host:"")?N.tn.get(f):null)||l||((h=t("#injection-refused")).style.display="",h.nextElementSibling.remove(),t("#doAllowExt").onclick=function(){var t,n=N.on("extAllowList"),i=n.split("\n"),e=f;i.indexOf(e)<0&&(t=i.indexOf("# "+e)+1||i.indexOf("#"+e)+1,i.splice(t?t-1:i.length,t?1:0,e),n=i.join("\n"),N.in("extAllowList",n)),this.onclick=null,chrome.tabs.query({active:true,currentWindow:true},function(t){var n=function(){return setTimeout(function(){return location.reload()},500),chrome.runtime.lastError};return t&&t[0]?chrome.tabs.reload(t[0].id,n):chrome.tabs.reload(n),chrome.runtime.lastError})}),c.classList.toggle("auto-dark",!!N.Ze.d),c.style.height=""):x(function(t){F.remove(),F=null;var n=document.documentElement.classList;n.toggle("auto-dark",!!N.Ze.d),n.toggle("less-motion",!!N.Ze.m),t.textContent=N.E.En},t(".version")),(d=t(".options-link")).href!==(v=N.E.Nn)&&(d.href=v),d.onclick=function(t){t.preventDefault();var n=u.Object.create(null);n.u=N.E.Nn,u.a.ot[19](n),window.close()},!G){for(m=u.Exclusions,p=!q||q[0].s.i&&!u.r.D.test(q[0].s.u)?{i:0,a:Z.incognito,s:0,f:0,t:Z.id,u:B}:q[0].s,w=p.i&&((u.a.gn(Z.id,0)||{}).s||{}).u||"",g=t("#state-action"),k=t("#saveOptions"),b=(O=g.nextElementSibling).nextElementSibling,R=p.u,z=(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return y(n,t),n.prototype.Uo=function(i,e){t.prototype.Uo.call(this,n.Vo(),e)},n.prototype.Bo=function(t){if(!t)return false;var n=m.Vn.get(t);return!(1===n.t?!R.startsWith(n.v)||w&&!w.startsWith(n.v):!n.v.test(R)||w&&!n.v.test(w))},n.prototype.bo=function(e){var o,u,r,s;t.prototype.bo.call(this,e),(o=this).bo=null,document.documentElement.style.height="",n.prototype.Bo=_.prototype.Bo,u=o._r.filter(function(t){return t.Si}),$=(r=u.length>0)?2:1,r?(s=u[0].Fo,i(true)):(o.Uo("",false),s=o._r[o._r.length-1].Fo),x(function(){return s.focus()})},n.prototype.Qo=function(n,i,e){var o,u,r=n.qo.pattern===i;t.prototype.Qo.call(this,n,i,e),r||(o=m.Kn(i,""),u=n.Zo,(1===o.t?R.startsWith(o.v):o.v.test(R))?u.title=u.style.color="":(u.style.color="red",u.title="Red text means that the pattern does not\nmatch the current URL."))},n.Vo=function(){var t=R.startsWith("http:")?"^https?://"+R.split("/",3)[2].replace(/[.[\]]/g,"\\$&")+"/":R.startsWith(location.origin)?":vimium:/"+new URL(R).pathname.replace("/pages",""):/^[^:]+:\/\/./.test(R)&&!R.startsWith("file:")?":"+R.split("/",3).join("/")+"/":":"+R;return n.Vo=function(){return t},t},n})(_),T=true,A=null,P=-1,$=0,k.onclick=e,document.addEventListener("keyup",function(t){13===t.keyCode&&(t.ctrlKey||t.metaKey)&&(setTimeout(window.close,300),T||e())}),L=N.on("exclusionRules"),j=m.Vn=new u.Map,K=m.Qn,D=0,U=L.length;D<U;D++)j.set(L[D].pattern,K[D]);(M=function(){C=2!==p.s?"Disable":"Enable",P=(E=!!(1&p.f))?p.s:-1;var n=t("#toggleOnce"),i=n.nextElementSibling;x(function(){n.firstElementChild.textContent=(s(C)||C)+(E?"":s("Once")),n.onclick=o.bind(null,C),O.id="state-value",i.classList.toggle("hidden",!E),E&&(i.firstElementChild.onclick=o.bind(null,"Reset"))})})(),N.Ze.o||window.addEventListener("keydown",function(t){t.altKey&&(88===t.keyCode||E&&90===t.keyCode)&&!(t.shiftKey||t.ctrlKey||t.metaKey)&&(t.preventDefault(),t.stopImmediatePropagation(),o(88===t.keyCode?C:"Reset"))}),S.Oo=false,W=null,(W=new z(t("#exclusionRules"),function(){if(T){T=false;var n=t("#helpSpan");n&&(n.nextElementSibling.style.display="",n.remove()),k.removeAttribute("disabled"),k.firstChild.data=s("o115_2")}i($<2)})).ko(),window.onunload=function(){m.Vn=null,u.r.Fe(-1)},J&&x(J)}}));