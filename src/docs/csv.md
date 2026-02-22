---
layout: docs
title: CSV Import
docs_section: csv
description: "Import words in bulk from a CSV or plain text file — migrate vocabulary from spreadsheets, Quizlet exports, or any delimited text source into Language Den."
---

# CSV Import

<p class="docs-subtitle">
  Import words in bulk from a CSV or plain text file. Useful for migrating vocabulary from spreadsheets, Quizlet exports, or any other source that can produce a delimited text file.
</p>

---

## Accessing the Importer

Tap the **Import** button from any word list or source section, then choose **Import from CSV**.

---

## File Format

Language Den accepts `.csv` and `.txt` files. Files can be encoded in **UTF-8** (recommended), UTF-16, or ISO Latin-1. The parser handles quoted fields and strips any HTML tags that some export tools include.

Lines beginning with `#` are treated as comments and ignored.

### With a header row

Include a header row as the first line and name your columns using any of the recognised names below:

| Data | Accepted column names |
|------|-----------------------|
| Word | `word`, `text`, `vocabulary`, `term`, `vocab` |
| Translation | `translation`, `meaning`, `definition`, `english`, `native` |
| Part of Speech | `partofspeech`, `pos`, `type`, `wordtype`, `part_of_speech` |

Column names are case-insensitive and the parser ignores underscores and spaces when matching them, so `Part of Speech`, `part_of_speech`, and `PartOfSpeech` are all equivalent.

Any additional columns whose header name isn't one of the above are imported as **metadata** on the word (for example, a `romanisation` or `example` column). This extra data appears on the word detail screen.

Example:

```
word,translation,part_of_speech,romanisation
สวัสดี,Hello,interjection,sawatdee
กิน,To eat,verb,gin
น้ำ,Water,noun,nam
```

### Without a header row

If no recognised header is detected, Language Den falls back to a simple positional format:

| Column | Content |
|--------|---------|
| First | Word (required) |
| Second | Translation (optional) |

One word per line with no translation is also valid:

```
สวัสดี
กิน
น้ำ
```

---

## Part of Speech Values

When a part-of-speech column is present, Language Den recognises the following values (case-insensitive):

| Part of speech | Accepted values |
|----------------|-----------------|
| Noun | `noun`, `n`, `n.` |
| Verb | `verb`, `v`, `v.` |
| Adjective | `adjective`, `adj`, `adj.` |
| Adverb | `adverb`, `adv`, `adv.` |
| Pronoun | `pronoun`, `pron`, `pron.` |
| Preposition | `preposition`, `prep`, `prep.` |
| Conjunction | `conjunction`, `conj`, `conj.` |
| Interjection | `interjection`, `interj`, `interj.` |

Unrecognised values are imported with part of speech set to **Other**.

---

## Import Steps

1. Tap **Select File** and choose your `.csv` or `.txt` file from Files or any connected cloud storage.
2. Language Den parses the file and shows an **Import Preview** with:
   - The number of words ready to import
   - The number of duplicates that will be skipped (matched case-insensitively against your existing vocabulary)
   - A sample of the first few words with their translations
3. Optionally assign the imported words to a **Source section** using the picker.
4. Tap **Import _N_ Words** to confirm.

<div class="docs-callout docs-callout--info">
  <div class="docs-callout-title">Info</div>
  <p>Words are imported without flashcards. When each word comes up in a review session, you'll be guided to generate or create flashcards for it. See <a href="/docs/word-triage/">Word Triage</a> for details.</p>
</div>

---

## Duplicate Handling

Before importing, Language Den checks every word in the file against your existing vocabulary (case-insensitive). Duplicates are counted and reported in the preview but are never imported — your existing words and their review progress are left untouched.

---

## Troubleshooting

| Error | Cause | Fix |
|-------|-------|-----|
| "Could not read the file" | File permissions or iCloud sync issue | Try opening the file in the Files app first to force a download, then retry |
| "Could not read the file encoding" | Unusual encoding (e.g. Windows-1252) | Re-save the file as UTF-8 in your spreadsheet app or a text editor |
| "The file is empty" | File has no content | Check the file was saved correctly |
| "No valid words found" | Header row found but no data rows, or word column is blank | Ensure at least one data row contains a non-empty word value |

---

## Tips for Preparing a CSV

- **From Google Sheets or Excel:** File → Download → Comma-separated values (.csv). Ensure UTF-8 encoding is selected if prompted.
- **From Quizlet:** Use a Quizlet export tool or browser extension to export your set as a CSV, then rename columns to match the accepted names above.
- **From Anki:** If you already have an Anki collection, use the [Anki import](/docs/anki/) instead — it preserves note types, media, and field structure.
