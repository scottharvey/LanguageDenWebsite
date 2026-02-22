---
layout: docs
title: OpenRouter
docs_section: open-router
description: "Set up your OpenRouter API key to enable AI-powered flashcard generation in Language Den. Supports Claude, GPT-4, and other leading language models."
---

# OpenRouter

<p class="docs-subtitle">
  Language Den uses OpenRouter to access AI models for word analysis and flashcard generation. You need your own API key to enable AI features.
</p>

---

## What Is OpenRouter?

[OpenRouter](https://openrouter.ai) is a service that provides unified API access to a wide range of AI models from providers including Anthropic, OpenAI, and others. Language Den uses OpenRouter so you can choose which model powers your AI features and pay only for what you use — there is no Language Den subscription or AI usage fee.

---

## Getting an API Key

1. Go to [openrouter.ai](https://openrouter.ai) and create a free account
2. Navigate to **Keys** in your account dashboard
3. Click **Create Key** and give it a name (e.g. "Language Den")
4. Copy the key — it starts with `sk-or-`
5. Add credits to your account (a small amount goes a long way for vocabulary learning)

<div class="docs-callout docs-callout--info">
  <div class="docs-callout-title">Info</div>
  <p>OpenRouter charges per API call based on the model you choose. For typical vocabulary learning usage — adding a few words per day — costs are very low, often less than a cent per word depending on the model.</p>
</div>

---

## Adding Your Key to Language Den

1. Open the **Profile** tab in Language Den (bottom-right)
2. Tap **API Keys**
3. Paste your OpenRouter key into the **OpenRouter API Key** field
4. Tap **Save**

Your key is stored securely in the iOS Keychain and never leaves your device except when making API calls to OpenRouter.

---

## Choosing a Model

Language Den supports four models via OpenRouter:

| Model | Speed | Quality | Best for |
|-------|-------|---------|----------|
| **Claude 3 Haiku** *(default)* | Fast | Good | Everyday vocabulary additions |
| **Claude 3.5 Sonnet** | Moderate | Excellent | Complex or nuanced vocabulary |
| **GPT-4o Mini** | Fast | Good | Alternative to Haiku |
| **GPT-4o** | Moderate | Excellent | Alternative to Sonnet |

To change model, go to **Settings → AI Model** and select from the list.

<div class="docs-callout">
  <div class="docs-callout-title">Tip</div>
  <p>Claude 3 Haiku and GPT-4o Mini are the most cost-effective choices for routine vocabulary work. Switch to a more capable model when you need higher-quality flashcards for difficult or nuanced words.</p>
</div>

---

## What Requires an API Key?

| Feature | Requires key |
|---------|-------------|
| AI word analysis (meaning detection) | Yes |
| AI flashcard generation | Yes |
| Bulk flashcard generation | Yes |
| Manual word entry | No |
| CSV / Anki import | No |
| [Unsplash images](/docs/unsplash/) | Separate key |

The app is fully functional for manual entry and import without an OpenRouter key.
