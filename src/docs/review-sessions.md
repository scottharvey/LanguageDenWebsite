---
layout: docs
title: Review Sessions
docs_section: review-sessions
description: "How review sessions work in Language Den — what cards appear, how your ratings (Again, Hard, Good, Easy) affect future spaced repetition scheduling."
---

# Review Sessions

<p class="docs-subtitle">
  How review sessions work in Language Den — from what cards appear to how your ratings affect future scheduling.
</p>

---

## Starting a Session

Tap **Start Review** from the Home tab. Language Den builds a queue of up to **20 items** per session from your due cards, interleaving new words and overdue reviews so each session feels balanced.

If you have words in the [Word Triage](/docs/word-triage/) queue that need flashcards, Language Den will prompt you to handle those first so they can enter your review schedule.

---

## What Appears in a Session

The session queue is built from:

- **Due reviews** — words whose next review date has passed, sorted by most overdue first
- **New words** — words you've never reviewed, introduced roughly one for every 3–4 reviews

Words without any flashcards are excluded from the queue until flashcards have been created for them.

---

## Reviewing a Card

Each card is presented in two phases:

1. **Question phase** — the prompt is shown (a word, an image, audio, or a scenario depending on the [card type](/docs/flashcard-types/)). Think of your answer.
2. **Answer phase** — tap to reveal the answer. Assess how well you recalled it.

### Rating your response

After seeing the answer, four rating buttons appear, each showing a preview of when the card will next appear:

| Rating | Meaning | Typical next interval |
|--------|---------|----------------------|
| **Again** | Didn't recall it | < 1 minute (re-enters this session) |
| **Hard** | Recalled with significant effort | ~10 minutes |
| **Good** | Recalled correctly | ~1 day |
| **Easy** | Recalled instantly, felt too easy | ~4 days |

Intervals grow with each successful review. See [Spaced Repetition](/docs/spaced-repetition/) for how the scheduling algorithm works.

<div class="docs-callout">
  <div class="docs-callout-title">Tip</div>
  <p>Be honest with your ratings. The algorithm is most effective when ratings reflect your actual recall — rating something <strong>Easy</strong> when it was actually <strong>Hard</strong> will push it further into the future than it should be.</p>
</div>

---

## Cards Rated "Again"

If you tap **Again**, the card is placed back into the queue at the end of the current session. You'll see it again before the session finishes, giving you a second chance to consolidate the memory.

---

## Completing a Session

When all cards in the queue have been reviewed, a **Session Complete** screen appears showing how many words you reviewed and how many cards are still due today. If more cards are due, tap **Continue Reviewing** to start another session immediately.

---

## Struggling Words

Words that repeatedly come back on **Again** appear in the **Struggling Words** section on the Home tab, sorted by difficulty. You can tap that section to start a targeted practice session focused only on those words.
