# Blog Writing Workflow

## Git Repository
- **Repo:** /home/joe/.openclaw/workspace/LanguageDenWebsite
- **Branch Strategy:** Feature branches for each article
- **Posts Location:** src/_posts/
- **Naming Convention:** YYYY-MM-DD-article-slug.md

## Frontmatter Template
```yaml
---
layout: post
title: "Article Title"
date: YYYY-MM-DD
draft: true  # Set to false when ready to publish
categories: ["category"]
description: "SEO meta description"
---
```

## Categories to Use
- announcements
- memory-science
- study-systems
- tutorials
- philosophy
- comparisons

## Writing Schedule
- **Monday Night:** Research & present ideas in article-ideas.md
- **Tuesday Night:** Write first approved article
- **Thursday Night:** Write second approved article
- **Weekend:** Polish based on feedback

## Git Commands Reference
```bash
# Create new article branch
cd /home/joe/.openclaw/workspace/LanguageDenWebsite
git checkout -b article/article-name

# Save work
git add src/_posts/YYYY-MM-DD-article-name.md
git commit -m "Draft: Article Title"
git push -u origin article/article-name

# After approval, you can merge
git checkout main
git pull
git merge article/article-name
git push
```

## Style Notes
- First person plural ("we") for company perspective
- Calm, structured tone
- No urgency or hype
- Focus on education and value
- Natural mentions of Language Den features