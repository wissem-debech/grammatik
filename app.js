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
foot:"© 2026 وسام دبش — Wissem Debech. جميع الحقوق محفوظة."},
fr:{dir:"ltr",title:"Révision Grammatik",app:"Révision",sub:"Révise la grammaire allemande leçon par leçon : des tableaux clairs, puis des exercices du plus facile au plus difficile, avec une correction et une explication immédiates.",
lessons:"Leçons",ex:"exercices",lvls:"niveaux",done:"Réussi",soon:"De nouvelles leçons arrivent bientôt.",back:"← Toutes les leçons",rule:"La règle ↓",
R:"Vrai",W:"Faux",check:"Vérifier",next:"Question suivante →",seeRes:"Voir le résultat",ok:"✓ Bravo, c'est juste !",yours:"✗ Ta réponse :",right:"La bonne :",
empty:"Écris d'abord une réponse",answer:"Réponse",result:"Résultat",m3:"Excellent ! Tu maîtrises ce niveau.",m2:"Très bien ! Revois tes erreurs, puis réessaie.",m1:"Revois les tableaux en bas de la page, puis refais le niveau.",
mist:"Tes erreurs, avec la correction :",redoW:"Refaire seulement les questions ratées",redoA:"Refaire tout le niveau",nextL:"Niveau suivant :",shuf:"Questions dans un ordre aléatoire",reset:"Effacer les résultats de cette leçon",
foot:"© 2026 Wissem Debech — وسام دبش. Tous droits réservés."},
en:{dir:"ltr",title:"Grammatik review",app:"Review",sub:"Review German grammar one lesson at a time: clear tables, then exercises from easiest to hardest, with an instant correction and explanation for every answer.",
lessons:"Lessons",ex:"exercises",lvls:"levels",done:"Done",soon:"New lessons are coming soon.",back:"← All lessons",rule:"The rule ↓",
R:"Right",W:"Wrong",check:"Check",next:"Next question →",seeRes:"See the result",ok:"✓ Well done, that's right!",yours:"✗ Your answer:",right:"Correct:",
empty:"Type an answer first",answer:"Answer",result:"Result",m3:"Excellent! You've mastered this level.",m2:"Very good! Review your mistakes, then try again.",m1:"Review the tables at the bottom of the page, then redo the level.",
mist:"Your mistakes, corrected:",redoW:"Redo only the questions I got wrong",redoA:"Redo the whole level",nextL:"Next level:",shuf:"Shuffle the questions",reset:"Clear this lesson's results",
foot:"© 2026 Wissem Debech — وسام دبش. All rights reserved."}};
const EX={ar:2,fr:3,en:4};
const LS=window.LESSONS||[];

const $=x=>document.getElementById(x);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const iso=m=>`<bdi dir="ltr" class="ltr"${m.length<20?' style="white-space:nowrap"':""}>${m.replace(/-(?=[a-z])/g,"‑")}</bdi>`;
const H={esc,de:s=>s.replace(/\[\[(.+?)\]\]/g,(_,m)=>iso(m))};
const bi=s=>lang=="ar"?esc(s).replace(/[-+]?[A-Za-zÄÖÜäöüß]+(?:[ \-+\/:]+[-+]?[A-Za-zÄÖÜäöüß]+)*/g,iso):esc(s);
const norm=s=>s.trim().toLowerCase().replace(/ß/g,"ss").replace(/\s+/g," ");

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
 document.querySelectorAll("#langs button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l==lang));
 $("brand").innerHTML=lang=="en"?`<span>Grammatik</span> ${x.app}`:`${x.app} <span>Grammatik</span>`;
 $("foot").innerHTML=`<bdi>${esc(x.foot)}</bdi>`;
}
function route(){
 const id=location.hash.slice(1);les=LS.find(l=>l.id==id)||null;
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
 <div class="card"><div class="top"><span id="ttl"></span><bdi id="prog" class="ltr" dir="ltr"></bdi></div><div class="bar"><i id="barI"></i></div><div id="body"></div></div>
 <div class="tools"><label><input type="checkbox" id="shuf"> <span>${esc(x.shuf)}</span></label><button class="link" id="reset">${esc(x.reset)}</button><button class="link ruleBtn" id="toRule">${esc(x.rule)}</button></div>
 <h2 id="rule">${esc(tx(les.reviewTitle))}</h2>${les.review(lang,H)}`;
 $("back").onclick=()=>{location.hash=""};
 $("toRule").onclick=()=>$("rule").scrollIntoView({behavior:"smooth"});
 $("shuf").checked=!!st.shuf;$("shuf").onchange=()=>{st.shuf=$("shuf").checked;save();start(lv)};
 $("reset").onclick=()=>{st.p[les.id]=P={};save();start(0)};
 start(les.levels[P.lv]?P.lv:0);
}
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
 else html+=`<div class="opts">${l.o.map(o=>`<button class="op${l.word?" word":""}" data-o="${esc(o)}">${esc(lab(l,o))}</button>`).join("")}</div>`;
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
$("langs").addEventListener("click",ev=>{
 const b=ev.target.closest("button");if(!b||b.dataset.l==lang)return;lang=b.dataset.l;st.lang=lang;save();
 frame();if(!les)return home();
 const keep={lv,order,i,sc,wrong,res,fin};openLessonKeep(keep);
});
function openLessonKeep(k){openLesson();({lv,order,i,sc,wrong,res,fin}=k);drawLevels();show()}
$("brand").onclick=()=>{location.hash=""};
document.addEventListener("keydown",ev=>{
 if(!les||ev.target.tagName=="INPUT")return;
 const n=+ev.key,ops=document.querySelectorAll(".op");
 if(!res&&!fin&&n>=1&&n<=ops.length)pick(ops[n-1]);
 else if(ev.key=="Enter"&&res&&$("nx")){ev.preventDefault();$("nx").click()}
});
window.addEventListener("hashchange",route);
route();
}
