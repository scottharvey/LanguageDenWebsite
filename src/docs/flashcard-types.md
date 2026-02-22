---
layout: docs
title: Flashcard Types
docs_section: flashcard-types
---

# Flashcard Types

<p class="docs-subtitle">
  Language Den tests your vocabulary from ten different angles, automatically choosing the right card type based on how well you know each word.
</p>

---

## Overview

Each word in Language Den can have multiple flashcards of different types. Rather than showing the same card every review, the app selects a card type that matches your current learning stage — starting with simple recognition and progressing to complex production and listening tasks as your confidence grows.

---

## The Ten Card Types

### Recognition

**Prompt:** The word in your target language
**Answer:** The translation in your native language

The most fundamental card type. You see the foreign word and recall what it means. Best for early exposure to new vocabulary.

---

### Production

**Prompt:** The translation in your native language
**Answer:** The word in your target language

The reverse of recognition — you see the meaning and must recall the target-language word. Production is harder than recognition and builds active recall.

---

### Cloze

**Prompt:** A sentence in the target language with the word replaced by a blank (`______`)
**Answer:** The missing word

Fill-in-the-blank cards reinforce vocabulary in context. The surrounding sentence provides meaning clues and helps with grammar pattern recognition.

---

### Listening Recognition

**Prompt:** Audio playback of the word being spoken
**Answer:** The translation in your native language

You hear the word spoken aloud and must recall its meaning without seeing the written form. Builds listening comprehension and trains your ear to the sounds of the language.

---

### Listening Production

**Prompt:** Audio playback of the word being spoken
**Answer:** The word itself (written in the target language)

You hear the word and must recall the written form. Bridges listening and writing skills.

---

### Minimal Pairs

**Prompt:** Two similar-sounding words or short phrases
**Answer:** The correct word for the given context

Trains you to distinguish sounds that are close together — particularly useful for tonal languages or languages with sounds that don't exist in your native language.

---

### Image Based

**Prompt:** A photo representing the word
**Answer:** The word and its translation

You see an image and must recall the vocabulary item. Leverages the picture superiority effect — visuals are remembered far more reliably than text alone. Image cards are generated automatically for nouns when an [Unsplash API key](/docs/unsplash/) is configured.

---

### Dialogue Completion

**Prompt:** A short dialogue with one line replaced by a blank
**Answer:** The missing line in the target language

A conversation between two speakers is shown, with the target word or phrase missing from one turn. You supply the correct line. Dialogue cards help you learn how words are actually used in conversation.

---

### Situation Response

**Prompt:** A real-world scenario description (e.g., *"You're at a restaurant and want to ask for the bill"*)
**Answer:** An appropriate phrase or sentence in the target language

Tests whether you can deploy vocabulary in a realistic context. Formality and tone hints are shown alongside the scenario.

---

### Tone Awareness

**Prompt:** A phrase or dialogue with a tone/formality indicator
**Answer:** An appropriate response that matches the required register

Helps you learn the social dimension of language — when to use formal vs. informal speech, polite vs. casual phrasing, and how context affects word choice.

---

## How Card Types Are Selected

Language Den automatically selects the appropriate card type based on your **learning stage** for each word, determined by the word's stability score from the [FSRS algorithm](/docs/spaced-repetition/).

| Learning stage | Stability | Card types used |
|----------------|-----------|-----------------|
| Introduction | < 7 days | Recognition, Image Based |
| Building | 7–30 days | Production, Cloze |
| Mastery | > 30 days | Listening Recognition, Listening Production |

For **phrases, idioms, and expressions**, the progression emphasises context over simple recall:

| Learning stage | Card types used |
|----------------|-----------------|
| Introduction | Recognition, Dialogue Completion |
| Building | Situation Response, Dialogue Completion, Production |
| Mastery | Tone Awareness, Situation Response, Production |

You can always add or remove individual flashcards for a word from the word detail screen. See [Generating Flashcards](/docs/generating-flashcards/) for how to create new ones.
