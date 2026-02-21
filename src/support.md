---
layout: page
title: Support
---

Need help with Language Den? You're in the right place.

**Email:** [hey@languageden.com](mailto:hey@languageden.com)

We aim to respond within 1–2 business days.

---

## Frequently Asked Questions

### Getting started

**How do I add my first word?**
Tap the **+** button on the Sources or Words screen to add a word manually. You can also import existing vocabulary from an Anki deck (.apkg file) or a CSV file via the Import screen.

**Do I need an account?**
No account is required. Language Den uses iCloud to sync your data across devices, which is handled automatically through your existing Apple ID.

**Which languages are supported?**
Language Den supports 55+ languages including Spanish, French, Japanese, Korean, Mandarin, Arabic, Thai, German, and many more. You select your target language during onboarding and can change it in Settings.

---

### AI features

**What is OpenRouter and why do I need an API key?**
OpenRouter is an AI API gateway that gives Language Den access to large language models. These models power automatic flashcard generation — creating definitions, example sentences, and multiple card types for your words. You need to create an account at [openrouter.ai](https://openrouter.ai) and add funds to use this feature.

**Is the AI feature required?**
No. You can use Language Den fully without an API key — you can create flashcards manually and use all other features. The AI feature is an optional enhancement.

**What is the Unsplash API key for?**
Unsplash provides access to a library of high-quality photos. With an Unsplash API key, you can search for images to attach to flashcards. You can get a free API key at [unsplash.com/developers](https://unsplash.com/developers).

---

### Permissions

**Why does Language Den need microphone access?**
The microphone is used to record audio notes in Quick Notes. Audio is stored on your device and synced through your personal iCloud account — it is never sent to our servers. You can revoke microphone access at any time in Settings → Privacy & Security → Microphone.

**Why does Language Den need speech recognition access?**
Speech recognition is used to transcribe spoken Quick Notes into text. Transcription happens entirely on-device using Apple's built-in framework — no audio is sent to us. You can revoke this permission at any time in Settings → Privacy & Security → Speech Recognition.

**Why does Language Den need photo library access?**
Photo library access is used to attach images to flashcards. Only the specific images you select are saved — we do not access or scan your full library. You can revoke this permission at any time in Settings → Privacy & Security → Photos.

---

### Importing

**What Anki formats are supported?**
Language Den imports .apkg files (Anki package files). Export your Anki deck as an .apkg file and use the Import option in the app.

**What CSV format does the app expect?**
The app accepts CSV files with at minimum a word column and a translation column. You can map columns during the import process.

---

### Data and sync

**Where is my data stored?**
Your data is stored on your device and synced to your personal iCloud account using CloudKit. We have no access to your data.

**How do I transfer my data to a new device?**
Sign in to the same iCloud account on your new device and install Language Den. Your data will sync automatically.

**How do I delete all my data?**
Delete the app from your device. To also remove data from iCloud, go to iOS Settings → Apple Account → iCloud → Manage Account Storage → Language Den → Delete Data.

---

### Spaced repetition

**What algorithm does Language Den use?**
Language Den uses [FSRS](https://github.com/open-spaced-repetition/fsrs4anki) (Free Spaced Repetition Scheduler), an open-source algorithm that has been shown to outperform the older SM-2 algorithm used by traditional Anki. It adapts your review intervals based on your actual performance.

**What do the review ratings mean?**
- **Again** — you forgot the word; it will be shown again soon
- **Hard** — you remembered, but it was difficult
- **Good** — you remembered correctly with some effort
- **Easy** — you remembered effortlessly; the next interval will be longer

---

## Contact

If your question isn't answered above, email us at [hey@languageden.com](mailto:hey@languageden.com).
