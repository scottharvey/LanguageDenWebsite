---
layout: post
title: "What Happens When You Tap 'Again' on a Flashcard"
date: 2026-02-28
draft: true
categories: ["memory-science", "study-systems"]
description: "Every time you rate a flashcard, an algorithm quietly updates your memory model. Here's exactly what happens under the hood when you tap Again, Hard, Good, or Easy."
---

You're reviewing flashcards. A word pops up. Your mind goes blank. You tap **Again**.

It takes maybe half a second. But in that half second, Language Den is doing something interesting — recalculating when it thinks you'll forget that word next, based on what it now knows about how your memory works.

Here's what's actually happening.

## Memory as a formula

The algorithm Language Den uses is called FSRS — Free Spaced Repetition Scheduler. At its core, FSRS tracks two things about every card you study:

**Stability (S):** How long can you go before you have a ~90% chance of still remembering this word? A stability of 10 means that after 10 days, you'd probably still recall it. A stability of 100 means you'd likely remember it after more than three months.

**Difficulty (D):** How hard is this particular card for you? Difficulty ranges from 1 (effortless) to 10 (a real struggle). It starts as a guess based on the algorithm's defaults, then gets refined over time based on your actual responses.

Every card you own has both of these values, quietly updating in the background every time you review.

## What "Again" actually does

When you tap **Again**, you're telling the algorithm: *I couldn't recall this at all.*

Here's what happens:

1. **Your stability drops.** FSRS treats a failed recall as evidence that this word wasn't as stable as it thought. The stability value gets reset — not to zero, but to a small number that reflects a "lapse": a word you once knew but have temporarily lost. For most cards, this means your next review gets scheduled within a day or two.

2. **Your difficulty increases.** FSRS nudges the difficulty up, since you failed. It's a modest nudge — the algorithm knows one bad day doesn't make a word permanently hard. But it's recorded, and it'll influence future scheduling.

3. **The interval shrinks.** Your next review gets moved much closer. The exact timing depends on your current stability, but it's usually 1–2 days for a card you're relearning.

The goal isn't to punish you. It's to show you the card again *before* the memory fades completely — which actually makes it easier to rebuild than if you waited weeks and forgot even more.

## What the other ratings do

For completeness, here's how each rating affects your card:

**Hard** — You got it, but it took effort. FSRS increases difficulty slightly, and increases stability less than a smooth recall would. Your next review comes sooner than it would have if you'd tapped Good.

**Good** — The normal case. You recalled it with comfortable effort. FSRS increases your stability significantly — roughly multiplying it by a factor that depends on how difficult the card is. A Good answer on a stable card might push your next review months into the future.

**Easy** — You barely had to think. FSRS gives your stability a bigger boost and decreases difficulty. If you keep rating cards Easy, you'll see them very infrequently.

## The feedback loop

Here's the part that makes FSRS different from older algorithms: it's learning your personal forgetting curve.

Every rating you give is a data point. Over time, FSRS builds a model of how *you* forget — not the average person, not the Ebbinghaus curve from an 1880s study. You.

That's why the same word might show up twice a week for one person and twice a month for another. Same word, same app, different memory patterns — and FSRS accounts for both.

## Why this matters when you tap Again

Failing a card can feel discouraging. But from the algorithm's perspective, it's actually valuable information.

When you tap Again, you're not setting yourself back — you're giving FSRS the data it needs to schedule that card at a frequency that actually helps you remember it long-term. The algorithm will bring it back soon, while your partial memory of it is still warm, and show it to you a few times in quick succession until it sticks.

That's the counterintuitive truth about spaced repetition: struggling with a card and seeing it again tomorrow is more effective than never struggling and not seeing it for three months.

## The upshot

Next time you tap Again, picture what's happening:

- Stability: reset to a small number (you'll see it again soon)
- Difficulty: nudged up slightly (the algorithm takes note)
- Next review: scheduled for 1–2 days out

And then the algorithm gets back to work, quietly adjusting your memory model — card by card, rating by rating — until that word is genuinely, durably yours.

---

*Language Den uses FSRS to schedule all your flashcard reviews. You never have to think about the algorithm — but if you're curious what's happening under the hood, now you know.*
