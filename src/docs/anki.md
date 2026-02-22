---
layout: docs
title: Anki Import
docs_section: anki
description: "Import your existing Anki vocabulary into Language Den from an .apkg file. Cards, audio, and image media are preserved during import."
---

# Anki Import

<p class="docs-subtitle">
  Import your existing Anki vocabulary into Language Den from an Anki Deck Package (.apkg) file. Audio and image media attached to notes are preserved.
</p>

---

## Before You Start: Export from Anki

Language Den imports the standard Anki `.apkg` format. To create one:

1. Open **Anki** on your Mac or PC
2. Select the deck you want to export in the deck list
3. Go to **File → Export**
4. Set the format to **Anki Deck Package (.apkg)**
5. Make sure **Include media** is checked if you want audio or images
6. Click **Export** and save the file
7. Transfer the `.apkg` file to your iPhone or iPad — via AirDrop, iCloud Drive, or any other method

---

## Import Steps

### Step 1 — Select the file

Tap **Import** from any word list or source section, choose **Import from Anki**, then tap **Select .apkg File**. Pick the file from Files or any connected cloud storage.

Language Den will unpack and parse the package. If the deck contains only one note type, it moves straight to field mapping. If there are multiple note types, you'll first choose which one to import.

### Step 2 — Choose a note type

If your deck uses more than one note type (for example, a Basic type and a Cloze type), Language Den lists them with a count of notes in each. Tap the note type you want to import.

<div class="docs-callout">
  <div class="docs-callout-title">Tip</div>
  <p>You can run the importer multiple times — once per note type — to bring in notes from all types in the same deck.</p>
</div>

### Step 3 — Map fields

Tell Language Den which fields from the note type correspond to your vocabulary data. Language Den auto-detects sensible defaults based on common field names, but you can change any mapping.

| Field | Required | Description |
|-------|----------|-------------|
| Word (Target Language) | Yes | The vocabulary item in the language you're learning |
| Translation (Native Language) | No | The meaning in your native language |
| Part of Speech | No | Maps to Language Den's part-of-speech classification |
| Audio Field | No | Audio pronunciation data to attach to the word |
| Image Field | No | Image data to attach to the word |

**Metadata fields:** Any field not mapped to a core role is listed in the Metadata section. Toggle each field on or off — fields you include are saved as metadata on the word and appear on the word detail screen.

A live **Preview** below the mapping form shows how the first few notes will look with your chosen mapping.

### Step 4 — Assign a source (optional)

If you have [Word Sources](/docs/word-sources/) set up, you can assign the imported words to a specific source section using the picker.

### Step 5 — Import

Tap **Import _N_ Words**. When complete, Language Den shows a summary of how many words were imported and how many duplicates were skipped.

---

## Field Auto-detection

Language Den uses the following patterns to suggest a default mapping when you select a note type. You can always override the suggestion.

| Role | Field names that trigger auto-detection |
|------|-----------------------------------------|
| Word | `word`, `vocab`, `vocabulary`, `expression`, `front`, or any language name (e.g. `thai`, `japanese`, `spanish`) |
| Translation | `meaning`, `translation`, `definition`, `english`, `back`, `answer` |
| Part of Speech | `pos`, `part of speech`, `type`, `class` |
| Audio | `audio`, `sound`, `pronunciation`, `speech` |
| Image | `image`, `picture`, `photo`, `img`, `illustration` |

---

## Duplicate Handling

Language Den checks every note's word text against your existing vocabulary (case-insensitive). Duplicates are skipped and counted in the completion summary. Existing words and their review progress are never modified.

---

## After Import

Words arrive without flashcards. When each word first comes up in a review session, you'll be guided to generate flashcards for it using AI (if an [OpenRouter API key](/docs/open-router/) is configured) or to create them manually. See [Word Triage](/docs/word-triage/) for details.

---

## Troubleshooting

| Error | Cause | Fix |
|-------|-------|-----|
| "The file is not a valid Anki package" | The file is not a proper `.apkg` or is corrupted | Re-export from Anki and transfer the file again |
| "Could not find the Anki database in the package" | The `.apkg` uses an unexpected internal structure | Try exporting as a legacy `.apkg` from Anki's export dialog |
| "No notes found in the Anki package" | The deck is empty, or the selected note type has no notes | Confirm the deck has cards in Anki before exporting |
| "Could not access the file" | iOS file permissions issue | Try sharing the file to Language Den directly via the share sheet in Files |
