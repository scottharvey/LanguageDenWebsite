---
layout: docs
title: Word Triage
docs_section: word-triage
---

# Word Triage

<p class="docs-subtitle">
  Review newly added or imported words one by one, deciding whether to keep them, delete them, or generate flashcards immediately.
</p>

---

## What Is Triage?

When you add words without flashcards — most commonly after a bulk import from [CSV](/docs/csv/) or [Anki](/docs/anki/) — those words enter the **Triage** queue. Triage is a quick review pass where you decide what to do with each word before it enters your study schedule.

Words added individually via the [Add Word](/docs/adding-words/) flow with flashcards already created skip triage entirely.

---

## The Triage Flow

Language Den presents each word in the triage queue one at a time with a progress indicator. For each word you choose one of three actions:

| Action | Button | What happens |
|--------|--------|--------------|
| **Keep** | Checkmark | Accepts the word without creating flashcards yet. The word enters your collection and will need flashcards before it can be reviewed. |
| **Generate** | Sparkles | Accepts the word and queues it for AI flashcard generation. Requires an [OpenRouter API key](/docs/open-router/). |
| **Delete** | Trash | Permanently removes the word from your collection. |

<div class="docs-callout">
  <div class="docs-callout-title">Tip</div>
  <p>Use <strong>Delete</strong> for words you already know well or that aren't relevant to your current learning goals. It's better to keep your collection focused than to pad it with words you'll never study.</p>
</div>

---

## After Triage

When all words have been triaged, Language Den shows a summary of how many were kept, generated, and deleted.

If you chose **Generate** for any words, flashcard generation begins in the background. You can continue using the app while it runs. Once complete, those words enter your review schedule and will appear in upcoming sessions.

Words you kept without generating flashcards can be found using the **No Flashcards** filter in the [Words](/docs/word-filters/) tab. You can generate flashcards for them at any time from there.

---

## When Triage Appears

The Home tab shows a **Triage** prompt whenever words are waiting in the queue. You can also start triage manually from the Words tab menu.
