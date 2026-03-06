---
layout: post
title: "AI Builds Your Flashcards. FSRS Schedules Them. You Just Show Up."
date: 2026-03-07
draft: false
categories: ["features", "technology"]
description: "Language Den combines AI-powered flashcard generation with FSRS scheduling. Here's why that combination matters — and why it's different from using either tool on its own."
---

There are two hard parts to building a vocabulary practice that actually sticks.

The first is getting started. Writing good flashcards takes time. You need a definition, an example sentence, maybe an image. Do it properly for 500 words and you've spent more time making cards than studying them. Most people either skip the quality and make low-effort cards, or they give up on making cards at all.

The second hard part is keeping up. Even if you build a great deck, you need to review it at the right frequency — not so often that it's tedious, not so rarely that you forget everything. Getting this right manually is basically impossible.

Language Den is built around solving both problems. AI handles the first one. FSRS handles the second.

## What AI generation does

When you add a word to Language Den, you don't have to build the flashcard yourself.

The app passes the word to an AI model, which generates the card content: a definition, an example sentence showing the word used in context, and a formatted card ready to review. For nouns, it can also search for an image to attach. The result is a proper, well-constructed flashcard — the kind that would take you a few minutes to make by hand — appearing in a few seconds.

<img src="/images/flashcard.png" alt="A generated flashcard" class="phone-screenshot">

This changes the economics of adding new vocabulary. The barrier to adding a word goes from "sit down, find a definition, write an example sentence, format the card" to "type the word, tap generate." You can add vocabulary in the moment you encounter it, rather than batching it into a dedicated study session that may or may not happen.

The quality also tends to be better than what most people produce when making cards manually. Example sentences from AI are natural and contextually appropriate. Definitions are clear. You're not copying something awkward from a dictionary entry.

## What FSRS does

Once the card exists, the question becomes: when do you review it?

Language Den uses FSRS — Free Spaced Repetition Scheduler — to answer that question. FSRS tracks two properties for every card in your deck: how stable that memory is (how long before you're likely to forget it), and how difficult the card is for you specifically.

Every time you review a card and rate it — Again, Hard, Good, or Easy — FSRS updates both values and calculates your next review date. Over time it learns your personal forgetting curve: which words you hold onto easily, which ones you need to see frequently to retain.

The practical outcome is that your daily review load stays proportional to what you actually need, not to the size of your deck. You can read more about exactly how FSRS works [in this post](/blog/fsrs-modern-spaced-repetition).

<img src="/images/review-card-ratings.png" alt="Review ratings" class="phone-screenshot">

## Why the combination matters

AI generation and spaced repetition are both useful independently. The reason Language Den puts them together is that each one removes a specific obstacle that makes the other one harder to use.

Without AI generation, building a deck large enough for spaced repetition to be meaningful is a serious time investment. Many people get stuck here — they want to study vocabulary with a proper SRS system, but the setup cost is too high.

Without spaced repetition, AI-generated cards don't get used effectively. You might generate 200 cards and then study them linearly, reviewing old cards too often and new ones too rarely. The quality of the cards doesn't help you if the review system is inefficient.

Together, they close the loop. AI removes the friction of getting started. FSRS ensures the time you spend reviewing is directed exactly where it's needed. You add words, cards get built, and the app figures out when to show them to you.

## Bringing your own model

By default, Language Den uses a built-in configuration for flashcard generation. If you want more control — a different model, a provider you already use, or a specific language that benefits from a specialised model — you can configure your own API key through OpenRouter.

This is an optional step for users who want it, but the default experience is designed to work without any configuration. You add a word, the card gets generated, and you review it when Language Den tells you to.

That's the whole workflow.

---

*Language Den uses AI to generate flashcard content and FSRS to schedule reviews. Both are built in — no external tools or manual setup required to get started.*
