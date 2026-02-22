---
layout: docs
title: Privacy & Data
docs_section: privacy-data
---

# Privacy & Data

<p class="docs-subtitle">
  How Language Den handles your data, what is stored where, and how to delete everything.
</p>

## Where Your Data Lives

All vocabulary, flashcards, review history, and settings are stored **on your device** using SwiftData and synced to your personal iCloud account if iCloud Drive is enabled. Language Den has no servers of its own — your data never passes through Language Den infrastructure.

---

## What Is Sent to Third-Party Services

Language Den uses two optional third-party APIs. Nothing is sent to either unless you have configured the relevant API key.

| Service | What is sent | When |
|---------|-------------|------|
| **OpenRouter** (AI) | The word text, any metadata you've added, and your language settings | When you add a word with AI mode on, or generate flashcards |
| **Unsplash** | A search query (the word's translation) | When you add a noun and the image picker is triggered |

No account information, device identifiers, or personal data are included in these requests.

---

## What Is Never Collected

- No analytics or usage tracking
- No crash reporting SDKs
- No advertising identifiers
- No usage logs on Language Den servers

---

## API Keys

Your OpenRouter and Unsplash API keys are stored in the **iOS Keychain** — the secure, encrypted storage provided by the operating system. They are never stored in plaintext and never sent anywhere except as authentication headers in API requests to the respective services.

---

## Microphone Permission

The [Quick Notes](/docs/quick-notes/) audio recording feature requires microphone access. Language Den will prompt for permission the first time you use audio capture. Recorded audio is stored on-device and synced via iCloud — it is not transmitted to any server.

If you want to revoke microphone access, go to **iOS Settings → Privacy & Security → Microphone → Language Den**.

---

## Deleting Your Data

**To delete all Language Den data:**

1. Delete the app from your device — this removes all on-device data
2. To also remove iCloud data, go to **iOS Settings → [Your Name] → iCloud → Manage Account Storage → Language Den** and delete the stored data there

**To delete individual words**, swipe left on a word in the Words tab or open the word detail screen and use the delete option. Deleting a word also deletes all its flashcards and review history.

---

## iCloud Sync

Language Den uses iCloud to sync your vocabulary and review progress across your Apple devices. Sync requires iCloud Drive to be enabled in iOS Settings. If you share an iCloud account with another person, note that Language Den data is included in that shared iCloud storage.
