# 📚 Serverless AI Paper Tracker

A lightweight, **privacy-focused** research manager that runs entirely in your browser. It uses Google's Gemini AI to automatically summarize papers, generate LaTeX citations, and organize your library—without requiring any software installation or backend server.

**[Live Demo](https://your-username.github.io/your-repo-name)** *(Replace with your actual link)*

## ✨ Features

* **Zero Install:** Runs as a single HTML file. Perfect for corporate/restricted environments where you cannot install software like Zotero.
* **AI-Powered Magic Fill:** Paste an abstract, and the tool uses Google Gemini to:
    * Extract the Title.
    * Generate a **BibTeX** citation for LaTeX.
    * Write a one-sentence summary.
    * Auto-categorize the paper into a folder structure (e.g., `Deep_Learning/Transformers`).
* **Local Privacy:** All data is stored in your browser's **Local Storage**. No external database is used.
* **Folder Hierarchy:** Visualize your library with a dynamic folder tree.
* **Read Status:** Toggle papers between "To Read" (📖) and "Finished" (✅).
* **Portable:** Backup and restore your entire library via JSON.

## 🚀 Quick Setup (GitHub Pages)

### 1. Host the Code
1.  Fork this repository (or create a new one).
2.  Ensure `index.html` is in the root folder.
3.  **Important:** Create an empty file named `.nojekyll` in the root folder. This prevents GitHub from breaking the deployment.

### 2. Enable Deployment
1.  Go to **Settings** > **Pages**.
2.  Under **Build and deployment**, select **Source: Deploy from a branch**.
3.  Select `main` (or `master`) as the branch and `/ (root)` as the folder.
4.  Click **Save**. Your site will be live in a few minutes.

### 3. Get Your Free API Key
To enable the AI features, you need a free Google Gemini API key.
1.  Go to [Google AI Studio](https://aistudio.google.com/).
2.  Log in with a personal Gmail account.
3.  Click **Get API Key** -> **Create API Key**.
4.  Copy the key (starts with `AIza...`).

---

## 📖 Usage Guide

### Configuring AI
1.  Open your deployed website.
2.  Click the **⚙️ AI Settings** button (top right).
3.  Paste your API Key.
4.  Click **🔄 Refresh Models** and select `gemini-1.5-flash` (or the latest available model).
5.  *Note: Your key is saved locally in your browser. It is never sent to this repository.*

### Adding a Paper
1.  **Copy the Abstract** of a paper you want to read.
2.  Paste it into the input box at the top.
3.  Click **✨ Magic Fill**.
4.  The AI will fill in the Title, Path, Summary, and BibTeX.
5.  Click **💾 Save Paper**.

### Exporting for LaTeX
1.  Click **⬇️ Export .bib**.
2.  A `library.bib` file will download containing all your saved citations.
3.  Upload this file to Overleaf or your LaTeX project.

### Backing Up Data
Since data lives in your browser cache, **if you clear your cache, you lose your data.**
* **To Backup:** Click **⬇️ Save Backup (JSON)** in the sidebar. Keep this file safe.
* **To Restore:** Click **⬆️ Load Backup** on a new computer or browser.

---

## 🛠 Troubleshooting

**Q: The AI says "Network Error" or hangs forever.**
* **A:** If you are on a corporate network (VPN/Office WiFi), the firewall might block requests to Google's Generative AI API. Try switching to a mobile hotspot or personal WiFi.

**Q: I get a 404 error when visiting the page.**
* **A:** Ensure you added the `.nojekyll` file to your repository. This tells GitHub to treat the repo as raw HTML.

**Q: The BibTeX field is empty.**
* **A:** Sometimes the AI gets shy if it can't find an author. The tool is designed to fallback to "Unknown" authors
