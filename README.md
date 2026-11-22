# مراجعة Grammatik — German grammar review

Review German grammar one lesson at a time. Each lesson has clear review tables, then exercises from easiest to hardest, with an instant correction and an explanation for every answer.

The interface and every explanation are available in **Arabic, French and English**. Use the buttons at the top of the page to switch.

## Lessons

| # | Lesson | Levels | Exercises |
|---|--------|--------|-----------|
| 1 | Adjektivendungen — adjective endings (Nominativ, Akkusativ, Dativ) | 7 | 92 |

More lessons will be added one by one, in the same format.

## Features

- A home page listing every lesson, with your progress on each
- Graded levels in each lesson: choose the answer, find the case, type the answer, spot the mistake
- Instant correction, with the explanation in the chosen language
- A list of your mistakes at the end of each level, and a button to redo only those questions
- A shuffle option for the questions
- Your best score on each level is saved in the browser
- Works on phones, with light and dark mode
- Keyboard shortcuts: number keys choose an option, Enter moves to the next question

## Run it

No build step and no dependencies. Open `index.html` in any browser.

To put it online, turn on **GitHub Pages** in the repository's settings: Settings → Pages → Deploy from branch → `main` / root.

## Project structure

```
index.html                    page shell; one <script> line per lesson
style.css                     shared design
app.js                        shared engine: home page, levels, correction, languages
lessons/adjektivendungen.js   lesson 1
```

## Adding a lesson

1. Create a file in `lessons/`, for example `lessons/praepositionen.js`, using `lessons/adjektivendungen.js` as the model:

```js
(window.LESSONS = window.LESSONS || []).push({
  id: "praepositionen",                 // used in the link: index.html#praepositionen
  de: "Präpositionen",                  // German name of the lesson
  title: { ar: "…", fr: "…", en: "…" },
  sub:   { ar: "…", fr: "…", en: "…" },
  reviewTitle: { ar: "…", fr: "…", en: "…" },
  review(lang, H) { return "…"; },      // HTML for the rule tables and tips
  levels: [
    {
      name: "Akkusativ",                // or { ar, fr, en }
      task: { ar: "…", fr: "…", en: "…" },
      o: ["e", "en", "er"],             // options (shown as -e, -en, -er)
      q: [
        // [sentence, answer, explanation ar, explanation fr, explanation en]
        ["Ich gehe durch ___ Park.", "den", "…", "…", "…"]
      ]
    }
  ]
});
```

Level types:

- **Endings:** `o: [...]`. Options are shown with a dash (`-en`).
- **Words:** `o: [...]` with `word: 1`. Options are shown as they are, for example case names.
- **Right or wrong:** `o: ["R", "W"]` with `word: 1, tf: 1`.
- **Writing:** `w: 1`. The student types the answer. Add a hint as the 6th item of each question.

In a sentence, `___` marks the gap and `{…}` highlights a phrase. In review tips, wrap German words in `[[…]]` so they display correctly inside Arabic text.

2. Add one line to `index.html`, before `app.js`:

```html
<script src="lessons/praepositionen.js"></script>
```

## Copyright

© 2026 وسام دبش — Wissem Debech. All rights reserved.
