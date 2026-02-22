---
layout: docs
title: Unsplash
docs_section: unsplash
description: "Set up your Unsplash API key to automatically find images for noun flashcards in Language Den — no manual searching required."
---

# Unsplash

<p class="docs-subtitle">
  Language Den integrates with Unsplash to automatically find images for noun flashcards — no manual searching required.
</p>

---

## What Is Unsplash?

[Unsplash](https://unsplash.com) is a platform with a large library of freely licensed photographs. Language Den uses the Unsplash API to search for images that match nouns you're learning, so you can attach a visual to any noun flashcard.

---

## Getting an API Key

1. Go to [unsplash.com/developers](https://unsplash.com/developers) and sign up for a free account
2. Click **New Application**
3. Accept the terms and fill in the application details (use "Language Den" as the name; "Personal vocabulary learning" as the description)
4. Copy the **Access Key** from your application dashboard

Unsplash's free tier allows up to 50 requests per hour, which is more than sufficient for typical vocabulary study.

---

## Adding Your Key to Language Den

1. Open the **Profile** tab in Language Den
2. Tap **API Keys**
3. Paste your Unsplash Access Key into the **Unsplash API Key** field
4. Tap **Save**

Your key is stored in the iOS Keychain.

---

## How It Works

When you add a **noun** (either via AI mode or manual mode), Language Den automatically searches Unsplash for images matching the word's translation. If results are found, an image picker sheet appears showing up to 20 photos.

- Tap a photo to add it as an Image Based flashcard
- Tap **Skip** if none of the images are suitable

Selected images are downloaded, resized (max 800 px on the longest side), and stored directly in the flashcard — no internet connection is needed to view them during review.

<div class="docs-callout docs-callout--info">
  <div class="docs-callout-title">Info</div>
  <p>Image search only triggers for nouns. Verbs, adjectives, and other parts of speech are skipped. If no Unsplash key is configured, the image picker is not shown.</p>
</div>
