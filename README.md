# 🐧 LPI Linux Essentials 010-160 — Exam Practice Simulator

> **Fully offline** · No internet required · Works from USB · No installation needed

🌐 **Live demo:** [kalevit.github.io/lpi-010-160-practice](https://kalevit.github.io/lpi-010-160-practice/)

A comprehensive, browser-based study tool for the **LPI Linux Essentials (010-160)** certification exam.
Open `index.html` and start practising immediately — or use the live site above.

---

## ✨ Features

| Mode | Description |
|------|-------------|
| 📖 **Study Mode** | Browse all questions with instant feedback & explanations. Filter by topic, type, or source. No timer. |
| ⏱ **Exam Simulation** | 40 questions · 60-minute timer · 75% pass threshold. Mirrors the real LPI exam format exactly. |
| 🎯 **Topic Drill** | Focus on a single section and drill it until you master it. Instant feedback after each answer. |
| 🔍 **Hard / Weak Spot** | Curated tricky questions: edge cases, traps, fill-in commands, common misconceptions. |
| 🗺️ **Concept Maps** | Visual mind maps for all 19 sections, extracted from the official LPI PDF. |

---

## 📋 Question Types

- **MCQ** — Single correct answer
- **☑ Multi-select** — Choose ALL correct answers
- **✏ Fill-in** — Type the exact command or value (e.g. `ls -la /etc`)

## 📊 Question Pool Stats

| Source | Count |
|--------|-------|
| 📄 PDF (official LPI Learning Material v1.6) | 301 |
| ✓ External (validated against PDF) | 202 |
| **Total** | **503** |

Fill-in questions: **73** · Multi-select: **35** · MCQ: **395**

---

## ♿ Accessibility

Built-in accessibility panel (bottom-right ♿ button):

- Dyslexia-friendly font
- Font size 14 → 24 px
- Letter & line spacing control
- High contrast / Dark mode
- **Colorblind modes**: Deuteranopia/Protanopia · Tritanopia · Greyscale/Achromatopsia
- Reduced motion
- Large tap targets (motor accessibility)
- Exam timer: show / pauseable / hidden (dyscalculia / anxiety)

All preferences saved in browser localStorage.

---

## 🚀 Usage

```bash
# Clone repo
git clone https://github.com/kalevit/lpi-010-160-practice.git
cd lpi-010-160-practice

# Open in browser — no server needed
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

Or just download the ZIP and open `index.html` directly.

---

## 📁 File Structure

```
├── index.html       # Home / dashboard
├── study.html       # Study mode
├── exam.html        # Exam simulation
├── drill.html       # Topic drill
├── weak.html        # Hard / weak spot practice
├── maps.html        # Concept maps (all 19 sections)
├── questions.js     # Full question bank + utilities
├── style.css        # Styles + accessibility themes
└── a11y.js          # Accessibility controller
```

---

## 🔀 Fork It for Other Certifications

This simulator is designed to be reused. To adapt it for another certification:

1. **Fork** this repository
2. Replace `questions.js` with your own question bank (same JSON structure)
3. Update `TOPIC_NAMES`, `SECTION_NAMES`, and `TOPIC_COLORS` in `questions.js`
4. Update the title and exam parameters in `exam.html` (question count, timer, pass threshold)
5. Replace or update the concept maps in `maps.html`

### Question object structure

```js
// MCQ (single choice)
{ q: 'Question text?', o: ['A','B','C','D'], a: 2, t: 1, s: '1.1', src: 'pdf',
  e: 'Explanation text.' }

// Multi-select
{ q: 'Which TWO...?', o: ['A','B','C','D'], a: [0,2], t: 1, s: '1.1', src: 'ext',
  type: 'multi', e: 'Explanation.' }

// Fill-in (type the command)
{ q: 'Type the command to list files:', fill: ['ls','ls -a'], t: 2, s: '2.3',
  src: 'pdf', type: 'fill', e: 'Explanation.' }
```

Fields: `q` = question · `o` = options · `a` = answer index / indices · `fill` = accepted answers · `t` = topic (1-5) · `s` = section (e.g. `'2.3'`) · `src` = `'pdf'` or `'ext'` · `e` = explanation

---

## ⚠️ Disclaimer

> Questions in this simulator are **not** official LPI exam questions and do not reproduce real exam content.
> They are study aids generated or validated solely from the
> **LPI Learning Materials: Linux Essentials v1.6** (Exam 010-160),
> publicly available at [learning.lpi.org](https://learning.lpi.org/en/learning-materials/010-160/).
>
> No question reproduces or leaks real exam content.
> This tool is for personal study only.

---

## 🙏 Credits & Acknowledgements

- **[ThePrimoris](https://github.com/ThePrimoris/LPI-Essentials-Practice)** — Original project that inspired this simulator. The external question pool was validated and cross-referenced against the official PDF starting from their work.
- **[Linux Professional Institute](https://www.lpi.org/)** — Authors of the official LPI Learning Materials.
- **[Claude (Anthropic)](https://www.anthropic.com/)** — This entire project was built with Claude as AI assistant: question generation, validation against the official PDF, code architecture, concept maps, accessibility features, audit and review. All questions are based exclusively on the official LPI PDF — none replicate real exam questions.

---

## 🔒 Security & Audit Notes

- **Fully static** — no server, no backend, no data sent anywhere
- **No tracking** — no analytics, no cookies set by the app itself
- **XSS-safe** — all user input is escaped via `escHtml()` before DOM insertion
- **localStorage** — used only for accessibility preferences (non-sensitive)
- **Offline-first** — works from a USB drive with no internet connection
- **No external dependencies** — no CDN calls, no external scripts

---

## 📄 Source Material

- PDF: [LPI Learning Materials: Linux Essentials v1.6](https://learning.lpi.org/en/learning-materials/010-160/)
- Exam code: **010-160** · Published: **25 February 2026**
- Author: Linux Professional Institute Inc.

---

## ❓ FAQ

**Can anyone fork this?**
Yes — MIT license. Fork freely, adapt for any certification, and share improvements.

**Is this FLOSS?**
Yes — MIT licensed, fully open source, no proprietary dependencies.

**Are the questions official LPI exam questions?**
No. All questions are study aids derived from the publicly available LPI Learning Material PDF. None reproduce real exam questions.

**Does it work offline?**
Yes, completely. Open `index.html` directly from disk or USB — no server or internet needed.

**Is it accessible?**
Yes — WCAG-oriented design: skip links, ARIA roles and labels, keyboard navigation, screen reader support, high-contrast and colorblind modes, dyslexia-friendly font, adjustable text size, reduced motion, large tap targets, and exam timer control for dyscalculia/anxiety.

---

## 📜 License

MIT — free to use, fork, and adapt.
If you build something useful from this, a ⭐ or a mention is appreciated!
