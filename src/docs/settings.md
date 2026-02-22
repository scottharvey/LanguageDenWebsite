---
layout: docs
title: Settings & Preferences
docs_section: settings
---

# Settings & Preferences

<p class="docs-subtitle">
  Customise Language Den to match your study style. This page covers every setting available in the app, organised by section.
</p>

## Accessing Settings

Open the Settings tab by tapping the **gear icon** in the bottom-right of the app. Settings are grouped into the following sections:

1. Account
2. Languages
3. Study Sessions
4. Notifications
5. AI
6. Appearance
7. Import / Export
8. Advanced

---

## Account

| Setting | Description |
|---|---|
| Name | The display name shown on your profile |
| Email | Your account email address |
| Change Password | Update your password |
| Sign Out | Sign out of your account on this device |
| Delete Account | Permanently delete your account and all data |

<div class="docs-callout docs-callout--warning">
  <div class="docs-callout-title">Warning</div>
  <p>Deleting your account is permanent and irreversible. All word lists, progress data, and settings will be erased. Export your data first from Import / Export → Export All Data.</p>
</div>

---

## Languages

Configure the languages used across the app.

| Setting | Options | Default |
|---|---|---|
| Native Language | Any supported language | System locale |
| Default Target Language | Any supported language | — |
| Show Romanisation | Always / During Learning / Never | During Learning |
| Show Furigana (Japanese) | Always / During Learning / Never | During Learning |

Lorem ipsum dolor sit amet, consectetur adipiscing elit. If you study multiple target languages, you can switch between them from the Home tab using the language picker in the top-left corner.

---

## Study Sessions

These settings control how study sessions are structured and how the spaced repetition algorithm behaves.

### Session Settings

| Setting | Description | Default |
|---|---|---|
| New Words Per Session | Maximum new words introduced per session | 10 |
| Review Limit | Maximum review cards per session | 100 |
| Session Order | New first / Reviews first / Mixed | Mixed |
| Auto-advance | Automatically move to next card after rating | Off |

### SRS Algorithm

| Setting | Description | Default |
|---|---|---|
| Starting Interval | First review interval for new words (minutes) | 10 |
| Easy Bonus | Multiplier applied to Easy ratings | 1.3× |
| Interval Modifier | Global multiplier for all intervals | 1.0× |
| Maximum Interval | Cap on the longest possible interval (days) | 365 |

<div class="docs-callout docs-callout--info">
  <div class="docs-callout-title">Info</div>
  <p>Increasing the Interval Modifier above 1.0 means you'll see cards less frequently. This can be useful if you find the default schedule too intense, but may slightly reduce long-term retention.</p>
</div>

### Card Types

Language Den supports several review modes. You can enable or disable each type:

- **Recognition** — See the target word, recall the definition (default: on)
- **Production** — See the definition, type the target word (default: on)
- **Listening** — Hear the audio, type the word (default: off)
- **Multiple Choice** — Select the correct definition from four options (default: off)

---

## Notifications

| Setting | Description | Default |
|---|---|---|
| Daily Reminder | A notification when you haven't studied yet today | On |
| Reminder Time | Time of day for the daily reminder | 8:00 PM |
| Streak Alerts | Notification if your streak is at risk | On |
| Weekly Summary | A summary of your study activity each week | Off |

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Notification permissions are managed by iOS — you can adjust them at any time in **iOS Settings → Language Den → Notifications**.

---

## AI

| Setting | Description | Default |
|---|---|---|
| AI Lookup | Enable AI-powered definitions and examples | On |
| Example Difficulty | Beginner / Intermediate / Advanced / Native | Intermediate |
| Pronunciation Voice | System / Natural / Slow | Natural |
| Auto-generate on Save | Automatically run AI Lookup when saving a new word | Off |
| Conversation Practice (Beta) | Enable the Conversation Practice feature | Off |

---

## Appearance

| Setting | Options | Default |
|---|---|---|
| Theme | System / Light / Dark | System |
| Card Font Size | Small / Medium / Large | Medium |
| Reduce Motion | Minimise card flip and transition animations | Off |
| Haptic Feedback | Vibration on card ratings | On |

---

## Import / Export

| Action | Description |
|---|---|
| Import CSV | Import words from a comma-separated file |
| Export List | Export a single list as a CSV file |
| Export All Data | Export all lists and progress as a ZIP archive |
| Import from Anki | Import an Anki deck (.apkg file) |

See [CSV Import](/docs/csv/) and [Anki Import](/docs/anki/) for format details and step-by-step instructions.

---

## Advanced

These settings are intended for experienced users. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

| Setting | Description | Default |
|---|---|---|
| Debug Mode | Show internal SRS data on each card | Off |
| Force Dark Status Bar | Always show the iOS status bar in dark style | Off |
| Reset Onboarding | Replay the first-launch onboarding flow | — |
| Clear Cache | Delete locally cached AI results and images | — |

<div class="docs-callout">
  <div class="docs-callout-title">Tip</div>
  <p>If the app feels sluggish or you're running low on storage, try <strong>Clear Cache</strong>. Cached content will be re-downloaded the next time you look up or review those words.</p>
</div>
