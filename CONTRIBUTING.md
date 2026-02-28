# 🤝 Contributing to GSoC Practice Repo

We're thrilled you're here! This repository is your playground for mastering the professional Open Source workflow.

## 🚢 The GSoC Workflow

To contribute, follow these professional steps (standard across many GSoC orgs):

### 1. Identify a Task
Check **[ISSUES.md](ISSUES.md)** or the GitHub Issues tab. Comment on the issue to let others know you're working on it.

### 2. Branching Strategy
Create a feature branch with a descriptive name:
```bash
# For a bug fix
git checkout -b fix/typo-in-header

# For a new feature
git checkout -b feat/dark-mode-toggle
```

### 3. Committing with Style
We follow [Conventional Commits](https://www.conventionalcommits.org/):
- `fix: correct typo in footer`
- `feat: add dark mode support`
- `docs: update readme with badges`

### 4. Advanced Git: Rebasing & Squashing
Organizations often require a clean history. If the main branch has moved forward:
```bash
git fetch origin
git rebase origin/main
```
If you have many small "work in progress" commits, **squash** them:
```bash
git rebase -i HEAD~n  # where n is the number of commits
```

### 5. Open a Pull Request
- Use our [PR Template](.github/PULL_REQUEST_TEMPLATE.md).
- Reference the issue number (e.g., `Fixes #1`).
- Wait for a "Maintainer" (you can act as one for practice!) to review.

---

## 🧪 Quality Standards
- **Linting:** Ensure no stray console logs or unused CSS.
- **Responsiveness:** Check your changes on mobile views.
- **Tone:** Keep discussions professional and constructive.

## 🆘 Need Help?
Check out the **[Code of Conduct](CODE_OF_CONDUCT.md)** or open a "Question" issue using the templates!
