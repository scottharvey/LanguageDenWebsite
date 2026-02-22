---
layout: docs
title: iCloud Sync
docs_section: icloud-sync
---

# iCloud Sync

<p class="docs-subtitle">
  Keep your vocabulary, flashcards, and review history in sync across all your Apple devices.
</p>

---

## How It Works

Language Den uses Apple's CloudKit to automatically sync your data in the background. There is no manual sync button — any change you make (adding a word, completing a review, editing a flashcard) is pushed to iCloud and pulled down on your other devices automatically.

Sync is triggered by push notifications from Apple's servers, so both devices need an internet connection for changes to propagate. The sync typically completes within a few seconds to a few minutes depending on connection quality and the amount of data being transferred.

---

## What Gets Synced

Everything in Language Den is synced across devices:

| Data | Synced |
|------|--------|
| Words and their metadata | Yes |
| Flashcards | Yes |
| Review history and ratings | Yes |
| Spaced repetition schedules | Yes |
| Word Sources and Sections | Yes |
| Quick Notes (text and audio) | Yes |
| Statistics and streaks | Yes |

Your API keys (OpenRouter and Unsplash) are stored in the iOS Keychain and are **not** synced — you need to enter them separately on each device.

---

## Requirements

For sync to work:

1. Both devices must be signed into the **same Apple ID**.
2. **iCloud Drive** must be enabled — go to **iOS Settings → [Your Name] → iCloud** and confirm iCloud Drive is on.
3. Language Den must be enabled in iCloud — go to **iOS Settings → [Your Name] → iCloud → Apps Using iCloud** and confirm Language Den is listed and turned on.
4. Both devices need an active internet connection.

---

## Checking Sync Status

Open the **Profile** tab in Language Den to see your iCloud connection status. The app shows whether it is connected to iCloud, which Apple ID is active, and any sync errors that have occurred.

---

## Conflict Resolution

If you edit the same word on two devices while offline, the most recent change wins when both devices reconnect. Language Den does not merge conflicting changes — one version of the word will overwrite the other.

To avoid conflicts, avoid editing the same words on multiple devices at the same time when offline.

---

## Troubleshooting Sync

**Words added on one device don't appear on another:**

1. Check that both devices meet the requirements above.
2. Open the Profile tab and confirm the iCloud status shows as connected.
3. Pull down to refresh the Words tab on the receiving device.
4. Wait a few minutes — large imports (hundreds of words) can take longer to sync.
5. If sync is still not working, try toggling Language Den off and back on in **iOS Settings → [Your Name] → iCloud → Apps Using iCloud**.

**Sync stopped working after an iOS update:**

Go to **iOS Settings → [Your Name] → iCloud → Apps Using iCloud**, find Language Den, and confirm it is still enabled. iOS updates occasionally reset per-app iCloud permissions.

---

## Deleting Data

Deleting a word, flashcard, or note on one device will delete it on all synced devices. This cannot be undone. If you want to stop reviewing a word without losing it, use **Suspend** instead of Delete.
