/* Lesson: Präteritum (simple past)
   Each question: [sentence, answer, explanation ar, fr, en, hint, options]
   "___" marks the gap. "options" (7th item) gives this question its own choices. */
(window.LESSONS=window.LESSONS||[]).push({
id:"praeteritum",
de:"Präteritum",
title:{ar:"الماضي البسيط",fr:"Le prétérit",en:"The simple past"},
sub:{ar:"الأفعال المنتظمة والشاذة والمختلطة، وsein وhaben والأفعال الناقصة، والأفعال المنفصلة — من الأسهل إلى الأصعب، مع تصحيح وشرح فوري.",
fr:"Verbes réguliers, irréguliers et mixtes, sein, haben, les verbes de modalité et les verbes séparables — du plus facile au plus difficile, avec correction et explication immédiates.",
en:"Regular, irregular and mixed verbs, sein, haben, modal verbs and separable verbs — from easiest to hardest, with instant corrections and explanations."},
reviewTitle:{ar:"الجداول والقواعد للمراجعة",fr:"Tableaux et règles de révision",en:"Review tables and rules"},
review(lang,H){
 const P=["ich","du","er/sie/es","wir","ihr","sie/Sie"];
 const L={ar:{reg:"منتظم",irr:"شاذّ",sh:"sein · haben",mod:"الأفعال الناقصة",list:"أهم الأفعال الشاذة والمختلطة",mx:"بالأحمر: أفعال مختلطة (تغيير حرف العلة + -te)"},
  fr:{reg:"réguliers",irr:"irréguliers",sh:"sein · haben",mod:"verbes de modalité",list:"Les verbes irréguliers et mixtes les plus courants",mx:"En rouge : verbes mixtes (changement de voyelle + -te)"},
  en:{reg:"regular",irr:"irregular",sh:"sein · haben",mod:"modal verbs",list:"The most common irregular and mixed verbs",mx:"In red: mixed verbs (vowel change + -te)"}}[lang];
 const T=[
  ["Regelmäßig",L.reg,["machen","arbeiten"],[["mach|te","arbeit|ete"],["mach|test","arbeit|etest"],["mach|te","arbeit|ete"],["mach|ten","arbeit|eten"],["mach|tet","arbeit|etet"],["mach|ten","arbeit|eten"]]],
  ["Unregelmäßig",L.irr,["kommen","gehen"],[["kam","ging"],["kam|st","ging|st"],["kam","ging"],["kam|en","ging|en"],["kam|t","ging|t"],["kam|en","ging|en"]]],
  ["sein · haben",L.sh,["sein","haben"],[["war","hat|te"],["war|st","hat|test"],["war","hat|te"],["war|en","hat|ten"],["war|t","hat|tet"],["war|en","hat|ten"]]],
  ["Modalverben",L.mod,["können","müssen"],[["konn|te","muss|te"],["konn|test","muss|test"],["konn|te","muss|te"],["konn|ten","muss|ten"],["konn|tet","muss|tet"],["konn|ten","muss|ten"]]]];
 const cell=s=>{const [a,b]=s.split("|");return H.esc(a)+(b?`<span class="e">${H.esc(b)}</span>`:"")};
 const V=[["gehen","ging"],["kommen","kam"],["sehen","sah"],["lesen","las"],["sprechen","sprach"],["nehmen","nahm"],["geben","gab"],["essen","aß"],["trinken","trank"],["finden","fand"],["schreiben","schrieb"],["bleiben","blieb"],["fahren","fuhr"],["laufen","lief"],["schlafen","schlief"],["rufen","rief"],["stehen","stand"],["sitzen","saß"],["liegen","lag"],["helfen","half"],["treffen","traf"],["vergessen","vergaß"],["beginnen","begann"],["fliegen","flog"],["tragen","trug"],["werden","wurde"],["tun","tat"],["denken","dachte",1],["bringen","brachte",1],["kennen","kannte",1],["wissen","wusste",1],["rennen","rannte",1]];
 const tips={
 ar:["<b>الأفعال المنتظمة:</b> الجذر + [[-te]] + النهاية: [[mach-te, mach-test, mach-ten, mach-tet]]. صيغة ich وer/sie/es واحدة، بدون نهاية إضافية.",
 "<b>جذر ينتهي بـ [[-d / -t]]</b> (وأيضًا [[-chn, -ffn, -gn]]): نضيف [[-e-]] قبل [[-te]]: [[arbeitete, wartete, öffnete, regnete]].",
 "<b>الأفعال الشاذة:</b> يتغيّر حرف العلة ولا نضيف [[-te]]: [[kommen → kam, gehen → ging]]. النهايات: ich وer بدون نهاية، du [[-st]]، wir وsie [[-en]]، ihr [[-t]]. احفظها من القائمة.",
 "<b>الأفعال المختلطة:</b> يتغيّر حرف العلة <b>و</b>نضيف [[-te]]: [[denken → dachte, bringen → brachte, kennen → kannte, wissen → wusste]].",
 "<b>الأفعال الناقصة تفقد الـ Umlaut:</b> [[können → konnte, müssen → musste, dürfen → durfte, mögen → mochte]]. انتبه: [[könnte]] بالـ Umlaut معناها «يمكن أن / لو» (Konjunktiv II)، وليست ماضيًا.",
 "<b>الأفعال المنفصلة:</b> البادئة تذهب إلى آخر الجملة: [[aufstehen → Ich stand um 7 Uhr auf.]]",
 "<b>متى نستعمله؟</b> في القصص والنصوص المكتوبة والأخبار. وفي الكلام نستعمله غالبًا مع sein وhaben والأفعال الناقصة ([[ich war, ich hatte, ich konnte]])، ومع باقي الأفعال نستعمل Perfekt."],
 fr:["<b>Verbes réguliers :</b> radical + [[-te]] + terminaison : [[mach-te, mach-test, mach-ten, mach-tet]]. ich et er/sie/es ont la même forme, sans terminaison en plus.",
 "<b>Radical en [[-d / -t]]</b> (et aussi [[-chn, -ffn, -gn]]) : on ajoute [[-e-]] avant [[-te]] : [[arbeitete, wartete, öffnete, regnete]].",
 "<b>Verbes irréguliers :</b> la voyelle change et on n'ajoute pas [[-te]] : [[kommen → kam, gehen → ging]]. Terminaisons : ich et er sans terminaison, du [[-st]], wir et sie [[-en]], ihr [[-t]]. Apprends-les avec la liste.",
 "<b>Verbes mixtes :</b> la voyelle change <b>et</b> on ajoute [[-te]] : [[denken → dachte, bringen → brachte, kennen → kannte, wissen → wusste]].",
 "<b>Les verbes de modalité perdent l'Umlaut :</b> [[können → konnte, müssen → musste, dürfen → durfte, mögen → mochte]]. Attention : [[könnte]] avec Umlaut veut dire « pourrait » (Konjunktiv II), ce n'est pas un passé.",
 "<b>Verbes séparables :</b> la particule va à la fin de la phrase : [[aufstehen → Ich stand um 7 Uhr auf.]]",
 "<b>Quand l'utiliser ?</b> Dans les récits, les textes écrits et les informations. À l'oral, surtout avec sein, haben et les verbes de modalité ([[ich war, ich hatte, ich konnte]]) ; pour les autres verbes, on utilise le Perfekt."],
 en:["<b>Regular verbs:</b> stem + [[-te]] + ending: [[mach-te, mach-test, mach-ten, mach-tet]]. ich and er/sie/es have the same form, with no extra ending.",
 "<b>Stems ending in [[-d / -t]]</b> (and also [[-chn, -ffn, -gn]]): add [[-e-]] before [[-te]]: [[arbeitete, wartete, öffnete, regnete]].",
 "<b>Irregular verbs:</b> the vowel changes and there's no [[-te]]: [[kommen → kam, gehen → ging]]. Endings: none for ich and er, du [[-st]], wir and sie [[-en]], ihr [[-t]]. Learn them from the list.",
 "<b>Mixed verbs:</b> the vowel changes <b>and</b> they add [[-te]]: [[denken → dachte, bringen → brachte, kennen → kannte, wissen → wusste]].",
 "<b>Modal verbs lose the umlaut:</b> [[können → konnte, müssen → musste, dürfen → durfte, mögen → mochte]]. Careful: [[könnte]] with an umlaut means “could / would” (Konjunktiv II), not the past.",
 "<b>Separable verbs:</b> the prefix goes to the end of the sentence: [[aufstehen → Ich stand um 7 Uhr auf.]]",
 "<b>When is it used?</b> In stories, written texts and the news. In speech, mostly with sein, haben and modal verbs ([[ich war, ich hatte, ich konnte]]); for other verbs, speech uses the Perfekt."]}[lang];
 return `<div class="tables">${T.map(([n,sub,vs,rows])=>`<div class="tb"><h3>${n}<small>${H.esc(sub)}</small></h3><table><thead><tr><th></th><th>${vs[0]}</th><th>${vs[1]}</th></tr></thead><tbody>${rows.map((r,k)=>`<tr><td class="g">${P[k]}</td><td>${cell(r[0])}</td><td>${cell(r[1])}</td></tr>`).join("")}</tbody></table></div>`).join("")}</div>
<h3 class="rh">${H.esc(L.list)}</h3>
<div class="vlist">${V.map(v=>`<span${v[2]?' class="mx"':""}>${v[0]} → <b>${v[1]}</b></span>`).join("")}</div>
<p class="sub" style="margin-top:6px">${H.esc(L.mx)}</p>
<ul class="tips">${tips.map(s=>`<li>${H.de(s)}</li>`).join("")}</ul>`;
},
levels:[
{name:{ar:"الأفعال المنتظمة",fr:"Verbes réguliers",en:"Regular verbs"},task:{ar:"اختر نهاية الفعل في Präteritum",fr:"Choisis la terminaison du verbe au prétérit",en:"Choose the verb ending in the Präteritum"},o:["te","test","ten","tet"],q:[
["Ich spiel___ früher oft Fußball.","te","ich ← -te: ich spielte. صيغة ich وer/sie/es واحدة.","ich → -te : ich spielte. ich et er/sie/es ont la même forme.","ich → -te: ich spielte. ich and er/sie/es have the same form."],
["Du kauf___ ein neues Handy.","test","du ← -test: du kauftest.","du → -test : du kauftest.","du → -test: du kauftest."],
["Er wohn___ in Berlin.","te","er ← -te، مثل ich: er wohnte.","er → -te, comme ich : er wohnte.","er → -te, like ich: er wohnte."],
["Wir mach___ eine Pause.","ten","wir ← -ten: wir machten.","wir → -ten : wir machten.","wir → -ten: wir machten."],
["Ihr lern___ zusammen Deutsch.","tet","ihr ← -tet: ihr lerntet.","ihr → -tet : ihr lerntet.","ihr → -tet: ihr lerntet."],
["Die Kinder hör___ Musik.","ten","die Kinder = sie (جمع) ← -ten: sie hörten.","die Kinder = sie (pluriel) → -ten : sie hörten.","die Kinder = sie (plural) → -ten: sie hörten."],
["Herr Weber, Sie sag___ gestern etwas anderes.","ten","Sie (للاحترام) مثل الجمع ← -ten: Sie sagten.","Sie (politesse) se conjugue comme le pluriel → -ten : Sie sagten.","Formal Sie works like the plural → -ten: Sie sagten."],
["Meine Mutter koch___ jeden Sonntag.","te","meine Mutter = sie (مفرد) ← -te: sie kochte.","meine Mutter = sie (singulier) → -te : sie kochte.","meine Mutter = sie (singular) → -te: sie kochte."],
["Wir reis___ letztes Jahr nach Italien.","ten","wir ← -ten: wir reisten.","wir → -ten : wir reisten.","wir → -ten: wir reisten."],
["Du tanz___ die ganze Nacht.","test","du ← -test: du tanztest.","du → -test : du tanztest.","du → -test: du tanztest."],
["Ihr spiel___ gestern Karten.","tet","ihr ← -tet: ihr spieltet.","ihr → -tet : ihr spieltet.","ihr → -tet: ihr spieltet."],
["Das Essen schmeck___ sehr gut.","te","das Essen = es ← -te: es schmeckte.","das Essen = es → -te : es schmeckte.","das Essen = es → -te: es schmeckte."]]},
{name:{ar:"جذر ينتهي بـ ‎-d / -t",fr:"Radical en -d / -t",en:"Stems in -d / -t"},task:{ar:"اختر النهاية — هل نحتاج ‎-e- إضافية؟",fr:"Choisis la terminaison — faut-il un -e- en plus ?",en:"Choose the ending — is an extra -e- needed?"},o:["te","ete","test","etest","ten","eten","tet","etet"],q:[
["Ich arbeit___ bis 18 Uhr.","ete","الجذر arbeit ينتهي بـ t ← نضيف -e-: ich arbeitete.","Le radical arbeit finit par t → on ajoute -e- : ich arbeitete.","The stem arbeit ends in t → add -e-: ich arbeitete."],
["Wir wart___ eine Stunde auf den Bus.","eten","wart ينتهي بـ t ← wir warteten.","wart finit par t → wir warteten.","wart ends in t → wir warteten."],
["Du antwort___ nicht auf meine Nachricht.","etest","antwort ينتهي بـ t ← du antwortetest.","antwort finit par t → du antwortetest.","antwort ends in t → du antwortetest."],
["Es regn___ den ganzen Tag.","ete","regn ينتهي بـ gn ← نضيف -e- لسهولة النطق: es regnete.","regn finit par gn → on ajoute -e- pour la prononciation : es regnete.","regn ends in gn → add -e- so it can be pronounced: es regnete."],
["Er öffn___ das Fenster.","ete","öffn ينتهي بـ ffn ← er öffnete.","öffn finit par ffn → er öffnete.","öffn ends in ffn → er öffnete."],
["Ihr red___ zu laut.","etet","red ينتهي بـ d ← ihr redetet.","red finit par d → ihr redetet.","red ends in d → ihr redetet."],
["Die Kinder bad___ im See.","eten","bad ينتهي بـ d ← sie badeten.","bad finit par d → sie badeten.","bad ends in d → sie badeten."],
["Ich mach___ meine Hausaufgaben.","te","mach لا ينتهي بـ d أو t ← بدون -e-: ich machte.","mach ne finit ni par d ni par t → pas de -e- : ich machte.","mach doesn't end in d or t → no -e-: ich machte."],
["Wir kost___ den Kuchen.","eten","kost ينتهي بـ t ← wir kosteten.","kost finit par t → wir kosteten.","kost ends in t → wir kosteten."],
["Er rechn___ die Aufgabe schnell.","ete","rechn ينتهي بـ chn ← er rechnete.","rechn finit par chn → er rechnete.","rechn ends in chn → er rechnete."],
["Du heirat___ im Mai.","etest","heirat ينتهي بـ t ← du heiratetest.","heirat finit par t → du heiratetest.","heirat ends in t → du heiratetest."],
["Die Kinder lach___ laut.","ten","lach لا ينتهي بـ d أو t ← بدون -e-: sie lachten.","lach ne finit ni par d ni par t → pas de -e- : sie lachten.","lach doesn't end in d or t → no -e-: sie lachten."]]},
{name:{ar:"الأفعال الشاذة",fr:"Verbes irréguliers",en:"Irregular verbs"},task:{ar:"اختر الشكل الصحيح في Präteritum",fr:"Choisis la bonne forme au prétérit",en:"Choose the correct Präteritum form"},word:1,q:[
["Gestern ___ ich ins Kino.","ging","gehen شاذّ: ging. مع ich لا توجد نهاية.","gehen est irrégulier : ging. Pas de terminaison avec ich.","gehen is irregular: ging. No ending with ich.","gehen",["ging","gehte","gang","gegangen"]],
["Er ___ spät nach Hause.","kam","kommen ← kam، ومع er بدون نهاية.","kommen → kam, sans terminaison avec er.","kommen → kam, with no ending for er.","kommen",["kam","kommte","kamm","kamen"]],
["Wir ___ einen Film.","sahen","sehen ← sah، ومع wir نضيف -en: wir sahen.","sehen → sah ; avec wir on ajoute -en : wir sahen.","sehen → sah; wir adds -en: wir sahen.","sehen",["sahen","sehten","sahten","sah"]],
["Maria ___ ein Buch.","las","lesen ← las، ومع sie (مفرد) بدون نهاية.","lesen → las, sans terminaison avec sie (singulier).","lesen → las, with no ending for sie (singular).","lesen",["las","leste","lasen","lest"]],
["Ich ___ einen Kaffee.","trank","trinken ← trank. الأفعال الشاذة لا تأخذ -te.","trinken → trank. Les verbes irréguliers ne prennent pas -te.","trinken → trank. Irregular verbs don't take -te.","trinken",["trank","trinkte","trunk","tranken"]],
["Du ___ mit dem Lehrer.","sprachst","sprechen ← sprach، ومع du نضيف -st: du sprachst.","sprechen → sprach ; avec du on ajoute -st : du sprachst.","sprechen → sprach; du adds -st: du sprachst.","sprechen",["sprachst","sprechtest","sprach","sprichst"]],
["Wir ___ mit dem Zug.","fuhren","fahren ← fuhr، wir ← fuhren.","fahren → fuhr ; wir → fuhren.","fahren → fuhr; wir → fuhren.","fahren",["fuhren","fahrten","fuhrten","fahren"]],
["Er ___ mir ein Geschenk.","gab","geben ← gab.","geben → gab.","geben → gab.","geben",["gab","gebte","gibte","gaben"]],
["Ich ___ meinen Schlüssel nicht.","fand","finden ← fand.","finden → fand.","finden → fand.","finden",["fand","findete","fund","fanden"]],
["Ihr ___ sehr lange.","schlieft","schlafen ← schlief، ومع ihr نضيف -t: ihr schlieft.","schlafen → schlief ; avec ihr on ajoute -t : ihr schlieft.","schlafen → schlief; ihr adds -t: ihr schlieft.","schlafen",["schlieft","schlaftet","schlief","schlaft"]],
["Die Gäste ___ bis Mitternacht.","blieben","bleiben ← blieb، وsie (جمع) ← blieben.","bleiben → blieb ; sie (pluriel) → blieben.","bleiben → blieb; sie (plural) → blieben.","bleiben",["blieben","bleibten","bliebten","blieb"]],
["Ich ___ eine E-Mail.","schrieb","schreiben ← schrieb.","schreiben → schrieb.","schreiben → schrieb.","schreiben",["schrieb","schreibte","schrub","schrieben"]],
["Das Konzert ___ um 20 Uhr.","begann","beginnen ← begann.","beginnen → begann.","beginnen → begann.","beginnen",["begann","beginnte","begonn","begannte"]],
["Er ___ seiner Mutter in der Küche.","half","helfen ← half.","helfen → half.","helfen → half.","helfen",["half","helfte","hilf","halfte"]]]},
{name:"sein · haben · Modalverben",task:{ar:"اختر الشكل الصحيح في Präteritum",fr:"Choisis la bonne forme au prétérit",en:"Choose the correct Präteritum form"},word:1,q:[
["Ich ___ gestern krank.","war","sein ← war، ومع ich بدون نهاية.","sein → war, sans terminaison avec ich.","sein → war, with no ending for ich.","sein",["war","wart","waren","seinte"]],
["Wir ___ keine Zeit.","hatten","haben ← hatte، wir ← hatten.","haben → hatte ; wir → hatten.","haben → hatte; wir → hatten.","haben",["hatten","habten","hatte","haben"]],
["Du ___ sehr müde.","warst","sein ← war، du ← warst.","sein → war ; du → warst.","sein → war; du → warst.","sein",["warst","wart","war","bist"]],
["Ihr ___ im Urlaub.","wart","sein ← war، ihr ← wart.","sein → war ; ihr → wart.","sein → war; ihr → wart.","sein",["wart","wartet","waren","wardet"]],
["Er ___ großen Hunger.","hatte","haben ← hatte.","haben → hatte.","haben → hatte.","haben",["hatte","habte","hatt","hat"]],
["Ich ___ gestern nicht kommen.","konnte","können ← konnte، بدون Umlaut. (könnte = «يمكن أن / لو»، وليس ماضيًا.)","können → konnte, sans Umlaut. (könnte = « pourrait », ce n'est pas un passé.)","können → konnte, without the umlaut. (könnte means “could / would”, not the past.)","können",["konnte","könnte","kannte","konntet"]],
["Wir ___ früh aufstehen.","mussten","müssen ← musste، بدون Umlaut: wir mussten.","müssen → musste, sans Umlaut : wir mussten.","müssen → musste, without the umlaut: wir mussten.","müssen",["mussten","müssten","musten","müssen"]],
["Die Kinder ___ ins Kino gehen.","wollten","wollen ← wollte، sie (جمع) ← wollten.","wollen → wollte ; sie (pluriel) → wollten.","wollen → wollte; sie (plural) → wollten.","wollen",["wollten","wollen","willten","wolltet"]],
["Du ___ dort nicht parken.","durftest","dürfen ← durfte، بدون Umlaut: du durftest.","dürfen → durfte, sans Umlaut : du durftest.","dürfen → durfte, without the umlaut: du durftest.","dürfen",["durftest","dürftest","darftest","durfst"]],
["Es ___ schnell dunkel.","wurde","werden ← wurde.","werden → wurde.","werden → wurde.","werden",["wurde","wird","werdete","wurd"]],
["Als Kind ___ ich keinen Fisch.","mochte","mögen ← mochte، بدون Umlaut. (möchte = «أودّ»، وليس ماضيًا.)","mögen → mochte, sans Umlaut. (möchte = « je voudrais », ce n'est pas un passé.)","mögen → mochte, without the umlaut. (möchte means “would like”, not the past.)","mögen",["mochte","möchte","mögte","magte"]],
["Ihr ___ um 8 Uhr da sein.","solltet","sollen ← sollte، ihr ← solltet.","sollen → sollte ; ihr → solltet.","sollen → sollte; ihr → solltet.","sollen",["solltet","solltest","sollten","sollet"]]]},
{name:{ar:"المختلطة والمنفصلة",fr:"Mixtes et séparables",en:"Mixed and separable"},task:{ar:"اختر الشكل الصحيح في Präteritum",fr:"Choisis la bonne forme au prétérit",en:"Choose the correct Präteritum form"},word:1,q:[
["Ich ___ oft an dich.","dachte","denken فعل مختلط: يتغيّر حرف العلة ونضيف -te ← dachte.","denken est mixte : la voyelle change et on ajoute -te → dachte.","denken is mixed: the vowel changes and it adds -te → dachte.","denken",["dachte","denkte","dacht","dänkte"]],
["Er ___ Blumen mit.","brachte","bringen مختلط ← brachte (mitbringen: mit في الآخر).","bringen est mixte → brachte (mitbringen : mit à la fin).","bringen is mixed → brachte (mitbringen: mit goes to the end).","mitbringen",["brachte","bringte","brang","mitbrachte"]],
["Wir ___ ihn schon lange.","kannten","kennen مختلط ← kannte، wir ← kannten.","kennen est mixte → kannte ; wir → kannten.","kennen is mixed → kannte; wir → kannten.","kennen",["kannten","kennten","kanten","kennen"]],
["Ich ___ die Antwort nicht.","wusste","wissen مختلط ← wusste.","wissen est mixte → wusste.","wissen is mixed → wusste.","wissen",["wusste","wisste","weißte","wusst"]],
["Der Hund ___ über die Straße.","rannte","rennen مختلط ← rannte.","rennen est mixte → rannte.","rennen is mixed → rannte.","rennen",["rannte","rennte","rann","ranntete"]],
["Ich ___ um 7 Uhr auf.","stand","aufstehen منفصل: stand في المكان الثاني، وauf في آخر الجملة.","aufstehen est séparable : stand en 2e position, auf à la fin.","aufstehen is separable: stand in second position, auf at the end.","aufstehen",["stand","aufstand","stehte","standen"]],
["Mama ___ im Supermarkt ein.","kaufte","einkaufen منفصل ومنتظم: kaufte … ein.","einkaufen est séparable et régulier : kaufte … ein.","einkaufen is separable and regular: kaufte … ein.","einkaufen",["kaufte","einkaufte","kauft","kauften"]],
["Der Zug ___ pünktlich ab.","fuhr","abfahren منفصل: fuhr … ab.","abfahren est séparable : fuhr … ab.","abfahren is separable: fuhr … ab.","abfahren",["fuhr","abfuhr","fahrte","fuhrt"]],
["Wir ___ unsere Freunde ein.","luden","einladen منفصل وشاذّ: luden … ein.","einladen est séparable et irrégulier : luden … ein.","einladen is separable and irregular: luden … ein.","einladen",["luden","ladeten","einluden","ludet"]],
["Er ___ seine Freundin an.","rief","anrufen منفصل: rief … an.","anrufen est séparable : rief … an.","anrufen is separable: rief … an.","anrufen",["rief","rufte","anrief","riefte"]]]},
{name:{ar:"كتابة",fr:"Écriture",en:"Writing"},task:{ar:"اكتب الفعل في Präteritum (يمكنك كتابة ae وoe وue بدل ä وö وü)",fr:"Écris le verbe au prétérit (tu peux écrire ae, oe, ue au lieu de ä, ö, ü)",en:"Type the verb in the Präteritum (you can type ae, oe, ue for ä, ö, ü)"},w:1,q:[
["Ich ___ in München.","wohnte","منتظم: wohn + te ← ich wohnte.","Régulier : wohn + te → ich wohnte.","Regular: wohn + te → ich wohnte.","wohnen"],
["Wir ___ lange auf dich.","warteten","الجذر wart ينتهي بـ t ← wir warteten.","Le radical wart finit par t → wir warteten.","The stem wart ends in t → wir warteten.","warten"],
["Er ___ nach Hause.","ging","شاذّ: gehen ← ging.","Irrégulier : gehen → ging.","Irregular: gehen → ging.","gehen"],
["Du ___ keine Zeit.","hattest","haben ← hatte، du ← hattest.","haben → hatte ; du → hattest.","haben → hatte; du → hattest.","haben"],
["Ihr ___ sehr nett.","wart","sein ← war، ihr ← wart.","sein → war ; ihr → wart.","sein → war; ihr → wart.","sein"],
["Anna ___ einen Brief.","schrieb","شاذّ: schreiben ← schrieb.","Irrégulier : schreiben → schrieb.","Irregular: schreiben → schrieb.","schreiben"],
["Ich ___ nicht schlafen.","konnte","können ← konnte (بدون Umlaut).","können → konnte (sans Umlaut).","können → konnte (no umlaut).","können"],
["Wir ___ Pizza.","aßen","شاذّ: essen ← aß، wir ← aßen.","Irrégulier : essen → aß ; wir → aßen.","Irregular: essen → aß; wir → aßen.","essen"],
["Er ___ an seine Familie.","dachte","مختلط: denken ← dachte.","Mixte : denken → dachte.","Mixed: denken → dachte.","denken"],
["Das Baby ___ laut.","lachte","منتظم: lach + te ← es lachte.","Régulier : lach + te → es lachte.","Regular: lach + te → es lachte.","lachen"],
["Ich ___ um 6 Uhr auf.","stand","aufstehen منفصل: ich stand … auf.","aufstehen est séparable : ich stand … auf.","aufstehen is separable: ich stand … auf.","aufstehen"],
["Ihr ___ mit dem Bus.","fuhrt","fahren ← fuhr، ihr ← fuhrt.","fahren → fuhr ; ihr → fuhrt.","fahren → fuhr; ihr → fuhrt.","fahren"],
["Du ___ das Fenster.","öffnetest","öffn ينتهي بـ ffn ← du öffnetest.","öffn finit par ffn → du öffnetest.","öffn ends in ffn → du öffnetest.","öffnen"],
["Die Kinder ___ im Garten.","spielten","منتظم، جمع: sie spielten.","Régulier, pluriel : sie spielten.","Regular, plural: sie spielten.","spielen"]]},
{name:{ar:"صحيح أم خطأ؟",fr:"Vrai ou faux ?",en:"Right or wrong?"},task:{ar:"هل الجملة صحيحة؟",fr:"Cette phrase est-elle correcte ?",en:"Is this sentence correct?"},o:["R","W"],word:1,tf:1,q:[
["Gestern ging ich ins Kino.","R","gehen ← ging ✓","gehen → ging ✓","gehen → ging ✓"],
["Ich kommte spät nach Hause.","W","kommen شاذّ، الصحيح: Ich kam spät nach Hause.","kommen est irrégulier, correct : Ich kam spät nach Hause.","kommen is irregular. Correct: Ich kam spät nach Hause."],
["Wir arbeiteten bis 20 Uhr.","R","arbeit + ete + n ← wir arbeiteten ✓","arbeit + ete + n → wir arbeiteten ✓","arbeit + ete + n → wir arbeiteten ✓"],
["Ich arbeitte gestern viel.","W","الجذر ينتهي بـ t فنحتاج -e-: Ich arbeitete gestern viel.","Le radical finit par t, il faut un -e- : Ich arbeitete gestern viel.","The stem ends in t, so it needs -e-: Ich arbeitete gestern viel."],
["Du warst gestern nicht da.","R","sein، du ← warst ✓","sein, du → warst ✓","sein, du → warst ✓"],
["Ich könnte gestern nicht kommen.","W","الماضي بدون Umlaut: Ich konnte gestern nicht kommen. (könnte = «يمكن أن / لو».)","Le passé n'a pas d'Umlaut : Ich konnte gestern nicht kommen. (könnte = « pourrait ».)","The past has no umlaut: Ich konnte gestern nicht kommen. (könnte means “could / would”.)"],
["Sie denkte an ihre Mutter.","W","denken مختلط، الصحيح: Sie dachte an ihre Mutter.","denken est mixte, correct : Sie dachte an ihre Mutter.","denken is mixed. Correct: Sie dachte an ihre Mutter."],
["Ihr hattet viel Glück.","R","haben، ihr ← hattet ✓","haben, ihr → hattet ✓","haben, ihr → hattet ✓"],
["Er aufstand um 7 Uhr.","W","aufstehen منفصل، الصحيح: Er stand um 7 Uhr auf.","aufstehen est séparable, correct : Er stand um 7 Uhr auf.","aufstehen is separable. Correct: Er stand um 7 Uhr auf."],
["Wir lasen jeden Abend ein Buch.","R","lesen ← las، wir ← lasen ✓","lesen → las ; wir → lasen ✓","lesen → las; wir → lasen ✓"],
["Er trinkte ein Glas Wasser.","W","trinken شاذّ، الصحيح: Er trank ein Glas Wasser.","trinken est irrégulier, correct : Er trank ein Glas Wasser.","trinken is irregular. Correct: Er trank ein Glas Wasser."],
["Die Kinder spielten im Park.","R","منتظم، جمع ← spielten ✓","Régulier, pluriel → spielten ✓","Regular, plural → spielten ✓"],
["Du gingst früh schlafen.","R","gehen ← ging، du ← gingst ✓","gehen → ging ; du → gingst ✓","gehen → ging; du → gingst ✓"],
["Wir mussten lange warten.","R","müssen ← mussten (بدون Umlaut) ✓","müssen → mussten (sans Umlaut) ✓","müssen → mussten (no umlaut) ✓"]]}
]
});
