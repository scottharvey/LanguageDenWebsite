---
layout: docs
title: Adding Words
docs_section: adding-words
---

# Adding Words

<p class="docs-subtitle">
  Three ways to add vocabulary to Language Den: manual entry with AI assistance, manual entry without AI, and bulk import from CSV or Anki files.
</p>

---

## Method 1: Add a Word with AI Assistance

When an [OpenRouter API key](/docs/open-router/) is configured, Language Den uses AI to analyse each word and generate rich, varied flashcards automatically. This is the default mode.

### Step 1 — Enter the word

Tap **Add Word** from any word list or source section. Type the word in its **base (dictionary) form** — for example, enter the infinitive for verbs rather than a conjugated form.

<div class="docs-callout">
  <div class="docs-callout-title">Tip</div>
  <p>You can enter the word in either your native language or your target language. The AI will detect the language and find the correct meanings.</p>
</div>

If you have sources set up, an optional **Source** picker will appear at the bottom of the form so you can associate the word with a specific book, episode, or other source section.

Tap **Continue** when ready. The app will analyse the word and move to the next step.

### Step 2 — Select a meaning

Language Den presents a list of meanings found for the word. Each result shows:

- A **part-of-speech icon** (noun, verb, adjective, etc.)
- The **translation** in your native language
- A brief **definition**

Tap the meaning that matches the context in which you encountered the word. The app immediately begins generating flashcards for that meaning.

### Step 3 — Review flashcards and save

The final step shows the flashcards the AI has created. You can:

- **Edit** any flashcard by tapping the pencil icon
- **Delete** a flashcard by tapping the trash icon
- **Add** additional flashcards manually with the **Add Flashcard** button

When you're happy with the flashcards, tap **Save** to add the word to your collection.

<div class="docs-callout docs-callout--info">
  <div class="docs-callout-title">Info</div>
  <p>The AI generates multiple flashcard types for each word — recognition, production, listening, cloze, and more — so you practise the word from different angles. See <a href="/docs/flashcard-types/">Flashcard Types</a> for a full description of each type.</p>
</div>

---

## Method 2: Add a Word Without AI

If you prefer full manual control, or haven't configured an API key yet, you can add words without AI assistance.

On the word entry screen, toggle **Use AI to analyze word** off. The form expands to show additional fields:

| Field | Required | Description |
|-------|----------|-------------|
| Word | Yes | The vocabulary item in your target language |
| Translation | Yes | The meaning in your native language |
| Part of Speech | Yes | Noun, verb, adjective, adverb, phrase, idiom, and more |
| Metadata fields | No | Additional fields configured in Settings (e.g. romanisation, example sentence) |
| Source | No | Associate the word with a word source section |

### Custom fields

Tap **+ Add Field** to attach any extra piece of information to a word — for example, a mnemonic, a grammar note, or a regional variant. Enter a field name and value in the dialog. Custom fields you add here will appear on the word's detail screen.

<div class="docs-callout">
  <div class="docs-callout-title">Tip</div>
  <p>Default metadata fields (such as romanisation for Thai or pinyin for Mandarin) are configured in <strong>Settings → Languages</strong>. Fields set there appear automatically on every add-word form.</p>
</div>

### RTL languages

For right-to-left languages such as Arabic or Hebrew, the word input field is automatically aligned right-to-left to match the script direction.

### Flashcards in manual mode

After tapping **Continue**, Language Den automatically creates three starter flashcards:

- **Recognition** — see the target-language word, recall the translation
- **Production** — see the translation, recall the target-language word
- **Listening Production** — hear the word, produce it from memory

You can edit, delete, or add more flashcards before saving.

---

## Method 3: Bulk Import

To add many words at once, use the **Import Words** option. Language Den supports two formats:

- **[CSV Import](/docs/csv/)** — import from a spreadsheet or any plain text file with words and translations. Supports flexible column naming, metadata columns, and multiple encodings.
- **[Anki Import](/docs/anki/)** — import directly from an Anki Deck Package (`.apkg`). Preserves note types, field mapping, and attached audio or image media.

---

## Image Flashcards for Nouns

When you add a **noun** — either via AI or manual mode — Language Den automatically searches [Unsplash](/docs/unsplash/) for relevant images. A photo picker will appear so you can choose an image to attach as an image-based flashcard ("What is this?").

Tap **Skip** if you'd prefer not to add an image flashcard for that word.

<div class="docs-callout docs-callout--info">
  <div class="docs-callout-title">Info</div>
  <p>Image search requires an Unsplash API key configured in <strong>Settings → API Keys → Unsplash</strong>. If no key is set, the image picker will not appear.</p>
</div>

---

## After Adding a Word

Newly added words enter the [Word Triage](/docs/word-triage/) queue if they have no flashcards, or go straight into your review schedule if flashcards were created during the add flow.

You can view and manage all your words from the **Words** tab, where you can filter by source, part of speech, review state, and more. See [Word Filters](/docs/word-filters/) for details.
