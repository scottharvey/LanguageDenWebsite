---
layout: docs
title: Troubleshooting
docs_section: troubleshooting
---

# Troubleshooting

<p class="docs-subtitle">
  Solutions to common issues with Language Den.
</p>

---

## AI Features Not Working

**Symptom:** AI word analysis or flashcard generation returns an error or does nothing.

1. **Check your API key** — go to Profile → API Keys and confirm your OpenRouter key is entered correctly. The key should start with `sk-or-`.
2. **Check your internet connection** — AI features require an active connection.
3. **Check your OpenRouter credits** — log in at [openrouter.ai](https://openrouter.ai) and confirm your account has a positive balance.
4. **Try a different model** — go to Settings → AI Model and switch to a different model. If one model is experiencing high load, another may work.

See [OpenRouter](/docs/open-router/) for setup instructions.

---

## Words Not Appearing in Review Sessions

**Symptom:** You have words in your collection but the Start Review button shows 0 cards due, or fewer than expected.

- **Words need flashcards** — words without flashcards cannot be reviewed. Use the **No Flashcards** filter in the Words tab to find them and generate flashcards. See [Word Triage](/docs/word-triage/).
- **Words aren't due yet** — spaced repetition schedules reviews at specific intervals. If a word was reviewed recently with a Good or Easy rating, it may not be due for days or weeks. Check the word detail screen to see its next review date.
- **Session cap reached** — each session shows up to 20 items. If more cards are due, tap **Continue Reviewing** after the first session ends.

---

## CSV Import Errors

| Error message | Fix |
|---------------|-----|
| "Could not read the file" | Open the file in the Files app to force an iCloud download, then retry |
| "Could not read the file encoding" | Re-save the file as UTF-8 in your spreadsheet app |
| "The file is empty" | Check the file was saved and isn't zero bytes |
| "No valid words found" | Ensure at least one row has a non-empty word column |

See [CSV Import](/docs/csv/) for column naming requirements and format examples.

---

## Anki Import Errors

| Error message | Fix |
|---------------|-----|
| "The file is not a valid Anki package" | Re-export from Anki desktop and transfer the file again |
| "No notes found in the Anki package" | Confirm the deck has cards in Anki before exporting |
| "Could not access the file" | Share the file directly to Language Den via the iOS share sheet |

See [Anki Import](/docs/anki/) for step-by-step instructions.

---

## iCloud Sync Not Working

**Symptom:** Words added on one device don't appear on another.

See [iCloud Sync](/docs/icloud-sync/) for a full guide. Quick checklist:

1. Go to **iOS Settings → [Your Name] → iCloud** and confirm **iCloud Drive** is enabled.
2. Go to **iOS Settings → [Your Name] → iCloud → Apps Using iCloud** and confirm Language Den is listed and enabled.
3. Make sure both devices are connected to the internet and signed into the same Apple ID.
4. Wait a few minutes — initial sync after adding words can take some time.

---

## Image Picker Not Appearing for Nouns

**Symptom:** You add a noun but no Unsplash image picker appears.

- **Check your Unsplash key** — go to Profile → API Keys and confirm an Unsplash Access Key is entered.
- **Check the part of speech** — image search only triggers for words classified as nouns. If the word was identified as a different part of speech, the picker is skipped.

See [Unsplash](/docs/unsplash/) for setup instructions.

---

## Quick Notes Audio Not Recording

**Symptom:** The record button in Quick Notes is greyed out or recording fails.

- Go to **iOS Settings → Privacy & Security → Microphone** and confirm Language Den has microphone access.
- If permission was previously denied, tap Language Den in the list and enable Microphone.

---

## Contact Support

If the steps above don't resolve your issue, please report it at the [Language Den GitHub issues page](https://github.com/anthropics/claude-code/issues) or use the feedback option in the app's Profile tab.
