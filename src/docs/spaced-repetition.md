---
layout: docs
title: Spaced Repetition
docs_section: spaced-repetition
---

# Spaced Repetition

<p class="docs-subtitle">
  How Language Den schedules reviews to maximise long-term retention with minimum study time.
</p>

## What Is Spaced Repetition?

Spaced repetition is a study technique that schedules reviews at increasing intervals over time. Instead of reviewing everything every day, you review a word just before you're about to forget it. Each successful recall pushes the next review further into the future, so words you know well are shown less and less often while words you're struggling with stay frequent.

The result is a highly efficient study schedule: you spend most of your time on the words that need it, and almost no time on words you already know well.

---

## The FSRS Algorithm

Language Den uses **FSRS** (Free Spaced Repetition Scheduler), a modern open-source algorithm that tracks two parameters for each word:

- **Stability** — how long you can go without forgetting the word. A stability of 30 means there's roughly a 90% chance you'll still remember the word in 30 days.
- **Difficulty** — how hard the word is for you to remember. The algorithm raises difficulty when you press Again and lowers it on Easy ratings.

After each review, FSRS uses your rating to update both values and calculate the next review date.

---

## Word States

Every word moves through four states as you study it:

| State | Meaning |
|-------|---------|
| **New** | Never reviewed |
| **Learning** | Recently introduced; still in short-interval repetitions |
| **Review** | Graduated from learning; on longer spaced intervals |
| **Relearning** | Previously in Review but rated Again; restarting with shorter intervals |

---

## How Ratings Affect Scheduling

At the end of each card you choose a rating. The rating directly affects the next interval:

| Rating | Effect |
|--------|--------|
| **Again** | Resets the card; it re-enters the session immediately and difficulty increases |
| **Hard** | Short interval; stability grows slowly |
| **Good** | Normal interval; stability grows as expected |
| **Easy** | Longer interval; stability grows faster and difficulty decreases |

The interval previews shown on each rating button are calculated in real time based on your current stability and difficulty values.

---

## How the Algorithm Adapts

FSRS adapts to your individual memory. If you consistently rate a word Easy, its stability grows faster than average. If you keep pressing Again, the word's difficulty rises and intervals stay shorter. Over time, the schedule reflects your actual memory patterns rather than a fixed progression.

---

## Statistics

You can track your retention and learning progress on the Home tab. The **Mastery Breakdown** shows how many of your words are in each state, and the **Weekly Progress** chart shows how many unique words you've reviewed each day. See [Statistics](/docs/statistics/) for details.
