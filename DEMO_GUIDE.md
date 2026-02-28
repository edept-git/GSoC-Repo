# Demo Guide: Student Activity Demo 🎤
organized by **edept**

This guide explains how to demo this activity to your students and what you should expect from them.

## 1. Preparation (Before the Class)
1.  **Push to GitHub**: Push these files to a public repository on your GitHub account (e.g., `github.com/edept/gsoc-training`).
2.  **Verify Access**: Ensure students can open the repository link on their phones.
3.  **Local Check**: Keep a copy of `INSTRUCTOR_GUIDE.md` open for yourself (it's hidden in your local files and `.gitignore`).

## 2. The Demo (5-10 Minutes)
*   **Step 1: Introduction**: Tell students, "Today, we're going to practice being an Open Source Contributor. Every project starts with finding something to fix."
*   **Step 2: Open the Page**: Show them the landing page (`index.html`). 
    *   *Tip: Point out the big 'Welcom' typo on the screen but don't tell them it's a bug yet!*
*   **Step 3: Define the Task**: Read the 4 instructions aloud:
    1. Open the repo on your phone.
    2. Explore the code.
    3. Look for fixes.
    4. Write it down.
*   **Step 4: Live Example**:
    *   Find the footer typo "Handook".
    *   Show them how to write it down:
        *   **Repo Name**: gsoc-training
        *   **Issue #**: 1
        *   **What needs fixing**: Typo in footer, says 'Handook' instead of 'Handbook'.

## 3. Student Activity (15-20 Minutes)
*   Let students explore.
*   Encourage them to look at `style.css` (for design bugs) and `app.js` (for logic bugs).
*   **The 'Aha!' Moment**: When a student finds the invisible text (accessibility issue) or the broken GitHub link, celebrate it!

*   Review the findings using your `INSTRUCTOR_GUIDE.md`.
*   **Step 5: The Contribution Workflow Demo (NEW)**:
    1.  **Forking**: Show them the "Fork" button on the top right of the GitHub UI. Explain: "This creates your own personal copy of the project."
    2.  **Cloning**: Show them the "Code" button and how to copy the HTTPS link. Run `git clone <your-fork-url>` in your terminal.
    3.  **Applying a Fix**: Open `index.html` in your editor and fix the typo you found earlier (e.g., change "Welcom" to "Welcome").
    4.  **Committing & Pushing**:
        *   `git add .`
        *   `git commit -m "fix(typo): corrected Welcome message in hero section"`
        *   `git push origin main`
    5.  **Opening a PR**: Go back to your fork on GitHub. Show them the "Compare & pull request" button. Explain: "This is how you ask the project owners to accept your work."
    6.  **Reviewing the PR**: Show them what the PR looks like from the main repository's perspective. Explain: "The owner can now see exactly what changed!"

## 4. Closing & Recap
*   Review the findings using your `INSTRUCTOR_GUIDE.md`.
*   Emphasize that they have just walked through the exact same flow used by professional developers at Google, Meta, and Microsoft.

---
**Good luck with your demo! Let them know that even the smallest typo fix is a valid contribution to Open Source.**
