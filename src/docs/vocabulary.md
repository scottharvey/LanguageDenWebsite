---
layout: docs
title: Vocabulary Management
docs_section: vocabulary
---

# Vocabulary Management

<p class="docs-subtitle">
  Learn how to add, organise, edit, and review your vocabulary. Language Den gives you flexible tools to build and maintain word lists that match your learning goals.
</p>

## Word Lists

Word lists are the primary way to organise your vocabulary. Think of them as notebooks — you might have one for *Business Japanese*, another for *Spanish Irregular Verbs*, and another for words encountered while reading.

### Creating a List

To create a new list, tap the **+** button on the Home tab. You can configure:

- **Name** — A short, descriptive title
- **Description** — Optional notes about the list's purpose
- **Colour** — A colour tag for visual organisation
- **Language** — Override the default language pair for this list

### Archiving and Deleting

Lists you're no longer actively studying can be **archived** to remove them from the Home tab without deleting your progress. Swipe left on a list and tap **Archive**.

<div class="docs-callout docs-callout--warning">
  <div class="docs-callout-title">Warning</div>
  <p>Deleting a list permanently removes all words and progress data within it. This action cannot be undone. Archive the list instead if you want to keep your progress.</p>
</div>

---

## Adding Words

### Manual Entry

Tap **Add Word** inside a list to open the word editor. Fill in:

- **Word / Phrase** — The term in your target language
- **Pronunciation** — Romanisation, phonetic spelling, or IPA
- **Definition** — The meaning in your native language
- **Example Sentence** — A sentence demonstrating usage in context
- **Notes** — Mnemonics, grammar notes, or anything useful to you

### AI-Assisted Lookup

Tap the **AI Lookup** button next to the word field to automatically populate the definition, example sentence, and pronunciation. See [AI Features](/docs/ai-features/) for details on how this works.

### Importing Words

You can import words in bulk using a **CSV file**. The expected format is:

```
word,pronunciation,definition,example
bonjour,bohn-ZHOOR,hello / good day,"Bonjour, comment ça va?"
merci,mair-SEE,thank you,"Merci beaucoup pour votre aide."
```

To import, go to **Settings → Import / Export → Import CSV**. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

<div class="docs-callout docs-callout--info">
  <div class="docs-callout-title">Info</div>
  <p>The CSV importer accepts UTF-8 encoded files. For languages with non-Latin scripts, ensure your file is saved in UTF-8 before importing.</p>
</div>

---

## Word Fields

Each word entry supports the following fields:

| Field | Required | Description |
|---|---|---|
| Word / Phrase | Yes | The target-language term |
| Definition | Yes | Translation or meaning |
| Pronunciation | No | Phonetic guide or romanisation |
| Example Sentence | No | Contextual usage example |
| Image | No | An associated image for visual memory |
| Tags | No | Custom labels for filtering |
| Notes | No | Personal mnemonics or grammar notes |

---

## Tags

Tags let you label words across multiple lists. For example, you could tag words as `#grammar`, `#irregular`, or `#reading` regardless of which list they belong to.

To add a tag, open a word and tap **Add Tag**. You can filter by tag from the search bar on the Home tab.

### Recommended Tag Conventions

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Here are some common tagging patterns used by Language Den learners:

- By source — `#anki-import`, `#textbook-ch3`, `#netflix`
- By difficulty — `#easy`, `#hard`, `#troublesome`
- By topic — `#food`, `#travel`, `#business`
- By type — `#verb`, `#noun`, `#counter`, `#particle`

---

## Reviewing Progress

### Word Statuses

Every word in Language Den has a status based on your review history:

- **New** — Not yet studied
- **Learning** — Seen fewer than 3 times; reviews are close together
- **Review** — Stable; scheduled on an SRS interval
- **Mastered** — Consistently recalled over a long period

You can filter a list by status using the **Filter** button in the top-right of a list view.

### Statistics

The Stats tab shows your overall learning activity including:

1. Words studied today, this week, and this month
2. Retention rate (percentage of reviews answered correctly)
3. Streak — consecutive days with at least one review
4. Language breakdown if you're studying multiple languages

---

## Exporting Your Data

You can export any list as a CSV file at any time. Go to the list detail view, tap the **···** menu, and select **Export List**. The exported file includes all word fields and your review history metadata.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
