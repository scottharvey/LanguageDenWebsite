---
layout: post
title: "How to Import Your Anki Decks in 60 Seconds"
date: 2026-02-27
draft: true
categories: ["tutorials"]
description: "Article proposal - awaiting approval"
---

## Article Proposal

**Content Pillar:** App Philosophy & Product Decisions  
**Target Keywords:** import anki to language den, anki alternative iOS, anki deck transfer  
**Why now:** Direct value for our highest-intent audience (current Anki users)  
**Impact:** High conversion potential - solves immediate need for switchers  

## Proposed Angle

Step-by-step guide based on the actual iOS implementation. Address real concerns Anki users have about switching. Show respect for their existing work.

## Detailed Outline

### 1. Your Anki Decks Represent Years of Work
- Acknowledge the investment
- "We get it. Switching feels risky."
- Promise: everything transfers, including media

### 2. Before You Start (Prep Work)
- Export from Anki desktop (File → Export)
- Choose .apkg format with media included
- Note: Language Den handles the ZIP extraction automatically

### 3. The Import Process (Based on Actual App Flow)
- Open Language Den
- Tap "Import" button
- Choose "Import from Anki" option
- iOS document picker opens - select your .apkg file
- **If multiple models**: Select which Anki model to import
- **Field mapping screen**: Map your Anki fields to Language Den fields
  - Front → Word
  - Back → Definition
  - Custom fields supported
- Tap "Import" to start
- Progress indicator shows import status
- Success screen shows imported/skipped counts

### 4. What Transfers Over (Verified from Code)
- ✅ All cards and notes
- ✅ Images and audio files
- ✅ Custom fields (via mapping)
- ✅ Tags → Categories conversion
- ✅ Card relationships preserved
- ✅ Duplicate detection (won't reimport existing words)
- ⚠️ Review history (starts fresh with FSRS algorithm)

### 5. Additional Import Options
- **CSV Import**: For spreadsheet users
- **Plain Text**: Simple word lists (one per line)
- All accessible from the same Import menu

### 6. Common Questions Answered
- "Will my intervals reset?" (Yes - FSRS will optimize them better)
- "Can I import multiple decks?" (Yes, one at a time)
- "What about shared decks?" (Fully supported)
- "Large decks?" (Tested with 1000+ card Thai deck)
- "Can I go back to Anki?" (Export feature coming soon)

### 7. After Import: What's Different
- No deck hierarchy - flat organization with categories
- Cleaner review interface
- FSRS adapts to your memory patterns
- iCloud sync automatic (no AnkiWeb needed)

### 8. For Power Users
- Field mapping for complex note types
- Category management for organization
- Offline-first architecture
- Privacy: no account, no tracking

## Tone Notes
- Respectful of Anki and its users
- Technical enough for power users
- Clear enough for anyone
- Zero condescension

## SEO Strategy
- Target "how to" featured snippets
- Include schema markup for tutorial
- Video version could rank well too

## Update Notes

**Updated after iOS code review:**
- Accurate import flow based on AnkiImportView.swift
- Added field mapping step (discovered in code)
- Confirmed media support and duplicate detection
- Added CSV and plain text import options
- Verified with test files in repo (sample_thai.apkg)

---

**To approve:** Label this PR as "approved" and I'll write the full article.  
**To deny:** Close the PR.  
**To modify:** Comment with requested changes.