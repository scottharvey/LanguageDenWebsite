---
layout: docs
title: Generating Flashcards
docs_section: generating-flashcards
---

# Generating Flashcards

<p class="docs-subtitle">
  Language Den can automatically create a full set of flashcards for any word using AI — or you can build them manually, one card at a time.
</p>

---

## When Flashcards Are Generated

Flashcards are created at two points in the workflow:

1. **When adding a word** — if AI mode is on, flashcards are generated as part of the add-word flow after you select a meaning. If AI mode is off, three basic cards (Recognition, Production, Listening Production) are created automatically.
2. **During triage** — words imported via CSV or Anki arrive without flashcards. When you reach those words in the [Word Triage](/docs/word-triage/) queue, you can generate flashcards in bulk or one word at a time.

---

## AI-Generated Flashcards

When an [OpenRouter API key](/docs/open-router/) is configured, Language Den uses a language model to analyse the word and generate a varied set of flashcards suited to your learning stage.

The AI considers:

- **Part of speech** — nouns, verbs, adjectives, and phrases each get card types suited to how they're used in the language
- **Metadata** — if you've provided extra information (e.g. romanisation, an example sentence), the AI uses it to produce more relevant context
- **Native and target language** — example sentences, dialogue lines, and scenario prompts are generated in both languages

The result is typically 3–6 cards covering recognition, production, cloze, and context-based types. See [Flashcard Types](/docs/flashcard-types/) for a description of each type.

<div class="docs-callout docs-callout--info">
  <div class="docs-callout-title">Info</div>
  <p>Flashcard generation requires an active internet connection. The word text and any metadata you've provided are sent to your chosen AI model via OpenRouter to produce the cards.</p>
</div>

---

## Manual Flashcard Creation

You can add a flashcard to any word at any time without using AI:

1. Open the word detail screen and tap **Add Flashcard**
2. Choose a [flashcard type](/docs/flashcard-types/)
3. Fill in the **Prompt**, **Answer**, and optionally a **Context** (example sentence or usage note)
4. Tap **Save**

You can also edit or delete any existing flashcard from the same screen.

---

## Bulk Generation for Imported Words

After importing words via [CSV](/docs/csv/) or [Anki](/docs/anki/), all imported words arrive without flashcards. Language Den lets you generate cards for many words at once:

1. Open the **Words** tab and tap the menu
2. Choose **Generate Flashcards for All**

Language Den queues the generation and processes words in the background. Words with only one clear meaning will have flashcards created automatically; words with multiple possible meanings will be queued for [triage](/docs/word-triage/) first so you can select the correct one.

<div class="docs-callout">
  <div class="docs-callout-title">Tip</div>
  <p>Bulk generation can use a significant number of API tokens. If you're importing a large list, consider generating in smaller batches or using a faster, lower-cost model in <strong>Settings → AI Model</strong>.</p>
</div>

---

## Image Flashcards

For nouns, Language Den additionally searches [Unsplash](/docs/unsplash/) for a relevant photo and offers to add an Image Based flashcard. This requires an Unsplash API key configured in Settings.
