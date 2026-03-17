# Supervertaler Workbench Help

Source for the **[Supervertaler Workbench](https://supervertaler.com)** help documentation, published at **[help.supervertaler.com](https://help.supervertaler.com)**.

Built with [VitePress](https://vitepress.dev). Deployed automatically to GitHub Pages on every push to `main`.

---

## Contents

70 pages covering:

- Get Started (installation, quick start, first project, API keys)
- Editor (translation grid, navigation, filtering, shortcuts, segment statuses)
- AI Translation (providers, prompts, batch translation, Ollama)
- Glossaries & TermLens
- Translation Memory (fuzzy matching, SuperMemory, TMX import)
- Import & Export (DOCX, TXT, bilingual tables, multi-file projects)
- SuperLookup (TM search, glossary search, MT, web resources)
- CAT Tool Integration (Trados, memoQ, CafeTran, Phrase)
- Quality Assurance (spellcheck, tag validation, non-translatables)
- Tools (AutoFingers, Voice Commands, TMX Editor, PDF Rescue)
- Settings, Troubleshooting, Reference

---

## Local development

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173` with hot reload.

## Build

```bash
npm run build
```

Output is written to `docs/.vitepress/dist/`.

## Preview the build

```bash
npm run preview
```

---

## Editing content

All documentation lives in `docs/` as plain Markdown files. The sidebar structure is defined in `docs/.vitepress/config.mjs`.

To add a new page:
1. Create a `.md` file in the appropriate folder under `docs/`
2. Add an entry to the `sidebar` array in `config.mjs`
3. Push to `main` — the site updates automatically within ~1 minute

## Styling

Custom theme and CSS are in `docs/.vitepress/theme/`. The site uses the [Geist](https://vercel.com/font) font family and a purple brand colour scheme matching the Supervertaler product.

---

## Related

- [Supervertaler Workbench](https://github.com/Supervertaler/Supervertaler-Workbench) — the main app repo
- [Supervertaler for Trados](https://github.com/Supervertaler/Supervertaler-for-Trados) — Trados Studio plugin
- [Supervertaler for Trados Help](https://supervertaler.gitbook.io/trados) — help docs for the plugin
