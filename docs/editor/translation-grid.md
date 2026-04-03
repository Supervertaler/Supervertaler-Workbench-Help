# The Translation Grid

The translation grid is where you spend most of your time: each row is a **segment** (usually a sentence or paragraph) with source and target text.

## Columns

The grid has five columns:

| Column | What it is |
|--------|------------|
| **#** | Segment number (row index) |
| **Type** | Segment type (depends on the file format/importer) |
| **Source** | Original text (typically read-only) |
| **Target** | Your translation (editable) |
| **Status** | Segment status (dropdown) |

## Editing behavior

- The grid is optimized for speed, but edits are intentionally lightweight.
- **Double-click** a cell to edit.
- Use **Shift+Enter** for a line break inside a cell (multi-line target).

## Confirming & status

- Use the **Status** dropdown to set the segment state.
- Keyboard confirm is supported (see [Editing & Confirming](editing-confirming.md)).

Common statuses include:

- Not started
- Translated
- Confirmed
- Proofread
- Approved

::: info
If you plan to reimport into a CAT tool, do not merge/split content across segments. Segment boundaries must stay compatible.
:::

## Tag view modes

The toolbar at the bottom of the grid offers three tag display modes:

| Mode | Button | What you see |
|------|--------|-------------|
| **WYSIWYG** | `WYSIWYG` | Formatting tags are rendered (bold, italic, etc.) and other tags are hidden |
| **Compact** | `Compact` | Verbose tags are shortened to numbered placeholders like `{1}`, `{/1}` |
| **Tags** | `Tags` | Full raw tags are shown exactly as stored in the file |

Press **Ctrl+Alt+T** to cycle through the three modes.

### Compact mode details

Compact mode replaces verbose XML/HTML tags with short numbered placeholders in both source and target columns. This makes segments much easier to read and edit.

- `<bmk id="0" name="_Toc219208699" transform="open">` becomes `{1}`
- `</bmk id="0" transform="close">` becomes `{/1}`
- Self-closing tags become `{1/}`
- Trados numeric tags like `<92>` and `</92>` are also compacted

Simple formatting tags (`<b>`, `<i>`, `<u>`, `<em>`, `<strong>`, `<sub>`, `<sup>`) are left untouched since they are already short.

Compact mode is **display-only** — full tags are always preserved in the underlying data. When you use **Ctrl+,** to insert a tag in Compact mode, the compact placeholder is inserted, and the full tag is transparently restored when saving.

## Visual cues

- **Tags** (CAT tool placeholders and formatting markers) are highlighted to make them hard to miss.
- **Spellcheck** (if enabled) underlines misspelled target words.
- **Glossary matches** can be highlighted in the source.

## See also

- [Navigation](navigation.md)
- [Editing & Confirming](editing-confirming.md)
- [Keyboard Shortcuts](keyboard-shortcuts.md)
- [Filtering](filtering.md)
