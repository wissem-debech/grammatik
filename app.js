/* مراجعة Grammatik — shared engine for every lesson.
   A lesson is a file in lessons/ that pushes one object onto window.LESSONS
   (see lessons/adjektivendungen.js and README.md). */
{
const UI={
ar:{dir:"rtl",title:"مراجعة Grammatik",app:"مراجعة",sub:"راجع قواعد اللغة الألمانية درسًا درسًا: جداول واضحة، ثم تمارين متدرجة من الأسهل إلى الأصعب، مع تصحيح وشرح فوري لكل إجابة.",
lessons:"الدروس",ex:"تمرينًا",lvls:"مستويات",done:"أنجزت",soon:"دروس جديدة تُضاف قريبًا.",back:"→ كل الدروس",rule:"القاعدة ↓",
R:"صحيح",W:"خطأ",check:"تحقّق",next:"السؤال التالي ←",seeRes:"عرض النتيجة",ok:"✓ أحسنت، إجابة صحيحة!",yours:"✗ إجابتك:",right:"الصحيح:",
empty:"اكتب إجابة أولًا",answer:"الإجابة",result:"النتيجة",m3:"ممتاز! أتقنت هذا المستوى.",m2:"جيد جدًا! راجع أخطاءك ثم أعد المحاولة.",m1:"راجع الجدول أسفل الصفحة ثم أعد المستوى.",
mist:"أخطاؤك مع التصحيح:",redoW:"أعد الأسئلة الخاطئة فقط",redoA:"أعد المستوى كاملًا",nextL:"المستوى التالي:",shuf:"ترتيب عشوائي للأسئلة",reset:"مسح نتائج هذا الدرس",
foot:"© 2026 Wissem Debech. جميع الحقوق محفوظة.",
search:"ابحث عن درس أو كلمة…",
iT:"ثبّت التطبيق على جهازك",iP:"افتح «مراجعة Grammatik» بلمسة واحدة من شاشة هاتفك أو سطح مكتب حاسوبك، كأي تطبيق، ويعمل حتى دون إنترنت.",iGo:"تثبيت التطبيق",iNo:"لاحقًا",iBtn:"تثبيت التطبيق",
iIOS:["في Safari، اضغط زرّ المشاركة (مربّع فيه سهم للأعلى).","اختر «إضافة إلى الشاشة الرئيسية».","اضغط «إضافة»."],
iMac:["في Safari، افتح قائمة «ملف».","اختر «إضافة إلى Dock»."],
iOther:["افتح قائمة المتصفح (⋮ أو ⋯).","اختر «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية».","على الحاسوب يمكنك أيضًا الضغط على أيقونة التثبيت في شريط العنوان."],clear:"مسح البحث",res:"نتائج البحث",inLes:"الدروس",inEx:"في التمارين",noRes:"لا توجد نتائج لـ",more:"اكتب كلمة أدق لرؤية المزيد."},
fr:{dir:"ltr",title:"Révision Grammatik",app:"Révision",sub:"Révise la grammaire allemande leçon par leçon : des tableaux clairs, puis des exercices du plus facile au plus difficile, avec une correction et une explication immédiates.",
lessons:"Leçons",ex:"exercices",lvls:"niveaux",done:"Réussi",soon:"De nouvelles leçons arrivent bientôt.",back:"← Toutes les leçons",rule:"La règle ↓",
R:"Vrai",W:"Faux",check:"Vérifier",next:"Question suivante →",seeRes:"Voir le résultat",ok:"✓ Bravo, c'est juste !",yours:"✗ Ta réponse :",right:"La bonne :",
empty:"Écris d'abord une réponse",answer:"Réponse",result:"Résultat",m3:"Excellent ! Tu maîtrises ce niveau.",m2:"Très bien ! Revois tes erreurs, puis réessaie.",m1:"Revois les tableaux en bas de la page, puis refais le niveau.",
mist:"Tes erreurs, avec la correction :",redoW:"Refaire seulement les questions ratées",redoA:"Refaire tout le niveau",nextL:"Niveau suivant :",shuf:"Questions dans un ordre aléatoire",reset:"Effacer les résultats de cette leçon",
foot:"© 2026 Wissem Debech. Tous droits réservés.",
search:"Chercher une leçon, un mot…",
iT:"Installe l'application sur ton appareil",iP:"Ouvre « Révision Grammatik » d'un seul geste depuis l'écran de ton téléphone ou le bureau de ton ordinateur, comme une vraie application, même sans Internet.",iGo:"Installer l'application",iNo:"Plus tard",iBtn:"Installer l'application",
iIOS:["Dans Safari, touche le bouton Partager (le carré avec une flèche vers le haut).","Choisis « Sur l'écran d'accueil ».","Touche « Ajouter »."],
iMac:["Dans Safari, ouvre le menu « Fichier ».","Choisis « Ajouter au Dock »."],
iOther:["Ouvre le menu du navigateur (⋮ ou ⋯).","Choisis « Installer l'application » ou « Ajouter à l'écran d'accueil ».","Sur ordinateur, tu peux aussi cliquer sur l'icône d'installation dans la barre d'adresse."],clear:"Effacer la recherche",res:"Résultats de la recherche",inLes:"Leçons",inEx:"Dans les exercices",noRes:"Aucun résultat pour",more:"Précise ta recherche pour en voir plus."},
en:{dir:"ltr",title:"Grammatik review",app:"Review",sub:"Review German grammar one lesson at a time: clear tables, then exercises from easiest to hardest, with an instant correction and explanation for every answer.",
lessons:"Lessons",ex:"exercises",lvls:"levels",done:"Done",soon:"New lessons are coming soon.",back:"← All lessons",rule:"The rule ↓",
R:"Right",W:"Wrong",check:"Check",next:"Next question →",seeRes:"See the result",ok:"✓ Well done, that's right!",yours:"✗ Your answer:",right:"Correct:",
empty:"Type an answer first",answer:"Answer",result:"Result",m3:"Excellent! You've mastered this level.",m2:"Very good! Review your mistakes, then try again.",m1:"Review the tables at the bottom of the page, then redo the level.",
mist:"Your mistakes, corrected:",redoW:"Redo only the questions I got wrong",redoA:"Redo the whole level",nextL:"Next level:",shuf:"Shuffle the questions",reset:"Clear this lesson's results",
foot:"© 2026 Wissem Debech. All rights reserved.",
search:"Search lessons or words…",
iT:"Install the app on your device",iP:"Open “Grammatik review” with one tap from your phone's home screen or your computer's desktop, like any app — it even works offline.",iGo:"Install the app",iNo:"Later",iBtn:"Install the app",
iIOS:["In Safari, tap the Share button (the square with an arrow pointing up).","Choose “Add to Home Screen”.","Tap “Add”."],
iMac:["In Safari, open the File menu.","Choose “Add to Dock”."],
iOther:["Open the browser menu (⋮ or ⋯).","Choose “Install app” or “Add to Home screen”.","On a computer, you can also click the install icon in the address bar."],clear:"Clear search",res:"Search results",inLes:"Lessons",inEx:"In the exercises",noRes:"No results for",more:"Type a more specific word to see more."}};
const EX={ar:2,fr:3,en:4};
const LS=window.LESSONS||[];

const $=x=>document.getElementById(x);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const iso=m=>`<bdi dir="ltr" class="ltr"${m.length<20?' style="white-space:nowrap"':""}>${m.replace(/-(?=[a-z])/g,"‑")}</bdi>`;
const H={esc,de:s=>s.replace(/\[\[(.+?)\]\]/g,(_,m)=>iso(m))};
const bi=s=>lang=="ar"?esc(s).replace(/[-+]?[A-Za-zÄÖÜäöüß]+(?:[ \-+\/:]+[-+]?[A-Za-zÄÖÜäöüß]+)*/g,iso):esc(s);
const norm=s=>s.trim().toLowerCase().replace(/ß/g,"ss").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/\s+/g," ");

let st={};try{st=JSON.parse(localStorage.getItem("grammatik")||"{}")}catch(e){}
try{const old=JSON.parse(localStorage.getItem("adjst")||"null");if(old&&!st.p){st.lang=old.lang;st.shuf=old.shuf;st.p={adjektivendungen:old}}}catch(e){}
st.p=st.p||{};
const save=()=>{try{localStorage.setItem("grammatik",JSON.stringify(st))}catch(e){}};

let lang=UI[st.lang]?st.lang:"ar",les=null,P=null,lv=0,order=[],i=0,sc=0,wrong=[],res=null,fin=false;
const t=()=>UI[lang];
const tx=v=>typeof v=="string"?v:v[lang];
const lab=(l,v)=>l.tf?t()[v]:l.word||l.w?v:"-"+v;
const total=L=>L.levels.reduce((a,v)=>a+v.q.length,0);
const best=L=>{const p=st.p[L.id]||{};return L.levels.reduce((a,v,k)=>a+(p["b"+k]||0),0)};

function frame(){
 const x=t();document.documentElement.lang=lang;document.documentElement.dir=x.dir;
 document.title=les?tx(les.title)+" · "+x.title:x.title;
 document.querySelectorAll("#langs button,#mlangs button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l==lang));
 $("brand").innerHTML=lang=="en"?`<span>Grammatik</span> ${x.app}`:`${x.app} <span>Grammatik</span>`;
 $("foot").innerHTML=`<bdi>${esc(x.foot)}</bdi>`;
 $("instBtn").textContent=x.iBtn;if(!$("inst").hidden)instFill();
 $("q").placeholder=x.search;$("q").setAttribute("aria-label",x.search);$("qx").setAttribute("aria-label",x.clear);if($("q").value.trim())search();
}
function route(){
 const id=location.hash.slice(1);les=LS.find(l=>l.id==id)||null;
 if(jump&&!les)jump=null;
 frame();$("brand").style.visibility=les?"visible":"hidden";les?openLesson():home();window.scrollTo({top:0});
}
function home(){
 const x=t();
 $("app").innerHTML=`<div class="hero"><h1>${lang=="en"?`<span class="de-w">Grammatik</span> ${x.app}`:`${x.app} <span class="de-w">Grammatik</span>`}</h1><p class="sub">${esc(x.sub)}</p></div>
 <h2>${esc(x.lessons)}</h2><div class="lessons">${LS.map((L,k)=>{const n=total(L),b=best(L);return `<button class="lesson" data-id="${L.id}"><div class="n">${k+1}</div><h3>${esc(tx(L.title))}</h3><div class="dew">${esc(L.de)}</div><div class="meta">${n} ${esc(x.ex)} · ${L.levels.length} ${esc(x.lvls)}${b?` · ${esc(x.done)} <bdi dir="ltr">${b}/${n}</bdi>`:""}</div><div class="bar"><i style="width:${b/n*100}%"></i></div></button>`}).join("")}<div class="soon">${esc(x.soon)}</div></div>`;
}
function openLesson(){
 const x=t();P=st.p[les.id]=st.p[les.id]||{};save();
 $("app").innerHTML=`<button class="back" id="back">${esc(x.back)}</button>
 <h1>${esc(tx(les.title))} <bdi dir="ltr" class="de-w">${esc(les.de)}</bdi></h1>
 <p class="sub">${esc(tx(les.sub))}</p>
 <div class="levels" id="levels"></div>
 <div class="card" id="card"><div class="top"><span id="ttl"></span><bdi id="prog" class="ltr" dir="ltr"></bdi></div><div class="bar"><i id="barI"></i></div><div id="body"></div></div>
 <div class="tools"><label><input type="checkbox" id="shuf"> <span>${esc(x.shuf)}</span></label><button class="link" id="reset">${esc(x.reset)}</button><button class="link ruleBtn" id="toRule">${esc(x.rule)}</button></div>
 <h2 id="rule">${esc(tx(les.reviewTitle))}</h2>${les.review(lang,H)}`;
 $("back").onclick=()=>{location.hash=""};
 $("toRule").onclick=()=>$("rule").scrollIntoView({behavior:"smooth"});
 $("shuf").checked=!!st.shuf;$("shuf").onchange=()=>{st.shuf=$("shuf").checked;save();start(lv)};
 $("reset").onclick=()=>{st.p[les.id]=P={};save();start(0)};
 if(jump){const j=jump;jump=null;start(j.lv);const p=order.indexOf(j.q);if(p>0){i=p;show()}$("card").scrollIntoView()}
 else start(les.levels[P.lv]?P.lv:0);
}
/* search: lessons (any language) and exercise sentences (German, accents ignored) */
let jump=null;
const fold=s=>String(s).toLowerCase().replace(/ß/g,"ss").normalize("NFD").replace(/[\u0300-\u036f\u064b-\u065f]/g,"").replace(/[{}]/g,"");
function search(){
 const raw=$("q").value.trim(),x=t();$("qx").hidden=!raw;
 if(!raw){$("results").hidden=true;$("app").hidden=false;return}
 const f=fold(raw),words=f.split(/\s+/),hit=s=>{const v=fold(s);return words.every(w=>v.includes(w))};
 const ls=LS.filter(L=>hit([L.de,...Object.values(L.title),...Object.values(L.sub),...L.levels.map(l=>typeof l.name=="string"?l.name:Object.values(l.name).join(" "))].join(" ")));
 const ex=[];LS.forEach(L=>L.levels.forEach((l,k)=>l.q.forEach((q,j)=>{const s=q[0].replace("___",l.w||l.word?" ___ ":q[1]);if(hit(s)||hit(q[0].replace("___",q[1])))ex.push({L,k,j,l,q})})));
 const MAX=40;
 let h=`<h2>${esc(x.res)}</h2>`;
 if(!ls.length&&!ex.length)h+=`<p class="sub">${esc(x.noRes)} «<bdi>${esc(raw)}</bdi>».</p>`;
 if(ls.length)h+=`<h3 class="rh">${esc(x.inLes)}</h3><div class="lessons">${ls.map(L=>`<button class="lesson" data-id="${L.id}"><h3>${esc(tx(L.title))}</h3><div class="dew">${esc(L.de)}</div></button>`).join("")}</div>`;
 if(ex.length)h+=`<h3 class="rh">${esc(x.inEx)} <bdi dir="ltr" class="cnt">${ex.length}</bdi></h3><ul class="hits">${ex.slice(0,MAX).map(r=>`<li><button class="hit" data-id="${r.L.id}" data-k="${r.k}" data-j="${r.j}"><span class="s${r.l.tf&&r.q[1]=="W"?" wrongS":""}">${sentence(r.q[0],r.q[0].includes("___")?r.q[1]:null,"ok")}</span>${r.l.tf&&r.q[1]=="W"?`<span class="why">${bi(r.q[EX[lang]])}</span>`:""}<span class="where">${esc(tx(r.L.title))} · ${r.k+1}. ${esc(tx(r.l.name))}</span></button></li>`).join("")}</ul>${ex.length>MAX?`<p class="sub">${esc(x.more)}</p>`:""}`;
 $("results").innerHTML=h;$("results").hidden=false;$("app").hidden=true;
}
function clearSearch(){$("q").value="";search()}
function drawLevels(){
 $("levels").innerHTML=les.levels.map((l,k)=>{const b=P["b"+k];return `<button class="lv${k==lv?" on":""}" data-k="${k}">${k+1}. ${esc(tx(l.name))}${b!=null?` <small><bdi dir="ltr">${b}/${l.q.length}</bdi></small>`:""}</button>`}).join("");
}
function start(k,only){
 lv=k;P.lv=k;save();
 const idx=only||les.levels[k].q.map((_,j)=>j);
 order=st.shuf?idx.slice().sort(()=>Math.random()-.5):idx.slice();
 i=0;sc=0;wrong=[];res=null;fin=false;drawLevels();show();
}
function sentence(s,fill,cls){
 const h=esc(s).replace(/\{(.+?)\}/,'<span class="hl">$1</span>');
 return h.replace("___",`<span class="gap ${cls||""}" id="gap">${fill?esc(fill):"&nbsp;?&nbsp;"}</span>`);
}
const optCache={};
function optsFor(l,j){const q=l.q[j];if(!q[6])return l.o;const k=les.id+"|"+lv+"|"+j;
 if(!optCache[k]){const a=q[6].slice();for(let n=a.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[a[n],a[r]]=[a[r],a[n]]}optCache[k]=a}return optCache[k]}
function counter(){$("prog").textContent=(i+1)+" / "+order.length+"  ·  ✓ "+sc}
function show(){
 const l=les.levels[lv],x=t();$("ttl").textContent=(lv+1)+". "+tx(l.name);
 $("barI").style.width=(i/order.length*100)+"%";
 if(i>=order.length){fin=true;return finish()}
 counter();
 const q=l.q[order[i]],s=q[0],h=q[5];
 let html=`<p class="task">${esc(tx(l.task))}</p><div class="de">${sentence(s)}</div>`;
 if(h)html+=`<p class="hint">[ ${esc(h)} ]</p>`;
 if(l.w)html+=`<input type="text" id="txt" placeholder="…" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="${esc(x.answer)}"><p class="err" id="err"></p><button class="btn" id="chk">${esc(x.check)}</button>`;
 else html+=`<div class="opts">${optsFor(l,order[i]).map(o=>`<button class="op${l.word?" word":""}${q[6]?" verb":""}" data-o="${esc(o)}">${esc(lab(l,o))}</button>`).join("")}</div>`;
 html+=`<div class="fb" id="fb"></div><button class="btn" id="nx" style="display:none">${esc(i==order.length-1?x.seeRes:x.next)}</button>`;
 $("body").innerHTML=html;
 if(l.w){const tb=$("txt");tb.addEventListener("input",()=>$("err").textContent="");
  tb.addEventListener("keydown",ev=>{if(ev.key=="Enter"){ev.preventDefault();ev.stopPropagation();check()}});$("chk").onclick=check}
 $("nx").onclick=()=>{i++;res=null;show()};
 if(res)paint(false);else if(l.w)$("txt").focus({preventScroll:true});
}
function paint(focus){
 const l=les.levels[lv],x=t(),q=l.q[order[i]],[s,a]=q,e=q[EX[lang]],ok=res.ok;
 if(s.includes("___"))document.querySelector("#body .de").innerHTML=sentence(s,a,ok?"ok":"bad");
 if(l.w){const tb=$("txt");tb.value=res.given;tb.disabled=true;$("chk").style.display="none"}
 else document.querySelectorAll(".op").forEach(b=>{b.disabled=true;if(b.dataset.o==a)b.classList.add("ok");if(!ok&&b.dataset.o==res.given)b.classList.add("bad")});
 const fb=$("fb");fb.className="fb "+(ok?"ok":"bad");
 fb.innerHTML=(ok?`<p>${esc(x.ok)}</p>`:`<p>${esc(x.yours)} <b><bdi dir="ltr">${esc(lab(l,res.given))}</bdi></b> — ${esc(x.right)} <b><bdi dir="ltr">${esc(lab(l,a))}</bdi></b></p>`)+`<p class="why">${bi(e)}</p>`;
 const nx=$("nx");nx.style.display="block";if(focus)nx.focus({preventScroll:true});
}
function answer(given,ok){res={given,ok};if(ok)sc++;else wrong.push(order[i]);counter();paint(true)}
function pick(btn){if(res)return;answer(btn.dataset.o,btn.dataset.o==les.levels[lv].q[order[i]][1])}
function check(){
 if(res)return;const tb=$("txt");if(!tb.value.trim()){$("err").textContent=t().empty;return}
 answer(tb.value.trim(),norm(tb.value)==norm(les.levels[lv].q[order[i]][1]));
}
function finish(){
 const l=les.levels[lv],x=t(),n=order.length;
 if(n==l.q.length&&sc>(P["b"+lv]??-1)){P["b"+lv]=sc;save()}
 drawLevels();$("prog").textContent="";
 const msg=sc==n?x.m3:sc>=n*.7?x.m2:x.m1;
 let h=`<p class="task">${esc(x.result)}</p><div class="score"><bdi dir="ltr">${sc} / ${n}</bdi></div><p>${esc(msg)}</p>`;
 if(wrong.length)h+=`<p class="task">${esc(x.mist)}</p><ul class="miss">${wrong.map(j=>{const q=l.q[j],s=q[0];return `<li><div class="s">${sentence(s,s.includes("___")?q[1]:null,"ok")}</div><div class="why">${!s.includes("___")?`<b><bdi dir="ltr">${esc(lab(l,q[1]))}</bdi></b> — `:""}${bi(q[EX[lang]])}</div></li>`}).join("")}</ul><button class="btn" id="rw">${esc(x.redoW)}</button>`;
 h+=`<button class="btn alt" id="ra">${esc(x.redoA)}</button>`;
 if(lv<les.levels.length-1)h+=`<button class="btn${wrong.length?" alt":""}" id="nl">${esc(x.nextL)} ${esc(tx(les.levels[lv+1].name))}</button>`;
 $("body").innerHTML=h;
 if($("rw"))$("rw").onclick=()=>start(lv,wrong.slice());
 $("ra").onclick=()=>start(lv);
 if($("nl"))$("nl").onclick=()=>{start(lv+1);$("levels").scrollIntoView()};
}

$("app").addEventListener("click",ev=>{
 const c=ev.target.closest(".lesson");if(c){location.hash=c.dataset.id;return}
 const b=ev.target.closest(".lv");if(b){start(+b.dataset.k);return}
 const o=ev.target.closest(".op");if(o)pick(o);
});
const onLang=ev=>{
 const b=ev.target.closest("button[data-l]");if(!b||b.dataset.l==lang)return;lang=b.dataset.l;st.lang=lang;save();
 frame();if(!les)return home();
 const keep={lv,order,i,sc,wrong,res,fin};openLessonKeep(keep);
};
$("langs").addEventListener("click",onLang);$("mlangs").addEventListener("click",onLang);
function openLessonKeep(k){openLesson();({lv,order,i,sc,wrong,res,fin}=k);drawLevels();show()}
$("brand").onclick=()=>{clearSearch();location.hash=""};
$("q").addEventListener("input",search);
$("q").addEventListener("keydown",ev=>{if(ev.key=="Escape")clearSearch()});
$("qx").onclick=()=>{clearSearch();$("q").focus()};
$("results").addEventListener("click",ev=>{
 const h=ev.target.closest(".hit"),c=ev.target.closest(".lesson");if(!h&&!c)return;
 const id=(h||c).dataset.id;if(h)jump={lv:+h.dataset.k,q:+h.dataset.j};
 clearSearch();if(location.hash.slice(1)==id)route();else location.hash=id;
});
document.addEventListener("keydown",ev=>{
 if(!les||ev.target.tagName=="INPUT"||!$("results").hidden)return;
 const n=+ev.key,ops=document.querySelectorAll(".op");
 if(!res&&!fin&&n>=1&&n<=ops.length)pick(ops[n-1]);
 else if(ev.key=="Enter"&&res&&$("nx")){ev.preventDefault();$("nx").click()}
});
window.addEventListener("hashchange",route);
route();

/* install as an app: first-visit dialog + footer button */
let deferred=null;
const standalone=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===true;
const framed=(()=>{try{return window.self!==window.top}catch(e){return true}})();
const ua=navigator.userAgent,isIOS=/iPad|iPhone|iPod/.test(ua)||(navigator.platform=="MacIntel"&&navigator.maxTouchPoints>1),isMacSafari=!isIOS&&/Macintosh/.test(ua)&&/Safari/.test(ua)&&!/Chrome|Chromium|Edg|Firefox/.test(ua);
function instFill(){
 const x=t();$("instT").textContent=x.iT;$("instP").textContent=x.iP;$("instNo").textContent=x.iNo;$("instGo").textContent=x.iGo;
 $("instGo").hidden=!deferred;
 const steps=deferred?[]:isIOS?x.iIOS:isMacSafari?x.iMac:x.iOther;
 $("instSteps").innerHTML=steps.map(s=>`<li>${esc(s)}</li>`).join("");$("instSteps").hidden=!steps.length;
}
function instOpen(){instFill();$("inst").hidden=false;($("instGo").hidden?$("instNo"):$("instGo")).focus()}
function instClose(){$("inst").hidden=true;st.instSeen=1;save()}
$("instNo").onclick=instClose;
$("inst").addEventListener("click",ev=>{if(ev.target.id=="inst")instClose()});
document.addEventListener("keydown",ev=>{if(ev.key=="Escape"&&!$("inst").hidden)instClose()});
$("instGo").onclick=async()=>{if(!deferred)return;deferred.prompt();try{await deferred.userChoice}catch(e){}deferred=null;instClose()};
$("instBtn").onclick=instOpen;
window.addEventListener("beforeinstallprompt",ev=>{ev.preventDefault();deferred=ev;if(!$("inst").hidden)instFill()});
window.addEventListener("appinstalled",()=>{deferred=null;$("instBtn").hidden=true;if(!$("inst").hidden)instClose()});
if(!framed&&!standalone()){
 $("instBtn").hidden=false;
 if(!st.instSeen)setTimeout(()=>{if(!standalone())instOpen()},1500);
}
if("serviceWorker" in navigator&&/^https?:$/.test(location.protocol)&&!framed){navigator.serviceWorker.register("sw.js").catch(()=>{})}
}
