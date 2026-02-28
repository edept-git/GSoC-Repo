# Master Demo Guide: Step-by-Step Training 🎓
organized by **edept**

This guide provides a detailed walkthrough for you to practice and then demo the **Fork → Clone → Fix → PR** workflow to your students.

---

## Phase 1: Preparation
Before you start the class, make sure you have:
1.  **Browser**: Logged into your GitHub account.
2.  **Terminal**: Git installed and configured (`git config --global user.name "Your Name"`).
3.  **Editor**: VS Code (or any text editor) open.
4.  **The Link**: The URL to your main training repository (e.g., `github.com/edept/gsoc-training`).

---

## Phase 2: The Forking Demo (GitHub UI)
**Teacher Script**: *"In open source, you usually don't have permission to edit the 'official' repository directly. So, first, we must create our own copy of the project. This is called **Forking**."*

1.  **Go to the Repo**: Navigate to the main project page on GitHub.
2.  **Click Fork**: Point to the **Fork** button (top-right corner).
3.  **Create**: Select your personal account.
4.  **Verify**: Show the screen refresh. Point to the top-left where it now says `YourUsername / gsoc-training` and below it: `"forked from edept/gsoc-training"`.

---

## Phase 3: The Cloning Demo (Local Setup)
**Teacher Script**: *"Now that we have our own copy on GitHub, we need to bring it onto our local computer so we can edit the files. This is called **Cloning**."*

1.  **Get the URL**: In your fork, click the green **<> Code** button and copy the HTTPS URL.
2.  **Open Terminal**: Open your terminal (PowerShell/CMD/Bash).
3.  **Run Command**:
    ```bash
    git clone [PASTE_URL_HERE]
    ```
4.  **Enter Folder**:
    ```bash
    cd gsoc-training
    ```
5.  **Open Editor**:
    ```bash
    code .
    ```

---

## Phase 4: The Fixing Demo (Coding)
**Teacher Script**: *"I've found a typo! Let's fix it. I'll change 'Welcom' to 'Welcome' in the landing page."*

1.  **Open index.html**: Find line 24.
2.  **Apply Fix**: Change `<h1>Welcom to Open Source</h1>` to `<h1>Welcome to Open Source</h1>`.
3.  **Save**: (Ctrl + S).

---

## Phase 5: The Publishing Demo (Git Commands)
**Teacher Script**: *"We've fixed the bug locally, but now we need to send these changes back to our GitHub account."*

1.  **Stage Changes**:
    ```bash
    git add .
    ```
2.  **Commit**: (Explain that the message should be clear).
    ```bash
    git commit -m "fix(typo): corrected Welcome in hero section"
    ```
3.  **Push**:
    ```bash
    git push origin main
    ```

---

## Phase 6: The Pull Request Demo (The Final Step)
**Teacher Script**: *"Now for the most important part. We need to ask the original project owner (edept) to accept our fix. This is a **Pull Request**."*

1.  **Go to GitHub**: Refresh your fork's page.
2.  **Click Compare & PR**: A yellow banner usually appears saying "This branch is 1 commit ahead...". Click **Compare & pull request**.
3.  **Write Description**: Enter a title: `fix: typo in hero header`.
4.  **Create**: Click the green **Create pull request** button.
5.  **The Celebration**: Show the PR screen. Point out that the code is now waiting for a maintainer to review it.

---

## Common Student Pitfalls & How to Help
- **"I don't see the Fork button"**: Ensure they are logged into GitHub.
- **"Git command not found"**: They might not have Git installed on their system.
- **"Authentication Failed"**: GitHub now requires a **Personal Access Token (PAT)** or SSH instead of passwords for the terminal. *Tip: Have them use [GitHub Desktop](https://desktop.github.com/) if the terminal is too hard for their first day.*

---
**You are now ready to lead the class! Practice this once yourself before the students arrive.**
